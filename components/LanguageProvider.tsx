"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language } from "@/types/i18n";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const initialLanguage: Language = savedLanguage === "ru" || savedLanguage === "en"
      ? savedLanguage
      : window.navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";

    document.documentElement.lang = initialLanguage;
    queueMicrotask(() => setLanguage(initialLanguage));
  }, []);

  function updateLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("portfolio-language", nextLanguage);
  }

  const value = useMemo(() => ({ language, setLanguage: updateLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
