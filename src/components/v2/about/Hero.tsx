"use client";

import {
  ChartNoAxesCombined,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Eyebrow, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Item = { title: string; desc: string };
type Pillar = { title: string; body: string };

type Content = {
  eyebrow: string;
  headline: {
    /**
     * Line one is split rather than pattern-matched: only `green` is leaf
     * green, and every language keeps that colouring wherever the phrase
     * lands in its own word order.
     */
    before: string;
    green: string;
    /** Whatever closes line one after the green phrase — a comma in EN. */
    after: string;
    line2: string;
  };
  lead: string;
  /** Four compact proof-free items; order matches ITEM_ICONS. */
  items: readonly [Item, Item, Item, Item];
  strip: { title: string; desc: string; cta: string };
  /** Mission / Vision / Promise, in that order. */
  pillars: readonly [Pillar, Pillar, Pillar];
};

const copy: Copy<Content> = {
  en: {
    eyebrow: "About Us",
    headline: {
      before: "We’re your",
      green: "growth partner",
      after: ",",
      line2: "not just a service provider.",
    },
    lead: "1is4Me helps businesses find direction, build strong systems and achieve real, measurable growth. We combine proven strategies, practical tools and hands-on support to turn challenges into opportunities.",
    items: [
      {
        title: "Results That Matter",
        desc: "We focus on what moves the needle.",
      },
      {
        title: "One Partner, Three Areas",
        desc: "Education. Consulting. Implementation.",
      },
      {
        title: "Proven Approach",
        desc: "A structured process that delivers.",
      },
      {
        title: "Long-Term Impact",
        desc: "We build systems that create lasting growth.",
      },
    ],
    strip: {
      title: "Start with Business Navigator",
      desc: "Discover what your business needs first.",
      cta: "Get Your Free Audit",
    },
    pillars: [
      {
        title: "Our Mission",
        body: "To help businesses understand what’s holding them back, build the right systems and grow with confidence.",
      },
      {
        title: "Our Vision",
        body: "To be the most trusted growth partner for businesses across every industry and market.",
      },
      {
        title: "Our Promise",
        body: "We treat your business like our own and we never stop until you see real results.",
      },
    ],
  },
  uz: {
    eyebrow: "Biz haqimizda",
    headline: {
      before: "Biz sizning",
      green: "oʻsish hamkoringizmiz",
      after: ",",
      line2: "shunchaki xizmat koʻrsatuvchi emas.",
    },
    lead: "1is4Me bizneslarga yoʻnalish topish, kuchli tizimlar qurish va real, oʻlchanadigan oʻsishga erishishda yordam beradi. Biz sinalgan strategiyalar, amaliy vositalar va bevosita qoʻllab-quvvatlashni birlashtirib, muammolarni imkoniyatlarga aylantiramiz.",
    items: [
      {
        title: "Muhim natijalar",
        desc: "Biz haqiqiy natija beradigan ishlarga eʼtibor qaratamiz.",
      },
      {
        title: "Bitta hamkor, uchta yoʻnalish",
        desc: "Taʼlim. Konsalting. Joriy etish.",
      },
      {
        title: "Sinalgan yondashuv",
        desc: "Natija beradigan tizimli jarayon.",
      },
      {
        title: "Uzoq muddatli taʼsir",
        desc: "Biz barqaror oʻsish yaratadigan tizimlar quramiz.",
      },
    ],
    strip: {
      title: "Business Navigator bilan boshlang",
      desc: "Avvalo biznesingizga nima kerakligini aniqlang.",
      cta: "Bepul auditni oling",
    },
    pillars: [
      {
        title: "Bizning missiyamiz",
        body: "Bizneslarga ularni nima ushlab turganini tushunishga, toʻgʻri tizimlarni qurishga va ishonch bilan oʻsishga yordam berish.",
      },
      {
        title: "Bizning qarashimiz",
        body: "Har bir soha va bozordagi bizneslar uchun eng ishonchli oʻsish hamkori boʻlish.",
      },
      {
        title: "Bizning vaʼdamiz",
        body: "Biz sizning biznesingizga oʻzimiznikidek qaraymiz va siz haqiqiy natijani koʻrmaguningizcha toʻxtamaymiz.",
      },
    ],
  },
  ru: {
    eyebrow: "О нас",
    headline: {
      before: "Мы —",
      green: "ваш партнёр по росту",
      after: ",",
      line2: "а не просто поставщик услуг.",
    },
    lead: "1is4Me помогает бизнесу найти направление, выстроить сильные системы и достичь реального, измеримого роста. Мы соединяем проверенные стратегии, практичные инструменты и поддержку на каждом шаге, чтобы превращать сложности в возможности.",
    items: [
      {
        title: "Результаты, которые важны",
        desc: "Мы фокусируемся на том, что действительно даёт результат.",
      },
      {
        title: "Один партнёр, три направления",
        desc: "Обучение. Консалтинг. Внедрение.",
      },
      {
        title: "Проверенный подход",
        desc: "Структурированный процесс, который приносит результат.",
      },
      {
        title: "Долгосрочный эффект",
        desc: "Мы строим системы, которые дают устойчивый рост.",
      },
    ],
    strip: {
      title: "Начните с Business Navigator",
      desc: "Сначала узнайте, что нужно вашему бизнесу.",
      cta: "Получить бесплатный аудит",
    },
    pillars: [
      {
        title: "Наша миссия",
        body: "Помогать бизнесу понять, что его сдерживает, выстроить правильные системы и расти уверенно.",
      },
      {
        title: "Наше видение",
        body: "Быть самым надёжным партнёром по росту для бизнеса в любой отрасли и на любом рынке.",
      },
      {
        title: "Наше обещание",
        body: "Мы относимся к вашему бизнесу как к своему и не останавливаемся, пока вы не увидите реальные результаты.",
      },
    ],
  },
};

/** Icons sit outside the copy so every language reuses the same item order. */
const ITEM_ICONS = [Target, Users, ShieldCheck, ChartNoAxesCombined];

/**
 * About Us hero (reference/about_us.PNG).
 *
 * Left: eyebrow, the two-line display headline whose middle phrase carries the
 * green, the lead, a row of four icon items and the Business Navigator strip.
 * Right: a bordered panel holding Mission / Vision / Promise, split by
 * hairlines. The wave bleeds off the right edge behind the panel.
 *
 * Two layout notes. The four items are a 2×2 block on a phone and a single row
 * from `md`, where short hairlines — the mockup's dividers stop level with the
 * icon, they do not run the full item height — separate them. The strip below
 * turns into a stack on a phone so the audit button becomes a full-width bar
 * instead of being squeezed beside the copy.
 */
export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Wave className="-right-[26%] top-[2%] aspect-[3/2] w-[150%] opacity-40 sm:-right-[14%] sm:w-[100%] lg:-right-[12%] lg:-top-[16%] lg:w-[62%] lg:opacity-70" />

      <Container className="relative z-10 grid gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-start lg:gap-10 lg:py-14">
        {/* ------------------------------------------- left: the proposition */}
        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-3 text-[clamp(2rem,8.4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-snow lg:text-[clamp(2.6rem,4.1vw,3.6rem)]">
              <span className="block">
                {t.headline.before}{" "}
                <span className="text-leaf-bright">{t.headline.green}</span>
                {t.headline.after}
              </span>
              <span className="block">{t.headline.line2}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[29rem] text-[15px] leading-[1.65] text-snow-soft sm:mt-7 sm:text-base">
              {t.lead}
            </p>
          </Reveal>

          {/* ------------------------------------------- the four proof-free items */}
          <Reveal delay={180}>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-9 sm:gap-x-5 md:grid-cols-4">
              {t.items.map((item, i) => {
                const Icon = ITEM_ICONS[i];
                return (
                  <div
                    key={item.title}
                    className={`relative min-w-0 ${i > 0 ? "md:pl-5" : ""}`}
                  >
                    {/* The mockup's divider is a short rule level with the
                        icon row, not a full-height column border. It is
                        dropped below `md`, where the items wrap into 2×2. */}
                    {i > 0 ? (
                      <span
                        aria-hidden
                        className="absolute top-0.5 left-0 hidden h-11 w-px bg-edge md:block"
                      />
                    ) : null}

                    <dt className="flex items-start gap-2.5">
                      <Icon
                        aria-hidden
                        size={24}
                        strokeWidth={1.5}
                        className="mt-px shrink-0 text-leaf-bright sm:size-[26px]"
                      />
                      <span className="min-w-0 text-[13px] leading-[1.3] font-semibold text-snow sm:text-sm">
                        {item.title}
                      </span>
                    </dt>
                    <dd className="mt-2.5 pl-[34px] text-[11.5px] leading-[1.55] text-snow-muted sm:pl-9 sm:text-xs">
                      {item.desc}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          {/* ------------------------------------- the Business Navigator strip */}
          <Reveal delay={240}>
            <Panel className="mt-8 flex flex-col gap-4 p-4 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Outlined ring, no fill — the panel shows through it, as on
                    the closing band. */}
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-leaf/60">
                  <Rocket
                    aria-hidden
                    size={24}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <div className="min-w-0">
                  <h2 className="text-[15px] leading-[1.3] font-semibold tracking-tight text-snow sm:text-[17px]">
                    {t.strip.title}
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-snow-soft sm:text-sm">
                    {t.strip.desc}
                  </p>
                </div>
              </div>

              <Button
                href="/audit-form"
                className="w-full shrink-0 sm:w-auto"
              >
                {t.strip.cta}
              </Button>
            </Panel>
          </Reveal>
        </div>

        {/* ------------------------ right: mission, vision and promise */}
        <Reveal delay={200} className="lg:w-full lg:justify-self-end">
          <Panel className="p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:p-7">
            {t.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={
                  i > 0 ? "mt-6 border-t border-edge pt-6 sm:mt-7 sm:pt-7" : ""
                }
              >
                <h2 className="text-[17px] font-semibold tracking-tight text-leaf-bright sm:text-[18px]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-snow-soft sm:text-[15px]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
