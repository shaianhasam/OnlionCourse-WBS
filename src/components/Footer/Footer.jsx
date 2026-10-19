
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import footerBg from "../../assets/hero-photo.jpg";
import logo from "../../assets/Upskill-logo.png";

const footerColumns = [
  {
    title: "Quick links",
    links: [
      { label: "Home", to: "/" },
      { label: "Events", to: "/events" },
      { label: "Career", to: "/career" },
      { label: "Instructor", to: "/instructor" },
    ],
  },
  {
    title: "Popular courses",
    links: [
      { label: "Finance", to: "/courses/finance" },
      { label: "Management", to: "/courses/management" },
      { label: "Design", to: "/courses/design" },
      { label: "Web development", to: "/courses/development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Courses", to: "/courses" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
      { label: "License", to: "/license" },
      { label: "Pricing", to: "/pricing" },
      { label: "404", to: "/404" },
    ],
  },
  {
    title: "CMS",
    links: [
      { label: "Course details", to: "/courses/angular" },
      { label: "Instructor details", to: "/instructor" },
      { label: "Blog details", to: "/blog" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = footerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative isolate mt-0 text-white transition-all duration-[1200ms] ease-out ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.98] opacity-0 blur-md"
      }`}
    >
      {/* Footer background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
        aria-hidden="true"
      />

      {/* Yellow call-to-action banner */}
      <div className="absolute left-1/2 top-0 z-20 w-[calc(100%-2rem)] max-w-[1208px] -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-1 items-center gap-7 rounded-md bg-[#ffb800] px-7 py-9 text-[#102629] shadow-sm sm:px-12 lg:grid-cols-[1fr_auto] lg:px-24 lg:py-12">
          <h2 className="max-w-[380px] text-2xl font-semibold leading-tight sm:text-3xl">
            Are you ready to start
            <br className="hidden sm:block" /> your journey?
          </h2>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              text="Browse Courses"
              to="/courses"
              showIcon={false}
              className="!w-full !rounded-[4px] !border-[#102629] !bg-[#102629] !px-6 !py-3.5 !text-sm !text-white !shadow-none hover:!border-gray-700 hover:!bg-gray-700 sm:!w-auto"
            />

            <Button
              text="Become A Teacher"
              to="/instructor"
              showIcon={false}
              className="!w-full !rounded-[4px] !border-[#102629] !bg-transparent !px-6 !py-3.5 !text-sm !text-[#102629] !shadow-none hover:!bg-[#102629] hover:!text-white sm:!w-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 pb-7 pt-44 sm:px-10 lg:px-14 lg:pt-48">
        <div
          className={`grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.1fr_0.8fr_1.5fr] lg:gap-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* Logo and description */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Link to="/" aria-label="Home" className="inline-block">
              <img
                src={logo}
                alt="Upskill logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[250px] text-sm leading-[1.9] text-gray-300/80">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus
              quis eget amet ut tristique cras.
            </p>
          </div>

          {/* Footer navigation columns */}
          {footerColumns.map((column, index) => (
            <nav
              key={column.title}
              aria-label={column.title}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <h3 className="mb-6 text-base font-semibold text-white">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-300/80 transition-colors duration-200 hover:text-[#ffb800]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom divider and credits */}
        <div
          className={`mt-12 border-t border-white/30 pt-5 transition-all duration-1000 ease-out sm:mt-10 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
        >
          <div className="flex flex-col gap-4 text-xs uppercase tracking-wide text-gray-300/80 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Design by{" "}
              <span className="font-semibold text-white">
                Radiant Templates
              </span>
            </p>

            <p>
              Powered by{" "}
              <span className="font-semibold text-white">Webflow</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
