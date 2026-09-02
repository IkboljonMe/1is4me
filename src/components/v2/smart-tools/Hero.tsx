"use client";

import { ChartNoAxesCombined, CirclePlay, ShieldCheck, Target, Zap } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Eyebrow, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Row = { title: string; desc: string };

type HeroCopy = {
  eyebrow: string;
  /** Three display lines; the third one carries the green. */
  headline: readonly [string, string, string];
  /** The opening promise (wraps), then the sentence that sits on its own line. */
  lead: readonly [string, string];
  primaryCta: string;
  ghostCta: string;
  rows: readonly [Row, Row, Row, Row];
};

const copy: Copy<HeroCopy> = {
  en: {
    eyebrow: "Smart Tools",
    headline: ["Smart tools.", "Practical solutions.", "Built for business."],
    lead: [
      "A collection of intelligent tools that help you save time, work smarter and make better decisions.",
      "Use them anytime, in any stage of your journey.",
    ],
    primaryCta: "Explore All Tools",
    ghostCta: "See How They Work",
    rows: [
      { title: "Instant & Easy", desc: "Get results in seconds, not hours." },
      { title: "Reliable & Secure", desc: "Your data stays safe and private." },
      {
        title: "Made for Real Work",
        desc: "Practical tools for everyday business needs.",
      },
      {
        title: "Always Improving",
        desc: "New tools and features added regularly.",
      },
    ],
  },
  uz: {
    eyebrow: "Aqlli vositalar",
    headline: [
      "Aqlli vositalar.",
      "Amaliy yechimlar.",
      "Biznes uchun yaratilgan.",
    ],
    lead: [
      "Vaqtingizni tejash, samaraliroq ishlash va yaxshiroq qarorlar qabul qilishga yordam beradigan aqlli vositalar toʻplami.",
      "Ulardan istalgan vaqtda, yoʻlingizning istalgan bosqichida foydalaning.",
    ],
    primaryCta: "Barcha vositalarni koʻrish",
    ghostCta: "Qanday ishlashini koʻring",
    rows: [
      {
        title: "Tez va oson",
        desc: "Natijani soatlar emas, soniyalarda oling.",
      },
      {
        title: "Ishonchli va xavfsiz",
        desc: "Maʼlumotlaringiz xavfsiz va maxfiy qoladi.",
      },
      {
        title: "Haqiqiy ish uchun",
        desc: "Kundalik biznes ehtiyojlari uchun amaliy vositalar.",
      },
      {
        title: "Doimiy yaxshilanadi",
        desc: "Yangi vositalar va imkoniyatlar muntazam qoʻshiladi.",
      },
    ],
  },
  ru: {
    eyebrow: "Умные инструменты",
    headline: [
      "Умные инструменты.",
      "Практичные решения.",
      "Созданы для бизнеса.",
    ],
    lead: [
      "Набор умных инструментов, которые помогают экономить время, работать эффективнее и принимать лучшие решения.",
      "Пользуйтесь ими в любое время и на любом этапе вашего пути.",
    ],
    primaryCta: "Смотреть все инструменты",
    ghostCta: "Как они работают",
    rows: [
      { title: "Быстро и просто", desc: "Результат за секунды, а не часы." },
      {
        title: "Надёжно и безопасно",
        desc: "Ваши данные остаются в безопасности и приватными.",
      },
      {
        title: "Для реальной работы",
        desc: "Практичные инструменты для ежедневных задач бизнеса.",
      },
      {
        title: "Постоянно улучшаются",
        desc: "Новые инструменты и функции добавляются регулярно.",
      },
    ],
  },
};

/** Icons live outside the copy so every language reuses the same row order. */
const ROW_ICONS = [Zap, ShieldCheck, Target, ChartNoAxesCombined];

/**
 * Smart Tools hero (reference/smart_tools.PNG): eyebrow, three-line display
 * headline and the two CTAs on the left; on the right a bordered panel of four
 * reassurance rows separated by hairlines, with the green wave bleeding off the
 * right edge.
 *
 * The right track is fixed and narrow (the panel is roughly a third of the
 * content width in the mockup) and the columns are centred against each other,
 * because the panel and the left block are almost the same height there.
 * Hairlines are inset from the panel edge, so the padding lives on the panel
 * and the rhythm on the rows rather than the other way round.
 */
export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Wave className="-right-[26%] top-[4%] aspect-[3/2] w-[150%] opacity-40 sm:-right-[14%] sm:w-[100%] lg:-right-[8%] lg:-top-[10%] lg:w-[74%] lg:opacity-70" />

      <Container className="relative z-10 grid gap-10 pt-10 pb-10 sm:pt-12 sm:pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-12 lg:pt-14 lg:pb-14">
        {/* ------------------------------------------- left: the proposition */}
        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-3 text-[clamp(2rem,8.4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-snow lg:text-[clamp(2.7rem,4.2vw,3.85rem)]">
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

          <Reveal delay={120}>
            {/* The closing sentence keeps its own line, as in the mockup; the
                first one is left to wrap so no translation gets clipped. */}
            <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.65] text-snow-soft sm:mt-7 sm:text-base">
              {t.lead[0]}
              <span className="block">{t.lead[1]}</span>
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Button href="#all-tools">{t.primaryCta}</Button>
              <Button href="#how-it-works" variant="ghost">
                {t.ghostCta}
                <CirclePlay aria-hidden size={18} strokeWidth={1.5} />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* -------------------------------------- right: the reassurance rows */}
        <Reveal delay={160} className="lg:w-full lg:justify-self-end">
          <Panel className="px-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:px-6">
            <ul>
              {t.rows.map((row, i) => {
                const Icon = ROW_ICONS[i];
                return (
                  <li
                    key={row.title}
                    className={`flex items-center gap-4 py-4 sm:py-[18px] ${
                      i > 0 ? "border-t border-edge" : ""
                    }`}
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-leaf/30 bg-leaf/10">
                      <Icon
                        aria-hidden
                        size={20}
                        strokeWidth={1.5}
                        className="text-leaf-bright"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold tracking-tight text-snow">
                        {row.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.5] text-snow-muted">
                        {row.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
