import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import { sectionReveal, sectionViewport } from "./motion";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} className="text-center mb-12">
        <p className="text-brand font-bold tracking-[.18em] uppercase text-sm">Let’s collaborate</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight flex justify-center items-center gap-3 theme-text">
          <FiMail />
          Contact Me
        </h2>

        <p className="theme-text-muted mt-4 text-lg">
          Let's connect! Feel free to send me a message.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={sectionReveal} className="max-w-2xl mx-auto theme-panel rounded-3xl shadow-xl shadow-indigo-100/50 p-8">

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-[color:var(--pill-hover-bg)] text-brand flex items-center justify-center">
            <FiMail size={28} />
          </div>

          <h3 className="text-3xl font-bold theme-text">
            Get In Touch
          </h3>
        </div>

        <form className="space-y-6" onSubmit={submit}>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium theme-text">
              <FiUser />
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full theme-input rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition placeholder:text-[color:var(--text-muted)]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium theme-text">
              <FiMail />
              Email
            </label>

            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full theme-input rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition placeholder:text-[color:var(--text-muted)]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium theme-text">
              <FiMessageSquare />
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Your message..."
              className="w-full theme-input rounded-xl px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition placeholder:text-[color:var(--text-muted)]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="lightfall-primary w-full text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:-translate-y-0.5 transition"
          >
            <FiSend />
            {sent ? "Message Ready to Send" : "Send Message"}
          </button>

          {sent && <p className="text-center text-sm font-medium text-emerald-600">Thanks! Your message has been captured.</p>}

        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
