"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/content";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/v2/ui";
import { BUILT, NAV_HREF, Wordmark, type NavKey } from "@/components/v2/Nav";

/**
 * The v2 footer (reference/home.PNG): brand column, six link columns, and a
 * centred copyright bar. The mockup titles the third column "AI Services";
 * the site has standardised on "Smart Tools", so that is what ships.
 */

const EMAIL = "hello@1is4me.com";

type ColumnKey = "solutions" | "smartTools" | "company" | "resources" | "legal";

type FooterCopy = {
  tagline: string;
  columns: Record<ColumnKey, { title: string; items: string[] }>;
  contact: { title: string; location: string };
  rights: string;
  emailAria: string;
};

const copy: Copy<FooterCopy> = {
  en: {
    tagline: "We help businesses grow with strategy, systems and execution.",
    columns: {
      solutions: {
        title: "Solutions",
        items: ["Education", "Consulting", "Implementation"],
      },
      smartTools: {
        title: "Smart Tools",
        items: ["All Tools", "For Marketing", "For Business"],
      },
      company: {
        title: "Company",
        items: ["About Us", "How It Works", "Careers"],
      },
      resources: {
        title: "Resources",
        items: ["Blog", "Guides", "Case Studies"],
      },
      legal: {
        title: "Legal",
        items: ["Terms of Service", "Privacy Policy"],
      },
    },
    contact: { title: "Contact", location: "Warsaw, Poland" },
    rights: "© 2026 1is4me. All rights reserved.",
    emailAria: "Email",
  },
  uz: {
    tagline:
      "Biz bizneslarga strategiya, tizim va ijro orqali o‘sishga yordam beramiz.",
    columns: {
      solutions: {
        title: "Yechimlar",
        items: ["Ta’lim", "Konsalting", "Joriy etish"],
      },
      smartTools: {
        title: "Aqlli vositalar",
        items: ["Barcha vositalar", "Marketing uchun", "Biznes uchun"],
      },
      company: {
        title: "Kompaniya",
        items: ["Biz haqimizda", "Qanday ishlaymiz", "Karyera"],
      },
      resources: {
        title: "Resurslar",
        items: ["Blog", "Qo‘llanmalar", "Keyslar"],
      },
      legal: {
        title: "Huquqiy",
        items: ["Foydalanish shartlari", "Maxfiylik siyosati"],
      },
    },
    contact: { title: "Aloqa", location: "Varshava, Polsha" },
    rights: "© 2026 1is4me. Barcha huquqlar himoyalangan.",
    emailAria: "Elektron pochta",
  },
  ru: {
    tagline:
      "Мы помогаем бизнесу расти с помощью стратегии, систем и исполнения.",
    columns: {
      solutions: {
        title: "Решения",
        items: ["Обучение", "Консалтинг", "Внедрение"],
      },
      smartTools: {
        title: "Умные инструменты",
        items: ["Все инструменты", "Для маркетинга", "Для бизнеса"],
      },
      company: {
        title: "Компания",
        items: ["О нас", "Как мы работаем", "Карьера"],
      },
      resources: {
        title: "Ресурсы",
        items: ["Блог", "Руководства", "Кейсы"],
      },
      legal: {
        title: "Правовая информация",
        items: ["Условия использования", "Политика конфиденциальности"],
      },
    },
    contact: { title: "Контакты", location: "Варшава, Польша" },
    rights: "© 2026 1is4me. Все права защищены.",
    emailAria: "Электронная почта",
  },
};

const COLUMN_ORDER: ColumnKey[] = [
  "solutions",
  "smartTools",
  "company",
  "resources",
  "legal",
];

/** Destinations are language-independent. "#" = page not written yet. */
/** A route only becomes a link once its page exists — see BUILT in Nav. */
const href = (key: NavKey) => (BUILT.has(key) ? NAV_HREF[key] : "#");

const COLUMN_HREFS: Record<ColumnKey, string[]> = {
  solutions: [href("solutions"), href("solutions"), href("solutions")],
  smartTools: [
    href("smart-tools"),
    href("smart-tools"),
    href("smart-tools"),
  ],
  company: [href("about"), href("how-it-works"), "#"],
  resources: ["#", "#", "#"],
  legal: ["#", "#"],
};

/**
 * lucide-react 1.x dropped its brand marks, so the three social glyphs are
 * inlined here in the same 24px stroke geometry as the rest of the set.
 */
function BrandIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const SOCIALS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "#",
    icon: (
      <BrandIcon>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </BrandIcon>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: (
      <BrandIcon>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </BrandIcon>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "#",
    icon: (
      <BrandIcon>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </BrandIcon>
    ),
  },
] as const;

export default function Footer() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <footer className="border-t border-edge bg-night-deep">
      <Container className="py-10 lg:py-12">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(5,minmax(0,1fr))_minmax(0,1.3fr)] lg:gap-x-4">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <Link href={NAV_HREF.home} className="inline-block">
                <Wordmark />
              </Link>
              <p className="mt-4 max-w-[16rem] text-[13px] leading-relaxed text-snow-soft">
                {t.tagline}
              </p>
              <ul className="mt-5 flex items-center gap-2.5">
                {SOCIALS.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-leaf-bright/50 text-leaf-bright transition-colors hover:border-leaf-bright hover:bg-panel-2"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    aria-label={t.emailAria}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-leaf-bright/50 text-leaf-bright transition-colors hover:border-leaf-bright hover:bg-panel-2"
                  >
                    <Mail size={16} strokeWidth={1.5} aria-hidden />
                  </a>
                </li>
              </ul>
            </div>

            {/* Link columns */}
            {COLUMN_ORDER.map((key) => (
              <div key={key}>
                <h3 className="text-[13px] font-semibold text-snow">
                  {t.columns[key].title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {t.columns[key].items.map((label, i) => (
                    <li key={label}>
                      <Link
                        href={COLUMN_HREFS[key][i]}
                        className="text-[13px] text-snow-soft transition-colors hover:text-leaf-bright"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h3 className="text-[13px] font-semibold text-snow">
                {t.contact.title}
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-2 text-[13px] break-words text-snow-soft transition-colors hover:text-leaf-bright"
                  >
                    <Mail
                      size={15}
                      strokeWidth={1.5}
                      aria-hidden
                      className="mt-px shrink-0 text-leaf-bright"
                    />
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[13px] text-snow-soft">
                  <MapPin
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden
                    className="mt-px shrink-0 text-leaf-bright"
                  />
                  {t.contact.location}
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-edge pt-5 text-center text-[12px] text-snow-muted">
          {t.rights}
        </div>
      </Container>
    </footer>
  );
}
