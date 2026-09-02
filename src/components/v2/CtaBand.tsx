"use client";

import Reveal from "@/components/Reveal";
import { Button, Container, Panel, SectionHead, Wave } from "@/components/v2/ui";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";

/**
 * Closing band from reference/home.PNG — the last chance to take the audit,
 * with the wave glow sweeping in from both edges of the panel.
 */

type CtaCopy = { title: string; lead: string; cta: string };

const copy: Copy<CtaCopy> = {
  en: {
    title: "Ready to see what’s next for your business?",
    lead: "Get your free audit now and receive a personalized roadmap.",
    cta: "Get Your Free Audit",
  },
  uz: {
    title: "Biznesingizning keyingi qadamini koʻrishga tayyormisiz?",
    lead: "Hoziroq bepul auditdan oʻting va shaxsiy yoʻl xaritasini oling.",
    cta: "Bepul auditni oling",
  },
  ru: {
    title: "Готовы увидеть, что дальше для вашего бизнеса?",
    lead: "Пройдите бесплатный аудит и получите персональную дорожную карту.",
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
            <Wave className="-bottom-[45%] -right-[12%] h-[210%] w-[46%] opacity-70" />

            <div className="relative px-6 py-8 sm:px-8 sm:py-10">
              <SectionHead title={t.title} lead={t.lead} />
              <div className="mt-6 flex justify-center">
                <Button href="/audit-form">{t.cta}</Button>
              </div>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
