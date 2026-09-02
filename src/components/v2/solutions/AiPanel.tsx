"use client";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Eyebrow, Panel } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";
import { TOOLS, TOOL_CAPTIONS } from "@/lib/v2/tools";

/**
 * "Additional option — AI Services" (reference/solutions.PNG).
 *
 * The same eight tools as the home page's panel in a quieter skin: the
 * coloured chips are dropped for green outline icons sitting beside the tool
 * name, so the grid reads as a menu of extras rather than a second hero. Tool
 * names and captions come from @/lib/v2/tools — this file only owns its own
 * left-hand copy.
 *
 * A hairline separates the pitch from the grid on desktop; it is the right
 * column's own left border, so it stretches to the taller column and vanishes
 * with the same breakpoint that stacks the panel.
 */
type AiPanelCopy = {
  eyebrow: string;
  title: string;
  tagline: string;
  lead: string;
  cta: string;
};

const copy: Copy<AiPanelCopy> = {
  en: {
    eyebrow: "Additional option",
    title: "AI Services",
    tagline: "Powerful tools. Built for your business.",
    lead:
      "Access a suite of AI tools to save time, automate tasks and unlock new opportunities. Use them on your own, anytime you need.",
    cta: "Explore AI Services",
  },
  uz: {
    eyebrow: "Qoʻshimcha imkoniyat",
    title: "AI xizmatlari",
    tagline: "Kuchli vositalar. Biznesingiz uchun yaratilgan.",
    lead:
      "Vaqtni tejash, vazifalarni avtomatlashtirish va yangi imkoniyatlarni ochish uchun AI vositalari toʻplamidan foydalaning. Ularni oʻzingiz, xohlagan vaqtingizda ishlatasiz.",
    cta: "AI xizmatlarini koʻrish",
  },
  ru: {
    eyebrow: "Дополнительная опция",
    title: "AI-сервисы",
    tagline: "Мощные инструменты. Созданы для вашего бизнеса.",
    lead:
      "Получите доступ к набору AI-инструментов, чтобы экономить время, автоматизировать задачи и открывать новые возможности. Используйте их самостоятельно, когда вам удобно.",
    cta: "Смотреть AI-сервисы",
  },
};

export default function AiPanel() {
  const { lang } = useLang();
  const t = copy[lang];
  const captions = TOOL_CAPTIONS[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <Panel className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-0">
              <div className="lg:pr-6">
                <Eyebrow>{t.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-tight text-snow sm:text-[32px]">
                  {t.title}
                </h2>
                <p className="mt-2 text-[15px] font-medium leading-snug text-leaf-bright sm:text-base">
                  {t.tagline}
                </p>
                <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-snow-soft">
                  {t.lead}
                </p>
                <Button href="/v2/smart-tools" className="mt-6">
                  {t.cta}
                </Button>
              </div>

              {/* The hairline is this column's left border — no border, no
                  padding once the panel stacks. h-full + grid-rows-2 makes the
                  grid rise to the pitch column's height, as in the mockup. */}
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-full lg:auto-rows-min lg:grid-cols-4 lg:content-center lg:border-l lg:border-edge lg:pl-6">
                {TOOLS.map(({ name, Icon }, i) => (
                  <Reveal
                    as="li"
                    key={name}
                    delay={60 + i * 40}
                    className="flex items-center gap-3 rounded-xl border border-edge bg-panel-2 px-4 py-3.5 transition hover:border-edge-strong lg:gap-2.5 lg:px-3.5"
                  >
                    <Icon
                      aria-hidden
                      strokeWidth={1.5}
                      className="h-6 w-6 shrink-0 text-leaf-bright lg:h-5 lg:w-5"
                    />
                    {/* min-w-0 + break-words: four tiles across leave little
                        room, and the UZ/RU captions are long. */}
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold leading-tight break-words text-snow lg:text-[11.5px]">
                        {name}
                      </span>
                      <span className="mt-1 block text-[11.5px] leading-tight break-words text-snow-muted lg:text-[11px]">
                        {captions[i]}
                      </span>
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
