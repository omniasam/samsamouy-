"use client";

import { useEffect, useState } from "react";
import { FaDumbbell, FaHeartbeat, FaShower, FaClipboardList } from "react-icons/fa";

export default function FeatureSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("features");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="features"
      className={`bg-graylight text-white px-6 py-10 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase text-mainColor">
          PUSH YOUR LIMITS FORWARD
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Train with the best experts in bodybuilding. The results will speak for themselves. Try the latest trends, innovative equipment, and elite nutrition plans.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center flex flex-col items-center transition-transform duration-500 hover:scale-105"
            >
              <div className="text-white bg-mainColor  p-3 rounded-full  mb-4 text-4xl">{feature.icon}</div>
              <h4 className="font-bold text-lg  text-mainColor mb-2 uppercase">{feature.title}</h4>
              <p className="text-gray-400 text-sm max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <FaDumbbell />,
    title: "Quality Equipment",
    description: "Top-grade fitness equipment designed for strength and durability.",
  },
  {
    icon: <FaClipboardList />,
    title: "Healthy Nutrition Plan",
    description: "Personalized meal plans to support your goals and performance.",
  },
  {
    icon: <FaShower />,
    title: "Shower Service",
    description: "Clean, private shower spaces to refresh after intense sessions.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Unique to Your Needs",
    description: "Custom programs tailored to your body type, goals, and schedule.",
  },
];
