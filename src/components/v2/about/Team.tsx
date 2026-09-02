"use client";

import Image from "next/image";
import { Mail } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import { Container, Panel, SectionHead } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type Member = {
  /**
   * What the card shows as the person's name. Only the first entry is a real
   * person; the other five are the job labels the mockup prints in the name
   * slot, so — unlike a real name — they are translated.
   */
  name: string;
  /** The green line under the name. */
  role: string;
  /** The three-line description under the role. */
  body: string;
};

type Content = {
  title: string;
  lead: string;
  /** aria-labels for the two icon links; the person's name is appended. */
  linkedin: string;
  email: string;
  members: Member[];
};

/**
 * "Meet Our Team" (reference/about_us.PNG).
 *
 * NOTE(copy): the mockup names only one person — "Burkhonjon S." Entries 2–6
 * are placeholders in the mockup itself ("Marketing Lead", "Consulting Lead",
 * …), and nothing here may invent real-sounding names to replace them. Those
 * five read as job labels, so they translate; "Burkhonjon S." is a personal
 * name and stays byte-identical in all three languages.
 */
const copy: Copy<Content> = {
  en: {
    title: "Meet Our Team",
    lead: "A group of experts with different skills. One shared purpose – your growth.",
    linkedin: "LinkedIn",
    email: "Email",
    members: [
      {
        name: "Burkhonjon S.",
        role: "Founder & Growth Lead",
        body: "Leads the overall vision, strategy and client growth partnerships.",
      },
      {
        name: "Marketing Lead",
        role: "Growth Strategist",
        body: "Builds strategies that attract the right audience and generate real demand.",
      },
      {
        name: "Consulting Lead",
        role: "Business Consultant",
        body: "Analyzes challenges and creates clear plans for sustainable growth.",
      },
      {
        name: "Operations Lead",
        role: "Systems & Operations",
        body: "Designs and improves systems that make businesses efficient.",
      },
      {
        name: "Design Lead",
        role: "Brand & Design Expert",
        body: "Creates strong brands and visuals that communicate value and build trust.",
      },
      {
        name: "Tech Lead",
        role: "Automation & Tools",
        body: "Builds smart solutions and automations that save time and drive results.",
      },
    ],
  },
  uz: {
    title: "Jamoamiz bilan tanishing",
    lead: "Turli koʻnikmalarga ega mutaxassislar guruhi. Bitta umumiy maqsad – sizning oʻsishingiz.",
    linkedin: "LinkedIn",
    email: "Elektron pochta",
    members: [
      {
        name: "Burkhonjon S.",
        role: "Asoschi va oʻsish rahbari",
        body: "Umumiy qarash, strategiya va mijozlar bilan oʻsish hamkorligini boshqaradi.",
      },
      {
        name: "Marketing rahbari",
        role: "Oʻsish strategi",
        body: "Toʻgʻri auditoriyani jalb qiladigan va real talab yaratadigan strategiyalar quradi.",
      },
      {
        name: "Konsalting rahbari",
        role: "Biznes konsultanti",
        body: "Muammolarni tahlil qiladi va barqaror oʻsish uchun aniq rejalar tuzadi.",
      },
      {
        name: "Operatsiyalar rahbari",
        role: "Tizimlar va operatsiyalar",
        body: "Biznesni samarali qiladigan tizimlarni loyihalaydi va takomillashtiradi.",
      },
      {
        name: "Dizayn rahbari",
        role: "Brend va dizayn boʻyicha ekspert",
        body: "Qiymatni yetkazadigan va ishonch uygʻotadigan kuchli brend va vizuallar yaratadi.",
      },
      {
        name: "Texnologiyalar rahbari",
        role: "Avtomatlashtirish va vositalar",
        body: "Vaqtni tejaydigan va natija keltiradigan aqlli yechim va avtomatlashtirishlar quradi.",
      },
    ],
  },
  ru: {
    title: "Знакомьтесь с нашей командой",
    lead: "Группа экспертов с разными навыками. Одна общая цель — ваш рост.",
    linkedin: "LinkedIn",
    email: "Электронная почта",
    members: [
      {
        name: "Burkhonjon S.",
        role: "Основатель и лидер роста",
        body: "Ведёт общее видение, стратегию и партнёрства по росту клиентов.",
      },
      {
        name: "Руководитель маркетинга",
        role: "Стратег роста",
        body: "Строит стратегии, которые привлекают нужную аудиторию и создают реальный спрос.",
      },
      {
        name: "Руководитель консалтинга",
        role: "Бизнес-консультант",
        body: "Анализирует проблемы и создаёт чёткие планы устойчивого роста.",
      },
      {
        name: "Руководитель операций",
        role: "Системы и операции",
        body: "Проектирует и улучшает системы, которые делают бизнес эффективным.",
      },
      {
        name: "Руководитель дизайна",
        role: "Эксперт по бренду и дизайну",
        body: "Создаёт сильные бренды и визуал, которые доносят ценность и укрепляют доверие.",
      },
      {
        name: "Руководитель технологий",
        role: "Автоматизация и инструменты",
        body: "Создаёт умные решения и автоматизации, которые экономят время и дают результат.",
      },
    ],
  },
};

/**
 * TODO(assets): the mockup's six portraits are AI-generated stock faces and we
 * have no photographs of the real team, so every slot is `undefined` and the
 * card falls back to a monogram panel. Two things are still missing:
 *   1. the real names of members 2–6 (the mockup only names the founder), and
 *   2. six real portraits — square-ish, shot against a dark ground.
 * Drop the files in `/public/assets/team/` and put their paths here, in the
 * same order as `members`. Nothing else needs to change: the card already
 * lays out around a 4:5 portrait.
 */
const PHOTOS: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

/**
 * lucide-react 1.x dropped its brand marks, so the LinkedIn glyph is inlined
 * in the same 24px stroke geometry as the rest of the set (as in Footer.tsx).
 */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={15}
      height={15}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/**
 * First letters of the first two words — "Burkhonjon S." → "BS". Used for the
 * monogram that stands in for a missing portrait, so it follows the displayed
 * (translated) label rather than the English one.
 */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.trim().charAt(0).toUpperCase())
    .join("");
}

/** "Meet Our Team" — six member cards (reference/about_us.PNG). */
export default function Team() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHead title={t.title} lead={t.lead} />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {t.members.map((member, i) => {
            const photo = PHOTOS[i];

            return (
              <Reveal key={member.role} delay={i * 70}>
                <Panel className="flex h-full flex-col overflow-hidden transition-colors hover:border-edge-strong">
                  {/* Portrait. A photograph when we have one, otherwise a
                      monogram on a leaf-tinted panel so the card keeps its
                      shape and rhythm. */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel-2">
                    {photo ? (
                      <>
                        <Image
                          src={photo}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1280px) 180px, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 90vw"
                          className="object-cover object-top"
                        />
                        {/* Blends the photograph into the card below it. */}
                        <div
                          aria-hidden
                          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-panel to-transparent"
                        />
                      </>
                    ) : (
                      <div
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-leaf/20 via-panel-2 to-panel"
                      >
                        <span className="text-[40px] font-semibold tracking-[0.08em] text-snow-muted/70">
                          {initials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="text-[15px] font-semibold tracking-tight text-snow">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] font-medium text-leaf-bright">
                      {member.role}
                    </p>
                    <p className="mt-3 text-[12.5px] leading-[1.7] text-snow-muted">
                      {member.body}
                    </p>

                    {/* TODO(assets): real profile URLs and addresses. Until
                        they exist these are inert marks, not links — an
                        anchor to "#" looks clickable and does nothing. Give
                        PROFILE_HREF / MAIL_HREF real values and they become
                        links again (size them to 44px for touch when they do). */}
                    <div
                      aria-hidden
                      className="mt-auto flex items-center gap-2 pt-5"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-leaf-bright/25 text-leaf-bright/40">
                        <LinkedInIcon />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-leaf-bright/25 text-leaf-bright/40">
                        <Mail size={15} strokeWidth={1.5} aria-hidden />
                      </span>
                    </div>
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
