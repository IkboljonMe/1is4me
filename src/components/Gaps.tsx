"use client";

import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section, SectionHead } from "./Section";

/** The three gaps, in the buyer's own words. Self-identification block. */
export default function Gaps() {
  const { lang } = useLang();
  const t = content[lang].gaps;

  return (
    <Section id="gaps" className="border-y border-line/60 bg-bg-raise/40">
      <SectionHead tag={t.tag} title={t.title} lead={t.lead} />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {t.items.map((g, i) => (
          <Reveal key={g.n} delay={i * 90}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-card/70 p-7 transition-colors hover:border-mint/35">
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
                  {g.label}
                </span>
                <span className="text-xs font-bold text-ink-faint">{g.n}</span>
              </div>
              <blockquote className="mt-5 text-xl font-bold leading-snug text-ink">
                {g.quote}
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{g.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
