import styles from "../legal.module.css";

export const metadata = {
  title: "Project guide and prices",
  description:
    "Fixed website packages, payment terms, timelines and project requirements from Linshi Studio.",
  alternates: { canonical: "/project-guide/" },
};

const email = "hello@linshistudio.com";
const whatsappUrl = "https://wa.me/qr/NFHKON7S4RKEO1";
const startUrl = `mailto:${email}?subject=Website%20project%20enquiry&body=Business%20name%3A%0ATown%20or%20service%20area%3A%0ACurrent%20website%20or%20social%20page%3A%0AMain%20services%3A%0AIdeal%20launch%20date%3A`;
const sprintUrl = `mailto:${email}?subject=%C2%A3149%20mobile%20enquiry%20sprint&body=Business%20name%3A%0ATown%20or%20service%20area%3A%0ACurrent%20website%20or%20social%20page%3A%0AThe%20mobile%20step%20that%20may%20be%20causing%20friction%3A`;

const packages = [
  { name: "Essential", price: "£650", copy: "A focused one-page website", items: ["Up to 6 considered sections", "Services or menu highlights", "Gallery and contact routes", "Domain connection", "Two revision rounds"] },
  { name: "Signature", price: "£950", copy: "A fuller multi-page experience", items: ["Up to 5 pages", "Full menu or service presentation", "Portfolio and trust details", "Existing booking-link integration", "Two revision rounds"], featured: true },
  { name: "Bespoke", price: "From £1,350", copy: "For custom scope or integrations", items: ["Written scope before work", "Advanced content organisation", "Custom enquiry journeys", "Fixed quotation", "Two revision rounds"] },
];

export default function ProjectGuidePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Project guide · Fixed scope</p>
          <h1>Clear work.<br /><em>Clear price.</em></h1>
          <p className={styles.heroLead}>A concise public guide to scope, payment, timing, revisions and the information needed to begin.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Prices are one-off build fees. Domain renewals and optional third-party services remain the client&apos;s responsibility and are agreed before purchase.</p>

        <section className={styles.sprintPanel}>
          <div>
            <p className={styles.eyebrow}>Low-risk first project</p>
            <h2>Mobile enquiry sprint</h2>
            <strong>£149</strong>
            <p>A private, fixed-scope way to test the value before commissioning a complete rebuild.</p>
          </div>
          <div>
            <ul>
              <li>One verified mobile enquiry problem</li>
              <li>One redesigned priority screen or section</li>
              <li>Private before-and-after preview within 3 working days</li>
              <li>Written implementation recommendation</li>
              <li>Full £149 credited to an Essential or larger website booked within 30 days</li>
            </ul>
            <p>No live-site access is required for the private preview. Live implementation is outside this starter scope unless confirmed separately in writing.</p>
            <a href={sprintUrl}>Ask about one mobile problem ↗</a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Website packages</h2>
          <div className={styles.priceGrid}>
            {packages.map((item) => (
              <article className={`${styles.priceCard} ${item.featured ? styles.priceCardFeatured : ""}`} key={item.name}>
                <h3>{item.name}</h3><strong>{item.price}</strong><p>{item.copy}</p>
                <ul>{item.items.map((line) => <li key={line}>{line}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Payment and delivery</h2>
          <p>The £149 mobile enquiry sprint is paid in full after its written fixed scope is accepted. Standard website projects use the 50% deposit and 50% final-payment structure below.</p>
          <p>Payments are requested by a formal PayPal invoice in GBP after the written scope and fixed price have been accepted. The invoice identifies Linshi Studio, the agreed service, the amount and the due date.</p>
          <ol>
            <li>A written scope and fixed price are agreed first.</li>
            <li>A PayPal invoice for the 50% booking deposit is issued to the client&apos;s confirmed billing email.</li>
            <li>The deposit confirms the booking; production starts after both the cleared deposit and required content are received.</li>
            <li>The client supplies approved text, images and business details.</li>
            <li>Two consolidated revision rounds are included.</li>
            <li>A separate PayPal invoice for the remaining 50% is due after final approval and before live-domain launch or transfer.</li>
          </ol>
          <p>PayPal may offer payment by PayPal Wallet, debit card or credit card depending on the client&apos;s location and account eligibility. Any PayPal processing or currency-conversion information is shown by PayPal before payment.</p>
          <p>No VAT is added unless a quotation and invoice display a valid VAT registration number. Cancellation and refund terms are confirmed in the written project agreement; they are not changed through chat messages.</p>
          <p>Essential projects usually take 7–10 working days and Signature projects 10–15 working days after all approved content is received.</p>
          <p>The business keeps control of its domain and approved content. Handover notes are included, together with 30 days of support for defects in the delivered work.</p>
        </section>

        <section className={styles.section}>
          <h2>What to send</h2>
          <ul>
            <li>Business name, town and current website or social page.</li>
            <li>Main services, menu or treatment list with approved prices.</li>
            <li>Opening details, service area and preferred contact routes.</li>
            <li>Approved logo, photographs and any existing booking link.</li>
            <li>The most important action a mobile visitor should take.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Quoted separately</h2>
          <p>E-commerce, custom booking systems, customer accounts, dashboards, logo design, professional photography, large-scale copywriting, verified translation and paid advertising are not included in the standard packages.</p>
        </section>

        <a className={styles.cta} href={startUrl}>
          <span><small>Start with five useful details</small><strong>Email a project brief</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href={`mailto:${email}?subject=Website%20project%20enquiry`}>{email}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="/privacy/">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
