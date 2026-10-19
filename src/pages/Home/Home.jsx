import React from "react";
import { Star, Award } from "lucide-react";
import Button from "../../components/Button/Button";

import girlPhoto from "../../assets/hero1.png";
import heroBg from "../../assets/hero-photo.jpg";
import BrandsAndCategories from "./BrandsAndCategories";
import CourseSection from "../../components/CourseCards/CourseSection";
import PersonalizedLearning from "./PersonalizedLearning";
import Testimonials from "./Testimonials";
import TrendingCourses from "./TrendingCourses";

// تصاویر چهار کاربر
import user1 from "../../assets/guide-1.png";
import user2 from "../../assets/guide-2.png";
import user3 from "../../assets/guide-3.png";
import user4 from "../../assets/shaian.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1d21] text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-no-repeat bg-center bg-cover items-center pt-28 pb-16 overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* لایه تیرگی ملایم */}
        <div className="absolute inset-0 bg-[#0b1d21]/50 backdrop-blur-[1px]"></div>

        {/* تنظیم عرض روی 90% */}
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* سمت چپ: تصویر دختر و کارت‌های شناور */}
          <div className="lg:col-span-6 relative flex justify-center animate-fadeIn opacity-0 [animation-fill-mode:forwards]">
            <div className="relative z-10 w-full max-w-md">
              {/* تصویر اصلی */}
              <img
                src={girlPhoto}
                alt="Online Learning Student"
                className="w-full h-auto object-contain drop-shadow-2xl animate-hero-image"
              />

              {/* کارت سفید اول (بالاتر) */}
              <div className="absolute bottom-55 -left-4 sm:left-0 bg-white text-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 animate-hero-card [animation-delay:500ms] border border-gray-100 z-20">
                <div className="bg-gray-100 text-gray-700 p-2.5 rounded-xl">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-gray-900 leading-tight">
                    125+
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    Achievement awards
                  </p>
                </div>
              </div>

              {/* کارت سرمه‌ای دوم (پایین‌تر) */}
              <div className="absolute -bottom-1 right-2 sm:right-6 bg-[#112226]/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-gray-700/60 animate-hero-card [animation-delay:750ms] w-60 z-20">
                <p className="text-[10px] text-gray-400 font-medium mb-1 text-center uppercase tracking-wider">
                  Trusted By
                </p>
                <h5 className="font-bold text-xs text-white text-center mb-2.5">
                  15000+ enrolled students
                </h5>

                {/* تصاویر کاربران */}
                <div className="flex justify-center -space-x-2 mb-2.5">
                  <img
                    src={user1}
                    alt="User 1"
                    className="w-7 h-7 rounded-full border-2 border-[#112226] object-cover"
                  />
                  <img
                    src={user2}
                    alt="User 2"
                    className="w-7 h-7 rounded-full border-2 border-[#112226] object-cover"
                  />
                  <img
                    src={user3}
                    alt="User 3"
                    className="w-7 h-7 rounded-full border-2 border-[#112226] object-cover"
                  />
                  <img
                    src={user4}
                    alt="User 4"
                    className="w-7 h-7 rounded-full border-2 border-[#112226] object-cover"
                  />
                </div>

                {/* امتیاز ستاره‌ای */}
                <div className="flex items-center justify-center gap-1.5 text-xs">
                  <div className="flex text-[#ffb800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="#ffb800" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-200 text-[10px]">
                    4.94 (625)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* سمت راست: متن‌ها و دکمه */}

          {/* سمت راست: متن‌ها و دکمه */}
          <div className="lg:col-span-6 space-y-6 text-left animate-hero-text [animation-delay:300ms]">
            <span className="inline-block animate-hero-text [animation-delay:400ms]">
              Online Learning
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white animate-hero-text [animation-delay:500ms]">
              More than <span className="text-[#ffb800]">25000+</span> education
              courses online
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed animate-hero-text [animation-delay:650ms]">
              Lorem ipsum dolor sit amet consectetur. Gravida enim risus
              sollicitudin mauris tincidunt commodo ornare.
            </p>

            <div className="pt-2 animate-hero-text [animation-delay:800ms]">
              <Button text="Get Started" to="/courses" />
            </div>
          </div>
        </div>
      </section>

      {/* بخش دسته‌بندی‌ها و برندها */}
      <BrandsAndCategories />
      <CourseSection />
      <PersonalizedLearning />
      <Testimonials />
      <TrendingCourses />
      
    </div>
  );
}
