import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiMonitor,
  FiTool,
  FiGitBranch,
} from "react-icons/fi";
import { cardReveal, sectionReveal, sectionViewport, staggerContainer } from "./motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      description: "Building secure and scalable backend systems",
      icon: <FiServer size={28} />,
      skills: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "REST APIs",
        "JPA / Hibernate",
      ],
    },
    {
      title: "Frontend Development",
      description: "Creating modern and responsive web interfaces",
      icon: <FiMonitor size={28} />,
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive UI",
      ],
    },
    {
      title: "Database",
      description: "Designing efficient and reliable data layers",
      icon: <FiDatabase size={28} />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "JDBC",
        "Database Design",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and API testing workflows",
      icon: <FiTool size={28} />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Docker",
        "Maven",
      ],
    },
    {
      title: "Programming",
      description: "Core concepts and problem-solving for enterprise apps",
      icon: <FiCode size={28} />,
      skills: [
        "OOP",
        "Collections",
        "Exception Handling",
        "Multithreading",
        "Java 8+",
        "DSA Basics",
      ],
    },
    {
      title: "Version Control",
      description: "Collaborating effectively in team-based development",
      icon: <FiGitBranch size={28} />,
      skills: [
        "Git",
        "GitHub",
        "Branching",
        "Merge",
        "Pull Requests",
        "CI/CD",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} className="text-center mb-16">
        <p className="text-brand font-bold tracking-[.18em] uppercase text-sm">My toolkit</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
          Skills & Technologies
        </h2>

        <p className="text-gray-500 text-lg mt-4">
          Core Java and full stack technologies I use to build scalable web applications.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={sectionViewport} className="grid lg:grid-cols-2 gap-8">

        {skillCategories.map((category, index) => (
          <motion.div variants={cardReveal}
            key={index}
            className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-100/60 hover:-translate-y-1 transition duration-300"
          >
            {/* Title */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white group-hover:rotate-3 transition">
                {category.icon}
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>

                <p className="text-gray-500 mt-1">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-50 rounded-xl px-5 py-4 font-medium text-slate-700 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-indigo-100 cursor-default transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default Skills;
