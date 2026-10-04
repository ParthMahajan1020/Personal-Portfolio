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
        description: 'Primary language for my DSA practice and core programming fundamentals, including OOP and structured problem solving.',
      },
      {
        name: 'JAVASCRIPT',
        description: 'Used across frontend and full-stack development for interfaces, application logic, and APIs.',
      },
      {
        name: 'PYTHON',
        description: 'Part of my early programming foundation and continued learning in practical scripting and problem solving.',
      },
      {
        name: 'C / C++',
        description: 'Core fundamentals from the early stages of my programming journey and problem-solving foundation.',
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
        description: 'Used to build component-based interfaces and responsive user experiences for web applications.',
      },
      {
        name: 'HTML',
        description: 'Core structure for building clean, semantic, and accessible interfaces.',
      },
      {
        name: 'CSS',
        description: 'Used for layout, responsiveness, typography, and visual polish across projects.',
      },
      {
        name: 'TAILWIND CSS',
        description: 'Used for fast styling, consistency, and responsive UI development in modern frontend work.',
      },
      {
        name: 'GSAP',
        description: 'Used to create subtle motion and scroll-based storytelling that feels premium and intentional.',
      },
      {
        name: 'RESPONSIVE DESIGN',
        description: 'A core focus in building interfaces that remain clean and usable across devices.',
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
        description: 'Backend runtime used for building server-side logic, APIs, and application workflows.',
      },
      {
        name: 'EXPRESS.JS',
        description: 'Used to structure backend routes, middleware, and REST APIs in full-stack projects.',
      },
      {
        name: 'REST APIs',
        description: 'Part of building communication between the frontend and the server in practical web applications.',
      },
      {
        name: 'JWT',
        description: 'Used for user authentication and protected application routes in secure flows.',
      },
      {
        name: 'AUTHENTICATION',
        description: 'Applied in practical app flows to manage access, sessions, and secure user actions.',
      },
      {
        name: 'NODEMAILER',
        description: 'Used for email-based workflows and practical communication within application features.',
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
        description: 'Used for document-based storage in full-stack applications and data-driven products.',
      },
      {
        name: 'MONGOOSE',
        description: 'Used to model application data and work with MongoDB in a structured Node.js backend.',
      },
      {
        name: 'MONGODB ATLAS',
        description: 'Used for cloud-hosted database workflows in modern application setups.',
      },
    ],
  },
  {
    id: 'fullstack',
    number: '05',
    title: 'FULL-STACK',
    flow: ['INTERFACE', 'API', 'SERVER', 'DATABASE', 'AUTHENTICATION'],
    description:
      'Connecting frontend interfaces with backend APIs, authentication and persistent data to build complete web applications.',
  },
  {
    id: 'problems',
    number: '06',
    title: 'PROBLEM SOLVING',
    stats: '450+ PROBLEMS SOLVED',
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
        description: 'Used to manage code, track changes, and keep project development structured over time.',
      },
      {
        name: 'GITHUB',
        description: 'Used for version control, repository management, and project collaboration workflows.',
      },
      {
        name: 'VS CODE',
        description: 'Primary editor used for development, debugging, and iterative building.',
      },
      {
        name: 'INTELLIJ IDEA',
        description: 'Used for Java-centric development and structured coding workflows.',
      },
      {
        name: 'FIGMA',
        description: 'Used for interface planning, layout exploration, and design thinking during product work.',
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
        description: 'Actively learning system-level understanding, workflow efficiency, and development environment fundamentals.',
      },
      {
        name: 'SYSTEM DESIGN',
        description: 'Focused on learning how large systems are designed, structured, and scaled responsibly.',
      },
      {
        name: 'DEVOPS',
        description: 'Exploring automation, deployment workflows, and how software moves from code to production.',
      },
      {
        name: 'CLOUD',
        description: 'Building foundational understanding of cloud concepts and modern deployment environments.',
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: section, start: 'top 72%', once: true },
        }
      );

      gsap.utils.toArray('.skills-section').forEach((element) => {
        gsap.fromTo(
          element.querySelectorAll('.skills-row'),
          { opacity: 0, y: 22 },
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
    const elements = Array.from(document.querySelectorAll('.skills-section'));

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.dataset.category || 'languages');
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
        return { category: categoryId, index };
      }

      if (current.category === categoryId && current.index === index) {
        return null;
      }

      return { category: categoryId, index };
    });
  };

  return (
    <section id="skills" ref={sectionRef} className="relative overflow-hidden bg-[#f3f2ee] text-[#071714]">
      <div className="about-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 pb-12 pt-10 sm:px-6 md:px-8 md:pb-16 md:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
        <div className="skills-reveal mb-4 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
          04 / SKILLS
        </div>

        <div className="skills-reveal sticky top-[88px] z-20 mb-6 rounded-full border border-[#071714]/10 bg-[#f3f2ee]/85 px-3 py-2 backdrop-blur-sm md:mb-8">
          <nav aria-label="Skill categories" className="overflow-x-auto">
            <div className="flex min-w-max items-center gap-2 md:gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group inline-flex items-center gap-2 whitespace-nowrap px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#071714]' : 'text-[#071714]/45 hover:text-[#071714]/75'
                  }`}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="skills-reveal mb-8 md:mb-10">
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div className="text-[clamp(3rem,7vw,8.5rem)] font-medium uppercase leading-[0.82] tracking-[-0.08em] text-[#071714]">
              THE
              <span className="block text-[#071714]/75">TOOLKIT.</span>
            </div>

            <p className="max-w-[520px] text-[13px] leading-6 text-[#071714]/70 md:text-[14px] md:leading-7">
              Technologies I use to build interfaces, APIs, full-stack applications, and solve
              problems — with the stack continuing to evolve as I learn.
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {skillCategories.map((category) => {
            const items = category.skills ?? [];
            const isOpen = (categoryId, index) =>
              Boolean(openSkill && openSkill.category === categoryId && openSkill.index === index);

            return (
              <section
                key={category.id}
                id={category.id}
                data-category={category.id}
                className="skills-section border-t border-[#071714]/15 pt-5 md:pt-6"
              >
                <div className="mb-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
                  <span>{category.number}</span>
                  <span className="h-px flex-1 bg-[#071714]/15" />
                  <span>{category.title}</span>
                </div>

                {category.skills && (
                  <div className="space-y-2">
                    {items.map((skill, index) => {
                      const expanded = isOpen(category.id, index);

                      return (
                        <div key={skill.name} className="skills-row border-t border-[#071714]/10 first:border-t-0">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-4 py-3 text-left md:py-4"
                            aria-expanded={Boolean(expanded)}
                            aria-controls={`${category.id}-${index}`}
                            onClick={() => toggleSkill(category.id, index)}
                          >
                            <div className="flex items-center gap-3 md:gap-4">
                              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#071714]/45">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[clamp(1.7rem,3vw,4rem)] font-medium uppercase leading-none tracking-[-0.06em] text-[#071714]">
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className={`text-xl text-[#071714]/45 transition-transform duration-300 ${
                                expanded ? 'translate-x-1 -rotate-90' : ''
                              }`}
                            >
                              →
                            </span>
                          </button>

                          <div
                            id={`${category.id}-${index}`}
                            className={`overflow-hidden transition-[max-height,opacity,transform] duration-400 ease-out ${
                              expanded ? 'max-h-36 opacity-100 translate-y-0' : 'max-h-0 translate-y-[-4px] opacity-0'
                            }`}
                            aria-hidden={!expanded}
                          >
                            <p className="max-w-2xl pb-4 pl-10 pr-4 text-[12px] uppercase tracking-[0.12em] text-[#071714]/60 md:pb-5 md:pl-[4.8rem] md:text-[13px]">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {category.flow && (
                  <div className="skills-row rounded-[18px] border border-[#071714]/10 bg-[#071714]/[0.02] p-5 md:p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#071714]/55 md:text-[11px]">
                      {category.flow.map((step, index) => (
                        <div key={step} className="flex items-center gap-2">
                          <span>{step}</span>
                          {index < category.flow.length - 1 && <span className="text-[#071714]/35">↓</span>}
                        </div>
                      ))}
                    </div>

                    <p className="max-w-2xl text-[13px] leading-6 text-[#071714]/70 md:text-[14px] md:leading-7">
                      {category.description}
                    </p>
                  </div>
                )}

                {category.stats && (
                  <div className="skills-row grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                    <div className="text-[clamp(2.2rem,6vw,6.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.08em] text-[#071714]">
                      {category.stats}
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#071714]/60 md:text-[11px]">
                        {category.meta.map((item) => (
                          <span key={item} className="border-b border-[#071714]/10 pb-1">
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="max-w-xl text-[13px] leading-6 text-[#071714]/70 md:text-[14px] md:leading-7">
                        {category.description}
                      </p>
                    </div>
                  </div>
                )}
                
              </section>
            );
          })}
        </div>

        <div className="skills-reveal mt-12 border-t border-[#071714]/15 pt-5 md:mt-16 md:pt-6">
          <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
            BUILDING WITH
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {matrixRows.map((row) => (
              <div key={row.label} className="border-t border-[#071714]/10 pt-3">
                <div className="mb-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-[#071714]/55">
                  <span>{row.label}</span>
                  <span className="h-px flex-1 bg-[#071714]/10" />
                </div>
                <div className="text-[14px] font-medium uppercase tracking-[0.12em] text-[#071714]">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-reveal mt-12 border-t border-[#071714]/15 pt-5 md:mt-16 md:pt-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
              NEXT
            </div>

            <div className="space-y-4">
              <p className="text-[clamp(2.2rem,4.5vw,6.3rem)] font-medium uppercase leading-[0.88] tracking-[-0.08em] text-[#071714]">
                STILL
                <span className="block text-[#071714]/75">LEARNING.</span>
              </p>

              <p className="max-w-[520px] text-[12px] uppercase tracking-[0.18em] text-[#071714]/60 md:text-[13px]">
                More technologies to understand. More systems to build. More problems to solve.
              </p>

              <a
                href="#projects"
                className="group inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#071714]/80 transition-colors duration-300 hover:text-[#071714]"
                aria-label="View my projects"
              >
                <span>View My Projects</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#071714]/20 text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
