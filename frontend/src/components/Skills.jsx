import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'problems', label: 'DSA' },
  { id: 'tools', label: 'Tools' },
  { id: 'exploring', label: 'Exploring' },
];

const skillCategories = [
  {
    id: 'languages',
    number: '01',
    title: 'LANGUAGES',
    skills: [
      {
        name: 'JAVA',
        description:
          'Primary language for DSA practice and core programming fundamentals, including OOP and structured problem solving.',
      },
      {
        name: 'JAVASCRIPT',
        description:
          'Used across frontend and full-stack development for interfaces, application logic, and APIs.',
      },
      {
        name: 'PYTHON',
        description:
          'Part of my programming foundation and continued learning in practical scripting and problem solving.',
      },
      {
        name: 'C / C++',
        description:
          'Core fundamentals from the early stages of my programming journey and problem-solving foundation.',
      },
    ],
  },
  {
    id: 'frontend',
    number: '02',
    title: 'FRONTEND',
    skills: [
      {
        name: 'REACT',
        description:
          'Used to build component-based interfaces and responsive user experiences for web applications.',
      },
      {
        name: 'HTML',
        description:
          'Core structure for building clean, semantic, and accessible interfaces.',
      },
      {
        name: 'CSS',
        description:
          'Used for layout, responsiveness, typography, and visual polish across projects.',
      },
      {
        name: 'TAILWIND CSS',
        description:
          'Used for fast styling, consistency, and responsive UI development in modern frontend work.',
      },
      {
        name: 'GSAP',
        description:
          'Used to create subtle motion and scroll-based storytelling that feels premium and intentional.',
      },
      {
        name: 'RESPONSIVE DESIGN',
        description:
          'A core focus in building interfaces that remain clean and usable across devices.',
      },
    ],
  },
  {
    id: 'backend',
    number: '03',
    title: 'BACKEND',
    skills: [
      {
        name: 'NODE.JS',
        description:
          'Backend runtime used for server-side logic, APIs, and application workflows.',
      },
      {
        name: 'EXPRESS.JS',
        description:
          'Used to structure backend routes, middleware, and REST APIs in full-stack projects.',
      },
      {
        name: 'REST APIs',
        description:
          'Used to connect frontend interfaces with backend services and application data.',
      },
      {
        name: 'JWT',
        description:
          'Used for authentication and protected application routes in secure application flows.',
      },
      {
        name: 'AUTHENTICATION',
        description:
          'Applied in practical application flows to manage access, sessions, and secure user actions.',
      },
      {
        name: 'NODEMAILER',
        description:
          'Used for email-based workflows and communication features in applications.',
      },
    ],
  },
  {
    id: 'database',
    number: '04',
    title: 'DATABASE',
    skills: [
      {
        name: 'MONGODB',
        description:
          'Used for document-based storage in full-stack applications and data-driven products.',
      },
      {
        name: 'MONGOOSE',
        description:
          'Used to model application data and work with MongoDB in structured Node.js backends.',
      },
      {
        name: 'MONGODB ATLAS',
        description:
          'Used for cloud-hosted database workflows in modern application setups.',
      },
    ],
  },
  {
    id: 'fullstack',
    number: '05',
    title: 'FULL-STACK',
    flow: ['INTERFACE', 'API', 'SERVER', 'DATABASE', 'AUTHENTICATION'],
    description:
      'Connecting frontend interfaces with backend APIs, authentication, and persistent data to build complete web applications.',
  },
  {
    id: 'problems',
    number: '06',
    title: 'PROBLEM SOLVING',
    stats: '450+',
    meta: ['LEETCODE', 'JAVA', 'DATA STRUCTURES', 'ALGORITHMS'],
    description:
      'I use DSA to strengthen algorithmic thinking, problem decomposition, and technical problem-solving — primarily using Java.',
  },
  {
    id: 'tools',
    number: '07',
    title: 'TOOLS & WORKFLOW',
    skills: [
      {
        name: 'GIT',
        description:
          'Used to manage code, track changes, and keep project development structured over time.',
      },
      {
        name: 'GITHUB',
        description:
          'Used for version control, repository management, and project collaboration workflows.',
      },
      {
        name: 'VS CODE',
        description:
          'Primary editor used for development, debugging, and iterative building.',
      },
      {
        name: 'INTELLIJ IDEA',
        description:
          'Used for Java-centric development and structured coding workflows.',
      },
      {
        name: 'FIGMA',
        description:
          'Used for interface planning, layout exploration, and design thinking during product work.',
      },
    ],
  },
  {
    id: 'exploring',
    number: '08',
    title: 'CURRENTLY EXPLORING',
    theme: 'signal',
    skills: [
      {
        name: 'LINUX',
        description:
          'Actively learning system-level understanding, workflow efficiency, and development environment fundamentals.',
      },
      {
        name: 'SYSTEM DESIGN',
        description:
          'Focused on learning how larger systems are designed, structured, and scaled responsibly.',
      },
      {
        name: 'DEVOPS',
        description:
          'Exploring automation, deployment workflows, and how software moves from code to production.',
      },
      {
        name: 'CLOUD',
        description:
          'Building foundational understanding of cloud concepts and modern deployment environments.',
      },
    ],
  },
];

const matrixRows = [
  { label: 'FRONTEND', value: 'COMFORTABLE' },
  { label: 'BACKEND', value: 'IMPROVING' },
  { label: 'DSA', value: 'STRONG FOCUS' },
  { label: 'SYSTEM DESIGN', value: 'EXPLORING' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState('languages');
  const [openSkill, setOpenSkill] = useState(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-reveal',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        }
      );

      gsap.utils.toArray('.skills-section').forEach((element) => {
        gsap.fromTo(
          element.querySelectorAll('.skills-row'),
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 78%',
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const elements = Array.from(
      sectionRef.current?.querySelectorAll('.skills-section') || []
    );

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleEntry) {
          setActiveSection(
            visibleEntry.target.dataset.category || 'languages'
          );
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.2, 0.5, 0.8],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleSkill = (categoryId, index) => {
    setOpenSkill((current) => {
      if (!current) {
        return {
          category: categoryId,
          index,
        };
      }

      if (
        current.category === categoryId &&
        current.index === index
      ) {
        return null;
      }

      return {
        category: categoryId,
        index,
      };
    });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3f2ee] text-[#071714]"
    >
      <div className="about-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 pb-14 pt-10 sm:px-6 md:px-8 md:pb-20 md:pt-14 lg:px-10 lg:pb-24 lg:pt-16">
        {/* HEADER */}
        <div className="skills-reveal mb-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/55 md:mb-7">
          <span>04 / SKILLS</span>
          <span className="h-px w-10 bg-[#071714]/20" />
          <span>TOOLKIT</span>
        </div>

        <div className="skills-reveal mb-10 border-b border-[#071714]/15 pb-8 md:mb-14 md:pb-10">
          <div className="grid gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-12">
            <div>
              <div className="text-[clamp(4rem,9vw,11rem)] font-medium uppercase leading-[0.75] tracking-[-0.09em]">
                THE
                <span className="block text-[#071714]/60">
                  TOOLKIT.
                </span>
              </div>
            </div>

            <div>
              <p className="max-w-[540px] text-[14px] leading-7 text-[#071714]/65 md:text-[15px] md:leading-8">
                The technologies, tools, and concepts I use to build
                interfaces, APIs, full-stack applications, and solve
                problems — with the stack evolving as I learn.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['MERN', 'JAVA', 'DSA', 'GSAP'].map((item) => (
                  <span
                    key={item}
                    className="border border-[#071714]/15 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#071714]/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY NAVIGATION */}
        <div className="skills-reveal sticky top-[88px] z-20 mb-8 rounded-full border border-[#071714]/10 bg-[#f3f2ee]/90 px-3 py-2 shadow-sm backdrop-blur-md md:mb-12">
          <nav
            aria-label="Skill categories"
            className="overflow-x-auto"
          >
            <div className="flex min-w-max items-center gap-1 md:gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#071714] text-[#f3f2ee]'
                      : 'text-[#071714]/45 hover:bg-[#071714]/5 hover:text-[#071714]/80'
                  }`}
                >
                  <span
                    className={`transition-transform duration-300 ${
                      activeSection === item.id
                        ? ''
                        : 'group-hover:translate-x-1'
                    }`}
                  >
                    →
                  </span>

                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="space-y-10 md:space-y-14">
          {skillCategories.map((category) => {
            const items = category.skills ?? [];

            const isOpen = (categoryId, index) =>
              Boolean(
                openSkill &&
                  openSkill.category === categoryId &&
                  openSkill.index === index
              );

            return (
              <section
                key={category.id}
                id={category.id}
                data-category={category.id}
                className="skills-section scroll-mt-28 border-t border-[#071714]/15 pt-5 md:pt-7"
              >
                {/* CATEGORY HEADING */}
                <div className="mb-7 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#071714]/55">
                  <span>{category.number}</span>

                  <span className="h-px flex-1 bg-[#071714]/15" />

                  <span>{category.title}</span>
                </div>

                {/* NORMAL SKILLS */}
                {category.skills && category.theme !== 'signal' && (
                  <div className="divide-y divide-[#071714]/10 border-b border-[#071714]/10">
                    {items.map((skill, index) => {
                      const expanded = isOpen(category.id, index);

                      return (
                        <div
                          key={skill.name}
                          className="skills-row group"
                        >
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-5 py-5 text-left md:py-6"
                            aria-expanded={Boolean(expanded)}
                            aria-controls={`${category.id}-${index}`}
                            onClick={() =>
                              toggleSkill(category.id, index)
                            }
                          >
                            <div className="flex items-center gap-4 md:gap-7">
                              <span className="w-5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#071714]/35">
                                {String(index + 1).padStart(2, '0')}
                              </span>

                              <span className="text-[clamp(1.8rem,4vw,4.5rem)] font-medium uppercase leading-none tracking-[-0.07em] transition-transform duration-300 group-hover:translate-x-1">
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#071714]/15 text-base text-[#071714]/45 transition-all duration-300 ${
                                expanded
                                  ? 'rotate-[-90deg] bg-[#071714] text-[#f3f2ee]'
                                  : 'group-hover:translate-x-1'
                              }`}
                            >
                              →
                            </span>
                          </button>

                          <div
                            id={`${category.id}-${index}`}
                            className={`overflow-hidden transition-[max-height,opacity,transform] duration-400 ease-out ${
                              expanded
                                ? 'max-h-40 translate-y-0 opacity-100'
                                : 'max-h-0 translate-y-[-5px] opacity-0'
                            }`}
                            aria-hidden={!expanded}
                          >
                            <p className="max-w-3xl pb-6 pl-9 pr-8 text-[12px] leading-6 text-[#071714]/60 md:pl-[4.7rem] md:text-[13px] md:leading-7">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* FULL STACK */}
                {category.flow && (
                  <div className="skills-row overflow-hidden border border-[#071714]/15">
                    <div className="grid md:grid-cols-5">
                      {category.flow.map((step, index) => (
                        <div
                          key={step}
                          className="relative border-b border-[#071714]/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6"
                        >
                          <span className="mb-10 block text-[9px] tracking-[0.25em] text-[#071714]/35">
                            0{index + 1}
                          </span>

                          <span className="text-[12px] font-medium uppercase tracking-[0.12em]">
                            {step}
                          </span>

                          {index < category.flow.length - 1 && (
                            <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-[#071714]/25 md:block">
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#071714]/10 p-5 md:p-7">
                      <p className="max-w-3xl text-[13px] leading-7 text-[#071714]/65 md:text-[14px]">
                        {category.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* DSA */}
                {category.stats && (
                  <div className="skills-row grid overflow-hidden border border-[#071714]/15 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex min-h-[220px] items-end border-b border-[#071714]/10 p-6 md:min-h-[300px] md:p-8 lg:border-b-0 lg:border-r">
                      <div>
                        <div className="text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.75] tracking-[-0.09em]">
                          {category.stats}
                        </div>

                        <div className="mt-5 text-[9px] font-medium uppercase tracking-[0.3em] text-[#071714]/45">
                          PROBLEMS SOLVED
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-6 md:p-8">
                      <div className="flex flex-wrap gap-x-5 gap-y-3">
                        {category.meta.map((item) => (
                          <span
                            key={item}
                            className="border-b border-[#071714]/15 pb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-[#071714]/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="mt-10 max-w-xl text-[14px] leading-7 text-[#071714]/65 md:text-[15px] md:leading-8">
                        {category.description}
                      </p>

                      <div className="mt-8 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#071714]/45">
                        <span className="h-2 w-2 rounded-full bg-[#071714]" />
                        Consistent problem solving
                      </div>
                    </div>
                  </div>
                )}

                {/* CURRENTLY EXPLORING */}
                {category.theme === 'signal' && (
                  <div className="skills-row border border-[#071714]/15">
                    <div className="grid lg:grid-cols-[1fr_auto]">
                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                          {category.skills.map((skill, index) => (
                            <span
                              key={skill.name}
                              className="group inline-flex items-center gap-3"
                            >
                              <span className="text-[clamp(1.7rem,3vw,3.5rem)] font-medium uppercase leading-none tracking-[-0.07em] transition-transform duration-300 group-hover:translate-x-1">
                                {skill.name}
                              </span>

                              {index <
                                category.skills.length - 1 && (
                                <span className="text-sm text-[#071714]/25">
                                  /
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center border-t border-[#071714]/10 p-6 lg:border-l lg:border-t-0 md:p-8">
                        <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#071714]/55">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#071714]/20" />
                            <span className="relative h-2.5 w-2.5 rounded-full bg-[#071714]" />
                          </span>

                          Currently exploring
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#071714]/10 px-6 py-5 md:px-8">
                      <p className="max-w-2xl text-[12px] leading-6 text-[#071714]/55 md:text-[13px]">
                        Learning beyond the current stack — understanding
                        systems, deployment, infrastructure, and how software
                        works closer to production.
                      </p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* SKILL MATRIX */}
        <div className="skills-reveal mt-14 border-t border-[#071714]/15 pt-6 md:mt-20 md:pt-7">
          <div className="mb-7 flex items-center justify-between">
            <div className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/50">
              BUILDING WITH
            </div>

            <div className="text-[9px] uppercase tracking-[0.24em] text-[#071714]/35">
              CURRENT LEVEL
            </div>
          </div>

          <div className="grid border-l border-t border-[#071714]/10 md:grid-cols-2 lg:grid-cols-4">
            {matrixRows.map((row, index) => (
              <div
                key={row.label}
                className="border-b border-r border-[#071714]/10 p-5 md:min-h-[145px] md:p-6"
              >
                <div className="mb-10 flex items-center justify-between gap-3">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-[#071714]/45">
                    0{index + 1}
                  </span>

                  <span className="h-px flex-1 bg-[#071714]/10" />
                </div>

                <div className="text-[11px] font-medium uppercase tracking-[0.12em]">
                  {row.label}
                </div>

                <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#071714]/45">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEXT */}
        <div className="skills-reveal mt-14 border-t border-[#071714]/15 pt-10 md:mt-20 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/50">
              NEXT
            </div>

            <div>
              <p className="text-[clamp(3rem,7vw,8rem)] font-medium uppercase leading-[0.78] tracking-[-0.085em]">
                STILL
                <span className="block text-[#071714]/60">
                  LEARNING.
                </span>
              </p>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-lg text-[11px] uppercase leading-6 tracking-[0.18em] text-[#071714]/55">
                  More technologies to understand. More systems to build. More
                  problems to solve.
                </p>

                <a
                  href="#projects"
                  className="group inline-flex w-fit items-center gap-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#071714]/75 transition-colors duration-300 hover:text-[#071714]"
                >
                  <span>View My Projects</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#071714]/20 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#071714] group-hover:text-[#f3f2ee]">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;