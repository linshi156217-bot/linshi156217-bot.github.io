import styles from "../legal.module.css";

export const metadata = {
  title: "Service terms",
  description: "The working terms Linshi Studio uses for website projects.",
  alternates: { canonical: "/terms/" },
};

const email = "hello@linshistudio.com";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Service terms · Project by project</p>
          <h1>Clear terms.<br /><em>Before work starts.</em></h1>
          <p className={styles.heroLead}>These practical terms explain the standard way Linshi Studio scopes, delivers and hands over a website project.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last updated: 20 September 2026. These terms are a general guide. The written scope, quote and payment request agreed for a specific project take priority where they differ.</p>

        <section className={styles.section}>
          <h2>Who provides the service</h2>
          <p>Linshi Studio is an independent web studio operated by Shi Lin from China as an individual service provider. It serves businesses remotely and is not presented as a UK-registered company.</p>
        </section>

        <section className={styles.section}>
          <h2>Scope before payment</h2>
          <p>Before work begins, the client and Linshi Studio agree a written scope, fixed price, delivery route and the material needed from the client. A project is not treated as booked until the scope is accepted and the agreed payment milestone has cleared.</p>
          <p>New pages, integrations, copywriting, photography, ecommerce, custom booking systems, customer accounts, dashboards, paid advertising and other work outside that scope are quoted separately.</p>
        </section>

        <section className={styles.section}>
          <h2>Payment and production</h2>
          <p>For standard website projects, the usual structure is a 50% booking deposit followed by a 50% final payment after final approval and before a live-domain launch or transfer. The payment request identifies the agreed service, amount and due date.</p>
          <p>Production starts after the cleared booking payment and the required approved content are received. Project timing depends on the agreed scope and timely client feedback; any estimated timing is not a promise of a specific business result.</p>
        </section>

        <section className={styles.section}>
          <h2>Content, approvals and revisions</h2>
          <p>The client is responsible for supplying approved text, images, business details, pricing, permissions and any claims used on the website. Linshi Studio may ask for clarification where supplied material creates legal, accuracy or rights concerns.</p>
          <p>Standard packages include two consolidated revision rounds unless the written scope says otherwise. Feedback should be grouped so that each revision round can be completed clearly and efficiently.</p>
        </section>

        <section className={styles.section}>
          <h2>Launch, handover and support</h2>
          <p>The client keeps control of its domain and approved content. After final payment, Linshi Studio provides the agreed handover materials and 30 days of support for defects in the delivered work. Changes, third-party outages and newly requested features are outside defect support unless agreed in writing.</p>
        </section>

        <section className={styles.section}>
          <h2>Cancellation and outcomes</h2>
          <p>Cancellation and refund arrangements are confirmed in the written project agreement and are not changed through chat messages. Linshi Studio does not guarantee search ranking, enquiry volume, sales, booking volume, third-party platform approval or a particular commercial outcome.</p>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Website%20project%20enquiry`}>
          <span><small>Questions about a project</small><strong>{email}</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href="/privacy/">Privacy</a>
          <a href="/data-deletion/">Data deletion</a>
          <a href="/project-guide/">Project guide</a>
        </div>
      </footer>
    </main>
  );
}
