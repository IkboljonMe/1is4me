"use client";

import {
  Brain,
  CalendarDays,
  ChartNoAxesCombined,
  Heart,
  LayoutDashboard,
  Lightbulb,
  PenLine,
  Search,
  type LucideIcon,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { Button, Container, Eyebrow, Panel, Wave } from "@/components/v2/ui";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";

/**
 * "Powerful AI tools" — the AI-services panel from reference/home.PNG.
 *
 * Left half sells the services, right half is the eight-tile menu. The tile
 * chips are the one place the v2 palette allows raw colour: each tool keeps
 * its own hue so the grid reads as a menu rather than a list. Values are
 * sampled from the mockup and stay dark enough to sit on the near-black card.
 */
const TOOLS: { name: string; Icon: LucideIcon; chip: string }[] = [
  { name: "AI Writer", Icon: PenLine, chip: "#0F4585" },
  { name: "Market Research", Icon: Search, chip: "#96303A" },
  { name: "Business Ideas", Icon: Lightbulb, chip: "#8A7318" },
  { name: "Competitor Analysis", Icon: Brain, chip: "#0F7A71" },
  { name: "Content Planner", Icon: CalendarDays, chip: "#5A2C8C" },
  { name: "Data Analysis", Icon: ChartNoAxesCombined, chip: "#2A7A2C" },
  { name: "Social Media Ideas", Icon: Heart, chip: "#A3355F" },
  { name: "Business Check", Icon: LayoutDashboard, chip: "#B27C1B" },
];

type ToolsCopy = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  lead: string;
  cta: string;
  /** One caption per tool, in the order of TOOLS. Tool names stay in English. */
  captions: string[];
};

const copy: Copy<ToolsCopy> = {
  en: {
    eyebrow: "Try our AI services",
    titleTop: "Powerful AI tools.",
    titleBottom: "Built for business.",
    lead:
      "From content and research to analysis and automation — our AI services save you time and help you do more.",
    cta: "Explore AI Services",
    captions: [
      "Create content",
      "Get insights",
      "Find opportunities",
      "Stay ahead",
      "Plan smarter",
      "Understand data",
      "Grow your presence",
      "Quick business review",
    ],
  },
  uz: {
    eyebrow: "AI xizmatlarimizni sinab koʻring",
    titleTop: "Kuchli AI vositalari.",
    titleBottom: "Biznes uchun yaratilgan.",
    lead:
      "Kontent va tadqiqotdan tahlil va avtomatlashtirishgacha — AI xizmatlarimiz vaqtingizni tejaydi va koʻproq ish qilishga yordam beradi.",
    cta: "AI xizmatlarini koʻrish",
    captions: [
      "Kontent yarating",
      "Xulosalar oling",
      "Imkoniyat toping",
      "Oldinda boʻling",
      "Rejani puxta tuzing",
      "Maʼlumotni tushuning",
      "Auditoriyangizni oshiring",
      "Tezkor biznes tekshiruvi",
    ],
  },
  ru: {
    eyebrow: "Попробуйте наши AI-сервисы",
    titleTop: "Мощные AI-инструменты.",
    titleBottom: "Созданы для бизнеса.",
    lead:
      "От контента и исследований до анализа и автоматизации — наши AI-сервисы экономят время и помогают делать больше.",
    cta: "Смотреть AI-сервисы",
    captions: [
      "Создавайте контент",
      "Получайте выводы",
      "Находите возможности",
      "Будьте впереди",
      "Планируйте точнее",
      "Понимайте данные",
      "Растите охват",
      "Быстрая проверка бизнеса",
    ],
  },
};

export default function Tools() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="pt-6 sm:pt-8">
      <Container>
        <Reveal>
          {/* overflow-hidden clips the wave — without it the glow would push
              the page sideways on small screens. */}
          <Panel className="relative overflow-hidden">
            <Wave className="-bottom-[35%] -left-[28%] h-[165%] w-[78%] opacity-80" />

            <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-10">
              <div>
                <Eyebrow>{t.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-tight text-snow sm:text-[32px]">
                  {t.titleTop}
                  <br />
                  {t.titleBottom}
                </h2>
                <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-snow-soft">
                  {t.lead}
                </p>
                <Button href="/v2/smart-tools" className="mt-6">
                  {t.cta}
                </Button>
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {TOOLS.map(({ name, Icon, chip }, i) => (
                  <Reveal
                    as="li"
                    key={name}
                    delay={60 + i * 40}
                    className="rounded-xl border border-edge bg-panel-2 p-4 transition hover:border-edge-strong"
                  >
                    <span
                      className="relative grid h-10 w-10 place-items-center rounded-[11px]"
                      style={{ backgroundColor: chip }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-[11px] bg-gradient-to-b from-white/15 to-transparent"
                      />
                      <Icon
                        aria-hidden
                        strokeWidth={1.5}
                        className="relative h-5 w-5 text-white"
                      />
                    </span>
                    <p className="mt-3.5 text-[13px] font-semibold text-snow">
                      {name}
                    </p>
                    <p className="mt-1 text-xs text-snow-muted">
                      {t.captions[i]}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
