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
          <p>Before payment, the project-specific written scope identifies the contracting correspondence details, client, work, price and any stated variation. The <a href="/project-agreement/">standard business-client project agreement</a> sets the formal project-notice route, England and Wales governing law and exclusive jurisdiction of the courts of England and Wales. The project-specific document controls only where it clearly states a change.</p>
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
          <p>The £79 mobile enquiry check, £149 mobile enquiry sprint and £350 quarterly website and AI-search review are paid in full after scope acceptance. Standard website projects normally use a 50% booking deposit and 50% final payment before live-domain launch or transfer. Any variation is stated in the written scope.</p>
          <p>Each paid project has a written delivery checklist covering the agreed pages, checks, handover items and any approved client-owned account access. Reported faults in the agreed delivered scope are reviewed for seven calendar days after handover.</p>
          <p>After that seven-day period, support is not automatic. A later report is assessed first to distinguish a new request, a third-party or hosting change, and a fault in the agreed delivered scope. Any out-of-period work is separately scoped, priced and agreed in writing before it starts.</p>
          <p>If an agreed part remains undelivered and cannot be reasonably remedied, the amount allocated to that undelivered part in the written scope is refunded. Delivery, revisions and cancellation arrangements are confirmed for the specific project in writing. No ranking, AI inclusion, citation or commercial result is promised.</p>
        </section>

        <section className={styles.section}>
          <h2>Accounts, access and security</h2>
          <p>The client keeps control of their domain, hosting and essential third-party accounts wherever the service allows it. New client-facing accounts should be created in the client&apos;s name where practical, including their billing control.</p>
          <p>Do not send passwords in an initial brief or ordinary email. Access is requested only after scope acceptance, only for the agreed work and through a client-controlled account or approved access method. Live-site changes require the client&apos;s written instruction.</p>
          <p>After final payment, client-specific source code and editable design files expressly included in the written scope are handed to the client. At handover, the delivery checklist records the live address, agreed source-file and asset locations, account roles, transfer or access-removal steps and any known remaining actions. The client may remove access once the agreed work is complete.</p>
          <p>The final archive is delivered to a client-controlled folder, repository or account agreed in writing. It identifies the delivered files, available content or database export, account roles, third-party licence list and platform-specific restoration route. For agreed live changes, a restorable backup is made before the change where the relevant platform permits and this is within the written scope. The recorded backup or rollback route is limited to that platform&apos;s available capability; it is not a guarantee of a third-party host&apos;s backup service or ongoing provider-held backup.</p>
        </section>

        <section className={styles.section}>
          <h2>Concerns, early end and responsibility</h2>
          <p>Raise a delivery concern by email with the affected page, date and any useful evidence. We compare it with the written scope and delivery checklist, then confirm in writing whether it is an agreed-scope fault, a new request or a third-party change and what happens next.</p>
          <p>If a project ends early, the written agreement records the completed work, remaining work, materials available for handover and any proportionate-refund position for genuinely undelivered agreed scope. This process does not remove any rights available through the agreed contract or PayPal&apos;s own procedures.</p>
        </section>

        <section className={styles.section}>
          <h2>Project information</h2>
          <p>We use project information only to answer the enquiry, prepare the agreed work, deliver it and keep essential service records. The <a href="/privacy/">privacy policy</a> explains the enquiry form, providers, retention and your choices in more detail.</p>
          <p>Client names, access details, references and non-public project material are not published without the client&apos;s permission. Public concept websites are clearly labelled as concepts, rather than being presented as paid client commissions. A prospective client may ask to see the delivery-checklist format that will be used for their project.</p>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Project%20question`}>
          <span><small>Questions before a project</small><strong>{email}</strong></span><b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/project-guide/">Project guide</a><a href="/project-agreement/">Project agreement</a><a href="/privacy/">Privacy</a><a href={`mailto:${email}?subject=Project%20question`}>{email}</a></div></footer>
    </main>
  );
}
