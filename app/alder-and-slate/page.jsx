import Image from "next/image";
import styles from "./alder-and-slate.module.css";

export const metadata = {
  title: "Alder & Slate | Considered Home Renovation in North Yorkshire",
  description:
    "A fictional mobile-first website concept for a premium home renovation company serving Harrogate and North Yorkshire.",
  openGraph: {
    title: "Alder & Slate | Built for weather. Finished for life.",
    description:
      "A premium fictional home renovation website concept for North Yorkshire.",
    url: "https://linshi156217-bot.github.io/alder-and-slate/",
    siteName: "Alder & Slate",
    type: "website",
    images: [
      {
        url: "https://linshi156217-bot.github.io/assets/alder-slate/og.webp",
        width: 1200,
        height: 630,
        alt: "Restored Yorkshire stone home with a natural slate roof",
      },
    ],
  },
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Harrogate+North+Yorkshire";

const services = [
  {
    number: "01",
    title: "Roofing",
    detail:
      "Natural slate, tile, leadwork and roofline repairs designed for northern weather.",
  },
  {
    number: "02",
    title: "Windows & doors",
    detail:
      "Carefully fitted timber and aluminium systems that respect the character of the house.",
  },
  {
    number: "03",
    title: "Landscapes",
    detail:
      "Stone terraces, paths, walls and planting that make the outside feel properly finished.",
  },
  {
    number: "04",
    title: "Kitchens & bathrooms",
    detail:
      "One accountable team from first survey to final detail, with a clear programme of work.",
  },
];

const process = [
  ["Survey", "We visit, listen and inspect before suggesting a solution."],
  ["Scope", "You receive a written scope, sensible allowances and a clear programme."],
  ["Build", "A named lead keeps the work moving and your home protected."],
  ["Handover", "We walk every detail with you and leave the care information behind."],
];

function Icon({ name }) {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
    phone: (
      <path d="M8.5 3.5 6.8 2.1a2 2 0 0 0-2.7.1L3 3.4c-2.4 2.6 2.2 8.8 5.1 11.7 2.9 2.9 9.1 7.5 11.7 5.1l1.2-1.1a2 2 0 0 0 .1-2.7l-1.4-1.7a2 2 0 0 0-2.6-.3l-1.8 1.3a2 2 0 0 1-2.5-.1l-4.2-4.2a2 2 0 0 1-.1-2.5l1.3-1.8a2 2 0 0 0-.3-2.6Z" />
    ),
    measure: (
      <>
        <path d="M4 18 18 4l2 2L6 20H4v-2Z" />
        <path d="m13 7 4 4M10 10l2 2M7 13l2 2" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Mark() {
  return (
    <span className={styles.mark}>
      <span>A</span>
      <i />
      <span>S</span>
    </span>
  );
}

export default function AlderAndSlatePage() {
  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#as-main">
        Skip to content
      </a>

      <div className={styles.demo}>
        Fictional concept · AI concept imagery · not a real contractor
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#as-top" aria-label="Alder and Slate home">
          <Mark />
          <span>
            <strong>Alder &amp; Slate</strong>
            <small>Homes · North Yorkshire</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#as-services">Services</a>
          <a href="#as-work">Selected work</a>
          <a href="#as-process">Process</a>
          <a href="#as-contact">Contact</a>
        </nav>
        <a className={styles.headerCta} href="#as-contact">
          Book a survey <Icon name="arrow" />
        </a>
      </header>

      <main id="as-main">
        <section className={styles.hero} id="as-top">
          <Image
            src="/assets/alder-slate/hero.webp"
            alt="Restored Yorkshire stone home with a natural slate roof after rain"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <p>Roofing · Renovation · Landscape</p>
            <h1>
              Built for weather.
              <br />
              <em>Finished for life.</em>
            </h1>
            <div className={styles.heroLower}>
              <p>
                Considered work for character homes across Harrogate and North
                Yorkshire—planned clearly, built carefully and properly finished.
              </p>
              <div>
                <a className={styles.primaryButton} href="#as-contact">
                  Arrange a free survey <Icon name="arrow" />
                </a>
                <a className={styles.textLink} href="#as-work">
                  See our approach
                </a>
              </div>
            </div>
          </div>
          <div className={styles.heroProof}>
            <span>Written scope</span>
            <span>Named project lead</span>
            <span>Workmanship guarantee</span>
          </div>
        </section>

        <section className={styles.statement}>
          <div className={styles.shell}>
            <p className={styles.kicker}>A home, not a building site</p>
            <div className={styles.statementGrid}>
              <h2>
                Good renovation should feel
                <br />
                <span>quietly inevitable.</span>
              </h2>
              <div>
                <p>
                  We bring the trades, materials and programme together so every
                  detail belongs to the same house.
                </p>
                <p>
                  No vague allowances. No disappearing between jobs. Just a clear
                  route from first survey to final handover.
                </p>
              </div>
            </div>
            <div className={styles.figures}>
              <div><strong>01</strong><span>team from survey to handover</span></div>
              <div><strong>48 hr</strong><span>response to new enquiries</span></div>
              <div><strong>15 yr</strong><span>illustrative workmanship cover</span></div>
            </div>
          </div>
        </section>

        <section className={styles.services} id="as-services">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.kicker}>What we take care of</p>
                <h2>One home.<br />One joined-up standard.</h2>
              </div>
              <p>
                A concise service page helps homeowners understand fit before
                they make contact—especially when arriving from Google Maps.
              </p>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article key={service.title}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                  <a href="#as-contact" aria-label={`Ask about ${service.title}`}>
                    Discuss this work <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.work} id="as-work">
          <div className={styles.shell}>
            <p className={styles.kicker}>Illustrative project stories</p>
            <div className={styles.projectGrid}>
              <article className={styles.projectLarge}>
                <div className={styles.projectImage}>
                  <Image
                    src="/assets/alder-slate/slate-roof.webp"
                    alt="Concept image showing new natural slate roof and leadwork"
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <div className={styles.projectCaption}>
                  <div>
                    <p>Harrogate · Roof renewal</p>
                    <h3>Slate, lead and a cleaner roofline.</h3>
                  </div>
                  <span>8 weeks</span>
                </div>
              </article>
              <article className={styles.projectSmall}>
                <div className={styles.projectImage}>
                  <Image
                    src="/assets/alder-slate/garden.webp"
                    alt="Concept image showing a completed Yorkshire garden terrace"
                    fill
                    sizes="(max-width: 800px) 100vw, 40vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <div className={styles.projectCaption}>
                  <div>
                    <p>Ilkley · Garden room &amp; terrace</p>
                    <h3>More house, more garden, one material story.</h3>
                  </div>
                  <span>12 weeks</span>
                </div>
              </article>
            </div>
            <div className={styles.moreProjects}>
              <article>
                <div>
                  <Image
                    src="/assets/alder-slate/joinery.webp"
                    alt="Concept image of restored timber door and heritage-style window"
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <p>Harrogate · Heritage joinery</p>
                <h3>A warmer welcome, fitted to the millimetre.</h3>
              </article>
              <article>
                <div>
                  <Image
                    src="/assets/alder-slate/kitchen.webp"
                    alt="Concept image of an oak kitchen in a Yorkshire stone house"
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <p>Ripon · Kitchen renewal</p>
                <h3>New joinery, old stone, one calm room.</h3>
              </article>
              <article>
                <div>
                  <Image
                    src="/assets/alder-slate/bathroom.webp"
                    alt="Concept image of a limestone bathroom with oak and brass details"
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <p>Ilkley · Bathroom</p>
                <h3>Stone, oak and a quieter start to the day.</h3>
              </article>
            </div>
            <p className={styles.projectNote}>
              For a real contractor, this section would use verified projects,
              real locations and approved customer details—not generated imagery.
            </p>
          </div>
        </section>

        <section className={styles.process} id="as-process">
          <div className={styles.shell}>
            <div className={styles.processIntro}>
              <p className={styles.kicker}>A calmer way to build</p>
              <h2>Know what happens next.</h2>
              <p>
                Homeowners do not only buy the finished result. They buy confidence
                in the weeks between the first call and the final clean.
              </p>
            </div>
            <ol>
              {process.map(([title, detail], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.area}>
          <div className={styles.areaGraphic} aria-hidden="true">
            <span className={styles.ringOne} />
            <span className={styles.ringTwo} />
            <span className={styles.mapDot}><Icon name="pin" /></span>
            <p>Harrogate</p>
          </div>
          <div className={styles.areaCopy}>
            <p className={styles.kicker}>Where we work</p>
            <h2>Close enough to stay accountable.</h2>
            <p>
              An illustrative 30-mile working area around Harrogate, including
              Knaresborough, Ripon, Ilkley, Wetherby and the surrounding villages.
            </p>
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              View the area on Google Maps <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className={styles.contact} id="as-contact">
          <div className={styles.contactCard}>
            <div>
              <p className={styles.kicker}>Start with the house</p>
              <h2>Tell us what needs to change.</h2>
              <p>
                A real version would send the enquiry to the merchant. This
                concept keeps the form intentionally inactive.
              </p>
            </div>
            <div className={styles.contactActions}>
              <a className={styles.primaryButton} href="#as-top">
                Request a survey <Icon name="measure" />
              </a>
              <a className={styles.secondaryButton} href="#as-top">
                Call the team <Icon name="phone" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <a className={styles.brand} href="#as-top">
            <Mark />
            <span>
              <strong>Alder &amp; Slate</strong>
              <small>Concept only · North Yorkshire</small>
            </span>
          </a>
          <p>
            A fictional mobile-first concept showing how a residential contractor
            can turn Google Maps visitors into informed enquiries.
          </p>
        </div>
        <span>AI concept imagery · not evidence of completed work</span>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href="#as-services"><Icon name="measure" /><span>Services</span></a>
        <a className={styles.dockPrimary} href="#as-contact"><Icon name="arrow" /><span>Free survey</span></a>
        <a href="#as-contact"><Icon name="phone" /><span>Call</span></a>
      </nav>
    </div>
  );
}
