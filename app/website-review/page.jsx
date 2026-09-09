import styles from "./review.module.css";

export const metadata = {
  title: "£350 Annual Website & AI Search Review",
  description:
    "A fixed-scope annual review of your website, mobile customer journey and AI-search discoverability, delivered as a prioritised action list.",
  alternates: { canonical: "/website-review/" },
  openGraph: {
    title: "£350 Annual Website & AI Search Review | Linshi Studio",
    description: "A clear annual review for independent UK businesses: website, mobile journey and AI-search discoverability.",
    url: "/website-review/",
    type: "website",
    images: [{ url: "/assets/studio-v2/renovation-case-v2.webp", width: 1536, height: 1024 }],
  },
};

const reviewAreas = [
  ["01", "Mobile customer journey", "What a visitor sees first, where confidence drops and whether the main call, email or enquiry action is easy to complete."],
  ["02", "Navigation and wording", "Duplicate, vague or misplaced labels that make services, locations or the next step harder to understand."],
  ["03", "Trust and project evidence", "How clearly the site proves workmanship, service area, specialist capability and the difference between one project type and another."],
  ["04", "Technical discoverability", "Indexing basics, structured information and whether relevant search crawlers can access the public pages intended for discovery."],
  ["05", "AI-search clarity", "OAI-SearchBot access and the clarity of service, location and citation-ready facts. No promise of inclusion or ranking is made."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual Website and AI Search Discoverability Review",
  provider: {
    "@type": "ProfessionalService",
    name: "Linshi Studio",
    url: "https://linshistudio.com",
    email: "hello@linshistudio.com",
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description: "A fixed-scope annual review of a business website, mobile customer journey and AI-search discoverability, delivered as a prioritised action list.",
  offers: {
    "@type": "Offer",
    price: "350",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://linshistudio.com/website-review/",
  },
};

export default function WebsiteReviewPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className={styles.header}>
        <a href="/" className={styles.brand}><span>L.</span> Linshi Studio</a>
        <a href="/#project-brief" className={styles.headerCta}>Request the review ↗</a>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Fixed scope · Annual clarity</p>
          <h1>Website &amp;<br /><em>AI search review.</em></h1>
          <p className={styles.heroCopy}>A practical annual check for an established business that already has a website but wants to know what is costing clarity, trust or discoverability on a phone.</p>
        </div>
        <aside className={styles.priceCard}>
          <span>One annual review</span>
          <strong>£350</strong>
          <p>GBP · No UK VAT charged</p>
          <ul>
            <li>Main website and priority pages</li>
            <li>Mobile customer journey</li>
            <li>AI-search discoverability signals</li>
            <li>Prioritised written action list</li>
          </ul>
          <a href="/#project-brief">Ask if your site fits ↗</a>
        </aside>
      </section>

      <section className={styles.fit}>
        <p className={styles.eyebrow}>Who it is for</p>
        <div>
          <h2>Keep the website.<br /><em>Find the next useful change.</em></h2>
          <p>This is for an independent business with a live site, real services and enough customer value to justify a careful annual review. It is especially useful when the site has grown over time, works on desktop but feels uncertain on mobile, or describes the business less clearly than the team does in person.</p>
        </div>
      </section>

      <section className={styles.scope} aria-labelledby="scope-title">
        <div className={styles.scopeTitle}>
          <p className={styles.eyebrow}>The review</p>
          <h2 id="scope-title">Five lenses.<br /><em>One ranked list.</em></h2>
        </div>
        <div className={styles.scopeList}>
          {reviewAreas.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.deliverable}>
        <div>
          <p className={styles.eyebrow}>What you receive</p>
          <h2>A decision document,<br /><em>not a dashboard.</em></h2>
          <p>The findings are delivered as a concise, prioritised report. Each item states the evidence, why it matters and the recommended next action, separated into urgent, valuable and optional work.</p>
          <a href="/downloads/linshi-studio-sample-website-ai-search-review.pdf" target="_blank">View the clearly labelled sample report ↗</a>
        </div>
        <div className={styles.reportMock} aria-label="Example report priorities">
          <p>Sample priority list</p>
          <article><span>High</span><div><strong>Make the main mobile action unambiguous</strong><small>Evidence · impact · recommended change</small></div></article>
          <article><span>Medium</span><div><strong>Clarify the service and location relationship</strong><small>Evidence · impact · recommended change</small></div></article>
          <article><span>Watch</span><div><strong>Confirm crawler access after the next release</strong><small>Evidence · impact · verification step</small></div></article>
        </div>
      </section>

      <section className={styles.boundaries}>
        <div>
          <p className={styles.eyebrow}>Included</p>
          <h2>Review and recommendations.</h2>
          <ul>
            <li>One annual review of the agreed public website</li>
            <li>Main mobile journey and priority navigation</li>
            <li>Obvious usability, wording and trust issues</li>
            <li>OAI-SearchBot access and AI-search clarity</li>
            <li>A concise prioritised action list</li>
          </ul>
        </div>
        <div>
          <p className={styles.eyebrow}>Not included</p>
          <h2>No hidden implementation promise.</h2>
          <ul>
            <li>No live website changes, chatbot or API integration</li>
            <li>No directory submission or ongoing monitoring</li>
            <li>No guarantee of AI inclusion, citation or ranking</li>
            <li>No paid advertising or large-scale copywriting</li>
            <li>Implementation is scoped and quoted separately</li>
          </ul>
        </div>
      </section>

      <section className={styles.process}>
        <p className={styles.eyebrow}>How it starts</p>
        <div>
          <article><span>01</span><h3>Fit check</h3><p>Send the current website, business name and the main action customers should take.</p></article>
          <article><span>02</span><h3>Written confirmation</h3><p>We confirm the reviewed pages, scope, price and expected delivery date before payment.</p></article>
          <article><span>03</span><h3>Review and handover</h3><p>You receive the report and a short email explaining the first three actions worth considering.</p></article>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p>Already have a website?</p>
        <h2>Find the next useful change.</h2>
        <a href="/#project-brief"><span>Request a fit check</span><strong>£350 annual review ↗</strong></a>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Linshi Studio</span>
        <a href="mailto:hello@linshistudio.com">hello@linshistudio.com</a>
        <a href="/privacy/">Privacy</a>
      </footer>
    </main>
  );
}
