"use client";

import { useEffect, useState } from "react";
import Title from "./UI/Title";
import { MdDesignServices, MdSupportAgent, MdAccessTimeFilled } from "react-icons/md";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";

const icons = [<MdDesignServices />, <MdSupportAgent />, <MdAccessTimeFilled />];

export default function WhoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLang();

  const {  sectionSubtitle, benefits } = translations[lang].who;

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("why-samsamouy");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-graylight py-10 px-6 md:px-12" id="why-samsamouy">
      <div className="max-w-6xl mx-auto text-center">
        <Title 

         title={sectionSubtitle} />
      </div>

      {/* Benefit Tabs */}
      <div className="flex flex-wrap justify-center gap-4 my-[70px]">
        {benefits.map((card, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-sm font-semibold border-b-2 px-4 py-2 transition-all ${
              activeIndex === index
                ? "border-mainColor text-mainColor"
                : "border-transparent text-gray-500 hover:text-mainColor"
            }`}
          >
            {card.title}
          </button>
        ))}
      </div>

      {/* Active Card */}
      <div
        className={`max-w-xl mx-auto bg-neutral-100 p-6 rounded-md shadow-lg transition duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center mb-4 text-mainColor text-3xl">
          {icons[activeIndex]}
        </div>
        <h4 className="text-lg font-bold text-mainColor mb-2">{benefits[activeIndex].title}</h4>
        <p className="text-sm text-gray-700 leading-relaxed">{benefits[activeIndex].description}</p>
      </div>
    </section>
  );
}
