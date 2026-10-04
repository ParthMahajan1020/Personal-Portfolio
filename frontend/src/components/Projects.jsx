import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".projects-heading", {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }); 

      gsap.from(".project-preview", {
        opacity: 0,
        x: 25,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-preview",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#071714] text-[#f3f2ee] px-5 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* HEADER */}
        <div className="mb-16 lg:mb-20">
          <div className="projects-label flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#f3f2ee]/40" />

            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#f3f2ee]/55">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="projects-heading text-[clamp(3.5rem,8vw,8rem)] leading-[0.8] tracking-[-0.065em] font-medium">
              PROJECTS
            </h2>

            <p className="max-w-sm text-sm leading-relaxed text-[#f3f2ee]/50 lg:pb-2">
              A collection of things I've built, experimented with, and shipped
              while learning through real projects.
            </p>
          </div>
        </div>

        {/* MAIN PROJECT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] border-t border-[#f3f2ee]/15">
          {/* LEFT — PROJECT LIST */}
          <div className="project-list border-b lg:border-b-0 lg:border-r border-[#f3f2ee]/15">
            {projects.map((project) => {
              const isSelected = selectedProject.id === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setSelectedProject(project)}
                  onClick={() => setSelectedProject(project)}
                  className={`
                    project-list-item
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
                  {/* ACTIVE INDICATOR */}
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

                  <div className="px-6 sm:px-8 py-8 sm:py-10">
                    {/* NUMBER + STATUS */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.22em] text-[#f3f2ee]/35">
                        {project.number}
                      </span>

                      <span
                        className={`
                          text-[9px]
                          tracking-[0.2em]
                          uppercase
                          transition-all
                          duration-300
                          ${
                            isSelected
                              ? "text-[#f3f2ee]/55"
                              : "text-[#f3f2ee]/0 group-hover:text-[#f3f2ee]/35"
                          }
                        `}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* NAME */}
                    <div className="mt-12">
                      <a
                        href={project.liveUrl || "#"}
                        target={project.liveUrl ? "_blank" : undefined}
                        rel={
                          project.liveUrl ? "noopener noreferrer" : undefined
                        }
                        onClick={(e) => {
                          if (!project.liveUrl) {
                            e.preventDefault();
                          }
                        }}
                        className="inline-block"
                      >
                        <h3
                          className="
                            text-3xl
                            sm:text-4xl
                            tracking-[-0.04em]
                            font-medium
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          {project.name}
                        </h3>
                      </a>

                      {/* TECHNOLOGIES */}
                      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-5">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              text-[9px]
                              sm:text-[10px]
                              uppercase
                              tracking-[0.14em]
                              text-[#f3f2ee]/35
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* SELECT INDICATOR */}
                    <div className="mt-10 flex items-center gap-2">
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300
                          ${isSelected ? "bg-[#f3f2ee]" : "bg-[#f3f2ee]/15"}
                        `}
                      />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#f3f2ee]/30">
                        {isSelected ? "Viewing project" : "View project"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* FUTURE PROJECTS */}
            <div className="px-6 sm:px-8 py-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#f3f2ee]/15" />

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#f3f2ee]/25">
                  More projects coming soon
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — FULL BLEED PREVIEW */}
          <div className="project-preview p-5 sm:p-7 lg:p-8">
            <div className="relative h-[520px] sm:h-[580px] lg:h-[620px] overflow-hidden bg-[#0b211d]">
              {/* IMAGE */}
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      object-center
      transition-transform
      duration-700
    "
                />
              )}

              {/* SUBTLE OVERALL DARKEN */}
              <div className="absolute inset-0 bg-black/10" />

              {/* TOP FADE */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

              {/* BOTTOM BLACK FADE */}
<div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#050807] via-[#050807]/90 via-45% to-transparent" />{/* TOP INFO */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 sm:p-8">
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#f3f2ee]/65">
                  Project Preview
                </span>

                <span className="text-[9px] uppercase tracking-[0.22em] text-[#f3f2ee]/65">
                  {selectedProject.number}
                </span>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 lg:p-10">
                {/* TECHNOLOGY LINE */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-[#f3f2ee]/50
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* PROJECT NAME */}
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
                  {selectedProject.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="max-w-xl mt-5 text-sm sm:text-base leading-relaxed text-[#f3f2ee]/60">
                  {selectedProject.description}
                </p>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3 mt-7">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-3
                        border
                        border-[#f3f2ee]
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        transition-all
                        duration-300
                        hover:bg-[#f3f2ee]
                        hover:text-[#071714]
                      "
                    >
                      Live Project
                      <span>↗</span>
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-3
                        border
                        border-[#f3f2ee]/25
                        text-[#f3f2ee]/70
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        transition-all
                        duration-300
                        hover:border-[#f3f2ee]
                        hover:text-[#f3f2ee]
                      "
                    >
                      Source Code
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
