import Image from "next/image";
import styles from "./work.module.css";

export const metadata = {
  title: "Linshi | Mobile-first websites for independent businesses",
  description:
    "A focused portfolio of mobile-first website concepts for UK restaurants, local trades and hair and beauty businesses.",
  robots: {
    index: false,
    follow: false,
  },
};

const work = [
  {
    number: "01",
    sector: "Restaurant & hospitality",
    title: "Salt & Hawthorn",
    location: "Whitby concept",
    description:
      "A visitor-first restaurant page that puts food, menu, opening hours and directions before everything else.",
    image: "/assets/hero-exterior.webp",
    alt: "Salt and Hawthorn restaurant website concept on the North Yorkshire coast",
    href: "/salt-and-hawthorn/",
    className: styles.restaurant,
  },
  {
    number: "02",
    sector: "Homes & local trades",
    title: "Alder & Slate",
    location: "North Yorkshire concept",
    description:
      "A calm renovation portfolio built around completed work, service area, trust and an easy first enquiry.",
    image: "/assets/alder-slate/hero.webp",
    alt: "Alder and Slate home renovation website concept",
    href: "/alder-and-slate/",
    className: styles.trades,
  },
  {
    number: "03",
    sector: "Hair & beauty",
    title: "Aster House",
    location: "Bath concept",
    description:
      "An editorial salon page that helps clients understand the look, services, price level and route before booking.",
    image: "/assets/aster-house/hero.webp",
    alt: "Aster House hair salon website concept",
    href: "/aster-house-hair/",
    className: styles.beauty,
  },
];

const outcomes = [
  ["01", "Mobile first", "Designed for the phone screen people actually use."],
  ["02", "Useful first", "Menu, services, directions and contact stay easy to find."],
  ["03", "Built & launched", "A finished public website, not just a design file."],
];

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Portfolio navigation">
        <a className={styles.brand} href="#top" aria-label="Linshi portfolio home">
          <span>L</span>
          <strong>Linshi</strong>
        </a>
        <a className={styles.navAction} href="#work">
          View work
        </a>
      </nav>

      <header className={styles.hero} id="top">
        <div className={styles.heroEyebrow}>
          <span />
          Independent web designer
        </div>
        <h1>
          Websites local businesses
          <br />
          <em>feel proud to share.</em>
        </h1>
        <div className={styles.heroLower}>
          <p>
            I design focused, mobile-first websites for UK restaurants, boutique
            stays, local trades and salons — the pages visitors open after
            finding a business on Google or social media.
          </p>
          <a className={styles.primaryAction} href="#work">
            See the concepts <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.heroNote}>
          <span>Mobile-first</span>
          <span>One-off build</span>
          <span>Published for you</span>
        </div>
      </header>

      <section className={styles.proof} aria-labelledby="proof-title">
        <p className={styles.sectionLabel}>What the work is designed to do</p>
        <h2 id="proof-title">
          Make the next decision
          <br />
          <em>feel simple.</em>
        </h2>
        <div className={styles.outcomes}>
          {outcomes.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className={styles.workHeading}>
          <p className={styles.sectionLabel}>Selected concepts</p>
          <h2 id="work-title">Three different businesses. One clear standard.</h2>
          <p>
            Each concept is an original demonstration, created to show the
            design direction and mobile experience I can adapt to a real
            business.
          </p>
        </div>

        <div className={styles.workList}>
          {work.map((project) => (
            <article className={`${styles.project} ${project.className}`} key={project.title}>
              <a
                className={styles.projectImage}
                href={project.href}
                aria-label={`Open the ${project.title} website concept`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 64vw"
                />
                <span className={styles.projectNumber}>{project.number}</span>
                <span className={styles.viewTag}>Open website ↗</span>
              </a>
              <div className={styles.projectCopy}>
                <div>
                  <p>{project.sector}</p>
                  <span>{project.location}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.href}>Explore this concept <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div>
          <p className={styles.sectionLabel}>A focused service</p>
          <h2 id="process-title">
            The useful page
            <br />
            your visitors are missing.
          </h2>
        </div>
        <div className={styles.processCopy}>
          <p>
            I start with the information and images a business already has,
            shape them into a clearer mobile experience, include two rounds of
            refinements and publish the finished site.
          </p>
          <ul>
            <li><span>01</span> Understand the business and its visitors</li>
            <li><span>02</span> Design the mobile page and real content</li>
            <li><span>03</span> Refine, connect the domain and launch</li>
          </ul>
        </div>
      </section>

      <section className={styles.contact}>
        <p className={styles.sectionLabel}>Have a business in mind?</p>
        <h2>
          I can show you what its
          <br />
          <em>first mobile screen could become.</em>
        </h2>
        <p>
          Message me with the business name and current website. I will tell you
          honestly whether a focused rebuild would help.
        </p>
        <a
          className={styles.contactAction}
          href="https://www.instagram.com/designerlinshi/"
          target="_blank"
          rel="noreferrer"
        >
          Message Linshi on Instagram <span>↗</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <span>L</span>
          <strong>Linshi</strong>
        </div>
        <p>Mobile-first websites for independent businesses.</p>
        <small>
          Portfolio concepts are illustrative demonstrations, not claimed client
          commissions.
        </small>
      </footer>
    </main>
  );
}
