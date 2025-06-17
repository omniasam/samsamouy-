"use client";

import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation ,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: string[];
  groupId: string;
  className?: string;
  height?: string;
  overlay?: boolean;
  showArrows?: boolean;
  showPagination?: boolean;

}

export default function ImageSlider({
  images,
  groupId,
  className = "",
  height = "h-screen",
  overlay = true,
  showArrows = true,
    showPagination = true,
}: ImageSliderProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (
      isMounted &&
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      const navigation = swiperRef.current.params.navigation;
      if (typeof navigation !== "boolean") {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, [isMounted]);

  return (
    <div className={`relative w-screen ${height} overflow-hidden ${className}`}>
      {showArrows && (
        <>
          <button
            ref={prevRef}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 z-20 bg-mainColor text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition duration-200"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="text-2xl" />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 z-20 bg-mainColor text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition duration-200"
            aria-label="Next slide"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </>
      )}

      <Swiper
        key={groupId}
        modules={[Autoplay, Navigation , Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         pagination={showPagination ? { clickable: true } : false}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`${groupId}-slide-${idx}`}
                fill
                className="object-cover"
                  priority={groupId === "section1" && idx === 0}
              
              />
              {overlay && (
                <div className="absolute inset-0 bg-orange-600 bg-opacity-40 z-10" />
              )}
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
