"use client";

import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section, SectionHead } from "./Section";

/** Four-step engagement, rendered as a connected timeline. */
export default function Process() {
  const { lang } = useLang();
  const t = content[lang].process;

  return (
    <Section id="process">
      <SectionHead tag={t.tag} title={t.title} lead={t.lead} />

      <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
        {/* The rail the steps hang off, desktop only. */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-mint/40 via-mint/20 to-transparent md:block"
        />
        {t.items.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} as="li" className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/40 bg-bg text-xs font-bold text-mint">
              {s.n}
            </div>
            <h3 className="mt-5 text-base font-bold text-ink">{s.title}</h3>
            <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
              {s.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
