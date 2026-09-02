"use client";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Container, Panel } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Block = {
  title: string;
  desc: string;
};

type PartnershipCopy = {
  /** Left-hand label for the whole band. */
  title: string;
  /** Two short lines under the label, each on its own row as in the mockup. */
  lead: readonly [string, string];
  team: Block;
  /** Sits inside the badge, under the figure. */
  shareLabel: string;
  results: Block;
};

/**
 * The client's own commercial terms, printed exactly as in the mockup. The
 * figure lives outside `copy` so no translation pass can round it, rephrase
 * it or attach a condition to it — every language reuses these two strings.
 * The same 30% is repeated inside `results.desc` and must stay verbatim there.
 */
const SHARE = { value: "30", unit: "%" } as const;

const copy: Copy<PartnershipCopy> = {
  en: {
    title: "Human Partnership",
    lead: ["We work with you.", "We grow together."],
    team: {
      title: "We become part of your team",
      desc:
        "We help you with strategy, systems, marketing, operations and everything that drives growth.",
    },
    shareLabel: "of new income",
    results: {
      title: "Our success depends on yours",
      desc:
        "We take 30% of the new income we help you generate. No results — no fee.",
    },
  },
  uz: {
    title: "Insoniy hamkorlik",
    lead: ["Biz siz bilan birga ishlaymiz.", "Birgalikda oʻsamiz."],
    team: {
      title: "Biz jamoangizning bir qismiga aylanamiz",
      desc:
        "Strategiya, tizimlar, marketing, operatsiyalar va oʻsishga turtki beradigan barcha narsada sizga yordam beramiz.",
    },
    shareLabel: "yangi daromaddan",
    results: {
      title: "Bizning muvaffaqiyatimiz sizniki bilan bogʻliq",
      desc:
        "Yaratishga yordam bergan yangi daromadingizdan 30% olamiz. Natija boʻlmasa — toʻlov ham boʻlmaydi.",
    },
  },
  ru: {
    title: "Человеческое партнёрство",
    lead: ["Мы работаем вместе с вами.", "Мы растём вместе."],
    team: {
      title: "Мы становимся частью вашей команды",
      desc:
        "Мы помогаем вам со стратегией, системами, маркетингом, операциями и всем, что двигает рост.",
    },
    shareLabel: "от нового дохода",
    results: {
      title: "Наш успех зависит от вашего",
      desc:
        "Мы берём 30% от нового дохода, который помогли вам заработать. Нет результата — нет оплаты.",
    },
  },
};

/**
 * "Human Partnership" band (reference/pricing.PNG): a label column on the
 * left and one wide bordered panel on the right holding the two halves of the
 * deal with the 30% badge between them.
 *
 * Both grids collapse at the same breakpoint (lg), so tablet and below get a
 * single centred stack — label, "part of your team", badge, "success depends
 * on yours" — in the mockup's reading order. The badge is a fixed-size circle
 * rather than an aspect-ratio box so it can never be squashed by a long
 * translation, and its label is free to wrap onto a second line inside it
 * (RU "от нового дохода" is the long one).
 */
export default function Partnership() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:items-center lg:gap-9">
          {/* ------------------------------------------------- left: the label */}
          <Reveal>
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight text-snow sm:text-[30px] lg:text-[32px]">
              {t.title}
            </h2>
            {/* Each sentence keeps its own row, as in the mockup, but either is
                free to wrap so no translation gets clipped. */}
            <p className="mt-3 text-[15px] leading-[1.6] text-snow-soft sm:text-base">
              <span className="block">{t.lead[0]}</span>
              <span className="block">{t.lead[1]}</span>
            </p>
          </Reveal>

          {/* ------------------------------------------------ right: the terms */}
          <Reveal delay={80}>
            <Panel className="p-6 sm:p-8 lg:px-10 lg:py-8">
              <div className="grid gap-8 text-center lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-10 lg:text-left">
                <Reveal delay={140}>
                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-leaf-bright sm:text-[19px]">
                    {t.team.title}
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-[38ch] text-sm leading-relaxed text-snow-soft sm:text-[15px] lg:mx-0">
                    {t.team.desc}
                  </p>
                </Reveal>

                {/* --------------------------------------------- the 30% badge */}
                <Reveal delay={200} className="flex justify-center">
                  <div className="relative grid size-[136px] shrink-0 place-items-center rounded-full border border-leaf/60 bg-leaf/5 sm:size-[144px]">
                    {/* Soft glow ring. Decorative, and blurred well inside the
                        panel's padding so it never widens the page. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-2 rounded-full bg-leaf/10 blur-2xl"
                    />
                    <p className="relative px-4 text-center">
                      <span className="flex items-baseline justify-center leading-none">
                        <span className="text-[38px] font-semibold tracking-tight text-leaf-bright sm:text-[42px]">
                          {SHARE.value}
                        </span>
                        <span className="text-[19px] font-semibold text-leaf-bright sm:text-[21px]">
                          {SHARE.unit}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-[11.5px] leading-tight text-snow-soft">
                        {t.shareLabel}
                      </span>
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={260}>
                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-leaf-bright sm:text-[19px]">
                    {t.results.title}
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-[38ch] text-sm leading-relaxed text-snow-soft sm:text-[15px] lg:mx-0">
                    {t.results.desc}
                  </p>
                </Reveal>
              </div>
            </Panel>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
