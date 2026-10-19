
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomeTwo from "./pages/HomeTwo/HomeTwo";

function PlaceholderPage({ title }) {
  return (
    <section className="min-h-screen bg-[#0b1d21] px-6 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm text-[#ffb800]">
          SkillOnline
        </p>

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-4 text-gray-400">
          This page is under development.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1d21] font-sans">
      <Routes>
        {/* صفحات اصلی با Navbar و Footer مشترک */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home-one" element={<Home />} />

          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<PlaceholderPage title="Home Three" />} />

          <Route path="/courses" element={<PlaceholderPage title="All Courses" />} />
          <Route path="/courses/paid" element={<PlaceholderPage title="Paid Courses" />} />
          <Route path="/courses/:category" element={<PlaceholderPage title="Course Category" />} />

          <Route path="/about-one" element={<PlaceholderPage title="About One" />} />
          <Route path="/about-two" element={<PlaceholderPage title="About Two" />} />

          <Route path="/course-one" element={<PlaceholderPage title="Course One" />} />
          <Route path="/course-two" element={<PlaceholderPage title="Course Two" />} />
          <Route path="/course-three" element={<PlaceholderPage title="Course Three" />} />

          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />

          <Route path="/pricing-one" element={<PlaceholderPage title="Pricing One" />} />
          <Route path="/pricing-two" element={<PlaceholderPage title="Pricing Two" />} />
          <Route path="/pricing-three" element={<PlaceholderPage title="Pricing Three" />} />

          <Route path="/career" element={<PlaceholderPage title="Career" />} />
          <Route path="/events" element={<PlaceholderPage title="Events" />} />
          <Route path="/team" element={<PlaceholderPage title="Team" />} />

          <Route path="/blog-one" element={<PlaceholderPage title="Blog One" />} />
          <Route path="/blog-two" element={<PlaceholderPage title="Blog Two" />} />
          <Route path="/blog-three" element={<PlaceholderPage title="Blog Three" />} />

          <Route path="/contact-one" element={<PlaceholderPage title="Contact One" />} />
          <Route path="/contact-two" element={<PlaceholderPage title="Contact Two" />} />
          <Route path="/contact-three" element={<PlaceholderPage title="Contact Three" />} />

          <Route path="/apply" element={<PlaceholderPage title="Apply Now" />} />
        </Route>

        {/* صفحات ورود و ثبت‌نام بدون Navbar و Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* مسیر ناموجود */}
        <Route
          path="*"
          element={<PlaceholderPage title="Page Not Found" />}
        />
      </Routes>
    </div>
  );
}
