import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, X, Menu, ChevronDown, ArrowRight } from "lucide-react";

import logoImg from "../../assets/Upskill-logo.png";

const navigation = [
  {
    title: "Home",
    links: [
      { label: "Home One", to: "/home-one" },
      { label: "Home Two", to: "/home-two" },
      { label: "Home Three", to: "/home-three" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "Finance", to: "/courses/finance" },
      { label: "Management", to: "/courses/management" },
      { label: "Design", to: "/courses/design" },
      { label: "Development", to: "/courses/development" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "About One", to: "/about-one" },
      { label: "About Two", to: "/about-two" },
      { label: "Course One", to: "/course-one" },
      { label: "Course Two", to: "/course-two" },
      { label: "Course Three", to: "/course-three" },
      { label: "FAQ", to: "/faq" },
      { label: "Pricing One", to: "/pricing-one" },
      { label: "Pricing Two", to: "/pricing-two" },
      { label: "Pricing Three", to: "/pricing-three" },
      { label: "Career", to: "/career" },
      { label: "Events", to: "/events" },
      { label: "Team", to: "/team" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Blog One", to: "/blog-one" },
      { label: "Blog Two", to: "/blog-two" },
      { label: "Blog Three", to: "/blog-three" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact One", to: "/contact-one" },
      { label: "Contact Two", to: "/contact-two" },
      { label: "Contact Three", to: "/contact-three" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveMenu(null);
  };

  return (
    <>
      {/* Main Navbar */}

      <header
        className={`fixed top-0 left-0 w-full z-50 animate-nav-reveal transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b1d21]/90 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-3 md:py-5"
        }`}
      >
        <div className="w-[96%] md:w-[90%] mx-auto flex items-center justify-between gap-2 text-white">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="shrink-0 flex items-center"
          >
            <img
              src={logoImg}
              alt="SkillOnline Logo"
              className="h-9 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navigation.map((menu) => (
              <div
                key={menu.title}
                className="relative py-2"
                onMouseEnter={() => setActiveMenu(menu.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu(activeMenu === menu.title ? null : menu.title)
                  }
                  className="flex items-center gap-1.5 hover:text-[#ffb800] transition-colors"
                >
                  {menu.title}

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMenu === menu.title && (
                  <>
                    {/* Courses Mega Menu */}
                    {menu.title === "Courses" ? (
                      <div className="fixed left-1/2 top-14.5 z-55 w-[min(800px,94vw)] -translate-x-1/2 overflow-hidden rounded-b-sm border-b-2 border-[#ffb800] bg-white text-gray-800 shadow-2xl">
                        <div className="grid grid-cols-[190px_1fr]">
                          {/* Left Sidebar */}
                          <div className="bg-[#eff6f8] p-3.5 space-y-2">
                            <Link
                              to="/courses"
                              onClick={() => setActiveMenu(null)}
                              className="block rounded-md bg-white p-3.5 transition-colors hover:bg-white"
                            >
                              <h4 className="text-xs font-semibold text-gray-900">
                                Free courses
                              </h4>
                              <p className="mt-2 text-[11px] leading-5 text-gray-500">
                                Free learning resources for skill development.
                              </p>
                            </Link>

                            <Link
                              to="/courses/paid"
                              onClick={() => setActiveMenu(null)}
                              className="block rounded-md p-3.5 transition-colors hover:bg-white"
                            >
                              <h4 className="text-xs font-semibold text-gray-900">
                                Paid courses
                              </h4>
                              <p className="mt-2 text-[11px] leading-5 text-gray-500">
                                Courses are available upon purchase. (Requires
                                login)
                              </p>
                            </Link>
                          </div>

                          {/* Right Content */}
                          <div className="p-6 lg:p-7">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                              {[
                                {
                                  title: "FINANCE",
                                  description:
                                    "Understanding corporate finance and investments",
                                  to: "/courses/finance",
                                },
                                {
                                  title: "DESIGN",
                                  description:
                                    "Advanced photoshop techniques for designers",
                                  to: "/courses/design",
                                },
                                {
                                  title: "MANAGEMENT",
                                  description:
                                    "Crisis management and problem-solving strategies",
                                  to: "/courses/management",
                                },
                                {
                                  title: "DEVELOPMENT",
                                  description:
                                    "Building single page applications with angular",
                                  to: "/courses/development",
                                },
                              ].map((course) => (
                                <Link
                                  key={course.title}
                                  to={course.to}
                                  onClick={() => setActiveMenu(null)}
                                  className="group min-h-18"
                                >
                                  <h4 className="text-[11px] font-semibold tracking-wide text-gray-900 transition-colors group-hover:text-[#e9a400]">
                                    {course.title}
                                  </h4>

                                  <p className="mt-2 max-w-55 text-[11px] leading-[1.7] text-gray-500">
                                    {course.description}
                                  </p>
                                </Link>
                              ))}
                            </div>

                            {/* Bottom Promotional Banner */}
                            <div className="mt-7 flex items-center gap-4 rounded-md bg-[#eff6f8] p-4">
                              <div className="flex h-11 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffb800]/15 text-2xl">
                                💰
                              </div>

                              <div className="min-w-0 flex-1">
                                <h4 className="text-xs font-semibold text-gray-900">
                                  Increase your potential earnings
                                </h4>

                                <p className="mt-1.5 text-[11px] leading-5 text-gray-500">
                                  Lorem ipsum dolor sit amet scelerisque integer
                                  adipiscing velit sem sed.
                                </p>
                              </div>

                              <Link
                                to="/courses"
                                onClick={() => setActiveMenu(null)}
                                aria-label="Explore all courses"
                                className="flex h-8 w-9 shrink-0 items-center justify-center rounded-md bg-[#ffb800] text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
                              >
                                <ArrowRight size={17} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Other Dropdown Menus */
                      <div className="absolute left-0 top-full z-55 w-52 border-t-2 border-[#ffb800] bg-white py-2 text-gray-800 shadow-xl">
                        {menu.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setActiveMenu(null)}
                            className="block px-4 py-3 text-xs font-medium transition-colors hover:bg-gray-50 hover:text-[#ffb800]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Cart & Login */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 shrink-0">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
              className="relative bg-[#ffb800] text-black p-2 rounded-full hover:scale-105 transition-all"
            >
              <ShoppingBag size={16} />

              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <div className="flex items-center gap-2 text-xs font-medium">
              <Link
                to="/login"
                className="hover:text-[#ffb800] transition-colors"
              >
                Login
              </Link>

              <span className="text-gray-500">|</span>

              <Link
                to="/register"
                className="hover:text-[#ffb800] transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile: Cart, Login, Register, Hamburger / Close */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
              className="relative p-1 text-white"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />

              <span className="absolute -top-0.5 -right-1 bg-[#ffb800] text-black text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <Link
              to="/login"
              className="text-xs sm:text-sm font-medium hover:text-[#ffb800]"
            >
              Login
            </Link>

            <span className="text-gray-400">|</span>

            <Link
              to="/register"
              className="text-xs sm:text-sm font-medium hover:text-[#ffb800]"
            >
              Register
            </Link>

            <button
              type="button"
              onClick={() => {
                if (isMobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setIsMobileMenuOpen(true);
                  setMobileActiveMenu(null);
                }
              }}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="ml-1 p-1 text-white"
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={1.3} />
              ) : (
                <Menu size={27} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-60 bg-white text-[#10272c] flex flex-col md:hidden">
          {/* Mobile Menu Header */}
          <div className="h-20.5 shrink-0 bg-[#10272c] px-4 flex items-center justify-between">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={logoImg}
                alt="SkillOnline Logo"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="text-white p-2"
            >
              <X size={30} strokeWidth={1.3} />
            </button>
          </div>

          {/* Mobile Accordion */}
          <nav className="flex-1 overflow-y-auto">
            {navigation.map((menu) => {
              const isOpen = mobileActiveMenu === menu.title;

              return (
                <div key={menu.title} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileActiveMenu(isOpen ? null : menu.title)
                    }
                    aria-expanded={isOpen}
                    className="w-full min-h-16 px-4 flex items-center justify-between text-left text-base font-medium hover:text-[#ffb800] transition-colors"
                  >
                    <span>{menu.title}</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 py-2">
                      {menu.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={closeMobileMenu}
                          className="block px-8 py-3 text-sm hover:text-[#ffb800] transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-70 flex justify-end bg-black/60 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative w-80 max-w-[90vw] md:w-96 bg-[#f8fafc] h-full p-6 text-gray-800 shadow-2xl flex flex-col">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-900">Your Cart</h3>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
                className="p-1 hover:bg-gray-200 rounded-full text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              Your cart is empty.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
