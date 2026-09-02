"use client";

import {
  ChartNoAxesCombined,
  Rocket,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, Panel, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Card = { title: string; body: string };
type Content = { heading: string; cards: readonly [Card, Card, Card, Card] };

/** Copy lives beside the section — one object per language (reference/how_it_works.PNG). */
const copy: Copy<Content> = {
  en: {
    heading: "What you get at every stage",
    cards: [
      {
        title: "Clarity",
        body: "Know exactly what's working, what's not and where to focus.",
      },
      {
        title: "Strategy",
        body: "A custom plan built for your business, not a template.",
      },
      {
        title: "Systems",
        body: "Processes and tools that save time and increase performance.",
      },
      {
        title: "Results",
        body: "More clients, higher profit, lower costs, better decisions.",
      },
    ],
  },
  uz: {
    heading: "Har bir bosqichda nima olasiz",
    cards: [
      {
        title: "Aniqlik",
        body: "Nima ishlayotganini, nima ishlamayotganini va nimaga eʼtibor qaratish kerakligini aniq bilasiz.",
      },
      {
        title: "Strategiya",
        body: "Shablon emas, aynan sizning biznesingiz uchun tuzilgan reja.",
      },
      {
        title: "Tizimlar",
        body: "Vaqtni tejaydigan va samaradorlikni oshiradigan jarayonlar va vositalar.",
      },
      {
        title: "Natijalar",
        body: "Koʻproq mijoz, yuqoriroq foyda, kamroq xarajat, yaxshiroq qarorlar.",
      },
    ],
  },
  ru: {
    heading: "Что вы получаете на каждом этапе",
    cards: [
      {
        title: "Ясность",
        body: "Вы точно знаете, что работает, что нет и на чём сосредоточиться.",
      },
      {
        title: "Стратегия",
        body: "Индивидуальный план для вашего бизнеса, а не шаблон.",
      },
      {
        title: "Системы",
        body: "Процессы и инструменты, которые экономят время и повышают эффективность.",
      },
      {
        title: "Результаты",
        body: "Больше клиентов, выше прибыль, ниже расходы, лучше решения.",
      },
    ],
  },
};

/** Parallel to `cards` — the icon set is the same in every language. */
const ICONS: readonly LucideIcon[] = [
  Target,
  ChartNoAxesCombined,
  Rocket,
  TrendingUp,
];

/**
 * "What you get at every stage" — four bordered cards, each a green icon tile
 * beside the outcome. The title is centred against the tile and the copy runs
 * under it (indented to the title, as in the mockup), so the tile column stays
 * clean however far a translation wraps.
 */
export default function Stages() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.heading} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {c.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={card.title} delay={i * 70}>
                <Panel className="h-full p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-leaf/40 bg-leaf/10">
                      <Icon
                        aria-hidden
                        size={20}
                        strokeWidth={1.5}
                        className="text-leaf-bright"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="flex min-h-11 items-center text-[15px] font-semibold tracking-tight text-snow">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.6] text-snow-muted">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
