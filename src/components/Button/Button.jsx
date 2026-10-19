
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({
  text = "Get Started",
  to = "#",
  className = "",
  showIcon = true,
  onClick,
  variant = "default",
}) {
  const variants = {
    default:
      "border-gray-600 bg-[#112226]/60 text-white hover:bg-[#ffb800] hover:text-black hover:border-[#ffb800]",

    yellow:
      "border-[#ffb800] bg-[#ffb800] text-black hover:bg-gray-400 hover:border-gray-400 hover:text-white",

    dark:
      "border-[#112226] bg-[#112226] text-white hover:bg-gray-400 hover:border-gray-400 hover:text-white",
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 rounded-xl border px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer ${variants[variant] || variants.default} ${className}`}
    >
      <span>{text}</span>

      {showIcon && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
