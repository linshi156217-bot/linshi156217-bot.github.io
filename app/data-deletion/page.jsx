import styles from "../legal.module.css";

export const metadata = {
  title: "Data deletion request",
  description: "How to ask Linshi Studio to delete personal information.",
  alternates: { canonical: "/data-deletion/" },
};

const email = "hello@linshistudio.com";

export default function DataDeletionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Privacy request · Data deletion</p>
          <h1>Ask us to<br /><em>delete your data.</em></h1>
          <p className={styles.heroLead}>Use this route if you want Linshi Studio to review and delete personal information connected with an enquiry, project or message.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>This page is the dedicated deletion-request route for Linshi Studio. It applies to information handled through our website enquiries, email and connected social communication channels.</p>

        <section className={styles.section}>
          <h2>How to make a request</h2>
          <p>Email <a href={`mailto:${email}?subject=Data%20deletion%20request`}>{email}</a> with the subject “Data deletion request”. Include the name, email address or phone number used to contact us, and identify the relevant business or conversation if you can.</p>
          <p>Please do not send passwords, payment-card details or identity documents by email. We may ask for enough information to verify that the request relates to you before acting.</p>
        </section>

        <section className={styles.section}>
          <h2>What we review</h2>
          <p>We review information held in our enquiry records, project correspondence and operational message records. If the request is valid, we delete or anonymise information that is no longer needed for the purpose for which it was collected.</p>
          <p>Some limited records may need to be retained where necessary for an active project, dispute handling, fraud prevention, accounting or other legal obligations. If that applies, we explain the reason and limit any retained information to what is necessary.</p>
        </section>

        <section className={styles.section}>
          <h2>Third-party platforms</h2>
          <p>If you contacted us through Facebook, Instagram, WhatsApp, email or another platform, that platform may also keep its own copy of the conversation. A request to Linshi Studio does not delete information controlled by that platform; you can use its own privacy controls for that part.</p>
        </section>

        <section className={styles.section}>
          <h2>Need access or a correction instead?</h2>
          <p>Use the same email address and state whether you want access to your information, a correction, marketing withdrawal or deletion. See our <a href="/privacy/">privacy policy</a> for the wider explanation of how enquiry information is handled.</p>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Data%20deletion%20request`}>
          <span><small>Start a deletion request</small><strong>{email}</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href="/privacy/">Privacy</a>
          <a href="/terms/">Service terms</a>
          <a href="/project-guide/">Project guide</a>
        </div>
      </footer>
    </main>
  );
}
