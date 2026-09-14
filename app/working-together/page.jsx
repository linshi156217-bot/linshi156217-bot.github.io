import styles from "../legal.module.css";

export const metadata = {
  title: "Project safeguards and working terms",
  description: "How Linshi Studio handles written scope, payment, client-controlled accounts, handover, backups, 7-day remedy and proportionate refunds for website projects.",
  alternates: { canonical: "/working-together/" },
};

const email = "hello@linshistudio.com";
const whatsappUrl = "https://wa.me/qr/NFHKON7S4RKEO1";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who provides Linshi Studio services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linshi Studio is operated by Shi Lin from China as an individual service provider, not presented as a UK-registered company. Its standard business-client agreement states the formal notice route, England and Wales governing law, and exclusive jurisdiction of the courts of England and Wales. Project-specific scope is agreed in writing before payment.",
      },
    },
    {
      "@type": "Question",
      name: "Who controls the domain, hosting and accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Where the relevant service allows it, the client keeps control of the domain, hosting, essential third-party accounts and billing control. After final payment, client-specific source code and editable design files expressly included in scope are handed over. Third-party items remain subject to their own licences and are listed in the handover record.",
      },
    },
    {
      "@type": "Question",
      name: "How are backups and project handover handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The final handover record identifies the live URL, agreed source and design files, available content or database export, client materials, account roles, third-party licences, and platform-specific restoration route. The archive is placed in a client-controlled folder or repository. Linshi Studio is not an ongoing backup custodian unless separately agreed in writing.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if agreed work cannot be delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reported faults in agreed delivered scope are reviewed for seven calendar days after handover. If an agreed part remains undelivered and cannot be reasonably remedied, the written agreement provides for a proportionate refund of the payment allocated to that undelivered part.",
      },
    },
    {
      "@type": "Question",
      name: "Has Linshi Studio undertaken paid website-review work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linshi Studio states that it has undertaken a paid website-review engagement for an independent UK service business. The work was agreed in writing before payment and focused on key website pages and the customer journey. Client identity and materials are not published without written permission.",
      },
    },
  ],
};

export default function WorkingTogetherPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
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
          <p>Our <a href="/project-agreement/">standard business-client project agreement</a> records the contracting correspondence details, formal project-notice route, England and Wales governing law and exclusive jurisdiction of the courts of England and Wales. Your specific written scope identifies the client, work, price and any clearly stated variation before payment.</p>
        </section>

        <section className={styles.section}>
          <h2>What you receive</h2>
          <p>Your project agreement lists the agreed deliverables, including pages, included revision rounds, handover materials and any agreed account access. It also identifies what is outside scope or needs a separate quotation.</p>
          <p>Where the relevant service allows it, your domain, hosting, essential third-party accounts and their billing control remain in your name or are transferred to you at handover. You should not send your main password by ordinary email; separate administrator access is preferred.</p>
          <p>After final payment, you receive the client-specific source code and editable design files expressly included in your written scope. At handover, the checklist records the live address, agreed source files and asset locations, account roles, transfer or revocation steps, and any known remaining actions. Third-party licences and platform features remain subject to their own terms.</p>
        </section>

        <section className={styles.section}>
          <h2>Access, backups and continuity</h2>
          <p>Access is requested only after scope acceptance, only for the agreed work and only through a client-controlled account or approved access method. Live-site changes require your written instruction. You can remove access when the agreed work is complete.</p>
          <p>The final archive is delivered to a client-controlled folder, repository or account agreed in writing. It records the delivered source and design files, available platform export, account roles, third-party licence list and platform-specific restoration route. If a platform does not provide export or restore functionality, the checklist says so rather than implying that a backup exists.</p>
          <p>For agreed live changes, a restorable backup is made before the change where the platform permits and this is within the written scope. The handover checklist records the backup or rollback route where one is available; it does not turn a third-party host&apos;s own backup service into a Linshi Studio guarantee or an ongoing provider-held backup service.</p>
          <p>If the project ends early, the written agreement records what has been completed, what remains, the current project materials that can be handed over, and any proportionate-refund position for genuinely undelivered agreed work.</p>
        </section>

        <section className={styles.section}>
          <h2>If something goes wrong</h2>
          <h3>7-day remedy period</h3>
          <p>For seven days from handover, reported faults that prevent the agreed delivered scope working as specified are reviewed and, where confirmed, repaired at no extra charge.</p>
          <h3>After the 7-day period</h3>
          <p>The 7-day remedy period is not an automatic ongoing-maintenance plan. If a problem is reported later, we first identify whether it is a new request, a third-party or hosting change, or a fault in the agreed scope. Any work outside the remedy period is separately scoped, priced and agreed in writing before it begins.</p>
          <h3>Unable to deliver an agreed part</h3>
          <p>If Linshi Studio cannot deliver an agreed part of the written scope, the project agreement provides for a proportionate refund of the payment allocated to that undelivered part. Any cancellation, refund and handover position is confirmed in writing for the specific project.</p>
          <h3>How to raise a concern</h3>
          <p>Send the concern and relevant evidence to <a href={`mailto:${email}?subject=Project%20concern`}>{email}</a>. We compare it with the written scope and delivery checklist, explain whether it is an agreed-scope fault, a new request or a third-party change, and confirm the next step in writing. This process does not remove any rights available through the agreed contract or PayPal&apos;s own procedures.</p>
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
            <li>The business-client <a href="/project-agreement/">project agreement template</a>, including ownership, backup, notices and dispute terms.</li>
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
          <a href="/project-agreement/">Project agreement</a>
          <a href="/privacy/">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
