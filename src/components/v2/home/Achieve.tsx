"use client";

import {
  ChartNoAxesCombined,
  Settings,
  Tag,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Item = { title: string; body: string };
type Content = { heading: string; lead: string; items: Item[] };

/** Copy lives beside the section — one object per language (reference/home.PNG). */
const copy: Copy<Content> = {
  en: {
    heading: "What we help you achieve",
    lead: "Real progress begins with the right plan.",
    items: [
      {
        title: "Clear Direction",
        body: "Understand your business clearly and focus on what really matters.",
      },
      {
        title: "Sustainable Growth",
        body: "Build strategies and systems that create steady and measurable growth.",
      },
      {
        title: "Better Systems",
        body: "We organize, automate and streamline your business operations.",
      },
      {
        title: "Stronger Brand",
        body: "We position your brand the right way and make it stand out.",
      },
      {
        title: "Real Results",
        body: "We focus on outcomes that impact your revenue, profit and long-term success.",
      },
    ],
  },
  uz: {
    heading: "Biz nimaga erishishingizga yordam beramiz",
    lead: "Haqiqiy taraqqiyot toʻgʻri rejadan boshlanadi.",
    items: [
      {
        title: "Aniq yoʻnalish",
        body: "Biznesingizni aniq tushunasiz va haqiqatan muhim boʻlgan narsalarga eʼtibor qaratasiz.",
      },
      {
        title: "Barqaror oʻsish",
        body: "Barqaror va oʻlchanadigan oʻsish beradigan strategiya va tizimlarni quramiz.",
      },
      {
        title: "Yaxshi tizimlar",
        body: "Biznes jarayonlaringizni tartibga solamiz, avtomatlashtiramiz va soddalashtiramiz.",
      },
      {
        title: "Kuchli brend",
        body: "Brendingizni toʻgʻri joylashtiramiz va uni ajralib turadigan qilamiz.",
      },
      {
        title: "Haqiqiy natijalar",
        body: "Daromad, foyda va uzoq muddatli muvaffaqiyatingizga taʼsir qiladigan natijalarga qaratamiz.",
      },
    ],
  },
  ru: {
    heading: "Чего мы помогаем достичь",
    lead: "Настоящий прогресс начинается с правильного плана.",
    items: [
      {
        title: "Ясное направление",
        body: "Вы ясно понимаете свой бизнес и фокусируетесь на том, что действительно важно.",
      },
      {
        title: "Устойчивый рост",
        body: "Строим стратегии и системы, которые дают стабильный и измеримый рост.",
      },
      {
        title: "Лучшие системы",
        body: "Организуем, автоматизируем и упрощаем ваши бизнес-процессы.",
      },
      {
        title: "Сильный бренд",
        body: "Позиционируем ваш бренд правильно и делаем его заметным.",
      },
      {
        title: "Реальные результаты",
        body: "Фокусируемся на результатах, которые влияют на выручку, прибыль и долгосрочный успех.",
      },
    ],
  },
};

/** Parallel to `items` — the icon set is the same in every language. */
const ICONS: LucideIcon[] = [Target, ChartNoAxesCombined, Settings, Tag, Users];

/**
 * The hairlines only make sense between columns on the same row, so each
 * column carries the breakpoints at which it is *not* first in its row:
 * 5-up from lg, 2-up from sm, stacked below that.
 */
const DIVIDERS = [
  "",
  "sm:border-l sm:border-edge",
  "lg:border-l lg:border-edge",
  "sm:border-l sm:border-edge",
  "lg:border-l lg:border-edge",
];

/** "What we help you achieve" — five outcome columns split by hairlines. */
export default function Achieve() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.heading} lead={c.lead} />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-5 lg:gap-y-0">
          {c.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={item.title}
                delay={i * 70}
                className={`flex flex-col items-center px-4 text-center sm:px-6 lg:px-8 ${DIVIDERS[i]}`}
              >
                <Icon
                  aria-hidden
                  size={34}
                  strokeWidth={1.5}
                  className="text-leaf-bright"
                />
                <h3 className="mt-5 text-[15.5px] font-semibold text-snow">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-sm leading-[1.65] text-snow-soft">
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
