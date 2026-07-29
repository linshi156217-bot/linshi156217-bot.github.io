import Image from "next/image";
import styles from "./sotto-sotto-bath.module.css";

export const metadata = {
  title: "Sotto Sotto Bath | Unofficial Mobile Redesign Concept",
  description:
    "An unofficial mobile-first redesign concept for Sotto Sotto, presenting the restaurant, menu and visitor details in one refined journey.",
  openGraph: {
    title: "Sotto Sotto Bath | Mobile Redesign Concept",
    description:
      "A refined unofficial concept using publicly listed venue information.",
    images: [
      {
        url: "/assets/sotto-sotto/og.webp",
        width: 1200,
        height: 630,
        alt: "Concept image of an intimate Italian restaurant in a Bath stone cellar",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const phoneDisplay = "01225 330236";
const phoneUrl = "tel:+441225330236";
const emailUrl = "mailto:info@sottosotto.co.uk";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sotto+Sotto%2C+10+North+Parade%2C+Bath+BA2+4AL";
const officialUrl = "https://www.sottosotto.co.uk/";
const officialMenuUrl = "https://www.sottosotto.co.uk/pdf/menu.pdf";

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
  wine: (
    <>
      <path d="M7 3h10l-1 6a4 4 0 0 1-8 0L7 3Z" />
      <path d="M12 13v7M8.5 20h7" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2.8 13.4 8l4.8 1.5-4.8 1.5L12 16.2 10.6 11 5.8 9.5 10.6 8 12 2.8Z" />
      <path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
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
      strokeWidth="1.45"
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
      <span className={styles.monogram}>SS</span>
      <span>
        <strong>Sotto Sotto</strong>
        <small>Italian restaurant · Bath</small>
      </span>
    </span>
  );
}

const menuGroups = [
  {
    label: "Per cominciare",
    title: "To start",
    dishes: [
      ["Bruschetta ai gamberoni", "King prawns · Mediterranean flavours · fresh chilli", "£12.75"],
      ["Calamaretti fritti", "Seven-herb crisp squid · delicate garlic aioli", "£12.00"],
      ["Cicchetti della casa", "Italian cured meats · cheese · marinated vegetables", "£13.75"],
    ],
  },
  {
    label: "Pasta & risotto",
    title: "From the kitchen",
    dishes: [
      ["Linguine con gamberi", "Prawns · sun-dried tomato · olives · capers", "£18.25"],
      ["Penne alla vodka", "Salt-cured pork belly · tomato · cream · vodka", "£17.75"],
      ["Risotto con zucchine e salmone", "Courgette · salmon · lemon · Pinot Grigio", "£17.95"],
    ],
  },
  {
    label: "Le specialità",
    title: "Specialities",
    dishes: [
      ["Pesce spada al salmoriglio", "Grilled swordfish · roasted vegetables · salmoriglio", "£24.50"],
      ["Branzino in crosta di noci", "Sea bass · roasted potato · olive · cherry tomato", "£25.25"],
      ["Filetto in crosta di pistacchi", "Fillet of beef · root vegetables · Primitivo sauce", "£33.75"],
    ],
  },
];

const visitDetails = [
  ["01", "A small dining room", "Booking is strongly recommended, particularly for evening service."],
  ["02", "Dietary requirements", "Tell the team in advance about allergies or intolerances so they can advise."],
  ["03", "A few steps from the Roman Baths", "North Parade is an easy walk from Bath’s principal visitor attractions."],
  ["04", "Lunch and dinner", "The official site lists service Tuesday to Saturday, with Monday and Sunday closed."],
];

export default function SottoSottoBathPage() {
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
        <a href="#top" aria-label="Sotto Sotto home">
          <Wordmark light />
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">The restaurant</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Your visit</a>
        </nav>
        <a className={styles.headerCall} href={phoneUrl}>
          <Icon name="phone" size={16} />
          <span>Call</span>
        </a>
      </header>

      <main id="main">
        <section className={styles.hero} id="top">
          <Image
            className={styles.heroImage}
            src="/assets/sotto-sotto/hero.webp"
            alt="Concept visual of an intimate Italian restaurant in a historic Bath stone cellar"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>North Parade · Bath</p>
            <h1>
              Italian warmth,
              <br />
              <em>beneath the city.</em>
            </h1>
            <p>
              Simple Italian cooking, local ingredients and a candlelit room a
              few steps from the Roman Baths.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#menu">
                Explore the menu <Icon name="arrow" size={17} />
              </a>
              <a
                className={styles.glassButton}
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={17} /> Directions
              </a>
            </div>
          </div>
          <span className={styles.conceptLabel}>
            Concept visual · not a venue photograph
          </span>
          <div className={styles.heroFoot}>
            <span>
              <Icon name="spark" size={16} /> Best Italian Restaurant in Bath award
            </span>
            <span>
              <Icon name="clock" size={16} /> Booking strongly recommended
            </span>
          </div>
        </section>

        <section className={styles.intro} id="story">
          <div className={styles.sectionMark}>
            <span>01</span>
            <p>The restaurant</p>
          </div>
          <div className={styles.introCopy}>
            <p className={styles.kicker}>Sapori · flavours</p>
            <h2>
              Simplicity is
              <br />
              <em>the difficult part.</em>
            </h2>
            <div className={styles.introBody}>
              <p className={styles.lead}>
                Sotto Sotto’s public philosophy is clear: rely on the quality of
                the ingredients, not elaborate preparation.
              </p>
              <p>
                Italian products meet vegetables, seafood and meats sourced
                locally. The result is traditional cooking with a contemporary
                turn, served in one of Bath’s most atmospheric settings.
              </p>
            </div>
          </div>
          <div className={styles.factRow}>
            <article>
              <span>Italian</span>
              <p>Traditional dishes, contemporary twist</p>
            </article>
            <article>
              <span>Local</span>
              <p>Fresh vegetables, seafood and meats</p>
            </article>
            <article>
              <span>Central</span>
              <p>Steps from Bath’s visitor landmarks</p>
            </article>
          </div>
        </section>

        <section className={styles.menuSection} id="menu">
          <div className={styles.menuHeading}>
            <div>
              <p className={styles.sectionNumber}>02 · The menu</p>
              <h2>
                A menu made
                <br />
                <em>for the phone.</em>
              </h2>
            </div>
            <p>
              The important dishes are readable immediately—without pinching,
              zooming or downloading a PDF.
            </p>
          </div>

          <div className={styles.feature}>
            <figure>
              <Image
                src="/assets/sotto-sotto/linguine.webp"
                alt="Concept food visual of linguine with king prawns, tomato, olives and capers"
                fill
                loading="eager"
                sizes="(max-width: 799px) 100vw, 50vw"
              />
              <figcaption>Concept food visual</figcaption>
            </figure>
            <div>
              <span>Featured pasta</span>
              <h3>Linguine con gamberi</h3>
              <p>
                Prawns, sun-dried tomatoes, anchovies, black olives, capers,
                garlic and extra-virgin olive oil.
              </p>
              <strong>£18.25</strong>
            </div>
          </div>

          <div className={styles.menuGrid}>
            {menuGroups.map((group, index) => (
              <article key={group.label}>
                <header>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{group.label}</p>
                    <h3>{group.title}</h3>
                  </div>
                </header>
                <ul>
                  {group.dishes.map(([name, detail, price]) => (
                    <li key={name}>
                      <div>
                        <h4>{name}</h4>
                        <p>{detail}</p>
                      </div>
                      <strong>{price}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.menuNote}>
            <p>
              Menu and prices are based on the restaurant’s publicly available
              menu and may change. Confirm allergens and availability directly.
            </p>
            <a href={officialMenuUrl} target="_blank" rel="noreferrer">
              View the official menu <Icon name="arrow" size={16} />
            </a>
          </div>
        </section>

        <section className={styles.evening}>
          <figure>
            <Image
              src="/assets/sotto-sotto/tiramisu.webp"
              alt="Concept visual of tiramisu, espresso and red wine in a candlelit stone restaurant"
              fill
              sizes="(max-width: 799px) 100vw, 55vw"
            />
            <figcaption>Concept visual · evening at Sotto Sotto</figcaption>
          </figure>
          <div className={styles.eveningCopy}>
            <p className={styles.sectionNumber}>03 · Stay for dessert</p>
            <h2>
              Dinner should
              <br />
              <em>feel like an occasion.</em>
            </h2>
            <p>
              A small room, warm stone and low light make the experience feel
              considered before the first plate reaches the table.
            </p>
            <div className={styles.chips}>
              <span>Tiramisu</span>
              <span>Italian wine</span>
              <span>House-made gelato</span>
            </div>
            <a className={styles.lightButton} href={phoneUrl}>
              <Icon name="phone" size={18} /> Call about a table
            </a>
          </div>
        </section>

        <section className={styles.visit} id="visit">
          <div className={styles.visitHeading}>
            <p className={styles.sectionNumber}>04 · Before you go</p>
            <h2>
              Every useful detail,
              <br />
              <em>without the search.</em>
            </h2>
          </div>
          <div className={styles.visitList}>
            {visitDetails.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.location}>
          <div className={styles.locationArt} aria-hidden="true">
            <span className={styles.locationName}>Bath</span>
            <span className={styles.ringOne} />
            <span className={styles.ringTwo} />
            <span className={styles.pin}>
              <Icon name="pin" size={26} />
            </span>
          </div>
          <div className={styles.locationCopy}>
            <p className={styles.sectionNumber}>Find us</p>
            <h2>
              Beneath
              <br />
              <em>North Parade.</em>
            </h2>
            <address>
              Sotto Sotto
              <br />
              10 North Parade
              <br />
              Bath BA2 4AL
            </address>
            <div className={styles.hours}>
              <span>Official site lists</span>
              <strong>Tue–Sat · 12–2pm &amp; 5–10pm</strong>
              <small>Hours may change—please confirm before travelling.</small>
            </div>
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
          <a href={emailUrl}>Email</a>
          <a href="#top">Back to top ↑</a>
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
