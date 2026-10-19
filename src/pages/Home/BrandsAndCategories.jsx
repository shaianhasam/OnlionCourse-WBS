
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  HandCoins,
  Code2,
  Megaphone,
  Monitor,
  PenTool,
} from "lucide-react";

import Button from "../../components/Button/Button";
import courseBanner from "../../assets/course-banner.png";
import onlineClassVideo from "../../assets/online-class.mp4";

const logos = [
  { name: "CARLA TEXTURAL", style: "font-serif text-3xl font-bold" },
  { name: "SHOPIA", style: "font-serif text-4xl" },
  { name: "LEOFE FASHION", style: "text-2xl font-light tracking-wide" },
  { name: "CONCLUAS", style: "text-xl font-bold tracking-[0.2em]" },
  { name: "A&H FASHION STORE", style: "font-serif text-2xl" },
  { name: "B.", style: "font-serif text-4xl font-bold" },
];

const categories = [
  {
    title: "Creative web design",
    count: 8,
    icon: Palette,
    link: "/courses/design",
  },
  {
    title: "Finance accounting",
    count: 10,
    icon: HandCoins,
    link: "/courses/finance",
  },
  {
    title: "IT and software",
    count: 5,
    icon: Code2,
    link: "/courses/software",
  },
  {
    title: "Digital marketing",
    count: 4,
    icon: Megaphone,
    link: "/courses/marketing",
  },
  {
    title: "Web development",
    count: 8,
    icon: Monitor,
    link: "/courses/development",
  },
  {
    title: "Content writing",
    count: 3,
    icon: PenTool,
    link: "/courses/writing",
  },
];

export default function BrandsAndCategories() {
  const sectionRef = useRef(null);
  const bannersRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [bannersVisible, setBannersVisible] = useState(false);

  // Reveal categories when scrolling
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Reveal both banners when scrolling
  useEffect(() => {
    const element = bannersRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBannersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* Moving Company Logos */}
      <section className="relative overflow-hidden bg-[#eff6f8] py-10 md:py-12">
        <p className="mb-7 text-center text-[11px] font-medium text-[#53636b]">
          Learn from 350+ leading universities and companies with us
        </p>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#eff6f8] to-transparent sm:w-28 md:w-40" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#eff6f8] to-transparent sm:w-28 md:w-40" />

        <div className="flex w-max animate-brand-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 md:gap-20 md:pr-20"
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className={`flex h-10 shrink-0 items-center justify-center whitespace-nowrap text-[#929cab] ${logo.style}`}
                >
                  {logo.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories */}
      <section
        ref={sectionRef}
        className={`bg-white py-20 transition-all duration-1000 ease-out md:py-24 ${
          visible
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-8 scale-[0.985] opacity-0 blur-[6px]"
        }`}
      >
        <div className="mx-auto w-[92%] max-w-7xl">

          <div
            className={`mb-10 text-center transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-5 opacity-0 blur-sm"
            }`}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-[#183136]">
              Top Categories
            </p>

            <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#10272b] md:text-[34px]">
              Discover leading categories to
              <br className="hidden sm:block" />
              elevate your journey
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  to={category.link}
                  style={{
                    transitionDelay: visible ? `${index * 100}ms` : "0ms",
                  }}
                  className={`group flex min-h-[180px] flex-col items-center justify-center rounded-[4px] border border-[#e2e7eb] bg-white px-3 py-5 text-center transition-all duration-200 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.035] hover:border-[#d8e0e4] hover:shadow-[0_12px_28px_rgba(16,39,43,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb800] ${
                    visible
                      ? "translate-y-0 opacity-100 blur-0"
                      : "translate-y-7 opacity-0 blur-sm"
                  }`}
                >
                  <div className="mb-3 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#eff6f8] text-[#183136] transition-all duration-200 group-hover:bg-[#e5f0f3] group-hover:text-[#bd8a00]">
                    <Icon
                      size={34}
                      strokeWidth={1.15}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="max-w-[135px] text-[15px] font-semibold leading-snug text-[#152c30]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#818181]">
                    {category.count} Courses
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotional Banners with Scroll Focus */}
      <section
        ref={bannersRef}
        className={`bg-white pb-16 pt-2 transition-all duration-1000 ease-out md:pb-20 ${
          bannersVisible
            ? "translate-y-0 opacity-100 blur-0"
            : "translate-y-8 opacity-0 blur-[6px]"
        }`}
      >
        <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">

          {/* First Banner: Popular Courses */}
          <div
            className={`relative flex min-h-[280px] items-center overflow-hidden rounded-[4px] bg-[#eff6f8] transition-all duration-700 ease-out md:min-h-[290px] ${
              bannersVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-sm"
            }`}
          >
            <img
              src={courseBanner}
              alt="Student learning online"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* White fade behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eff6f8] via-[#eff6f8]/95 via-35% to-transparent to-75%" />

            <div className="relative z-10 w-[58%] px-6 py-8 md:px-12">
              <h2 className="mb-7 max-w-[280px] text-xl font-semibold leading-snug text-[#152c30] md:text-2xl">
                Quick access to the popular courses
              </h2>

              <Button
  text="View Courses"
  to="/courses"
  variant="yellow"
/>
            </div>
          </div>

          {/* Second Banner: Apply Now + Video */}
          <div
            style={{
              transitionDelay: bannersVisible ? "180ms" : "0ms",
            }}
            className={`grid min-h-[280px] grid-cols-1 items-center gap-6 rounded-[4px] bg-[#f1f1e9] p-6 transition-all duration-700 ease-out sm:grid-cols-2 md:min-h-[290px] md:px-8 md:py-8 ${
              bannersVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-sm"
            }`}
          >
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-7 max-w-[220px] text-xl font-semibold leading-snug text-[#152c30] md:text-2xl">
                Develop your skills online!
              </h2>

              <Button
  text="Apply Now"
  to="/apply"
  variant="dark"
/>
            </div>

            {/* Autoplay Video Preview */}
            <Link
              to="/online-class"
              aria-label="Explore online classes"
              className="group relative block overflow-hidden rounded-xl"
            >
              <video
                src={onlineClassVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-[190px] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02] md:h-[220px]"
              />

              {/* Decorative video-call controls */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/30 to-transparent p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-lg text-white">
                  +
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-gray-600">
                  🎙
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-gray-600">
                  ▣
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm text-white">
                  ☎
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
