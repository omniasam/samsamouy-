"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";
import LanguageToggle from "./UI/LanguageToggle";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  const navLinks = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let matchedLink = "#home";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop - 120;
          if (scrollY >= offsetTop) {
            matchedLink = link.href;
          }
        }
      }

      setActiveLink(matchedLink);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="font-rajdhani fixed top-0 w-full z-50 bg-white py-4 px-6 shadow-md"
    >
    <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
  {/* Logo */}
  <div className={`flex items-center ${lang === "ar" ? "space-x-reverse space-x-2" : "space-x-2"}`}>
    <Image
      src="/assets/samLogo.webp"
      alt="SamSamouy Logo"
      width={60}
      height={40}
      priority
      style={{ width: "auto", height: "auto" }}
    />
  </div>

  {/* Desktop Nav + Language */}
<div className={`hidden md:flex items-center ${lang === "ar" ? "space-x-reverse space-x-6" : "space-x-6"}`}>
    <ul className={`flex text-sm md:text-base font-semibold ${lang === "ar" ? "space-x-reverse space-x-6" : "space-x-6"}`}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`transition ${
              activeLink === link.href ? "text-orange-600 font-bold" : "text-black hover:text-orange-500"
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    {/* Desktop Language Toggle */}
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="text-sm font-medium text-orange-600 hover:underline"
    >
      {translations[lang].common.toggleLang}
    </button>
  </div>

  {/* Mobile Menu Button (unchanged) */}
 

<div className="flex items-center gap-4 md:hidden">
  <LanguageToggle />
  
  {/* Burger Menu Button */}
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="relative w-8 h-8 flex items-center justify-center z-50"
  >
    {/* Burger Icon */}
    <span className={`absolute left-1/2 -translate-x-1/2 h-[3px] w-6 bg-orange-500 rounded-sm transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 top-1/2" : "top-[9px]"}`} />
    <span className={`absolute left-1/2 -translate-x-1/2 h-[3px] w-6 bg-orange-500 rounded-sm transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "top-[16px]"}`} />
    <span className={`absolute left-1/2 -translate-x-1/2 h-[3px] w-6 bg-orange-500 rounded-sm transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 top-1/2" : "top-[23px]"}`} />
  </button>
</div>



</div>


      {/* Mobile Nav Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-[400px]" : "max-h-0"}`}>
        <ul className={`flex flex-col space-y-4 mt-4 px-4 pb-6 text-sm font-semibold bg-white ${lang === "ar" ? "text-right" : "text-left"}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block ${
                  activeLink === link.href ? "text-orange-600 font-bold" : "text-black hover:text-orange-500"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Language Toggle */}
        {/* <div className="px-4 pb-4 flex justify-end">
          <button
            onClick={() => {
              setLang(lang === "ar" ? "en" : "ar");
              setIsMobileMenuOpen(false);
            }}
            className="text-sm font-medium text-orange-600 hover:underline"
          >
            {translations[lang].common.toggleLang}
          </button>
        </div> */}
           
      </div>
    </nav>
  );
}
