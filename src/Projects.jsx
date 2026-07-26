import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { cardReveal, sectionReveal, sectionViewport, staggerContainer } from "./motion";

const projects = [
  {
    title: "Student Record Management",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
    description:
      "Built a Student Management System using Java, Spring Boot, MySQL and RESTful CRUD API",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    features: [
      "Student CRUD Operations",
      "Spring Boot REST APIs",
      "MySQL Database",
      "Responsive UI",
    ],
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    title: "E-Commerce Website",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80",
    description:
      "Modern online shopping website with authentication, cart and product management.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Authentication",
      "Shopping Cart",
      "Admin Dashboard",
      "Payment Integration",
    ],
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    title: "Personal Portfolio",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
    description:
      "Responsive portfolio website developed using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    features: [
      "Responsive Design",
      "Smooth Scrolling",
      "Modern UI",
      "Dark Mode",
    ],
    github: "https://github.com/",
    live: "https://example.com",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Full Stack", "Frontend", "Backend"];
  const visibleProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} className="text-center mb-14">
          <p className="text-brand font-bold tracking-[.18em] uppercase text-sm">Selected work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="text-slate-500 mt-4 text-lg">
            Some of my recent projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition ${activeFilter === filter ? "bg-brand border-brand text-white shadow-lg shadow-indigo-200" : "bg-white border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-brand"}`}>{filter}</button>)}
        </div>

        {/* Cards */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={sectionViewport} className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div layout variants={cardReveal} initial="hidden" animate="visible" exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/70 hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute top-4 left-4 bg-brand text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>

                <p className="text-slate-600 mt-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="font-bold mb-3">
                    Key Features
                  </h4>

                  <ul className="space-y-2 text-slate-600 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-slate-200 rounded-xl py-3 flex justify-center items-center gap-2 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition"
                  >
                    <FiGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-brand text-white rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-brand-dark transition"
                  >
                    <FiExternalLink />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
