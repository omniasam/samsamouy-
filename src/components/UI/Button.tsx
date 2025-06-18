"use client";

import { useLang } from "@/context/LangContext";
import { FiArrowRight } from "react-icons/fi";

interface ReadMoreButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function Button({
  href = "#",
  label = "",
  className = "",
}: ReadMoreButtonProps) {
  const isScrollTarget = href.startsWith("#");
  const { lang } = useLang();
  const isRTL = lang === "ar";

  const handleClick = () => {
    if (isScrollTarget) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

 const content = (
  <div className={`flex items-center ${isRTL ? "flex-row-reverse" : ""} gap-2`}>
    <FiArrowRight
      size={16}
      className={isRTL ? "rotate-180" : ""}
    />
    <span>{label}</span>
  </div>
);


  const baseClasses = `group inline-flex items-center font-bold text-sm tracking-wide
    text-white bg-mainColor px-6 py-3 rounded-full shadow-md
    hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105
    border-b-4 border-transparent hover:border-orange-300 ${className}`;

  if (isScrollTarget) {
    return (
      <button onClick={handleClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      {content}
    </a>
  );
}
