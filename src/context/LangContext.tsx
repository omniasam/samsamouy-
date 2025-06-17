"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Language } from "@/locales";

interface LangContextType {
  lang: "en" | "ar";
  dir: "rtl" | "ltr"; // ✅ ADD THIS LINE
  setLang: (lang: "en" | "ar") => void;
}


const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "en" || stored === "ar") {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider 
     value={{
    lang,
    dir: lang === "ar" ? "rtl" : "ltr", 
    setLang,
  }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}