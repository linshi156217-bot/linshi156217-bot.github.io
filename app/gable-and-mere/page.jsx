import Image from "next/image";
import styles from "./gable-and-mere.module.css";

export const metadata = {
  title: "Gable & Mere | Nine Rooms Above the Lake",
  description:
    "A fictional mobile-first website concept for an independent Lake District boutique guesthouse.",
  alternates: { canonical: "/gable-and-mere/" },
  openGraph: {
    title: "Gable & Mere | Nine rooms above the lake",
    description:
      "A fictional boutique guesthouse website concept by Linshi Studio.",
    url: "/gable-and-mere/",
    siteName: "Gable & Mere",
    type: "website",
    images: [
      {
        url: "/assets/gable-and-mere/og.webp",
        width: 1200,
        height: 630,
        alt: "A restored Lakeland house overlooking misty fells at dusk",
      },
    ],
  },
};

const details = [
  ["Arrive", "Private parking for every room, with EV charging by arrangement."],
  ["Settle", "Check in from 3pm. Tea, cake and the fire are waiting in the drawing room."],
  ["Wake", "Breakfast is served slowly from 7.30–10am with a walker's early tray on request."],
  ["Explore", "Trail notes, drying space and honest local recommendations at the front desk."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function GableAndMerePage() {
  return (
    <main className={styles.site}>
      <a className={styles.skip} href="#content">Skip to content</a>

      <div className={styles.conceptBar}>
        <span>Original concept website</span>
        <a href="/">Designed by Linshi Studio <Arrow /></a>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Gable and Mere home">
          <strong>Gable <i>&</i> Mere</strong>
          <small>Ambleside · The Lake District</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#rooms">Rooms</a>
          <a href="#breakfast">Breakfast</a>
          <a href="#stay">Your stay</a>
        </nav>
        <a className={styles.book} href="#stay">Check dates</a>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <Image
          className={styles.heroImage}
          src="/assets/gable-and-mere/exterior.webp"
          alt="A restored Lakeland guesthouse glowing at blue hour"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.weather} aria-hidden="true"><span>54.43° N</span><span>Rain clearing · 11°C</span></div>
        <div className={styles.heroCopy} id="content">
          <p className={styles.eyebrow}>Nine rooms · one old Lakeland house</p>
          <h1 id="hero-title">Come for the fells.<br /><em>Stay for the quiet.</em></h1>
          <p>
            Deep baths, proper breakfasts and a fire waiting when the weather
            turns. Five minutes above Ambleside, a world away from it.
          </p>
          <a href="#rooms">Find your room <Arrow /></a>
        </div>
        <div className={styles.heroFoot}>
          <span>Breakfast included</span><span>Private parking</span><span>Direct booking, best rate</span>
        </div>
      </section>

      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoNumber}>09</div>
        <div>
          <p className={styles.label}>Small on purpose</p>
          <h2 id="manifesto-title">A house with nine rooms, not a hotel with a hundred rules.</h2>
        </div>
        <p>
          Gable & Mere is a fictional stay designed around the details guests
          look for after finding a property on Maps or a booking platform:
          what the rooms feel like, what breakfast means and how the stay works.
        </p>
      </section>

      <section className={styles.rooms} id="rooms" aria-labelledby="rooms-title">
        <div className={styles.roomIntro}>
          <p className={styles.label}>The rooms</p>
          <h2 id="rooms-title">Old bones. New comfort.</h2>
          <p>
            Every room is different. All share linen sheets, wool blankets,
            generous showers or baths and a view worth opening the curtains for.
          </p>
        </div>
        <article className={styles.featureRoom}>
          <div className={styles.featureImage}>
            <Image
              src="/assets/gable-and-mere/bedroom.webp"
              alt="The fictional Fell Room with an antique four-poster bed"
              fill
              sizes="(max-width: 850px) 100vw, 52vw"
            />
            <span>Room 04</span>
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.label}>The Fell Room</p>
            <h3>Four-poster calm above the valley.</h3>
            <p>King bed · deep bath · south-facing fell view · breakfast included</p>
            <div><strong>From £185</strong><small>per night · concept rate</small></div>
            <a href="#stay">See availability <Arrow /></a>
          </div>
        </article>

        <div className={styles.roomNotes}>
          <article><span>01–03</span><h3>House rooms</h3><p>Cosy doubles, rain showers and garden or village views.</p></article>
          <article><span>05–07</span><h3>Mere rooms</h3><p>Larger kings with window seats and a glimpse of the lake.</p></article>
          <article><span>08–09</span><h3>Top-floor rooms</h3><p>Sloped ceilings, quiet landings and the widest fell outlook.</p></article>
        </div>
      </section>

      <section className={styles.bath} aria-label="Guest bathroom">
        <div className={styles.bathImage}>
          <Image
            src="/assets/gable-and-mere/bathroom.webp"
            alt="A roll-top bath beside a rain-streaked window"
            fill
            sizes="(max-width: 850px) 100vw, 54vw"
          />
        </div>
        <div className={styles.bathCopy}>
          <p className={styles.label}>After the weather</p>
          <blockquote>A hot bath. A heavy towel. Nowhere else to be.</blockquote>
          <p>Four rooms have freestanding baths; every room has locally made soap and proper water pressure.</p>
        </div>
      </section>

      <section className={styles.breakfast} id="breakfast" aria-labelledby="breakfast-title">
        <div className={styles.breakfastImage}>
          <Image
            src="/assets/gable-and-mere/breakfast.webp"
            alt="Breakfast laid beside the fire in a small Lakeland dining room"
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.breakfastCopy}>
          <p className={styles.label}>Breakfast by the fire</p>
          <h2 id="breakfast-title">Local, generous and never rushed.</h2>
          <p>
            Sourdough from town, eggs from the next valley, house preserves and
            coffee worth sitting down for. Dietary needs are welcomed with notice.
          </p>
          <span>Served 07:30–10:00 · included with every stay</span>
        </div>
      </section>

      <section className={styles.stay} id="stay" aria-labelledby="stay-title">
        <div className={styles.stayHead}>
          <p className={styles.label}>Make the stay easy</p>
          <h2 id="stay-title">The useful details.</h2>
        </div>
        <div className={styles.detailGrid}>
          {details.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className={styles.bookingPanel}>
          <div><span>Next available weekend</span><strong>14–16 August</strong><small>Two rooms · concept availability</small></div>
          <a href="mailto:hello@linshistudio.com?subject=Gable%20and%20Mere%20concept">Ask about a site like this <Arrow /></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><strong>Gable <i>&</i> Mere</strong><span>Fictional boutique stay concept</span></div>
        <p>
          All names, rates, availability and contact details on this page are
          illustrative. A live property website would connect the owner’s real
          booking platform, policies and verified visitor information.
        </p>
        <a href="/">Back to Linshi Studio <Arrow /></a>
      </footer>
    </main>
  );
}
