import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/ParthMahajan1020",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parth-mahajan1020/",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Parth_Mahajan1020/",
    },
    {
      label: "Email",
      href: "mailto:parthmaha28@gmail.com",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#071714] text-[#f3f2ee] px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6"
    >
      <div className="overflow-hidden rounded-[20px]">

        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <div className="relative border-b border-[#f3f2ee]/15 px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">

          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    #f3f2ee 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    #f3f2ee 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Heading */}
            <div className="footer-reveal">

              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#f3f2ee]/45">
                Have an idea?
              </p>

              <h2 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]">
                LET'S BUILD
                <br />
                <span className="text-[#f3f2ee]/35">
                  SOMETHING.
                </span>
              </h2>

            </div>

            {/* CTA */}
            <div className="footer-reveal lg:pb-2">

              <a
                href="#contact"
                className="group inline-flex items-center gap-4 border-b border-[#f3f2ee]/35 pb-3 text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#f3f2ee]"
              >
                <span>Let's Talk</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f3f2ee]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#f3f2ee]">
                  ↗
                </span>
              </a>

            </div>

          </div>

          {/* Bottom statement */}
          <div className="footer-reveal mt-16 flex flex-col gap-3 border-t border-[#f3f2ee]/10 pt-5 text-[10px] uppercase tracking-[0.28em] text-[#f3f2ee]/35 sm:flex-row sm:items-center sm:justify-between">

            <span>
              Open to opportunities · collaborations · ideas
            </span>

            <span>
              Pune · India
            </span>

          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">

            {/* Brand */}
            <div className="footer-reveal">

              <div className="mb-7 flex items-center gap-3">

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3f2ee]/20 text-sm">
                  PM
                </span>

                <span className="text-xs uppercase tracking-[0.25em] text-[#f3f2ee]/50">
                  Parth Mahajan
                </span>

              </div>

              <h3 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                Full-Stack Developer
                <br />
                <span className="text-[#f3f2ee]/35">
                  building with purpose.
                </span>
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#f3f2ee]/45">
                Exploring technology, solving problems, and turning ideas
                into useful digital experiences.
              </p>

            </div>

            {/* Navigation */}
            <div className="footer-reveal">

              <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#f3f2ee]/35">
                Navigate
              </p>

              <nav className="grid grid-cols-2 gap-x-8 gap-y-4">

                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-[#f3f2ee]/70 transition-colors duration-300 hover:text-[#f3f2ee]"
                  >
                    <span className="h-px w-0 bg-[#f3f2ee] transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </a>
                ))}

              </nav>

            </div>

            {/* Connect */}
            <div className="footer-reveal">

              <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#f3f2ee]/35">
                Connect
              </p>

              <div className="space-y-4">

                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center justify-between border-b border-[#f3f2ee]/10 pb-3 text-sm text-[#f3f2ee]/70 transition-all duration-300 hover:border-[#f3f2ee]/35 hover:text-[#f3f2ee]"
                  >
                    <span>{social.label}</span>

                    <span className="translate-x-0 text-[#f3f2ee]/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#f3f2ee]">
                      ↗
                    </span>
                  </a>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="footer-reveal border-t border-[#f3f2ee]/15 px-6 py-5 sm:px-10 lg:px-14">

          <div className="flex flex-col gap-5 text-[10px] uppercase tracking-[0.25em] text-[#f3f2ee]/35 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

              <span>
                © {new Date().getFullYear()} Parth Mahajan
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#f3f2ee]/25 sm:block" />

              <span>
                Full-Stack Developer
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#f3f2ee]/25 sm:block" />

              <span>
                Pune, India
              </span>

            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 self-start transition-colors duration-300 hover:text-[#f3f2ee] sm:self-auto"
            >
              <span>Back to top</span>

              <span className="flex h-9 w-9 items-center justify-center border border-[#f3f2ee]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#f3f2ee]/50">
                ↑
              </span>
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;