"use client";

import {
  Lock,
  MessageSquareText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Reason = { title: string; body: string };
type Content = {
  heading: string;
  lead: string;
  reasons: readonly [Reason, Reason, Reason, Reason];
};

/** Copy lives beside the section — one object per language (reference/how_it_works.PNG). */
const copy: Copy<Content> = {
  en: {
    heading: "Why businesses trust 1is4Me",
    lead: "Real partnerships. Real results.",
    reasons: [
      {
        title: "One Partner",
        body: "Three core services. One partner. Everything your business needs to grow.",
      },
      {
        title: "Proven Approach",
        body: "A structured process tested with businesses in different industries and stages.",
      },
      {
        title: "Human + Tools",
        body: "The right mix of human expertise and smart tools for faster and better outcomes.",
      },
      {
        title: "Long-Term Focus",
        body: "We don't chase quick wins. We build systems for sustainable growth.",
      },
    ],
  },
  uz: {
    heading: "Nega bizneslar 1is4Me ga ishonadi",
    lead: "Haqiqiy hamkorlik. Haqiqiy natijalar.",
    reasons: [
      {
        title: "Yagona hamkor",
        body: "Uchta asosiy xizmat. Bitta hamkor. Biznesingiz oʻsishi uchun kerak boʻlgan hamma narsa.",
      },
      {
        title: "Sinovdan oʻtgan yondashuv",
        body: "Turli soha va bosqichdagi bizneslar bilan sinab koʻrilgan tizimli jarayon.",
      },
      {
        title: "Inson + vositalar",
        body: "Tezroq va yaxshiroq natija uchun inson tajribasi va aqlli vositalarning toʻgʻri uygʻunligi.",
      },
      {
        title: "Uzoq muddatli yondashuv",
        body: "Biz tezkor yutuqlar ketidan quvmaymiz. Barqaror oʻsish uchun tizimlar quramiz.",
      },
    ],
  },
  ru: {
    heading: "Почему бизнесы доверяют 1is4Me",
    lead: "Настоящее партнёрство. Настоящие результаты.",
    reasons: [
      {
        title: "Один партнёр",
        body: "Три ключевые услуги. Один партнёр. Всё, что нужно вашему бизнесу для роста.",
      },
      {
        title: "Проверенный подход",
        body: "Структурированный процесс, проверенный с бизнесами в разных отраслях и на разных этапах.",
      },
      {
        title: "Люди + инструменты",
        body: "Верное сочетание человеческого опыта и умных инструментов для более быстрых и лучших результатов.",
      },
      {
        title: "Долгосрочный фокус",
        body: "Мы не гонимся за быстрыми победами. Мы строим системы для устойчивого роста.",
      },
    ],
  },
};

/** Parallel to `reasons` — the icon set is the same in every language. */
const ICONS: readonly LucideIcon[] = [
  Users,
  ShieldCheck,
  MessageSquareText,
  Lock,
];

/**
 * "Why businesses trust 1is4Me" — four unframed columns under the section
 * head. Same icon-tile-and-text row as the stage cards above it, without the
 * card surface, so the two bands read as one family rather than two grids.
 */
export default function Trust() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.heading} lead={c.lead} />
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 sm:mt-11 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
          {c.reasons.map((reason, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={reason.title}
                delay={i * 70}
                className="flex items-start gap-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-leaf/40 bg-panel-2">
                  <Icon
                    aria-hidden
                    size={20}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="flex min-h-11 items-center text-[15px] font-semibold tracking-tight text-snow">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-snow-muted">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
