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
    <>
      {!isRTL && <span className="mr-3">{label}</span>}
      {isRTL && (
        <span className="ml-3 transform rotate-180">
          <FiArrowRight size={16} />
        </span>
      )}
      {isRTL && <span>{label}</span>}
      {!isRTL && (
        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
          <FiArrowRight size={16} />
        </span>
      )}
    </>
  );

  const baseClasses = `group inline-flex items-center uppercase font-bold text-sm tracking-wider transition duration-300
    text-white bg-orange-700 px-6 py-3 shadow-md ${className}`;

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
