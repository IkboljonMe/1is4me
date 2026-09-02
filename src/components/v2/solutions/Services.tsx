"use client";

import Image from "next/image";
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
import { Container, Panel, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Service = {
  /** Education / Consulting / Implementation. */
  title: string;
  /** One-line promise under the title — "We close the … gap." */
  promise: string;
  /** Three-line description. Kept identical to the home page's Doors block. */
  body: string;
};

type Content = { title: string; lead: string; cta: string; services: Service[] };

/**
 * Copy lives beside the section (reference/solutions.PNG). The three `body`
 * strings are the same sentences as `home/Doors.tsx` in all three languages —
 * the two pages describe the same services, so they must not drift apart.
 */
const copy: Copy<Content> = {
  en: {
    title: "Our Three Core Services",
    lead: "Different focus. Same goal – your growth.",
    cta: "Learn More",
    services: [
      {
        title: "Education",
        promise: "We close the knowledge gap.",
        body: "We train your team and give them the knowledge, tools and systems to operate the business.",
      },
      {
        title: "Consulting",
        promise: "We close the direction gap.",
        body: "We find what’s broken, create a strategy and show you the exact plan to grow.",
      },
      {
        title: "Implementation",
        promise: "We close the execution gap.",
        body: "We build it, run it and stay with you until the system works and the results come.",
      },
    ],
  },
  uz: {
    title: "Uchta asosiy xizmatimiz",
    lead: "Har xil yoʻnalish. Bitta maqsad – sizning oʻsishingiz.",
    cta: "Batafsil",
    services: [
      {
        title: "Taʼlim",
        promise: "Bilim boʻshligʻini yopamiz.",
        body: "Jamoangizni oʻqitamiz va biznesni yuritish uchun bilim, vosita va tizimlarni beramiz.",
      },
      {
        title: "Konsalting",
        promise: "Yoʻnalish boʻshligʻini yopamiz.",
        body: "Nima ishlamayotganini aniqlaymiz, strategiya tuzamiz va oʻsishning aniq rejasini koʻrsatamiz.",
      },
      {
        title: "Joriy etish",
        promise: "Ijro boʻshligʻini yopamiz.",
        body: "Quramiz, ishga tushiramiz va tizim ishlab, natijalar kelgunga qadar siz bilan qolamiz.",
      },
    ],
  },
  ru: {
    title: "Три ключевые услуги",
    lead: "Разный фокус. Одна цель — ваш рост.",
    cta: "Подробнее",
    services: [
      {
        title: "Обучение",
        promise: "Закрываем пробел в знаниях.",
        body: "Обучаем вашу команду и даём знания, инструменты и системы для управления бизнесом.",
      },
      {
        title: "Консалтинг",
        promise: "Закрываем пробел в направлении.",
        body: "Находим, что не работает, создаём стратегию и показываем точный план роста.",
      },
      {
        title: "Внедрение",
        promise: "Закрываем пробел в исполнении.",
        body: "Строим, запускаем и остаёмся с вами, пока система не заработает и не придут результаты.",
      },
    ],
  },
};

/** Parallel to `services` — the same in every language. */
const ICONS: LucideIcon[] = [GraduationCap, MessagesSquare, Rocket];
const NUMBERS = ["01", "02", "03"];

/**
 * TODO(assets): the mockup fills the top-right of each card with a photograph.
 * We have none, so every slot is `undefined` and falls back to a leaf-tinted
 * gradient. Drop the files in `/public/assets/` and put their paths here:
 *   01 Education      — a lecture room, a speaker in front of a lit screen
 *   02 Consulting     — a planning desk, a hand sketching over sticky notes
 *   03 Implementation — a monitor showing dashboards and charts
 * Nothing else needs to change: the card already lays out around an image.
 */
const PHOTOS: (string | undefined)[] = [undefined, undefined, undefined];

/**
 * TODO(routes): each card should link to its own service page. Those pages do
 * not exist yet, so all three point back at this one.
 */
const HREFS = ["/solutions", "/solutions", "/solutions"];

/** "Our Three Core Services" — the three service cards (reference/solutions.PNG). */
export default function Services() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={c.title} lead={c.lead} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-3">
          {c.services.map((service, i) => {
            const Icon = ICONS[i];
            const photo = PHOTOS[i];

            return (
              <Reveal key={service.title} delay={i * 90}>
                <Panel className="group relative flex h-full flex-col overflow-hidden transition-colors hover:border-edge-strong">
                  {/* Art layer. A photograph when we have one, otherwise a
                      quiet leaf-tinted wash so the card still has depth. */}
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    {photo ? (
                      <>
                        <Image
                          src={photo}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 380px, 100vw"
                          className="object-cover object-right"
                        />
                        {/* Keeps the copy legible over the picture. */}
                        <div className="absolute inset-0 bg-gradient-to-r from-panel via-panel/85 to-panel/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/40 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-y-0 right-0 w-[72%] bg-gradient-to-bl from-leaf/15 via-panel-2/70 to-transparent" />
                        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-leaf/10 blur-3xl" />
                      </>
                    )}
                  </div>

                  <span className="absolute top-5 left-5 rounded-md bg-gradient-to-b from-leaf to-leaf-deep px-2 py-[3px] text-[11px] font-semibold tracking-wide text-white sm:top-6 sm:left-6">
                    {NUMBERS[i]}
                  </span>

                  <div className="relative flex flex-1 flex-col p-5 pt-16 sm:p-6 sm:pt-[72px]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-leaf/50">
                      <Icon
                        aria-hidden
                        size={22}
                        strokeWidth={1.5}
                        className="text-leaf-bright"
                      />
                    </span>

                    <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-snow sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-snow-soft">
                      {service.promise}
                    </p>
                    <p className="mt-4 max-w-[28ch] text-sm leading-[1.7] text-snow-soft">
                      {service.body}
                    </p>

                    <Link
                      href={HREFS[i]}
                      className="mt-auto inline-flex items-center gap-2.5 self-start rounded pt-6 text-[15px] font-medium text-leaf-bright transition hover:text-snow focus-visible:ring-2 focus-visible:ring-leaf/60 focus-visible:outline-none"
                    >
                      {c.cta}
                      <ArrowRight
                        aria-hidden
                        size={18}
                        strokeWidth={1.75}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </Panel>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
