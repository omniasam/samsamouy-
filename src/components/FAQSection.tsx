"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Title from "./UI/Title";

export default function FAQSection() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqData, setFaqData] = useState<any[]>([]);
  const [faqTitle, setFaqTitle] = useState<string>("");

useEffect(() => {
  fetch("/api/landing-content")
    .then((res) => res.json())
    .then((data) => {
      setFaqData(data.faqs || []);
      setFaqTitle("FAQs"); // Or dynamically if you decide to include title later
    });
}, [lang]);


  return (
    <section id="faq" className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <Title title={faqTitle} className="mb-16" />
        <div className="space-y-4">
        {faqData.map((faq, idx) => (
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
      <span>{faq.question[lang]}</span>
      <span>{openIndex === idx ? "−" : "+"}</span>
    </button>
    {openIndex === idx && (
      <div className="mt-2 text-sm text-gray-700 leading-relaxed">
        {faq.answer[lang]}
      </div>
    )}
  </div>
))}

        </div>
      </div>
    </section>
  );
}
