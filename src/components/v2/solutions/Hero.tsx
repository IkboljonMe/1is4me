"use client";

import { Sparkles } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type HeroCopy = {
  /** Three display lines; the third one carries the green. */
  headline: readonly [string, string, string];
  /** The opening promise, then the sentence that wraps beneath it. */
  lead: readonly [string, string];
  card: { title: string; desc: string; cta: string };
};

const copy: Copy<HeroCopy> = {
  en: {
    headline: ["Solutions that", "move your business", "forward."],
    lead: [
      "Three core services. One partner.",
      "We give you the knowledge, strategy and systems you need to grow with confidence.",
    ],
    card: {
      title: "Not sure where to start?",
      desc: "Get a free audit. We’ll analyze your business and show you what will make the biggest impact.",
      cta: "Get Your Free Audit",
    },
  },
  uz: {
    headline: ["Biznesingizni", "olgʻa siljitadigan", "yechimlar."],
    lead: [
      "Uchta asosiy xizmat. Bitta hamkor.",
      "Ishonch bilan oʻsishingiz uchun zarur bilim, strategiya va tizimlarni beramiz.",
    ],
    card: {
      title: "Qayerdan boshlashni bilmayapsizmi?",
      desc: "Bepul auditdan oʻting. Biznesingizni tahlil qilamiz va eng katta taʼsir beradigan narsani koʻrsatamiz.",
      cta: "Bepul auditni oling",
    },
  },
  ru: {
    headline: ["Решения, которые", "двигают ваш бизнес", "вперёд."],
    lead: [
      "Три ключевые услуги. Один партнёр.",
      "Мы даём знания, стратегию и системы, которые нужны, чтобы расти уверенно.",
    ],
    card: {
      title: "Не знаете, с чего начать?",
      desc: "Пройдите бесплатный аудит. Мы проанализируем ваш бизнес и покажем, что даст наибольший эффект.",
      cta: "Получить бесплатный аудит",
    },
  },
};

/**
 * Solutions hero (reference/solutions.PNG): the display headline and lead on
 * the left, a compact "where do I start" card on the right, green wave glow
 * bleeding off the right edge.
 *
 * Two differences from the home hero worth keeping: the right column is a
 * fixed, narrow track (the card is roughly a third of the content width in the
 * mockup, not a near-half), and it is top-aligned rather than centred, so the
 * card's top edge sits level with the first headline line.
 */
export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Wave className="-right-[26%] top-[6%] aspect-[3/2] w-[150%] opacity-40 sm:-right-[14%] sm:w-[100%] lg:-right-[8%] lg:-top-[12%] lg:w-[72%] lg:opacity-70" />

      <Container className="relative z-10 grid gap-10 pt-10 pb-10 sm:pt-14 sm:pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-start lg:gap-12 lg:pt-16 lg:pb-14">
        {/* ------------------------------------------- left: the proposition */}
        <div>
          <Reveal>
            <h1 className="text-[clamp(2rem,8.4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-snow lg:text-[clamp(2.7rem,4.2vw,3.85rem)]">
              {t.headline.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === 2 ? "text-leaf-bright" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={90}>
            {/* The first sentence keeps its own line, as in the mockup; the
                second is left to wrap so no translation gets clipped. */}
            <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.65] text-snow-soft sm:mt-7 sm:text-base">
              <span className="block">{t.lead[0]}</span>
              {t.lead[1]}
            </p>
          </Reveal>
        </div>

        {/* -------------------------------------- right: the start-here card */}
        <Reveal delay={140}>
          <Panel className="p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-leaf/40">
                <Sparkles
                  aria-hidden
                  size={18}
                  strokeWidth={1.5}
                  className="text-leaf-bright"
                />
              </span>
              <h2 className="text-[19px] font-semibold tracking-tight text-snow sm:text-[20px]">
                {t.card.title}
              </h2>
            </div>

            <p className="mt-3.5 text-[13px] leading-[1.6] text-snow-soft sm:text-sm">
              {t.card.desc}
            </p>

            {/* Shrink-to-fit and left-aligned — the mockup's button is about
                half the card's width, not a full-width bar. */}
            <div className="mt-6">
              <Button href="/audit-form">{t.card.cta}</Button>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
