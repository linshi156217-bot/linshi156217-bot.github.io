import Image from "next/image";
import styles from "./crail-harbour-gallery.module.css";

export const metadata = {
  title: "Crail Harbour Gallery & Tearoom | Unofficial Redesign Concept",
  description:
    "A mobile-first redesign concept for Crail Harbour Gallery & Tearoom, bringing the tearoom, art, visitor details and directions into one clear journey.",
  openGraph: {
    title: "Crail Harbour Gallery & Tearoom | Redesign Concept",
    description:
      "An unofficial mobile-first concept using the venue's public business information.",
    images: [
      {
        url: "/assets/crail-harbour/og.webp",
        width: 1200,
        height: 630,
        alt: "Concept image of a small stone gallery and tearoom overlooking Crail harbour",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const phoneDisplay = "01333 451896";
const phoneUrl = "tel:+441333451896";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Crail+Harbour+Gallery+%26+Tearoom%2C+Shoregate%2C+Crail%2C+Fife+KY10+3SU";
const facebookUrl = "https://www.facebook.com/CrailHarbourGallery";
const instagramUrl =
  "https://www.instagram.com/explore/locations/288272469/crail-harbour-gallery-tearoom";

const iconPaths = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  cup: (
    <>
      <path d="M5 8h11v6.2A3.8 3.8 0 0 1 12.2 18H8.8A3.8 3.8 0 0 1 5 14.2V8Z" />
      <path d="M16 10h1.2a2.3 2.3 0 0 1 0 4.6H16M7 4.5c0 1 1 1.4 1 2.5M11 4.5c0 1 1 1.4 1 2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M6 5h12M6 12h12M6 19h12" />
      <circle cx="3" cy="5" r=".7" fill="currentColor" stroke="none" />
      <circle cx="3" cy="12" r=".7" fill="currentColor" stroke="none" />
      <circle cx="3" cy="19" r=".7" fill="currentColor" stroke="none" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18h1.3a1.7 1.7 0 0 0 1.4-2.7 1.7 1.7 0 0 1 1.4-2.7H18A3 3 0 0 0 21 12a9 9 0 0 0-9-9Z" />
      <circle cx="7.5" cy="9" r=".8" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7" r=".8" fill="currentColor" stroke="none" />
      <circle cx="6.7" cy="13" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  phone: (
    <path d="M8.2 3.8 6.6 2.2a1.9 1.9 0 0 0-2.7 0L2.7 3.4c-2.4 2.4 2.2 8.6 5 11.4 2.8 2.8 9 7.4 11.4 5l1.2-1.2a1.9 1.9 0 0 0 0-2.7l-1.6-1.6a1.9 1.9 0 0 0-2.5-.2l-1.7 1.3a2 2 0 0 1-2.4-.1l-4-4a2 2 0 0 1-.1-2.4l1.3-1.7a1.9 1.9 0 0 0-.1-2.4Z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  wave: (
    <path d="M3 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2M3 14c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2" />
  ),
};

function Icon({ name, size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Wordmark({ light = false }) {
  return (
    <span className={`${styles.wordmark} ${light ? styles.wordmarkLight : ""}`}>
      <span className={styles.mark} aria-hidden="true">
        <span>CH</span>
        <i />
      </span>
      <span className={styles.wordmarkText}>
        <strong>Crail Harbour</strong>
        <small>Gallery &amp; Tearoom</small>
      </span>
    </span>
  );
}

const quickFacts = [
  {
    icon: "clock",
    label: "Open seven days",
    detail: "Indoors, courtyard & takeaway",
  },
  {
    icon: "cup",
    label: "Tearoom",
    detail: "Fairtrade coffee, lunch & cakes",
  },
  {
    icon: "palette",
    label: "Local art",
    detail: "Originals, prints, cards & gifts",
  },
  {
    icon: "wave",
    label: "Harbour setting",
    detail: "Open views across the Firth of Forth",
  },
];

const menuGroups = [
  {
    number: "01",
    title: "Something warm",
    note: "Freshly ground Fairtrade coffee and speciality teas",
    items: [
      "Cappuccino, espresso, Americano, latte or mocha",
      "Fairtrade hot chocolate with whipped cream",
      "Breakfast tea or Earl Grey — a pot for one",
    ],
  },
  {
    number: "02",
    title: "A light lunch",
    note: "Served with dressed salad and sea-salt crisps",
    items: [
      "Luxury toasted panini with a choice of fillings",
      "Local dressed crab, when available",
      "Hot-smoked salmon or marinated herring with dill",
    ],
  },
  {
    number: "03",
    title: "One last thing",
    note: "The good reason to stay a little longer",
    items: [
      "Warm fruit or plain scone with jam and butter",
      "Handmade cakes with crème fraîche — see the blackboard",
      "Scottish shortbread and complimentary tablet",
    ],
  },
];

const visitDetails = [
  {
    icon: "pin",
    title: "Find the blue door",
    text: "Shoregate, Crail, Fife, Scotland KY10 3SU — on the road down to the harbour.",
  },
  {
    icon: "clock",
    title: "Open every day",
    text: "Indoor tearoom, sheltered courtyard and a full takeaway menu are available seven days.",
  },
  {
    icon: "phone",
    title: "No advance bookings",
    text: "Simply drop in. If you need to check something before setting off, call the tearoom directly.",
  },
  {
    icon: "menu",
    title: "Allergen note",
    text: "The current menu may contain traces of nuts. Please speak with the team before ordering.",
  },
];

export default function CrailHarbourGalleryPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <div className={styles.demoBar}>
        <strong>Unofficial redesign concept</strong>
        <span>Visual direction only — not the venue&apos;s official website</span>
      </div>

      <header className={styles.header}>
        <a href="#top" aria-label="Crail Harbour Gallery and Tearoom home">
          <Wordmark light />
        </a>
        <nav aria-label="Main navigation">
          <a href="#tearoom">Tearoom</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Plan your visit</a>
        </nav>
        <a
          className={styles.headerAction}
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Directions <Icon name="arrow" size={16} />
        </a>
      </header>

      <main id="main">
        <section className={styles.hero} id="top">
          <Image
            className={styles.heroImage}
            src="/assets/crail-harbour/hero.webp"
            alt="Concept view of a small stone gallery and tearoom above Crail harbour"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Shoregate · Crail · East Neuk of Fife</p>
            <h1>
              Art, coffee
              <br />
              <em>&amp; the sea.</em>
            </h1>
            <p className={styles.heroCopy}>
              A restored stone cellar, a sheltered courtyard and local Scottish
              art — just above Crail harbour.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#menu">
                See the tearoom menu <Icon name="arrow" size={17} />
              </a>
              <a
                className={styles.glassButton}
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={17} /> Find us
              </a>
            </div>
          </div>
          <div className={styles.heroStatus}>
            <span>
              <i />
              Open seven days
            </span>
            <span>No advance bookings</span>
          </div>
          <span className={styles.heroCaption}>Concept visual · not a venue photograph</span>
        </section>

        <section className={styles.factStrip} aria-label="At a glance">
          {quickFacts.map((fact) => (
            <article key={fact.label}>
              <Icon name={fact.icon} size={22} />
              <div>
                <h2>{fact.label}</h2>
                <p>{fact.detail}</p>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.story} id="tearoom">
          <div className={styles.storyCopy}>
            <p className={styles.sectionNumber}>01 · The tearoom</p>
            <p className={styles.kicker}>Inside a 17th-century fisherman&apos;s cottage</p>
            <h2>
              A room shaped
              <br />
              <em>by its history.</em>
            </h2>
            <p className={styles.lead}>
              Original stone walls, flagstone floors and time-worn beams make
              the tearoom feel inseparable from Crail.
            </p>
            <p>
              The cellars were carefully restored to reveal the building&apos;s
              old features. Today they hold an intimate tearoom, while the
              sheltered courtyard looks across the Firth of Forth towards the
              Isle of May.
            </p>
            <a href="#visit" className={styles.textLink}>
              Plan your visit <Icon name="arrow" size={16} />
            </a>
          </div>
          <figure className={styles.storyImage}>
            <Image
              src="/assets/crail-harbour/tearoom.webp"
              alt="Concept visual of an intimate stone-walled Scottish tearoom"
              fill
              sizes="(max-width: 799px) 100vw, 55vw"
            />
            <figcaption>Concept visual · the restored cellar tearoom</figcaption>
          </figure>
        </section>

        <section className={styles.foodSection} id="menu">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionNumber}>02 · Eat &amp; drink</p>
              <h2>
                Simple things,
                <br />
                <em>worth stopping for.</em>
              </h2>
            </div>
            <p>
              Freshly ground Fairtrade coffee, a light lunch, handmade cakes and
              warm scones — indoors, in the courtyard or to take away.
            </p>
          </div>

          <div className={styles.featureDishes}>
            <article className={styles.dishCard}>
              <figure>
                <Image
                  src="/assets/crail-harbour/scone.webp"
                  alt="Concept food visual of a warm fruit scone with jam, butter and tea"
                  fill
                  sizes="(max-width: 799px) 100vw, 50vw"
                />
                <figcaption>Concept food visual</figcaption>
              </figure>
              <div>
                <span>Afternoon favourite</span>
                <h3>Warm scone, jam &amp; butter</h3>
                <p>Fruit or plain, with a pot of Fairtrade tea.</p>
              </div>
            </article>
            <article className={styles.dishCard}>
              <figure>
                <Image
                  src="/assets/crail-harbour/panini.webp"
                  alt="Concept food visual of a toasted cheese and caramelised onion panini"
                  fill
                  sizes="(max-width: 799px) 100vw, 50vw"
                />
                <figcaption>Concept food visual</figcaption>
              </figure>
              <div>
                <span>Light lunch</span>
                <h3>Luxury toasted panini</h3>
                <p>With dressed seasonal salad and sea-salt crisps.</p>
              </div>
            </article>
          </div>

          <div className={styles.menuGrid}>
            {menuGroups.map((group) => (
              <article key={group.number}>
                <header>
                  <span>{group.number}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.note}</p>
                  </div>
                </header>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={styles.menuNote}>
            Menu wording is based on the venue&apos;s publicly listed offering.
            Availability and current prices should be confirmed with the team.
          </p>
        </section>

        <section className={styles.gallerySection} id="gallery">
          <figure className={styles.galleryImage}>
            <Image
              src="/assets/crail-harbour/gallery.webp"
              alt="Concept visual of Scottish coastal artwork displayed in a stone cellar gallery"
              fill
              loading="eager"
              sizes="(max-width: 799px) 100vw, 60vw"
            />
            <figcaption>Concept visual · local art in the restored cellar</figcaption>
          </figure>
          <div className={styles.galleryCopy}>
            <p className={styles.sectionNumber}>03 · The gallery</p>
            <p className={styles.kicker}>Work inspired by Scotland</p>
            <h2>
              See the coast
              <br />
              <em>through local eyes.</em>
            </h2>
            <p>
              The gallery is dedicated to work by resident local artist D S
              Mackie. Paintings, drawings, prints and mixed-media pieces take
              their inspiration from the landscapes, seascapes and gardens of
              Fife and Scotland.
            </p>
            <div className={styles.galleryDetails}>
              <span>Originals &amp; prints</span>
              <span>Handmade cards</span>
              <span>Crafts &amp; gifts</span>
            </div>
            <a
              className={styles.secondaryButton}
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              See recent updates <Icon name="arrow" size={16} />
            </a>
          </div>
        </section>

        <section className={styles.visitSection} id="visit">
          <div className={styles.visitHeading}>
            <p className={styles.sectionNumber}>04 · Before you set off</p>
            <h2>
              Everything useful,
              <br />
              <em>in one place.</em>
            </h2>
            <p>
              The details a visitor needs after finding the venue on Google
              Maps — presented before they have to search for them.
            </p>
          </div>

          <div className={styles.visitGrid}>
            {visitDetails.map((detail, index) => (
              <article key={detail.title}>
                <span className={styles.visitIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon name={detail.icon} size={23} />
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.locationSection}>
          <div className={styles.locationMap} aria-hidden="true">
            <div className={styles.mapGrid} />
            <span className={styles.coastline}>Firth of Forth</span>
            <span className={styles.mapDot}>
              <Icon name="pin" size={26} />
            </span>
            <span className={styles.coordinate}>56.2607° N · 2.6270° W</span>
          </div>
          <div className={styles.locationCopy}>
            <p className={styles.sectionNumber}>Find us in Crail</p>
            <h2>
              Down Shoregate,
              <br />
              <em>towards the harbour.</em>
            </h2>
            <address>
              Crail Harbour Gallery
              <br />
              Shoregate, Crail
              <br />
              Fife, Scotland KY10 3SU
            </address>
            <div className={styles.locationActions}>
              <a
                className={styles.primaryButton}
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={18} /> Open in Google Maps
              </a>
              <a className={styles.callButton} href={phoneUrl}>
                <Icon name="phone" size={18} /> {phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Wordmark light />
          <p>
            This is an unofficial redesign concept built from publicly listed
            venue information. Images are generated concept visuals and do not
            represent the actual venue.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href={phoneUrl}>Call</a>
          <a href="#menu">Menu</a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href={phoneUrl}>
          <Icon name="phone" size={19} />
          <span>Call</span>
        </a>
        <a href="#menu">
          <Icon name="menu" size={19} />
          <span>Menu</span>
        </a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          <Icon name="pin" size={19} />
          <span>Directions</span>
        </a>
      </nav>
    </div>
  );
}
