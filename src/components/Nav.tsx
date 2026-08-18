"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { useLang } from "./LangProvider";
import LangToggle from "./LangToggle";
import Wordmark from "./Wordmark";

export default function Nav() {
  const { lang } = useLang();
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#offers", label: t.offers },
    { href: "#gaps", label: t.gaps },
    { href: "#doors", label: t.doors },
    { href: "#outcomes", label: t.outcomes },
    { href: "#process", label: t.process },
    { href: "#team", label: t.team },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-[#0a1a13]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="1is4me — home">
          <Wordmark />
        </Link>

        <ul className="ml-auto hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <LangToggle />
          <Link
            href="/audit-form"
            className="hidden rounded-full bg-mint px-4 py-2 text-[13px] font-bold text-[#0a1a13] transition hover:bg-mint-deep sm:inline-block"
          >
            {t.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="rounded-lg border border-line p-2 lg:hidden"
          >
            <span className="block h-[2px] w-4 bg-ink" />
            <span className="mt-1 block h-[2px] w-4 bg-ink" />
            <span className="mt-1 block h-[2px] w-4 bg-ink" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-[#0a1a13]/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/50 py-3 text-sm text-ink-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/audit-form"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-mint px-4 py-2.5 text-center text-sm font-bold text-[#0a1a13]"
              >
                {t.cta}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
