
import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import CourseData from "./CourseData";

export default function CourseSection() {
  return (
    <section className="bg-[#edf6f8] px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1240px]">

        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
              Online Learning
            </p>

            <h2 className="text-3xl font-semibold text-[#17292d]">
              Top online courses
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            {[
              "All Courses",
              "Design",
              "Development",
              "Management",
              "Finance",
            ].map((category) => (
              <Link
                key={category}
                to="/courses"
                className="transition-colors hover:text-blue-700"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CourseData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#10272b] px-6 py-4 text-center text-xs text-white shadow-md">
            <span>
              We assist you in finding the ideal tutor at no cost.
            </span>

            <Link
              to="/courses"
              className="font-semibold underline underline-offset-2 transition-colors hover:text-[#ffb800]"
            >
              Browse All Available Courses
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
