import Image from "next/image";
import styles from "./studio-home.module.css";

const brief = "/work/#project-brief";
const projects = [
  { name: "Salt & Hawthorn", category: "Hospitality", description: "A little restaurant. A whole coastal world.", href: "/salt-and-hawthorn/", image: "/assets/hero-exterior.webp", alt: "Salt & Hawthorn concept restaurant on a warmly lit Whitby street", className: "restaurant" },
  { name: "Alder & Slate", category: "Homes & interiors", description: "Considered spaces, confidently presented.", href: "/alder-and-slate/", image: "/assets/alder-slate/kitchen.webp", alt: "Oak and stone kitchen from the Alder & Slate renovation concept", className: "homes" },
  { name: "Aster House", category: "Hair & beauty", description: "An independent salon with its own point of view.", href: "/aster-house-hair/", image: "/assets/aster-house/hero.webp", alt: "Warm contemporary interiors from the Aster House salon concept", className: "salon" },
];
const more = [
  ["Marlowe Dental", "Healthcare", "/marlowe-dental/"],
  ["Morrow & Tide", "Coastal dining", "/morrow-and-tide/"],
  ["The Fox & Bramble", "Country hospitality", "/the-fox-and-bramble/"],
];
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function StudioHome() {
  return <div className={styles.site} id="top">
    <a className={styles.skip} href="#main">Skip to content</a>
    <header className={styles.header}>
      <a href="#top" className={styles.brand} aria-label="Linshi Studio home">linshi<span className={styles.brandDot}>.</span><small>Independent web studio</small></a>
      <nav className={styles.desktopNav} aria-label="Main navigation"><a href="#work">Selected work</a><a href="#studio">The studio</a><a href="#working-with-linshi">How we work</a><a href="/project-guide/">Pricing</a></nav>
      <a href={brief} className={styles.headerCta}>Let’s talk <Arrow /></a>
      <details className={styles.mobileMenu}><summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation"><a href="#work">Selected work</a><a href="#studio">The studio</a><a href="#working-with-linshi">How we work</a><a href="/project-guide/">Pricing & project guide</a><a href={brief}>Start a project <Arrow /></a></nav></details>
    </header>
    <main id="main">
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span className={styles.dot} /> Independent businesses. Individual websites.</p>
          <h1 id="hero-title">Thoughtful<br />websites.<br /><em>Distinctly yours.</em></h1>
          <p className={styles.intro}>Your business has a character of its own.<br className={styles.desktopBreak} /> We bring it to life online—with considered design<br className={styles.desktopBreak} /> and a clear path from first look to first enquiry.</p>
          <div className={styles.actions}><a href="#work" className={styles.button}>Explore the work <Arrow /></a><a href={brief} className={styles.textLink}>Tell us your idea <Arrow /></a></div>
          <p className={styles.heroNote}>Founder-led design · clear scope and agreed price · PayPal payment request before work begins.</p>
        </div>
        <a className={styles.heroProject} href="/alder-and-slate/" aria-label="Explore the Alder & Slate concept website">
          <div className={styles.projectCanvas}>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}><span>● ● ●</span><span>ALDER & SLATE</span><Arrow /></div>
              <div className={styles.previewNav}><b>ALDER <i>&</i> SLATE</b><span>Considered homes.</span></div>
              <div className={styles.previewPhoto}><Image src="/assets/alder-slate/hero.webp" alt="Yorkshire stone home featured in the Alder & Slate website concept" fill priority sizes="(max-width: 760px) 90vw, 44vw" /><div><small>NORTH YORKSHIRE · HOMES & RENOVATION</small><p>Built for weather.<br /><em>Finished for life.</em></p><span>Explore the project ↗</span></div></div>
              <div className={styles.previewFoot}><span>A considered approach to the place you call home.</span><span>01 — 06</span></div>
            </div>
            <span className={styles.canvasLabel}>A LITTLE DETAIL. A LASTING IMPRESSION.</span>
          </div>
          <div className={styles.heroCaption}><span>Featured concept <b>Alder & Slate</b></span><span>Web design & direction <Arrow /></span></div>
        </a>
      </section>
      <div className={styles.disciplines}><span>Good design. Clear purpose.</span><p>Strategy <i>/</i> Art direction <i>/</i> Website design <i>/</i> Development</p></div>
      <section className={styles.trust} id="working-with-linshi" aria-labelledby="trust-title">
        <div><p className={styles.eyebrow}>Working with Linshi</p><h2 id="trust-title">No invented proof.<br /><em>Clear working terms.</em></h2><p>Linshi Studio is an independent, founder-led web studio operated from China and serving UK businesses remotely. It is not presented as a UK-registered company. The person discussing your brief is the person designing and building the work.</p></div>
        <div className={styles.trustGrid}>
          <article><span>01</span><h3>Research-led, not inflated</h3><p>Our review approach is informed by recurring website patterns studied across 12 UK local-service categories. This is research experience, not a claim of paid client work.</p></article>
          <article><span>02</span><h3>Scope before payment</h3><p>You receive the agreed pages, inclusions, price, timeline and payment milestones in writing before work begins.</p></article>
          <article><span>03</span><h3>Deliverables you can check</h3><p>Each paid project has a written delivery checklist, including the agreed pages, checks, handover items and any client-owned account access.</p></article>
          <article><span>04</span><h3>Seven-day remedy window</h3><p>Reported faults in the agreed delivered scope are reviewed for seven days after handover. If an agreed part remains undelivered and cannot be remedied, the undelivered part is refunded.</p></article>
        </div>
        <div className={styles.trustLinks}><a className={styles.trustLink} href="/working-together/">Read project safeguards and how we work <Arrow /></a><a className={styles.trustLink} href="/project-guide/">Read the project guide, scope and prices <Arrow /></a><a className={styles.trustLink} href="/provider-terms/">Read provider and data terms <Arrow /></a></div>
      </section>
      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>01 / Selected work</p><h2 id="work-title">Different businesses.<br /><em>Distinctive worlds.</em></h2></div><p>A selection of self-initiated website concepts.<br />Fictional businesses. Real design thinking.</p></div>
        <div className={styles.projectGrid}>{projects.map((p, i) => <article className={`${styles.project} ${styles[p.className]}`} key={p.name}>
          <a href={p.href} className={styles.projectImage} aria-label={`View ${p.name} concept website`}><Image src={p.image} alt={p.alt} fill sizes={i === 0 ? "(max-width: 760px) 92vw, 90vw" : "(max-width: 760px) 92vw, 44vw"} /><span className={styles.conceptBadge}>Concept project</span><span className={styles.openCircle}><Arrow /></span><span className={styles.imageTitle}>{p.name}</span></a>
          <div className={styles.projectMeta}><div><h3><a href={p.href}>{p.name}</a></h3><p>{p.description}</p></div><span>{p.category}<small>Web design · Development</small></span></div>
        </article>)}</div>
        <div className={styles.moreWork}><p className={styles.eyebrow}>More to explore <span>03</span></p>{more.map(([name,type,href]) => <a href={href} key={name}><span>{name}<small>{type} · Concept project</small></span><Arrow /></a>)}</div>
      </section>
      <section className={styles.studio} id="studio" aria-labelledby="studio-title"><p className={styles.eyebrow}>02 / The studio</p><div><h2 id="studio-title">A small studio.<br /><em>A considered approach.</em></h2><p className={styles.studioIntro}>Led by Shi Lin, Linshi Studio works directly with independent businesses that need a clearer website and enquiry journey.</p><p className={styles.studioBody}>There is no account-management layer or anonymous production team. We bring together art direction, thoughtful content and responsive development, then hand over a site the business can understand and control.</p><div className={styles.services}><article><span>01</span><h3>Find the direction</h3><p>Your audience, your character and what your website needs to do.</p></article><article><span>02</span><h3>Design the experience</h3><p>Considered typography, imagery and a journey that feels natural.</p></article><article><span>03</span><h3>Build it beautifully</h3><p>Responsive pages, useful details and a clear handover at launch.</p></article></div></div></section>
      <section className={styles.start} aria-labelledby="start-title"><div><p className={styles.eyebrow}>03 / Working together</p><h2 id="start-title">A clear beginning.<br /><em>No guesswork.</em></h2></div><div><p>From a focused one-page website to a fuller digital home. We agree the scope, timeline and price before work begins.</p><p className={styles.price}>Websites from <strong>£650</strong></p><a className={styles.textLink} href="/project-guide/">Explore packages & the project guide <Arrow /></a><p className={styles.startNote}>One-off build fee. Domain renewals and optional services are separate.</p></div></section>
      <section className={styles.contact} id="contact"><p className={styles.eyebrow}>Have something in mind?</p><h2>Let’s make<br /><em>something yours.</em></h2><div className={styles.contactRow}><a className={styles.button} href={brief}>Tell us about your project <Arrow /></a></div><div className={styles.contactChannels}>
        <div className={styles.whatsappChannel}><a className={styles.whatsappDirect} href="https://wa.me/qr/NFHKON7S4RKEO1"><small>01 / WhatsApp</small><span>Message the studio <Arrow /></span></a><a className={styles.qrLink} href="/assets/studio-v3/whatsapp-contact-original.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open original Linshi WhatsApp QR code"><span className={styles.qrFrame}><Image src="/assets/studio-v3/whatsapp-contact-original.jpg" alt="Scan this QR code with WhatsApp to add Linshi as a contact" width={1279} height={2774} sizes="460px" /></span></a><p>Scan with WhatsApp, or tap the code to enlarge.</p></div>
        <a href="mailto:hello@linshistudio.com"><small>02 / Studio email</small><span>hello@linshistudio.com <Arrow /></span><p>For projects, ideas and introductions.</p></a>
      </div></section>
    </main>
    <footer className={styles.footer}><a className={styles.footerBrand} href="#top">linshi<span>.</span></a><p>Independent by nature.<br />Considered by design.</p><nav aria-label="Footer navigation"><a href="#contact">Contact</a><a href="/working-together/">Project safeguards</a><a href="https://www.instagram.com/designerlinshi/">Instagram <Arrow /></a><a href="/project-guide/">Project guide</a><a href="/provider-terms/">Provider terms</a><a href="/privacy/">Privacy</a></nav><span className={styles.copyright}>© 2026 Linshi Studio</span><a className={styles.backTop} href="#top">Back to top ↑</a></footer>
  </div>;
}
