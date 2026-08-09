import Image from "next/image";
import styles from "./ribchic-piranha.module.css";

export const metadata = {
  title: "Ribchic Piranha | Weekend Buffet on the Water",
  description:
    "A private mobile-first concept for Ribchic Piranha at Gloucester Docks, centred on the September weekend buffet and private hire.",
  robots: {
    index: false,
    follow: false,
  },
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Ribchic+Piranha+Alexander+Quays+Gloucester+Docks";

const menuFramework = [
  {
    number: "01",
    title: "The main event",
    detail:
      "Your signature hot dishes and carving favourites, written here once the September line-up is confirmed.",
  },
  {
    number: "02",
    title: "Fresh from the galley",
    detail:
      "Seasonal vegetables, salads, breads and sides presented as one easy-to-scan section.",
  },
  {
    number: "03",
    title: "Something for everyone",
    detail:
      "Vegetarian choices and clear dietary guidance, confirmed by the team before publication.",
  },
  {
    number: "04",
    title: "Finish sweetly",
    detail:
      "Cakes, puddings or a dessert table — ready for the final names, prices and service details.",
  },
];

export default function RibchicPiranhaPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#rp-main">
        Skip to content
      </a>

      <div className={styles.previewBar}>
        <strong>Private concept preview</strong>
        <span>Imagery and menu wording await owner approval</span>
      </div>

      <header className={styles.header}>
        <a className={styles.wordmark} href="#rp-top" aria-label="Ribchic Piranha home">
          <span className={styles.monogram}>RP</span>
          <span className={styles.wordmarkCopy}>
            <strong>Ribchic Piranha</strong>
            <small>Gloucester Docks</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#rp-relaunch">September</a>
          <a href="#rp-menu">Buffet</a>
          <a href="#rp-hire">Private hire</a>
          <a href="#rp-visit">Find the boat</a>
        </nav>
        <a className={styles.headerAction} href="#rp-menu">
          Explore the relaunch
        </a>
      </header>

      <main id="rp-main">
        <section className={styles.hero} id="rp-top">
          <Image
            src="/assets/ribchic-piranha/boat-hero.webp"
            alt="Concept image of a warmly lit restaurant boat at a British historic dock"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Bistro · art café · aboard a 1911 boat</p>
            <h1>
              Make the boat
              <br />
              <em>the main event.</em>
            </h1>
            <p className={styles.heroLead}>
              A new weekend buffet destination, moored in the heart of
              Gloucester Docks.
            </p>
            <div className={styles.heroActions}>
              <a href="#rp-menu">See the September idea</a>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Find the boat
              </a>
            </div>
          </div>
          <div className={styles.heroFacts}>
            <span><strong>1911</strong> Historic vessel</span>
            <span><strong>Fri + Sat</strong> Weekend evenings</span>
            <span><strong>On the water</strong> Opposite Warehouse 4</span>
          </div>
        </section>

        <section className={styles.pause} id="rp-relaunch">
          <div className={styles.pauseBadge} aria-hidden="true">
            <span>08</span>
            <small>Summer pause</small>
          </div>
          <div className={styles.pauseCopy}>
            <p className={styles.kicker}>Before you plan a visit</p>
            <h2>Taking August to prepare something worth coming aboard for.</h2>
            <p>
              The kitchen is temporarily closed for a short summer reset and
              refit. Ribchic Piranha is preparing to return in September with
              an Ultimate Weekend Buffet every Friday and Saturday evening,
              alongside private hire and group catering.
            </p>
            <div className={styles.pauseNote}>
              <span>September dates, service times and booking details</span>
              <strong>Coming soon</strong>
            </div>
          </div>
        </section>

        <section className={styles.clarityStrip} aria-label="Visitor essentials">
          <div>
            <span>01</span>
            <strong>What&apos;s on</strong>
            <p>Weekend buffet and private celebrations.</p>
          </div>
          <div>
            <span>02</span>
            <strong>When</strong>
            <p>Friday and Saturday evenings from September.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Where</strong>
            <p>Alexander Quays, opposite Warehouse 4 Brewery.</p>
          </div>
        </section>

        <section className={styles.buffetFeature} id="rp-menu">
          <div className={styles.buffetImage}>
            <Image
              src="/assets/ribchic-piranha/weekend-buffet.webp"
              alt="Concept image showing a generous weekend buffet inside a boat restaurant"
              fill
              sizes="(max-width: 799px) 100vw, 58vw"
            />
            <span>Concept visual · final dishes to be confirmed</span>
          </div>
          <div className={styles.buffetIntro}>
            <p className={styles.kicker}>The September idea</p>
            <h2>The Ultimate Weekend Buffet.</h2>
            <p>
              Hearty, fresh food presented as the reason to make a night of
              the boat — with the essentials visible before a guest ever opens
              Facebook.
            </p>
            <div className={styles.serviceCard}>
              <span>Planned service</span>
              <strong>Friday &amp; Saturday evenings</strong>
              <small>Exact hours, price and booking route await confirmation.</small>
            </div>
          </div>
        </section>

        <section className={styles.menuSection} aria-labelledby="rp-menu-title">
          <div className={styles.menuHeading}>
            <div>
              <p className={styles.kicker}>A clear mobile menu</p>
              <h2 id="rp-menu-title">Four sections. No hunting through posts.</h2>
            </div>
            <p>
              This is the proposed structure, not a published food list. Send
              the confirmed dishes, prices and allergen notes and each line can
              be replaced without changing the design.
            </p>
          </div>
          <div className={styles.menuGrid}>
            {menuFramework.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <p className={styles.allergenNote}>
            Dietary and allergen information should be confirmed directly
            with the Ribchic Piranha team before visiting.
          </p>
        </section>

        <section className={styles.privateHire} id="rp-hire">
          <div className={styles.hireImage}>
            <Image
              src="/assets/ribchic-piranha/private-hire.webp"
              alt="Concept image of a small birthday celebration below deck on a historic boat"
              fill
              sizes="(max-width: 799px) 100vw, 55vw"
            />
            <span>Concept visual</span>
          </div>
          <div className={styles.hireCopy}>
            <p className={styles.kicker}>Private hire &amp; group catering</p>
            <h2>Your celebration. A setting nobody forgets.</h2>
            <p>
              Birthdays, family gatherings and small celebrations feel
              different below deck. This section gives groups a simple route
              to ask about dates, capacity and catering.
            </p>
            <ul>
              <li><span>Occasion</span><strong>Birthdays &amp; gatherings</strong></li>
              <li><span>Setting</span><strong>Historic floating venue</strong></li>
              <li><span>Food</span><strong>Group catering enquiries</strong></li>
            </ul>
            <a href="mailto:ribchicpiranha@gmail.com?subject=Private%20hire%20enquiry">
              Ask about a private date <span>↗</span>
            </a>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.storyMark} aria-hidden="true">
            <span>RP</span>
            <small>On the water</small>
          </div>
          <div className={styles.storyCopy}>
            <p className={styles.kicker}>More than somewhere to eat</p>
            <h2>A Gloucester story with a gangway.</h2>
            <p>
              Built in 1911 and later refitted as a boutique bistro and art
              café, Ribchic Piranha offers the kind of arrival a normal dining
              room cannot: step off the quay, cross the water and come aboard.
            </p>
          </div>
        </section>

        <section className={styles.visit} id="rp-visit">
          <div className={styles.visitMap} aria-hidden="true">
            <span>GL1</span>
            <div className={styles.pin}>R</div>
          </div>
          <div className={styles.visitCopy}>
            <p className={styles.kicker}>Find the boat</p>
            <h2>At Alexander Quays, opposite Warehouse 4 Brewery.</h2>
            <address>
              Ribchic Piranha<br />
              Alexander Quays, Gloucester Docks<br />
              Gloucester, GL1 2LG
            </address>
            <div className={styles.visitDetails}>
              <div><span>August</span><strong>Kitchen temporarily closed</strong></div>
              <div><span>September</span><strong>Weekend buffet relaunch</strong></div>
              <div><span>Enquiries</span><strong>ribchicpiranha@gmail.com</strong></div>
            </div>
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerMark}>RP</div>
        <div>
          <strong>Ribchic Piranha</strong>
          <p>
            Private mobile-first concept prepared by Linshi Studio.<br />
            All imagery and menu details require owner approval before public use.
          </p>
        </div>
        <a href="https://linshistudio.com/" target="_blank" rel="noreferrer">
          Linshi Studio ↗
        </a>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href="#rp-menu">Buffet</a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">Find us</a>
        <a href="mailto:ribchicpiranha@gmail.com?subject=Ribchic%20Piranha%20enquiry">Enquire</a>
      </nav>
    </div>
  );
}
