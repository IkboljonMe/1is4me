"use client";

import { LANGS, LANG_LABEL } from "@/lib/content";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";

/**
 * EN / UZ / RU switcher in the v2 skin.
 *
 * Same behaviour as the original `src/components/LangToggle.tsx` — it is the
 * palette that differs, so the two live side by side until /v2 replaces the
 * current landing.
 */

const copy: Copy<{ group: string }> = {
  en: { group: "Language" },
  uz: { group: "Til" },
  ru: { group: "Язык" },
};

export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={copy[lang].group}
      className={`flex items-center gap-0.5 rounded-full border border-edge-strong bg-panel-2 p-0.5 ${className}`}
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`inline-flex min-h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-[11px] font-semibold tracking-wide transition-colors sm:min-h-8 sm:min-w-8 ${
            lang === l
              ? "bg-gradient-to-b from-leaf to-leaf-deep text-snow"
              : "text-snow-muted hover:text-snow"
          }`}
        >
          {LANG_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
