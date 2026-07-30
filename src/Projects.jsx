import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { cardReveal, sectionReveal, sectionViewport, staggerContainer } from "./motion";

const projects = [
  {
    title: "AI-Based Interview Preparation Platform",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&auto=format&fit=crop&q=80",
    description:
      "Developed an AI-powered web application that helps students and job seekers prepare for interviews by generating personalized interview questions and providing AI-based feedback on responses.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS EC2"],
    github: "https://github.com/",
    live: "https://studentjobfinder.vercel.app/",
  },
  {
    title: "Student Record Management",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
    description:
      "Built a Student Management System using Java, Spring Boot, MySQL and RESTful CRUD API",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
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
    github: "https://github.com/",
    live: "https://example.com",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Full Stack", "Frontend", "Backend"];
  const visibleProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 theme-section-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} className="text-center mb-14">
          <p className="text-brand font-bold tracking-[.18em] uppercase text-sm">Selected work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight theme-text">Featured Projects</h2>
          <p className="theme-text-muted mt-4 text-lg">
            Some of my recent projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition ${activeFilter === filter ? "lightfall-primary text-white shadow-lg" : "theme-button-secondary hover:text-brand"}`}>{filter}</button>)}
        </div>

        {/* Cards */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={sectionViewport} className="grid auto-rows-fr lg:grid-cols-3 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                variants={cardReveal}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
                key={index}
                className="group theme-panel h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-100/70 hover:-translate-y-2 transition duration-300 flex flex-col"
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
                <div className="p-6 flex flex-1 flex-col">
                  <h3 className="text-2xl font-bold theme-text">{project.title}</h3>

                  <p className="theme-text-muted mt-3">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 theme-chip rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto pt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 theme-button-secondary rounded-xl py-3 flex justify-center items-center gap-2 hover:border-brand hover:text-brand transition"
                    >
                      <FiGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="lightfall-primary flex-1 text-white rounded-xl py-3 flex justify-center items-center gap-2 transition"
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
