import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experience from "../data/experience";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(
    experience[0]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".experience-heading", {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".experience-detail", {
        opacity: 0,
        x: 25,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-detail",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[#071714] text-[#f3f2ee] px-4 sm:px-5 lg:px-6 py-5 sm:py-6"
    >
      <div className="bg-[#071714] rounded-[20px] overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32">

          {/* HEADER */}
          <div className="mb-16 lg:mb-20">

            <div className="experience-label flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#f3f2ee]/40" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#f3f2ee]/55">
                Building & Learning
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

              <h2 className="experience-heading text-[clamp(3.5rem,8vw,8rem)] leading-[0.8] tracking-[-0.065em] font-medium">
                EXPERIENCE
              </h2>

              <p className="max-w-sm text-sm leading-relaxed text-[#f3f2ee]/50 lg:pb-2">
                My development journey through projects, problem solving,
                experimentation, and continuous learning.
              </p>

            </div>
          </div>

          {/* EXPERIENCE AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] border-t border-[#f3f2ee]/15">

            {/* LEFT LIST */}
            <div className="experience-list border-b lg:border-b-0 lg:border-r border-[#f3f2ee]/15">

              {experience.map((item) => {
                const isSelected =
                  selectedExperience.id === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() =>
                      setSelectedExperience(item)
                    }
                    onClick={() =>
                      setSelectedExperience(item)
                    }
                    className={`
                      experience-item
                      group
                      relative
                      cursor-pointer
                      border-b
                      border-[#f3f2ee]/15
                      transition-all
                      duration-500
                      ${
                        isSelected
                          ? "bg-[#f3f2ee]/[0.055]"
                          : "hover:bg-[#f3f2ee]/[0.025]"
                      }
                    `}
                  >

                    {/* ACTIVE LINE */}
                    <div
                      className={`
                        absolute
                        left-0
                        top-0
                        bottom-0
                        w-[2px]
                        bg-[#f3f2ee]
                        transition-opacity
                        duration-300
                        ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-40"
                        }
                      `}
                    />

                    <div className="px-6 sm:px-8 py-7 sm:py-8">

                      {/* NUMBER + YEAR */}
                      <div className="flex items-center justify-between">

                        <span className="text-[10px] tracking-[0.22em] text-[#f3f2ee]/35">
                          {item.number}
                        </span>

                        <span className="text-[9px] tracking-[0.2em] uppercase text-[#f3f2ee]/35">
                          {item.period}
                        </span>

                      </div>

                      {/* CATEGORY */}
                      <p className="mt-8 text-[9px] uppercase tracking-[0.2em] text-[#f3f2ee]/35">
                        {item.category}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-3
                          text-2xl
                          sm:text-3xl
                          tracking-[-0.035em]
                          font-medium
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        {item.title}
                      </h3>

                      {/* ROLE */}
                      <p className="mt-2 text-xs text-[#f3f2ee]/45">
                        {item.role}
                      </p>

                    </div>
                  </div>
                );
              })}

              {/* FUTURE */}
              <div className="px-6 sm:px-8 py-8">

                <div className="flex items-center gap-3">

                  <span className="h-px w-5 bg-[#f3f2ee]/15" />

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#f3f2ee]/25">
                    More to come
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT DETAIL */}
            <div className="experience-detail p-5 sm:p-7 lg:p-8">

              <div className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] border border-[#f3f2ee]/15 bg-[#0b211d] overflow-hidden">

                {/* BACKGROUND GRID */}
                <div
                  className="absolute inset-0 opacity-[0.055]"
                  style={{
                    backgroundImage: `
                      linear-gradient(#f3f2ee 1px, transparent 1px),
                      linear-gradient(90deg, #f3f2ee 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                  }}
                />

                {/* LARGE NUMBER */}
                <div
                  className="
                    absolute
                    right-[-20px]
                    top-[-45px]
                    text-[15rem]
                    sm:text-[18rem]
                    lg:text-[22rem]
                    leading-none
                    tracking-[-0.1em]
                    text-[#f3f2ee]/[0.025]
                    font-medium
                    select-none
                  "
                >
                  {selectedExperience.number}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex flex-col justify-between p-7 sm:p-9 lg:p-11">

                  {/* TOP */}
                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.22em] text-[#f3f2ee]/45">
                        {selectedExperience.category}
                      </p>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#f3f2ee]/25">
                        {selectedExperience.period}
                      </p>
                    </div>

                    <span className="text-[10px] tracking-[0.2em] text-[#f3f2ee]/35">
                      {selectedExperience.number}
                    </span>

                  </div>

                  {/* MAIN */}
                  <div>

                    <p className="text-sm uppercase tracking-[0.18em] text-[#f3f2ee]/45 mb-5">
                      {selectedExperience.role}
                    </p>

                    <h3
                      className="
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        xl:text-7xl
                        leading-[0.9]
                        tracking-[-0.055em]
                        font-medium
                        max-w-4xl
                      "
                    >
                      {selectedExperience.title}
                    </h3>

                    <p className="max-w-2xl mt-6 text-sm sm:text-base leading-relaxed text-[#f3f2ee]/55">
                      {selectedExperience.description}
                    </p>

                  </div>

                  {/* BOTTOM */}
                  <div>

                    <div className="h-px w-full bg-[#f3f2ee]/10 mb-6" />

                    <div className="flex flex-wrap gap-x-4 gap-y-2">

                      {selectedExperience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.16em]
                              text-[#f3f2ee]/40
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;