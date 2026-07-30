import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMoon, FiSun, FiTwitter } from "react-icons/fi";

const Navbar = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const currentSection = navItems.find((item) => {
        const element = document.getElementById(item.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom > 140;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const headerClasses = `sticky top-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? "shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl theme-navbar"
      : "backdrop-blur-xl theme-navbar"
  }`;
  const textClasses = "text-3xl font-extrabold tracking-tight theme-text";
  const navLinkClasses = (id) => `nav-link relative font-medium transition-all duration-300 hover:text-brand ${activeSection === id ? "nav-link-active text-brand" : "theme-text-muted"}`;
  const iconButtonClasses = "w-10 h-10 rounded-full flex items-center justify-center transition theme-icon-button";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={headerClasses}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <a href="#home" className={textClasses}>
          <span className="text-brand">Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ y: -2, scale: 1.02 }}
              href={`#${item.id}`}
              className={navLinkClasses(item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            className={iconButtonClasses}
          >
            <FiGithub size={18} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            className={iconButtonClasses}
          >
            <FiLinkedin size={18} />
          </motion.a>

          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            className={iconButtonClasses}
          >
            <FiTwitter size={18} />
          </motion.a>

          <motion.button
            type="button"
            onClick={onToggleTheme}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            className={iconButtonClasses}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
