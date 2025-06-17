// src/components/UI/PlanCard.tsx
"use client";

import Button from "./Button";

interface PlanCardProps {
  price: number;
  duration: string;
  title: string;
  features: string[];
  isPopular?: boolean;
}

export default function PlanCard({
  price,
  duration,
  title,
  features,
  isPopular = false,
}: PlanCardProps) {
  return (
    <div className="relative bg-neutral-800/80 text-white text-center px-8 py-10 rounded-md border 
    border-neutral-600 hover:border-mainColor transition duration-300 ease-in-out shadow-sm hover:shadow-lg">
      {isPopular && (
        <div className="absolute top-0 right-0 bg-mainColor text-xs px-3 py-1 font-bold uppercase rounded-tr-md">
          Popular
        </div>
      )}
      <div className="text-5xl font-bold mb-1">${price}</div>
      <div className="text-xs tracking-widest text-orange-500 uppercase mb-6">
        {duration}
      </div>
      <h4 className="font-semibold uppercase text-sm mb-5 text-mainColor">
        {title}
      </h4>
      <ul className="text-xs space-y-2 mb-8 text-gray-300 leading-relaxed">
        {features.map((item, idx) => (
          <li key={idx} className="mb-6  text-md text-white  text-md">{item}</li>
        ))}
      </ul>
      <Button label="Read More" href="#" />
    </div>
  );
}
