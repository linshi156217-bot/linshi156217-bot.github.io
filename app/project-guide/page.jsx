import styles from "../legal.module.css";

export const metadata = {
  title: "Website prices, payment and timelines | Linshi Studio",
  description:
    "Public website prices, payment milestones, timelines and provider details from Linshi Studio: £99 enquiry-path fix, £350 quarterly review and fixed 90-day website growth programmes.",
  alternates: { canonical: "/project-guide/" },
};

const email = "hello@linshistudio.com";
const whatsappUrl = "https://wa.me/qr/NFHKON7S4RKEO1";
const reviewUrl = "/website-review/";
const startUrl = `mailto:${email}?subject=Website%20project%20enquiry&body=Business%20name%3A%0ATown%20or%20service%20area%3A%0ACurrent%20website%20or%20social%20page%3A%0AMain%20services%3A%0AIdeal%20launch%20date%3A`;
const sprintUrl = `mailto:${email}?subject=%C2%A399%20Enquiry-path%20fix&body=Business%20name%3A%0ATown%20or%20service%20area%3A%0ACurrent%20website%20or%20social%20page%3A%0AThe%20broken%20contact%2C%20quote%2C%20booking%2C%20phone%20or%20WhatsApp%20route%3A`;
const aiVisibilityUrl = "/ai-visibility/";

const packages = [
  { name: "Essential", price: "£650", copy: "A focused one-page website", items: ["Up to 6 considered sections", "Services or menu highlights", "Gallery and contact routes", "Domain connection", "Two revision rounds"] },
  { name: "Signature", price: "£950", copy: "A fuller multi-page experience", items: ["Up to 5 pages", "Full menu or service presentation", "Portfolio and trust details", "Existing booking-link integration", "Two revision rounds"], featured: true },
  { name: "Bespoke", price: "From £1,350", copy: "For custom scope or integrations", items: ["Written scope before work", "Advanced content organisation", "Custom enquiry journeys", "Fixed quotation", "Two revision rounds"] },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Linshi Studio",
    url: "https://linshistudio.com/project-guide/",
    email,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Linshi Studio public services",
      itemListElement: [
        { "@type": "Offer", name: "Enquiry-path fix", price: "99", priceCurrency: "GBP", url: "https://linshistudio.com/project-guide/" },
        { "@type": "Offer", name: "Quarterly website and AI-search review", price: "350", priceCurrency: "GBP", url: "https://linshistudio.com/website-review/" },
        { "@type": "Offer", name: "Existing Website + Visibility", price: "2997", priceCurrency: "GBP", url: "https://linshistudio.com/ai-visibility/" },
        { "@type": "Offer", name: "New Website + Visibility", price: "3997", priceCurrency: "GBP", url: "https://linshistudio.com/ai-visibility/" },
        { "@type": "Offer", name: "Essential website", price: "650", priceCurrency: "GBP", url: "https://linshistudio.com/project-guide/" },
        { "@type": "Offer", name: "Signature website", price: "950", priceCurrency: "GBP", url: "https://linshistudio.com/project-guide/" },
        { "@type": "Offer", name: "Bespoke website", price: "1350", priceCurrency: "GBP", url: "https://linshistudio.com/project-guide/" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Who provides the service?", acceptedAnswer: { "@type": "Answer", text: "Linshi Studio is operated by Shi Lin from China as an individual service provider. It is not presented as a UK-registered company." } },
      { "@type": "Question", name: "What are the public starting prices?", acceptedAnswer: { "@type": "Answer", text: "The enquiry-path fix is £99, the one-off quarterly website and AI-search review is £350, the Local AI Visibility Diagnostic is £499, the existing-website 90-day route is £2,997, and the New Website + Visibility 90-day route is £3,997. Essential websites start at £650, Signature websites are £950, and bespoke websites start from £1,350. Scope is agreed in writing before payment." } },
      { "@type": "Question", name: "When is payment requested?", acceptedAnswer: { "@type": "Answer", text: "For standard website projects, a 50% booking deposit is requested through PayPal after written scope and price are accepted. The remaining 50% is due after final approval and before launch or transfer. The £99 enquiry-path fix and £350 quarterly review are paid in full after written scope is accepted." } },
      { "@type": "Question", name: "How long do standard websites take?", acceptedAnswer: { "@type": "Answer", text: "Essential projects usually take 7–10 working days and Signature projects 10–15 working days after approved content is received." } },
    ],
  },
];

export default function ProjectGuidePage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/">Back to studio</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Project guide · Fixed scope</p>
          <h1>Clear work.<br /><em>Clear price.</em></h1>
          <p className={styles.heroLead}>A concise public guide to scope, payment, timing, revisions and the information needed to begin.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Prices are one-off build fees. Domain renewals and optional third-party services remain the client&apos;s responsibility and are agreed before purchase.</p>

        <section className={styles.section}>
          <h2>Who you are working with</h2>
          <p>Linshi Studio is an independent web studio operated by Shi Lin from China as an individual service provider. It is not presented as a UK-registered company.</p>
          <p>Before payment, the written scope and payment request identify the provider as Shi Lin trading as Linshi Studio, the agreed service, price, payment milestones and delivery route. If the studio&apos;s legal structure changes in future, this page and new client documents will be updated before they are used.</p>
        </section>

        <section className={styles.section} aria-labelledby="quick-facts-title">
          <h2 id="quick-facts-title">Quick facts before you enquire</h2>
          <h3>Who provides the work?</h3>
          <p>Shi Lin operates Linshi Studio from China as an individual service provider. The studio is not presented as a UK-registered company.</p>
          <h3>What are the published prices?</h3>
          <p>£99 for one enquiry-path fix; £350 for one quarterly website and AI-search review; £499 for a Local AI Visibility Diagnostic; £2,997 for the existing-website 90-day route; £3,997 for the new-website 90-day route; websites from £650. The exact scope and fixed price are agreed in writing before payment.</p>
          <h3>When is payment requested?</h3>
          <p>Standard website projects use a 50% booking deposit and 50% final-payment structure through PayPal. The £99 enquiry-path fix and £350 quarterly review are paid in full only after their written scope is accepted.</p>
          <h3>How long do standard websites take?</h3>
          <p>Essential projects usually take 7–10 working days and Signature projects 10–15 working days after approved content is received.</p>
          <h3>How are delivery issues handled?</h3>
          <p>Each paid project has a written delivery checklist. Reported faults in the agreed delivered scope are reviewed for seven calendar days after handover. If an agreed part remains undelivered and cannot be reasonably remedied, the amount allocated to that undelivered part in the written scope is refunded.</p>
        </section>

        <section className={styles.sprintPanel}>
          <div>
            <p className={styles.eyebrow}>Low-risk first project</p>
            <h2>Enquiry-path fix</h2>
            <strong>£99</strong>
            <p>A fixed-scope repair for one confirmed fault between a visitor and the next action.</p>
          </div>
          <div>
            <ul>
              <li>One reproducible form, link, button, call, WhatsApp or booking-route fault</li>
              <li>Problem confirmed before payment</li>
              <li>One agreed repair on the existing public website</li>
              <li>Written completion record or a clear third-party-access dependency</li>
              <li>Full £99 credited to a 90-day programme booked within 30 days</li>
            </ul>
            <p>This is not a free audit, website redesign or multi-page change. Any required third-party access must be approved by the client.</p>
            <a href={sprintUrl}>Ask about a £99 fix ↗</a>
          </div>
        </section>

          <section className={styles.sprintPanel}>
           <div>
             <p className={styles.eyebrow}>One-off quarterly check</p>
            <h2>Website &amp; AI-search review</h2>
            <strong>£350</strong>
            <p>A fixed-scope review of an agreed public website, its mobile customer journey and AI-search clarity.</p>
          </div>
          <div>
            <ul>
              <li>Main website and priority pages</li>
              <li>Mobile journey, wording and trust signals</li>
              <li>Indexing basics and relevant crawler access</li>
              <li>A concise prioritised action list</li>
            </ul>
            <p>This is one review, not an automatically renewing subscription. It does not include live changes or any promise of AI inclusion, citation or ranking.</p>
            <a href={reviewUrl}>Read the full £350 review scope ↗</a>
          </div>
          </section>

        <section className={styles.sprintPanel}>
          <div>
            <p className={styles.eyebrow}>90-day fixed foundation</p>
            <h2>Existing Website + Visibility</h2>
            <strong>£2,997</strong>
            <p>Three monthly payments of £999 for one business, one city and up to three core services.</p>
          </div>
          <div>
            <ul>
              <li>£499 Local AI Visibility Diagnostic, fully credited when the 90-day foundation begins</li>
              <li>Up to three new service-or-area pages, 15 factual FAQs and one client-supplied case-study template</li>
              <li>Appropriate structured-data foundations, Google Business Profile plus up to five named directories, and up to 10 approved factual updates</li>
              <li>Monthly public-site and public-information checks plus the same 30-question AI-search baseline</li>
            </ul>
            <p>This is not a promise of ChatGPT recommendations, citations, rankings, enquiries or revenue. It does not include a website rebuild, unlimited changes, advertising, directory verification, photography, paid directories, media placement or third-party subscriptions. Client facts, case material and required account access are needed before implementation.</p>
            <a href={aiVisibilityUrl}>Read the 90-day scope and limits ↗</a>
          </div>
        </section>
        <section className={styles.sprintPanel}>
          <div>
            <p className={styles.eyebrow}>90-day new website route</p>
            <h2>New Website + Visibility</h2>
            <strong>£3,997</strong>
            <p>New or rebuilt website of up to five public pages plus the same 90-day website, local-search and AI-search foundation. Client-approved content, images, legal details and account access are required; two consolidated revision rounds are included.</p>
          </div>
          <div>
            <ul>
              <li>Mobile-first website design and build for up to five agreed public pages</li>
              <li>Service, project-proof, location and enquiry-page structure</li>
              <li>Quote, telephone, WhatsApp, booking or existing-platform links</li>
              <li>Monthly checks, delivery evidence and 30 days of delivered-work defect support</li>
            </ul>
            <p>This route does not include unlimited pages, advertising, paid directories, photography, custom CRM, booking, payment or software development.</p>
            <a href={aiVisibilityUrl}>Read the 90-day scope and limits ↗</a>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Website packages</h2>
          <div className={styles.priceGrid}>
            {packages.map((item) => (
              <article className={`${styles.priceCard} ${item.featured ? styles.priceCardFeatured : ""}`} key={item.name}>
                <h3>{item.name}</h3><strong>{item.price}</strong><p>{item.copy}</p>
                <ul>{item.items.map((line) => <li key={line}>{line}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Payment and delivery</h2>
          <p>The £99 enquiry-path fix and the £350 one-off quarterly review are each paid in full after their written fixed scope is accepted. Standard website projects use the 50% deposit and 50% final-payment structure below.</p>
          <p>After the written scope and fixed price are accepted, payment is requested through PayPal in GBP. The PayPal payment request identifies Shi Lin trading as Linshi Studio, the agreed service, the amount and the due date.</p>
          <ol>
            <li>A written scope and fixed price are agreed first.</li>
            <li>A PayPal payment request for the 50% booking deposit is issued to the client&apos;s confirmed billing email.</li>
            <li>The deposit confirms the booking; production starts after both the cleared deposit and required content are received.</li>
            <li>The client supplies approved text, images and business details.</li>
            <li>Two consolidated revision rounds are included.</li>
            <li>A separate PayPal payment request for the remaining 50% is due after final approval and before live-domain launch or transfer.</li>
          </ol>
          <p>PayPal may offer payment by PayPal Wallet, debit card or credit card depending on the client&apos;s location and account eligibility. Any PayPal processing or currency-conversion information is shown by PayPal before payment.</p>
          <p>Cancellation and refund terms are confirmed in the written project agreement; they are not changed through chat messages.</p>
          <p>Essential projects usually take 7–10 working days and Signature projects 10–15 working days after all approved content is received.</p>
          <p>The business keeps control of its domain and approved content. Handover notes and a written delivery checklist are included. Reported faults in the agreed delivered scope are reviewed for seven calendar days after handover. If an agreed part remains undelivered and cannot be reasonably remedied, the amount allocated to that undelivered part in the written scope is refunded.</p>
        </section>

        <section className={styles.section}>
          <h2>What to send</h2>
          <ul>
            <li>Business name, town and current website or social page.</li>
            <li>Main services, menu or treatment list with approved prices.</li>
            <li>Opening details, service area and preferred contact routes.</li>
            <li>Approved logo, photographs and any existing booking link.</li>
            <li>The most important action a mobile visitor should take.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Quoted separately</h2>
          <p>E-commerce, custom booking systems, customer accounts, dashboards, logo design, professional photography, large-scale copywriting, verified translation and paid advertising are not included in the standard packages.</p>
        </section>

        <a className={styles.cta} href={startUrl}>
          <span><small>Start with five useful details</small><strong>Email a project brief</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 Linshi Studio</span>
          <a href={`mailto:${email}?subject=Website%20project%20enquiry`}>{email}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="/privacy/">Privacy</a>
          <a href="/provider-terms/">Provider terms</a>
        </div>
      </footer>
    </main>
  );
}
