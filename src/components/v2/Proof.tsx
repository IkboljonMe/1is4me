"use client";

import { Leaf } from "lucide-react";

import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";

/**
 * The client strip from reference/home.PNG — one line of reassurance over
 * three client wordmarks.
 *
 * Exactly the three clients the mockup shows. No counts, no testimonials,
 * no extra logos: proof is only ever what we can actually name.
 *
 * TODO: replace the three text wordmarks below with the real logo assets
 * (SVG preferred) once the clients supply them. They are hand-set type here
 * purely because no artwork exists yet.
 */

type ProofCopy = { title: string };

const copy: Copy<ProofCopy> = {
  en: { title: "Trusted by businesses that want to grow" },
  uz: { title: "Oʻsishni istagan bizneslar bizga ishonadi" },
  ru: { title: "Нам доверяют компании, которые хотят расти" },
};

/** Short hairline between two wordmarks. Hidden once they stack. */
function Divider() {
  return (
    <span
      aria-hidden
      className="hidden h-14 w-px shrink-0 bg-edge-strong sm:block"
    />
  );
}

export default function Proof() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="pt-8 sm:pt-10">
      <Container>
        <Reveal>
          <SectionHead title={t.title} />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:mt-8 sm:gap-x-12 lg:gap-x-20">
            {/* Placek i co — script-ish italic serif over a gold swash. */}
            <div className="flex shrink-0 flex-col items-center">
              <span className="font-serif text-[26px] italic leading-none tracking-wide text-snow sm:text-[30px]">
                Placek i co
              </span>
              <span
                aria-hidden
                className="mt-2 h-[3px] w-[88%] rounded-full bg-gold"
              />
            </div>

            <Divider />

            {/* GUZAR RESTAURANT — letter-spaced gold caps. */}
            <div className="flex shrink-0 flex-col items-center">
              <span className="font-serif text-[24px] font-semibold leading-none tracking-[0.16em] text-gold sm:text-[28px]">
                GUZAR
              </span>
              <span className="mt-2 text-[10px] font-medium leading-none tracking-[0.38em] text-gold/75">
                RESTAURANT
              </span>
            </div>

            <Divider />

            {/* Kokand Dry Fruits — bold script mark with the leaf accent. */}
            <div className="flex shrink-0 flex-col items-center">
              <span className="relative inline-flex items-end">
                <span className="font-serif text-[26px] font-bold italic leading-none tracking-tight text-snow sm:text-[30px]">
                  Kokand
                </span>
                <Leaf
                  aria-hidden
                  strokeWidth={1.5}
                  className="absolute -right-1 -top-3 h-4 w-4 text-leaf-bright"
                />
              </span>
              <span className="mt-2 text-[10px] font-medium leading-none tracking-[0.32em] text-snow-soft">
                DRY FRUITS
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
