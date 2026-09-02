"use client";

import { Rocket } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Button, Container, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

/**
 * The reassurance under the button is one dot-separated line in the mockup,
 * not the check-marked chips the other pages use, so it is stored as its two
 * halves and joined with the separator at render time. "Business Navigator"
 * is a product name and stays English in every language; the heading and the
 * button label match how-it-works so the site says the same thing twice.
 */
type Content = {
  title: string;
  lead: string;
  cta: string;
  note: readonly [string, string];
};

const copy: Copy<Content> = {
  en: {
    title: "Not sure where to start?",
    lead: "Use Business Navigator and get a clear direction.",
    cta: "Start with Business Navigator",
    note: ["100% Free", "Takes 2–3 Minutes"],
  },
  uz: {
    title: "Qayerdan boshlashni bilmayapsizmi?",
    lead: "Business Navigatordan foydalaning va aniq yoʻnalishga ega boʻling.",
    cta: "Business Navigator bilan boshlang",
    note: ["100% bepul", "2–3 daqiqa vaqt oladi"],
  },
  ru: {
    title: "Не знаете, с чего начать?",
    lead: "Используйте Business Navigator и получите чёткое направление.",
    cta: "Начать с Business Navigator",
    note: ["100% бесплатно", "Занимает 2–3 минуты"],
  },
};

/**
 * Closing band of the Pricing page (reference/pricing.PNG).
 *
 * The same split shape the other pages close with — rocket ring and copy
 * left, audit button right — kept short: one heading line, one lead, and a
 * single muted line of reassurance under the button. Stacks and re-centres
 * below `md`.
 */
export default function CtaBand() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="pt-6 pb-10 sm:pt-8 sm:pb-12">
      <Container>
        <Reveal>
          {/* overflow-hidden keeps both waves inside the card, so nothing
              widens the page on a phone. */}
          <Panel className="relative overflow-hidden">
            <Wave className="-bottom-[45%] -left-[12%] h-[210%] w-[46%] opacity-60" flip />
            <Wave className="-right-[12%] -bottom-[45%] h-[210%] w-[46%] opacity-70" />

            <div className="relative flex flex-col items-center gap-6 px-6 py-7 text-center sm:px-8 md:flex-row md:justify-between md:gap-10 md:py-5 md:text-left">
              <div className="flex flex-col items-center gap-5 md:flex-row md:gap-6">
                <span className="grid size-16 shrink-0 place-items-center rounded-full border border-leaf/50 bg-leaf/10">
                  <Rocket
                    aria-hidden
                    size={28}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <div className="min-w-0">
                  <h2 className="text-[22px] leading-[1.2] font-semibold tracking-tight text-snow sm:text-[26px]">
                    {t.title}
                  </h2>
                  <p className="mt-2 text-sm text-snow-soft sm:text-[15px]">
                    {t.lead}
                  </p>
                </div>
              </div>

              <div className="flex w-full shrink-0 flex-col items-center gap-2.5 md:w-auto">
                <Button href="/audit-form" className="w-full md:w-auto">
                  {t.cta}
                </Button>
                <p className="text-[13px] text-snow-muted">
                  {t.note[0]}
                  <span aria-hidden className="px-2">
                    •
                  </span>
                  {t.note[1]}
                </p>
              </div>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
