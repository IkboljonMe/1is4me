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

import type { Copy } from "@/lib/v2/copy";

/**
 * The eight AI tools, shared by every page that lists them (home's
 * "Powerful AI tools" panel, the Solutions page's additional-option panel,
 * and the Smart Tools page). Names are product names and stay English in all
 * three languages; only the captions translate.
 *
 * `chip` is the tile colour used on the home page, sampled from the mockup —
 * pages that draw the icons as green outlines simply ignore it.
 */
export const TOOLS: { name: string; Icon: LucideIcon; chip: string }[] = [
  { name: "Content Writer", Icon: PenLine, chip: "#0F4585" },
  { name: "Market Research", Icon: Search, chip: "#96303A" },
  { name: "Business Ideas", Icon: Lightbulb, chip: "#8A7318" },
  { name: "Competitor Analysis", Icon: Brain, chip: "#0F7A71" },
  { name: "Strategy Planner", Icon: CalendarDays, chip: "#5A2C8C" },
  { name: "Data Analyzer", Icon: ChartNoAxesCombined, chip: "#2A7A2C" },
  { name: "Social Media Ideas", Icon: Heart, chip: "#A3355F" },
  { name: "Business Checker", Icon: LayoutDashboard, chip: "#B27C1B" },
];

/** One caption per tool, in the order of TOOLS. */
export const TOOL_CAPTIONS: Copy<string[]> = {
  en: [
    "Create content",
    "Get insights",
    "Find opportunities",
    "Stay ahead",
    "Plan smarter",
    "Understand data",
    "Grow your presence",
    "Quick business review",
  ],
  uz: [
    "Kontent yarating",
    "Xulosalar oling",
    "Imkoniyat toping",
    "Oldinda boʻling",
    "Rejani puxta tuzing",
    "Maʼlumotni tushuning",
    "Auditoriyangizni oshiring",
    "Tezkor biznes tekshiruvi",
  ],
  ru: [
    "Создавайте контент",
    "Получайте выводы",
    "Находите возможности",
    "Будьте впереди",
    "Планируйте точнее",
    "Понимайте данные",
    "Растите охват",
    "Быстрая проверка бизнеса",
  ],
};
