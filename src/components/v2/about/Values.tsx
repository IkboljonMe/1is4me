"use client";

import {
  ChartNoAxesCombined,
  Heart,
  Lightbulb,
  ShieldCheck,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Value = { title: string; body: string };
type Content = { title: string; values: Value[] };

/**
 * "Our Approach. Our Values." (reference/about_us.PNG).
 *
 * NOTE(copy): the English strings are the mockup's own words, verbatim — six
 * one-sentence value statements and nothing else. The mockup prints no lead
 * line under the heading and no proof of any kind, so none is added here.
 */
const copy: Copy<Content> = {
  en: {
    title: "Our Approach. Our Values.",
    values: [
      { title: "Partnership", body: "We work with you, not just for you." },
      { title: "Integrity", body: "Honest, transparent and always reliable." },
      {
        title: "Focus",
        body: "We focus on the right things that drive results.",
      },
      { title: "Innovation", body: "We bring new ideas and better solutions." },
      { title: "Results", body: "Your growth is our measuring stick." },
      { title: "Commitment", body: "We are with you for the long term." },
    ],
  },
  uz: {
    title: "Bizning yondashuvimiz. Bizning qadriyatlarimiz.",
    values: [
      {
        title: "Hamkorlik",
        body: "Biz siz uchun emas, siz bilan birga ishlaymiz.",
      },
      {
        title: "Halollik",
        body: "Halol, shaffof va doimo ishonchli.",
      },
      {
        title: "Fokus",
        body: "Natija keltiradigan toʻgʻri ishlarga eʼtibor qaratamiz.",
      },
      {
        title: "Innovatsiya",
        body: "Yangi gʻoyalar va yaxshiroq yechimlar olib kelamiz.",
      },
      {
        title: "Natijalar",
        body: "Sizning oʻsishingiz — bizning oʻlchovimiz.",
      },
      {
        title: "Sadoqat",
        body: "Biz siz bilan uzoq muddat birgamiz.",
      },
    ],
  },
  ru: {
    title: "Наш подход. Наши ценности.",
    values: [
      {
        title: "Партнёрство",
        body: "Мы работаем с вами, а не просто на вас.",
      },
      {
        title: "Честность",
        body: "Честно, прозрачно и всегда надёжно.",
      },
      {
        title: "Фокус",
        body: "Мы фокусируемся на том, что действительно даёт результат.",
      },
      {
        title: "Инновации",
        body: "Мы приносим новые идеи и лучшие решения.",
      },
      {
        title: "Результаты",
        body: "Ваш рост — наше мерило.",
      },
      {
        title: "Приверженность",
        body: "Мы рядом с вами надолго.",
      },
    ],
  },
};

/** Parallel to `values` — the icon set is the same in every language. */
const ICONS: LucideIcon[] = [
  UsersRound,
  ShieldCheck,
  Target,
  Lightbulb,
  ChartNoAxesCombined,
  Heart,
];

/**
 * A hairline only makes sense *between* columns of the same row, so each
 * column carries the breakpoints at which it is not the first in its row:
 * 6-up from lg, 3-up from md, 2-up from sm, stacked below that.
 *
 * Index 3 is the awkward one — second in its row at sm, but first in the
 * second row at md — so it turns its border off again at md and back on at lg.
 */
const DIVIDERS = [
  "",
  "sm:border-l sm:border-edge",
  "md:border-l md:border-edge",
  "sm:border-l sm:border-edge md:border-l-0 lg:border-l lg:border-edge",
  "md:border-l md:border-edge",
  "sm:border-l sm:border-edge",
];

/** "Our Approach. Our Values." — six value columns split by hairlines. */
export default function Values() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.title} />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {c.values.map((value, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={value.title}
                delay={i * 70}
                className={`flex flex-col items-center px-3 text-center sm:px-5 lg:px-4 ${DIVIDERS[i]}`}
              >
                <Icon
                  aria-hidden
                  size={30}
                  strokeWidth={1.5}
                  className="text-leaf-bright"
                />
                <h3 className="mt-4 text-[14.5px] font-semibold text-snow">
                  {value.title}
                </h3>
                <p className="mt-2.5 max-w-[22ch] text-[12.5px] leading-[1.7] text-snow-muted">
                  {value.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
