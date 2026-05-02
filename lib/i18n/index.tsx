"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import tr from "./locales/tr.json";
import en from "./locales/en.json";

export type Locale = "tr" | "en";

type Translations = typeof tr;

const locales: Record<Locale, Translations> = { tr, en };

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && saved in locales) setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used inside LanguageProvider");
  return ctx;
}
