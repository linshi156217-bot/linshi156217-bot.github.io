import styles from "../legal.module.css";

export const metadata = {
  title: "UK service-business website handover checklist",
  description: "A practical checklist for website files, accounts, licences, backups and restoration notes at handover.",
  alternates: { canonical: "/website-handover-checklist/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UK service-business website handover checklist",
  description: "A practical checklist for files, accounts, licences, backups and restoration notes at website handover.",
  mainEntityOfPage: "https://linshistudio.com/website-handover-checklist/",
  author: { "@type": "Organization", name: "Linshi Studio", url: "https://linshistudio.com/" },
  publisher: { "@type": "Organization", name: "Linshi Studio", url: "https://linshistudio.com/" },
  dateModified: "2026-09-15",
};

export default function WebsiteHandoverChecklistPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/website-review/">Website review</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Practical guide · Business websites</p>
          <h1>Leave with<br /><em>control.</em></h1>
          <p className={styles.heroLead}>A practical website-handover checklist for a UK service business: what should be identified, transferred or documented when a project ends.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last reviewed: 15 September 2026. This is a practical handover guide, not legal advice. The exact deliverables and any third-party platform limits must be written into the project scope rather than assumed from a generic checklist.</p>

        <section className={styles.section}>
          <h2>What good handover means</h2>
          <p>Handover is not just receiving a live link. A client should be able to identify what was delivered, who controls essential accounts, which third-party licences apply and how to find the final files later. The simplest test is this: could the business appoint another provider without guessing what exists or where it is held?</p>
          <p>For a service-business website, the handover should be concise, dated and tied to the written scope. It should distinguish client-specific work from third-party products and from a provider&apos;s own reusable tools.</p>
        </section>

        <section className={styles.section}>
          <h2>Before work starts: agree the control points</h2>
          <ol>
            <li><strong>Name the account owners.</strong> Record who controls the domain, hosting, billing, analytics, email and any platform account. New client-facing accounts should normally be created in the client&apos;s name where practical.</li>
            <li><strong>List the handover items in scope.</strong> Specify which source code, editable designs, content exports, asset folders, access roles and written notes will be delivered.</li>
            <li><strong>Separate third-party items.</strong> Fonts, stock images, plugins, templates and hosted platforms have their own licences. List the supplier, licence route and renewal responsibility instead of implying the client owns them outright.</li>
            <li><strong>Choose the client-controlled archive location.</strong> Agree a client folder, repository or account before delivery. A project archive stored only in a provider&apos;s workspace is not a completed handover.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Final handover checklist</h2>
          <h3>1. Live service record</h3>
          <ul>
            <li>The final live URL and the date of handover.</li>
            <li>The pages, features and changes included in the agreed delivery.</li>
            <li>Any known platform limitation or excluded item that the client should not mistake for a fault.</li>
          </ul>
          <h3>2. Files and creative material</h3>
          <ul>
            <li>Client-specific source code and editable design files only where they were expressly included in the written scope.</li>
            <li>Client-provided logos, copy, images and other project materials held for the work.</li>
            <li>Project-specific assets created for the project, with a note of their format and location.</li>
            <li>A list of relevant third-party fonts, images, plugins, templates and licences, including any renewal or account action the client must take.</li>
          </ul>
          <h3>3. Access and accounts</h3>
          <ul>
            <li>The relevant administrator roles, plus a record of which provider access should be removed or reduced after handover.</li>
            <li>A confirmation that passwords are shared through a separate safe method, not pasted into an ordinary handover email.</li>
            <li>Any account that cannot be transferred, with the reason and the client&apos;s practical next step.</li>
          </ul>
          <h3>4. Backup and restoration note</h3>
          <ul>
            <li>The archive contents, file versions and date.</li>
            <li>The client-controlled folder, repository or account where the archive is stored.</li>
            <li>The available content or database export, only if the relevant platform permits one.</li>
            <li>The practical restoration route: which account is required, which platform steps apply and any dependency that must be restored first.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>What should not be promised</h2>
          <p>A handover note should not pretend that every platform can export everything, that a host&apos;s backup can be restored instantly or that a third-party licence can be transferred when its own terms say otherwise. State the actual route, the account needed and the limit.</p>
          <p>Likewise, a short post-handover fault window is not an unlimited maintenance service. For Linshi Studio business projects, confirmed faults in the agreed delivered scope reported within seven calendar days are reviewed and repaired without an additional fee. Ongoing maintenance, new requests and third-party outages need their own scope.</p>
        </section>

        <section className={styles.section}>
          <h2>A usable final record</h2>
          <p>Keep the final record short enough to use. A business should be able to open it six months later and answer five questions: what is live; what files exist; which accounts matter; what has to be renewed; and how to restore or appoint a new provider. That is more useful than a large unlabelled folder.</p>
          <p>Linshi Studio&apos;s public <a href="/project-agreement/">business project agreement template</a> describes the standard ownership, account-control, backup and restoration boundaries used as a starting point. The project-specific written scope remains the controlling record for an individual project.</p>
        </section>

        <a className={styles.cta} href="/working-together/"><span><small>Next reading</small><strong>See the project safeguards and handover process</strong></span><b aria-hidden="true">↗</b></a>
      </div>
      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/website-review/">Website review</a><a href="/project-agreement/">Project agreement</a><a href="mailto:hello@linshistudio.com">hello@linshistudio.com</a></div></footer>
    </main>
  );
}
