
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import backgroundImage from "../../assets/Background.jpg";
import lindaImage from "../../assets/guide-1.png";
import studentImage2 from "../../assets/guide-2.png";
import studentImage3 from "../../assets/guide-3.png";

const testimonials = [
  {
    name: "Linda Grady",
    role: "CO-ASSISTANT MANAGER",
    image: lindaImage,
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
  },
  {
    name: "James Wilson",
    role: "WEB DEVELOPER",
    image: studentImage2,
    quote:
      "The online courses helped me improve my practical skills and gave me the confidence to take the next step in my career.",
  },
  {
    name: "Sarah Mitchell",
    role: "UI/UX DESIGNER",
    image: studentImage3,
    quote:
      "The learning experience was clear, flexible and practical. I could learn at my own pace and apply my new skills to real projects.",
  },
];

function useCountUp(target, active, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [target, active, duration]);

  return count;
}

export default function Testimonials() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const successfulStudents = useCountUp(70, visible);
  const jobPlacements = useCountUp(25, visible);

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
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const current = testimonials[activeIndex];

  const changeTestimonial = (direction) => {
    setChanging(true);

    setActiveIndex((previous) => {
      return (
        (previous + direction + testimonials.length) %
        testimonials.length
      );
    });

    // Restart the animation for the new testimonial.
    window.setTimeout(() => {
      setChanging(false);
    }, 50);
  };

  const reveal = (delay) => ({
    transitionDelay: visible ? `${delay}ms` : "0ms",
  });

  const revealClass = visible
    ? "translate-y-0 opacity-100 blur-0"
    : "translate-y-8 opacity-0 blur-[6px]";

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#10272b] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_45%]"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-[#10272b]/90" />

      {/* Main content */}
      <div
        className={`mx-auto grid max-w-[1240px] grid-cols-1 gap-12 transition-all duration-1000 ease-out lg:grid-cols-2 lg:gap-20 ${revealClass}`}
      >
        {/* LEFT SIDE */}
        <div>
          <p
            style={reveal(100)}
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gray-300 transition-all duration-1000 ${revealClass}`}
          >
            Our Testimonials
          </p>

          <h2
            style={reveal(250)}
            className={`mb-6 max-w-[480px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${revealClass} transition-all duration-1000`}
          >
            Trusted by our
            <br />
            successful students
          </h2>

          {/* Student image */}
          <div
            style={reveal(400)}
            className={`relative h-[250px] w-full max-w-[400px] overflow-hidden rounded-sm shadow-2xl sm:h-[270px] ${revealClass} transition-all duration-1000`}
          >
            <img
              key={current.image}
              src={current.image}
              alt={current.name}
              className={`h-full w-full object-cover transition-all duration-700 ${
                changing
                  ? "scale-105 opacity-40 blur-sm"
                  : "scale-100 opacity-100 blur-0"
              }`}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">

          {/* Animated statistics */}
          <div
            style={reveal(300)}
            className={`mb-9 grid grid-cols-2 gap-5 transition-all duration-1000 ${revealClass}`}
          >
            <div className="flex items-center gap-4 border-r border-white/40 pr-4">
              <span className="whitespace-nowrap text-3xl font-semibold sm:text-4xl">
                {successfulStudents}M
              </span>

              <span className="text-[10px] uppercase leading-5 tracking-wide text-gray-400 sm:text-xs">
                Successful
                <br />
                Students
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="whitespace-nowrap text-3xl font-semibold sm:text-4xl">
                {jobPlacements}K
              </span>

              <span className="text-[10px] uppercase leading-5 tracking-wide text-gray-400 sm:text-xs">
                Global Job
                <br />
                Placements
              </span>
            </div>
          </div>

          {/* Testimonial text */}
          <div
            key={current.name}
            className={`transition-all duration-500 ${
              changing
                ? "translate-y-3 opacity-0 blur-sm"
                : "translate-y-0 opacity-100 blur-0"
            }`}
          >
            <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-7">
              “{current.quote}”
            </p>

            <h3 className="mt-7 text-base font-semibold text-white">
              {current.name}
            </h3>

            <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-gray-500">
              {current.role}
            </p>
          </div>

          {/* Previous / Next buttons */}
          <div className="mt-7 flex gap-2">
            <button
              type="button"
              onClick={() => changeTestimonial(-1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-gray-300 transition-all duration-300 hover:border-[#ffb800] hover:bg-[#ffb800] hover:text-[#10272b]"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => changeTestimonial(1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-gray-300 transition-all duration-300 hover:border-[#ffb800] hover:bg-[#ffb800] hover:text-[#10272b]"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
