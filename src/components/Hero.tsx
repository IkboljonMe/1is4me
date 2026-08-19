"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;

  return (
    <section className="layer relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 md:pb-28">
      {/* Concentric rings — the quiet geometry from the brand carousel. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[620px] w-[620px] rounded-full border border-mint/10"
      >
        <div className="absolute inset-16 rounded-full border border-mint/[0.07]" />
        <div className="absolute inset-32 rounded-full border border-mint/[0.05]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-mint">
              {t.eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-[clamp(2.6rem,8vw,5.5rem)] font-black leading-[0.98] tracking-[-0.03em]">
            {t.title.map((line, i) => (
              <span key={line} className="block">
                <span className={i === 2 ? "text-mint" : "text-ink"}>{line}</span>
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {t.lead}
          </p>
          <p className="mt-4 max-w-2xl border-l-2 border-mint/50 pl-4 text-base text-ink-muted sm:text-lg">
            {t.sub}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/audit-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-bold text-bg transition hover:bg-mint-deep"
            >
              {t.primary}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold text-ink-soft transition hover:border-mint/60 hover:text-ink"
            >
              {t.secondary}
            </a>
          </div>
          <p className="mt-5 text-[13px] text-ink-faint">{t.note}</p>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {t.stats.map((s) => (
              <div key={s.label} className="bg-card px-6 py-7">
                <dt className="text-3xl font-extrabold tracking-tight text-mint sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-ink-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
