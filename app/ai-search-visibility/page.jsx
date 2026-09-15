import styles from "../legal.module.css";

export const metadata = {
  title: "What AI-search visibility can and cannot do",
  description: "A practical explanation of indexing, citations and recommendations for local service-business websites without ranking promises.",
  alternates: { canonical: "/ai-search-visibility/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What AI-search visibility can and cannot do for a local service business",
  description: "A practical explanation of indexing, citations and recommendations for local service-business websites without ranking promises.",
  mainEntityOfPage: "https://linshistudio.com/ai-search-visibility/",
  author: { "@type": "Organization", name: "Linshi Studio", url: "https://linshistudio.com/" },
  publisher: { "@type": "Organization", name: "Linshi Studio", url: "https://linshistudio.com/" },
  dateModified: "2026-09-15",
};

export default function AiSearchVisibilityPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <a className={styles.brand} href="/"><span className={styles.mark}>L.</span>Linshi Studio</a>
        <a className={styles.back} href="/website-review/">Website review</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Practical guide · AI search</p>
          <h1>Be clear.<br /><em>Not promised.</em></h1>
          <p className={styles.heroLead}>What AI-search visibility can and cannot do for a local service business, and what a useful website should make easy to verify.</p>
        </div>
      </section>

      <div className={styles.content}>
        <p className={styles.notice}>Last reviewed: 15 September 2026. This guide describes publicly documented search foundations. It does not promise a ranking, citation, recommendation, traffic, enquiries or revenue from any search engine or AI product.</p>

        <section className={styles.section}>
          <h2>Three things that are often confused</h2>
          <h3>1. Discovery and indexing</h3>
          <p>A public page first has to be accessible to the crawler that a search product uses. It should have a clear canonical URL, sensible internal links, an accurate title and description, and no accidental blocking rule. This is a foundation, not a guarantee that a page will be selected.</p>
          <h3>2. Citation</h3>
          <p>An AI answer may use or link to a page when it needs evidence for a particular query. That decision changes by question, source set and product. A citation is not a stable ranking position and may not appear again for the same business.</p>
          <h3>3. Recommendation</h3>
          <p>“Who should I hire?” is the hardest outcome. A useful answer system needs enough clear, reliable information to compare a business with alternatives. It may also rely on sources beyond the business&apos;s own website. No provider can honestly guarantee that an AI product will recommend a specific business.</p>
        </section>

        <section className={styles.section}>
          <h2>What a local service-business site can control</h2>
          <ol>
            <li><strong>Accurate business facts.</strong> Keep the service, service area, contact route, legal/provider identity and project process consistent across the pages that matter.</li>
            <li><strong>Useful original pages.</strong> Explain real customer questions, practical decisions and limits in plain language. A short, specific guide is more valuable than a large volume of repeated AI-written copy.</li>
            <li><strong>Evidence that can be checked.</strong> Use genuine project terms, authorised case information, clear examples and sources. Do not invent reviews, client names, awards or external mentions.</li>
            <li><strong>Technical access.</strong> Keep intended public pages crawlable, use a sitemap and check the usual search-console tools. Do not treat a file such as <code>llms.txt</code> as a magic route to inclusion.</li>
            <li><strong>Clear measurement.</strong> Track whether pages are indexed, which queries and pages are shown in search reporting, and whether real visitors take the intended next step. Separate those measures from a promise of AI recommendation.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>What not to buy or publish</h2>
          <ul>
            <li>Bulk pages written only to repeat a town, service or AI keyword.</li>
            <li>Fake reviews, fabricated case studies, invented publications or paid placements presented as independent evidence.</li>
            <li>A promise that a special schema, a directory submission or an AI file will make a business appear in every answer engine.</li>
            <li>Reports that treat a single screenshot or one answer as proof of long-term visibility.</li>
          </ul>
          <p>These approaches can make the site less trustworthy to people and less useful to search systems. Clear, original information and real evidence take longer, but they create a base that can be checked.</p>
        </section>

        <section className={styles.section}>
          <h2>A sensible monthly check</h2>
          <p>Use a fixed set of customer-like questions rather than chasing a single branded query. For example: “How do I choose a [service] provider in [place]?”, “What should I ask before a website handover?” and “What information should a [business type] website show?” Record the date, product, exact prompt, sources shown and whether the answer is accurate. Do not count an appearance as a sale or a ranking.</p>
          <p>For the underlying website, check <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noreferrer">Google&apos;s AI-search guidance</a>, <a href="https://help.openai.com/en/articles/12627856" target="_blank" rel="noreferrer">OpenAI&apos;s crawler guidance</a> and <a href="https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a" target="_blank" rel="noreferrer">Bing&apos;s webmaster guidelines</a>. These are useful foundations; none says that inclusion or a recommendation is guaranteed.</p>
        </section>

        <section className={styles.section}>
          <h2>Where a practical review helps</h2>
          <p>A website review can identify unclear service information, weak mobile journeys, missing trust details and obvious crawler-access issues. It cannot turn those findings into a guaranteed result. Linshi Studio&apos;s <a href="/website-review/">quarterly website and AI-search review</a> therefore delivers a prioritised action list, not an AI-placement promise.</p>
        </section>

        <a className={styles.cta} href="/website-review/"><span><small>Practical next step</small><strong>Read the website-review scope and boundaries</strong></span><b aria-hidden="true">↗</b></a>
      </div>
      <footer className={styles.footer}><div className={styles.footerInner}><span>© 2026 Linshi Studio</span><a href="/website-review/">Website review</a><a href="/website-review-framework/">Review framework</a><a href="mailto:hello@linshistudio.com">hello@linshistudio.com</a></div></footer>
    </main>
  );
}
