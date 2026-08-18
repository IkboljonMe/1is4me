"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section, SectionHead } from "./Section";

/**
 * Three doors, 1:1 with the three gaps.
 * Each door gets its own CTA — the blueprint's own note: one shared button
 * would turn the three doors into decoration.
 */
export default function Doors() {
  const { lang } = useLang();
  const t = content[lang].doors;

  return (
    <Section id="doors">
      <SectionHead tag={t.tag} title={t.title} lead={t.lead} />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {t.items.map((d, i) => (
          <Reveal key={d.n} delay={i * 90}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-card p-8 transition-all hover:-translate-y-1 hover:border-mint/45">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-mint/40 text-xs font-bold text-mint">
                  {d.n}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                  {d.for}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-ink">{d.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.body}</p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[13px] text-ink-muted">
                    <span aria-hidden className="text-mint">›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Price signal: flagged as an open blocker in the docs, not invented here. */}
              <div className="mt-6 rounded-lg border border-dashed border-gold/40 bg-gold/[0.04] px-3 py-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold/80">
                  {d.price}
                </span>
              </div>

              <Link
                href="/audit-form"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-mint transition hover:gap-3"
              >
                {d.cta} <span aria-hidden>→</span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
