"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_LANG, LANGS, type Lang } from "@/lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangCtx = createContext<Ctx>({ lang: DEFAULT_LANG, setLang: () => {} });

const STORAGE_KEY = "1is4me:lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Restore after mount so the server and first client render agree.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LANGS as string[]).includes(saved)) setLangState(saved as Lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
