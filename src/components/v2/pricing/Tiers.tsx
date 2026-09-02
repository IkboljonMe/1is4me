"use client";

import { CircleCheck } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Button, Container, Panel } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

/**
 * TODO(checkout): there is no billing flow yet — no plan pages, no payment
 * provider — so all three CTAs point at the audit form. Swap this for the
 * real checkout routes once they exist.
 */
const TIER_HREF = "/audit-form";

type TierId = "free" | "pro" | "business";

/**
 * Prices are data, not copy: the amount and the currency are identical in
 * every language and must never be translated, converted or rounded. Tier
 * names are product names and stay English for the same reason, so all of it
 * lives outside `copy` where no translation pass can reach it.
 */
const CURRENCY = "zł";

const PLANS = [
  { id: "free", name: "Free", amount: "0", variant: "ghost" },
  { id: "pro", name: "Pro", amount: "79", variant: "primary" },
  { id: "business", name: "Business", amount: "199", variant: "ghost" },
] as const;

/** The one tier the mockup rings in green and badges. */
const POPULAR: TierId = "pro";

/** The section label, English everywhere — it names the product, not a page. */
const LABEL = "Smart Tools";

type Tier = {
  /** One line under the tier name. */
  tagline: string;
  /** The billing period only; the component draws the "/". */
  period: string;
  features: readonly string[];
  cta: string;
};

type TiersCopy = {
  /** Two lines under the label, each on its own row as in the mockup. */
  lead: readonly [string, string];
  /** The badge on the highlighted card. */
  popular: string;
  tiers: Record<TierId, Tier>;
};

const copy: Copy<TiersCopy> = {
  en: {
    lead: ["Use tools for free.", "Upgrade for more power."],
    popular: "Most popular",
    tiers: {
      free: {
        tagline: "Good for simple tasks",
        period: "forever",
        features: [
          "Basic AI tools",
          "Limited daily usage",
          "Standard quality",
          "Perfect for getting started",
        ],
        cta: "Start for Free",
      },
      pro: {
        tagline: "For creators & professionals",
        period: "month",
        features: [
          "All tools included",
          "Higher daily limits",
          "High quality results",
          "Priority processing",
          "Create videos & advanced content",
        ],
        cta: "Choose Pro",
      },
      business: {
        tagline: "For teams & businesses",
        period: "month",
        features: [
          "Everything in Pro",
          "Team access",
          "Advanced limits",
          "Custom templates",
          "Priority support",
        ],
        cta: "Choose Business",
      },
    },
  },
  uz: {
    lead: [
      "Vositalardan bepul foydalaning.",
      "Koʻproq imkoniyat uchun tarifni oshiring.",
    ],
    popular: "Eng ommabop",
    tiers: {
      free: {
        tagline: "Oddiy vazifalar uchun qulay",
        period: "doimiy",
        features: [
          "Asosiy AI vositalari",
          "Kunlik foydalanish cheklangan",
          "Standart sifat",
          "Boshlash uchun ideal",
        ],
        cta: "Bepul boshlang",
      },
      pro: {
        tagline: "Ijodkorlar va mutaxassislar uchun",
        period: "oyiga",
        features: [
          "Barcha vositalar kiritilgan",
          "Yuqori kunlik limitlar",
          "Yuqori sifatli natijalar",
          "Ustuvor qayta ishlash",
          "Video va murakkab kontent yaratish",
        ],
        cta: "Proni tanlang",
      },
      business: {
        tagline: "Jamoalar va bizneslar uchun",
        period: "oyiga",
        features: [
          "Pro tarifidagi barchasi",
          "Jamoaviy kirish",
          "Kengaytirilgan limitlar",
          "Maxsus shablonlar",
          "Ustuvor qoʻllab-quvvatlash",
        ],
        cta: "Businessni tanlang",
      },
    },
  },
  ru: {
    lead: [
      "Пользуйтесь инструментами бесплатно.",
      "Повысьте тариф — получите больше.",
    ],
    popular: "Самый популярный",
    tiers: {
      free: {
        tagline: "Подходит для простых задач",
        period: "навсегда",
        features: [
          "Базовые AI-инструменты",
          "Ограниченный дневной лимит",
          "Стандартное качество",
          "Идеально для старта",
        ],
        cta: "Начать бесплатно",
      },
      pro: {
        tagline: "Для авторов и профессионалов",
        period: "месяц",
        features: [
          "Все инструменты включены",
          "Выше дневные лимиты",
          "Высокое качество результатов",
          "Приоритетная обработка",
          "Создание видео и продвинутого контента",
        ],
        cta: "Выбрать Pro",
      },
      business: {
        tagline: "Для команд и бизнеса",
        period: "месяц",
        features: [
          "Всё из Pro",
          "Доступ для команды",
          "Расширенные лимиты",
          "Свои шаблоны",
          "Приоритетная поддержка",
        ],
        cta: "Выбрать Business",
      },
    },
  },
};

/**
 * The three Smart Tools plans (reference/pricing.PNG) — the block the whole
 * Pricing page exists for.
 *
 * Label column left, cards right; below `lg` the label sits above a single
 * stacked column, capped so the cards do not stretch into banners on a
 * tablet. The cards are grid items in a stretched row and each one is a
 * column with `mt-auto` above its button, so all three end on the same line
 * whatever a translation does to the feature lists.
 *
 * The Pro card's green border is `border-leaf` layered over Panel's own
 * `border-edge`; leaf is declared after edge in the theme, so its utility
 * wins the cascade. Its badge is an absolutely positioned pill sitting on the
 * card's top edge — hence `relative` on the item and `pt-3` on the list, so
 * the pill has room and can never be clipped.
 */
export default function Tiers() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section
      aria-labelledby="pricing-tiers-title"
      className="pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-14"
    >
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
        {/* -------------------------------------------------- left: the label */}
        <Reveal>
          <h2
            id="pricing-tiers-title"
            className="text-[26px] font-semibold tracking-tight text-snow sm:text-[30px] lg:text-[32px]"
          >
            {LABEL}
          </h2>
          {/* Both lines keep their own row as in the mockup; either is free to
              wrap so no translation gets clipped. */}
          <p className="mt-3 text-sm leading-[1.6] text-snow-muted sm:text-[15px]">
            <span className="block">{t.lead[0]}</span>
            <span className="block">{t.lead[1]}</span>
          </p>
        </Reveal>

        {/* -------------------------------------------------- right: the plans */}
        <ul className="grid max-w-[34rem] gap-6 pt-3 lg:max-w-none lg:grid-cols-3 lg:gap-5">
          {PLANS.map((plan, i) => {
            const tier = t.tiers[plan.id];
            const popular = plan.id === POPULAR;

            return (
              <Reveal
                as="li"
                key={plan.id}
                delay={i * 80}
                className="relative flex"
              >
                {popular ? (
                  <span className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 overflow-hidden rounded-full border border-leaf bg-night px-3.5 py-1 text-[10.5px] leading-none font-semibold tracking-[0.14em] whitespace-nowrap text-leaf-bright uppercase">
                    {/* The pill straddles the card's border, so it needs an
                        opaque ground; the tint sits on top of it. */}
                    <span aria-hidden className="absolute inset-0 bg-leaf/20" />
                    <span className="relative">{t.popular}</span>
                  </span>
                ) : null}

                <Panel
                  className={`flex w-full flex-col p-5 sm:p-6 lg:p-7 ${
                    popular ? "border-leaf" : ""
                  }`}
                >
                  <h3 className="text-[21px] font-semibold tracking-tight text-leaf-bright sm:text-[22px]">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.5] text-snow-soft sm:text-sm">
                    {tier.tagline}
                  </p>

                  <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-[32px] leading-none font-semibold tracking-tight text-snow sm:text-[36px]">
                      {plan.amount}
                    </span>
                    <span className="text-[19px] font-medium text-snow sm:text-[21px]">
                      {CURRENCY}
                    </span>
                    <span className="text-sm text-snow-muted sm:text-[15px]">
                      / {tier.period}
                    </span>
                  </p>

                  <span aria-hidden className="mt-5 block h-px bg-edge" />

                  <ul className="mt-5 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-[1.45] text-snow-soft"
                      >
                        <CircleCheck
                          aria-hidden
                          size={16}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-leaf-bright"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* mt-auto on the wrapper, not the Button: the Button owns
                      its own padding and must keep its 48px tap target. */}
                  <div className="mt-auto pt-7">
                    <Button
                      href={TIER_HREF}
                      variant={plan.variant}
                      arrow={false}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </Panel>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
