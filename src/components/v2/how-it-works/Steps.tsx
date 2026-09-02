"use client";

import {
  ChartNoAxesCombined,
  ClipboardList,
  FileText,
  Search,
  Settings,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Step = { title: string; body: string };
type Content = { heading: string; lead: string; steps: Step[] };

/**
 * Copy lives beside the section — one object per language
 * (reference/how_it_works.PNG).
 *
 * Step names that also appear on the Solutions rail keep that page's
 * translations (Discover / Plan / Grow, and Implement from "Implementation"),
 * so the two pages name the same process the same way.
 */
const copy: Copy<Content> = {
  en: {
    heading: "How we work",
    lead: "Simple steps. Big impact.",
    steps: [
      {
        title: "Discover",
        body: "We get to know your business, goals and challenges.",
      },
      {
        title: "Analyze & Map",
        body: "We analyze data, identify gaps and map the biggest opportunities.",
      },
      {
        title: "Plan",
        body: "We create a clear strategy and roadmap with the right priorities.",
      },
      {
        title: "Implement",
        body: "We build, set up and optimize systems that drive efficiency and growth.",
      },
      {
        title: "Grow & Optimize",
        body: "We track results, improve continuously and scale what works.",
      },
    ],
  },
  uz: {
    heading: "Biz qanday ishlaymiz",
    lead: "Oddiy qadamlar. Katta natija.",
    steps: [
      {
        title: "Oʻrganish",
        body: "Biznesingiz, maqsad va muammolaringiz bilan tanishamiz.",
      },
      {
        title: "Tahlil va xaritalash",
        body: "Maʼlumotlarni tahlil qilamiz, kamchiliklarni aniqlaymiz va eng katta imkoniyatlarni belgilaymiz.",
      },
      {
        title: "Reja",
        body: "Toʻgʻri ustuvorliklar bilan aniq strategiya va yoʻl xaritasini tuzamiz.",
      },
      {
        title: "Joriy etish",
        body: "Samaradorlik va oʻsishni taʼminlaydigan tizimlarni quramiz, sozlaymiz va optimallashtiramiz.",
      },
      {
        title: "Oʻsish va optimallashtirish",
        body: "Natijalarni kuzatamiz, uzluksiz yaxshilaymiz va ishlayotganini kengaytiramiz.",
      },
    ],
  },
  ru: {
    heading: "Как мы работаем",
    lead: "Простые шаги. Большой результат.",
    steps: [
      {
        title: "Изучение",
        body: "Мы знакомимся с вашим бизнесом, целями и сложностями.",
      },
      {
        title: "Анализ и карта",
        body: "Анализируем данные, находим слабые места и отмечаем самые большие возможности.",
      },
      {
        title: "План",
        body: "Создаём чёткую стратегию и дорожную карту с верными приоритетами.",
      },
      {
        title: "Внедрение",
        body: "Строим, настраиваем и оптимизируем системы, которые дают эффективность и рост.",
      },
      {
        title: "Рост и оптимизация",
        body: "Отслеживаем результаты, постоянно улучшаем и масштабируем то, что работает.",
      },
    ],
  },
};

/** Parallel to `steps` — icons and numbers are the same in every language. */
const ICONS: LucideIcon[] = [
  Search,
  ClipboardList,
  FileText,
  Settings,
  ChartNoAxesCombined,
];
const NUMBERS = ["01", "02", "03", "04", "05"];

/**
 * Ring geometry, in px. This rail is the Solutions one at the larger scale the
 * mockup uses for the page it headlines, so the ring grows and the connector
 * inset is derived from it: ring radius plus the gap the mockup leaves.
 */
const RING = 84;
const CONNECTOR_INSET = RING / 2 + 26;

/**
 * The dotted rule: one round dot every 6px, drawn from `currentColor` so the
 * colour stays a token (`text-leaf`) rather than a hard-coded value.
 */
const DOTS: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at center, currentColor 1.2px, transparent 1.4px)",
  backgroundSize: "6px 3px",
  backgroundRepeat: "repeat-x",
};

/**
 * "How we work" — the five-step rail (reference/how_it_works.PNG).
 *
 * Five equal columns with no horizontal gap at `lg`, which is what lets each
 * column reach half a column to its left and draw the connector back to its
 * neighbour's ring. Below `lg` the row wraps, so the connectors are dropped
 * entirely rather than left dangling into empty space.
 *
 * The hero links here, hence the `id` and the sticky-header scroll offset.
 */
export default function Steps() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section id="how-we-work" className="scroll-mt-24 py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.heading} lead={c.lead} />
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-[1120px] grid-cols-1 gap-x-6 gap-y-11 sm:mt-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
          {c.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={step.title}
                delay={i * 70}
                className="relative flex flex-col items-center px-2 text-center"
              >
                {/* Runs back to the previous ring, so the first step has none.
                    Hidden until the rail is a single 5-up row. */}
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute hidden h-[3px] text-leaf lg:block"
                    style={{
                      ...DOTS,
                      top: RING / 2 - 1,
                      left: `calc(-50% + ${CONNECTOR_INSET}px)`,
                      right: `calc(50% + ${CONNECTOR_INSET}px)`,
                    }}
                  >
                    <span className="absolute top-1/2 left-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf-bright" />
                  </span>
                ) : null}

                <span
                  className="grid shrink-0 place-items-center rounded-full border border-leaf/70"
                  style={{ width: RING, height: RING }}
                >
                  <Icon
                    aria-hidden
                    size={36}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <span className="mt-4 text-[17px] font-semibold text-leaf-bright">
                  {NUMBERS[i]}
                </span>
                <h3 className="mt-2 text-balance text-[17px] font-semibold tracking-tight text-snow">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[23ch] text-[13.5px] leading-[1.65] text-snow-soft">
                  {step.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
