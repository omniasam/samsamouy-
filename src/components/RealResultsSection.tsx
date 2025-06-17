"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/locales";
import ImageSlider from "./UI/ImageSlider";
import Title from "./UI/Title";

const transformationImages = [
  "/transformations/client1.jpeg",
  "/transformations/client2.jpeg",
  "/transformations/client3.jpeg",
  "/transformations/client4.jpeg",
  "/transformations/client5.jpeg",
  "/transformations/girl_client1.jpeg",
  "/transformations/girl_client2.jpeg",
  "/transformations/client6.jpeg",
];

export function RealResultsSection() {
  const { lang, dir } = useLang();
  const {  title } = translations[lang].realResults;

  return (
    <section className="bg-white" dir={dir}>
      <div className="max-w-7xl mx-auto text-center">
        <Title 
     
        title={title} className="mb-14" />

        <ImageSlider
          key={lang} 
          images={transformationImages}
          groupId="real-results"
          className="rounded-md max-w-4xl mx-auto"
          height="h-96"
          overlay={false}
          showArrows={true}
        />
      </div>
    </section>
  );
}
