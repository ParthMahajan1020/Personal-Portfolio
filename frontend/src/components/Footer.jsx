import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#071714] text-[#f3f2ee]"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="border-b border-[#f3f2ee]/15 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            {/* Brand */}
            <div className="footer-reveal">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f3f2ee]/40">
                Developer · Creator · Learner
              </p>

              <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-medium uppercase leading-[0.8] tracking-[-0.07em]">
                PARTH<span className="text-[#f3f2ee]/30">.</span>
              </h2>
            </div>

            {/* Navigation */}
            <div className="footer-reveal">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f3f2ee]/40">
                Navigate
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:gap-x-14">
                <a
                  href="#home"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  Home
                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>

                <a
                  href="#about"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  About
                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>

                <a
                  href="#projects"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  Projects
                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>

                <a
                  href="#skills"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  Skills
                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  Contact
                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  Resume
                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="footer-reveal">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f3f2ee]/40">
                Connect
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/ParthMahajan1020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  GitHub
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/parth-mahajan1020/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  LinkedIn
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                <a
                  href="https://leetcode.com/u/Parth_Mahajan1020/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  LeetCode
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>

                <a
                  href="mailto:parthmaha28@gmail.com"
                  className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                >
                  Email
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="footer-reveal flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#f3f2ee]/35 sm:text-[10px]">
              © {new Date().getFullYear()} Parth Mahajan
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#f3f2ee]/25 sm:block" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#f3f2ee]/35 sm:text-[10px]">
              Full-Stack Developer · Pune, India
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-reveal group flex w-fit items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#f3f2ee]/50 transition-colors duration-300 hover:text-[#f3f2ee] sm:text-[10px]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center border border-[#f3f2ee]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#f3f2ee]/50">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;