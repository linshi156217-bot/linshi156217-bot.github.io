"use client";

import { useState } from "react";
import styles from "./contact-launcher.module.css";
import { whatsappUrl } from "./contact-links";

const emailUrl =
  "mailto:hello@linshistudio.com?subject=Website%20or%20visibility%20enquiry";
export default function ContactLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={styles.launcher} aria-label="Project enquiry options">
      {isOpen && (
        <div className={styles.panel} id="project-contact-options">
          <p className={styles.eyebrow}>Contact Linshi Studio</p>
          <h2>How can we help?</h2>
          <p className={styles.intro}>
            Send the current website or social link. We will reply with the
            most useful next step.
          </p>
          <a className={styles.whatsapp} href={whatsappUrl} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
            <small>Fastest direct message</small>
          </a>
          <a className={styles.email} href={emailUrl}>
            <span>Email the studio</span>
            <small>hello@linshistudio.com</small>
          </a>
          <a className={styles.brief} href="/work/#project-brief">
            <span>Leave a project brief</span>
            <small>Website, repair or visibility work</small>
          </a>
          <p className={styles.note}>No bot. Your message goes directly to Linshi Studio.</p>
        </div>
      )}
      <button
        className={styles.trigger}
        type="button"
        aria-expanded={isOpen}
        aria-controls="project-contact-options"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.triggerDot} aria-hidden="true" />
        {isOpen ? "Close contact" : "Contact Linshi Studio"}
        <span aria-hidden="true">{isOpen ? "×" : "↗"}</span>
      </button>
    </aside>
  );
}
