"use client";

import { LANGS, LANG_LABEL } from "@/lib/content";
import { useLang } from "./LangProvider";

export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-line bg-black/25 p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider transition-colors ${
            lang === l
              ? "bg-mint text-bg"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {LANG_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
