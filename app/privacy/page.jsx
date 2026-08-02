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
        <p className={styles.notice}>Last updated: 1 August 2026. Linshi Studio is an independent web studio serving businesses in the United Kingdom.</p>

        <section className={styles.section}>
          <h2>Information we receive</h2>
          <p>We receive information when you contact us by email, WhatsApp or social media, or when you choose to work with us. This may include your name, business details, contact information, project brief, website content, images and feedback.</p>
          <p>The website includes a project-brief composer that runs in your browser and opens an email on your device. Information typed into that composer is not submitted to or stored by the website. The website does not currently use an advertising pixel or optional analytics cookies. Our hosting provider may process basic technical logs for security and reliable delivery.</p>
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
        </section>

        <section className={styles.section}>
          <h2>Service providers and retention</h2>
          <p>Information may be processed by providers used for secure hosting, domain management, email and file delivery. They receive only the information needed to provide their service.</p>
          <p>Enquiry and project information is kept only for as long as reasonably needed for communication, delivery, support, accounting, security and applicable legal obligations.</p>
        </section>

        <section className={styles.section}>
          <h2>Your choices</h2>
          <p>You may ask what information we hold about you, request a correction or ask us to delete information that no longer needs to be retained.</p>
          <p>Email <a href={`mailto:${email}?subject=Privacy%20request`}>{email}</a> with the subject “Privacy request”. We may need to verify that the request relates to you before acting.</p>
        </section>

        <section className={styles.section}>
          <h2>Links and policy updates</h2>
          <p>This website links to third-party services including email, Instagram, Facebook, WhatsApp and Google Maps. Their own privacy terms apply when you use them.</p>
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
