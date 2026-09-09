"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import MotionField from "./MotionField";
import styles from "./homepage-concept.module.css";

const projects = [
  {
    number: "01",
    type: "Hospitality",
    name: "Salt & Hawthorn",
    line: "From a Maps result to a table worth finding.",
    image: "/assets/studio-v2/restaurant-case-v2.webp",
    href: "/salt-and-hawthorn/",
  },
  {
    number: "02",
    type: "Homes & trades",
    name: "Alder & Slate",
    line: "Make fine workmanship feel unmistakably credible.",
    image: "/assets/studio-v2/renovation-case-v2.webp",
    href: "/alder-and-slate/",
  },
  {
    number: "03",
    type: "Hair & beauty",
    name: "Aster House",
    line: "Show the taste before the appointment.",
    image: "/assets/studio-v2/salon-case-v2.webp",
    href: "/aster-house-hair/",
  },
];

const standards = [
  ["01", "Seen clearly", "The first screen explains the business in seconds, not paragraphs."],
  ["02", "Felt distinctly", "Typography, imagery and motion create a memory before the scroll ends."],
  ["03", "Acted on easily", "Every mobile journey arrives at one confident next step."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomepageConcept() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = [...root.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );
    reveals.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll", progress.toFixed(4));
      root.style.setProperty("--parallax", `${Math.min(window.scrollY * 0.09, 90)}px`);
      const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 1);
      root.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      root.style.setProperty("--hero-stage-y", `${Math.min(window.scrollY * -0.055, -0)}px`);
      root.style.setProperty("--hero-stage-scale", (1 - heroProgress * 0.065).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    const onPointer = (event) => {
      if (reduced) return;
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
      const x = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      const y = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
      root.style.setProperty("--tilt-x", `${(-y * 5.5).toFixed(2)}deg`);
      root.style.setProperty("--tilt-y", `${(x * 8).toFixed(2)}deg`);
      root.style.setProperty("--drift-x", `${(x * 18).toFixed(2)}px`);
      root.style.setProperty("--drift-y", `${(y * 12).toFixed(2)}px`);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className={styles.site} ref={rootRef}>
      <div className={styles.progress} aria-hidden="true" />
      <div className={styles.cursorLight} aria-hidden="true" />
      <div className={styles.cursorLens} aria-hidden="true" />

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Linshi Studio concept home">
          <span className={styles.mark}>L<span>.</span></span>
          <span><strong>Linshi Studio</strong><small>Independent digital studio</small></span>
        </a>
        <nav aria-label="Concept navigation">
          <a href="#work">Selected work</a>
          <a href="#standard">Standard</a>
          <a href="#contact">Start a project</a>
        </nav>
        <a className={styles.headerCta} href="mailto:hello@linshistudio.com?subject=Website%20project%20enquiry">
          Enquire <Arrow />
        </a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.motionField} aria-hidden="true">
          <MotionField className={styles.motionCanvas} />
          <div className={styles.motionVignette} />
        </div>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.kicker} data-reveal>Mobile-first websites for independent businesses</p>
          <h1 aria-label="Be remembered before they scroll away">
            <span data-reveal>Be remembered</span>
            <span data-reveal>before they</span>
            <span className={styles.accent} data-reveal>scroll away.</span>
          </h1>
          <div className={styles.heroLower} data-reveal>
            <p>
              Brand clarity, editorial design and frictionless enquiry journeys—built for the screen your customers actually use.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#work">Experience the work <Arrow /></a>
              <a className={styles.secondary} href="/website-review/">Annual review · £350</a>
            </div>
          </div>
        </div>

        <div className={styles.stage} aria-label="Three Linshi Studio website concepts">
          <a className={`${styles.frame} ${styles.frameBack}`} href="/alder-and-slate/">
            <Image src="/assets/studio-v2/renovation-case-v2.webp" alt="Alder and Slate website concept" fill priority sizes="(max-width: 720px) 76vw, 40vw" />
          </a>
          <a className={`${styles.frame} ${styles.frameMiddle}`} href="/aster-house-hair/">
            <Image src="/assets/studio-v2/salon-case-v2.webp" alt="Aster House website concept" fill priority sizes="(max-width: 720px) 76vw, 40vw" />
          </a>
          <a className={`${styles.frame} ${styles.frameFront}`} href="/salt-and-hawthorn/">
            <Image src="/assets/studio-v2/restaurant-case-v2.webp" alt="Salt and Hawthorn website concept" fill priority sizes="(max-width: 720px) 76vw, 40vw" />
            <span className={styles.frameLabel}><small>Featured experience</small><strong>Salt & Hawthorn</strong></span>
          </a>
          <span className={styles.orbit} aria-hidden="true">Scroll to explore · Linshi Studio · </span>
          <span className={styles.liveSignal} aria-hidden="true"><i /> Live motion · move your cursor</span>
        </div>

        <div className={styles.heroFoot}>
          <span>Founder-led</span>
          <span>Mobile first</span>
          <span>Built to convert</span>
          <span className={styles.scrollCue}>Scroll <i /></span>
        </div>
      </section>

      <section className={styles.manifesto}>
        <p className={styles.sectionNo} data-reveal>00 / Position</p>
        <p className={styles.manifestoText} data-reveal>
          Most local websites explain. <em>The best ones create a feeling, remove a doubt and make the next step obvious.</em>
        </p>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionIntro} data-reveal>
          <p className={styles.sectionNo}>01 / Selected work</p>
          <h2>Three businesses.<br /><em>Three distinct worlds.</em></h2>
          <p>No interchangeable templates. Each experience begins with the customer decision the business needs to make easier.</p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <article className={styles.project} data-reveal key={project.name}>
              <a className={styles.projectImage} href={project.href}>
                <Image src={project.image} alt={`${project.name} concept website`} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span className={styles.projectCounter}>{project.number}</span>
                <span className={styles.projectVisit}>Open experience <Arrow /></span>
              </a>
              <div className={styles.projectMeta}>
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <blockquote>{project.line}</blockquote>
              </div>
              {index === 0 && <span className={styles.featuredNote}>Featured case</span>}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.standard} id="standard">
        <div className={styles.sectionIntro} data-reveal>
          <p className={styles.sectionNo}>02 / The standard</p>
          <h2>Not decoration.<br /><em>Direction.</em></h2>
        </div>
        <div className={styles.standardList}>
          {standards.map(([number, title, copy]) => (
            <article data-reveal key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.contactGlow} aria-hidden="true" />
        <p className={styles.sectionNo} data-reveal>03 / Start a project</p>
        <h2 data-reveal>Your next website<br />should feel <em>inevitable.</em></h2>
        <p data-reveal>Tell us what customers currently cannot see, understand or do easily on their phone.</p>
        <a data-reveal href="mailto:hello@linshistudio.com?subject=Website%20project%20enquiry">
          <span>hello@linshistudio.com</span><Arrow />
        </a>
        <footer>
          <span>Linshi Studio © 2026</span>
          <span>Private homepage concept · not indexed</span>
        </footer>
      </section>
    </main>
  );
}
