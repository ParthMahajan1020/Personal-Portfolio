import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../assets/hero.png";

const Home = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      // Hero entrance animation
      tl.from(imageRef.current, {
        scale: 1.03,
        opacity: 0,
        duration: 1.4,
      })
        .from(
          leftRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8",
        )
        .from(
          rightRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.65",
        )
        .from(
          nameRef.current,
          {
            y: 120,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.7",
        );

      // Very subtle image movement
      gsap.to(imageRef.current, {
        scale: 1.01,
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[115vh] overflow-hidden bg-[#f3f2ee] text-[#071714]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #071714 1px, transparent 1px),
            linear-gradient(to bottom, #071714 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-[1800px] flex-col px-4 pb-4 pt-24 sm:px-6 md:px-8">
        {/* HERO CARD */}
        <div className="relative min-h-[calc(100vh-190px)] flex-1 overflow-hidden rounded-[24px] bg-[#071714] md:min-h-[600px] md:rounded-[30px]">
          {/* Hero Image */}
          <img
            ref={imageRef}
            src={heroImage}
            alt="Parth Mahajan"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

          {/* Subtle Grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 20% 20%,
                  white 0.5px,
                  transparent 0.5px
                )
              `,
              backgroundSize: "5px 5px",
            }}
          />

          {/* LEFT CONTENT */}
          <div
            ref={leftRef}
            className="absolute left-6 top-[44%] max-w-[430px] -translate-y-1/2 text-white sm:left-10 md:left-14 lg:left-16"
          >
            {/* Availability */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/75">
                Open for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[500px] text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Code
              <br />
              meets creativity
              <br />
              and purpose.
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={rightRef}
            className="absolute bottom-36 right-6 max-w-[310px] text-white sm:right-10 md:bottom-40 md:right-14 lg:right-16"
          >
            <p className="mb-6 text-sm leading-6 text-white/65 md:text-[15px]">
              Hi, I’m Parth Mahajan — a Computer Engineer and Full-Stack
              Developer building fast, scalable, and user-focused applications
              with modern technologies.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              onClick={(e) => {
                const projectsSection = document.getElementById("projects");

                if (!projectsSection) {
                  e.preventDefault();

                  window.scrollBy({
                    top: window.innerHeight * 0.85,
                    behavior: "smooth",
                  });
                }
              }}
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-2 py-2 pr-5 text-sm text-[#071714] transition-all duration-300 hover:bg-[#071714] hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071714] text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#071714]">
                →
              </span>

              <span>See my work</span>
            </a>
          </div>

          {/* Large Name */}
          <div
            ref={nameRef}
            className="pointer-events-none absolute bottom-[-1vw] left-1/2 z-20 w-full -translate-x-1/2 overflow-hidden px-1 text-center"
          >
            <h1 className="whitespace-nowrap text-[19vw] font-medium leading-[0.7] tracking-[-0.09em] text-[#f3f2ee] mix-blend-difference sm:text-[17vw] md:text-[15vw]">
              PARTH
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform: translateY(220%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
