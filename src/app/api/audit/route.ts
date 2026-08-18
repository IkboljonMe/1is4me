import { google } from "googleapis";
import { NextResponse } from "next/server";
import { LANGS, type Lang } from "@/lib/content";
import { QUESTIONS } from "@/lib/questions";

// The Google client needs Node APIs, and each submission must hit Google live.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SHEET_TAB = process.env.GOOGLE_SHEET_TAB || "Audit Intake";

/** Header row: fixed metadata columns, then one column per question. */
const HEADERS = [
  "Timestamp",
  "Language",
  ...QUESTIONS.map((q) => `${q.n}. ${q.en.q}`),
];

type Payload = { lang?: string; answers?: Record<string, unknown> };

/** Sheets cells are strings; multi-select answers join into one cell. */
function toCell(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (value == null) return "";
  return String(value).slice(0, 4000);
}

/**
 * A leading apostrophe/=/+/- makes Sheets evaluate the cell as a formula.
 * Prefix those so submitted text is always stored as text.
 */
function sanitize(cell: string): string {
  return /^[=+\-@]/.test(cell) ? `'${cell}` : cell;
}

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!email || !rawKey || !spreadsheetId) return null;

  const auth = new google.auth.JWT({
    email,
    // Env vars keep the key on one line, so restore the real newlines.
    key: rawKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return { sheets: google.sheets({ version: "v4", auth }), spreadsheetId };
}

/** Writes the header row once, on the first submission into an empty sheet. */
async function ensureHeader(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
) {
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_TAB}!A1:B1`,
  });

  if (existing.data.values?.length) return;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${SHEET_TAB}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [HEADERS] },
  });
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lang: Lang = (LANGS as string[]).includes(String(body.lang))
    ? (body.lang as Lang)
    : "en";
  const answers = body.answers ?? {};

  // Server-side guard on the two fields we actually depend on.
  const name = toCell(answers.name).trim();
  const email = toCell(answers.email).trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Name and a valid email are required" },
      { status: 400 },
    );
  }

  const row = [
    new Date().toISOString(),
    lang,
    ...QUESTIONS.map((q) => sanitize(toCell(answers[q.key]))),
  ];

  const client = getSheetsClient();

  // Without credentials the form must not silently swallow submissions —
  // log the row so nothing is lost, and tell the caller it failed.
  if (!client) {
    console.error(
      "[audit] Google Sheets is not configured — set GOOGLE_SHEETS_ID, " +
        "GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY. Unsaved row:",
      JSON.stringify(row),
    );
    return NextResponse.json(
      { error: "Form storage is not configured" },
      { status: 503 },
    );
  }

  try {
    const { sheets, spreadsheetId } = client;
    await ensureHeader(sheets, spreadsheetId);
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[audit] Failed to append to Google Sheets:", err);
    console.error("[audit] Unsaved row:", JSON.stringify(row));
    return NextResponse.json({ error: "Could not save submission" }, { status: 502 });
  }
}
