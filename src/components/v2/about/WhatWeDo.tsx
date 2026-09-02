"use client";

import {
  GraduationCap,
  MessagesSquare,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, Panel, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Service = { title: string; body: string };
type Content = { title: string; lead: string; services: Service[] };

/**
 * "What We Do" (reference/about_us.PNG) — the same three services the home
 * page opens with in `home/Doors.tsx`.
 *
 * NOTE(copy): the two mockups word two of the three descriptions slightly
 * differently — About Us ends Education with "with confidence" and says
 * "analyze what's broken … exactly what to fix and how to grow" where the
 * home page says "find what's broken … the exact plan to grow". The English
 * here is verbatim from reference/about_us.PNG; the UZ/RU strings are the
 * ones already shipped in Doors, carried over word-for-word wherever the
 * English matches (Implementation is byte-identical) and extended only where
 * this mockup adds words. Nothing beyond the mockup's own wording is claimed.
 */
const copy: Copy<Content> = {
  en: {
    title: "What We Do",
    lead: "Three core services that cover everything your business needs.",
    services: [
      {
        title: "Education",
        body: "We train your team and give them the knowledge, tools and systems to operate the business with confidence.",
      },
      {
        title: "Consulting",
        body: "We analyze what’s broken, create a strategy and show you exactly what to fix and how to grow.",
      },
      {
        title: "Implementation",
        body: "We build it, run it and stay with you until the system works and the results come.",
      },
    ],
  },
  uz: {
    title: "Biz nima qilamiz",
    lead: "Biznesingizga kerak boʻlgan hamma narsani qamrab oladigan uchta asosiy xizmat.",
    services: [
      {
        title: "Taʼlim",
        body: "Jamoangizni oʻqitamiz va biznesni ishonch bilan yuritish uchun bilim, vosita va tizimlarni beramiz.",
      },
      {
        title: "Konsalting",
        body: "Nima ishlamayotganini tahlil qilamiz, strategiya tuzamiz va nimani tuzatish va qanday oʻsish kerakligini aniq koʻrsatamiz.",
      },
      {
        title: "Joriy etish",
        body: "Quramiz, ishga tushiramiz va tizim ishlab, natijalar kelgunga qadar siz bilan qolamiz.",
      },
    ],
  },
  ru: {
    title: "Чем мы занимаемся",
    lead: "Три ключевые услуги, которые закрывают всё, что нужно вашему бизнесу.",
    services: [
      {
        title: "Обучение",
        body: "Обучаем вашу команду и даём знания, инструменты и системы, чтобы уверенно управлять бизнесом.",
      },
      {
        title: "Консалтинг",
        body: "Анализируем, что не работает, создаём стратегию и показываем, что именно исправить и как расти.",
      },
      {
        title: "Внедрение",
        body: "Строим, запускаем и остаёмся с вами, пока система не заработает и не придут результаты.",
      },
    ],
  },
};

/** Parallel to `services` — icons and numbers are the same in every language. */
const ICONS: LucideIcon[] = [GraduationCap, MessagesSquare, Rocket];
const NUMBERS = ["01", "02", "03"];

/** "What We Do" — three bordered service cards (reference/about_us.PNG). */
export default function WhatWeDo() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={t.title} lead={t.lead} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {t.services.map((service, i) => {
            const Icon = ICONS[i];

            return (
              <Reveal key={service.title} delay={i * 80}>
                <Panel className="flex h-full flex-col p-5 transition-colors hover:border-edge-strong sm:p-6">
                  {/* Icon and title share a line; the ghosted number is pushed
                      to the far right, out of the title's flow. */}
                  <div className="flex items-center gap-3">
                    <Icon
                      aria-hidden
                      size={26}
                      strokeWidth={1.5}
                      className="shrink-0 text-leaf-bright"
                    />
                    <h3 className="text-[17px] font-semibold tracking-tight text-snow">
                      {service.title}
                    </h3>
                    <span
                      aria-hidden
                      className="ml-auto shrink-0 select-none text-[32px] leading-none font-semibold tracking-tight text-snow/15 sm:text-[36px]"
                    >
                      {NUMBERS[i]}
                    </span>
                  </div>

                  <p className="mt-4 text-[13.5px] leading-[1.75] text-snow-soft">
                    {service.body}
                  </p>
                </Panel>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
