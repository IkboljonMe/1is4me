"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { DEFAULT_LANG, LANGS, type Lang } from "@/lib/content";

const STORAGE_KEY = "1is4me:lang";

/**
 * The chosen language lives in a tiny external store rather than component
 * state. localStorage is only readable on the client, so reading it during an
 * effect would mean a second render pass; useSyncExternalStore gives React a
 * server snapshot and a client snapshot and handles the swap itself.
 */
let current: Lang = DEFAULT_LANG;
let hydrated = false;
const listeners = new Set<() => void>();

function readStored(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LANGS as string[]).includes(saved)) return saved as Lang;
  } catch {
    // Private mode or blocked storage — fall back to the default.
  }
  return DEFAULT_LANG;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): Lang {
  if (!hydrated) {
    current = readStored();
    hydrated = true;
  }
  return current;
}

/** SSR always renders the default; the client corrects it on hydration. */
const getServerSnapshot = (): Lang => DEFAULT_LANG;

function writeLang(next: Lang) {
  current = next;
  hydrated = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Persisting is best-effort; the in-memory value still applies.
  }
  listeners.forEach((l) => l());
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangCtx = createContext<Ctx>({ lang: DEFAULT_LANG, setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep the document language attribute in step — an external system, so an
  // effect is the right tool here.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang: writeLang }}>
      {children}
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
