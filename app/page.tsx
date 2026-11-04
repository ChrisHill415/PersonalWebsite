"use client";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import SiteHeader from "./site-header";
import ContactSection from "./contact-section";
const github = "https://github.com/ChrisHill415";
const projects = [
  {
    title: "Budgeting",
    category: "Software",
    type: "Personal project · In progress",
    subtitle: "Track your finances.",
    description:
      "Built a full-stack app that tracks income, spending, and investments.",
    tags: ["JavaScript", "Supabase", "Vercel", "Git"],
    href: "https://budgeting-dun.vercel.app",
    link: "Visit live app",
    visual: "budget",
  },
  {
    title: "Small Language Model",
    category: "AI & research",
    type: "Personal project · October 2026",
    subtitle: "Learning AI, one step at a time.",
    description:
      "Designed and built a small language model to simulate the core algorithm behind LLMs, exploring how large-scale language generation works at a foundational level.",
    tags: ["Java"],
    href: "https://github.com/ChrisHill415/SmallLanguageModel",
    link: "Explore the code",
    visual: "model",
  },
  {
    title: "Hotel Analysis",
    category: "Data analysis",
    type: "Personal project",
    subtitle: "Discovering trends behind hotel stays.",
    description:
      "Analyzed customer activity at hotels. Explore the analysis and source code on GitHub.",
    tags: ["R"],
    href: "https://github.com/ChrisHill415/Hotel-Analysis",
    link: "Explore the analysis",
    visual: "hotel",
  },
  {
    title: "Multi-agent AI Research",
    category: "AI & research",
    type: "Ohio State · Best Paper Award",
    subtitle: "When happens when agents collaborate?",
    description:
      "Investigated conformity in multi-agent systems and whether reasoning LLMs can overcome it. Awarded Best Paper at IEEE ICDM’s Undergraduate & High School Symposium.",
    tags: ["Python"],
    href: "https://ieeexplore.ieee.org/abstract/document/11415867",
    link: "Read the paper",
    visual: "research",
  },
  {
    title: "Food Pantry Route Optimizer",
    category: "Software",
    type: "Healthy New Albany Food Pantry · 2022–2026",
    subtitle: "Better routes. More meals delivered.",
    description: "Developed a JavaScript tool that processes 100+ delivery addresses and generates 20 optimized routes for a summer meal delivery program at Healthy New Albany Food Pantry.",
    tags: ["JavaScript"],
    href: github,
    link: "Explore the code",
    visual: "pantry",
  },
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "hotel") return (
    <div className="project-visual project-screenshot">
      <Image
        src="/hotel-analysis.png"
        alt="Hotel cancellation rate versus advance booking time, with a scatter plot and a blue trend line"
        fill
        sizes="(max-width: 760px) 85vw, (max-width: 1100px) 50vw, 33vw"
        className="project-screenshot-image"
      />
    </div>
  );
  if (kind === "pantry") return (
    <div className="project-visual project-screenshot">
      <Image
        src="/route-optimizer.avif"
        alt="City street map with red location pins representing delivery destinations"
        fill
        sizes="(max-width: 760px) 85vw, (max-width: 1100px) 50vw, 33vw"
        className="project-screenshot-image"
      />
    </div>
  );

  if (kind === "budget" || kind === "model") {
    const isBudget = kind === "budget";
    return (
      <div className={`project-visual project-screenshot${isBudget ? " budgeting-screenshot" : ""}`}>
        <Image
          src={isBudget ? "/budgeting.png" : "/small-language-model.png"}
          alt={isBudget
            ? "Budgeting app homepage with a financial overview, income, spending, and cash flow chart"
            : "Small language model diagram showing successive next-word predictions forming Once upon a time there"}
          fill
          sizes="(max-width: 760px) 85vw, (max-width: 1100px) 50vw, 33vw"
          className="project-screenshot-image"
        />
      </div>
    );
  }
  return (
    <div className="project-visual project-screenshot">
      <Image
        src="/multi-agent-ai.png"
        alt="OpenAI, Claude, Gemini, and DeepSeek logos representing multiple AI models"
        fill
        sizes="(max-width: 760px) 85vw, (max-width: 1100px) 50vw, 33vw"
        className="project-screenshot-image"
      />
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const detailsId = useId();
  return (
    <article className={`project project-flip${flipped ? " is-flipped" : ""}`}>
      <button
        type="button"
        className="project-turn-button"
        aria-label={flipped ? `Show front of ${project.title}` : `Read about ${project.title}`}
        aria-expanded={flipped}
        aria-controls={detailsId}
        onClick={() => setFlipped(!flipped)}
      />
      <div className="project-rotator">
        <div className="project-face project-front" aria-hidden={flipped} inert={flipped}>
          <ProjectVisual kind={project.visual} />
          <div className="project-face-copy">
            <div className="project-meta">{project.type}</div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <span className="project-flip-hint">Click to read more <span aria-hidden="true">↻</span></span>
          </div>
        </div>
        <div className="project-face project-back" id={detailsId} aria-hidden={!flipped} inert={!flipped}>
          <div className="project-meta">{project.type}</div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <span className="project-flip-hint">Click to flip back <span aria-hidden="true">↻</span></span>
        </div>
      </div>
      <div className="project-actions">
        <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
          {project.link} <Arrow />
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const projectTrackRef = useRef<HTMLDivElement>(null);
  const [projectEdges, setProjectEdges] = useState({ start: true, end: false });
  const visibleProjects = projects.filter((project) => filter === "All work" || project.category === filter);
  const updateProjectEdges = useCallback(() => {
    const track = projectTrackRef.current;
    if (!track) return;
    setProjectEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2 });
  }, []);
  useEffect(() => {
    const track = projectTrackRef.current;
    if (track) track.scrollLeft = 0;
    const frame = requestAnimationFrame(updateProjectEdges);
    window.addEventListener("resize", updateProjectEdges);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateProjectEdges);
    };
  }, [filter, updateProjectEdges]);
  function scrollProjects(direction: number) {
    const track = projectTrackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".project");
    const step = (card?.getBoundingClientRect().width ?? track.clientWidth) + parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: direction * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      ".work .section-heading, .filters, .project-flip, .experience .section-heading, .experience-row, .skills .section-heading, .skill-group, .contact",
    ));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const showAll = () => {
      elements.forEach((element) => {
        element.dataset.revealState = "revealed";
        element.style.removeProperty("--reveal-delay");
      });
    };
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealState = "revealed";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    elements.forEach((element) => {
      if (element.dataset.revealState === "revealed") return;
      // Leave content already on screen visible, including direct section links.
      if (element.getBoundingClientRect().top < window.innerHeight - 40) {
        element.dataset.revealState = "revealed";
        return;
      }
      if (element.matches(".project-flip, .skill-group")) {
        const position = Array.from(element.parentElement?.children ?? []).indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(position, 2) * 85}ms`);
      }
      element.dataset.revealState = "pending";
      observer.observe(element);
    });
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        showAll();
      }
    };
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [filter]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
               CHRIS HILL / CS + STATISTICS @
              DUKE
            </div>
            <h1>
              Hi, I’m <span className="orange">Chris</span>
            </h1>
            <p>
              I’m Chris, a computer science and statistics student at Duke. I
              build useful software and explore how AI can help us make sense of
              the world.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="resume-link"
                href="/Chris-Hill-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume <Arrow />
              </a>
            </div>
            <div className="hero-note">
              <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
            </div>
          </div>
          <div className="hero-art">
            <Image
              src="/chris-hill-headshot.jpg"
              alt="Chris Hill in a navy blazer in front of Duke’s Gothic architecture"
              fill
              preload
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1360px) 42vw, 533px"
              className="hero-headshot"
            />
          </div>
        </section>
        <section id="work" className="work section">
          <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow section-index">01 / SELECTED WORK</div>
              <h2>
                Ideas put into practice<span className="orange">.</span>
              </h2>
            </div>
            <p>
              A mix of software, experiments,
              <br />
              and questions worth asking.
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {["All work", "Software", "AI & research", "Data analysis"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
                {item === "All work" && <span>{String(projects.length).padStart(2, "0")}</span>}
              </button>
            ))}
          </div>
          <div className="project-browse">
            <span>Scroll to explore · {visibleProjects.length} projects</span>
            <div className="project-scroll-controls" role="group" aria-label="Browse projects">
              <button type="button" onClick={() => scrollProjects(-1)} disabled={projectEdges.start} aria-label="Previous projects" aria-controls="project-track">←</button>
              <button type="button" onClick={() => scrollProjects(1)} disabled={projectEdges.end} aria-label="Next projects" aria-controls="project-track">→</button>
            </div>
          </div>
          <div className="projects" id="project-track" ref={projectTrackRef} onScroll={updateProjectEdges} role="region" aria-label="Project cards, scroll horizontally" tabIndex={0}>
            {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          </div>
        </section>
        <section id="experience" className="experience container section">
          <div className="section-heading">
            <div>
              <div className="eyebrow section-index">02 / ALONG THE WAY</div>
              <h2>
                Learning by doing<span className="orange">.</span>
              </h2>
            </div>
            <a
              className="resume-link"
              href="/Chris-Hill-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full resume <Arrow />
            </a>
          </div>
          <div className="experience-list">
            {[
              [
                "2026 — PRESENT",
                "Software Engineer",
                "Technify",
                "Building an full-stack online fundraising auction for New Horizons, a nonprofit supporting children in Texas who have experienced abuse.",
              ],
              [
                "MAY 2026",
                "Athletics Business Data Student Intern",
                "The Ohio State University",
                "Designed a Snowflake SQL and LLM pipeline to turn thousands of fan survey comments into themes for data-informed decisions.",
              ],
              [
                "JUN — NOV 2025",
                "AI Researcher",
                "The Ohio State University · Computer Science & Engineering",
                "Researched reasoning LLMs and multi-agent conformity. Won Best Paper Award at IEEE International Conference of Data Mining's High School and Undergraduate Symposium. Presented our findings through oral and poster presentations.",
              ],
              [
                "2024 — 2026",
                "Student Technology Summer Intern",
                "Columbus Academy",
                "Deployed school technology and shared my perspective as a student on emerging technology at the ATLIS 2026 Annual Conference.",
              ],

            ].map(([date, role, org, description]) => (
              <article className="experience-row" key={role}>
                <span className="experience-date">{date}</span>
                <div>
                  <h3>{role}</h3>
                  <div className="organization">{org}</div>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="skills section" aria-labelledby="skills-heading">
          <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow section-index">03 / TECHNICAL SKILLS</div>
              <h2 id="skills-heading">My technical toolkit<span className="orange">.</span></h2>
            </div>
            <p>Tools I’ve used across software,<br />data analysis, and AI research.</p>
          </div>
          <div className="skills-grid">
            {[
              { title: "Languages", description: "Writing software and working with data.", items: ["Python", "JavaScript", "Java", "HTML", "CSS", "R", "SQL"] },
              { title: "Frameworks & libraries", description: "Building responsive web applications.", items: ["Next.js", "React", "Tailwind CSS"] },
              { title: "Tools & platforms", description: "Managing code, data, and deployments.", items: ["Git", "Supabase", "Vercel", "Snowflake"] },
            ].map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number" aria-hidden="true">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="skill-items" aria-label={group.title}>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="footer container">
        <span>© 2026 Chris Hill</span>
        <span className="footer-note">A little curiosity goes a long way.</span>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/chris-hill-"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <a href="#" aria-label="Back to top">
            ↑ Top
          </a>
        </div>
      </footer>
    </>
  );
}
