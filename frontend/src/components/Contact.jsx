import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".contact-reveal");

      gsap.fromTo(
        elements,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove previous status when user starts editing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. Thanks for reaching out.",
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#f3f2ee] text-[#071714]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#071714 1px, transparent 1px), linear-gradient(90deg, #071714 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Header */}
        <div className="contact-reveal mb-14 flex items-center gap-4 border-b border-[#071714]/15 pb-5 sm:mb-20">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#071714]/50 sm:text-xs">
            CONTACT
          </span>

          <span className="h-px w-10 bg-[#071714]/25" />

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#071714]/45 sm:text-xs">
            Open to opportunities
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left */}
          <div className="contact-reveal flex flex-col justify-between">
            <div>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#071714]/50 sm:text-xs">
                Have something in mind?
              </p>

              <h2 className="max-w-[700px] text-[clamp(4rem,9vw,8.5rem)] font-medium uppercase leading-[0.82] tracking-[-0.07em]">
                LET&apos;S
                <br />
                TALK<span className="text-[#071714]/35">.</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-[#071714]/65 sm:text-lg sm:leading-8">
                Have a project, internship opportunity, collaboration, or simply
                want to connect? Drop me a message and I&apos;ll get back to
                you.
              </p>
            </div>

            {/* Contact information */}
            <div className="mt-14 grid gap-8 border-t border-[#071714]/15 pt-8 sm:grid-cols-2 lg:mt-24">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#071714]/45">
                  Email
                </p>

                <a
                  href="mailto:parthmaha28@gmail.com"
                  className="group inline-flex items-center gap-2 text-sm font-medium sm:text-base"
                >
                  <span className="border-b border-[#071714]/30 pb-1 transition-colors duration-300 group-hover:border-[#071714]">
                    parthma28@gmail.com
                  </span>

                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#071714]/45">
                  Based in
                </p>

                <p className="text-sm font-medium sm:text-base">Pune, India</p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="https://github.com/ParthMahajan1020"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[#071714]/60 transition-colors duration-300 hover:text-[#071714]"
              >
                GitHub
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/parth-mahajan1020/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[#071714]/60 transition-colors duration-300 hover:text-[#071714]"
              >
                LinkedIn
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href="https://leetcode.com/u/Parth_Mahajan1020/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[#071714]/60 transition-colors duration-300 hover:text-[#071714]"
              >
                LeetCode
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-reveal">
            <form onSubmit={handleSubmit} className="border-t border-[#071714]">
              {/* Name + Email */}
              <div className="grid border-b border-[#071714]/20 sm:grid-cols-2">
                <div className="border-b border-[#071714]/20 px-1 py-6 sm:border-b-0 sm:border-r sm:border-[#071714]/20 sm:pr-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#071714]/50"
                  >
                    01 / Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="w-full border-0 bg-transparent p-0 text-base text-[#071714] outline-none placeholder:text-[#071714]/25 focus:ring-0 sm:text-lg"
                  />
                </div>

                <div className="px-1 py-6 sm:pl-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#071714]/50"
                  >
                    02 / Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="w-full border-0 bg-transparent p-0 text-base text-[#071714] outline-none placeholder:text-[#071714]/25 focus:ring-0 sm:text-lg"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="border-b border-[#071714]/20 px-1 py-6">
                <label
                  htmlFor="subject"
                  className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#071714]/50"
                >
                  03 / Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  required
                  className="w-full border-0 bg-transparent p-0 text-base text-[#071714] outline-none placeholder:text-[#071714]/25 focus:ring-0 sm:text-lg"
                />
              </div>

              {/* Message */}
              <div className="border-b border-[#071714]/20 px-1 py-6">
                <label
                  htmlFor="message"
                  className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#071714]/50"
                >
                  04 / Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                  placeholder="Tell me a little about it..."
                  required
                  className="w-full resize-none border-0 bg-transparent p-0 text-base leading-7 text-[#071714] outline-none placeholder:text-[#071714]/25 focus:ring-0 sm:text-lg"
                />
              </div>

              {/* Status message */}
              {status.message && (
                <div
                  aria-live="polite"
                  className={`mt-6 border-l-2 px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-[#071714] bg-[#071714]/5 text-[#071714]"
                      : "border-red-700 bg-red-700/5 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <div className="flex flex-col items-start justify-between gap-5 pt-7 sm:flex-row sm:items-center">
                <p className="max-w-xs font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-[#071714]/40">
                  I&apos;ll get back to you as soon as possible.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-5 overflow-hidden bg-[#071714] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#f3f2ee] transition-all duration-300 hover:bg-[#102a25] disabled:cursor-not-allowed disabled:opacity-60 sm:px-8"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="contact-reveal mt-20 border-t border-[#071714]/15 pt-6 sm:mt-28">
          <div className="flex flex-col justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#071714]/40 sm:flex-row sm:text-[10px]">
            <span>Parth Mahajan</span>
            <span>Full-Stack Developer · Pune, India</span>
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
