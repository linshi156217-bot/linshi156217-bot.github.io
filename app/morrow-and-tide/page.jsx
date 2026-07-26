import Image from "next/image";
import styles from "./morrow-and-tide.module.css";

export const metadata = {
  title: "Morrow & Tide | Fire, Fish & Good Things",
  description:
    "A fictional contemporary seafood bar concept in Margate, Kent, created as a mobile-first website demonstration.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Margate+Harbour+Kent";

const menu = [
  ["Oysters", "Apple mignonette / sea herbs", "4 ea"],
  ["Smoked cod roe", "Warm flatbread / chilli oil", "9"],
  ["Crisp squid", "Preserved lemon / wild garlic", "13"],
  ["Crab toast", "Brown butter / pickled cucumber", "14"],
  ["Fire-roasted mussels", "Cider / parsley / grilled bread", "19"],
  ["Whole sea bass", "Charred lemon / green sauce", "32"],
  ["Hispi cabbage", "Anchovy / pangrattato / pecorino", "12"],
  ["Soft serve", "Olive oil / sea salt", "7"],
];

const details = [
  ["Walk in", "We keep half the room for people who simply turn up."],
  ["From the station", "Nine minutes on foot from Margate railway station."],
  ["Dietaries", "Plenty without gluten; tell us about allergies before ordering."],
  ["Children", "All ages welcome before 7pm. Highchairs are available."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function MorrowAndTidePage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#mt-main">
        Skip to content
      </a>

      <div className={styles.demoBar}>
        Fictional concept / Contemporary seafood bar / Margate
      </div>

      <header className={styles.header}>
        <a className={styles.logo} href="#mt-top" aria-label="Morrow and Tide home">
          <span>M</span>
          <strong>Morrow<br />&amp; Tide</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#mt-story">Story</a>
          <a href="#mt-menu">Eat</a>
          <a href="#mt-visit">Visit</a>
        </nav>
        <a
          className={styles.headerCta}
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Find us <Arrow />
        </a>
      </header>

      <main id="mt-main">
        <section className={styles.hero} id="mt-top">
          <Image
            src="/assets/morrow-tide/hero.webp"
            alt="A contemporary seafood restaurant glowing beside the Margate seafront at blue hour"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroType}>
            <p>Raw bar · open fire · Kent coast</p>
            <h1>
              Morrow
              <br />
              <span>&amp; Tide</span>
            </h1>
          </div>
          <div className={styles.heroFooter}>
            <p>Fish landed nearby. Cooked over flame. Served without ceremony.</p>
            <a href="#mt-menu">See what&apos;s cooking <span>↓</span></a>
          </div>
        </section>

        <section className={styles.manifesto} id="mt-story">
          <div className={styles.marquee} aria-hidden="true">
            <span>COAST / FIRE / FERMENT / REPEAT /</span>
            <span>COAST / FIRE / FERMENT / REPEAT /</span>
          </div>
          <div className={styles.manifestoGrid}>
            <p className={styles.index}>01 / Why we&apos;re here</p>
            <h2>
              SEAFOOD,
              <br />
              WITHOUT THE
              <br />
              WHITE TABLECLOTH.
            </h2>
            <div className={styles.manifestoCopy}>
              <p>
                Morrow &amp; Tide is an imagined all-day fish bar facing the
                water in Margate. The kitchen buys close, wastes little and
                cooks almost everything over flame.
              </p>
              <p>
                Order oysters and one cold beer. Stay for the whole fish. There
                are no rules beyond sharing the last piece.
              </p>
            </div>
          </div>
          <div className={styles.pillRow}>
            <span>Kentish day boats</span>
            <span>Low-waste kitchen</span>
            <span>Natural wine</span>
            <span>Walk-ins welcome</span>
          </div>
        </section>

        <section className={styles.feature}>
          <div className={styles.featureImage}>
            <Image
              src="/assets/morrow-tide/fish.webp"
              alt="Fire-grilled whole sea bass with charred lemon and green sauce"
              fill
              sizes="(max-width: 799px) 100vw, 62vw"
            />
            <span className={styles.imageStamp}>LAND / FIRE / SHARE</span>
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.index}>02 / Big plate</p>
            <h2>WHOLE FISH.<br />GREEN SAUCE.<br />NO FUSS.</h2>
            <div className={styles.featureMeta}>
              <p>Sea bass / charred lemon / herbs / £32</p>
              <span>Changes with the boats</span>
            </div>
          </div>
        </section>

        <section className={styles.menuSection} id="mt-menu">
          <div className={styles.menuHeading}>
            <p className={styles.index}>03 / Eat</p>
            <h2>ON THE BOARD<br />TODAY</h2>
            <p>
              A short fictional menu, written to change often. Prices shown in
              pounds.
            </p>
          </div>
          <div className={styles.menuGrid}>
            {menu.map(([name, description, price], index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <strong>£{price}</strong>
              </article>
            ))}
          </div>
          <p className={styles.allergy}>
            Tell the team about allergies. The open kitchen handles fish,
            shellfish, gluten, dairy and nuts.
          </p>
        </section>

        <section className={styles.room}>
          <div className={styles.roomCopy}>
            <p className={styles.index}>04 / The room</p>
            <h2>SEE THE FIRE.<br />WATCH THE TIDE.</h2>
            <p>
              Counter seats face the pass. Windows face the sea. The music gets
              louder after nine.
            </p>
            <div className={styles.roomStats}>
              <div><strong>34</strong><span>seats</span></div>
              <div><strong>9 min</strong><span>from the station</span></div>
              <div><strong>7 days</strong><span>from midday</span></div>
            </div>
          </div>
          <div className={styles.roomImage}>
            <Image
              src="/assets/morrow-tide/interior.webp"
              alt="Modern seafood bar with an open kitchen, cobalt tiles and rust-coloured chairs"
              fill
              sizes="(max-width: 799px) 100vw, 58vw"
            />
          </div>
        </section>

        <section className={styles.visit} id="mt-visit">
          <div className={styles.visitIntro}>
            <p className={styles.index}>05 / Before you come</p>
            <h2>THE USEFUL<br />BITS.</h2>
          </div>
          <div className={styles.detailGrid}>
            {details.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.location}>
          <div className={styles.locationTop}>
            <p>MARGATE / KENT / CT9</p>
            <span>51.3896° N</span>
          </div>
          <div className={styles.locationGrid}>
            <div>
              <p className={styles.index}>06 / Find us</p>
              <h2>MEET US<br />BY THE SEA.</h2>
            </div>
            <div className={styles.address}>
              <address>
                Marine Quarter<br />
                Margate, Kent<br />
                <small>Concept address — not a real venue</small>
              </address>
              <div className={styles.hours}>
                <span>Mon–Thu</span><strong>12–10</strong>
                <span>Fri–Sat</span><strong>12–11</strong>
                <span>Sunday</span><strong>12–9</strong>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>MORROW<br />&amp; TIDE</div>
        <div>
          <p>Fictional concept website.<br />Not a real restaurant.</p>
          <a href="#mt-top">Back to top ↑</a>
        </div>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href="#mt-menu"><span>Menu</span></a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          <span>Directions</span>
        </a>
        <a href="#mt-visit"><span>Details</span></a>
      </nav>
    </div>
  );
}
