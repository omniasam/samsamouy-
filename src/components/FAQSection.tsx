"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";
import Title from "./UI/Title";

export default function FAQSection() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = translations[lang].faq.list;
  const faqTitle = translations[lang].faq.title;

  return (
    <section id="faq" className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <Title 
       
        title={faqTitle} className="mb-16" />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              dir={lang === "ar" ? "rtl" : "ltr"}
              className={`border p-4 rounded-md shadow-sm transition-all duration-300 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <button
                className="w-full text-lg font-semibold flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
