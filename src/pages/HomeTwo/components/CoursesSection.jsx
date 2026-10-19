import React, { useEffect, useRef, useState } from "react";

import course1 from "../../../assets/Home-two/HomeTwo.jpg";
import course2 from "../../../assets/course-database.jpg";
import course3 from "../../../assets/course-banner.png";
import course4 from "../../../assets/course-finance.jpg";
import course5 from "../../../assets/course-design.jpg";
import course6 from "../../../assets/course-mern.jpg";

const courses = [
  {
    id: 1,
    category: "DEVELOPMENT",
    title: "Building single page applications with Angular",
    price: "Free",
    rating: "5.00",
    reviews: "320",
    image: course1,
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    price: "$59",
    rating: "4.49",
    reviews: "754",
    image: course2,
  },
  {
    id: 3,
    category: "FINANCE",
    title: "Operations management and process improvement",
    price: "Free",
    rating: "5.00",
    reviews: "812",
    image: course3,
  },
  {
    id: 4,
    category: "MANAGEMENT",
    title: "Risk management and business continuity",
    price: "$49",
    rating: "4.8",
    reviews: "201",
    image: course4,
  },
  {
    id: 5,
    category: "DESIGN",
    title: "Design systems and pattern libraries",
    price: "$99",
    rating: "5.00",
    reviews: "210",
    image: course5,
  },
  {
    id: 6,
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    price: "$72",
    rating: "5.00",
    reviews: "905",
    image: course6,
  },
];

function CourseCard({ course, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative isolate h-[400px] overflow-hidden rounded-[2px] bg-slate-300 transition-all duration-700 ease-out sm:h-[400px] ${
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.97] opacity-0 blur-sm"
      }`}
      style={{
        transitionDelay: visible ? `${index * 120}ms` : "0ms",
      }}
    >
      {/* Background image */}
      <img
        src={course.image}
        alt={course.title}
        className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 -z-10 transition-colors duration-500 ${
          hovered ? "bg-black/45" : "bg-black/40"
        }`}
      />

      {/* Price badge */}
      <span className="absolute right-4 top-4 z-20 flex h-13 min-w-13 items-center justify-center rounded-full bg-blue-600 px-2 text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-90">
        {course.price}
      </span>

      {/* Animated white corner lines */}
      <div
        className={`pointer-events-none absolute inset-[8px] z-10 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Top and left line */}
        <span
          className={`absolute left-0 top-0 h-[1px] bg-white transition-all duration-700 ease-in-out ${
            hovered ? "w-[45%]" : "w-0"
          }`}
        />

        <span
          className={`absolute left-0 top-0 w-[1px] bg-white transition-all duration-700 ease-in-out ${
            hovered ? "h-[38%]" : "h-0"
          }`}
        />

        {/* Right and bottom line */}
        <span
          className={`absolute bottom-0 right-0 h-[1px] bg-white transition-all duration-700 ease-in-out ${
            hovered ? "w-[45%]" : "w-0"
          }`}
        />

        <span
          className={`absolute bottom-0 right-0 w-[1px] bg-white transition-all duration-700 ease-in-out ${
            hovered ? "h-[38%]" : "h-0"
          }`}
        />
      </div>

      {/* Course content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
        <div
          className={`transition-transform duration-500 ease-out ${
            hovered ? "-translate-y-3" : "translate-y-0"
          }`}
        >
          <p className="mb-2 text-[8px] font-semibold tracking-wide text-white/80">
            {course.category}
          </p>

          <h3 className="max-w-[280px] text-sm font-bold leading-[1.45] text-white sm:text-base">
            {course.title}
          </h3>

          <div className="mt-2 flex items-center gap-1 text-[10px]">
            <span className="tracking-[-1px] text-amber-400">★★★★★</span>

            <span className="text-white">{course.rating}</span>

            <span className="text-white/60">({course.reviews})</span>
          </div>
        </div>

        {/* Details button */}
        <div
          className={`grid transition-all duration-500 ease-out ${
            hovered
              ? "mt-3 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <button
              type="button"
              onClick={() => {
                window.location.href = `/courses/${course.id}`;
              }}
              tabIndex={hovered ? 0 : -1}
              className="w-full bg-amber-400 py-3 text-[10px] font-semibold text-slate-900 transition-colors duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Course Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CoursesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#eef5f6] px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div
          className={`mb-5 transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-5 opacity-0 blur-sm"
          }`}
        >
          <p className="mb-2 text-[9px] font-medium uppercase tracking-wider text-slate-600">
            Online Learning
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#182d31] sm:text-3xl">
            Top online courses
          </h2>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        {/* Bottom message */}
        <div
          className={`mt-8 flex justify-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="rounded-full bg-[#142b2f] px-5 py-3 text-center text-[9px] text-white sm:px-8">
            We assist you in finding the ideal tutor at no cost.{" "}
            <a
              href="/courses"
              className="font-semibold underline underline-offset-2 transition-colors hover:text-amber-400"
            >
              Browse All Available Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
