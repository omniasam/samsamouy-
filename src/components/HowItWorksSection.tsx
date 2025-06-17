"use client";

import { useEffect, useState } from "react";
import Title from "./UI/Title";
import { FaRegClipboard, FaFileSignature, FaRunning } from "react-icons/fa";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";

const icons = [
  { key: 'clipboard', icon: <FaRegClipboard className="text-white text-xl" /> },
  { key: 'signature', icon: <FaFileSignature className="text-white text-xl" /> },
  { key: 'running', icon: <FaRunning className="text-white text-xl" /> },
];

export default function HowItWorksStepper() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang, dir } = useLang();
const { title, steps } = translations[lang].howItWorks;

  useEffect(() => {
    const section = document.getElementById("how-it-works");
    const onScroll = () => {
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-it-works" className="bg-white py-10 px-6 md:px-12" dir={dir}>
      <div className="max-w-6xl mx-auto text-center">
        <Title
         
          title={title}
          className={`mb-16 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        />

        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col items-center text-center w-full md:w-1/3 transition-all duration-700 ease-out ${
                isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
               <div className="flex flex-col items-center">
      <div className="relative z-10 bg-mainColor w-12 h-12 rounded-full flex items-center justify-center top-0">
        {icons[idx].icon}
      </div>
                {idx !== steps.length - 1 && (
                  <div className="block md:hidden absolute bottom-[-52px] w-[1.5px] h-[45px] bg-gray-300" />
                )}
              </div>

              <h3 className="text-mainColor font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm max-w-[250px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
