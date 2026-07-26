import Image from "next/image";
import styles from "./the-fox-and-bramble.module.css";

export const metadata = {
  title: "The Fox & Bramble | Country Inn, Kitchen & Rooms",
  description:
    "A fictional English country inn concept in the Cotswolds, created as a mobile-first website demonstration.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Burford+Oxfordshire";

const menuSections = [
  {
    title: "From the pantry",
    items: [
      ["Warm soda bread", "Cultured butter", "5"],
      ["Potted trout", "Pickled cucumber, rye toast", "10"],
      ["Devilled eggs", "Watercress, celery salt", "8"],
    ],
  },
  {
    title: "From the kitchen",
    items: [
      ["Venison & ale pie", "Buttered greens, mash, gravy", "24"],
      ["Day-boat pollock", "Leeks, mussels, cider", "25"],
      ["Roast squash", "Barley, sage, Tunworth", "19"],
      ["Half roast chicken", "Bread sauce, roast potatoes", "26"],
    ],
  },
  {
    title: "For afterwards",
    items: [
      ["Apple & cobnut crumble", "Jersey cream", "9"],
      ["Warm treacle tart", "Clotted cream", "9"],
      ["British farmhouse cheese", "Chutney, oatcakes", "13"],
    ],
  },
];

const practical = [
  ["Muddy boots", "Very welcome. Walking maps and umbrellas wait by the door."],
  ["Dogs", "Well-behaved dogs are welcome in the bar and by the fire."],
  ["Little ones", "Children’s portions, highchairs and space for pushchairs."],
  ["Accessibility", "Step-free side entrance and an accessible ground-floor loo."],
];

function Flourish() {
  return <span aria-hidden="true">✦</span>;
}

export default function FoxAndBramblePage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#fb-main">
        Skip to content
      </a>

      <div className={styles.conceptNote}>
        <span>Fictional concept</span>
        Country inn · kitchen · rooms
      </div>

      <header className={styles.header}>
        <a className={styles.wordmark} href="#fb-top" aria-label="The Fox and Bramble home">
          <span className={styles.crest}>F&amp;B</span>
          <span>
            <strong>The Fox &amp; Bramble</strong>
            <small>Burford · Oxfordshire</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#fb-story">Our inn</a>
          <a href="#fb-menu">Food &amp; drink</a>
          <a href="#fb-visit">Plan a visit</a>
        </nav>
        <a
          className={styles.headerLink}
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Find the inn
        </a>
      </header>

      <main id="fb-main">
        <section className={styles.hero} id="fb-top">
          <Image
            src="/assets/fox-bramble/hero.webp"
            alt="A warmly lit honey-stone Cotswolds inn on an autumn evening"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <p><Flourish /> A country inn in the Cotswolds</p>
            <h1>
              Good food,
              <br />
              soft beds &
              <br />
              <em>a fire going.</em>
            </h1>
            <div className={styles.heroActions}>
              <a href="#fb-menu">See today&apos;s menu</a>
              <a href="#fb-visit">Plan your visit</a>
            </div>
          </div>
          <div className={styles.heroRibbon}>
            <span>Kitchen open Tuesday–Sunday</span>
            <span>Dogs by the fire</span>
            <span>Seven rooms upstairs</span>
          </div>
        </section>

        <section className={styles.welcome} id="fb-story">
          <div className={styles.sectionLabel}>
            <span>Est.</span>
            <strong>1734</strong>
          </div>
          <div className={styles.welcomeCopy}>
            <p className={styles.kicker}>Welcome to our corner of Oxfordshire</p>
            <h2>A proper old inn, happily brought back to life.</h2>
            <div className={styles.twoColumns}>
              <p className={styles.lead}>
                The Fox &amp; Bramble is imagined as a village pub for locals,
                walkers and anyone who would rather not rush home.
              </p>
              <p>
                The kitchen works with nearby farms, gamekeepers and market
                gardeners. Downstairs there are deep chairs, cold pints and
                dinner by the fire. Upstairs, seven quiet bedrooms look across
                the valley.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.promise}>
          <p>From the fields around us</p>
          <div>
            <span>Local game</span>
            <Flourish />
            <span>Market vegetables</span>
            <Flourish />
            <span>British cheese</span>
          </div>
        </section>

        <section className={styles.pieFeature}>
          <div className={styles.pieImage}>
            <Image
              src="/assets/fox-bramble/pie.webp"
              alt="Golden venison and ale pie with buttered greens and a copper gravy jug"
              fill
              sizes="(max-width: 799px) 100vw, 58vw"
            />
            <span>House favourite</span>
          </div>
          <div className={styles.pieCopy}>
            <p className={styles.kicker}>Worth walking for</p>
            <h2>Venison &amp;<br />local ale pie.</h2>
            <p>
              Slow-cooked Cotswold venison beneath proper shortcrust pastry,
              with buttered greens, mash and enough gravy.
            </p>
            <div className={styles.priceLine}>
              <span>Served from noon</span>
              <strong>£24</strong>
            </div>
          </div>
        </section>

        <section className={styles.menuSection} id="fb-menu">
          <div className={styles.menuHeading}>
            <div>
              <p className={styles.kicker}>A sample of today&apos;s board</p>
              <h2>Food from close to home.</h2>
            </div>
            <p>
              This illustrative menu changes with the fields, woods and
              weather. Please ask about vegetarian and gluten-free choices.
            </p>
          </div>
          <div className={styles.menuPaper}>
            <div className={styles.menuSeal}>
              <span>F</span>
              <Flourish />
              <span>B</span>
            </div>
            {menuSections.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map(([name, detail, price]) => (
                    <li key={name}>
                      <div>
                        <h4>{name}</h4>
                        <p>{detail}</p>
                      </div>
                      <span>£{price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <p className={styles.menuNote}>
              Our kitchen handles gluten, dairy, nuts and other allergens.
              Please tell the team before ordering.
            </p>
          </div>
        </section>

        <section className={styles.interior}>
          <div className={styles.interiorImage}>
            <Image
              src="/assets/fox-bramble/interior.webp"
              alt="Historic country inn dining room with old oak tables and a glowing fireplace"
              fill
              sizes="(max-width: 799px) 100vw, 62vw"
            />
          </div>
          <div className={styles.interiorCopy}>
            <p className={styles.kicker}>Stay a little longer</p>
            <blockquote>
              “There should always be a chair by the fire.”
            </blockquote>
            <p>
              Drop in for a pint, settle in for supper or take a room upstairs.
              Nobody minds if you arrive windswept.
            </p>
            <div className={styles.interiorFacts}>
              <div><strong>7</strong><span>Bedrooms</span></div>
              <div><strong>2</strong><span>Open fires</span></div>
              <div><strong>∞</strong><span>Good walks</span></div>
            </div>
          </div>
        </section>

        <section className={styles.practical} id="fb-visit">
          <div className={styles.practicalHeading}>
            <p className={styles.kicker}>Before you set off</p>
            <h2>A few useful things to know.</h2>
          </div>
          <div className={styles.practicalList}>
            {practical.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.findUs}>
          <div className={styles.findDecor} aria-hidden="true">
            <span>OX18</span>
            <div className={styles.compass}>N</div>
          </div>
          <div className={styles.findCopy}>
            <p className={styles.kicker}>Find the inn</p>
            <h2>At the edge of Burford, before the road climbs.</h2>
            <address>
              The Valley Road<br />
              Burford, Oxfordshire<br />
              <small>Concept address — not a real business</small>
            </address>
            <div className={styles.hours}>
              <div><span>Monday</span><strong>Closed</strong></div>
              <div><span>Tuesday–Friday</span><strong>12–3 · 5–10</strong></div>
              <div><span>Saturday</span><strong>12–10</strong></div>
              <div><span>Sunday</span><strong>12–8</strong></div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerMark}>F<span>&amp;</span>B</div>
        <div>
          <strong>The Fox &amp; Bramble</strong>
          <p>Fictional country inn concept.<br />Not a real business.</p>
        </div>
        <a href="#fb-top">Back to top ↑</a>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href="#fb-menu">Menu</a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">Directions</a>
        <a href="#fb-visit">Details</a>
      </nav>
    </div>
  );
}
