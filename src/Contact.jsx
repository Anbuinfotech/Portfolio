import React, { useState } from "react";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-brand font-bold tracking-[.18em] uppercase text-sm">Let’s collaborate</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight flex justify-center items-center gap-3">
          <FiMail />
          Contact Me
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Let's connect! Feel free to send me a message.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-xl shadow-indigo-100/50 p-8">

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-indigo-50 text-brand flex items-center justify-center">
            <FiMail size={28} />
          </div>

          <h3 className="text-3xl font-bold">
            Get In Touch
          </h3>
        </div>

        <form className="space-y-6" onSubmit={submit}>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FiUser />
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FiMail />
              Email
            </label>

            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FiMessageSquare />
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Your message..."
              className="w-full border border-slate-200 rounded-xl px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-brand text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-indigo-200 hover:bg-brand-dark hover:-translate-y-0.5 transition"
          >
            <FiSend />
            {sent ? "Message Ready to Send" : "Send Message"}
          </button>

          {sent && <p className="text-center text-sm font-medium text-emerald-600">Thanks! Your message has been captured.</p>}

        </form>
      </div>
    </section>
  );
};

export default Contact;
