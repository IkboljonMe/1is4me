"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, Panel } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";
import { TOOLS } from "@/lib/v2/tools";

/**
 * "All Smart Tools" — the filterable grid at the heart of the Smart Tools
 * page (reference/smart_tools.PNG). The hero's CTA scrolls here, hence the
 * `all-tools` id.
 *
 * Tool names and icons come from @/lib/v2/tools so the three pages that list
 * the tools cannot drift apart. This file owns only the category each tool
 * belongs to and the three-line description under it.
 *
 * NOTE(copy): the mockup labels four of the cards differently from the rest
 * of the site — "Content Writer", "Strategy Planner", "Data Analyzer" and
 * "Business Checker". The shared names win, because they are already live on
 * the home and Solutions pages; the mockup's descriptions are kept verbatim.
 */

const CATEGORIES = ["all", "content", "strategy", "analysis", "support"] as const;
type CategoryId = (typeof CATEGORIES)[number];

/**
 * One category per tool, keyed by the name in TOOLS. Every entry of TOOLS must
 * appear here — a tool missing from this map would only ever show under
 * "All Tools".
 */
const TOOL_CATEGORY: Record<string, Exclude<CategoryId, "all">> = {
  "Content Writer": "content",
  "Social Media Ideas": "content",
  "Market Research": "analysis",
  "Competitor Analysis": "analysis",
  "Data Analyzer": "analysis",
  "Business Ideas": "strategy",
  // Its description is "Build winning strategies with clear steps, actions and
  // roadmaps" — planning, not content.
  "Strategy Planner": "strategy",
  "Business Checker": "support",
};

/**
 * TODO(routes): every card should open its own tool page. None of those pages
 * exist yet, so all eight point at the audit form.
 */
const TOOL_HREF = "/audit-form";

type ToolGridCopy = {
  title: string;
  lead: string;
  /** Accessible name of the pill group. */
  filterGroup: string;
  filters: Record<CategoryId, string>;
  cta: string;
  /** Announced on every filter change. {shown} and {total} are substituted. */
  count: string;
  /** One description per tool, keyed by the name in TOOLS. */
  descriptions: Record<string, string>;
};

const copy: Copy<ToolGridCopy> = {
  en: {
    title: "All Smart Tools",
    lead: "Choose the tool you need and get started right away.",
    filterGroup: "Filter tools by category",
    filters: {
      all: "All Tools",
      content: "Content & Marketing",
      strategy: "Strategy & Planning",
      analysis: "Analysis & Research",
      support: "Business Support",
    },
    cta: "Use Tool",
    count: "Showing {shown} of {total} tools.",
    descriptions: {
      "Content Writer":
        "Create high-quality content for blogs, ads, social media and more in seconds.",
      "Market Research":
        "Get insights about your market, audience, competitors and industry trends.",
      "Business Ideas":
        "Get tailored business ideas based on market demand and real opportunities.",
      "Competitor Analysis":
        "Analyze any competitor. See their strengths, weaknesses and growth opportunities.",
      "Strategy Planner":
        "Build winning strategies with clear steps, actions and roadmaps.",
      "Data Analyzer":
        "Turn numbers into clear insights. Understand performance and make better decisions.",
      "Social Media Ideas":
        "Get content ideas, post captions and growth tips for any platform.",
      "Business Checker":
        "Check your business health. Get a quick review and improvement suggestions.",
    },
  },
  uz: {
    title: "Barcha aqlli vositalar",
    lead: "Kerakli vositani tanlang va darhol ishni boshlang.",
    filterGroup: "Vositalarni turkum boʻyicha filtrlash",
    filters: {
      all: "Barcha vositalar",
      content: "Kontent va marketing",
      strategy: "Strategiya va rejalashtirish",
      analysis: "Tahlil va tadqiqot",
      support: "Biznesga koʻmak",
    },
    cta: "Vositani ishlatish",
    count: "{total} tadan {shown} ta vosita koʻrsatilmoqda.",
    descriptions: {
      "Content Writer":
        "Bloglar, reklama, ijtimoiy tarmoqlar va boshqalar uchun sifatli kontentni bir necha soniyada yarating.",
      "Market Research":
        "Bozoringiz, auditoriyangiz, raqobatchilaringiz va soha tendensiyalari haqida xulosalar oling.",
      "Business Ideas":
        "Bozor talabi va real imkoniyatlarga asoslangan, sizga moslangan biznes gʻoyalarini oling.",
      "Competitor Analysis":
        "Istalgan raqobatchini tahlil qiling. Uning kuchli, zaif tomonlari va oʻsish imkoniyatlarini koʻring.",
      "Strategy Planner":
        "Aniq qadamlar, harakatlar va yoʻl xaritalari bilan yutuqli strategiyalar tuzing.",
      "Data Analyzer":
        "Raqamlarni aniq xulosalarga aylantiring. Samaradorlikni tushuning va yaxshiroq qaror qabul qiling.",
      "Social Media Ideas":
        "Istalgan platforma uchun kontent gʻoyalari, post matnlari va oʻsish maslahatlarini oling.",
      "Business Checker":
        "Biznesingiz sogʻlomligini tekshiring. Tezkor tahlil va yaxshilash takliflarini oling.",
    },
  },
  ru: {
    title: "Все умные инструменты",
    lead: "Выберите нужный инструмент и начните прямо сейчас.",
    filterGroup: "Фильтр инструментов по категориям",
    filters: {
      all: "Все инструменты",
      content: "Контент и маркетинг",
      strategy: "Стратегия и планирование",
      analysis: "Анализ и исследования",
      support: "Поддержка бизнеса",
    },
    cta: "Открыть инструмент",
    count: "Показано {shown} из {total} инструментов.",
    descriptions: {
      "Content Writer":
        "Создавайте качественный контент для блогов, рекламы, соцсетей и не только — за секунды.",
      "Market Research":
        "Получайте выводы о вашем рынке, аудитории, конкурентах и трендах отрасли.",
      "Business Ideas":
        "Получайте бизнес-идеи под вас — на основе спроса на рынке и реальных возможностей.",
      "Competitor Analysis":
        "Анализируйте любого конкурента. Смотрите его сильные и слабые стороны и точки роста.",
      "Strategy Planner":
        "Стройте выигрышные стратегии с чёткими шагами, действиями и дорожными картами.",
      "Data Analyzer":
        "Превращайте цифры в понятные выводы. Разбирайтесь в показателях и принимайте решения лучше.",
      "Social Media Ideas":
        "Получайте идеи контента, тексты постов и советы по росту для любой платформы.",
      "Business Checker":
        "Проверьте здоровье вашего бизнеса. Получите быстрый разбор и предложения по улучшению.",
    },
  },
};

/** Pure — exported so the filter can be reasoned about (and tested) on its own. */
export function matchesCategory(toolName: string, category: CategoryId) {
  return category === "all" || TOOL_CATEGORY[toolName] === category;
}

export default function ToolGrid() {
  const { lang } = useLang();
  const t = copy[lang];
  const [active, setActive] = useState<CategoryId>("all");

  const shown = TOOLS.filter((tool) => matchesCategory(tool.name, active));

  return (
    <section id="all-tools" className="scroll-mt-24 py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between xl:gap-10">
            <div>
              <h2 className="text-[26px] font-semibold tracking-tight text-snow sm:text-[30px]">
                {t.title}
              </h2>
              <span
                aria-hidden
                className="mt-2 block h-[3px] w-10 rounded-full bg-leaf-bright"
              />
              <p className="mt-3 text-sm text-snow-muted sm:text-[15px]">
                {t.lead}
              </p>
            </div>

            {/* The pills only share the title's row once there is width for
                all five; below that they wrap onto their own row under the
                title, and they wrap among themselves at any width — the UZ and
                RU labels are half again as long as the English ones. */}
            <div
              role="group"
              aria-label={t.filterGroup}
              className="flex flex-wrap gap-2 xl:justify-end xl:pt-1"
            >
              {CATEGORIES.map((id) => {
                const isActive = id === active;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActive(id)}
                    aria-pressed={isActive}
                    className={`inline-flex min-h-10 items-center rounded-lg border px-3 text-[12.5px] font-medium whitespace-nowrap transition-colors sm:min-h-9 focus-visible:ring-2 focus-visible:ring-leaf/60 focus-visible:outline-none sm:px-3.5 sm:py-2 sm:text-[13px] lg:px-3 lg:text-[12px] xl:px-3.5 xl:text-[13px] ${
                      isActive
                        ? "border-transparent bg-gradient-to-b from-leaf to-leaf-deep text-white"
                        : "border-edge-strong text-snow-soft hover:border-leaf hover:text-leaf-bright"
                    }`}
                  >
                    {t.filters[id]}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <p role="status" aria-live="polite" className="sr-only">
          {t.count
            .replace("{shown}", String(shown.length))
            .replace("{total}", String(TOOLS.length))}
        </p>

        {/* One Reveal around the whole grid, never around a card: a card that
            reappears after a filter change must not wait for a fresh
            intersection to fade in. Filtered-out cards stay mounted and are
            hidden, so nothing remounts and no card height is recomputed. */}
        <Reveal>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {TOOLS.map(({ name, Icon }) => (
              <li
                key={name}
                className={matchesCategory(name, active) ? "" : "hidden"}
              >
                <Panel className="group flex h-full flex-col p-5 transition-colors hover:border-edge-strong sm:p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-leaf/40 bg-leaf/10">
                    <Icon
                      aria-hidden
                      size={22}
                      strokeWidth={1.5}
                      className="text-leaf-bright"
                    />
                  </span>

                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-snow">
                    {name}
                  </h3>
                  {/* Three lines in the mockup. The min-height reserves them so
                      a shorter description cannot shrink its row. */}
                  <p className="mt-2.5 min-h-[calc(3*1.7em)] text-sm leading-[1.7] text-snow-soft">
                    {t.descriptions[name]}
                  </p>

                  <Link
                    href={TOOL_HREF}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded pt-4 text-sm font-medium text-leaf-bright transition hover:text-snow focus-visible:ring-2 focus-visible:ring-leaf/60 focus-visible:outline-none"
                  >
                    {t.cta}
                    <ArrowRight
                      aria-hidden
                      size={16}
                      strokeWidth={1.75}
                      className="transition-transform group-hover:translate-x-1"
                    />
                    <span className="sr-only"> — {name}</span>
                  </Link>
                </Panel>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
