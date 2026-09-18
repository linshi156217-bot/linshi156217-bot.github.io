import styles from "../legal.module.css";

export const metadata = {
  title: "Provider and data terms",
  description: "Who provides Linshi Studio services, and how scope, payment, account access and project information are handled.",
  alternates: { canonical: "/provider-terms/" },
};

const email = "hello@linshistudio.com";

export default function ProviderTermsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Provider terms · Clear and practical</p>
          <h1>Know who<br /><em>you are working with.</em></h1>
          <p className={styles.heroLead}>The practical details behind a remote project: provider identity, written scope, payment, account access and project information.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last updated: 15 September 2026. These terms describe the usual working basis before an individual project agreement is accepted.</p>

        <section className={styles.section}>
          <h2>Service provider</h2>
          <p>Linshi Studio is an independent web studio operated by Shi Lin from China as an individual service provider. It serves businesses remotely, including businesses in the United Kingdom. It is not presented as a UK-registered company.</p>
          <p>The person who discusses the brief is the person who designs and builds the work. Contact: <a href={`mailto:${email}?subject=Project%20question`}>{email}</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>Before any payment</h2>
          <p>Before work begins, the client receives a written scope that identifies the agreed deliverables, fixed price, payment milestones, expected timeline, required client materials and any items quoted separately. A project starts only after that scope is accepted.</p>
          <p>Our website-review approach is informed by recurring patterns studied across 12 UK local-service categories. This is research experience and is not presented as a count of paid client projects.</p>
          <p>Public concept websites on this site are clearly identified as concepts. They are not presented as paid client commissions.</p>
        </section>

        <section className={styles.section}>
          <h2>Payment and delivery</h2>
          <p>After the written scope is accepted, payment is requested through PayPal in GBP. The payment request identifies Shi Lin trading as Linshi Studio, the agreed service, amount and due date.</p>
          <p>The £99 enquiry-path fix and £350 quarterly website and AI-search review are paid in full after scope acceptance. Standard website projects normally use a 50% booking deposit and 50% final payment before live-domain launch or transfer. Any variation is stated in the written scope.</p>
          <p>Each paid project has a written delivery checklist covering the agreed pages, checks, handover items and any approved client-owned account access. Reported faults in the agreed delivered scope are reviewed for seven calendar days after handover.</p>
          <p>If an agreed part remains undelivered and cannot be reasonably remedied, the amount allocated to that undelivered part in the written scope is refunded. Delivery, revisions and cancellation arrangements are confirmed for the specific project in writing. No ranking, AI inclusion, citation or commercial result is promised.</p>
        </section>

        <section className={styles.section}>
          <h2>Accounts, access and security</h2>
          <p>The client keeps control of their domain and essential third-party accounts wherever the service allows it. New client-facing accounts should be created in the client&apos;s name where practical.</p>
          <p>Do not send passwords in an initial brief or ordinary email. Access is requested only after scope acceptance, only for the agreed work and through a client-controlled account or approved access method. Live-site changes require the client&apos;s written instruction.</p>
        </section>

        <section className={styles.section}>
          <h2>Project information</h2>
          <p>We use project information only to answer the enquiry, prepare the agreed work, deliver it and keep essential service records. The <a href="/privacy/">privacy policy</a> explains the enquiry form, providers, retention and your choices in more detail.</p>
          <p>Client names, access details and non-public project material are not published without the client&apos;s permission.</p>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Project%20question`}>
          <span><small>Questions before a project</small><strong>{email}</strong></span><b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/project-guide/">Project guide</a><a href="/privacy/">Privacy</a><a href={`mailto:${email}?subject=Project%20question`}>{email}</a></div></footer>
    </main>
  );
}
