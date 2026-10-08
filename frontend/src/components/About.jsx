import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    number: '01',
    title: 'START',
    meta: 'C',
    description:
      'After CET, I started learning C, encouraged by my uncle. That gave me my first strong foundation in programming and problem-solving.',
  },
  {
    number: '02',
    title: 'EXPLORE',
    meta: 'PYTHON → JAVA',
    description:
      'I moved through Python and Java, building a clearer understanding of programming fundamentals, object-oriented thinking, and core concepts.',
  },
  {
    number: '03',
    title: 'SOLVE',
    meta: 'DSA',
    description:
      'I started consistently solving DSA problems in Java and have now solved 450+ problems on LeetCode. It helped me sharpen my thinking and approach problems with more structure.',
  },
  {
    number: '04',
    title: 'BUILD',
    meta: 'FULL-STACK DEVELOPMENT',
    description:
      'I moved into Full-Stack Development to turn my programming knowledge into real products and build complete experiences rather than isolated features.',
  },
  {
    number: '05',
    title: 'REFINE',
    meta: 'TODAY',
    description:
      'I am now strengthening backend development, building projects, preparing for internships and hackathons, and improving through every project I work on.',
  },
];

const mindsetItems = [
  {
    title: 'BUILD',
    description:
      'I learn best by building. Instead of keeping everything inside tutorials, I try to turn what I learn into something real.',
  },
  {
    title: 'TEST',
    description:
      'I build quickly, then test, debug, and understand what went wrong. Problems are part of the learning process.',
  },
  {
    title: 'REFINE',
    description:
      'Once something works, I keep improving it — from the code and performance to responsiveness, interaction, and the small details that make a product feel complete.',
  },
  {
    title: 'REBUILD',
    description:
      'I do not treat the first version as the final version. If I understand something better later, I revisit the approach and build it better.',
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const mindsetRefs = useRef([]);
  const [openMindset, setOpenMindset] = useState(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: section, start: 'top 72%', once: true },
        }
      );

      gsap.fromTo(
        '.about-word',
        { opacity: 0, y: 90, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.16,
          scrollTrigger: { trigger: '.about-word-block', start: 'top 80%', once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    mindsetRefs.current.forEach((item, index) => {
      if (!item) return;

      const panel = item.querySelector('.mindset-panel');
      if (!panel) return;

      gsap.to(panel, {
        height: openMindset === index ? panel.scrollHeight : 0,
        opacity: openMindset === index ? 1 : 0,
        duration: 0.45,
        ease: 'power3.inOut',
        overwrite: true,
      });
    });
  }, [openMindset]);

  const toggleMindset = (index) => {
    setOpenMindset((current) => (current === index ? null : index));
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#f3f2ee] text-[#071714]">
      <div className="about-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 pb-12 pt-10 sm:px-6 md:px-8 md:pb-14 md:pt-12 lg:px-10 lg:pb-16 lg:pt-14">
        <div className="about-reveal mb-4 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60 md:mb-6">
          01 / ABOUT
        </div>

        <div className="about-word-block relative overflow-hidden pb-5 md:pb-6">
          <div className="about-word text-[clamp(3.2rem,7vw,9rem)] font-medium uppercase leading-[0.82] tracking-[-0.08em] text-[#071714]">
            WHO
          </div>
          <div className="about-word text-[clamp(3.2rem,7vw,9rem)] font-medium uppercase leading-[0.82] tracking-[-0.08em] text-[#071714]/75">
            IS
          </div>
          <div className="about-word text-[clamp(3.2rem,7vw,9rem)] font-medium uppercase leading-[0.82] tracking-[-0.08em] text-[#071714]">
            PARTH?
          </div>
        </div>

        <div className="about-sections">
          <article className="about-reveal mt-6 grid gap-7 border-t border-[#071714]/15 pt-5 md:mt-8 md:pt-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <div className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/55">
              THE PERSON
            </div>

            <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
              <div className="space-y-3 text-[15px] leading-7 text-[#071714]/75 md:text-[17px] md:leading-8">
                <p>
                  I&apos;m Parth Pravin Mahajan, a Computer Engineering student and Full-Stack
                  Developer based in Pune. I enjoy exploring new technologies, solving problems,
                  and turning what I learn into things I can actually build.
                </p>
                <p>
                  I grew up around people working in engineering and IT, which gave me an early
                  view of the field and influenced my decision to pursue Computer Engineering. I
                  enjoy coding, working with computers, and learning by doing — whether that means
                  solving DSA problems, building full-stack products, or improving a project after it works.
                </p>
              </div>

              <div className="border-t border-[#071714]/10 pt-3 text-[12px] uppercase tracking-[0.12em] text-[#071714]/60 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <p className="mb-2 text-[10px] font-medium tracking-[0.28em] text-[#071714]/55">
                  BASED IN
                </p>
                <p className="font-medium text-[#071714]">Pune, Maharashtra</p>
                <p className="mt-3">Pusad, Maharashtra, near Nagpur</p>
              </div>
            </div>
          </article>

          <article className="about-reveal mt-8 border-t border-[#071714]/15 pt-5 md:mt-10 md:pt-6">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
              EDUCATION
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <div className="space-y-2">
                <div className="text-[clamp(1.8rem,3vw,4rem)] font-medium uppercase leading-[0.94] tracking-[-0.07em] text-[#071714]">
                  D. Y. PATIL COLLEGE OF ENGINEERING
                </div>
                <div className="text-[clamp(1rem,1.5vw,1.5rem)] uppercase tracking-[0.16em] text-[#071714]/65">
                  AKURDI, PUNE
                </div>
              </div>

              <div className="space-y-3 border-t border-[#071714]/10 pt-3 text-[12px] uppercase tracking-[0.12em] text-[#071714]/60 md:text-[13px]">
                <p className="text-[#071714]">B.Tech — Computer Engineering</p>
                <p>2nd Year</p>
                <p>Expected Graduation — 2029</p>
                <p>First Year CGPA — 9.11</p>
              </div>
            </div>
          </article>

          <article className="about-reveal mt-8 border-t border-[#071714]/15 pt-5 md:mt-10 md:pt-6">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
              THE JOURNEY
            </div>

            <div className="divide-y divide-[#071714]/10">
              {journeySteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 py-4 md:grid-cols-[88px_minmax(0,1fr)_minmax(0,2fr)] md:gap-6 md:py-5"
                >
                  <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#071714]/50">
                    {step.number}
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#071714]/55">
                      {step.title}
                    </div>
                    <div className="text-[14px] uppercase tracking-[0.12em] text-[#071714]/75 md:text-[15px]">
                      {step.meta}
                    </div>
                  </div>

                  <p className="text-[13px] leading-6 text-[#071714]/70 md:text-[14px] md:leading-7">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="about-reveal mt-8 border-t border-[#071714]/15 pt-5 md:mt-10 md:pt-6">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
              CURRENTLY
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div className="space-y-3 text-[13px] uppercase tracking-[0.12em] text-[#071714]/65 md:text-[14px]">
                {[
                  '01 — FULL-STACK DEVELOPMENT',
                  '02 — DSA',
                  '03 — BACKEND',
                  '04 — INTERNSHIP PREPARATION',
                  '05 — HACKATHONS',
                  '06 — LINUX + SYSTEM DESIGN',
                ].map((item) => (
                  <div key={item} className="border-b border-[#071714]/10 pb-2">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-[#071714]/10 pt-3 text-[12px] uppercase tracking-[0.12em] text-[#071714]/60 md:text-[13px]">
                <p>
                  <span className="text-[#071714]">Comfortable:</span> Frontend
                </p>
                <p>
                  <span className="text-[#071714]">Improving:</span> Backend
                </p>
                <p>
                  <span className="text-[#071714]">Next:</span> Linux + System Design
                </p>
              </div>
            </div>
          </article>

          <article className="about-reveal mt-8 border-t border-[#071714]/15 pt-5 md:mt-10 md:pt-6">
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
              THE MINDSET
            </div>

            <div>
              {mindsetItems.map(({ title, description }, index) => {
                const isOpen = openMindset === index;

                return (
                  <div
                    key={title}
                    ref={(node) => {
                      mindsetRefs.current[index] = node;
                    }}
                    className={`group border-t border-[#071714]/10 ${isOpen ? 'text-[#071714]' : ''}`}
                  >
                    <button
                      type="button"
                      className="flex min-h-[72px] w-full items-center justify-between gap-4 py-2 text-left md:min-h-[82px]"
                      aria-expanded={isOpen}
                      aria-controls={`mindset-detail-${index}`}
                      onClick={() => toggleMindset(index)}
                    >
                      <span className="flex items-center gap-4 md:gap-5">
                        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#071714]/55">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[clamp(1.6rem,3vw,3.6rem)] font-medium uppercase leading-none tracking-[-0.06em]">
                          {title}
                        </span>
                      </span>

                      <span
                        className={`text-xl text-[#071714]/45 transition-transform duration-300 ${
                          isOpen ? 'rotate-[-90deg]' : 'rotate-0'
                        }`}
                      >
                        →
                      </span>
                    </button>

                    <div
                      id={`mindset-detail-${index}`}
                      className="mindset-panel overflow-hidden"
                      aria-hidden={!isOpen}
                    >
                      <p className="max-w-2xl pb-5 pl-10 pr-6 text-[13px] leading-6 text-[#071714]/70 md:pb-6 md:pl-[4.4rem] md:text-[14px] md:leading-7">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="about-reveal mt-8 border-t border-[#071714]/15 pt-5 md:mt-10 md:pt-6">
            <div className="mb-4 text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
              BEYOND THE CODE
            </div>

            <p className="max-w-3xl text-[15px] leading-7 text-[#071714]/75 md:text-[17px] md:leading-8">
              Outside development, I enjoy photography, travelling, discovering good cafes and
              places, following cricket, and — naturally — finding great food.
            </p>
          </article>

          <article className="about-reveal mt-8 border-t border-[#071714]/15 pt-5 md:mt-10 md:pt-6">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
              <div className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#071714]/60">
                WHAT&apos;S NEXT
              </div>

              <div className="space-y-4">
                <p className="text-[clamp(2.2rem,4.5vw,6.3rem)] font-medium uppercase leading-[0.9] tracking-[-0.08em] text-[#071714]">
                  STILL
                  <span className="block text-[#071714]/75">BUILDING.</span>
                </p>

                <p className="max-w-[520px] text-[12px] uppercase tracking-[0.18em] text-[#071714]/60 md:text-[13px]">
                  More systems to understand. More problems to solve. More products to build.
                </p>

                <a
                  href="#projects"
                  className="group inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#071714]/80 transition-colors duration-300 hover:text-[#071714]"
                  aria-label="Explore my work"
                >
                  <span>Explore My Work</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#071714]/20 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
