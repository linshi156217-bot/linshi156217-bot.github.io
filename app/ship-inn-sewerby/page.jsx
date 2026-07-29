import Image from "next/image";
import styles from "./ship-inn-sewerby.module.css";

export const metadata = {
  title: "The Ship Inn Sewerby | Unofficial Mobile Redesign Concept",
  description:
    "An unofficial mobile-first redesign concept for The Ship Inn Sewerby, placing the coast, food, facilities and directions first.",
  openGraph: {
    title: "The Ship Inn Sewerby | Mobile Redesign Concept",
    description:
      "A bright unofficial coastal pub concept using publicly listed venue information.",
    images: [
      {
        url: "/assets/ship-inn-sewerby/og.webp",
        width: 1200,
        height: 630,
        alt: "Concept image of a traditional English pub and beer garden overlooking the East Yorkshire coast",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const phoneDisplay = "01262 672374";
const phoneUrl = "tel:+441262672374";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=The+Ship+Inn%2C+Cliff+Road%2C+Sewerby%2C+Bridlington+YO15+1EW";
const officialUrl = "https://www.shipinnsewerby.co.uk/";
const officialMenuUrl = "https://www.shipinnsewerby.co.uk/menu";

const iconPaths = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  phone: (
    <path d="M8.2 3.8 6.6 2.2a1.9 1.9 0 0 0-2.7 0L2.7 3.4c-2.4 2.4 2.2 8.6 5 11.4 2.8 2.8 9 7.4 11.4 5l1.2-1.2a1.9 1.9 0 0 0 0-2.7l-1.6-1.6a1.9 1.9 0 0 0-2.5-.2l-1.7 1.3a2 2 0 0 1-2.4-.1l-4-4a2 2 0 0 1-.1-2.4l1.3-1.7a1.9 1.9 0 0 0-.1-2.4Z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  menu: <path d="M5 6h14M5 12h14M5 18h14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  wave: (
    <path d="M3 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2M3 14c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2" />
  ),
  dog: (
    <>
      <path d="M7 10c-2.4.4-3.8 2-3.8 4.5V19h3v-2h8v2h3v-6.2c0-2.7-2.1-4.8-4.8-4.8H9.5" />
      <path d="M8.5 10 6 6 3.5 8.5 7 12M16 10l2.5-3 2 2-2.3 3.2" />
    </>
  ),
  pint: (
    <>
      <path d="M6 3h10l-1 18H7L6 3Z" />
      <path d="M16 7h1.5a2.5 2.5 0 0 1 0 5H16M7 7h8" />
    </>
  ),
  car: (
    <>
      <path d="m5 11 1.5-4h11l1.5 4M4 11h16v6H4z" />
      <circle cx="7" cy="17" r="1.5" />
      <circle cx="17" cy="17" r="1.5" />
    </>
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
      strokeWidth="1.5"
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
      <span className={styles.flag} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>The Ship Inn</strong>
        <small>Sewerby · East Yorkshire</small>
      </span>
    </span>
  );
}

const facilities = [
  ["dog", "Dog friendly", "Four-legged visitors are welcome."],
  ["car", "Ample parking", "Easy arrival beside the pub."],
  ["pint", "Real ales", "Cask Marque approved and craft beer."],
  ["wave", "Clifftop garden", "Outdoor tables looking towards the bay."],
];

const openingHours = [
  ["Monday–Friday", "11am–11pm", "Food 12–8pm"],
  ["Saturday", "10am–11pm", "Food 12–8pm"],
  ["Sunday", "10am–10pm", "Food 12–5pm"],
];

export default function ShipInnSewerbyPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <div className={styles.demoBar}>
        <strong>Unofficial redesign concept</strong>
        <span>Public venue information · generated concept imagery</span>
      </div>

      <header className={styles.header}>
        <a href="#top" aria-label="The Ship Inn Sewerby home">
          <Wordmark light />
        </a>
        <nav aria-label="Main navigation">
          <a href="#food">Food</a>
          <a href="#garden">Beer garden</a>
          <a href="#visit">Plan your visit</a>
        </nav>
        <a
          className={styles.headerDirections}
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="pin" size={17} />
          <span>Directions</span>
        </a>
      </header>

      <main id="main">
        <section className={styles.hero} id="top">
          <Image
            className={styles.heroImage}
            src="/assets/ship-inn-sewerby/hero.webp"
            alt="Concept visual of a traditional English pub and beer garden on the East Yorkshire coast"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Sewerby · Bridlington Bay</p>
            <h1>
              The coast
              <br />
              <em>with the most.</em>
            </h1>
            <p>
              A traditional pub, a generous garden and East Yorkshire views
              stretching towards Flamborough Head.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#food">
                See the food <Icon name="arrow" size={17} />
              </a>
              <a className={styles.glassButton} href={phoneUrl}>
                <Icon name="phone" size={17} /> Call the pub
              </a>
            </div>
          </div>
          <span className={styles.conceptLabel}>
            Concept visual · not a venue photograph
          </span>
          <div className={styles.heroFoot}>
            <span>
              <Icon name="clock" size={16} /> Open seven days
            </span>
            <span>
              <Icon name="dog" size={17} /> Dogs &amp; children welcome
            </span>
            <span>
              <Icon name="car" size={17} /> Ample parking
            </span>
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.sectionMark}>
            <span>01</span>
            <p>At the edge</p>
          </div>
          <div className={styles.introCopy}>
            <p className={styles.kicker}>A proper coastal pub</p>
            <h2>
              Come for lunch.
              <br />
              <em>Stay for the view.</em>
            </h2>
            <p className={styles.lead}>
              The Ship Inn sits beside Sewerby Hall and Gardens, overlooking
              Flamborough Head and Bridlington Bay.
            </p>
            <p>
              It is known for cask ales, craft beers and its Easter and August
              Bank Holiday beer and music festivals. The garden runs towards
              the cliff top, making the setting part of the reason to visit.
            </p>
          </div>
        </section>

        <section className={styles.facilityStrip} aria-label="Pub facilities">
          {facilities.map(([icon, title, text]) => (
            <article key={title}>
              <Icon name={icon} size={23} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.food} id="food">
          <div className={styles.foodHeading}>
            <div>
              <p className={styles.sectionNumber}>02 · From the kitchen</p>
              <h2>
                East Coast
                <br />
                <em>on a plate.</em>
              </h2>
            </div>
            <p>
              Lunch, pub classics, seasonal specials and Sunday carvery—the
              choices visitors need, without forcing them through a PDF first.
            </p>
          </div>

          <div className={styles.foodFeature}>
            <figure>
              <Image
                src="/assets/ship-inn-sewerby/seabass.webp"
                alt="Concept food visual of pan-fried sea bass with tomato, tenderstem broccoli and salsa verde"
                fill
                loading="eager"
                sizes="(max-width: 799px) 100vw, 58vw"
              />
              <figcaption>Concept food visual</figcaption>
            </figure>
            <div>
              <span>Seasonal special</span>
              <h3>Pan-fried sea bass</h3>
              <p>
                Confit cherry tomatoes, tenderstem broccoli and salsa verde.
              </p>
            </div>
          </div>

          <div className={styles.menuCards}>
            <article>
              <span>01</span>
              <p>Sunday</p>
              <h3>Carvery</h3>
              <p>
                Roasted meats, Yorkshire puddings, seasonal vegetables and
                homemade gravy.
              </p>
            </article>
            <article>
              <span>02</span>
              <p>East Coast</p>
              <h3>Classics</h3>
              <p>
                Familiar pub favourites inspired by Yorkshire’s coast and
                countryside.
              </p>
            </article>
            <article>
              <span>03</span>
              <p>Beer garden</p>
              <h3>Favourites</h3>
              <p>
                Burgers, jacket potatoes and fish and chips for a relaxed table
                outside.
              </p>
            </article>
          </div>

          <div className={styles.menuLink}>
            <p>
              Menus change with availability. Check the current official
              selection before travelling.
            </p>
            <a href={officialMenuUrl} target="_blank" rel="noreferrer">
              View official menus <Icon name="arrow" size={16} />
            </a>
          </div>
        </section>

        <section className={styles.garden} id="garden">
          <figure>
            <Image
              src="/assets/ship-inn-sewerby/garden.webp"
              alt="Concept visual of a pint, walking map and dog in a coastal beer garden"
              fill
              sizes="(max-width: 799px) 100vw, 52vw"
            />
            <figcaption>Concept visual · dog-friendly beer garden</figcaption>
          </figure>
          <div className={styles.gardenCopy}>
            <p className={styles.sectionNumber}>03 · Outside</p>
            <h2>
              Muddy boots
              <br />
              <em>are welcome.</em>
            </h2>
            <p>
              The useful promise for walkers and families is simple: there is
              parking, there is food, the dog can come, and the sea stays in
              view.
            </p>
            <div className={styles.gardenList}>
              <span>Large outdoor garden</span>
              <span>Children welcome</span>
              <span>Dog-friendly pub</span>
              <span>Wi-Fi &amp; accessible toilet</span>
            </div>
          </div>
        </section>

        <section className={styles.visit} id="visit">
          <div className={styles.visitHeading}>
            <p className={styles.sectionNumber}>04 · Today at The Ship</p>
            <h2>
              Know before
              <br />
              <em>you set off.</em>
            </h2>
            <p>
              Bar and food times from the official site, placed where a visitor
              can understand them in seconds.
            </p>
          </div>
          <div className={styles.hours}>
            {openingHours.map(([days, bar, food]) => (
              <article key={days}>
                <div>
                  <span>{days}</span>
                  <strong>{bar}</strong>
                </div>
                <p>{food}</p>
              </article>
            ))}
            <small>
              All hours are subject to change. Please call ahead when timing is
              important.
            </small>
          </div>
        </section>

        <section className={styles.location}>
          <div className={styles.locationMap} aria-hidden="true">
            <span className={styles.bay}>Bridlington Bay</span>
            <span className={styles.coast} />
            <span className={styles.locationPin}>
              <Icon name="pin" size={27} />
            </span>
            <span className={styles.place}>Sewerby</span>
          </div>
          <div className={styles.locationCopy}>
            <p className={styles.sectionNumber}>Find us</p>
            <h2>
              Cliff Road,
              <br />
              <em>beside the sea.</em>
            </h2>
            <address>
              The Ship Inn
              <br />
              Cliff Road, Sewerby
              <br />
              Bridlington, East Yorkshire
              <br />
              YO15 1EW
            </address>
            <div className={styles.locationActions}>
              <a
                className={styles.goldButton}
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={18} /> Open in Google Maps
              </a>
              <a className={styles.outlineButton} href={phoneUrl}>
                <Icon name="phone" size={18} /> {phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Wordmark light />
        <p>
          Unofficial redesign concept built from publicly listed venue
          information. Generated images do not represent the actual venue.
        </p>
        <div>
          <a href={officialUrl} target="_blank" rel="noreferrer">
            Official website
          </a>
          <a href={phoneUrl}>Call</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href={phoneUrl}>
          <Icon name="phone" size={19} />
          <span>Call</span>
        </a>
        <a href="#food">
          <Icon name="menu" size={19} />
          <span>Food</span>
        </a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          <Icon name="pin" size={19} />
          <span>Directions</span>
        </a>
      </nav>
    </div>
  );
}
