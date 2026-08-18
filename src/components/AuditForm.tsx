"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { content } from "@/lib/content";
import { formCopy } from "@/lib/formCopy";
import { CAT_COLORS, QUESTIONS, type Question } from "@/lib/questions";
import { useLang } from "./LangProvider";
import LangToggle from "./LangToggle";
import Wordmark from "./Wordmark";

/** One answer per question: free text, a single choice, or many choices. */
type Answers = Record<number, string | string[]>;

const isFilled = (v: string | string[] | undefined) =>
  Array.isArray(v) ? v.length > 0 : Boolean(v && v.trim().length > 0);

export default function AuditForm() {
  const { lang } = useLang();
  const t = formCopy[lang];

  const [answers, setAnswers] = useState<Answers>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);

  const answered = useMemo(
    () => QUESTIONS.filter((q) => isFilled(answers[q.n])).length,
    [answers],
  );
  const pct = Math.round((answered / QUESTIONS.length) * 100);

  const setText = (n: number, v: string) =>
    setAnswers((a) => ({ ...a, [n]: v }));

  const setRadio = (n: number, v: string) =>
    setAnswers((a) => ({ ...a, [n]: v }));

  const toggleCheckbox = (n: number, v: string) =>
    setAnswers((a) => {
      const cur = Array.isArray(a[n]) ? (a[n] as string[]) : [];
      return {
        ...a,
        [n]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v],
      };
    });

  const missing = (q: Question) => q.required && !isFilled(answers[q.n]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (QUESTIONS.some(missing)) {
      setShowErrors(true);
      setError(t.errorRequired);
      // Move the user to the first unanswered required question.
      const first = QUESTIONS.find(missing);
      if (first) {
        document
          .getElementById(`q-${first.n}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const email = String(answers[2] ?? "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowErrors(true);
      setError(t.errorEmail);
      document.getElementById("q-2")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          answers: Object.fromEntries(
            QUESTIONS.map((q) => [q.key, answers[q.n] ?? ""]),
          ),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("idle");
      setError(t.errorNetwork);
    }
  }

  if (status === "done") {
    return (
      <div className="layer mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-mint text-2xl font-bold text-[#0a1a13]">
          ✓
        </div>
        <h1 className="mt-8 text-3xl font-extrabold text-ink sm:text-4xl">
          {t.thanksTitle}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
          {t.thanksBody}
        </p>
        <Link
          href="/"
          className="mt-10 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink-soft transition hover:border-mint/60 hover:text-ink"
        >
          {t.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="layer mx-auto w-full max-w-3xl px-5 pb-28 sm:px-6">
      {/* ---------------------------------------------------------- header */}
      <header className="pt-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="1is4me — home">
            <Wordmark className="text-xl" />
          </Link>
          <LangToggle />
        </div>

        <h1
          className="mt-12 text-[clamp(2.2rem,7vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink"
          dangerouslySetInnerHTML={{ __html: t.heroTitle }}
        />
        <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
          {t.heroSub}
        </p>

        {/* Category legend — same colour key as the question cards. */}
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {(Object.keys(CAT_COLORS) as (keyof typeof CAT_COLORS)[]).map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: CAT_COLORS[cat] }}
              />
              <span className="text-[11px] text-ink-faint">{t.cats[cat]}</span>
            </div>
          ))}
        </div>
      </header>

      {/* -------------------------------------------------------- progress */}
      <div className="sticky top-0 z-20 -mx-5 mt-10 border-y border-line bg-[#0a1a13]/90 px-5 py-3 backdrop-blur-lg sm:-mx-6 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-mint transition-[width] duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="shrink-0 text-[11px] font-semibold tabular-nums text-ink-muted">
            {t.progressCount(answered, QUESTIONS.length)}
          </span>
        </div>
      </div>

      {/* ----------------------------------------------------------- form */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mt-10 space-y-4">
          {QUESTIONS.map((q) => {
            const copy = q[lang];
            const value = answers[q.n];
            const filled = isFilled(value);
            const invalid = showErrors && missing(q);

            return (
              <div
                key={q.n}
                id={`q-${q.n}`}
                style={{ ["--cat" as string]: CAT_COLORS[q.cat] }}
                className={`scroll-mt-24 rounded-2xl border bg-card p-6 transition-colors sm:p-7 ${
                  invalid
                    ? "border-[#c98f6a]"
                    : filled
                      ? "border-[var(--cat)]/45"
                      : "border-line hover:border-line-strong"
                }`}
              >
                <div className="flex gap-4">
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold transition-colors ${
                      filled ? "text-[#0a1a13]" : "text-ink-faint"
                    }`}
                    style={{
                      background: filled ? CAT_COLORS[q.cat] : "transparent",
                      border: filled ? "none" : "1px solid var(--line-strong)",
                    }}
                  >
                    {q.n}
                  </span>

                  <div className="min-w-0 flex-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: CAT_COLORS[q.cat] }}
                    >
                      {t.cats[q.cat]}
                    </span>
                    <h2 className="mt-2 text-[15px] font-bold leading-snug text-ink sm:text-base">
                      {copy.q}{" "}
                      {!q.required ? (
                        <span className="font-medium text-ink-faint">
                          {t.optional}
                        </span>
                      ) : null}
                    </h2>
                    {copy.hint ? (
                      <p className="mt-2 text-[12.5px] leading-relaxed text-ink-faint">
                        {copy.hint}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5">
                  {q.type === "text" || q.type === "email" ? (
                    <input
                      type={q.type}
                      name={q.key}
                      value={(value as string) ?? ""}
                      onChange={(e) => setText(q.n, e.target.value)}
                      placeholder={t.placeholderText}
                      aria-required={q.required}
                      aria-invalid={invalid || undefined}
                      className="w-full rounded-xl border border-line bg-black/20 px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint/70 transition focus:border-[var(--cat)] focus:outline-none"
                    />
                  ) : null}

                  {q.type === "textarea" ? (
                    <textarea
                      name={q.key}
                      rows={3}
                      value={(value as string) ?? ""}
                      onChange={(e) => setText(q.n, e.target.value)}
                      placeholder={t.placeholderText}
                      aria-required={q.required}
                      aria-invalid={invalid || undefined}
                      className="w-full resize-y rounded-xl border border-line bg-black/20 px-4 py-3 text-[15px] leading-relaxed text-ink placeholder:text-ink-faint/70 transition focus:border-[var(--cat)] focus:outline-none"
                    />
                  ) : null}

                  {q.type === "radio" || q.type === "checkbox" ? (
                    <fieldset className="grid gap-2 sm:grid-cols-2">
                      <legend className="sr-only">{copy.q}</legend>
                      {copy.options?.map((opt) => {
                        const checked =
                          q.type === "radio"
                            ? value === opt
                            : Array.isArray(value) && value.includes(opt);
                        return (
                          <label
                            key={opt}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[13.5px] transition ${
                              checked
                                ? "border-[var(--cat)] bg-[var(--cat)]/10 text-ink"
                                : "border-line bg-black/20 text-ink-soft hover:border-line-strong"
                            }`}
                          >
                            <input
                              type={q.type}
                              name={`${q.key}-${q.n}`}
                              value={opt}
                              checked={checked}
                              onChange={() =>
                                q.type === "radio"
                                  ? setRadio(q.n, opt)
                                  : toggleCheckbox(q.n, opt)
                              }
                              className="sr-only"
                            />
                            <span
                              aria-hidden
                              className={`grid h-4 w-4 shrink-0 place-items-center border transition ${
                                q.type === "radio" ? "rounded-full" : "rounded"
                              } ${checked ? "border-[var(--cat)] bg-[var(--cat)]" : "border-line-strong"}`}
                            >
                              {checked ? (
                                <span className="text-[9px] font-bold text-[#0a1a13]">
                                  ✓
                                </span>
                              ) : null}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </label>
                        );
                      })}
                    </fieldset>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* ------------------------------------------------------- submit */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-md text-[13px] leading-relaxed text-ink-muted">
            {t.submitNote1}
          </p>

          {error ? (
            <p
              role="alert"
              className="mx-auto mt-5 max-w-md rounded-xl border border-[#c98f6a]/50 bg-[#c98f6a]/10 px-4 py-3 text-[13px] text-[#e5b394]"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-mint px-8 py-4 text-sm font-bold text-[#0a1a13] transition hover:bg-mint-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? t.submitting : t.submitBtn}
          </button>

          <p className="mt-5 text-[11px] text-ink-faint">{t.submitNote2}</p>
        </div>
      </form>
    </div>
  );
}
