"use client";

import Link from "next/link";
import { content, INSTAGRAM_URL } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function CTA() {
  const { lang } = useLang();
  const t = content[lang].cta;

  return (
    <section className="layer relative overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/[0.07] blur-3xl"
      />
      <Reveal className="relative mx-auto w-full max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-mint/50" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mint">
            {t.tag}
          </span>
        </div>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
          {t.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {t.lead}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/audit-form"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-sm font-bold text-[#0a1a13] transition hover:bg-mint-deep"
          >
            {t.primary}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-line-strong px-8 py-4 text-sm font-semibold text-ink-soft transition hover:border-mint/60 hover:text-ink"
          >
            {t.secondary}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
