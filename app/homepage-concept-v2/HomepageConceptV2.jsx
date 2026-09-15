"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import MotionFieldV2 from "./MotionFieldV2";
import styles from "./homepage-concept-v2.module.css";

const cases = [
  { no:"01", type:"Restaurant", name:"Salt & Hawthorn", copy:"A coastal dining experience built around appetite, place and one-tap decisions.", image:"/assets/studio-v2/restaurant-case-v2.webp", href:"/salt-and-hawthorn/", className:"wide" },
  { no:"02", type:"Homes & trades", name:"Alder & Slate", copy:"Quiet confidence for high-consideration renovation work.", image:"/assets/studio-v2/renovation-case-v2.webp", href:"/alder-and-slate/", className:"tall" },
  { no:"03", type:"Hair & beauty", name:"Aster House", copy:"An editorial salon identity that earns attention before the booking.", image:"/assets/studio-v2/salon-case-v2.webp", href:"/aster-house-hair/", className:"standard" },
  { no:"04", type:"Dental", name:"Marlowe Dental", copy:"Calm, credible and designed to reduce first-visit hesitation.", image:"/assets/marlowe-dental/reception.webp", href:"/marlowe-dental/", className:"standard" },
  { no:"05", type:"Restaurant", name:"Morrow & Tide", copy:"A visual menu and story system for modern coastal hospitality.", image:"/assets/morrow-tide/hero.webp", href:"/morrow-and-tide/", className:"tall" },
  { no:"06", type:"Hospitality", name:"The Fox & Bramble", copy:"A warm digital front door for a country stay worth remembering.", image:"/assets/fox-bramble/hero.webp", href:"/the-fox-and-bramble/", className:"wide" },
];

const capabilities = [
  ["01", "Positioning", "Clarify the customer, the promise and the one action the website must make easier."],
  ["02", "Art direction", "Typography, image rhythm and visual systems that feel specific to the business."],
  ["03", "Responsive build", "A mobile-first experience, refined across screen sizes and shipped as a real website."],
  ["04", "Content systems", "Menus, services, proof and contact information structured for fast decisions."],
  ["05", "Motion & interaction", "Purposeful movement that creates memory without slowing the journey."],
  ["06", "Review & optimisation", "A focused second opinion on clarity, usability and search discoverability."],
];

const process = [
  ["01", "Diagnose", "We find the decision your current website makes difficult."],
  ["02", "Art direct", "We create a visual world that could only belong to your business."],
  ["03", "Build", "We turn it into a responsive, fast and practical customer journey."],
  ["04", "Launch", "We test, refine, deploy and leave you with a clear handover."],
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function HomepageConceptV2() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reveals = [...root.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if(entry.isIntersecting){ entry.target.dataset.visible="true"; observer.unobserve(entry.target); }
    }), { threshold:.12 });
    reveals.forEach((node)=>observer.observe(node));
    let frame=0;
    const update=()=>{
      frame=0;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      root.style.setProperty("--progress", max>0 ? (window.scrollY/max).toFixed(4) : 0);
      root.style.setProperty("--heroY", `${Math.min(window.scrollY*.12,120)}px`);
      root.style.setProperty("--artY", `${Math.min(window.scrollY*.06,70)}px`);
    };
    const onScroll=()=>{ if(!frame) frame=requestAnimationFrame(update); };
    const onPointer=(event)=>{
      const x=event.clientX/Math.max(window.innerWidth,1)-.5;
      const y=event.clientY/Math.max(window.innerHeight,1)-.5;
      root.style.setProperty("--mx",`${event.clientX}px`); root.style.setProperty("--my",`${event.clientY}px`);
      root.style.setProperty("--rx",`${(-y*4.5).toFixed(2)}deg`); root.style.setProperty("--ry",`${(x*6).toFixed(2)}deg`);
    };
    update();
    window.addEventListener("scroll",onScroll,{passive:true});
    window.addEventListener("pointermove",onPointer,{passive:true});
    return ()=>{ observer.disconnect(); window.removeEventListener("scroll",onScroll); window.removeEventListener("pointermove",onPointer); if(frame)cancelAnimationFrame(frame); };
  },[]);

  return (
    <main className={styles.site} ref={rootRef}>
      <div className={styles.progress} aria-hidden="true" />
      <div className={styles.cursor} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.brand} href="#top"><b>L<span>.</span></b><span>Linshi Studio<small>Independent digital studio</small></span></a>
        <nav aria-label="Homepage navigation"><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#process">Process</a></nav>
        <a className={styles.headerCta} href="mailto:hello@linshistudio.com?subject=New%20website%20project">Start a project <Arrow /></a>
      </header>

      <section className={styles.hero} id="top">
        <MotionFieldV2 className={styles.motion} />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.heroArt} aria-hidden="true">
          <Image src="/assets/studio-v3/linshi-glass-sculpture-v3.png" alt="" fill priority sizes="(max-width: 760px) 100vw, 68vw" />
          <span className={styles.artIndex}>Digital craft<br />in motion</span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow} data-reveal>Strategy · art direction · mobile-first build</p>
          <h1><span data-reveal>Websites</span><span data-reveal>people <em>feel</em></span><span data-reveal>before they read.</span></h1>
          <div className={styles.heroBottom} data-reveal>
            <p>Distinctive digital experiences for independent businesses that refuse to look ordinary.</p>
            <div><a className={styles.primary} href="#work">View selected work <Arrow /></a><a className={styles.textLink} href="mailto:hello@linshistudio.com">hello@linshistudio.com</a></div>
          </div>
        </div>
        <div className={styles.heroMeta}><span>Founder-led</span><span>Designed in context</span><span>Built & shipped</span><span>Scroll to enter ↓</span></div>
      </section>

      <section className={styles.statement}>
        <p className={styles.sectionLabel} data-reveal>00 / Our point of view</p>
        <h2 data-reveal>A website is not a brochure.<br /><em>It is the first experience of your business.</em></h2>
        <div className={styles.statementFoot} data-reveal><p>We combine brand thinking, editorial design, real customer journeys and responsive craft—so the business feels considered before anyone makes contact.</p><span>Clarity<br />Character<br />Confidence</span></div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionHead} data-reveal><p className={styles.sectionLabel}>01 / Selected work</p><h2>Six businesses.<br /><em>Six original worlds.</em></h2><p>A broader view of what Linshi Studio can design—across hospitality, homes, beauty and healthcare.</p></div>
        <div className={styles.caseGrid}>
          {cases.map((item)=>(
            <article className={`${styles.case} ${styles[item.className]}`} key={item.name} data-reveal>
              <a href={item.href} className={styles.caseImage}>
                <Image src={item.image} alt={`${item.name} website concept`} fill sizes="(max-width: 760px) 100vw, 55vw" />
                <span className={styles.caseNo}>{item.no}</span><span className={styles.caseOpen}>Open project <Arrow /></span>
              </a>
              <div className={styles.caseText}><p>{item.type}</p><h3>{item.name}</h3><span>{item.copy}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.proof}>
        <div className={styles.proofHeading} data-reveal><p className={styles.sectionLabel}>02 / Proof, not promises</p><h2>Designed down to<br /><em>the decision.</em></h2></div>
        <div className={styles.proofGallery}>
          <figure className={styles.proofLarge} data-reveal><Image src="/assets/alder-slate/kitchen.webp" alt="Luxury kitchen imagery used in a renovation website" fill sizes="(max-width: 760px) 100vw, 62vw" /><figcaption><b>01</b><span>Image direction</span><p>Photography selected and paced to communicate quality without over-explaining it.</p></figcaption></figure>
          <figure data-reveal><Image src="/assets/aster-house/natural-curls.webp" alt="Hair styling photography used in a beauty website" fill sizes="(max-width: 760px) 100vw, 38vw" /><figcaption><b>02</b><span>Brand character</span><p>A visual language that fits the customer—not a universal template.</p></figcaption></figure>
          <figure data-reveal><Image src="/assets/marlowe-dental/consultation.webp" alt="Dental consultation imagery used in a healthcare website" fill sizes="(max-width: 760px) 100vw, 38vw" /><figcaption><b>03</b><span>Trust details</span><p>The questions, reassurance and actions people need before they enquire.</p></figcaption></figure>
        </div>
        <div className={styles.proofStrip} data-reveal><span>Mobile hierarchy</span><span>Responsive layout</span><span>Content structure</span><span>Maps & contact</span><span>Deployment</span></div>
      </section>

      <section className={styles.capabilities} id="capabilities">
        <div className={styles.sectionHead} data-reveal><p className={styles.sectionLabel}>03 / Capabilities</p><h2>From first thought<br /><em>to live website.</em></h2></div>
        <div className={styles.capabilityList}>{capabilities.map(([no,title,copy])=><article key={no} data-reveal><span>{no}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}</div>
      </section>

      <section className={styles.process} id="process">
        <div className={styles.processLead} data-reveal><p className={styles.sectionLabel}>04 / How we work</p><h2>Small studio.<br /><em>Clear process.</em></h2><p>One accountable point of contact from the first diagnosis to the final handover.</p></div>
        <div className={styles.processGrid}>{process.map(([no,title,copy])=><article key={no} data-reveal><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className={styles.contact} id="contact">
        <MotionFieldV2 className={styles.contactMotion} />
        <p className={styles.sectionLabel} data-reveal>05 / Start something distinctive</p>
        <h2 data-reveal>Your business already<br />has a story. <em>Let&apos;s make it visible.</em></h2>
        <div className={styles.contactBottom} data-reveal><a href="mailto:hello@linshistudio.com?subject=New%20website%20project">Tell us about the project <Arrow /></a><p>hello@linshistudio.com<br />Instagram · @linshistudio</p></div>
      </section>

      <footer>
        <span>Linshi Studio © 2026</span>
        <span className={styles.footerLinks}>
          <a href="https://www.instagram.com/linshistudio/">Instagram</a>
          <a href="/privacy/">Privacy</a>
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
