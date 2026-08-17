import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy policy",
  description: "How Linshi Studio handles enquiries and project information.",
  alternates: { canonical: "/privacy/" },
};

const email = "hello@linshistudio.com";
const whatsappUrl = "https://wa.me/qr/NFHKON7S4RKEO1";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/">
          <span className={styles.mark}>L.</span>
          Linshi Studio
        </a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Privacy · Clear and practical</p>
          <h1>Privacy,<br /><em>without mystery.</em></h1>
          <p className={styles.heroLead}>This policy explains what information Linshi Studio receives, why it is used and how to ask for access, correction or deletion.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last updated: 17 August 2026. Linshi Studio is an independent web studio serving businesses in the United Kingdom.</p>

        <section className={styles.section}>
          <h2>Information we receive</h2>
          <p>We receive information when you submit the project brief, contact us by email, WhatsApp or social media, or choose to work with us. This may include your name, business name, email address, optional phone number, town or service area, business type, current website, project goals, website content, images and feedback.</p>
          <p>The project brief is submitted to a Cloudflare Worker and stored in a Cloudflare D1 database. It also records the submission time, consent version, optional email-marketing choice, campaign/source information, referring page, browser user agent and a salted one-way hash of the submitting IP address. The hash is used to limit abuse; the raw IP address is not stored in the enquiry record.</p>
        </section>

        <section className={styles.section}>
          <h2>Privacy-friendly website analytics</h2>
          <p>We use Cloudflare Web Analytics to understand aggregate page views, referring websites, device types, approximate countries and website performance. The analytics beacon does not use analytics cookies or advertising pixels, does not record URL query strings and does not support individual visitor profiles or custom events.</p>
          <p>Cloudflare states that Web Analytics does not collect or use visitors&apos; personal data and does not track individual visitors across its customers&apos; websites. You can read more in <a href="https://developers.cloudflare.com/web-analytics/about/" target="_blank" rel="noreferrer">Cloudflare&apos;s Web Analytics documentation</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to an enquiry and prepare a quotation.</li>
            <li>To design, build, review and deliver an agreed website project.</li>
            <li>To keep essential project, invoicing and support records.</li>
            <li>To protect the website, email service and business from misuse.</li>
          </ul>
          <p>We do not sell personal information or use enquiry details for unrelated advertising.</p>
          <p>We use enquiry information because it is necessary to respond to your request and, where relevant, to take steps before entering a contract. We use limited security and service-management information for our legitimate interests in protecting the service and running the studio. Optional marketing email is based on the separate unticked consent choice shown on the form and can be withdrawn at any time.</p>
        </section>

        <section className={styles.section}>
          <h2>Service providers and retention</h2>
          <p>Information may be processed by providers used for secure hosting, database storage, domain management, email, analytics, invoicing and file delivery. These currently include Cloudflare for the enquiry endpoint/database and website analytics, GitHub Pages for public website hosting, Zoho for business email and PayPal when an invoice is issued. They receive only the information needed to provide their service.</p>
          <p>Unsuccessful enquiry records are normally retained for up to 24 months so we can answer follow-up questions, avoid duplicated contact and understand service demand. Security records may be retained for the same period. If you become a client, essential project, contract, invoice and accounting records may be kept longer where reasonably needed for delivery or legal obligations. Records may be deleted earlier when no longer needed.</p>
        </section>

        <section className={styles.section}>
          <h2>Your choices</h2>
          <p>You may ask what information we hold about you, request a correction or ask us to delete information that no longer needs to be retained.</p>
          <p>You can withdraw optional marketing consent at any time by replying “unsubscribe” to an email or contacting the address below. Withdrawing marketing consent does not affect a project enquiry or an agreed service.</p>
          <p>Email <a href={`mailto:${email}?subject=Privacy%20request`}>{email}</a> with the subject “Privacy request”. We may need to verify that the request relates to you before acting.</p>
        </section>

        <section className={styles.section}>
          <h2>Links and policy updates</h2>
          <p>This website links to third-party services including email, Instagram, Facebook, WhatsApp, Google Maps and Cloudflare. Their own privacy terms apply when you use them.</p>
          <p>Material changes to this policy will be published on this page with a revised date.</p>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Privacy%20request`}>
          <span><small>Questions or requests</small><strong>{email}</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href={`mailto:${email}?subject=Privacy%20request`}>{email}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="/project-guide/">Project guide</a>
        </div>
      </footer>
    </main>
  );
}
