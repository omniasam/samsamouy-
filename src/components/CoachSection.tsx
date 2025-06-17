"use client";

import Image from "next/image";
import { MdStar, MdGroups } from "react-icons/md";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";

export function CoachSection() {
  const { lang, dir } = useLang();
  const t = translations[lang].coach;

  return (
    <section className="bg-neutral-50 py-10 px-6 md:px-12" dir={dir}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
 <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg border border-gray-200">
  <Image
    src="/assets/sam.jpeg"
    alt="Coach Sam"
    fill
    className="   transition-transform duration-300 hover:scale-105"
  />
</div>



        <div className={`${lang === "ar" ? "text-right" : "text-left"}`}>
          <h2 className="text-mainColor text-sm font-bold tracking-widest uppercase mb-2">
            {t.badge}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{t.heading}</h3>
          <p className="text-gray-700 leading-relaxed mb-4">{t.description}</p>
   <ul className={`space-y-2 text-sm text-gray-700 `}>
  <li
    className={`flex items-center gap-2 ${
      lang === "ar" ? "flex-row-reverse text-right" : "flex-row text-left"
    }`}
  >
    <MdStar className="text-mainColor text-xl" />
    <span>{t.experience}</span>
  </li>
  <li
    className={`flex items-center gap-2 ${
      lang === "ar" ? "flex-row-reverse text-right" : "flex-row text-left"
    }`}
  >
    <MdGroups className="text-mainColor text-xl" />
    <span>{t.support}</span>
  </li>
</ul>



        </div>
      </div>
    </section>
  );
}
