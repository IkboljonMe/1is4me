"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  MessagesSquare,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, Panel } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Door = { title: string; body: string };
type Content = { title: string; lead: string; cta: string; doors: Door[] };

/** Copy lives beside the section — one object per language (reference/home.PNG). */
const copy: Copy<Content> = {
  en: {
    title: "Three doors. One partner.",
    lead: "We cover everything your business needs to grow.",
    cta: "Learn More",
    doors: [
      {
        title: "Education",
        body: "We train your team and give them the knowledge, tools and systems to operate the business.",
      },
      {
        title: "Consulting",
        body: "We find what’s broken, create a strategy and show you the exact plan to grow.",
      },
      {
        title: "Implementation",
        body: "We build it, run it and stay with you until the system works and the results come.",
      },
    ],
  },
  uz: {
    title: "Uchta eshik. Bitta hamkor.",
    lead: "Biznesingiz oʻsishi uchun zarur boʻlgan hamma narsani qamrab olamiz.",
    cta: "Batafsil",
    doors: [
      {
        title: "Taʼlim",
        body: "Jamoangizni oʻqitamiz va biznesni yuritish uchun bilim, vosita va tizimlarni beramiz.",
      },
      {
        title: "Konsalting",
        body: "Nima ishlamayotganini aniqlaymiz, strategiya tuzamiz va oʻsishning aniq rejasini koʻrsatamiz.",
      },
      {
        title: "Joriy etish",
        body: "Quramiz, ishga tushiramiz va tizim ishlab, natijalar kelgunga qadar siz bilan qolamiz.",
      },
    ],
  },
  ru: {
    title: "Три двери. Один партнёр.",
    lead: "Мы закрываем всё, что нужно вашему бизнесу для роста.",
    cta: "Подробнее",
    doors: [
      {
        title: "Обучение",
        body: "Обучаем вашу команду и даём знания, инструменты и системы для управления бизнесом.",
      },
      {
        title: "Консалтинг",
        body: "Находим, что не работает, создаём стратегию и показываем точный план роста.",
      },
      {
        title: "Внедрение",
        body: "Строим, запускаем и остаёмся с вами, пока система не заработает и не придут результаты.",
      },
    ],
  },
};

/** Parallel to `doors` — icons and numbers are the same in every language. */
const ICONS: LucideIcon[] = [GraduationCap, MessagesSquare, Rocket];
const NUMBERS = ["01", "02", "03"];

/** Hairlines only between columns on the same row — 3-up from md, stacked below. */
const DIVIDERS = ["", "md:border-l md:border-edge", "md:border-l md:border-edge"];

const HREF = "/v2/solutions";

/** "Three doors. One partner." — the three-service card. */
export default function Doors() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="pb-10 sm:pb-12 lg:pb-14">
      <Container>
        <Reveal>
          <Panel className="px-5 py-8 sm:px-8 sm:py-10">
            <h2 className="text-[22px] font-semibold tracking-tight text-snow sm:text-[24px]">
              {c.title}
            </h2>
            <p className="mt-2 text-sm text-snow-soft">{c.lead}</p>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:mt-10 md:grid-cols-3 md:gap-y-0">
              {c.doors.map((door, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal
                    key={door.title}
                    delay={i * 80}
                    className={`flex flex-col items-center px-2 text-center sm:px-4 md:px-8 ${DIVIDERS[i]}`}
                  >
                    {/* The ghosted number sits beside the centred icon, not in
                        flow with it — otherwise it would pull the icon off the
                        column's centre line. */}
                    <div className="relative flex w-full items-center justify-center">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute top-1/2 right-1/2 mr-11 -translate-y-1/2 select-none text-[46px] leading-none font-semibold tracking-tight text-snow/10"
                      >
                        {NUMBERS[i]}
                      </span>
                      <Icon
                        aria-hidden
                        size={42}
                        strokeWidth={1.5}
                        className="text-leaf-bright"
                      />
                    </div>

                    <h3 className="mt-6 text-[20px] font-semibold text-snow">
                      {door.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-sm leading-[1.65] text-snow-soft">
                      {door.body}
                    </p>

                    <Link
                      href={HREF}
                      className="group mt-5 inline-flex items-center gap-3 rounded text-[15px] font-medium text-leaf-bright transition hover:text-snow focus-visible:ring-2 focus-visible:ring-leaf/60 focus-visible:outline-none"
                    >
                      {c.cta}
                      <ArrowRight
                        aria-hidden
                        size={18}
                        strokeWidth={1.75}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
