import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { sectionReveal, sectionViewport } from "./motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      {/* Heading */}
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} className="text-center mb-14">
        <p className="text-brand font-bold tracking-[.18em] uppercase text-sm">Career path</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight theme-text">Experience</h2>
        <p className="theme-text-muted mt-4 text-lg">
          My professional journey and internship experience.
        </p>
      </motion.div>

      {/* Experience Card */}
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} whileHover={{ y: -5 }} className="relative overflow-hidden theme-panel rounded-3xl shadow-sm p-7 md:p-10 hover:shadow-xl hover:shadow-indigo-100/60 transition">
        <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[color:var(--pill-hover-bg)]"></div>

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Left */}
          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[color:var(--pill-hover-bg)] flex items-center justify-center">
              <FiBriefcase size={30} className="text-brand" />
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-3xl font-bold theme-text">
                  Java Full Stack Developer Intern
                </h3>

                <span className="px-3 py-1 text-sm theme-chip rounded-full font-medium">
                  Internship
                </span>
              </div>

              <p className="text-2xl theme-text-muted mt-2">
                JSpiders, Bangalore
              </p>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5 theme-text">
            Key Responsibilities
          </h4>

          <ul className="space-y-4 theme-text-muted text-lg list-disc pl-6">
            <li>
              Pursuing industry-oriented training in Java Full Stack
              Development with hands-on exposure to Core Java,
              Advanced Java, SQL, JDBC, Hibernate, Spring Boot,
              and Web Technologies.
            </li>

            <li>
              Developing Java applications using Object-Oriented
              Programming principles and clean coding practices.
            </li>

            <li>
              Implemented features using Collections Framework,
              Exception Handling, Multithreading, and Java 8.
            </li>

            <li>
              Worked with JDBC and MySQL to perform CRUD
              operations and database connectivity.
            </li>

            <li>
              Built backend REST APIs using Spring Boot.
            </li>

            <li>
              Applied OOP concepts including Inheritance,
              Polymorphism, Abstraction, and Encapsulation in
              real-world applications.
            </li>

            <li>
              Collaborated on mini-projects while improving code
              quality, debugging, and problem-solving skills.
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold mb-5 theme-text">
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "Core Java",
              "Advanced Java",
              "SQL",
              "MySQL",
              "JDBC",
              "Hibernate",
              "Spring Boot",
              "REST API",
              "HTML",
              "CSS",
              "JavaScript",
              "Git",
              "GitHub",
              "OOP",
              "Collections",
              "Exception Handling",
              "Multithreading",
              "Java 8",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full theme-chip hover:bg-brand hover:border-brand hover:text-white transition cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
