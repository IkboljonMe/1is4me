"use client";

import {
  FileText,
  LayoutGrid,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Step = { title: string; body: string };
type Content = { heading: string; lead: string; steps: Step[] };

/** Copy lives beside the section — one object per language (reference/smart_tools.PNG). */
const copy: Copy<Content> = {
  en: {
    heading: "How Smart Tools Work",
    lead: "Simple process. Powerful results.",
    steps: [
      { title: "Choose a Tool", body: "Pick the tool that fits your current need." },
      {
        title: "Add Your Input",
        body: "Answer a few questions or add the details we need.",
      },
      {
        title: "Get Instant Results",
        body: "Our tool processes the data and gives you the output.",
      },
      {
        title: "Take Action",
        body: "Use the results to make better decisions and grow.",
      },
    ],
  },
  uz: {
    heading: "Smart Tools qanday ishlaydi",
    lead: "Oddiy jarayon. Kuchli natijalar.",
    steps: [
      {
        title: "Vositani tanlang",
        body: "Hozirgi ehtiyojingizga mos vositani tanlang.",
      },
      {
        title: "Maʼlumot kiriting",
        body: "Bir necha savolga javob bering yoki kerakli tafsilotlarni qoʻshing.",
      },
      {
        title: "Natijani darhol oling",
        body: "Vosita maʼlumotlarni qayta ishlaydi va natijani beradi.",
      },
      {
        title: "Harakatga oʻting",
        body: "Natijalar asosida yaxshiroq qaror qabul qiling va oʻsing.",
      },
    ],
  },
  ru: {
    heading: "Как работают Smart Tools",
    lead: "Простой процесс. Мощный результат.",
    steps: [
      {
        title: "Выберите инструмент",
        body: "Выберите инструмент под вашу текущую задачу.",
      },
      {
        title: "Введите данные",
        body: "Ответьте на несколько вопросов или добавьте нужные детали.",
      },
      {
        title: "Получите результат сразу",
        body: "Инструмент обрабатывает данные и выдаёт результат.",
      },
      {
        title: "Действуйте",
        body: "Используйте результат, чтобы принимать лучшие решения и расти.",
      },
    ],
  },
};

/** Parallel to `steps` — icons and numbers are the same in every language. */
const ICONS: LucideIcon[] = [LayoutGrid, FileText, Sparkles, Target];
const NUMBERS = ["01", "02", "03", "04"];

/**
 * Ring geometry, in px. The connector is pinned to the ring's centre line and
 * stops short of both rings, so the two values have to be derived together.
 */
const RING = 76;
const CONNECTOR_INSET = RING / 2 + 22; // ring radius + the gap the mockup leaves

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
 * "How Smart Tools Work" — the four-step rail (reference/smart_tools.PNG).
 *
 * Same pattern as the Solutions rail: four equal columns with no horizontal gap
 * at `lg`, which is what lets each column reach half a column to its left and
 * draw the connector to its neighbour. Below `lg` the row wraps, so the
 * connectors are dropped rather than left dangling into empty space.
 *
 * The hero links here, hence the `id` and the sticky-header scroll offset.
 */
export default function Process() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.heading} lead={c.lead} />
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-1 gap-x-6 gap-y-10 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
          {c.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={step.title}
                delay={i * 70}
                className="relative flex flex-col items-center px-2 text-center"
              >
                {/* Runs back to the previous ring, so the first step has none.
                    Hidden until the rail is a single 4-up row. */}
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
                  className="grid shrink-0 place-items-center rounded-full border border-leaf/60"
                  style={{ width: RING, height: RING }}
                >
                  <Icon
                    aria-hidden
                    size={32}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <span className="mt-4 text-[15px] font-semibold text-leaf-bright">
                  {NUMBERS[i]}
                </span>
                <h3 className="mt-2 text-[16px] font-semibold text-snow">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[24ch] text-[13px] leading-[1.6] text-snow-soft">
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
