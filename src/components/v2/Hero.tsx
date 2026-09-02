"use client";

import {
  ChartColumnIncreasing,
  CirclePlay,
  CircleCheck,
  Clock,
  Compass,
  Gift,
  ScanSearch,
  Target,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Eyebrow, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type HeroCopy = {
  /** Three display lines; the third one carries the green. */
  headline: readonly [string, string, string];
  lead: string;
  primaryCta: string;
  ghostCta: string;
  chips: readonly [string, string, string];
  card: {
    eyebrow: string;
    title: string;
    desc: string;
    steps: readonly [string, string, string, string];
    cta: string;
    note: string;
  };
};

const copy: Copy<HeroCopy> = {
  en: {
    headline: ["Clarity today.", "Better decisions.", "Stronger tomorrow."],
    lead: "We help businesses understand, plan and build with confidence. One partner for your growth journey.",
    primaryCta: "Get Your Free Audit",
    ghostCta: "See How It Works",
    chips: ["100% Free", "Takes 2 Minutes", "Personalized Results"],
    card: {
      eyebrow: "START HERE – IT'S FREE",
      title: "Get Your Free Audit",
      desc: "Answer a few quick questions about your business and get personalized recommendations.",
      steps: [
        "We analyze your business",
        "Identify what's holding you back",
        "Show you what to focus on",
        "You decide the next step",
      ],
      cta: "Start Business Mapping",
      note: "Get clarity. Get direction. Get growth.",
    },
  },
  uz: {
    headline: ["Bugun aniqlik.", "Yaxshiroq qarorlar.", "Kuchli ertangi kun."],
    lead: "Biznesni tushunish, rejalashtirish va ishonch bilan qurishda yordam beramiz. O'sish yo'lingizda yagona hamkor.",
    primaryCta: "Bepul auditni oling",
    ghostCta: "Qanday ishlashini ko'ring",
    chips: ["100% bepul", "2 daqiqa vaqt oladi", "Shaxsiy natijalar"],
    card: {
      eyebrow: "SHU YERDAN BOSHLANG – BEPUL",
      title: "Bepul auditni oling",
      desc: "Biznesingiz haqida bir nechta qisqa savolga javob bering va shaxsiy tavsiyalarni oling.",
      steps: [
        "Biznesingizni tahlil qilamiz",
        "Nima to'sqinlik qilayotganini aniqlaymiz",
        "Nimaga e'tibor qaratishni ko'rsatamiz",
        "Keyingi qadamni siz tanlaysiz",
      ],
      cta: "Biznes xaritasini boshlash",
      note: "Aniqlik. Yo'nalish. O'sish.",
    },
  },
  ru: {
    headline: ["Ясность сегодня.", "Лучшие решения.", "Сильное завтра."],
    lead: "Мы помогаем бизнесу понимать, планировать и уверенно строить. Один партнёр на всём пути роста.",
    primaryCta: "Получить бесплатный аудит",
    ghostCta: "Как это работает",
    chips: ["100% бесплатно", "Занимает 2 минуты", "Персональные результаты"],
    card: {
      eyebrow: "НАЧНИТЕ ЗДЕСЬ – ЭТО БЕСПЛАТНО",
      title: "Получить бесплатный аудит",
      desc: "Ответьте на несколько коротких вопросов о вашем бизнесе и получите персональные рекомендации.",
      steps: [
        "Мы анализируем ваш бизнес",
        "Определяем, что вас сдерживает",
        "Показываем, на чём сосредоточиться",
        "Следующий шаг выбираете вы",
      ],
      cta: "Начать карту бизнеса",
      note: "Ясность. Направление. Рост.",
    },
  },
};

/** Icons sit outside the copy so every language reuses the same row order. */
const STEP_ICONS = [ChartColumnIncreasing, ScanSearch, Target, Compass];
const CHIP_ICONS = [Gift, Clock, CircleCheck];

/**
 * Home hero (reference/home.PNG): display headline + CTAs on the left, the
 * free-audit card on the right, green wave glow bleeding off the right edge.
 *
 * The headline type scale is split at `lg` on purpose — below it the column is
 * the full container, above it the text only gets ~55% of it, so one clamp
 * cannot serve both without wrapping the three lines into four.
 */
export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Wave className="-right-[24%] top-[10%] aspect-[3/2] w-[150%] opacity-50 sm:-right-[12%] sm:w-[95%] lg:-right-[6%] lg:-top-[8%] lg:w-[78%] lg:opacity-80" />

      <Container className="relative z-10 grid gap-10 pb-12 pt-10 sm:pb-14 sm:pt-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-center lg:gap-10 lg:pb-16 lg:pt-16">
        {/* ---------------------------------------------- left: the promise */}
        <div>
          <Reveal>
            <h1 className="text-[clamp(2.05rem,8.6vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-snow lg:text-[clamp(2.9rem,4.6vw,4.2rem)]">
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
            <p className="mt-6 max-w-[32rem] text-[15px] leading-[1.65] text-snow-soft sm:mt-7 sm:text-base">
              {t.lead}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href="/audit-form">{t.primaryCta}</Button>
              <Button href="/v2/how-it-works" variant="ghost">
                {t.ghostCta}
                <CirclePlay aria-hidden size={18} strokeWidth={1.5} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={270}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mt-10 sm:gap-x-9">
              {t.chips.map((chip, i) => {
                const Icon = CHIP_ICONS[i];
                return (
                  <li
                    key={chip}
                    className="flex items-center gap-2 text-[13px] text-snow-soft sm:text-sm"
                  >
                    <Icon
                      aria-hidden
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-leaf-bright"
                    />
                    {chip}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* ------------------------------------------- right: the audit card */}
        <Reveal delay={140} className="lg:justify-self-end lg:w-full">
          <Panel className="p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:p-7">
            <div className="text-center">
              <Eyebrow>{t.card.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-[22px] font-semibold tracking-tight text-snow sm:text-[26px]">
                {t.card.title}
              </h2>
              <p className="mx-auto mt-3 max-w-[26rem] text-[13px] leading-[1.6] text-snow-soft sm:text-sm">
                {t.card.desc}
              </p>
            </div>

            <ul className="mt-7 space-y-4 sm:mt-8">
              {t.card.steps.map((step, i) => {
                const Icon = STEP_ICONS[i];
                return (
                  <li key={step} className="flex items-center gap-3.5">
                    <Icon
                      aria-hidden
                      size={20}
                      strokeWidth={1.5}
                      className="shrink-0 text-leaf-bright"
                    />
                    <span className="text-[13px] text-snow-soft sm:text-sm">
                      {step}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Button href="/audit-form" className="mt-7 w-full sm:mt-8">
              {t.card.cta}
            </Button>

            <p className="mt-4 text-center text-[13px] text-snow-muted">
              {t.card.note}
            </p>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
