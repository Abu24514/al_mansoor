"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "./en.json";
import ar from "./ar.json";

type Locale = "en" | "ar";
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, ar };

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  const value: LanguageContextType = {
    locale,
    t: translations[locale],
    toggleLocale,
    dir: locale === "ar" ? "rtl" : "ltr",
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}