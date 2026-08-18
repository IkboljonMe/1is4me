"use client";

import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { Section } from "./Section";

/**
 * Proof. Carries the one number the brand already publishes, and leaves the
 * case-study slots visibly empty. House rule: empty is acceptable, invented
 * is not — so no sample metrics or placeholder testimonials go in here.
 */
export default function Proof() {
  const { lang } = useLang();
  const t = content[lang].proof;

  return (
    <Section id="proof">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line bg-card">
          <div className="grid gap-px bg-line md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex flex-col justify-center bg-card px-8 py-12 sm:px-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-mint/50" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mint">
                  {t.tag}
                </span>
              </div>
              <p className="mt-8 text-[clamp(3rem,9vw,5rem)] font-extrabold leading-none tracking-tight text-mint">
                {t.stat}
              </p>
              <p className="mt-3 text-sm text-ink-muted">{t.statLabel}</p>
            </div>

            <div className="bg-card px-8 py-12 sm:px-10">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">{t.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{t.body}</p>

              {/* Three empty case slots, honestly marked. */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="grid h-20 place-items-center rounded-xl border border-dashed border-line-strong bg-black/10"
                  >
                    <span className="text-lg text-ink-faint">—</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-gold/70">
                {t.badge}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
