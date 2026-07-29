import Image from "next/image";
import styles from "./aster-house-hair.module.css";

export const metadata = {
  title: "Aster House | Cut & Colour in Bath",
  description:
    "A fictional mobile-first website concept for an independent hair salon in Bath.",
  openGraph: {
    title: "Aster House | Cuts with character. Colour with restraint.",
    description: "A premium fictional independent salon website concept.",
    url: "https://linshi156217-bot.github.io/aster-house-hair/",
    siteName: "Aster House",
    type: "website",
    images: [
      {
        url: "https://linshi156217-bot.github.io/assets/aster-house/og.webp",
        width: 1200,
        height: 630,
        alt: "A warm contemporary independent hair salon",
      },
    ],
  },
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Bath+Somerset+hair+salon";

const services = [
  {
    group: "Cut",
    note: "Shape, movement and a finish you can repeat at home.",
    items: [
      ["Cut & finish", "60–75 min", "£68"],
      ["Restyle", "75–90 min", "£82"],
      ["Short cut", "45–60 min", "£52"],
      ["Fringe edit", "15 min", "£18"],
    ],
  },
  {
    group: "Colour",
    note: "All colour appointments begin with a considered consultation.",
    items: [
      ["Signature balayage", "from 3 hr", "£165"],
      ["Dimensional colour", "from 2.5 hr", "£138"],
      ["Gloss & tone", "75 min", "£72"],
      ["Root refresh", "from 90 min", "£78"],
    ],
  },
  {
    group: "Care",
    note: "Quiet additions that make good hair feel even better.",
    items: [
      ["Repair ritual", "+20 min", "£28"],
      ["Scalp reset", "+20 min", "£25"],
      ["Event styling", "60 min", "£65"],
    ],
  },
];

const visitDetails = [
  ["Consultations", "Complimentary colour consultations are available before booking."],
  ["Patch tests", "Required at least 48 hours before every first colour appointment."],
  ["Quiet appointments", "Tuesday mornings can be booked with minimal conversation and music."],
  ["Accessibility", "Step-free entrance, wide styling bay and an accessible ground-floor loo."],
  ["Products", "Professional colour and care chosen for performance, not shelf space."],
  ["Cancellations", "We ask for 48 hours’ notice so the appointment can be offered again."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Icon({ name }) {
  const path =
    name === "pin" ? (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ) : name === "phone" ? (
      <path d="M8.5 3.5 6.8 2.1a2 2 0 0 0-2.7.1L3 3.4c-2.4 2.6 2.2 8.8 5.1 11.7 2.9 2.9 9.1 7.5 11.7 5.1l1.2-1.1a2 2 0 0 0 .1-2.7l-1.4-1.7a2 2 0 0 0-2.6-.3l-1.8 1.3a2 2 0 0 1-2.5-.1l-4.2-4.2a2 2 0 0 1-.1-2.5l1.3-1.8a2 2 0 0 0-.3-2.6Z" />
    ) : (
      <>
        <path d="M5 7h14M5 12h14M5 17h14" />
      </>
    );
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}

function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <strong>Aster House</strong>
      <small>Cut &amp; colour · Bath</small>
    </span>
  );
}

export default function AsterHouseHairPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#ah-main">
        Skip to content
      </a>

      <div className={styles.demo}>
        Fictional salon concept · AI concept imagery · prices are illustrative
      </div>

      <header className={styles.header}>
        <a href="#ah-top" aria-label="Aster House home">
          <Wordmark />
        </a>
        <nav aria-label="Main navigation">
          <a href="#ah-work">Our work</a>
          <a href="#ah-services">Services</a>
          <a href="#ah-visit">Your visit</a>
          <a href="#ah-contact">Find us</a>
        </nav>
        <a className={styles.bookButton} href="#ah-contact">
          Book <Arrow />
        </a>
      </header>

      <main id="ah-main">
        <section className={styles.hero} id="ah-top">
          <Image
            src="/assets/aster-house/hero.webp"
            alt="Stylist finishing a client's brunette haircut in a warm independent salon"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p>Independent hair studio · Bath</p>
            <h1>
              Cuts with character.
              <br />
              <em>Colour with restraint.</em>
            </h1>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#ah-services">
                Explore services <Arrow />
              </a>
              <a className={styles.glass} href="#ah-contact">
                Plan your visit
              </a>
            </div>
          </div>
          <div className={styles.heroStatus}>
            <span>New colour clients welcome</span>
            <span>Late appointments Thu</span>
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>A small salon with time to look properly</p>
            <div className={styles.introGrid}>
              <h2>
                Hair that feels like
                <br />
                <span>you on a very good day.</span>
              </h2>
              <div>
                <p>
                  Aster House is imagined as a calm, independent salon for precise
                  cuts and dimensional colour—thoughtful without feeling formal.
                </p>
                <p>
                  We ask better questions, leave room for texture and make sure the
                  result still works on an ordinary Tuesday morning.
                </p>
              </div>
            </div>
            <div className={styles.introStrip}>
              <span>Consultation-led</span>
              <span>Texture-positive</span>
              <span>Quiet appointments</span>
              <span>Transparent pricing</span>
            </div>
          </div>
        </section>

        <section className={styles.work} id="ah-work">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.eyebrow}>Recent colour stories</p>
                <h2>Good from every angle.</h2>
              </div>
              <p>
                A visual portfolio gives a new client what Google reviews cannot:
                a clear sense of taste, finish and the kind of work the salon loves.
              </p>
            </div>
            <div className={styles.lookGrid}>
              <article>
                <div className={styles.lookImage}>
                  <Image
                    src="/assets/aster-house/balayage.webp"
                    alt="Concept portrait of dimensional honey blonde balayage"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <div className={styles.lookCopy}>
                  <span>01</span>
                  <div>
                    <h3>Soft dimension</h3>
                    <p>Honey balayage · lived-in root · long bob finish</p>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.lookImage}>
                  <Image
                    src="/assets/aster-house/copper-bob.webp"
                    alt="Concept portrait of a precise rich copper bob"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <div className={styles.lookCopy}>
                  <span>02</span>
                  <div>
                    <h3>Polished copper</h3>
                    <p>French bob · tonal copper · soft fringe</p>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.lookImage}>
                  <Image
                    src="/assets/aster-house/natural-curls.webp"
                    alt="Concept portrait of a shaped natural brunette curl pattern"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <div className={styles.lookCopy}>
                  <span>03</span>
                  <div>
                    <h3>Natural movement</h3>
                    <p>Curl-by-curl shape · soft layers · low-fuss finish</p>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.lookImage}>
                  <Image
                    src="/assets/aster-house/silver-crop.webp"
                    alt="Concept portrait of a softly textured silver short crop"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span>Concept imagery</span>
                </div>
                <div className={styles.lookCopy}>
                  <span>04</span>
                  <div>
                    <h3>Modern silver</h3>
                    <p>Soft crop · grey blending · natural texture</p>
                  </div>
                </div>
              </article>
            </div>
            <p className={styles.workNote}>
              In a real salon site, every image would be approved client work. The
              images above are clearly labelled concept material for this sample.
            </p>
          </div>
        </section>

        <section className={styles.services} id="ah-services">
          <div className={styles.shell}>
            <div className={styles.serviceIntro}>
              <p className={styles.eyebrow}>Services &amp; guide prices</p>
              <h2>Know what to book.<br />Know what it costs.</h2>
              <p>
                Clear prices remove one of the biggest reasons potential clients
                leave a social profile without making an appointment.
              </p>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((section) => (
                <section key={section.group}>
                  <header>
                    <h3>{section.group}</h3>
                    <p>{section.note}</p>
                  </header>
                  <ul>
                    {section.items.map(([name, time, price]) => (
                      <li key={name}>
                        <div>
                          <strong>{name}</strong>
                          <span>{time}</span>
                        </div>
                        <b>{price}</b>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className={styles.priceNote}>
              <p>
                Colour prices are a guide and include a finishing service. A
                consultation confirms timing and final price before booking.
              </p>
              <a href="#ah-contact">Book a consultation <Arrow /></a>
            </div>
          </div>
        </section>

        <section className={styles.philosophy}>
          <div className={styles.philosophyImage}>
            <Image
              src="/assets/aster-house/salon-detail.webp"
              alt="Concept image of a calm contemporary salon styling station"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          </div>
          <div className={styles.philosophyCopy}>
            <p className={styles.eyebrow}>The Aster approach</p>
            <blockquote>
              “Listen first.
              <br />
              Cut second.”
            </blockquote>
            <p>
              We work with your natural texture, your maintenance appetite and
              the way you actually wear your hair—not just the reference photo.
            </p>
            <div>
              <span>01 · A real consultation</span>
              <span>02 · A plan for today</span>
              <span>03 · A plan for the next visit</span>
            </div>
          </div>
        </section>

        <section className={styles.visit} id="ah-visit">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.eyebrow}>Before your appointment</p>
                <h2>The details clients look for.</h2>
              </div>
              <p>
                These practical answers turn a beautiful page into something
                useful for a person deciding where to book.
              </p>
            </div>
            <div className={styles.visitGrid}>
              {visitDetails.map(([title, detail], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.location} id="ah-contact">
          <div className={styles.locationMap} aria-hidden="true">
            <span className={styles.circleOne} />
            <span className={styles.circleTwo} />
            <span className={styles.locationDot}><Icon name="pin" /></span>
            <strong>Bath</strong>
          </div>
          <div className={styles.locationCopy}>
            <p className={styles.eyebrow}>Visit Aster House</p>
            <h2>Quietly tucked away.<br />Easy to find.</h2>
            <address>
              Walcot Quarter, Bath
              <small>Concept location · not a real address</small>
            </address>
            <div className={styles.hours}>
              <div><span>Tuesday–Wednesday</span><strong>9–6</strong></div>
              <div><span>Thursday</span><strong>10–8</strong></div>
              <div><span>Friday–Saturday</span><strong>9–5</strong></div>
              <div><span>Sunday–Monday</span><strong>Closed</strong></div>
            </div>
            <div className={styles.locationActions}>
              <a className={styles.primary} href="#ah-top">
                Book online <Arrow />
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
            </div>
            <p className={styles.demoNote}>
              A real version would link the first button to the salon’s existing
              Fresha, Treatwell or other booking platform.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Wordmark />
        <p>
          A fictional mobile-first concept for an independent salon found through
          Google Maps and social media.
        </p>
        <a href="#ah-top">Back to top <Arrow /></a>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href="#ah-services"><Icon name="menu" /><span>Services</span></a>
        <a className={styles.dockPrimary} href="#ah-contact"><span>Book online</span><Arrow /></a>
        <a href="#ah-contact"><Icon name="phone" /><span>Call</span></a>
      </nav>
    </div>
  );
}
