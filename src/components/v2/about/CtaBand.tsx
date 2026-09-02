"use client";

import { Rocket } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { AuditChips } from "@/components/v2/how-it-works/Clients";
import { Button, Container, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

/**
 * Closing band of the About Us page (reference/about_us.PNG).
 *
 * The split shape every page closes with — rocket ring and copy left, audit
 * button right — carrying three reassurances under the button instead of the
 * two on How It Works. The heading, the lead, the button label and the chips
 * reuse the wording already shipped on How It Works so the site says the same
 * thing the same way; "Business Navigator" is a product name and stays
 * English in every language.
 */

type Content = {
  /** Two display lines, kept split in every language. */
  title: readonly [string, string];
  lead: string;
  cta: string;
  chips: readonly [string, string, string];
};

const copy: Copy<Content> = {
  en: {
    title: ["Not sure where to start?", "Start with Business Navigator."],
    lead: "It’s free, fast and could change everything.",
    cta: "Get Your Free Audit",
    chips: ["100% Free", "No Commitment", "Takes 2–3 Minutes"],
  },
  uz: {
    title: [
      "Qayerdan boshlashni bilmayapsizmi?",
      "Business Navigator bilan boshlang.",
    ],
    lead: "Bu bepul, tez va hammasini oʻzgartirishi mumkin.",
    cta: "Bepul auditni oling",
    chips: ["100% bepul", "Majburiyatsiz", "2–3 daqiqa vaqt oladi"],
  },
  ru: {
    title: ["Не знаете, с чего начать?", "Начните с Business Navigator."],
    lead: "Это бесплатно, быстро и может изменить всё.",
    cta: "Получить бесплатный аудит",
    chips: ["100% бесплатно", "Без обязательств", "Занимает 2–3 минуты"],
  },
};

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

            <div className="relative flex flex-col items-center gap-6 px-6 py-8 text-center sm:px-8 md:flex-row md:justify-between md:gap-10 md:py-7 md:text-left">
              <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
                {/* Outlined ring, no fill — the mockup keeps the panel
                    showing through it. */}
                <span className="grid size-[68px] shrink-0 place-items-center rounded-full border border-leaf/60 sm:size-[76px]">
                  <Rocket
                    aria-hidden
                    size={30}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <div className="min-w-0">
                  <h2 className="text-[22px] leading-[1.2] font-semibold tracking-tight text-snow sm:text-[26px]">
                    {t.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  <p className="mt-2.5 text-sm text-snow-soft sm:text-[15px]">
                    {t.lead}
                  </p>
                </div>
              </div>

              <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto">
                <Button href="/audit-form" className="w-full sm:w-auto">
                  {t.cta}
                </Button>
                {/* Three chips only sit on one line once the row is wide.
                    Between `md` and `lg` the heading beside them needs the
                    space more, so they are capped and wrap instead. */}
                <AuditChips
                  items={t.chips}
                  className="md:max-w-[17rem] lg:max-w-none"
                />
              </div>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
