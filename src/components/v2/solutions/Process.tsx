"use client";

import {
  ChartNoAxesCombined,
  ClipboardList,
  FilePen,
  Search,
  Settings,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Step = { title: string; body: string };
type Content = { heading: string; steps: Step[] };

/** Copy lives beside the section — one object per language (reference/solutions.PNG). */
const copy: Copy<Content> = {
  en: {
    heading: "How it works",
    steps: [
      { title: "Discover", body: "We learn about your business and challenges." },
      { title: "Analyze", body: "We analyze, identify gaps and opportunities." },
      { title: "Plan", body: "We create a clear strategy and roadmap." },
      { title: "Execute", body: "We implement systems, processes and actions." },
      { title: "Grow", body: "You get results. We optimize and scale." },
    ],
  },
  uz: {
    heading: "Bu qanday ishlaydi",
    steps: [
      {
        title: "Oʻrganish",
        body: "Biznesingiz va muammolaringiz bilan tanishamiz.",
      },
      {
        title: "Tahlil",
        body: "Tahlil qilamiz, kamchilik va imkoniyatlarni aniqlaymiz.",
      },
      { title: "Reja", body: "Aniq strategiya va yoʻl xaritasini tuzamiz." },
      {
        title: "Bajarish",
        body: "Tizim, jarayon va harakatlarni joriy etamiz.",
      },
      {
        title: "Oʻsish",
        body: "Siz natija olasiz. Biz optimallashtiramiz va kengaytiramiz.",
      },
    ],
  },
  ru: {
    heading: "Как это работает",
    steps: [
      {
        title: "Изучение",
        body: "Мы узнаём о вашем бизнесе и его сложностях.",
      },
      {
        title: "Анализ",
        body: "Анализируем, находим слабые места и возможности.",
      },
      { title: "План", body: "Создаём чёткую стратегию и дорожную карту." },
      {
        title: "Внедрение",
        body: "Внедряем системы, процессы и действия.",
      },
      {
        title: "Рост",
        body: "Вы получаете результат. Мы оптимизируем и масштабируем.",
      },
    ],
  },
};

/** Parallel to `steps` — icons and numbers are the same in every language. */
const ICONS: LucideIcon[] = [
  Search,
  ClipboardList,
  FilePen,
  Settings,
  ChartNoAxesCombined,
];
const NUMBERS = ["01", "02", "03", "04", "05"];

/**
 * Ring geometry, in px. The connector is pinned to the ring's centre line and
 * stops short of both rings, so the two values have to be derived together.
 */
const RING = 68;
const CONNECTOR_INSET = RING / 2 + 28; // ring radius + the gap the mockup leaves

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
 * "How it works" — the five-step rail (reference/solutions.PNG).
 *
 * Five equal columns with no horizontal gap at `lg`, which is what lets each
 * column reach half a column to its left and draw the connector to its
 * neighbour. Below `lg` the row wraps, so the connectors are dropped entirely
 * rather than left dangling into empty space.
 */
export default function Process() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.heading} />
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-[1040px] grid-cols-1 gap-x-6 gap-y-10 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
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
                    <span className="absolute top-1/2 left-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf-bright" />
                  </span>
                ) : null}

                <span
                  className="grid shrink-0 place-items-center rounded-full border border-edge"
                  style={{ width: RING, height: RING }}
                >
                  <Icon
                    aria-hidden
                    size={30}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <span className="mt-4 text-[15px] font-semibold text-leaf-bright">
                  {NUMBERS[i]}
                </span>
                <h3 className="mt-2 text-[15.5px] font-semibold text-snow">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[22ch] text-[13px] leading-[1.6] text-snow-soft">
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
