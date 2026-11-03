"use client";

import { useState } from "react";

export default function ContactSection({ index = "04" }: { index?: string }) {
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
    <section id="contact" className="contact container">
      <div className="eyebrow">{index} / WHAT’S NEXT?</div>
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
        <div className="contact-details">
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
          <a className="phone-link" href="tel:+16142711307">614-271-1307</a>
        </div>
      </div>
    </section>
  );
}
