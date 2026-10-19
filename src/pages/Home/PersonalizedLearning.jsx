
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import mainImage from "../../assets/personalized-main.jpg";
import smallImage from "../../assets/personalized-small.jpg";

export default function PersonalizedLearning() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    "Skill-based instruction",
    "Global certification",
    "Analytics and insights",
    "Customizable courses",
  ];

  const revealClass = (delay) =>
    `transform transition-all duration-1000 ease-out ${
      visible
        ? "translate-y-0 scale-100 opacity-100 blur-0"
        : "translate-y-8 scale-[0.98] opacity-0 blur-[6px]"
    }`;

  const revealStyle = (delay) => ({
    transitionDelay: visible ? `${delay}ms` : "0ms",
  });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE: IMAGES */}
        <div className="relative mx-auto min-h-[470px] w-full max-w-[560px] sm:min-h-[520px]">

          {/* Main image */}
          <div
            style={revealStyle(100)}
            className={`absolute right-0 top-0 h-[340px] w-[65%] overflow-hidden rounded-sm shadow-[0_20px_45px_rgba(0,0,0,0.12)] sm:h-[400px] ${revealClass(100)}`}
          >
            <img
              src={mainImage}
              alt="Student learning online"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Second image */}
          <div
            style={revealStyle(350)}
            className={`absolute bottom-0 left-0 z-10 h-[270px] w-[56%] overflow-hidden rounded-sm shadow-[0_22px_45px_rgba(0,0,0,0.18)] sm:h-[320px] ${revealClass(350)}`}
          >
            <img
              src={smallImage}
              alt="Instructor teaching an online course"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Navy floating card */}
          <div
            style={revealStyle(600)}
            className={`absolute left-[8%] top-[40px] z-20 flex min-h-[80px] items-center gap-4 rounded-sm bg-[#10272b] px-5 py-4 text-white shadow-[0_15px_30px_rgba(0,0,0,0.18)] sm:left-[11%] sm:px-6 ${revealClass(600)}`}
          >
            <div className="relative">
              <span className="text-4xl font-bold tracking-tight text-[#ffb800]">
                50+
              </span>
              <span className="absolute -right-3 -top-2 text-sm text-[#ffb800]">
                ✦
              </span>
            </div>

            <p className="text-sm font-medium leading-5 sm:text-base">
              Free courses
              <br />
              listed online
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="flex flex-col">

          <p
            style={revealStyle(750)}
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#24363a] ${revealClass(750)}`}
          >
            What We Offer
          </p>

          <h2
            style={revealStyle(900)}
            className={`max-w-[540px] text-3xl font-semibold leading-tight tracking-tight text-[#17292d] sm:text-4xl lg:text-[40px] ${revealClass(900)}`}
          >
            Personalized learning for your ambitions
          </h2>

          <p
            style={revealStyle(1050)}
            className={`mt-4 max-w-[510px] text-sm leading-7 text-gray-500 sm:text-base ${revealClass(1050)}`}
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
            mauris mus. Vitae diam dolor lacus amet integer ut.
          </p>

          {/* Features */}
          <ul
            style={revealStyle(1200)}
            className={`mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 ${revealClass(1200)}`}
          >
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm font-medium text-[#24363a]"
              >
                <span className="mt-0.5 text-base">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Bottom question box */}
          <div
            style={revealStyle(1400)}
            className={`mt-9 grid grid-cols-1 items-center gap-5 rounded-sm bg-[#edf6f8] p-6 sm:grid-cols-[1fr_auto] sm:p-8 ${revealClass(1400)}`}
          >
            <div>
              <h3 className="text-base font-semibold text-[#17292d]">
                Still have questions?
              </h3>

              <p className="mt-3 max-w-[300px] text-sm leading-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur ipsum blandit etiam
                aliquam.
              </p>
            </div>

            <Button
              text="Get Started"
              to="/register"
              showIcon={false}
              className="!rounded-sm !border-transparent !bg-[#10272b] !px-8 !py-3 !text-white !shadow-none hover:!bg-[#ffb800] hover:!text-[#17292d]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
