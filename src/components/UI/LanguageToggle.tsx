"use client";

import { useLang } from "@/context/LangContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  return (
    <button
      onClick={toggleLang}
      className="rounded-full px-3 py-1 text-sm font-semibold  transition"
      aria-label="Toggle language"
    >
      {lang === "ar" ? "English" : "عربي"}
    </button>
  );
}
