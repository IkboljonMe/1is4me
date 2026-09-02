"use client";

import { Rocket } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Button, Container, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

/**
 * The lead is one sentence with a single emphasised span, so it is stored in
 * three pieces rather than as markup — every language puts the emphasis in a
 * different place in the sentence. "Business Navigator" is a product name and
 * stays English throughout.
 */
type Content = {
  title: string;
  lead: { before: string; strong: string; after: string };
  cta: string;
};

const copy: Copy<Content> = {
  en: {
    title: "Not sure which tool is right for you?",
    lead: {
      before: "Get personalized recommendations with our ",
      strong: "free Business Navigator",
      after: ".",
    },
    cta: "Get Your Free Audit",
  },
  uz: {
    title: "Qaysi vosita sizga mos ekanini bilmayapsizmi?",
    lead: {
      before: "Shaxsiy tavsiyalarni ",
      strong: "bepul Business Navigator",
      after: " orqali oling.",
    },
    cta: "Bepul auditni oling",
  },
  ru: {
    title: "Не знаете, какой инструмент вам подходит?",
    lead: {
      before: "Получите персональные рекомендации с нашим ",
      strong: "бесплатным Business Navigator",
      after: ".",
    },
    cta: "Получить бесплатный аудит",
  },
};

/**
 * Closing band of the Smart Tools page (reference/smart_tools.PNG).
 *
 * The split shape of the Solutions band — copy left, audit button vertically
 * centred right — with the rocket ring added ahead of the copy and a single
 * heading line instead of two, which is why the panel sits shorter. It stacks
 * and re-centres below `md`.
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
                <span className="grid size-16 shrink-0 place-items-center rounded-full border border-leaf/30 bg-leaf/10">
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
                    {t.lead.before}
                    <strong className="font-semibold text-snow">
                      {t.lead.strong}
                    </strong>
                    {t.lead.after}
                  </p>
                </div>
              </div>

              <Button href="/audit-form" className="w-full shrink-0 md:w-auto">
                {t.cta}
              </Button>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
