import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiMail,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Profile from "./assets/profile.jpeg";
import { sectionReveal, staggerContainer } from "./motion";

const Hero = () => {
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });
  const [backgroundPointer, setBackgroundPointer] = React.useState({ x: 0, y: 0 });
  const [parallaxOffset, setParallaxOffset] = React.useState(0);
  const socialLinks = [
    { href: "https://github.com/", icon: FiGithub, label: "GitHub" },
    { href: "https://linkedin.com/", icon: FiLinkedin, label: "LinkedIn" },
    { href: "https://twitter.com/", icon: FiTwitter, label: "Twitter" },
  ];
  const skillPills = ["Java", "Spring Boot", "React", "JavaScript", "PostgreSQL"];
  const highlightStats = [
    "5+ Projects",
    "REST APIs",
    "Responsive UI",
    "Clean Code",
  ];
  const backgroundParticles = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    left: `${(index * 11 + 7) % 100}%`,
    top: `${(index * 17 + 5) % 100}%`,
    size: `${2.5 + (index % 4) * 0.8}px`,
    duration: `${14 + (index % 5) * 2}s`,
    delay: `${index * 0.6}s`,
    driftX: `${(index % 2 === 0 ? 1 : -1) * (40 + (index % 4) * 16)}px`,
    driftY: `${-(40 + (index % 5) * 14)}px`,
  }));

  React.useEffect(() => {
    const handleScroll = () => setParallaxOffset(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x, y });
  };

  const handlePointerLeave = () => setPointer({ x: 0, y: 0 });

  const handleBackgroundMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setBackgroundPointer({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleBackgroundLeave = () => setBackgroundPointer({ x: 0, y: 0 });

  return (
    <section
      id="home"
      className="section-grid relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
      onMouseMove={handleBackgroundMove}
      onMouseLeave={handleBackgroundLeave}
    >
      <div className="hero-background absolute inset-0 pointer-events-none">
        <div
          className="hero-grid-layer absolute inset-0"
          style={{ transform: `translate3d(0, ${parallaxOffset * 0.04}px, 0)` }}
        />
        <div
          className="hero-spotlight absolute inset-0"
          style={{
            "--spotlight-x": `${backgroundPointer.x}px`,
            "--spotlight-y": `${backgroundPointer.y}px`,
          }}
        />
        <div
          className="hero-ambient hero-ambient-1 absolute"
          style={{ transform: `translate3d(${parallaxOffset * -0.01}px, ${parallaxOffset * 0.02}px, 0)` }}
        />
        <div
          className="hero-ambient hero-ambient-2 absolute"
          style={{ transform: `translate3d(${parallaxOffset * 0.01}px, ${parallaxOffset * -0.015}px, 0)` }}
        />
        <div
          className="hero-ambient hero-ambient-3 absolute"
          style={{ transform: `translate3d(${parallaxOffset * -0.008}px, ${parallaxOffset * 0.012}px, 0)` }}
        />
        <div className="hero-float-blob hero-float-blob-1 absolute" />
        <div className="hero-float-blob hero-float-blob-2 absolute" />
        {backgroundParticles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              "--drift-x": particle.driftX,
              "--drift-y": particle.driftY,
            }}
          />
        ))}
      </div>
      <div className="hero-glow absolute -right-40 top-0 h-[720px] w-[720px] rounded-full" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-24 lg:py-28 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full relative"
      >
        <motion.div variants={staggerContainer} className="relative z-10">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.05 }}
            className="theme-hero-shell badge-glow inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm"
          >
            <span className="status-dot relative inline-flex h-2.5 w-2.5 rounded-full" />
            Available for Full-Time Opportunities
          </motion.div>

          <motion.h1
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-10 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] theme-text"
          >
            Hi, I'm <span className="hero-gradient-text">Anbarasu</span>
          </motion.h1>

          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 flex min-h-[3.25rem] items-center text-2xl md:text-3xl font-semibold"
          >
            <span className="hero-gradient-text">Java Full Stack & Frontend Developer</span>
          </motion.h2>

          <motion.p
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 text-lg md:text-xl theme-text-muted leading-relaxed max-w-2xl"
          >
            I build modern full-stack web applications using Java, Spring Boot, React, JavaScript, and PostgreSQL. Passionate about writing clean code, designing responsive interfaces, and developing secure REST APIs that solve real-world problems.
          </motion.p>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.31 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {skillPills.map((skill) => (
              <span key={skill} className="theme-chip rounded-full px-3.5 py-2 text-sm font-medium shadow-sm">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.34 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.a
              href="/Anbarasu.pdf"
              download
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 8px 20px rgba(91, 91, 214, 0.16)" }}
              whileTap={{ scale: 0.96 }}
              className="hero-button-primary lightfall-primary text-white px-7 py-3.5 rounded-xl flex items-center gap-3 shadow-md"
            >
              <FiDownload />
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2, boxShadow: "0 0 0 1px rgba(96, 165, 250, 0.32), 0 10px 24px rgba(139, 92, 246, 0.18)" }}
              whileTap={{ scale: 0.96 }}
              className="group hero-button-secondary theme-button-secondary px-7 py-3.5 rounded-xl flex items-center gap-3 shadow-sm"
            >
              <FiMail className="transition-transform duration-300 group-hover:translate-x-0.5" />
              <span>Get In Touch</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {highlightStats.map((item) => (
              <span key={item} className="theme-hero-stat inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium theme-text-muted shadow-sm">
                <FiCheckCircle className="text-brand" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-4 mt-10"
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.04,
                  rotate: 5,
                  color: "#8b5cf6",
                  boxShadow: "0 0 18px rgba(139, 92, 246, 0.38), 0 0 10px rgba(96, 165, 250, 0.24)",
                }}
                whileTap={{ scale: 0.94 }}
                className="w-11 h-11 rounded-full theme-icon-button flex items-center justify-center"
                aria-label={label}
              >
                <Icon size={21} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.18 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="hero-portrait-group relative -translate-y-3 w-[345px] h-[345px] sm:w-[414px] sm:h-[414px] lg:w-[460px] lg:h-[460px]"
            onMouseMove={handlePointerMove}
            onMouseLeave={handlePointerLeave}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="hero-badge hero-badge-top absolute top-4 right-2 sm:top-8 sm:right-0 z-20 px-4 py-2 rounded-full font-semibold text-sm"
            >
              5+ Projects
            </motion.div>

            <div className="hero-blob absolute inset-[-10%] rounded-full" />
            <div className="hero-photo-glow absolute inset-[-8%] rounded-full" />
            <div className="hero-orbit absolute inset-0 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="hero-photo-shell relative w-[82%] h-[82%] rounded-full overflow-hidden"
                style={{ x: pointer.x * 8, y: pointer.y * 8 }}
              >
                <div className="absolute inset-0 hero-photo-backdrop" />
                <img
                  src={Profile}
                  alt="Profile"
                  className="hero-photo-image relative w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="hero-badge hero-badge-bottom absolute bottom-5 left-2 sm:bottom-8 sm:left-0 z-20 px-4 py-2 rounded-full font-semibold text-sm"
            >
              Open to Work
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm font-medium theme-text-muted md:flex"
      >
        <span>Scroll Down</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
          <FiChevronDown size={18} />
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
