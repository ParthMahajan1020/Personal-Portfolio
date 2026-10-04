import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import communityImage from "../assets/logoCC.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const featuredRef = useRef(null);
  const bottomRef = useRef(null);

  const CLOSED_HEIGHT = 72;
  const DESKTOP_HEIGHT = 620;

  const mainLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ParthMahajan1020",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/parth-mahajan1020/",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/Parth_Mahajan1020/",
    },
  ];

  const addLinkRef = (element) => {
    if (element && !linksRef.current.includes(element)) {
      linksRef.current.push(element);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  /*
   * ESC key
   */
  useLayoutEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * GSAP MENU ANIMATION
   */
  useLayoutEffect(() => {
    const nav = navRef.current;
    const menu = menuRef.current;
    const featured = featuredRef.current;
    const bottom = bottomRef.current;

    if (!nav || !menu) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        const targetHeight =
          window.innerWidth < 768
            ? window.innerHeight - 32
            : DESKTOP_HEIGHT;

        /*
         * Expand navbar
         */
        gsap.to(nav, {
          height: targetHeight,
          duration: 0.65,
          ease: "power3.inOut",
        });

        /*
         * Reveal menu
         */
        gsap.to(menu, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.2,
          ease: "power3.out",
          pointerEvents: "auto",
        });

        /*
         * Main navigation links
         */
        gsap.fromTo(
          linksRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.25,
            stagger: 0.06,
            ease: "power3.out",
          }
        );

        /*
         * Featured project
         */
        gsap.fromTo(
          featured,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            delay: 0.35,
            ease: "power3.out",
          }
        );

        /*
         * Bottom bar
         */
        gsap.fromTo(
          bottom,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.45,
            ease: "power3.out",
          }
        );
      } else {
        /*
         * Hide menu
         */
        gsap.to(menu, {
          opacity: 0,
          y: -15,
          duration: 0.25,
          ease: "power2.in",
          pointerEvents: "none",
        });

        /*
         * Close navbar
         */
        gsap.to(nav, {
          height: CLOSED_HEIGHT,
          duration: 0.55,
          ease: "power3.inOut",
        });
      }
    }, nav);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="
        fixed
        left-4
        right-4
        top-4
        z-50
        h-[72px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#071714]/95
        text-white
        shadow-2xl
        backdrop-blur-xl
        md:left-6
        md:right-6
      "
    >
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div
        className="
          flex
          h-[72px]
          items-center
          justify-between
          px-5
          md:px-7
        "
      >
        {/* LOGO */}

        <a
          href="#home"
          onClick={closeMenu}
          className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            tracking-tight
            md:text-base
          "
        >
          <span className="text-white/40">
            PM.
          </span>

          <span>
            PARTH.M
          </span>
        </a>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-5
            md:gap-8
          "
        >
          {/* AVAILABLE FOR WORK */}

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            {/* Status dot */}

            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-white/30
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-white
                "
              />
            </span>

            {/* Shining text */}

            <span
              className="
                available-shine
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
              "
            >
              Open for opportunities
            </span>
          </div>

          {/* MENU BUTTON */}

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="
              group
              flex
              items-center
              gap-2
              text-[11px]
              font-medium
              uppercase
              tracking-[0.15em]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            <span>
              Menu
            </span>

            <span
              className="
                text-base
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {isOpen ? "×" : "↗"}
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          EXPANDED MENU
      ===================================================== */}

      <div
        ref={menuRef}
        className="
          flex
          h-[calc(100%-72px)]
          translate-y-[-15px]
          flex-col
          border-t
          border-white/[0.08]
          opacity-0
          pointer-events-none
        "
      >
        {/* ===================================================
            THREE COLUMN AREA
        =================================================== */}

        <div
          className="
            grid
            min-h-0
            flex-1
            grid-cols-1
            overflow-y-auto
            md:grid-cols-3
          "
        >
          {/* =================================================
              MAIN
          ================================================= */}

          <section
            className="
              border-b
              border-white/[0.08]
              p-6
              md:border-b-0
              md:border-r
              md:p-8
            "
          >
            <p
              className="
                mb-7
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              Main
            </p>

            <div className="flex flex-col gap-3">
              {mainLinks.map((link) => (
                <a
                  key={link.name}
                  ref={addLinkRef}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-3xl
                    font-medium
                    leading-none
                    tracking-[-0.05em]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white/55
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  <span
                    className="
                      -translate-x-2
                      text-sm
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>

                  <span>
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* =================================================
              CONNECT
          ================================================= */}

          <section
            className="
              border-b
              border-white/[0.08]
              p-6
              md:border-b-0
              md:border-r
              md:p-8
            "
          >
            <p
              className="
                mb-7
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              Connect
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-lg
                    text-white/60
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <span>
                    {link.name}
                  </span>

                  <span
                    className="
                      text-xs
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}

              {/* EMAIL */}

              <a
                href="mailto:parthmaha28@gmail.com"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-lg
                  text-white/60
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-white
                "
              >
                <span>
                  Email
                </span>

                <span
                  className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </a>

              {/* RESUME */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-lg
                  text-white/60
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-white
                "
              >
                <span>
                  Resume
                </span>

                <span className="text-xs">
                  ↗
                </span>
              </a>
            </div>
          </section>

          {/* =================================================
              FEATURED WORK
          ================================================= */}

          <section
            ref={featuredRef}
            className="
              p-6
              md:p-8
            "
          >
            <p
              className="
                mb-7
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              Featured Work
            </p>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                group
                block
              "
            >
              {/* IMAGE */}

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-black/10
                  bg-white
                "
              >
                <img
                  src={communityImage}
                  alt="CommunityConnect project"
                  className="
                    h-40
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                    md:h-44
                  "
                />
              </div>

              {/* PROJECT INFO */}

              <div className="mt-4">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-medium
                      tracking-tight
                    "
                  >
                    CommunityConnect
                  </h3>

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>

                <p
                  className="
                    mt-1
                    text-sm
                    text-white/40
                  "
                >
                  MERN Full Stack Application
                </p>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-x-3
                    gap-y-1
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-white/25
                  "
                >
                  <span>React</span>
                  <span>Node</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </a>
          </section>
        </div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          ref={bottomRef}
          className="
            flex
            shrink-0
            flex-col
            gap-5
            border-t
            border-white/[0.08]
            p-5
            md:flex-row
            md:items-center
            md:justify-between
            md:px-8
            md:py-4
          "
        >
          {/* INFO */}

          <div>
            <p
              className="
                text-xs
                text-white/50
              "
            >
              Full Stack Developer
              <span className="mx-2 text-white/20">
                ·
              </span>
              Pune, India
            </p>

            <p
              className="
                mt-1
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Building · Learning · Improving
            </p>
          </div>

          {/* CTA */}

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              px-5
              py-2.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white
              hover:text-black
            "
          >
            <span>
              Let's Talk
            </span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;