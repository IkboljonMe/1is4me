"use client";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

/**
 * Closing band of the Solutions page (reference/solutions.PNG).
 *
 * Same panel and wave treatment as the home band, but split horizontally:
 * copy on the left, the audit button vertically centred on the right. It
 * stacks and re-centres below `md`.
 */

type CtaCopy = {
  /** Two display lines, kept split in every language. */
  title: readonly [string, string];
  lead: string;
  cta: string;
};

const copy: Copy<CtaCopy> = {
  en: {
    title: ["Ready to find the right solution", "for your business?"],
    lead: "Get your free audit and see what will create the biggest impact.",
    cta: "Get Your Free Audit",
  },
  uz: {
    title: ["Biznesingiz uchun toʻgʻri yechimni", "topishga tayyormisiz?"],
    lead: "Bepul auditdan oʻting va eng katta taʼsirni nima yaratishini koʻring.",
    cta: "Bepul auditni oling",
  },
  ru: {
    title: ["Готовы найти правильное решение", "для вашего бизнеса?"],
    lead: "Пройдите бесплатный аудит и узнайте, что даст наибольший эффект.",
    cta: "Получить бесплатный аудит",
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

            <div className="relative flex flex-col items-center gap-6 px-6 py-8 text-center sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
              <div>
                <h2 className="text-[24px] leading-[1.2] font-semibold tracking-tight text-snow sm:text-[28px]">
                  {t.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mt-3 text-sm text-snow-soft sm:text-[15px]">
                  {t.lead}
                </p>
              </div>

              <Button href="/audit-form" className="shrink-0">
                {t.cta}
              </Button>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
