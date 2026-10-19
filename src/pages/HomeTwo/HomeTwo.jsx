import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BenefitsSection from "./components/BenefitsSection";
import CoursesSection from "./components/CoursesSection";
import WhyWeAre from "./components/WhyWeAre";
import HomeTwoExtraSections from "./components/HomeTwoExtraSections";
import {
  Headphones,
  UserRound,
  RefreshCw,
  Palette,
  Calculator,
  Layers,
  Megaphone,
  CodeXml,
  Type,
  ArrowRight,
} from "lucide-react";

import "./HomeTwo.css";
import heroImage from "../../assets/Home-two/HomeTwo.jpg";

const features = [
  {
    icon: Headphones,
    title: "150+ online courses",
    description: "Learn new skills at your own pace",
  },
  {
    icon: UserRound,
    title: "Personalized learning",
    description: "Learning designed around you",
  },
  {
    icon: RefreshCw,
    title: "Lifetime update",
    description: "Keep your knowledge up to date",
  },
];

const categories = [
  {
    icon: Palette,
    title: "Creative web design",
    courses: 8,
    link: "/courses/design",
  },
  {
    icon: Calculator,
    title: "Finance accounting",
    courses: 10,
    link: "/courses/finance",
  },
  {
    icon: Layers,
    title: "IT and software",
    courses: 5,
    link: "/courses/development",
  },
  {
    icon: Megaphone,
    title: "Digital marketing",
    courses: 4,
    link: "/courses/management",
  },
  {
    icon: CodeXml,
    title: "Web development",
    courses: 8,
    link: "/courses/development",
  },
  {
    icon: Type,
    title: "Content writing",
    courses: 3,
    link: "/courses",
  },
];

export default function HomeTwo() {
  useEffect(() => {
    const elements = document.querySelectorAll(".home-two-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-two-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-two-page bg-white text-[#172a2d]">
      {/* HERO SECTION */}
      <section
        className="home-two-hero relative flex min-h-[620px] items-center overflow-hidden bg-cover bg-center md:min-h-[700px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[#061417]/55" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-2 lg:gap-16">
          {/* Left heading */}
          <div className="home-two-hero-title">
            <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="hero-word hero-word-one block">Personal</span>
              <span className="hero-word hero-word-two block text-right text-[#ffb800]">
                Coach
              </span>
            </h1>
          </div>

          {/* Right heading */}
          <div className="home-two-hero-copy self-end pb-2 lg:mt-48">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Online learning
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Transform{" "}
              <span className="text-[#ffb800]">learning</span> with flexible
              online education
            </h2>
          </div>
        </div>
      </section>

      {/* FLOATING FEATURES */}
      <section className="relative z-10 px-5">
        <div className="home-two-reveal home-two-features mx-auto -mt-7 grid max-w-5xl grid-cols-1 gap-6 bg-white px-6 py-7 shadow-[0_15px_50px_rgba(20,35,38,0.09)] sm:grid-cols-3 sm:gap-5 md:px-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#253b3e]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#263639]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          {/* Left text */}
          <div className="home-two-reveal md:pt-1">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-[#526467]">
              Top categories
            </p>

            <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight text-[#172a2d] sm:text-4xl">
              Discover leading categories
            </h2>

            <Link
              to="/courses"
              className="home-two-start-button mt-5 inline-flex items-center gap-3 rounded-sm bg-[#14282b] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#ffb800] hover:text-[#14282b]"
            >
              Get Started
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right category cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Link
                  to={category.link}
                  key={category.title}
                  style={{ "--card-delay": `${index * 100}ms` }}
                  className="home-two-reveal home-two-category-card flex min-h-[135px] flex-col items-center justify-center border border-[#e7e9e9] bg-white px-3 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_15px_35px_rgba(24,42,45,0.12)] sm:min-h-[145px]"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f5f5] text-[#526467] transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.4} />
                  </span>

                  <h3 className="max-w-[130px] text-xs font-semibold leading-snug text-[#263639]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-[11px] text-gray-500">
                    {category.courses} Courses
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      
      <BenefitsSection />
      <CoursesSection />
      <WhyWeAre />
        <HomeTwoExtraSections />
    </div>
  );
}