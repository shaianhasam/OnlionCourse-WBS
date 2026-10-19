import React, { useState } from "react";

import feature1 from "../../../assets/course-banner.png";
import feature2 from "../../../assets/course-database.jpg";
import feature3 from "../../../assets/course-finance.jpg";
import feature4 from "../../../assets/course-design.jpg";
const benefits = [
  {
    number: "01",
    title: "Flexibility and convenience",
    description:
      "Learn whenever and wherever it suits you. Online education gives you the freedom to balance learning with your daily life.",
    image: feature1,
  },
  {
    number: "02",
    title: "Course accessibility",
    description:
      "Access your learning materials from different devices and explore useful courses wherever you are.",
    image: feature2,
  },
  {
    number: "03",
    title: "Cost-effectiveness",
    description:
      "Build valuable skills through flexible learning opportunities while making the most of your time and resources.",
    image: feature3,
  },
  {
    number: "04",
    title: "Personalized learning",
    description:
      "Choose learning experiences that match your interests, your goals, and the pace that works best for you.",
    image: feature4,
  },
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full overflow-hidden bg-[#eef3f3]">
      {/* Heading */}
      <div className="flex min-h-[130px] flex-col items-center justify-center px-5 py-7 text-center text-[#192d30]">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider">
          Unlocking potential
        </p>

        <h2 className="max-w-3xl text-xl font-bold leading-tight sm:text-2xl">
          Discover the boundless advantages and transformative
          <br className="hidden md:block" /> power of eLearning for professional
          growth
        </h2>
      </div>

      {/* Four interactive image panels */}
      <div className="flex h-auto w-full flex-col overflow-hidden bg-[#102024] sm:h-[460px] sm:flex-row lg:h-[520px]">
        {benefits.map((benefit, index) => {
          const isActive = activeIndex === index;

          return (
            <article
              key={benefit.number}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`group relative isolate h-[115px] min-w-0 overflow-hidden border-b border-white/50 transition-[flex,height] duration-700 ease-in-out sm:h-full sm:flex-1 sm:border-b-0 sm:border-r sm:border-white/50 ${
                isActive ? "h-[330px] sm:flex-[2.1]" : "sm:flex-1"
              }`}
            >
              {/* Image is always visible */}
              <div
                className={`absolute inset-0 -z-20 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                  isActive ? "scale-100 opacity-100" : "scale-105 opacity-70"
                }`}
                style={{
                  backgroundImage: `url(${benefit.image})`,
                }}
              />

              {/* Overlay keeps text readable */}
              <div
                className={`absolute inset-0 -z-10 transition-all duration-700 ${
                  isActive
                    ? "bg-gradient-to-t from-black/80 via-black/25 to-black/5"
                    : "bg-gradient-to-t from-black/75 via-black/45 to-black/20"
                }`}
              />

              {/* Panel content */}
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-expanded={isActive}
                aria-label={`Show ${benefit.title}`}
                className="flex h-full w-full cursor-pointer items-end p-5 text-left text-white outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ffb800] sm:p-6 lg:p-9"
              >
                <div className="w-full">
                  <p className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
                    {benefit.number}
                  </p>

                  <h3 className="max-w-[260px] text-sm font-bold leading-snug sm:text-base">
                    {benefit.title}
                  </h3>

                  {/* Description appears on active panel */}
                  <div
                    className={`grid transition-all duration-700 ease-in-out ${
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[280px] text-xs leading-6 text-white/85">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
