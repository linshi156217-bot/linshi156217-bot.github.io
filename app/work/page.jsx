import Image from "next/image";
import styles from "./work.module.css";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: "Linshi Studio | Distinctive mobile-first websites",
  description:
    "Distinctive mobile-first websites for independent restaurants, salons and local trades in the UK.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Linshi Studio | Make your next click impossible to forget",
    description:
      "Distinctive mobile-first websites for independent UK businesses.",
    url: "/",
    siteName: "Linshi Studio",
    type: "website",
    images: [
      {
        url: "/assets/studio-v2/hero-campaign-v2.webp",
        width: 1536,
        height: 1024,
        alt: "Linshi Studio brand campaign for restaurant, renovation and salon websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linshi Studio | Distinctive mobile-first websites",
    description:
      "Websites designed for the moment a customer decides whether to choose you.",
    images: ["/assets/studio-v2/hero-campaign-v2.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const instagramUrl = "https://www.instagram.com/designerlinshi/";
const facebookUrl =
  "https://www.facebook.com/profile.php?id=61592734760210";

const projects = [
  {
    number: "01",
    sector: "Restaurant / Hospitality",
    title: "Salt & Hawthorn",
    line: "From a Maps result to a table worth finding.",
    description:
      "A visitor-first restaurant concept with dishes, menu, opening details and directions arranged for a quick decision on a phone.",
    image: "/assets/studio-v2/restaurant-case-v2.webp",
    alt: "Moody editorial restaurant table by the North Yorkshire coast",
    href: "/salt-and-hawthorn/",
    theme: styles.projectBlue,
  },
  {
    number: "02",
    sector: "Homes / Local trades",
    title: "Alder & Slate",
    line: "Turn good workmanship into visible trust.",
    description:
      "A renovation concept that gives homeowners a clear standard of work, a useful service area and an uncomplicated route to enquire.",
    image: "/assets/studio-v2/renovation-case-v2.webp",
    alt: "Craftsperson installing dark timber cabinetry in a refined home",
    href: "/alder-and-slate/",
    theme: styles.projectIvory,
  },
  {
    number: "03",
    sector: "Hair / Beauty",
    title: "Aster House",
    line: "Show the taste before the appointment.",
    description:
      "An editorial salon concept that communicates atmosphere, work, services, price level and practical visit details before a client messages.",
    image: "/assets/studio-v2/salon-case-v2.webp",
    alt: "Refined contemporary hair salon with a sculptural colour portrait",
    href: "/aster-house-hair/",
    theme: styles.projectRose,
  },
];

const process = [
  {
    number: "01",
    title: "Find the decision",
    copy: "We identify what a customer still needs after Google Maps or social media has introduced the business.",
  },
  {
    number: "02",
    title: "Design mobile first",
    copy: "The phone experience is the real product. Larger screens are then composed with the same care.",
  },
  {
    number: "03",
    title: "Build with real detail",
    copy: "Approved services, images, prices, directions and contact routes replace vague template copy.",
  },
  {
    number: "04",
    title: "Connect and launch",
    copy: "We test the finished site, connect the business domain and leave a clear route for future changes.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Linshi Studio",
  url: "https://linshistudio.com",
  description:
    "Mobile-first website design for independent restaurants, salons and local trades in the UK.",
  sameAs: [instagramUrl, facebookUrl],
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Brand({ compact = false }) {
  return (
    <span className={`${styles.brand} ${compact ? styles.brandCompact : ""}`}>
      <span className={styles.brandMark} aria-hidden="true">
        L<span>.</span>
      </span>
      <span className={styles.brandName}>
        <strong>Linshi Studio</strong>
        <small>Independent web design</small>
      </span>
    </span>
  );
}

export default function WorkPage() {
  return (
    <main className={styles.site}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <header className={styles.header}>
        <a href="#top" aria-label="Linshi Studio home">
          <Brand compact />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className={styles.headerCta}
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Start a project <Arrow />
        </a>
      </header>

      <div id="content">
        <section className={styles.hero} id="top">
          <Image
            className={styles.heroImage}
            src="/assets/studio-v2/hero-campaign-v2.webp"
            alt="A restaurant, craft workshop and salon connected by a vivid blue digital frame"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroGrid} aria-hidden="true" />

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              Independent web studio · United Kingdom
            </p>
            <h1>
              Impossible
              <br />
              <em>to scroll past.</em>
            </h1>
            <p className={styles.heroLead}>
              Distinctive mobile-first websites for independent businesses that
              deserve to look as good online as they do in real life.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#work">
                View selected work <Arrow />
              </a>
              <a
                className={styles.ghostButton}
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <div className={styles.heroIndex}>
            <span>Mobile first</span>
            <span>Strategy + design + build</span>
            <span>Independent businesses</span>
          </div>
        </section>

        <section className={styles.signal} aria-label="Studio principles">
          <p>
            Found on Google. <span>Judged in seconds.</span> Remembered by
            design.
          </p>
          <div>
            <span>One-off build</span>
            <span>Two refinements</span>
            <span>Domain connected</span>
          </div>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>01 · Selected work</p>
            <h2 id="work-title">
              Three worlds.
              <br />
              <em>Three complete websites.</em>
            </h2>
            <p>
              These are original concept websites, not claimed client
              commissions. Open each one to experience the full mobile-first
              thinking—not just a pretty homepage.
            </p>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <article
                className={`${styles.project} ${project.theme}`}
                key={project.title}
              >
                <a
                  className={styles.projectVisual}
                  href={project.href}
                  aria-label={`View the complete ${project.title} website`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 58vw"
                  />
                  <span className={styles.projectNumber}>{project.number}</span>
                  <span className={styles.projectOpen}>
                    View full website <Arrow />
                  </span>
                </a>

                <div className={styles.projectCopy}>
                  <p className={styles.projectSector}>{project.sector}</p>
                  <h3>{project.title}</h3>
                  <blockquote>{project.line}</blockquote>
                  <p>{project.description}</p>
                  <a className={styles.projectLink} href={project.href}>
                    Enter the complete case <Arrow />
                  </a>
                  <small>Original concept · built by Linshi Studio</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.approach}
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className={styles.approachIntro}>
            <p className={styles.sectionLabel}>02 · The point of the work</p>
            <h2 id="approach-title">
              Beauty earns attention.
              <br />
              <em>Clarity earns the enquiry.</em>
            </h2>
          </div>
          <div className={styles.approachCopy}>
            <p>
              A local website does not need to become complicated software. It
              needs to answer the right questions, create confidence and make
              the next action effortless.
            </p>
            <p>
              That is why every page starts with the real customer journey:
              Maps, social profile, phone, decision.
            </p>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.processTitle}>
            <p className={styles.sectionLabel}>03 · A focused process</p>
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

        <section className={styles.promise}>
          <p className={styles.sectionLabel}>The standard</p>
          <blockquote>
            “Your own business,
            <br />
            <em>seen properly.</em>”
          </blockquote>
          <p>
            No generic demo dressed up as custom work. Real details, a clear
            visual point of view and a page built for the phone in your
            customer&apos;s hand.
          </p>
        </section>

        <section
          className={styles.contact}
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className={styles.contactIntro}>
            <p className={styles.sectionLabel}>04 · Start here</p>
            <h2 id="contact-title">
              Show us the business.
              <br />
              <em>We&apos;ll show you the possibility.</em>
            </h2>
            <p>
              Send the business name, town and current website or social page.
              That is enough for an honest first look.
            </p>

            <div className={styles.socialLinks}>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <strong>@designerlinshi</strong>
                <Arrow />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer">
                <span>Facebook</span>
                <strong>Shi Lin</strong>
                <Arrow />
              </a>
            </div>
          </div>

          <div className={styles.whatsappCard}>
            <div className={styles.whatsappTop}>
              <span className={styles.liveDot} />
              <p>WhatsApp · Real contact</p>
            </div>
            <a
              className={styles.qrFrame}
              href="/assets/studio-v2/whatsapp-qr.png"
              target="_blank"
              aria-label="Open the WhatsApp QR code at full size"
            >
              <Image
                src="/assets/studio-v2/whatsapp-qr.png"
                alt="WhatsApp QR code for Linshi"
                width={320}
                height={320}
              />
            </a>
            <div className={styles.whatsappCopy}>
              <span>Scan to add</span>
              <h3>Linshi on WhatsApp</h3>
              <p>
                Open your camera or WhatsApp scanner. Tap the code to view the
                full-size contact code.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div>
          <Brand />
          <p>
            Distinctive mobile-first websites for independent restaurants,
            salons and local trades.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#work">Selected work</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram <Arrow />
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            Facebook <Arrow />
          </a>
        </div>
        <small>
          © 2026 Linshi Studio · Concept work is clearly identified throughout.
        </small>
      </footer>

      <a
        className={styles.mobileCta}
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
      >
        Start a project <Arrow />
      </a>
    </main>
  );
}
