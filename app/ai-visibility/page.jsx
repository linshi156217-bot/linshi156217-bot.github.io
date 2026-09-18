import styles from "../legal.module.css";

export const metadata = {
  title: "Local Website Growth System",
  description:
    "A fixed-scope 90-day programme that repairs or builds a local-service website and strengthens its enquiry, local-search and AI-search foundations without guarantees of rankings, recommendations or leads.",
  alternates: { canonical: "/ai-visibility/" },
};

const email = "hello@linshistudio.com";
const diagnosticUrl = `mailto:${email}?subject=Local%20AI%20Visibility%20Diagnostic%20enquiry&body=Business%20name%3A%0ATown%20or%20service%20area%3A%0ACurrent%20website%3A%0AThree%20core%20services%3A%0A`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Website Growth System",
  provider: { "@type": "ProfessionalService", name: "Linshi Studio", url: "https://linshistudio.com/" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  offers: {
    "@type": "Offer",
    price: "2997",
    priceCurrency: "GBP",
    url: "https://linshistudio.com/ai-visibility/",
    description: "Fixed 90-day website, local-search and AI-search foundation for one business, one city and up to three core services.",
  },
};

export default function AiVisibilityPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/project-guide/">Project guide</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Fixed 90-day programme</p>
          <h1>One website.<br /><em>One growth foundation.</em></h1>
          <p className={styles.heroLead}>A bounded programme for local service businesses that need a clearer website, stronger enquiry routes and more consistent public information across Google, maps and AI-assisted search.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>We guarantee the agreed website, content, public-information, tracking and reporting work is completed to scope. This programme improves the factual, technical and evidence foundations that AI-assisted search systems may use. It does not purchase, control or guarantee inclusion in any AI answer, ranking, citation, enquiry, sale or revenue outcome.</p>

        <section className={styles.sprintPanel}>
          <div>
            <p className={styles.eyebrow}>Start with evidence</p>
            <h2>Local AI Visibility Diagnostic</h2>
            <strong>£499</strong>
            <p>A one-off audit, fully credited if you begin the 90-day foundation.</p>
          </div>
          <div>
            <ul>
              <li>A fixed baseline of 30 locally relevant customer questions</li>
              <li>Five comparable competitors</li>
              <li>Website, map-profile, review and third-party evidence gaps</li>
              <li>A prioritised 90-day route with clear exclusions</li>
            </ul>
            <a href={diagnosticUrl}>Ask about a £499 diagnostic ↗</a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Existing Website + Visibility — £2,997</h2>
          <p>Paid in three monthly payments of £999. For one business, one city and up to three core services. We repair and strengthen the existing public website rather than rebuild it from scratch.</p>
          <h3>Included in both 90-day routes</h3>
          <ul>
            <li>Repair of one agreed priority page or enquiry path: forms, links, mobile issues, calls, WhatsApp, booking or quote routes.</li>
            <li>Audit-led corrections to core public business facts, services, locations and contact information.</li>
            <li>Up to three new public pages, each covering one agreed service or one agreed area topic; up to 15 FAQs based only on client-confirmed facts.</li>
            <li>One case-study page template. Real case text, images, prices and permission to publish are supplied and approved by the client.</li>
            <li>Organisation or LocalBusiness, Service and FAQPage structured data only where appropriate to the actual business, plus a validation record.</li>
            <li>Google Business Profile plus up to five named public directories audited; with client-approved access, up to 10 factual consistency changes are completed.</li>
            <li>Each month: one public-site and public-information check, the same 30-question baseline rechecked, and a record of publicly visible sampled mentions, citations or changes.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>New Website + Visibility — £3,997</h2>
          <p>Paid in three instalments. This includes the same 90-day foundation plus a new or rebuilt website of up to five core public pages. Client-approved text, services, images, legal information and account access are required before build work begins; two consolidated revision rounds are included.</p>
          <h3>Additional build deliverables</h3>
          <ul>
            <li>Mobile-first website design and build for up to five agreed public pages.</li>
            <li>Service, project-proof, location and enquiry-page structure.</li>
            <li>Quote-request, email, telephone, WhatsApp, booking or existing-platform links.</li>
            <li>Basic technical checks, domain-launch support and 30 days of delivered-work defect support.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>What is not included</h2>
          <ul>
          <li>Unlimited pages, additional cities or services, unlimited amendments, e-commerce, custom booking, CRM, payment or software development.</li>
          <li>Advertising, paid directories, directory verification, media placement, PR, photography or video production.</li>
          <li>Third-party tools, subscriptions, platform fees or changes where the client does not provide the required access.</li>
            <li>Invented case studies, reviews, citations, links or business facts.</li>
            <li>Any guarantee of a recommendation, citation, ranking, enquiry or revenue outcome.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How the work is measured</h2>
          <p>Each month records the agreed pages, public information checked, the same question baseline, actions completed and unresolved dependencies. AI-assisted answers can differ by platform, date, location and account; the record observes publicly visible samples, not a controlled ranking. The contractual delivery is the agreed website and foundation work with evidence — not a placement in any system&apos;s answer.</p>
        </section>

        <a className={styles.cta} href={diagnosticUrl}>
          <span><small>Start with the current website and service area</small><strong>Request a £499 diagnostic</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href={`mailto:${email}?subject=Local%20AI%20Visibility%20Diagnostic%20enquiry`}>{email}</a>
          <a href="/privacy/">Privacy</a>
          <a href="/provider-terms/">Provider terms</a>
        </div>
      </footer>
    </main>
  );
}
