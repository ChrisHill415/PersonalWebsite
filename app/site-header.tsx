"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SiteHeader({ about = false }: { about?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerTheme, setHeaderTheme] = useState("paper");
  useEffect(() => {
    if (about) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const themes: Record<string, string> = {
      work: "projects", skills: "skills", contact: "contact",
    };
    let frame = 0;
    const updateTheme = () => {
      frame = 0;
      const sampleY = (headerRef.current?.getBoundingClientRect().bottom ?? 88) + 32;
      const section = sections.find((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      });
      setHeaderTheme(section ? (themes[section.id] ?? "paper") : "paper");
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTheme);
    };
    updateTheme();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [about]);

  return (
    <header ref={headerRef} className="header container" data-theme={headerTheme}>
      <Link href="/" className="wordmark" aria-label="Chris Hill home">
        Chris Hill
      </Link>
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
        {["Projects", "About", "Experience", "Skills"].map((item) => (
          <Link
            key={item}
            href={item === "About" ? "/about" : `${about ? "/" : ""}#${item === "Projects" ? "work" : item.toLowerCase()}`}
            aria-current={about && item === "About" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
        <a
          href={about ? "/#contact" : "#contact"}
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
