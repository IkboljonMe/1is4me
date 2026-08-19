"use client";

import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section, SectionHead } from "./Section";

/**
 * The two philosophies — the commercial heart of the site.
 * Spend less, or earn more. Everything else is downstream of these two.
 */
export default function Offers() {
  const { lang } = useLang();
  const t = content[lang].offers;

  return (
    <Section id="offers">
      <SectionHead tag={t.tag} title={t.title} lead={t.lead} />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {t.items.map((item, i) => (
          <Reveal key={item.n} delay={i * 100}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card p-8 transition-colors hover:border-mint/40 hover:bg-card-hover sm:p-10">
              {/* Oversized ghost numeral, cropped by the card. */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[7rem] font-black leading-none text-mint/[0.06] transition-colors group-hover:text-mint/[0.1]"
              >
                {item.n}
              </span>

              <div className="relative">
                <span className="text-[11px] font-bold tracking-[0.2em] text-mint">
                  {item.n}
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {item.lead}
                </p>

                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-ink-muted">
                      <span aria-hidden className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-mint/70" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-8 text-center text-sm text-ink-faint">{t.footer}</p>
      </Reveal>
    </Section>
  );
}
