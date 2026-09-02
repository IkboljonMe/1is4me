"use client";

import { Rocket } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Button, Container, Panel } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Content = { title: string; lead: string; cta: string };

/** Copy lives beside the section — one object per language (reference/smart_tools.PNG). */
const copy: Copy<Content> = {
  en: {
    title: "New tools are coming soon!",
    lead: "We're adding more tools to help you grow even faster.",
    cta: "See Upcoming Tools",
  },
  uz: {
    title: "Yangi vositalar tez orada!",
    lead: "Yanada tezroq oʻsishingiz uchun koʻproq vosita qoʻshmoqdamiz.",
    cta: "Kutilayotgan vositalarni koʻrish",
  },
  ru: {
    title: "Скоро новые инструменты!",
    lead: "Мы добавляем новые инструменты, чтобы вы росли ещё быстрее.",
    cta: "Смотреть будущие инструменты",
  },
};

/**
 * The "coming soon" strip under the tool grid (reference/smart_tools.PNG).
 *
 * A footnote to the grid rather than a section of its own: one short bordered
 * row, so both the section padding and the panel padding stay tighter than
 * anywhere else on the page. Below `sm` the row becomes a centred stack.
 *
 * It deliberately names nothing that is coming — no tool names, no dates.
 */
export default function ComingSoon() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="py-2 sm:py-3">
      <Container>
        <Reveal>
          <Panel className="flex flex-col items-center gap-5 px-5 py-5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-leaf/30 bg-leaf/10">
                <Rocket
                  aria-hidden
                  size={22}
                  strokeWidth={1.5}
                  className="text-leaf-bright"
                />
              </span>

              <div className="min-w-0">
                <p className="text-[15px] font-semibold tracking-tight text-snow sm:text-base">
                  {t.title}
                </p>
                <p className="mt-1 text-[13px] leading-[1.5] text-snow-muted sm:text-sm">
                  {t.lead}
                </p>
              </div>
            </div>

            {/* TODO: point at the upcoming-tools page once it exists; for now
                the strip sends people back to the grid above. */}
            <Button
              href="#all-tools"
              variant="ghost"
              arrow
              className="w-full shrink-0 sm:w-auto"
            >
              {t.cta}
            </Button>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
