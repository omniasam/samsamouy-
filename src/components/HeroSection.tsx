
import { useEffect, useState } from "react";
import ImageSlider from "./UI/ImageSlider";
import Button from "./UI/Button";
import { useLang } from "@/context/LangContext";
import { LandingContent } from "@/types/translations";

const section1Images = [
  "/transformations/girl_client1.jpeg",
  "/transformations/client2.jpeg",
  "/transformations/client8.jpeg",
];

export default function HeroSection() {
  const { lang, dir } = useLang(); // gets 'en' or 'ar'
  const [landingContent, setLandingContent] = useState<LandingContent | null>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    
    fetch("/api/landing-content")
      .then((res) => res.json())
      .then((data: LandingContent) => setLandingContent(data));
  }, []);

  return (
    <main id="home" className="w-full overflow-hidden text-white">
      {/* Hero Section */}
      <div className="relative w-screen h-screen">
        <div
          className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-6"
          dir={dir}
        >
          {showText && (
<>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:font-extrabold leading-normal mb-4 text-white [text-shadow:_4px_4px_0_rgb(133_126_126)] animate-fade-in-up">
            <span className="text-2xl sm:text-3xl mt-2 block">
              {landingContent?.heroTitle?.[lang] ?? ""}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-6 animate-fade-in-up delay-300">
            <span className="text-base sm:text-lg mt-1 block">
              {landingContent?.heroSubtitle?.[lang] ?? ""}
            </span>
          </p>
          </>
          )}
          <Button
            href="#plans"
            label={lang === "ar" ? "ابدأ الآن" : "Start Now"}
            className="mt-4 text-white font-semibold py-3 px-6 
              rounded-full shadow-md bg-mainColor hover:bg-orange-600
              transition-all duration-300 ease-in-out transform hover:scale-105 border-b-4 border-transparent hover:border-orange-300"
          />
        </div>

        {/* Background slider */}
        <div className="absolute inset-0 z-10">
          <ImageSlider
            key={lang} // re-render slider on language change
            images={section1Images}
            groupId="section1"
            height="h-screen"
            overlay={true}
            showArrows={false}
            showPagination={false}
          />
        </div>
      </div>
    </main>
  );
}
