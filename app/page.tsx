"use client";
import { useState } from "react";
import Image from "next/image";
const github = "https://github.com/ChrisHill415";
const projects = [
  {
    title: "Budgeting",
    category: "Software",
    type: "Personal project · In progress",
    subtitle: "A clearer picture of your finances.",
    description:
      "A full-stack app to track income, expenses, and investments. Built to make the everyday decisions around money a little clearer.",
    tags: ["JavaScript", "Supabase", "Vercel"],
    href: "https://budgeting-dun.vercel.app",
    link: "Visit live app",
    visual: "budget",
  },
  {
    title: "Small Language Model",
    category: "AI & research",
    type: "Personal project · October 2026",
    subtitle: "Language, built from the ground up.",
    description:
      "A small language model written from scratch in Java, exploring the core algorithms that make large-scale language generation possible.",
    tags: ["Java", "Language modeling", "Git"],
    href: github,
    link: "Explore my GitHub",
    visual: "model",
  },
  {
    title: "Multi-agent AI Research",
    category: "AI & research",
    type: "Ohio State · Best Paper Award",
    subtitle: "When AI agents think alike.",
    description:
      "Investigating conformity in multi-agent systems and whether reasoning LLMs can overcome it. Awarded Best Paper at IEEE ICDM’s Undergraduate & High School Symposium.",
    tags: ["Reasoning LLMs", "Multi-agent systems", "Research"],
    href: "https://ieeexplore.ieee.org/abstract/document/11415867",
    link: "Read the paper",
    visual: "research",
  },
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "budget")
    return (
      <div className="project-visual budget-art" aria-hidden="true">
        <div className="mini-budget">
          <div className="mini-top">
            <span>
              budgeting<span className="orange">.</span>
            </span>
            <span>Overview ↗</span>
          </div>
          <div className="balance-label">YOUR MONTH, AT A GLANCE</div>
          <div className="balance">
            $2,480<span>.00</span>
          </div>
          <div className="bar-chart">
            {[38, 62, 48, 83, 65, 95, 74, 108, 89, 125, 103, 140].map(
              (h, i) => (
                <i key={i} style={{ height: h }} />
              ),
            )}
          </div>
          <div className="chart-foot">
            <span>Income</span>
            <span>Expenses</span>
            <span>A little more clarity.</span>
          </div>
        </div>
        <span className="visual-caption">01 / FINANCIAL CLARITY</span>
      </div>
    );
  if (kind === "model")
    return (
      <div className="project-visual model-art" aria-hidden="true">
        <div className="code-window">
          <div className="window-top">
            <span>● ● ●</span>
            <span>language-model.java</span>
          </div>
          <div className="code-lines">
            <span>
              <b>class</b> SmallLanguageModel {"{"}
            </span>
            <span>
              {" "}
              <b>String</b> context = <em>&quot;An idea&quot;</em>;
            </span>
            <span>
              {" "}
              <b>while</b> (curious) {"{"}
            </span>
            <span> context += predict(context);</span>
            <span> {"}"}</span>
            <span>{"}"}</span>
          </div>
          <div className="model-output">
            <span>OUTPUT</span> An idea becomes something
            <span className="cursor">▍</span>
          </div>
        </div>
        <span className="visual-caption">02 / UNDER THE HOOD</span>
      </div>
    );
  return (
    <div className="project-visual research-art" aria-hidden="true">
      <svg viewBox="0 0 400 240">
        <g stroke="#82917b">
          {[
            [90, 75],
            [290, 65],
            [190, 180],
            [320, 170],
            [70, 180],
          ].map(([x, y], i) => (
            <g key={i}>
              <path d={`M200 110L${x} ${y}`} />
              <circle cx={x} cy={y} r="23" fill="#e8ebdd" />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#58634e"
                stroke="none"
                fontSize="10"
                fontFamily="inherit"
              >
                LLM
              </text>
            </g>
          ))}
        </g>
        <circle cx="200" cy="110" r="35" fill="#d16b43" />
        <text
          x="200"
          y="114"
          textAnchor="middle"
          fill="#fff7e9"
          fontSize="11"
          fontFamily="inherit"
        >
          WHY?
        </text>
      </svg>
      <div className="award-label">✳ IEEE ICDM · BEST PAPER</div>
      <span className="visual-caption">03 / INDEPENDENT THINKING</span>
    </div>
  );
}
export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("chris.hill@duke.edu");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:chris.hill@duke.edu";
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header container">
        <a href="#" className="wordmark" aria-label="Chris Hill home">
          CJH
        </a>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {["Work", "About", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> CHRIS HILL / CS + STATISTICS @
              DUKE
            </div>
            <h1>
              Curiosity,
              <br />
              turned into <span className="serif">code.</span>
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
        <div className="intro-strip container">
          <span>A FEW THINGS I WORK WITH</span>
          <div>
            Python <i>/</i> JavaScript <i>/</i> Java <i>/</i> React <i>/</i> SQL{" "}
            <i>/</i> Snowflake
          </div>
        </div>
        <section id="work" className="work container section">
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
            {["All work", "Software", "AI & research"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
                {item === "All work" && <span>03</span>}
              </button>
            ))}
          </div>
          <div className="projects">
            {projects
              .filter((p) => filter === "All work" || p.category === filter)
              .map((p) => (
                <article className="project" key={p.title}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.link + ": " + p.title}
                  >
                    <ProjectVisual kind={p.visual} />
                  </a>
                  <div className="project-meta">{p.type}</div>
                  <h3>
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.title} <Arrow />
                    </a>
                  </h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-description">{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.link} <Arrow />
                  </a>
                </article>
              ))}
          </div>
        </section>
        <section id="about" className="about section">
          <div className="container about-grid">
            <div>
              <div className="eyebrow section-index">
                02 / A LITTLE ABOUT ME
              </div>
              <h2>
                Driven by questions.
                <br />
                Grounded in <span className="serif">purpose.</span>
              </h2>
              <div className="about-decoration" aria-hidden="true">
                ( curiosity + code ) <span>× impact</span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I like understanding how things work, then figuring out how to
                make them useful.
              </p>
              <p>
                At Duke, I’m studying computer science and statistics,
                developing my machine learning skills with Duke Applied Machine
                Learning, and building software with Technify. Through Technify,
                I’m helping New Horizons create an online auction for its annual
                fundraiser.
              </p>
              <p>
                That connection between technology and people runs through my
                work: from researching how AI agents influence one another to
                writing a route optimizer for a community meal delivery program.
              </p>
              <div className="education">
                <Image src="/duke-wordmark.png" alt="Duke University" width={58} height={58} className="education-logo" />
                <div>
                  <strong>Duke University</strong>
                  <span>B.S. Computer Science & Statistics</span>
                  <span>2026 – 2030 · Durham, NC</span>
                </div>
                <span className="education-arrow">↗</span>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="experience container section">
          <div className="section-heading">
            <div>
              <div className="eyebrow section-index">03 / ALONG THE WAY</div>
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
                "Building an online fundraising auction for New Horizons, a nonprofit supporting children in Texas who have experienced abuse.",
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
                "Researched reasoning LLMs and multi-agent conformity. Presented award-winning findings through oral and poster presentations.",
              ],
              [
                "2024 — 2026",
                "Student Technology Summer Intern",
                "Columbus Academy",
                "Deployed school technology, maintained device records, and shared a student perspective on emerging technology at ATLIS 2026.",
              ],
              [
                "2022 — 2026",
                "Technology Volunteer",
                "Healthy New Albany Food Pantry",
                "Created a JavaScript tool to process 100+ delivery addresses into 20 optimized routes. Contributed 120+ volunteer hours.",
              ],
            ].map(([date, role, org, description]) => (
              <article className="experience-row" key={role}>
                <span className="experience-date">{date}</span>
                <div>
                  <h3>{role}</h3>
                  <div className="organization">{org}</div>
                  <p>{description}</p>
                </div>
                <span className="experience-symbol" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact container">
          <div className="eyebrow">04 / WHAT’S NEXT?</div>
          <div className="contact-main">
            <h2>
              Good things start
              <br />
              with <span className="serif">a conversation.</span>
            </h2>
            <a
              href="mailto:chris.hill@duke.edu"
              className="contact-arrow"
              aria-label="Email Chris Hill"
            >
              ↗
            </a>
          </div>
          <div className="contact-bottom">
            <p>
              Have an idea, an opportunity, or a question?
              <br />
              I’d love to hear from you.
            </p>
            <div className="email-group">
              <a href="mailto:chris.hill@duke.edu">chris.hill@duke.edu</a>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="copy-button"
              >
                {copied ? "Copied ✓" : "Copy ↗"}
              </button>
              <span className="sr-only" role="status">
                {copied ? "Email address copied" : ""}
              </span>
            </div>
          </div>
        </section>
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
