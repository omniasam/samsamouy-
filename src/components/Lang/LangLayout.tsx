"use client";

import { useLang } from "@/context/LangContext";
import { ReactNode } from "react";

export default function LangLayout({ children }: { children: ReactNode }) {
  const { lang } = useLang();

  return (
    <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      {children}
    </div>
  );
}
