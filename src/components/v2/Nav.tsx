"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";
import { Button, Container } from "@/components/v2/ui";
import LangToggle from "@/components/v2/LangToggle";

/**
 * The v2 header (reference/home.PNG): wordmark left, links centre, language
 * toggle + green CTA right, on a near-black bar with a hairline underline.
 * Below `lg` the links fold into a dropdown; the CTA stays in the bar from
 * `sm` up and is repeated inside the panel so it is always one tap away.
 */

/** Every page in the new site, in header order. */
export type NavKey =
  | "home"
  | "solutions"
  | "smart-tools"
  | "how-it-works"
  | "pricing"
  | "about";

type NavCopy = {
  links: Record<NavKey, string>;
  cta: string;
  openMenu: string;
  closeMenu: string;
  homeAria: string;
};

const copy: Copy<NavCopy> = {
  en: {
    links: {
      home: "Home",
      solutions: "Solutions",
      "smart-tools": "Smart Tools",
      "how-it-works": "How It Works",
      pricing: "Pricing",
      about: "About Us",
    },
    cta: "Get Your Free Audit",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: "1is4Me — home",
  },
  uz: {
    links: {
      home: "Bosh sahifa",
      solutions: "Yechimlar",
      "smart-tools": "Aqlli vositalar",
      "how-it-works": "Qanday ishlaymiz",
      pricing: "Narxlar",
      about: "Biz haqimizda",
    },
    cta: "Bepul auditni oling",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    homeAria: "1is4Me — bosh sahifa",
  },
  ru: {
    links: {
      home: "Главная",
      solutions: "Решения",
      "smart-tools": "Умные инструменты",
      "how-it-works": "Как мы работаем",
      pricing: "Цены",
      about: "О нас",
    },
    cta: "Получить бесплатный аудит",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    homeAria: "1is4Me — главная",
  },
};

const NAV_ORDER: NavKey[] = [
  "home",
  "solutions",
  "smart-tools",
  "how-it-works",
  "pricing",
  "about",
];

/** Routes are language-independent, so they live outside the copy object. */
export const NAV_HREF: Record<NavKey, string> = {
  home: "/",
  solutions: "/solutions",
  "smart-tools": "/smart-tools",
  "how-it-works": "/how-it-works",
  pricing: "/pricing",
  about: "/about",
};

export const AUDIT_HREF = "/audit-form";

/**
 * Pages that actually exist. The rebuild ships page by page, and until a
 * route lands its nav entry renders as plain text rather than a link that
 * would 404. Add the key here the moment its page.tsx exists.
 */
export const BUILT: ReadonlySet<NavKey> = new Set<NavKey>([
  "home",
  "solutions",
  "smart-tools",
  "how-it-works",
]);

/**
 * The logo lockup: "1" and "4" in leaf green, GROWTH PARTNER beneath.
 * Exported so the footer can reuse the exact same lockup — it is the one
 * piece of the shell that appears in both places.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`block select-none leading-none ${className}`}>
      <span className="block text-[26px] font-extrabold tracking-[-0.02em] text-snow">
        <span className="text-leaf-bright">1</span>is
        <span className="text-leaf-bright">4</span>Me
      </span>
      <span className="mt-1.5 block text-[7.5px] font-semibold uppercase tracking-[0.32em] text-snow">
        Growth Partner
      </span>
    </span>
  );
}

export default function Nav({ active = "home" }: { active?: NavKey }) {
  const { lang } = useLang();
  const t = copy[lang];
  const pathname = usePathname();

  // The panel belongs to the route it was opened on, so a navigation closes
  // it by itself — the alternative is resetting state from an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  // Escape closes the dropdown — a keyboard convention the browser does not
  // give us for free on a plain button + panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-edge/70 bg-night/90 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link
          href={NAV_HREF.home}
          className="shrink-0"
          aria-label={t.homeAria}
          onClick={() => setOpenPath(null)}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-4 lg:flex xl:gap-8">
          {NAV_ORDER.map((key) => {
            const isActive = key === active;
            const base =
              "relative whitespace-nowrap text-[13px] transition-colors xl:text-[14px]";
            if (!BUILT.has(key)) {
              return (
                <span
                  key={key}
                  aria-disabled="true"
                  className={`${base} cursor-default text-snow-muted/60`}
                >
                  {t.links[key]}
                </span>
              );
            }
            return (
              <Link
                key={key}
                href={NAV_HREF[key]}
                aria-current={isActive ? "page" : undefined}
                className={`${base} ${
                  isActive
                    ? "font-semibold text-snow after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-leaf-bright"
                    : "text-snow-soft hover:text-snow"
                }`}
              >
                {t.links[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <LangToggle />

          {/* The shared Button is sized for hero CTAs; the header wants the
              compact version the mockup shows, hence the size overrides. */}
          <div className="hidden sm:block">
            <Button
              href={AUDIT_HREF}
              arrow={false}
              className="rounded-lg! px-3.5! py-2.5! text-[13px]! xl:px-4! xl:text-[14px]!"
            >
              {t.cta}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="v2-nav-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            className="rounded-lg border border-edge-strong p-2 text-snow transition-colors hover:border-leaf hover:text-leaf-bright lg:hidden"
          >
            {open ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="v2-nav-menu"
          className="border-t border-edge bg-night-deep lg:hidden"
        >
          <Container className="py-3">
            <ul className="flex flex-col">
              {NAV_ORDER.map((key) => (
                <li key={key}>
                  {BUILT.has(key) ? (
                    <Link
                      href={NAV_HREF[key]}
                      aria-current={key === active ? "page" : undefined}
                      onClick={() => setOpenPath(null)}
                      className={`block border-b border-edge/60 py-3 text-[15px] ${
                        key === active
                          ? "font-semibold text-leaf-bright"
                          : "text-snow-soft"
                      }`}
                    >
                      {t.links[key]}
                    </Link>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="block border-b border-edge/60 py-3 text-[15px] text-snow-muted/60"
                    >
                      {t.links[key]}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="py-4">
              <Button href={AUDIT_HREF} arrow={false} className="w-full">
                {t.cta}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
