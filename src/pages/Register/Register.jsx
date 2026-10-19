import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/Upskill-logo.png';
import heroPhoto from '../../assets/hero-photo.jpg';

export default function Register() {
  return (
    <div 
      className="h-screen w-screen overflow-hidden flex flex-col justify-between p-6 md:p-10 text-white bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: `url(${heroPhoto})` }}
    >
      {/* لایه تیرگی ملایم و شفاف برای حفظ وضوح عکس */}
      <div className="absolute inset-0 bg-[#0b1d21]/60 pointer-events-none"></div>

      {/* Header - Only Logo */}
      <div className="relative z-10 flex justify-start items-center animate-fadeIn opacity-0 [animation-fill-mode:forwards]">
        <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
          <img src={logoImg} alt="SkillOnline Logo" className="h-15 w-auto object-contain" />
        </Link>
      </div>

      {/* Main Register Box Container */}
      <div className="relative z-10 w-full max-w-md mx-auto my-auto animate-slideUp opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
        
        {/* Titles */}
        <div className="text-center mb-5 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white">Sign up</h1>
          <p className="text-gray-200 text-xs md:text-sm drop-shadow">More then 50k students join with us!</p>
        </div>

        {/* Card Form */}
        <div className="bg-[#17272b]/90 backdrop-blur-md p-7 rounded-xl shadow-2xl border border-gray-700/60 animate-scaleUp opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">Email address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full bg-[#23353b] text-white text-xs px-4 py-2.5 rounded-lg border border-transparent focus:border-[#ffb800] focus:bg-[#2a3e45] focus:outline-none transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                required
                className="w-full bg-[#23353b] text-white text-xs px-4 py-2.5 rounded-lg border border-transparent focus:border-[#ffb800] focus:bg-[#2a3e45] focus:outline-none transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">Password</label>
              <input 
                type="password" 
                placeholder="Create a password" 
                required
                className="w-full bg-[#23353b] text-white text-xs px-4 py-2.5 rounded-lg border border-transparent focus:border-[#ffb800] focus:bg-[#2a3e45] focus:outline-none transition-all duration-300 placeholder-gray-400"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-1.5 pt-1">
              <label className="flex items-start gap-2 text-[11px] text-gray-200 cursor-pointer">
                <input type="checkbox" required className="mt-0.5 rounded accent-[#ffb800]" />
                <span>By creating an account, I agree to this website's <a href="#" className="underline font-semibold hover:text-[#ffb800] transition-colors">privacy policy</a> and <a href="#" className="underline font-semibold hover:text-[#ffb800] transition-colors">terms of service</a></span>
              </label>

              <label className="flex items-center gap-2 text-[11px] text-gray-200 cursor-pointer">
                <input type="checkbox" className="rounded accent-[#ffb800]" />
                <span>I consent to receive marketing emails.</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#ffb800] hover:bg-[#e0a200] text-black font-bold text-xs py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 active:scale-98 mt-2 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center justify-between mt-5 text-xs text-gray-300">
            <span>Already have an account?</span>
            <Link to="/login" className="text-white hover:text-[#ffb800] font-bold transition-all duration-300 hover:translate-x-0.5">
              Log In
            </Link>
          </div>
        </div>

      </div>

      {/* Footer Links */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center pt-3 border-t border-gray-600/50 text-[11px] text-gray-200 gap-3 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:1000ms]">
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <Link to="/404" className="hover:text-[#ffb800] transition-colors duration-200">404 ERROR</Link>
          <Link to="/license" className="hover:text-[#ffb800] transition-colors duration-200">LICENSE</Link>
        </div>
        <div className="flex items-center gap-5 flex-wrap justify-center text-gray-200">
          <span className="hover:text-white transition-colors">DESIGN BY RADIANT TEMPLATES</span>
          <span className="hover:text-white transition-colors">POWERED BY WEBFLOW</span>
        </div>
      </div>

    </div>
  );
}