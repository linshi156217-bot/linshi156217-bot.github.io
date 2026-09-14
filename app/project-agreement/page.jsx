import styles from "../legal.module.css";

export const metadata = {
  title: "Business project agreement template",
  description: "The business-client project agreement template used by Linshi Studio for written scope, ownership, handover, backups, notices and dispute handling.",
  alternates: { canonical: "/project-agreement/" },
};

const email = "hello@linshistudio.com";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who owns source files, designs and third-party assets after a Linshi Studio project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Client-supplied materials remain the client's. Once the agreed final payment is cleared, client-specific source code and editable design files expressly included in the written scope are handed to the client. Third-party fonts, images, plugins, templates and platform features remain subject to their own licences. Linshi Studio retains its pre-existing tools, reusable methods and generic components, while giving the client the licence needed to use any included component in the delivered website.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in final handover and backup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The final handover record identifies the live URL, the agreed final source and design files, client-provided materials, applicable content or database export where the platform permits, account roles, third-party licence list, and written publishing or restoration route. The agreed archive is placed in a client-controlled folder or repository. Linshi Studio is not an ongoing backup custodian unless that is separately agreed in writing.",
      },
    },
    {
      "@type": "Question",
      name: "What law and court apply to a business-client project agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard business-client project agreement states that it is governed by the law of England and Wales, and that the courts of England and Wales have exclusive jurisdiction. The agreement also preserves any mandatory legal rights that cannot lawfully be excluded.",
      },
    },
  ],
};

export default function ProjectAgreementPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Business clients · Fixed agreement template</p>
          <h1>Clear ownership.<br /><em>Clear handover.</em></h1>
          <p className={styles.heroLead}>The standard terms used as the starting point for a written website project agreement: deliverables, files, backups, notices and what happens if there is a dispute.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last updated: 15 September 2026. This is Linshi Studio&apos;s standard template for business clients. Each project is confirmed in a written scope that names the client, price, deliverables and any project-specific changes. This public template is not legal advice and does not remove any mandatory legal rights that apply to either party.</p>

        <section className={styles.section}>
          <h2>1. Parties and project document</h2>
          <p><strong>Provider:</strong> Shi Lin, operating as Linshi Studio, an individual service provider based in China. Formal project correspondence: <a href={`mailto:${email}?subject=Formal%20Project%20Notice`}>{email}</a>.</p>
          <p><strong>Client:</strong> the business named in the written project scope, acting through the contact and billing email recorded there.</p>
          <p>The signed or expressly accepted written scope, this template and any stated project-specific schedule form the project agreement. If they conflict, the project-specific written scope takes priority only where it clearly says it changes this template.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Scope, acceptance and payment</h2>
          <p>The written scope identifies the agreed pages, features, exclusions, client materials, price, payment milestones, expected delivery route, revision allowance and handover items. Work outside that scope needs a separate written quotation or written variation before it begins.</p>
          <p>For standard website builds, payment is normally 50% to book the project and 50% after final approval and before live-domain launch or transfer. Any alternative payment arrangement is written in the project scope. Payment is requested by PayPal in GBP after the scope is accepted.</p>
          <p>Acceptance is recorded in writing. A client should report any agreed-scope delivery fault within seven calendar days of handover, with the affected page and enough detail to reproduce it.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Materials, source files and permissions</h2>
          <h3>Client materials</h3>
          <p>Text, logos, photographs, videos, trademarks, account content and other materials supplied by the client remain the client&apos;s responsibility and property or licensed material. The client confirms it has the permission needed for Linshi Studio to use them for the agreed project.</p>
          <h3>Client-specific work</h3>
          <p>After final payment has cleared, the client receives the client-specific source code and editable design files that are expressly listed in the written scope and handover checklist. The client may use, change and appoint another provider to maintain those delivered project-specific materials.</p>
          <h3>Pre-existing and third-party material</h3>
          <p>Linshi Studio retains ownership of its pre-existing tools, reusable methods, generic components, internal templates and know-how. Where an included final deliverable contains one of those items, the client receives a perpetual, non-exclusive licence to use it as part of that delivered website. Fonts, stock images, icons, plugins, templates, hosted platforms, open-source libraries and other third-party items remain subject to their own licences and service terms. The written handover record lists the relevant item, supplier or licence route and any client action or renewal required.</p>
          <p>No client is promised ownership of a third-party licence or platform account unless the provider&apos;s own terms permit its transfer and the written scope says that transfer is included.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Accounts, final backup and handover</h2>
          <p>Where the relevant service allows it, the client keeps control of the domain, hosting, billing and essential third-party accounts. New client-facing accounts should be created in the client&apos;s name where practical. Main passwords should not be sent by ordinary email; separate administrator access or an approved access method is used instead.</p>
          <p>At final handover, the checklist identifies and, where included in scope, supplies: the live URL; final approved source code or exported website files; editable design files; client-provided materials held for the project; project-specific assets created for the project; the content or database export available from the relevant platform; account roles and access-removal steps; and the third-party licence or renewal list.</p>
          <p>The final handover archive is placed in a client-controlled folder, repository or account agreed in the written scope. It includes a dated handover note that identifies the archive contents, file versions, live publishing route and the practical restoration route available for that platform. If a service does not provide export or restore functionality, the checklist says so rather than implying that a backup exists.</p>
          <p>The restoration route explains the agreed platform steps, the account needed to perform them and any dependency that must be restored first. The client should download and retain its own copy at handover. Unless ongoing backup is separately agreed in writing, Linshi Studio is not the long-term custodian of the client&apos;s production backup or third-party account data.</p>
          <p>For an agreed live change, a restorable pre-change backup is made only where the platform permits and the change is within written scope. This does not guarantee a third-party host&apos;s own backup service or recovery time.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Delivery fault, early end and refund</h2>
          <p>For seven calendar days from handover, a reported fault that prevents the agreed delivered scope working as specified is reviewed and, where confirmed, repaired without an additional fee. This period is not an automatic maintenance plan and does not cover new requests, client changes, third-party changes or hosting failures outside the agreed scope.</p>
          <p>If an agreed part cannot be delivered and cannot be reasonably remedied, the client receives a proportionate refund of the payment allocated to that undelivered part in the written scope. If the project ends early, the parties record in writing the completed work, remaining work, available handover materials and any resulting refund position.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Notices and practical resolution</h2>
          <p>A formal project notice must be sent from the client&apos;s agreed contact email to <a href={`mailto:${email}?subject=Formal%20Project%20Notice`}>{email}</a> with the subject line “Formal Project Notice — [client name] — [project]”. Linshi Studio sends a formal notice from <a href={`mailto:${email}?subject=Formal%20Project%20Notice`}>{email}</a> to the client email recorded in the written scope. A notice is treated as received on the next business day if it is not returned as undeliverable.</p>
          <p>Before court proceedings, either party should describe the issue, the remedy sought and supporting records in writing. The parties will first try in good faith to resolve the issue directly using the written scope, delivery checklist, handover record and payment record. This does not stop either party from taking urgent steps needed to protect its rights.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Governing law and disputes</h2>
          <p>This business-client project agreement, and any non-contractual dispute or claim arising from or connected with it, is governed by the law of England and Wales.</p>
          <p>The courts of England and Wales have exclusive jurisdiction to settle any dispute or claim arising from or connected with this agreement. Nothing in this template excludes or limits a right that applicable law does not permit either party to exclude or limit.</p>
          <p>This fixed clause is used for business clients. If a proposed project is for a consumer rather than a business, or requires a materially different jurisdiction arrangement, it must be reviewed and agreed in writing before payment rather than assumed from this public page.</p>
        </section>

        <section className={styles.section}>
          <h2>8. No outcome promises</h2>
          <p>Linshi Studio does not promise search ranking, AI inclusion, citation, traffic, enquiries, revenue or any other commercial result. The agreement concerns the stated website work, agreed checks and documented handover only.</p>
        </section>

        <a className={styles.cta} href={`mailto:${email}?subject=Business%20project%20agreement%20request`}>
          <span><small>Before payment</small><strong>Request a project-specific agreement</strong></span><b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/project-guide/">Project guide</a><a href="/working-together/">Project safeguards</a><a href="/provider-terms/">Provider terms</a><a href={`mailto:${email}?subject=Business%20project%20agreement%20request`}>{email}</a></div></footer>
    </main>
  );
}
