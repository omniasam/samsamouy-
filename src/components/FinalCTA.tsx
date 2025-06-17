"use client";

import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiVodafone } from "react-icons/si";
import { RiBankCard2Line } from "react-icons/ri";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";

interface FinalCTASectionTranslation {
  title: string;
  description: string;
  paymentMethodsLabel: string;


}

export default function FinalCTASection() {
  const { lang } = useLang(); // "ar" or "en"
  const dir = lang === "ar" ? "rtl" : "ltr";
  const alignText = lang === "ar" ? "text-right" : "text-left";

  const t = translations[lang]?.finalCTASection as FinalCTASectionTranslation;

  if (!t) {
    console.error("Missing finalCTASection translation for language:", lang);
    return null;
  }

  return (
    <section
      dir={dir}
      className="bg-neutral-100 py-10 px-6 md:px-12"
    >
      <div className={`max-w-4xl mx-auto text-center ${alignText}`}>
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-bold text-mainColor mb-6">
          {t.title}
        </h2>

        {/* Payment Logos */}
        <div className="flex justify-center flex-wrap gap-8 items-center text-4xl sm:text-5xl text-mainColor mb-8">
          <RiBankCard2Line title="Instapay" className="hover:scale-110 transition-transform duration-300" />
          <SiVodafone title="Vodafone Cash" className="hover:scale-110 transition-transform duration-300" />
          <FaCcVisa title="Visa" className="hover:scale-110 transition-transform duration-300" />
          <FaCcMastercard title="Mastercard" className="hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Final Note */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          {t.description}
        </p>


      </div>
    </section>
  );
}
