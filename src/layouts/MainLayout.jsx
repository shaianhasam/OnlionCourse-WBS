
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState(0);

  useEffect(() => {
    setPageKey((previous) => previous + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0b1d21]">
      {/* Navbar animation */}
      <div
        key={`navbar-${pageKey}`}
        className="page-navbar-enter"
      >
        <Navbar />
      </div>

      {/* New page animation */}
      <main
        key={`page-${location.pathname}`}
        className="page-content-enter"
      >
        <Outlet />
      </main>

      {/* Footer animation */}
      <div
        key={`footer-${pageKey}`}
        className="page-footer-enter"
      >
        <Footer />
      </div>
    </div>
  );
}
