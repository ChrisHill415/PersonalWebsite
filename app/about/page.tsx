import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import ContactSection from "../contact-section";

export const metadata: Metadata = {
  title: "About Me — Chris Hill",
  description: "Get to know Chris Hill, a computer science and statistics student at Duke University, building software and connecting technology with people.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Me — Chris Hill",
    description: "Curiosity, code, and purpose. Get to know Chris Hill.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader about />
      <main id="main">
        <section id="about" className="about section">
          <div className="container about-grid">
            <div>
              <div className="eyebrow section-index">
                ABOUT ME
              </div>
              <h1>
                Driven by questions.
                <br />
                Grounded in <span className="serif">purpose.</span>
              </h1>
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
                At Duke, I’m studying computer science and statistics and
                building software with Technify. I enjoy using AI and technology to solve real-world problems.
              </p>
              <p>
                Outside of the classroom, you'll probably find me running, watching Duke sports, or reading a biography. I'm always curioius and excited
                about what's next.
              </p>
              <div className="education">
                <Image src="/duke-wordmark.png" alt="Duke University" width={58} height={58} className="education-logo" />
                <div>
                  <strong>Duke University</strong>
                  <span>B.S. Computer Science & Statistics</span>
                  <span>2026 – 2030 · Durham, NC</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container about-actions">
          <Link className="button primary" href="/#work">Explore my work <span aria-hidden="true">↗</span></Link>
          <Link className="resume-link" href="#contact">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
        <ContactSection index="01" />
      </main>
      <footer className="footer container">
        <span>© 2026 Chris Hill</span>
        <Link href="/">← Back to home</Link>
      </footer>
    </>
  );
}
