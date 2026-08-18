"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { content, team } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section, SectionHead } from "./Section";

/**
 * Team carousel — a scroll-snap rail rather than a JS slider, so it stays
 * swipeable on touch, keyboard-reachable, and works without measuring widths.
 * Roster content is deliberately placeholder until real people are supplied.
 */
export default function Team() {
  const { lang } = useLang();
  const t = content[lang].team;
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    // One card plus its gap — the first child's width is the unit.
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <Section id="team" className="border-y border-line/60 bg-bg-raise/40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead tag={t.tag} title={t.title} lead={t.lead} />

        <Reveal delay={100}>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label={t.prev}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink-soft transition hover:border-mint/60 hover:text-mint disabled:opacity-30 disabled:hover:border-line-strong disabled:hover:text-ink-soft"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label={t.next}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink-soft transition hover:border-mint/60 hover:text-mint disabled:opacity-30 disabled:hover:border-line-strong disabled:hover:text-ink-soft"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={60}>
        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-dashed border-gold/40 bg-gold/[0.04] px-3 py-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold/80">
            {t.note}
          </span>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <ul
          ref={railRef}
          onScroll={sync}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {team.map((m) => (
            <li
              key={m.id}
              className="w-[260px] shrink-0 snap-start sm:w-[300px]"
            >
              <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-mint/35">
                {/* Photo slot. Swap this block for a next/image once real
                    headshots exist — the ring and sizing stay the same. */}
                <div
                  className="grid h-16 w-16 place-items-center rounded-full border border-dashed"
                  style={{ borderColor: m.accent, color: m.accent }}
                >
                  <span className="text-sm font-extrabold">{m.initials}</span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-ink">{m.name}</h3>
                <p
                  className="mt-1 text-[13px] font-semibold"
                  style={{ color: m.accent }}
                >
                  {m.role[lang]}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-[13px] leading-relaxed text-ink-muted">
                  {m.experience[lang]}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
