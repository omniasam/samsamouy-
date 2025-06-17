"use client";

import { useState } from "react";

export default function ProgramsSection() {
  const programFilters = [
    { label: "Fat Loss", emoji: "🔥" },
    { label: "Muscle Gain", emoji: "💪" },
    { label: "Healthy Lifestyle", emoji: "❤️" },
  ];

  const genders = ["Female", "Male"];

  const programs = [
    {
      type: "Fat Loss",
      title: "Weight Loss",
      desc: "Burn fat and lose weight with customized meal and workout plans.",
    },
    {
      type: "Muscle Gain",
      title: "Muscle Gain",
      desc: "Gain muscle mass with focused, progressive strength training.",
    },
    {
      type: "Healthy Lifestyle",
      title: "Healthy Lifestyle",
      desc: "Boost your energy, health, and mood with a balanced and sustainable routine.",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredPrograms =
    selectedFilter === "All"
      ? programs
      : programs.filter((program) => program.type === selectedFilter);

  return (
    <section id="programs" className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
          Customize Your Experience
        </h2>
        <p className="text-gray-600">My primary goal is:</p>

        <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
          {programFilters.map((option) => (
            <button
              key={option.label}
              onClick={() => setSelectedFilter(option.label)}
              className={`px-4 py-2 text-sm border rounded-full transition ${
                selectedFilter === option.label
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-orange-100"
              }`}
            >
              <span className="mr-1">{option.emoji}</span> {option.label}
            </button>
          ))}

          <button
            onClick={() => setSelectedFilter("All")}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition ${
              selectedFilter === "All"
                ? "bg-indigo-800 text-white border-indigo-800"
                : "bg-white text-gray-800 border-gray-300 hover:bg-orange-100"
            }`}
          >
            Show All Goals
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-700">Filter by gender:</div>
        <div className="flex justify-center gap-4 mt-2">
          {genders.map((gender) => (
            <button
              key={gender}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-orange-100"
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-6">
          Choose the Program That Fits You
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We offer diverse programs tailored to your level and goal, whether you're a beginner or advanced.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <div
              key={index}
              className="border border-orange-100 shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
