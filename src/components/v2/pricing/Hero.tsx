"use client";

import { Headset, Lock, Rocket } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Container, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Block = {
  title: string;
  /** Two short lines; the mockup breaks each description over two rows. */
  desc: readonly [string, string];
};

type HeroCopy = {
  /** Two display lines; the second one carries the green. */
  headline: readonly [string, string];
  /** Two lead lines, each on its own row as in the mockup. */
  lead: readonly [string, string];
  blocks: readonly [Block, Block, Block];
};

const copy: Copy<HeroCopy> = {
  en: {
    headline: ["Simple pricing.", "Real value."],
    lead: [
      "Start free. Upgrade when you’re ready.",
      "Pay only for what creates real impact.",
    ],
    blocks: [
      { title: "Start Free", desc: ["No credit card", "No commitment"] },
      {
        title: "Cancel Anytime",
        desc: ["Change or cancel", "whenever you want"],
      },
      {
        title: "Human Partnership",
        desc: ["When we work together,", "we grow together"],
      },
    ],
  },
  uz: {
    headline: ["Oddiy narxlar.", "Haqiqiy qiymat."],
    lead: [
      "Bepul boshlang. Tayyor boʻlganingizda tarifni oshiring.",
      "Faqat haqiqiy natija beradigan narsa uchun toʻlang.",
    ],
    blocks: [
      {
        title: "Bepul boshlang",
        desc: ["Karta kerak emas", "Majburiyat yoʻq"],
      },
      {
        title: "Istalgan vaqtda bekor qilish",
        desc: ["Xohlagan paytingizda oʻzgartiring", "yoki bekor qiling"],
      },
      {
        title: "Insoniy hamkorlik",
        desc: ["Birga ishlaganimizda,", "birga oʻsamiz"],
      },
    ],
  },
  ru: {
    headline: ["Простые цены.", "Реальная ценность."],
    lead: [
      "Начните бесплатно. Повысьте тариф, когда будете готовы.",
      "Платите только за то, что приносит реальный результат.",
    ],
    blocks: [
      {
        title: "Начните бесплатно",
        desc: ["Карта не нужна", "Без обязательств"],
      },
      {
        title: "Отмена в любой момент",
        desc: ["Меняйте или отменяйте", "когда захотите"],
      },
      {
        title: "Человеческое партнёрство",
        desc: ["Когда мы работаем вместе,", "мы растём вместе"],
      },
    ],
  },
};

/**
 * Marks live outside the copy so every language reuses the same block order.
 * The first one is the ringed Business Navigator badge used across the site
 * (see how-it-works/CtaBand); the padlock and headset are drawn bare in the
 * mockup, so the ring is per-block rather than a shared slot.
 */
const BLOCK_MARKS = [
  { Icon: Rocket, ringed: true },
  { Icon: Lock, ringed: false },
  { Icon: Headset, ringed: false },
] as const;

/**
 * Pricing hero (reference/pricing.PNG): a two-line display headline and a
 * two-line lead on the left, three assurance blocks on the right, with the
 * green wave bleeding off the right edge.
 *
 * Flatter than the other heroes on purpose — the mockup has no eyebrow, no
 * CTAs and no bordered panel here, because the plan cards below carry the
 * page's weight. The assurance blocks are a wrapping flex row rather than a
 * grid so they collapse one at a time on narrow screens instead of jumping
 * straight to a stack, and the section keeps `overflow-hidden` so the wave
 * can hang past the right edge without ever widening the page.
 */
export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Wave className="-right-[28%] top-[2%] aspect-[3/2] w-[150%] opacity-40 sm:-right-[16%] sm:w-[105%] lg:-right-[16%] lg:-top-[6%] lg:w-[58%] lg:opacity-70" />

      <Container className="relative z-10 grid gap-10 pt-10 pb-8 sm:pt-12 sm:pb-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:pt-14 lg:pb-6">
        {/* ------------------------------------------- left: the proposition */}
        <div>
          <Reveal>
            <h1 className="text-[clamp(2rem,8.4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-snow lg:text-[clamp(2.7rem,4.2vw,3.85rem)]">
              {t.headline.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === 1 ? "text-leaf-bright" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={60}>
            {/* Both sentences keep their own line, as in the mockup; either is
                free to wrap so no translation gets clipped. */}
            <p className="mt-5 max-w-[30rem] text-[15px] leading-[1.65] text-snow-soft sm:mt-6 sm:text-base">
              <span className="block">{t.lead[0]}</span>
              <span className="block">{t.lead[1]}</span>
            </p>
          </Reveal>
        </div>

        {/* ------------------------------------ right: the assurance blocks */}
        <ul className="grid gap-x-6 gap-y-7 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-7">
          {t.blocks.map((block, i) => {
            const { Icon, ringed } = BLOCK_MARKS[i];
            return (
              <Reveal
                as="li"
                key={block.title}
                delay={120 + i * 60}
                className="flex min-w-0 items-start gap-3"
              >
                <span
                  className={`grid size-8 shrink-0 place-items-center ${
                    ringed ? "rounded-full border border-leaf/45" : ""
                  }`}
                >
                  <Icon
                    aria-hidden
                    size={ringed ? 16 : 24}
                    strokeWidth={1.5}
                    className="text-leaf-bright"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-[15px] font-semibold tracking-tight text-snow">
                    {block.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-snow-muted">
                    <span className="block">{block.desc[0]}</span>
                    <span className="block">{block.desc[1]}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
