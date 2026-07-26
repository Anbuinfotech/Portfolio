import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import Profile from "./assets/profile.jpeg";
import { sectionReveal, staggerContainer } from "./motion";
const Hero = () => {
  return (
    <section
      id="home"
      className="section-grid relative min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="hero-glow absolute -right-40 top-0 h-[720px] w-[720px] rounded-full"></div>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full relative">
        {/* Left Side */}
        <motion.div variants={staggerContainer} className="relative z-10">
          {/* Badge */}
          <motion.div variants={sectionReveal} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 text-slate-700 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full pulse-ring"></span>
            Open to new opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={sectionReveal} className="mt-7 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
            Hi, I'm <span className="text-brand">Anbarasu</span>
          </motion.h1>

          {/* Role */}
          <motion.h2 variants={sectionReveal} className="mt-4 text-2xl md:text-3xl font-semibold text-slate-600">
            Java Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p variants={sectionReveal} className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Passionate Full Stack Developer skilled in
            <span className="font-bold text-black">
              {" "}
              React, Java, Spring Boot, PostgreSQL
            </span>
            . I build responsive web applications with modern UI, REST APIs,
            authentication and scalable backend systems.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={sectionReveal} className="flex flex-wrap gap-4 mt-9">
            <a href="/Anbarasu.pdf" download className="bg-brand text-white px-7 py-3.5 rounded-xl flex items-center gap-3 shadow-lg shadow-indigo-200 hover:bg-brand-dark hover:-translate-y-0.5 transition">
              <FiDownload />
              Download CV
            </a>

            <a href="#contact" className="border border-slate-200 bg-white px-7 py-3.5 rounded-xl flex items-center gap-3 hover:border-indigo-200 hover:text-brand hover:-translate-y-0.5 transition">
              <FiMail />
              Get In Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={sectionReveal} className="flex gap-4 mt-10">
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition"
            >
              <FiGithub size={22} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-brand hover:text-white hover:-translate-y-1 transition"
            >
              <FiMail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={sectionReveal} className="flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
            {/* Experience Badge */}
            <div className="float-slow absolute top-5 -right-4 z-10 bg-slate-900 text-white px-4 py-2 rounded-full shadow-xl font-semibold text-sm">
              10+ Projects
            </div>

            {/* Circle */}
            <div className="absolute inset-0 rounded-full border border-indigo-200 bg-white/60 shadow-2xl shadow-indigo-200/50 flex items-center justify-center before:absolute before:inset-3 before:rounded-full before:border before:border-dashed before:border-indigo-300">
              <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden flex items-center justify-center ring-8 ring-white shadow-xl">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="float-reverse absolute bottom-8 -left-6 z-10 bg-white border border-indigo-100 text-slate-800 px-4 py-2 rounded-full shadow-xl font-semibold text-sm">
              Fresher
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
    
  );
};

export default Hero;
