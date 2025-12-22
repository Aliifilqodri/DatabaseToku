"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "ID";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (en: string, id: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("user-lang") as Language;
    if (saved) setLang(saved);
  }, []);

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem("user-lang", l);
  };

  const t = (en: string, id: string) => (lang === "EN" ? en : id);

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};