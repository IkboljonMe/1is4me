# 1is4me — AI Growth Partner

Landing site + pre-audit questionnaire. Next.js 16 (App Router), Tailwind v4,
TypeScript. Form submissions land in a Google Sheet.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in the Google Sheets values
npm run dev                  # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Pages

| Route | What's there |
|---|---|
| `/` | Landing page — hero, the two philosophies, three gaps, three doors, four outcomes, process, team carousel, proof, CTA |
| `/audit-form` | The 20-question pre-audit questionnaire |
| `/api/audit` | POST endpoint that appends a submission row to the Google Sheet |

## Languages

EN (default), UZ, RU. The toggle lives in the header and the footer, and the
choice persists in `localStorage`.

All copy lives in two files — no strings are hardcoded in components:

- [`src/lib/content.ts`](src/lib/content.ts) — landing copy + the team roster
- [`src/lib/questions.ts`](src/lib/questions.ts) — the 20 questions
- [`src/lib/formCopy.ts`](src/lib/formCopy.ts) — form UI chrome

## Google Sheets setup

Every field is documented in [`.env.example`](.env.example). Short version:

1. Google Cloud Console → new project → enable the **Google Sheets API**.
2. Create a **service account**, add a **JSON key**, download it.
3. Copy `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
   `private_key` → `GOOGLE_PRIVATE_KEY` (keep the quotes, keep the `\n`).
4. Create the sheet, take its id from the URL, set `GOOGLE_SHEETS_ID`.
5. **Share the sheet with the service account email as Editor.** This is the
   step that's usually missed — without it the API returns 403.
6. Ensure a tab matching `GOOGLE_SHEET_TAB` exists. The header row is written
   automatically on the first submission.

If the credentials are missing the endpoint returns 503 and logs the full row
to the server console, so a submission is never silently dropped.

## Design system

Deep-green/black premium, taken from the brand's own Instagram creative:
cream ink `#f2efe4`, mint accent `#8fe39a`, deep green ground `#0a1a13`, plus a
fixed film-grain and vignette layer. Tokens are defined once in
[`src/app/globals.css`](src/app/globals.css) and exposed to Tailwind through
`@theme inline`.

## What still needs real data

These are marked in the UI with dashed amber placeholders so they can't ship
unnoticed. House rule from the blueprint: **empty is acceptable, invented is
not** — so nothing here is filled with samples.

- [ ] **Team** — real names, roles, experience and photos
      (`team` in [`src/lib/content.ts`](src/lib/content.ts))
- [ ] **Price signal per door** — each of the three doors shows a placeholder
- [ ] **Case studies** — three empty slots in the proof section. The `$7M+`
      figure is the brand's own published claim; nothing else is asserted.

Background and reasoning for all three live in [`docs/`](docs/).
