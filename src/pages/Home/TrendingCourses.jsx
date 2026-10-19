
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  BookOpen,
  Users,
  Check,
  BookMarked,
  Wallet,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import Button from "../../components/Button/Button";

import course1 from "../../assets/course-banner.png";
import course2 from "../../assets/course-database.jpg";
import course3 from "../../assets/course-design.jpg";
import course4 from "../../assets/course-finance.jpg";

const courses = [
  {
    id: 1,
    category: "DEVELOPMENT",
    title: "Building single page applications with angular",
    image: course1,
    price: "Free",
    rating: "5.00",
    reviews: "328",
    lessons: 6,
    enrolled: "12K",
    description:
      "Learn how to build modern single-page applications and develop practical frontend skills.",
    points: [
      "Build interactive applications",
      "Understand Angular fundamentals",
      "Create reusable components",
    ],
    link: "/courses/angular",
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    image: course2,
    price: "$59",
    rating: "4.49",
    reviews: "756",
    lessons: 8,
    enrolled: "7K",
    description:
      "Learn database fundamentals and connect your applications to MongoDB.",
    points: [
      "Understand database concepts",
      "Work with MongoDB collections",
      "Connect databases to applications",
    ],
    link: "/courses/mongodb",
  },
  {
    id: 3,
    category: "MANAGEMENT",
    title: "Risk management and business continuity",
    image: course3,
    price: "$49",
    rating: "4.88",
    reviews: "210",
    lessons: 3,
    enrolled: "8K",
    description:
      "Discover practical methods for identifying risks and improving business continuity.",
    points: [
      "Identify business risks",
      "Build risk management plans",
      "Improve decision-making",
    ],
    link: "/courses/risk-management",
  },
  {
    id: 4,
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    image: course4,
    price: "$72",
    rating: "5.00",
    reviews: "985",
    lessons: 12,
    enrolled: "23K",
    description:
      "Explore full-stack web development using modern JavaScript technologies.",
    points: [
      "Build frontend interfaces",
      "Create backend APIs",
      "Connect applications to databases",
    ],
    link: "/courses/mern-stack",
  },
];

const features = [
  {
    title: "Learn anything",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    Icon: BookMarked,
  },
  {
    title: "Save money",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    Icon: Wallet,
  },
  {
    title: "Flexible courses",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    Icon: GraduationCap,
  },
  {
    title: "Unlimited certificate",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    Icon: ShieldCheck,
  },
];

function CourseCard({ course, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHovered(false);
        }
      }}
      className={`group relative min-w-0 bg-white transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.97] opacity-0 blur-[5px]"
      }`}
      style={{
        transitionDelay: visible ? `${index * 160}ms` : "0ms",
      }}
    >
      {/* Image */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Price badge */}
        <span className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#294de0] text-sm font-semibold text-white shadow-lg">
          {course.price}
        </span>

        {/* Normal card content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-white transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="mb-2 text-[10px] font-medium tracking-wide">
            {course.category}
          </span>

          <h3 className="text-base font-semibold leading-5">
            {course.title}
          </h3>

          <div className="mt-3 flex items-center gap-1">
            <div className="flex text-[#ffb800]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="currentColor"
                  strokeWidth={1}
                />
              ))}
            </div>

            <span className="text-[10px] text-white/80">
              {course.rating} ({course.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* Lessons and enrolled */}
      <div
        className={`grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-100 transition-all duration-300 ${
          hovered
            ? "pointer-events-none h-0 overflow-hidden opacity-0"
            : "h-[54px] opacity-100"
        }`}
      >
        <div className="flex items-center justify-center gap-2 text-xs text-[#24363a]">
          <BookOpen size={14} />
          <span>{course.lessons} Lessons</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-[#24363a]">
          <Users size={14} />
          <span>{course.enrolled} Enrolled</span>
        </div>
      </div>

      {/* White hover panel */}
      <div
        className={`absolute left-1/2 top-1/2 z-20 w-[88%] -translate-x-1/2 -translate-y-1/2 bg-white p-4 text-[#17292d] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-500 ease-out sm:p-5 ${
          hovered
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        }`}
      >
        <h3 className="text-sm font-semibold leading-5">
          {course.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-wide text-gray-500">
          <span>• {course.lessons} Lessons</span>
          <span>• {course.enrolled} Enrolled</span>
        </div>

        <p className="mt-4 text-xs leading-5 text-gray-500">
          {course.description}
        </p>

        <ul className="mt-3 space-y-2">
          {course.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-[10px] leading-4 text-gray-600"
            >
              <Check
                size={12}
                className="mt-0.5 shrink-0 text-gray-500"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Button
            text="Course Details"
            to={course.link}
            showIcon={false}
            className="!flex !w-full !rounded-sm !border-transparent !bg-[#ffb800] !px-3 !py-3 !text-xs !font-medium !text-[#17292d] !shadow-none hover:!bg-gray-300 hover:!text-[#17292d]"
          />
        </div>
      </div>
    </article>
  );
}

export default function TrendingCourses() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#edf6f8] px-5 py-20 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* TRENDING COURSES HEADING */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-6 opacity-0 blur-[5px]"
          }`}
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#24363a]">
            Trending Courses
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#17292d] sm:text-3xl">
            Explore our top programs
          </h2>
        </div>

        {/* COURSE CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        {/* WHY WE ARE */}
        <div
          className={`mt-24 pb-2 text-center transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-8 opacity-0 blur-[5px]"
          }`}
          style={{ transitionDelay: visible ? "400ms" : "0ms" }}
        >
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#24363a]">
              Why We Are
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-[#17292d] sm:text-3xl">
              Elevate your professional journey
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>
          </div>

          {/* FOUR FEATURES */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, description, Icon }, index) => (
              <div
                key={title}
                className={`transition-all duration-700 ease-out hover:-translate-y-2 ${
                  visible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-6 opacity-0 blur-[4px]"
                }`}
                style={{
                  transitionDelay: visible
                    ? `${550 + index * 150}ms`
                    : "0ms",
                }}
              >
                <div className="mb-4 flex justify-center text-[#17292d]">
                  <Icon size={30} strokeWidth={1.2} />
                </div>

                <h3 className="text-sm font-semibold text-[#17292d]">
                  {title}
                </h3>

                <p className="mx-auto mt-4 max-w-[240px] text-xs leading-6 text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
