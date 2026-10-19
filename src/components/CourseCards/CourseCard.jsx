
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Star } from "lucide-react";

export default function CourseCard({ course }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      style={{
        transitionDelay: `${(Number(course.id) - 1) % 3 * 140}ms`,
      }}
      className={`group min-w-0 bg-white shadow-sm
        transition-[opacity,transform,filter,box-shadow] duration-700 ease-out
        hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(16,39,43,0.16)]
        ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-8 scale-[0.97] opacity-0 blur-[6px]"
        }`}
    >
      {/* Course Image */}
      <div className="relative h-[220px] overflow-visible">
        <div className="h-full w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Blue Price Circle */}
        <span className="absolute -bottom-5 right-6 z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#2850df] text-base font-semibold text-white shadow-sm">
          {course.price}
        </span>
      </div>

      {/* Course Information */}
      <div className="px-6 pt-8">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#24363a]">
          {course.category}
        </p>

        <h3 className="min-h-[56px] text-lg font-semibold leading-snug text-[#17292d]">
          {course.title}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-[#f5b313]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill="currentColor"
                strokeWidth={1}
              />
            ))}
          </div>

          <span className="text-xs text-gray-500">
            {course.rating} ({course.reviews})
          </span>
        </div>

        {/* Bottom Row */}
        <div className="relative mt-5 h-[58px] border-t border-gray-200">

          {/* Lessons and Enrolled */}
          <div className="absolute inset-0 grid grid-cols-2 transition-opacity duration-200 group-hover:pointer-events-none group-hover:opacity-0">
            <div className="flex items-center justify-center gap-2 border-r border-gray-200 text-xs text-[#26383b]">
              <BookOpen size={14} />
              <span>{course.lessons} Lessons</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-[#26383b]">
              <Users size={14} />
              <span>{course.enrolled} Enrolled</span>
            </div>
          </div>

          {/* Hover Buttons */}
          <div className="pointer-events-none absolute inset-0 flex translate-y-1 gap-2 pt-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            {course.buttonMode === "single" ? (
              <Link
                to={course.detailsLink}
                className="flex h-[49px] w-full items-center justify-center bg-[#ffb800] text-sm font-medium text-[#17292d] transition-colors duration-200 hover:bg-gray-400 hover:text-white"
              >
                Course Details
              </Link>
            ) : (
              <>
                <Link
                  to={course.detailsLink}
                  className="flex h-[49px] flex-1 items-center justify-center bg-[#ffb800] px-2 text-xs font-semibold text-[#17292d] transition-colors duration-200 hover:bg-gray-400 hover:text-white"
                >
                  Details
                </Link>

                <Link
                  to={course.enrollLink}
                  className="flex h-[49px] flex-1 items-center justify-center bg-[#10272b] px-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-gray-400"
                >
                  Enroll Now
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
