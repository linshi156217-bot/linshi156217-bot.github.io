import Image from "next/image";
import styles from "./work.module.css";

export const metadata = {
  metadataBase: new URL("https://linshi156217-bot.github.io"),
  title: "Linshi Studio | Mobile-first websites for independent businesses",
  description:
    "Thoughtful, mobile-first websites for UK restaurants, salons and local trades. One-off builds, clear pricing and a free first-screen concept.",
  alternates: {
    canonical: "/work/",
  },
  openGraph: {
    title: "Linshi Studio | Make the next click feel like the right choice",
    description:
      "Mobile-first websites for independent UK businesses, designed around the details customers need before they call, visit or enquire.",
    url: "/work/",
    siteName: "Linshi Studio",
    type: "website",
    images: [
      {
        url: "/social/linshi-avatar-v2.png",
        width: 1024,
        height: 1024,
        alt: "Linshi Studio mobile-first web design",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Linshi Studio | Mobile-first websites for local businesses",
    description:
      "Focused websites for the moment a customer looks your business up.",
    images: ["/social/linshi-avatar-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const instagramUrl = "https://www.instagram.com/designerlinshi/";

const projects = [
  {
    number: "01",
    sector: "Restaurant & hospitality",
    title: "Salt & Hawthorn",
    location: "Whitby concept",
    description:
      "A visitor-first restaurant site that turns a Google Maps click into a confident decision with dishes, menu, opening hours and directions.",
    image: "/assets/hero-exterior.webp",
    alt: "Salt and Hawthorn coastal restaurant website concept",
    href: "/salt-and-hawthorn/",
    className: styles.restaurant,
    details: ["Menu at a glance", "Visitor details", "Maps, call & directions"],
  },
  {
    number: "02",
    sector: "Homes & local trades",
    title: "Alder & Slate",
    location: "North Yorkshire concept",
    description:
      "A calm, trust-led renovation portfolio that shows the standard of the work, the service area and the easiest route to an enquiry.",
    image: "/assets/alder-slate/hero.webp",
    alt: "Alder and Slate home renovation website concept",
    href: "/alder-and-slate/",
    className: styles.trades,
    details: ["Project gallery", "Services & service area", "Simple enquiry route"],
  },
  {
    number: "03",
    sector: "Hair & beauty",
    title: "Aster House",
    location: "Bath concept",
    description:
      "An editorial salon experience that helps a new client understand the look, services, price level and location before getting in touch.",
    image: "/assets/aster-house/hero.webp",
    alt: "Aster House hair salon website concept",
    href: "/aster-house-hair/",
    className: styles.beauty,
    details: ["Work & atmosphere", "Service guide", "Mobile contact actions"],
  },
];

const gaps = [
  {
    number: "01",
    title: "Found on Google",
    copy: "A customer finds the business on Maps, Instagram or Facebook and wants a little more certainty.",
  },
  {
    number: "02",
    title: "Judged on mobile",
    copy: "They open the website on a phone. Slow pages, tiny text or missing information quietly create doubt.",
  },
  {
    number: "03",
    title: "Ready to decide",
    copy: "A focused page gives them the details and confidence to call, visit, message or request a quote.",
  },
];

const inclusions = [
  "A mobile-first design shaped around your customers",
  "Real business information, services and approved imagery",
  "Clear contact, directions and social links",
  "Copy editing for a more confident, natural presentation",
  "Two focused rounds of refinements",
  "Domain connection, launch and handover",
];

const process = [
  {
    number: "01",
    title: "A useful first look",
    copy: "Send the business name, town and current website or social page. I will create a focused first-screen direction when the project is a good fit.",
  },
  {
    number: "02",
    title: "Content with a purpose",
    copy: "We confirm the services, practical details, preferred imagery and the action the website should make easiest.",
  },
  {
    number: "03",
    title: "Design and refinement",
    copy: "I build the real mobile page first, then adapt it for larger screens and include two rounds of changes.",
  },
  {
    number: "04",
    title: "Published properly",
    copy: "The finished website is tested, connected to the business domain and launched with a straightforward handover.",
  },
];

const faqs = [
  {
    question: "Is the first-screen concept really free?",
    answer:
      "Yes, for a small number of suitable independent businesses. It is a focused visual direction, not a complete free website, and there is no obligation to continue.",
  },
  {
    question: "Do I need to replace my domain?",
    answer:
      "Usually not. Your existing domain can point to the new website. If you do not have one, I can help connect a suitable domain registered in your name.",
  },
  {
    question: "Will I have to pay you every month?",
    answer:
      "There is no compulsory monthly maintenance package from me. A domain normally renews yearly, and optional future updates are only charged when requested.",
  },
  {
    question: "Can customers book or pay through the site?",
    answer:
      "The focused service is built around presentation, menus, services, directions and enquiries. Existing third-party booking links can be connected; more complex booking or payment systems are quoted separately.",
  },
  {
    question: "Are the websites shown here real clients?",
    answer:
      "They are clearly labelled original concepts, created to demonstrate the quality and thinking I can adapt to a real business. I do not present concept work as a paid client commission.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Linshi Studio",
  url: "https://linshi156217-bot.github.io/work/",
  description:
    "Mobile-first website design for independent restaurants, salons and local trades in the UK.",
  sameAs: [instagramUrl],
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  priceRange: "£650–£1,500",
};

function Brand() {
  return (
    <span className={styles.brand}>
      <span className={styles.mark}>L</span>
      <span className={styles.brandCopy}>
        <strong>Linshi</strong>
        <small>Independent web studio</small>
      </span>
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>

      <header className={styles.siteHeader}>
        <a href="#top" aria-label="Linshi Studio home">
          <Brand />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#service">Service</a>
          <a href="#process">Process</a>
        </nav>
        <a
          className={styles.headerAction}
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Request a concept <Arrow />
        </a>
      </header>

      <div id="main-content">
        <section className={styles.hero} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Mobile-first websites · Independent UK businesses
            </p>
            <h1>
              Look established
              <br />
              <em>before they arrive.</em>
            </h1>
            <p className={styles.heroLead}>
              Thoughtful websites for the moment a customer looks you up —
              designed around the details that help them choose, call, visit or
              enquire.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryAction}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Request a free first screen <Arrow />
              </a>
              <a className={styles.textAction} href="#work">
                Explore the work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul className={styles.heroProof} aria-label="Service highlights">
              <li>Mobile first</li>
              <li>One-off build</li>
              <li>Two refinements</li>
              <li>Published for you</li>
            </ul>
          </div>

          <div className={styles.deviceStage} aria-label="Three website previews">
            {projects.map((project, index) => (
              <a
                className={`${styles.device} ${styles[`device${index + 1}`]}`}
                href={project.href}
                key={project.title}
                aria-label={`Open ${project.title} website concept`}
              >
                <span className={styles.deviceBar}>
                  <i />
                  <span>{project.title}</span>
                </span>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="(max-width: 760px) 72vw, 25vw"
                />
                <span className={styles.deviceLabel}>{project.sector}</span>
              </a>
            ))}
          </div>

          <a className={styles.heroScroll} href="#gap">
            Why this matters <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className={styles.gap} id="gap" aria-labelledby="gap-title">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>The decision after discovery</p>
            <h2 id="gap-title">
              Google helps them find you.
              <br />
              <em>Your website helps them choose you.</em>
            </h2>
          </div>
          <div className={styles.gapGrid}>
            {gaps.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-title">
          <div className={styles.workHeading}>
            <p className={styles.sectionLabel}>Selected concepts</p>
            <h2 id="work-title">
              Three businesses.
              <br />
              <em>One clear standard.</em>
            </h2>
            <p>
              Each concept is an original demonstration, built to show the
              quality, clarity and mobile experience I can adapt to a real
              independent business.
            </p>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <article
                className={`${styles.project} ${project.className}`}
                key={project.title}
              >
                <a
                  className={styles.projectImage}
                  href={project.href}
                  aria-label={`Open the ${project.title} website concept`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 62vw"
                  />
                  <span className={styles.projectNumber}>{project.number}</span>
                  <span className={styles.openTag}>
                    Open website <Arrow />
                  </span>
                </a>
                <div className={styles.projectCopy}>
                  <div className={styles.projectMeta}>
                    <span>{project.sector}</span>
                    <span>{project.location}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <a className={styles.projectLink} href={project.href}>
                    Explore this concept <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.service}
          id="service"
          aria-labelledby="service-title"
        >
          <div className={styles.serviceHeading}>
            <p className={styles.sectionLabel}>A focused website service</p>
            <h2 id="service-title">
              Enough website.
              <br />
              <em>None of the theatre.</em>
            </h2>
            <p>
              The goal is a polished, useful public website — not a complicated
              system your business never asked for.
            </p>
          </div>

          <div className={styles.offerCard}>
            <div className={styles.offerTop}>
              <div>
                <span>Typical one-off investment</span>
                <strong>£650–£1,500</strong>
              </div>
              <p>
                Final price depends on the number of pages, content and any
                additional features.
              </p>
            </div>
            <div className={styles.inclusions}>
              <p>Every focused build includes</p>
              <ul>
                {inclusions.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.offerNote}>
              <p>
                No compulsory monthly maintenance package from me. Domain
                renewal and any optional third-party service are kept clear
                before the project begins.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Check whether your business is a fit <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className={styles.process}
          id="process"
          aria-labelledby="process-title"
        >
          <div className={styles.processHeading}>
            <p className={styles.sectionLabel}>How it works</p>
            <h2 id="process-title">
              From first look
              <br />
              <em>to public link.</em>
            </h2>
          </div>
          <div className={styles.processList}>
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.brief} aria-labelledby="brief-title">
          <p className={styles.sectionLabel}>Start with three details</p>
          <h2 id="brief-title">A business name. A town. A current link.</h2>
          <p>
            That is enough for an honest first look. If a focused rebuild would
            not improve the customer experience, I will say so.
          </p>
          <div className={styles.briefExample} aria-label="Example message">
            <span>Example message</span>
            <p>
              “Hi — the business is [name] in [town]. This is our current
              website or social page: [link].”
            </p>
          </div>
          <a
            className={styles.darkAction}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Message Linshi on Instagram <Arrow />
          </a>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div>
            <p className={styles.sectionLabel}>Straight answers</p>
            <h2 id="faq-title">Before you ask.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <p className={styles.sectionLabel}>One useful next step</p>
          <h2>
            See what your first
            <br />
            <em>mobile screen could become.</em>
          </h2>
          <p>
            Send the business name and current link. I will review it before
            suggesting anything.
          </p>
          <a
            className={styles.lightAction}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Request a free first screen <Arrow />
          </a>
        </section>
      </div>

      <footer className={styles.footer}>
        <Brand />
        <p>Mobile-first websites for independent businesses.</p>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          @designerlinshi <Arrow />
        </a>
        <small>
          Portfolio concepts are illustrative demonstrations, not claimed
          client commissions.
        </small>
      </footer>

      <a
        className={styles.mobileCta}
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
      >
        Request a free first screen <Arrow />
      </a>
    </main>
  );
}
