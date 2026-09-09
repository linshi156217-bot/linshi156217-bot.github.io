import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./salon-concept.module.css";

const concepts = {
  "hair-zone-bath": {
    business: "Hair Zone",
    monogram: "HZ",
    location: "Southgate · Bath",
    eyebrow: "Independent hair & beauty",
    title: "Good hair.\nNo guesswork.",
    supporting:
      "Friendly cuts, colour and beauty treatments in the centre of Bath.",
    image: "/assets/aster-house/hero.webp",
    imagePosition: "64% center",
    theme: "clay",
    layout: "editorial",
    primary: "Explore services",
    proof: ["Local independent", "Colour consultations", "Call 01225 464306"],
  },
  "claire-brown-bath": {
    business: "Claire Brown",
    monogram: "CB",
    location: "Milsom Street · Bath",
    eyebrow: "Hair with care",
    title: "Beautifully\nconsidered.",
    supporting:
      "Precision cuts, confident colour and discreet wig services in a calm first-floor salon.",
    image: "/assets/aster-house/balayage.webp",
    imagePosition: "58% center",
    theme: "porcelain",
    layout: "soft",
    primary: "See our work",
    proof: ["Colour specialists", "Bridal hair", "Medical hair-loss support"],
  },
  "vizion-hair-bath": {
    business: "VIZION",
    monogram: "V",
    location: "The Corridor · Bath",
    eyebrow: "Independent since day one",
    title: "Your hair,\nwith intent.",
    supporting:
      "Modern colour, precision cutting and honest advice—right in the heart of Bath.",
    image: "/assets/aster-house/copper-bob.webp",
    imagePosition: "52% center",
    theme: "ink",
    layout: "fashion",
    primary: "View the portfolio",
    proof: ["Colour", "Cutting", "Extensions"],
  },
  "bay-tree-box": {
    business: "Bay Tree",
    monogram: "BT",
    location: "Box · Wiltshire",
    eyebrow: "Hair care, thoughtfully done",
    title: "Feel like\nyourself again.",
    supporting:
      "A welcoming village salon with more than 30 years of experience behind every appointment.",
    image: "/assets/aster-house/salon-detail.webp",
    imagePosition: "center",
    theme: "sage",
    layout: "calm",
    primary: "Meet the team",
    proof: ["Established 2013", "Unisex salon", "Wedding styling"],
  },
  "david-maxwell-bath": {
    business: "David Maxwell",
    monogram: "DM",
    location: "Argyle Street · Bath",
    eyebrow: "Multi-award-winning hairdressing",
    title: "Expertise you\ncan feel.",
    supporting:
      "Beautiful colour, exceptional cutting and a polished salon experience a few steps from Pulteney Bridge.",
    image: "/assets/aster-house/hero.webp",
    imagePosition: "70% center",
    theme: "navy",
    layout: "award",
    primary: "Discover the salon",
    proof: ["Bath Life winner", "Kevin Murphy colour", "Open late Wed & Thu"],
  },
  "tom-g-bath": {
    business: "Tom G.",
    monogram: "TG",
    location: "Bath · Somerset",
    eyebrow: "Independent colourist",
    title: "Thirty years.\nOne-to-one care.",
    supporting:
      "Personal colour and cutting from an experienced independent hairdresser who listens first.",
    image: "/assets/aster-house/natural-curls.webp",
    imagePosition: "48% center",
    theme: "stone",
    layout: "studio",
    primary: "See Tom’s work",
    proof: ["30 years’ experience", "4.9★ local reviews", "Personal appointments"],
  },
  "zara-morgan-bath": {
    business: "ZARA MORGAN",
    monogram: "ZM",
    location: "St James’s Parade · Bath",
    eyebrow: "Award-winning Redken salon",
    title: "Wear it\nwith pride.",
    supporting:
      "Contemporary colour and confident cuts, delivered by a team that makes every visit feel personal.",
    image: "/assets/aster-house/copper-bob.webp",
    imagePosition: "55% center",
    theme: "rouge",
    layout: "bold",
    primary: "Explore hair services",
    proof: ["Redken salon", "Colour transformations", "Friendly consultations"],
  },
  "pure-hair-york": {
    business: "PURE",
    monogram: "P",
    location: "Grape Lane · York",
    eyebrow: "Independent York hairdressing",
    title: "Quietly\nexceptional.",
    supporting:
      "Considered cuts, dimensional colour and an experienced team in the heart of the city.",
    image: "/assets/aster-house/silver-crop.webp",
    imagePosition: "51% center",
    theme: "pearl",
    layout: "minimal",
    primary: "Meet the stylists",
    proof: ["City-centre salon", "Colour & extensions", "Established reputation"],
  },
  "turner-clark-blackpool": {
    business: "TURNER CLARK",
    monogram: "TC",
    location: "Bispham · Blackpool",
    eyebrow: "Hair · Extensions · Confidence",
    title: "More hair.\nMore you.",
    supporting:
      "Statement colour, seamless extensions and occasion hair created by a team that loves transformation.",
    image: "/assets/aster-house/balayage.webp",
    imagePosition: "58% center",
    theme: "electric",
    layout: "impact",
    primary: "See transformations",
    proof: ["Extensions", "Blondes", "Braids & occasion hair"],
  },
  "salonred-blackpool": {
    business: "SALONRED",
    monogram: "SR",
    location: "Dickson Road · Blackpool",
    eyebrow: "Hair · Beauty · Head spa",
    title: "Your time.\nYour reset.",
    supporting:
      "Hair, nails, brows and Japanese head-spa rituals—all under one welcoming roof.",
    image: "/assets/aster-house/salon-detail.webp",
    imagePosition: "center",
    theme: "red",
    layout: "ritual",
    primary: "Explore treatments",
    proof: ["Japanese head spa", "Hair colour", "Nails & beauty"],
  },
  "harrogate-hair-gil": {
    business: "HARROGATE HAIR",
    monogram: "GH",
    location: "Westminster Arcade · Harrogate",
    eyebrow: "Independent hairdressing by Gil",
    title: "Great hair.\nMade personal.",
    supporting:
      "Twenty-five years of craft, honest advice and one-to-one appointments in the heart of Harrogate.",
    image: "/assets/beauty-email-pilot/harrogate-hair-hero.webp",
    imagePosition: "center",
    theme: "navy",
    layout: "studio",
    primary: "Explore services",
    proof: ["25+ years' experience", "Cutting & colour", "Personal consultations"],
  },
  "elite-hair-beauty-harrogate": {
    business: "ELITE",
    monogram: "E",
    location: "Harrogate · At-home appointments",
    eyebrow: "Mobile hair & beauty",
    title: "Salon care.\nAt your pace.",
    supporting:
      "Professional hair and beauty treatments brought to your home, with calm one-to-one attention throughout.",
    image: "/assets/beauty-email-pilot/elite-hair-hero.webp",
    imagePosition: "center",
    theme: "sage",
    layout: "calm",
    primary: "View treatments",
    proof: ["Harrogate mobile service", "Hair & beauty", "Flexible appointments"],
  },
  "cg-hair-salon-harrogate": {
    business: "C.G. HAIR",
    monogram: "CG",
    location: "Station Parade · Harrogate",
    eyebrow: "Colour specialist · Caroline Gunner",
    title: "Colour with\nconfidence.",
    supporting:
      "Personalised colour, precision cutting and more than three decades of experience behind every appointment.",
    image: "/assets/beauty-email-pilot/cg-hair-hero.webp",
    imagePosition: "58% center",
    theme: "porcelain",
    layout: "editorial",
    primary: "See colour services",
    proof: ["30+ years' experience", "Bespoke colour", "One-to-one advice"],
  },
  "pink-lady-york": {
    business: "PINK LADY",
    monogram: "PL",
    location: "Barmby Moor · York",
    eyebrow: "Village hair & beauty studio",
    title: "A little time.\nFor you.",
    supporting:
      "Friendly hair and beauty care in a relaxed village studio, with every essential detail easy to find on your phone.",
    image: "/assets/beauty-email-pilot/pink-lady-hero.webp",
    imagePosition: "center",
    theme: "rouge",
    layout: "soft",
    primary: "Explore the studio",
    proof: ["Hair & beauty", "Village location", "Simple mobile contact"],
  },
  "cut-hair-salon-york": {
    business: "CUT",
    monogram: "C",
    location: "Gillygate · York",
    eyebrow: "Independent since 1999",
    title: "Make it\nyours.",
    supporting:
      "Healthy hair, sharp technique and a creative team with more than sixty years of combined experience.",
    image: "/assets/beauty-email-pilot/cut-hair-hero.webp",
    imagePosition: "42% center",
    theme: "ink",
    layout: "fashion",
    primary: "Meet the team",
    proof: ["Independent since 1999", "Cutting & colour", "Free client parking"],
  },
};

export function generateStaticParams() {
  return Object.keys(concepts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const concept = concepts[slug];
  if (!concept) return {};
  return {
    title: `${concept.business} · Mobile website concept`,
    robots: { index: false, follow: false },
  };
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default async function SalonConceptPage({ params }) {
  const { slug } = await params;
  const concept = concepts[slug];
  if (!concept) notFound();

  const titleLines = concept.title.split("\n");

  return (
    <main
      className={`${styles.concept} ${styles[concept.theme]} ${styles[concept.layout]}`}
    >
      <p className={styles.disclosure}>
        Mobile website concept <span>·</span> illustrative imagery
      </p>

      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.monogram}>{concept.monogram}</span>
          <div>
            <strong>{concept.business}</strong>
            <small>{concept.location}</small>
          </div>
        </div>
        <span className={styles.menu} aria-label="Menu">
          <i />
          <i />
        </span>
      </header>

      <section className={styles.hero}>
        <div className={styles.imageWrap}>
          <Image
            src={concept.image}
            alt=""
            fill
            priority
            sizes="430px"
            style={{ objectPosition: concept.imagePosition }}
          />
          <div className={styles.imageShade} />
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{concept.eyebrow}</p>
          <h1>
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index === 0 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className={styles.supporting}>{concept.supporting}</p>
          <div className={styles.actions}>
            <a href="#proof" className={styles.primary}>
              {concept.primary} <Arrow />
            </a>
            <a href="#visit" className={styles.secondary}>
              Find us
            </a>
          </div>
        </div>

        <div className={styles.sequence} aria-hidden="true">
          <span>01</span>
          <i />
          <span>04</span>
        </div>
      </section>

      <section className={styles.proof} id="proof">
        {concept.proof.map((item, index) => (
          <span key={item}>
            <small>0{index + 1}</small>
            {item}
          </span>
        ))}
      </section>

      <nav className={styles.mobileDock} aria-label="Quick actions">
        <a href="#proof">
          <span>Work</span>
          <small>Portfolio</small>
        </a>
        <a href="#visit" className={styles.dockPrimary}>
          <span>Contact salon</span>
          <small>Call or message</small>
        </a>
        <a href="#visit">
          <span>Visit</span>
          <small>Directions</small>
        </a>
      </nav>
    </main>
  );
}
