import styles from "../legal.module.css";

export const metadata = {
  title: "Project safeguards and working terms",
  description: "How Linshi Studio agrees scope, payment, handover and remedy for website projects.",
  alternates: { canonical: "/working-together/" },
};

const email = "hello@linshistudio.com";
const whatsappUrl = "https://wa.me/qr/NFHKON7S4RKEO1";

export default function WorkingTogetherPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Project safeguards · Before payment</p>
          <h1>Clear terms.<br /><em>Real control.</em></h1>
          <p className={styles.heroLead}>A practical checklist for a website project: what is agreed, what is handed over and what happens if an agreed item cannot be delivered.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Linshi Studio is operated by Shi Lin from China as an individual service provider, not presented as a UK-registered company. These public safeguards describe the normal project process; the written agreement for a specific project is the controlling document.</p>

        <section className={styles.section}>
          <h2>Before you pay</h2>
          <p>Before any payment is requested, you receive a written scope that identifies the provider, agreed pages, features, exclusions, price, timeline, delivery route and payment milestones. You can ask questions or decline before accepting the scope.</p>
          <p>For standard website projects, the PayPal request is sent only after the written scope and fixed price are accepted. It identifies Shi Lin trading as Linshi Studio, the agreed service, amount and due date.</p>
        </section>

        <section className={styles.section}>
          <h2>What you receive</h2>
          <p>Your project agreement lists the agreed deliverables, including pages, included revision rounds, handover materials and any agreed account access. It also identifies what is outside scope or needs a separate quotation.</p>
          <p>Where the relevant service allows it, your domain and essential third-party accounts remain in your name or are transferred to you at handover. You should not send your main password by ordinary email; separate administrator access is preferred.</p>
        </section>

        <section className={styles.section}>
          <h2>If something goes wrong</h2>
          <h3>7-day remedy period</h3>
          <p>For seven days from handover, reported faults that prevent the agreed delivered scope working as specified are reviewed and, where confirmed, repaired at no extra charge.</p>
          <h3>After the 7-day period</h3>
          <p>The 7-day remedy period is not an automatic ongoing-maintenance plan. If a problem is reported later, we first identify whether it is a new request, a third-party or hosting change, or a fault in the agreed scope. Any work outside the remedy period is separately scoped, priced and agreed in writing before it begins.</p>
          <h3>Unable to deliver an agreed part</h3>
          <p>If Linshi Studio cannot deliver an agreed part of the written scope, the project agreement provides for a proportionate refund of the payment allocated to that undelivered part. Any cancellation, refund and handover position is confirmed in writing for the specific project.</p>
        </section>

        <section className={styles.section}>
          <h2>What delivery evidence looks like</h2>
          <p>Every paid project is documented with a written scope, delivery checklist, handover record and payment record. The checklist identifies the agreed pages, checks completed, account-access handover and any remaining agreed actions.</p>
          <p>Public concept websites are labelled as concepts and are not presented as client projects. Client names, project details and references are shared publicly only with the client&apos;s written permission. If useful before a project, you can ask to see a redacted example of the delivery-checklist format and the exact record that will be used for your own project.</p>
        </section>

        <section className={styles.section}>
          <h2>A recent paid website-review engagement</h2>
          <p>Linshi Studio has undertaken a paid engagement for an independent UK service business. The work was agreed in writing before payment and focused on reviewing key website pages and the customer journey.</p>
          <p>The client receives a concise, prioritised list of practical recommendations and keeps full control over whether and how to make changes.</p>
          <p>To protect client privacy, we do not publish the client&apos;s name, website, correspondence or project materials without written permission.</p>
          <p>Every paid project uses a written scope, delivery checklist and handover process. Agreed-scope delivery faults reported within 7 calendar days are corrected without an additional fee.</p>
        </section>

        <section className={styles.section}>
          <h2>Before paying, ask for these documents</h2>
          <ul>
            <li>The written scope, inclusions, exclusions and delivery checklist.</li>
            <li>The agreed price, payment schedule and PayPal payment request details.</li>
            <li>Handover, ownership and account-control arrangements.</li>
            <li>The specific cancellation, proportionate-refund and remedy terms.</li>
            <li>Any data-access or third-party-service arrangements relevant to your project.</li>
          </ul>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Project%20safeguards%20question`}>
          <span><small>Ask before you commit</small><strong>Request the project checklist</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href={`mailto:${email}?subject=Project%20safeguards%20question`}>{email}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="/project-guide/">Project guide</a>
          <a href="/privacy/">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
