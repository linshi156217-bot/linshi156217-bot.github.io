import styles from "../legal.module.css";

const email = "hello@linshistudio.com";
const requestUrl = `mailto:${email}?subject=%C2%A379%20mobile%20enquiry%20check&body=Business%20name%3A%0ATown%20or%20service%20area%3A%0ACurrent%20website%20URL%3A%0AMain%20action%20you%20want%20a%20mobile%20visitor%20to%20take%3A`;

export const metadata = {
  title: "£79 mobile enquiry check in 24 hours",
  description:
    "A fixed-scope 24-hour review of a public service-business website: homepage, contact route and one main booking or enquiry path, with three prioritised findings.",
  alternates: { canonical: "/mobile-enquiry-check/" },
  openGraph: {
    title: "£79 mobile enquiry check in 24 hours | Linshi Studio",
    description:
      "Three evidence-led priorities for a service-business website's homepage, contact route and main enquiry path.",
    url: "/mobile-enquiry-check/",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24-hour mobile enquiry check",
  provider: {
    "@type": "ProfessionalService",
    name: "Linshi Studio",
    url: "https://linshistudio.com",
    email,
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "A fixed-scope review of one public service-business website's homepage, contact route and one main booking or enquiry path, delivered as three prioritised findings.",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://linshistudio.com/mobile-enquiry-check/",
  },
};

export default function MobileEnquiryCheckPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/work/">View studio work</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Fixed scope · public website only</p>
          <h1>Is your mobile<br /><em>enquiry path clear?</em></h1>
          <p className={styles.heroLead}>A focused first check for a service business with a live website. We look at the homepage, contact route and one main booking or enquiry path, then identify the three issues most worth addressing first.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>This is a review, not a live-site repair. No login, customer data or form submission is required. Any implementation is optional and quoted separately.</p>

        <section className={styles.sprintPanel} aria-labelledby="check-title">
          <div>
            <p className={styles.eyebrow}>24-hour mobile enquiry check</p>
            <h2 id="check-title">Three priorities.<br />One clear next step.</h2>
            <strong>£79</strong>
            <p>GBP · fixed scope · one public website</p>
          </div>
          <div>
            <ul>
              <li>Homepage, main contact route and one agreed booking or enquiry path</li>
              <li>Mobile layout, clarity and obvious trust friction</li>
              <li>Three evidence-led priorities in a concise written note</li>
              <li>Delivery within 24 hours after the URL, main action and written scope are confirmed on a working day</li>
              <li>Optional repair work is separately scoped and priced</li>
            </ul>
            <a href={requestUrl}>Request the £79 check ↗</a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>What you receive</h2>
          <p>A short, practical note—not a generic automated score. Each of the three findings states the page or path observed, what creates friction, why it can matter to an enquiry, and the next action worth considering.</p>
          <p>The check can identify a problem; it does not promise more leads, rankings, AI citations or sales.</p>
        </section>

        <section className={styles.section}>
          <h2>What we need</h2>
          <ul>
            <li>The current public website URL.</li>
            <li>The business name and town or service area.</li>
            <li>The single action a visitor should be able to complete, such as call, email, book or request a quote.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Clear boundaries</h2>
          <ul>
            <li>One public website; no logged-in areas, customer accounts or checkout testing.</li>
            <li>No form submission, no security penetration test and no access to private business systems.</li>
            <li>No live changes are included. If you want a priority screen redesigned, see the <a href="/project-guide/">£149 mobile enquiry sprint</a>.</li>
            <li>Scope and delivery timing are confirmed in writing before a PayPal payment request is issued.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>What happens next</h2>
          <p>If the check identifies a worthwhile repair, you can ask for a separate fixed quotation. You can also move to the £149 mobile enquiry sprint for one redesigned priority screen, or the £350 website and AI-search review for a broader prioritised assessment.</p>
        </section>

        <a className={styles.cta} href={requestUrl}>
          <span><small>Send the site and main action</small><strong>Request the £79 mobile enquiry check</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/project-guide/">Project guide</a><a href="/privacy/">Privacy</a><a href={`mailto:${email}`}>{email}</a></div></footer>
    </main>
  );
}
