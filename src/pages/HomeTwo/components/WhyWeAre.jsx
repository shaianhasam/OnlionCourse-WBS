
import { useEffect, useRef, useState } from "react";
import whyVideo from "../../../assets/online-class.mp4";
import whyImage from "../../../assets/course-finance.jpg";


const statistics = [
  {
    startValue: 1000,
    value: 1500,
    suffix: "K",
    label: "FINISH SEASONS",
    decimals: 1,
  },
  {
    startValue: 0,
    value: 7.8,
    suffix: "K",
    label: "ENROLLED",
    decimals: 1,
  },
  {
    startValue: 0,
    value: 100,
    suffix: "%",
    label: "JOB PLACEMENT",
    decimals: 0,
  },
];

function StatItem({ stat, index }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(stat.startValue);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame;
    let startTime;

    const duration = 1600;

    function animate(timestamp) {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      const nextValue =
        stat.startValue +
        (stat.value - stat.startValue) * eased;

      setCount(progress === 1 ? stat.value : nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started, stat.startValue, stat.value]);

  return (
    <div
      ref={ref}
      className={`min-w-0 px-3 transition-all duration-700 sm:px-5 ${
        started
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-baseline justify-center whitespace-nowrap text-[clamp(1.7rem,3vw,2.65rem)] font-semibold leading-none tracking-[-0.055em] text-[#14272a]">
        <span className="tabular-nums">
          {count.toFixed(stat.decimals)}
        </span>
        <span>{stat.suffix}</span>
      </div>

      <p className="mt-3 text-center text-[10px] font-medium leading-4 text-[#14272a] sm:text-[11px]">
        {stat.label}
      </p>
    </div>
  );
}

export default function WhyWeAre() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div
          className={`mb-12 text-center transition-all duration-700 sm:mb-16 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.04em] text-[#14272a]">
            WHY WE ARE
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#14272a] sm:text-4xl lg:text-[40px]">
            World-class learning from anywhere
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-[76px]">
          {/* Image and video composition */}
          <div
            className={`relative mx-auto w-full max-w-[540px] transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative h-[390px] sm:h-[440px]">
              {/* Yellow circle */}
              <div className="absolute left-[12%] top-[3%] h-[105px] w-[105px] rounded-full bg-[#ffb900] sm:h-[140px] sm:w-[140px]" />

              {/* Curved outline */}
              <svg
                viewBox="0 0 500 450"
                className="pointer-events-none absolute bottom-0 left-0 z-0 h-full w-full"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M105 175 C45 220 45 305 90 355 C140 415 225 440 285 395 C330 360 340 320 325 280"
                  stroke="#e6e9e9"
                  strokeWidth="2"
                />
              </svg>

              {/* Video on the left */}
              <div className="absolute left-0 top-[25%] z-20 h-[185px] w-[40%] overflow-hidden rounded-tl-[28px] rounded-tr-[3px] rounded-br-[3px] rounded-bl-[3px] bg-gray-100 sm:h-[238px] sm:w-[40%]">
                <video
                  src={whyVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Main image on the right */}
              <div className="absolute right-[4%] top-[10%] z-10 h-[280px] w-[57%] overflow-hidden rounded-[3px] bg-gray-100 sm:h-[345px] sm:w-[57%]">
                <img
                  src={whyImage}
                  alt="Student learning online"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Description, statistics and CTA */}
          <div className="w-full">
            <p
              className={`max-w-[440px] text-[13px] leading-[1.9] tracking-[0.01em] text-[#858585] transition-all delay-100 duration-700 sm:text-[14px] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>

            {/* Three aligned statistics */}
            <div className="mt-7 grid grid-cols-3 items-stretch">
              {statistics.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0
                      ? "border-r border-[#14272a]"
                      : index === 1
                        ? "border-r border-[#14272a]"
                        : ""
                  }
                >
                  <StatItem stat={stat} index={index} />
                </div>
              ))}
            </div>

            {/* Bottom CTA panel */}
            <div className="mt-8 flex flex-col gap-5 rounded-[3px] bg-[#edf6f7] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="min-w-0">
                <h3 className="text-[16px] font-semibold text-[#14272a]">
                  Still have questions?
                </h3>

                <p className="mt-4 max-w-[260px] text-[13px] leading-6 text-[#858585]">
                  Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
                </p>
              </div>

              <a
                href="/courses"
                className="inline-flex min-h-[42px] shrink-0 items-center justify-center rounded-[3px] bg-[#14272a] px-9 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-[#ffb900] hover:text-[#14272a]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
