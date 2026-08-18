"use client";

import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section, SectionHead } from "./Section";

/** The four outcomes — the only promises made anywhere on the site. */
export default function Outcomes() {
  const { lang } = useLang();
  const t = content[lang].outcomes;

  return (
    <Section id="outcomes" className="border-y border-line/60 bg-bg-raise/40">
      <SectionHead tag={t.tag} title={t.title} lead={t.lead} />

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((o, i) => (
          <Reveal key={o.n} delay={i * 70}>
            <div className="h-full bg-card px-7 py-8 transition-colors hover:bg-card-hover">
              <span className="text-xs font-bold text-mint">{o.n}</span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-ink">
                {o.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                {o.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
