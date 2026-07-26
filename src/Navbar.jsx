import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiSun } from "react-icons/fi";

const Navbar = () => {
  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, ease: "easeOut" }} className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-gray-900"
        >
          <span className="text-brand">Portfolio</span>
          
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {["Home", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-slate-600 font-medium transition duration-300 hover:text-brand after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-sky-500 hover:text-white transition"
          >
            <FiTwitter size={18} />
          </a>

          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
            <FiSun size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
