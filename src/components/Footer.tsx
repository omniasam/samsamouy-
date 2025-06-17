"use client";

import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";

interface FooterTranslation {
  contactUs: string;
  followUs: string;
  usefulLinks: string;
  terms: string;
  privacy: string;
  copyright: string;
}

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang]?.footer as FooterTranslation;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const alignText = lang === "ar" ? "text-right" : "text-left";

  if (!t) {
    console.error("Missing footer translation for language:", lang);
    return null;
  }

  return (
    <footer dir={dir} className="bg-lightgray text-white py-12 px-6 md:px-12">
      <div className={`max-w-6xl mx-auto grid gap-10 md:grid-cols-3 ${alignText}`}>
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-mainColor">{t.contactUs}</h4>
          <p className="flex items-center gap-2 text-sm text-black transition">
            <FaWhatsapp className="text-green-400 text-lg" />
          <a
  href="https://wa.me/201234567890"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  <span dir="ltr">+20 123 456 7890</span>
</a>

          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-mainColor">{t.usefulLinks}</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/terms" className="hover:text-white transition text-black">{t.terms}</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition text-black">{t.privacy}</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-mainColor">{t.followUs}</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition duration-300">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        <span>© {new Date().getFullYear()} SamSamouy Ltd.</span>{" "}
        {t.copyright}
      </div>
    </footer>
  );
}
