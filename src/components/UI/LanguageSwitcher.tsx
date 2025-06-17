import { useState } from "react";
import { Language } from "@/locales";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Language>("ar");

  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="text-sm"
    >
      {lang === "ar" ? "English" : "العربية"}
    </button>
  );
}
