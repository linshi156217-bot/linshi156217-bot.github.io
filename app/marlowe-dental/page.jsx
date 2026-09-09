import Image from "next/image";
import styles from "./marlowe-dental.module.css";

export const metadata = {
  title: "Marlowe Dental House | Private Dentistry, Clearly Explained",
  description:
    "A fictional mobile-first website concept for an independent private dental practice in Cheltenham.",
  alternates: { canonical: "/marlowe-dental/" },
  openGraph: {
    title: "Marlowe Dental House | Private dentistry, clearly explained",
    description:
      "A fictional private dental practice website concept by Linshi Studio.",
    url: "/marlowe-dental/",
    siteName: "Marlowe Dental House",
    type: "website",
    images: [
      {
        url: "/assets/marlowe-dental/og.webp",
        width: 1200,
        height: 630,
        alt: "Warm contemporary reception for the fictional Marlowe Dental House",
      },
    ],
  },
};

const treatments = [
  ["01", "Everyday care", "Check-ups, hygiene and prevention explained without jargon."],
  ["02", "Restorative", "Thoughtful options for damaged, worn or missing teeth."],
  ["03", "Straightening", "Assessment-led aligner care with realistic expectations."],
  ["04", "Implants", "A carefully planned route from consultation to aftercare."],
  ["05", "Cosmetic", "Subtle changes considered in the context of long-term oral health."],
  ["06", "Urgent care", "A clear first step when something does not feel right."],
];

const firstVisit = [
  ["Before", "Tell us what matters to you and share any concerns privately."],
  ["During", "A full assessment, time for questions and options in plain English."],
  ["After", "A written plan with fees, timescales and no pressure to decide on the day."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function MarloweDentalPage() {
  return (
    <main className={styles.site}>
      <a className={styles.skip} href="#content">
        Skip to content
      </a>

      <div className={styles.conceptBar}>
        <span>Original concept website</span>
        <a href="/">Designed by Linshi Studio <Arrow /></a>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Marlowe Dental House home">
          <span className={styles.mark} aria-hidden="true">M</span>
          <span>
            <strong>Marlowe</strong>
            <small>Dental House</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#care">Care</a>
          <a href="#approach">Approach</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className={styles.headerCta} href="#visit">Plan a first visit</a>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <Image
          className={styles.heroImage}
          src="/assets/marlowe-dental/reception.webp"
          alt="A calm reception in a restored Cheltenham townhouse"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy} id="content">
          <p className={styles.eyebrow}>Private dentistry · Cheltenham</p>
          <h1 id="hero-title">
            Care you can
            <br />
            <em>understand.</em>
          </h1>
          <p className={styles.heroLead}>
            Calm appointments, considered treatment and every option explained
            before you decide.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#care">Explore our care <Arrow /></a>
            <a className={styles.textButton} href="#approach">How we work</a>
          </div>
        </div>
        <div className={styles.heroIndex} aria-label="Practice details">
          <span>Independent private practice</span>
          <span>Montpellier · Cheltenham</span>
          <span>New patient enquiries welcome</span>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="intro-title">
        <p className={styles.sectionLabel}>A different first impression</p>
        <div>
          <h2 id="intro-title">A dental visit should begin with clarity, not uncertainty.</h2>
          <p>
            Marlowe is a fictional practice built to show how a useful dental
            website can feel. It answers the practical questions first, then
            makes space for the human details that build trust.
          </p>
        </div>
      </section>

      <section className={styles.care} id="care" aria-labelledby="care-title">
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>Care, clearly organised</p>
          <h2 id="care-title">Start with what you need.</h2>
          <p>
            Every treatment begins with an assessment. Recommendations depend
            on clinical suitability and your informed choice.
          </p>
        </div>
        <div className={styles.treatmentGrid}>
          {treatments.map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#visit" aria-label={`Ask about ${title}`}>Ask a question <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.approach} id="approach" aria-labelledby="approach-title">
        <div className={styles.approachImage}>
          <Image
            src="/assets/marlowe-dental/consultation.webp"
            alt="A dentist discussing a treatment plan with a patient"
            fill
            sizes="(max-width: 820px) 100vw, 48vw"
          />
          <span>Listen first · explain properly</span>
        </div>
        <div className={styles.approachCopy}>
          <p className={styles.sectionLabel}>The Marlowe approach</p>
          <h2 id="approach-title">No rushed decisions.</h2>
          <p>
            Good care includes time to understand the diagnosis, alternatives,
            likely outcomes, costs and what happens if you choose to wait.
          </p>
          <ol>
            {firstVisit.map(([title, copy], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.rooms} aria-label="Practice environment">
        <div className={styles.roomCopy}>
          <p className={styles.sectionLabel}>Designed around people</p>
          <blockquote>Clinical where it matters. Calm everywhere else.</blockquote>
          <p>
            Step-free arrival, private conversations and an environment made to
            lower the volume before an appointment begins.
          </p>
        </div>
        <div className={styles.roomImage}>
          <Image
            src="/assets/marlowe-dental/treatment-room.webp"
            alt="A warm, clinically equipped dental treatment room"
            fill
            sizes="(max-width: 820px) 100vw, 64vw"
          />
        </div>
      </section>

      <section className={styles.team} aria-labelledby="team-title">
        <div className={styles.teamImage}>
          <Image
            src="/assets/marlowe-dental/team.webp"
            alt="Two clinicians in a contemporary dental practice"
            fill
            sizes="(max-width: 820px) 100vw, 58vw"
          />
        </div>
        <div className={styles.teamCopy}>
          <p className={styles.sectionLabel}>Your clinical team</p>
          <h2 id="team-title">Know who will look after you.</h2>
          <p>
            A live practice page would show verified qualifications, country of
            qualification, GDC registration numbers and areas of experience for
            every clinician.
          </p>
          <small>Concept cast pictured. No real clinicians or patient claims are represented.</small>
        </div>
      </section>

      <section className={styles.visit} id="visit" aria-labelledby="visit-title">
        <div className={styles.visitIntro}>
          <p className={styles.sectionLabel}>Your first visit</p>
          <h2 id="visit-title">Everything useful, before you leave home.</h2>
        </div>
        <div className={styles.visitGrid}>
          <article><span>Find us</span><strong>Montpellier, Cheltenham</strong><p>Step-free entrance · nearby pay-and-display parking</p></article>
          <article><span>Opening</span><strong>Mon–Fri · 08:00–17:30</strong><p>Selected early appointments by arrangement</p></article>
          <article><span>Contact</span><strong>01242 000 000</strong><p>hello@marlowedental.example</p></article>
        </div>
        <a className={styles.visitCta} href="mailto:hello@linshistudio.com?subject=Marlowe%20Dental%20House%20concept">
          Ask Linshi Studio about a site like this <Arrow />
        </a>
      </section>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top">Marlowe Dental House</a>
        <p>
          Fictional website concept. A live dental site would include verified
          practice ownership, clinicians’ GDC details, complaints procedure,
          regulatory links and accurate fees before publication.
        </p>
        <div>
          <a href="/">Back to Linshi Studio <Arrow /></a>
          <span>Concept updated 3 August 2026</span>
        </div>
      </footer>
    </main>
  );
}
