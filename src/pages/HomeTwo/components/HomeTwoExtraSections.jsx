
import { useEffect, useRef, useState } from "react";

import bannerImage from "../../../assets/course-mern.jpg";
import blogImage1 from "../../../assets/course-risk.jpg";
import blogImage2 from "../../../assets/course-design.jpg";
import blogImage3 from "../../../assets/course-finance.jpg";

const companies = [
  "CEH",
  "◉ B.",
  "Carla",
  "Shopia",
  "LEAFEE",
  "CONCLU",
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.",
    name: "Linda Grady",
    role: "CO-ASSISTANT MANAGER",
  },
  {
    quote:
      "Learning should be simple, practical, and available to everyone. Every new skill opens the door to another opportunity.",
    name: "Michael Anderson",
    role: "ONLINE STUDENT",
  },
  {
    quote:
      "The courses helped me build confidence and learn useful skills that I can apply in my everyday work.",
    name: "Sarah Williams",
    role: "COURSE GRADUATE",
  },
];

const articles = [
  {
    image: blogImage1,
    category: "CAREER",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2026",
  },
  {
    image: blogImage2,
    category: "DEVELOPMENT",
    title: "Master online learning with proven strategies",
    date: "October 4, 2026",
  },
  {
    image: blogImage3,
    category: "TEACHING",
    title: "How to enhance your learning experience today",
    date: "October 3, 2026",
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function HomeTwoExtraSections() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroReveal = useReveal();
  const blogReveal = useReveal();

  const currentTestimonial = testimonials[activeTestimonial];

  const previousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      {/* SECTION 1: HERO, COMPANIES AND TESTIMONIALS */}
      <section className="bg-white pb-16">
        {/* Hero banner */}
        <div
          ref={heroReveal.ref}
          className={`relative flex min-h-[430px] items-center bg-cover bg-center bg-no-repeat transition-all duration-1000 sm:min-h-[500px] lg:min-h-[560px] ${
            heroReveal.visible
              ? "scale-100 opacity-100"
              : "scale-[0.985] opacity-80"
          }`}
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/35" />

          <div
            className={`relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 transition-all duration-1000 ${
              heroReveal.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="max-w-lg text-white">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
                WHAT WE OFFER
              </p>

              <h1 className="max-w-md text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                Personalized learning for your ambitions
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/85">
                Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
                mauris mus. Vitae diam dolor lacus amet integer ut.
              </p>

              <a
                href="/courses"
                className="mt-7 inline-flex items-center justify-center rounded-sm bg-[#ffb900] px-8 py-3 text-xs font-semibold text-[#14272a] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Get Course
              </a>
            </div>
          </div>
        </div>

        {/* Moving company logo panel */}
        <div className="relative z-20 mx-auto -mt-10 w-[calc(100%-32px)] max-w-5xl sm:-mt-14 sm:w-[85%]">
          <div className="overflow-hidden rounded-sm bg-white px-5 py-5 shadow-[0_15px_40px_rgba(20,39,42,0.10)] sm:px-10 sm:py-7">
            <p className="mb-5 text-center text-[10px] text-gray-500">
              Learn from 350+ leading universities and companies with us
            </p>

            <div className="relative overflow-hidden">
              <div className="flex w-max animate-company-marquee items-center">
                {[...companies, ...companies].map((company, index) => (
                  <div
                    key={`${company}-${index}`}
                    className="flex h-10 w-32 shrink-0 items-center justify-center px-4 text-xl font-semibold tracking-tight text-[#253538] sm:w-40 sm:text-2xl"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial slider */}
        <div className="mx-auto mt-16 max-w-3xl px-6 text-center sm:mt-20">
          <div className="mb-3 select-none text-7xl leading-[0.8] text-gray-100">
            “
          </div>

          <div
            key={activeTestimonial}
            className="animate-testimonial-in"
            aria-live="polite"
          >
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#455356] sm:text-base">
              “{currentTestimonial.quote}”
            </p>

            <h3 className="mt-6 text-sm font-medium text-[#14272a]">
              {currentTestimonial.name}
            </h3>

            <p className="mt-2 text-[9px] font-medium tracking-[0.1em] text-gray-400">
              {currentTestimonial.role}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all hover:border-[#14272a] hover:bg-[#14272a] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all hover:border-[#14272a] hover:bg-[#14272a] hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: BLOG CARDS */}
      <section
        ref={blogReveal.ref}
        className="overflow-hidden bg-[#eff7f8] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Blog heading */}
          <div
            className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 sm:mb-12 ${
              blogReveal.visible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-sm"
            }`}
          >
            <p className="mb-3 text-[10px] font-medium tracking-[0.12em] text-[#536467]">
              EDUCATION BLOG
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#14272a] sm:text-4xl">
              Our news and ideas
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
              tempus facilisis scelerisque vitae consectetur vitae.
            </p>
          </div>

          {/* Three article cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className={`group overflow-hidden rounded-sm bg-white shadow-[0_12px_30px_rgba(20,39,42,0.07)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(20,39,42,0.13)] ${
                  blogReveal.visible
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "translate-y-10 scale-[0.97] opacity-0 blur-sm"
                }`}
                style={{
                  transitionDelay: blogReveal.visible
                    ? `${index * 180}ms`
                    : "0ms",
                }}
              >
                <a href="/blog" className="block">
                  <div className="aspect-[1.48/1] overflow-hidden bg-gray-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-[9px] font-semibold tracking-[0.08em] text-[#536467]">
                      {article.category}
                    </p>

                    <h3 className="mt-3 text-base font-semibold leading-snug text-[#14272a] transition-colors group-hover:text-[#ad7900] sm:text-lg">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-xs text-gray-400">
                      {article.date}
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes companyMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-company-marquee {
          animation: companyMarquee 28s linear infinite;
        }

        .animate-company-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes testimonialIn {
          from {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .animate-testimonial-in {
          animation: testimonialIn 450ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-company-marquee {
            animation: none;
          }

          .animate-testimonial-in {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
