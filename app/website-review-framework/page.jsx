import styles from "../legal.module.css";

export const metadata = {
  title: "A practical website-review framework",
  description: "A clear framework for reviewing mobile enquiry journeys, service information, accessibility, trust and technical discoverability.",
  alternates: { canonical: "/website-review-framework/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A practical website-review framework for UK service businesses",
  description: "A clear framework for reviewing mobile enquiry journeys, service information, accessibility, trust and technical discoverability.",
  mainEntityOfPage: "https://linshistudio.com/website-review-framework/",
  author: { "@type": "Organization", name: "Linshi Studio", url: "https://linshistudio.com/" },
  publisher: { "@type": "Organization", name: "Linshi Studio", url: "https://linshistudio.com/" },
  dateModified: "2026-09-15",
};

export default function WebsiteReviewFrameworkPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/website-review/">Website review</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Practical guide · Website review</p>
          <h1>Evidence.<br /><em>Then action.</em></h1>
          <p className={styles.heroLead}>A practical framework for reviewing a UK service-business website without confusing a long list of observations with a useful decision.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last reviewed: 15 September 2026. This published framework explains the lenses used in a practical review. It does not mean that every issue listed here is audited on every project; the agreed pages and checks are confirmed in writing before work begins.</p>

        <section className={styles.section}>
          <h2>Start with the customer action</h2>
          <p>A review should begin with the action the business actually needs: a call, an enquiry, a booking, a visit or a qualified request. Without that, it is easy to identify cosmetic differences while missing the moment where a customer cannot understand the service or take the next step.</p>
          <p>For each agreed page, capture the evidence first: the page URL, device context, visible copy, interaction or technical response. Then state why it matters and what a realistic change would be. This keeps the final list useful to an owner, a developer or a future provider.</p>
        </section>

        <section className={styles.section}>
          <h2>Five review lenses</h2>
          <h3>1. Mobile enquiry journey</h3>
          <p>Check the first screen, service route, main call to action, contact method and form path on a phone-sized view. The question is not whether the site merely fits the screen; it is whether a new visitor can work out what to do next.</p>
          <h3>2. Service information and wording</h3>
          <p>Check whether the service, audience, location relationship, exclusions and next step are understandable without insider knowledge. Flag duplicate, vague or conflicting labels that make a real offer sound uncertain.</p>
          <h3>3. Accessibility and usable content</h3>
          <p>Look for clear headings, meaningful image descriptions where needed, readable contrast, visible focus and understandable controls. Accessibility is not an optional decoration: it also makes a service and its actions easier to interpret.</p>
          <h3>4. Trust and ownership signals</h3>
          <p>Check whether the site says who provides the service, how scope and payment are agreed, what the client receives and how issues are handled. Use truthful statements and authorised evidence only; do not fill a gap with invented testimonials.</p>
          <h3>5. Technical discoverability</h3>
          <p>Check public-page basics such as canonical URLs, titles, descriptions, internal links, sitemap and crawler access. For AI-search questions, distinguish technical access from a promise that any system will cite or recommend the business.</p>
        </section>

        <section className={styles.section}>
          <h2>Turn observations into a decision document</h2>
          <p>Each finding should include four parts:</p>
          <ol>
            <li><strong>Evidence:</strong> the page, screen, response or content element observed.</li>
            <li><strong>Impact:</strong> how it may affect a visitor&apos;s clarity, confidence, access or next action.</li>
            <li><strong>Recommendation:</strong> the smallest practical change worth considering.</li>
            <li><strong>Verification:</strong> how the business can confirm the change after it is made.</li>
          </ol>
          <p>Then group work into <strong>urgent</strong>, <strong>valuable</strong> and <strong>optional</strong>. An urgent item blocks a clear customer action or creates a material error; valuable work improves an important journey; optional work may be useful but does not need to delay the next release.</p>
        </section>

        <section className={styles.section}>
          <h2>What a review does not do</h2>
          <p>A review is not a hidden promise to change a live website, provide ongoing monitoring, submit to directories, buy traffic or secure search rankings. Implementation needs a separate written scope. Any result that depends on a third-party platform, a search engine, an AI system or customer behaviour should be described as a risk or possibility, not a guarantee.</p>
          <p>The outcome should be a concise action list that the client can keep, understand and use with Linshi Studio or another provider. That is a more durable result than an opaque score or a dashboard with no next step.</p>
        </section>

        <section className={styles.section}>
          <h2>How Linshi Studio applies it</h2>
          <p>The <a href="/website-review/">£350 quarterly website and AI-search review</a> uses this framework for the agreed public website and priority pages. The deliverable is a prioritised written action list. Live implementation, ongoing monitoring and any commercial outcome are outside that review unless separately agreed.</p>
        </section>

        <a className={styles.cta} href="/website-review/"><span><small>Review scope</small><strong>See what the quarterly review includes</strong></span><b aria-hidden="true">↗</b></a>
      </div>
      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/website-review/">Website review</a><a href="/ai-search-visibility/">AI-search guide</a><a href="mailto:hello@linshistudio.com">hello@linshistudio.com</a></div></footer>
    </main>
  );
}
