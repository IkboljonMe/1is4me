"use client";

import Link from "next/link";
import { content, INSTAGRAM_URL } from "@/lib/content";
import { useLang } from "./LangProvider";
import LangToggle from "./LangToggle";
import Wordmark from "./Wordmark";

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang].footer;
  const nav = content[lang].nav;

  const links = [
    { href: "#offers", label: nav.offers },
    { href: "#doors", label: nav.doors },
    { href: "#outcomes", label: nav.outcomes },
    { href: "#process", label: nav.process },
    { href: "#team", label: nav.team },
  ];

  return (
    <footer className="layer border-t border-line bg-bg-raise/50 px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark className="text-xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            {t.blurb}
          </p>
          <p className="mt-5 text-[13px] font-semibold text-mint">{t.tagline}</p>
        </div>

        <nav>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">
            {t.nav}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/audit-form"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {t.audit}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">
            {t.contact}
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                Instagram @1is4me
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <LangToggle />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-line pt-6">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} 1is4me. {t.rights}
        </p>
      </div>
    </footer>
  );
}
