"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useLang } from "@/context/LangContext";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Title from "./UI/Title";

export default function TestimonialSlider() {
  const { lang, dir } = useLang();

  // List of image filenames
  const testimonialImages = [
    "/assets/testimonials/o1.jpeg",
    "/assets/testimonials/o2.jpeg",
    "/assets/testimonials/o3.jpeg",
    "/assets/testimonials/o4.jpeg",
    "/assets/testimonials/o5.jpeg",
  ];

  return (
    <section className="bg-neutral-100 py-10 px-6 md:px-12" dir={dir}>
      <div className="max-w-4xl mx-auto text-center">
       <Title

  title={lang === "ar" ? "قصص نجاح عملائنا" : "Client Transformation Stories"}
  
  className="mb-12"
/>

        <Swiper
          key={lang}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          className="max-w-2xl mx-auto"
        >
          {testimonialImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[150px]
               rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Testimonial ${idx + 1}`}
                  fill
                  className=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
