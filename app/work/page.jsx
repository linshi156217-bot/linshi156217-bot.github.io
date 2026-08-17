import Image from "next/image";
import EnquiryComposer from "./EnquiryComposer";
import styles from "./work.module.css";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: "Linshi Studio | Mobile enquiry journeys for UK businesses",
  description:
    "Founder-led mobile website design for independent UK businesses. Request a £350 annual website and AI-search review, start with a £149 mobile sprint or commission a complete website.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Linshi Studio | Turn mobile visits into clearer enquiries",
    description:
      "A founder-led studio fixing the point where a mobile visitor gets stuck.",
    url: "/",
    siteName: "Linshi Studio",
    type: "website",
    images: [
      {
        url: "/assets/studio-v2/hero-campaign-v2.webp",
        width: 1536,
        height: 1024,
        alt: "Linshi Studio brand campaign for restaurant, renovation and salon websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linshi Studio | Mobile enquiry journeys",
    description:
      "Start with one fixed-scope mobile enquiry sprint or commission a complete website.",
    images: ["/assets/studio-v2/hero-campaign-v2.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const instagramUrl = "https://www.instagram.com/designerlinshi/";
const facebookUrl =
  "https://www.facebook.com/profile.php?id=61592734760210";
const emailAddress = "hello@linshistudio.com";
const emailUrl =
  "mailto:hello@linshistudio.com?subject=Website%20project%20enquiry";
const whatsappUrl = "https://wa.me/qr/NFHKON7S4RKEO1";

const projects = [
  {
    number: "01",
    sector: "Restaurant / Hospitality",
    title: "Salt & Hawthorn",
    line: "From a Maps result to a table worth finding.",
    description:
      "A visitor-first restaurant concept with dishes, menu, opening details and directions arranged for a quick decision on a phone.",
    image: "/assets/studio-v2/restaurant-case-v2.webp",
    alt: "Moody editorial restaurant table by the North Yorkshire coast",
    href: "/salt-and-hawthorn/",
    theme: styles.projectBlue,
  },
  {
    number: "02",
    sector: "Homes / Local trades",
    title: "Alder & Slate",
    line: "Turn good workmanship into visible trust.",
    description:
      "A renovation concept that gives homeowners a clear standard of work, a useful service area and an uncomplicated route to enquire.",
    image: "/assets/studio-v2/renovation-case-v2.webp",
    alt: "Craftsperson installing dark timber cabinetry in a refined home",
    href: "/alder-and-slate/",
    theme: styles.projectIvory,
  },
  {
    number: "03",
    sector: "Hair / Beauty",
    title: "Aster House",
    line: "Show the taste before the appointment.",
    description:
      "An editorial salon concept that communicates atmosphere, work, services, price level and practical visit details before a client messages.",
    image: "/assets/studio-v2/salon-case-v2.webp",
    alt: "Refined contemporary hair salon with a sculptural colour portrait",
    href: "/aster-house-hair/",
    theme: styles.projectRose,
  },
  {
    number: "04",
    sector: "Dental / Private healthcare",
    title: "Marlowe Dental House",
    line: "Turn clinical detail into calm, credible trust.",
    description:
      "A regulation-aware dental concept that organises care, approach, verified team information and first-visit details without exaggerated treatment claims.",
    image: "/assets/marlowe-dental/reception.webp",
    alt: "Warm reception inside the fictional Marlowe Dental House",
    href: "/marlowe-dental/",
    theme: styles.projectSage,
  },
  {
    number: "05",
    sector: "Boutique stays / Hospitality",
    title: "Gable & Mere",
    line: "Make the stay feel real before the guest arrives.",
    description:
      "A cinematic guesthouse concept that shows rooms, breakfast, parking and the practical rhythm of a Lake District stay before sending guests to book.",
    image: "/assets/gable-and-mere/exterior.webp",
    alt: "Fictional Lakeland guesthouse glowing above the lake at blue hour",
    href: "/gable-and-mere/",
    theme: styles.projectRust,
  },
];

const process = [
  {
    number: "01",
    title: "Find the decision",
    copy: "We identify what a customer still needs after Google Maps or social media has introduced the business.",
  },
  {
    number: "02",
    title: "Design mobile first",
    copy: "The phone experience is the real product. Larger screens are then composed with the same care.",
  },
  {
    number: "03",
    title: "Build with real detail",
    copy: "Approved services, images, prices, directions and contact routes replace vague template copy.",
  },
  {
    number: "04",
    title: "Connect and launch",
    copy: "We test the finished site, connect the business-owned domain and provide clear handover notes for future changes.",
  },
];

const starterOffer = {
  name: "Mobile enquiry sprint",
  price: "£149",
  timeline: "Private preview in 3 working days",
  copy:
    "A low-risk first project for a business that knows its mobile journey is losing clarity but is not ready to commission a complete rebuild.",
  features: [
    "One verified mobile enquiry problem",
    "One redesigned priority screen or section",
    "Private before-and-after preview",
    "A written implementation recommendation",
    "The full £149 credited against an Essential or larger website booked within 30 days",
  ],
};

const packages = [
  {
    name: "Annual review",
    price: "£350",
    note: "Website, mobile journey and AI-search clarity",
    href: "/website-review/",
    features: [
      "Main website and priority pages",
      "Mobile customer journey review",
      "Navigation, wording and trust signals",
      "OAI-SearchBot access and AI-search clarity",
      "Prioritised written action list",
    ],
  },
  {
    name: "Essential",
    price: "£650",
    note: "A focused one-page website",
    features: [
      "Up to 6 considered content sections",
      "Services or menu highlights",
      "Gallery, opening details and contact routes",
      "Domain connection and launch support",
      "Two consolidated revision rounds",
    ],
  },
  {
    name: "Signature",
    price: "£950",
    note: "A fuller multi-page brand experience",
    featured: true,
    features: [
      "Up to 5 pages or an equivalent long-form site",
      "Full menu, services or treatment presentation",
      "Expanded portfolio, reviews and trust details",
      "Existing booking or ordering link integration",
      "Two consolidated revision rounds",
    ],
  },
  {
    name: "Bespoke",
    price: "From £1,350",
    note: "For additional pages or custom integrations",
    features: [
      "Scope agreed before work begins",
      "Advanced content organisation",
      "Custom enquiry journeys",
      "Fixed written quotation",
      "Two consolidated revision rounds",
    ],
  },
];

const faqs = [
  {
    question: "What does the price include?",
    answer:
      "Mobile, tablet and desktop design, approved content formatting, image optimisation, basic technical SEO, secure launch, domain connection and two revision rounds are included in every standard package.",
  },
  {
    question: "What is the £149 mobile enquiry sprint?",
    answer:
      "It is a fixed-scope first project: one verified mobile problem, one redesigned priority screen or section, a private before-and-after preview and a written recommendation. It is not a complete website. If an Essential or larger website is booked within 30 days, the full £149 is credited against that project.",
  },
  {
    question: "How does payment work?",
    answer:
      "A 50% deposit confirms the project. The remaining 50% is due after the agreed revisions and final approval, before the website is launched on the live domain.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Essential projects typically take 7-10 working days and Signature projects 10-15 working days after all approved content has been received.",
  },
  {
    question: "Are there monthly website-builder fees?",
    answer:
      "Linshi Studio charges a one-off build fee. Domain renewals and any optional third-party services remain the business owner's responsibility and are always disclosed before purchase.",
  },
  {
    question: "What is not included?",
    answer:
      "E-commerce, custom booking systems, customer accounts, bespoke dashboards, professional photography, large-scale copywriting and paid advertising are quoted separately when required.",
  },
  {
    question: "Who owns the domain and finished website?",
    answer:
      "The business keeps control of its domain and approved content. The written scope explains the launch setup, handover files and any third-party account that remains in the business owner's name.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every standard project includes 30 days of support for defects in the delivered work. Future content changes or new features can then be quoted clearly before any work begins.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Linshi Studio",
  url: "https://linshistudio.com",
  description:
    "Mobile-first website design for independent restaurants, salons, local trades, dental practices and boutique stays in the UK.",
  email: emailAddress,
  sameAs: [instagramUrl, facebookUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "project enquiries",
    email: emailAddress,
    availableLanguage: ["English"],
  },
  priceRange: "£149-£1,350+",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Brand({ compact = false }) {
  return (
    <span className={`${styles.brand} ${compact ? styles.brandCompact : ""}`}>
      <span className={styles.brandMark} aria-hidden="true">
        L<span>.</span>
      </span>
      <span className={styles.brandName}>
        <strong>Linshi Studio</strong>
        <small>Independent web design</small>
      </span>
    </span>
  );
}

export default function WorkPage() {
  return (
    <main className={styles.site}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <header className={styles.header}>
        <a href="#top" aria-label="Linshi Studio home">
          <Brand compact />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="/website-review/">Annual review</a>
          <a href="#starter">Start small</a>
          <a href="#approach">Approach</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a
          className={styles.headerCta}
          href="/website-review/"
        >
          Annual review · £350 <Arrow />
        </a>
      </header>

      <div id="content">
        <section className={styles.hero} id="top">
          <Image
            className={styles.heroImage}
            src="/assets/studio-v2/hero-campaign-v2.webp"
            alt="A restaurant, craft workshop and salon connected by a vivid blue digital frame"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroGrid} aria-hidden="true" />

          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              Founder-led · Mobile first · Serving the UK
            </p>
            <h1>
              Turn mobile visits
              <br />
              <em>into enquiries.</em>
            </h1>
            <p className={styles.heroLead}>
              We find the point where a customer gets stuck between Google,
              your website and the next action—then redesign that journey with
              one clear purpose.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/website-review/">
                See the £350 annual review <Arrow />
              </a>
              <a
                className={styles.ghostButton}
                href="#work"
              >
                Explore five concepts
              </a>
            </div>
          </div>

          <div className={styles.heroIndex}>
            <span>One person accountable</span>
            <span>Fixed scope before payment</span>
            <span>Your domain stays yours</span>
          </div>
        </section>

        <section className={styles.signal} aria-label="Studio principles">
          <p>
            Found on Google. <span>Judged in seconds.</span> Remembered by
            design.
          </p>
          <div>
            <span>Annual website + AI-search review · £350</span>
            <span>Start with one problem · £149</span>
            <span>Complete websites from £650</span>
            <span>Concept work clearly labelled</span>
          </div>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>01 · Selected work</p>
            <h2 id="work-title">
              Five worlds.
              <br />
              <em>Five complete websites.</em>
            </h2>
            <p>
              These are original concept websites, not claimed client
              commissions. Open each one to experience the full mobile-first
              thinking—not just a pretty homepage.
            </p>
          </div>

          <div className={styles.workIndex} aria-label="Five website concept categories">
            {projects.map((project) => (
              <a href={`#case-${project.number}`} key={project.number}>
                <span>{project.number}</span>
                <strong>{project.sector.split(" / ")[0]}</strong>
              </a>
            ))}
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <article
                className={`${styles.project} ${project.theme}`}
                id={`case-${project.number}`}
                key={project.title}
              >
                <a
                  className={styles.projectVisual}
                  href={project.href}
                  aria-label={`View the complete ${project.title} website`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 58vw"
                  />
                  <span className={styles.projectNumber}>{project.number}</span>
                  <span className={styles.projectOpen}>
                    View full website <Arrow />
                  </span>
                </a>

                <div className={styles.projectCopy}>
                  <p className={styles.projectSector}>{project.sector}</p>
                  <h3>{project.title}</h3>
                  <blockquote>{project.line}</blockquote>
                  <p>{project.description}</p>
                  <a className={styles.projectLink} href={project.href}>
                    Enter the complete case <Arrow />
                  </a>
                  <small>Original concept · built by Linshi Studio</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.approach}
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className={styles.approachIntro}>
            <p className={styles.sectionLabel}>02 · The point of the work</p>
            <h2 id="approach-title">
              Beauty earns attention.
              <br />
              <em>Clarity earns the enquiry.</em>
            </h2>
          </div>
          <div className={styles.approachCopy}>
            <p>
              A local website does not need to become complicated software. It
              needs to answer the right questions, create confidence and make
              the next action effortless.
            </p>
            <p>
              That is why every page starts with the real customer journey:
              Maps, social profile, phone, decision.
            </p>
          </div>
        </section>

        <section
          className={styles.starter}
          id="starter"
          aria-labelledby="starter-title"
        >
          <div className={styles.starterIntro}>
            <p className={styles.sectionLabel}>03 · A smaller first decision</p>
            <span className={styles.starterBadge}>Fixed-scope starter</span>
            <h2 id="starter-title">
              Fix one moment.
              <br />
              <em>Prove the value.</em>
            </h2>
            <p>{starterOffer.copy}</p>
          </div>
          <article className={styles.starterCard}>
            <div className={styles.starterPriceRow}>
              <div>
                <span>{starterOffer.name}</span>
                <strong>{starterOffer.price}</strong>
              </div>
              <p>{starterOffer.timeline}</p>
            </div>
            <ul>
              {starterOffer.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a href="#project-brief">
              Ask about one mobile problem <Arrow />
            </a>
            <small>
              No live-site access is needed for the private preview. Any live
              implementation is agreed separately in writing.
            </small>
          </article>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.processTitle}>
            <p className={styles.sectionLabel}>04 · A focused process</p>
            <h2 id="process-title">
              From first look
              <br />
              <em>to public link.</em>
            </h2>
          </div>
          <div className={styles.processList}>
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.ownership}
          aria-labelledby="ownership-title"
        >
          <div className={styles.ownershipIntro}>
            <p className={styles.sectionLabel}>05 · Built to hand over</p>
            <h2 id="ownership-title">
              Your website.
              <br />
              <em>Your control.</em>
            </h2>
            <p>
              The polished page matters. So does knowing exactly what you own,
              what is included and what happens after launch.
            </p>
          </div>
          <div className={styles.ownershipGrid}>
            <article>
              <span>01</span>
              <h3>The domain stays with the business</h3>
              <p>Your domain and essential third-party accounts remain in your name wherever the service allows it.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Scope and price are written first</h3>
              <p>No work begins without a clear deliverable, fixed price and list of anything quoted separately.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Handover is part of delivery</h3>
              <p>You receive the live link, account notes and a practical route for requesting future changes.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Defects are covered for 30 days</h3>
              <p>Problems in the delivered work are corrected during the included post-launch support period.</p>
            </article>
          </div>
        </section>

        <section className={styles.founder} aria-labelledby="founder-title">
          <div className={styles.founderPortrait}>
            <Image
              src="/social/linshi-avatar-v2.png"
              alt="Linshi Studio monogram"
              width={720}
              height={720}
            />
            <span>Shi Lin · Founder-led</span>
          </div>
          <div className={styles.founderCopy}>
            <p className={styles.sectionLabel}>06 · A real person behind the work</p>
            <h2 id="founder-title">
              One studio.
              <br />
              <em>One person accountable.</em>
            </h2>
            <p>
              I&apos;m Shi, the independent designer and builder behind Linshi
              Studio. I research the customer journey, design the interface,
              build the website and complete the mobile checks myself. You are
              not passed between a salesperson, an account manager and an
              unknown production team.
            </p>
            <div className={styles.founderFacts}>
              <span>Concept portfolio identified honestly</span>
              <span>Written fixed scope before payment</span>
              <span>Direct email and WhatsApp contact</span>
              <span>Business-owned domain and clear handover</span>
            </div>
            <p className={styles.founderStatus}>
              Current status: accepting founding-client projects and requesting
              permission to document the process and ask for an honest review.
              Publication is always the client&apos;s choice.
            </p>
          </div>
        </section>

        <section className={styles.promise}>
          <p className={styles.sectionLabel}>The standard</p>
          <blockquote>
            “Your own business,
            <br />
            <em>seen properly.</em>”
          </blockquote>
          <p>
            No generic demo dressed up as custom work. Real details, a clear
            visual point of view and a page built for the phone in your
            customer&apos;s hand.
          </p>
        </section>

        <section
          className={styles.offer}
          id="pricing"
          aria-labelledby="pricing-title"
        >
          <div className={styles.offerIntro}>
            <p className={styles.sectionLabel}>07 · Clear scope, clear price</p>
            <h2 id="pricing-title">
              Know the scope.
              <br />
              <em>Know the price.</em>
            </h2>
            <p>
              Every project begins with a written scope and a fixed price. No
              vague monthly builder fee, no surprise additions and no work
              outside the agreed brief without approval.
            </p>
          </div>

          <div className={styles.priceGrid}>
            {packages.map((item) => (
              <article
                className={item.featured ? styles.priceFeatured : ""}
                key={item.name}
              >
                <div className={styles.priceHead}>
                  <p>{item.name}</p>
                  {item.featured && <span>Most complete</span>}
                </div>
                <strong>{item.price}</strong>
                <p className={styles.priceNote}>{item.note}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {item.href && (
                  <a className={styles.priceLearn} href={item.href}>
                    View the full review scope <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className={styles.scopeGrid}>
            <section>
              <p className={styles.scopeLabel}>Included as standard</p>
              <h3>Ready to launch properly.</h3>
              <ul>
                <li>Mobile-first responsive design</li>
                <li>Image optimisation and technical checks</li>
                <li>Secure HTTPS launch and domain connection</li>
                <li>Two rounds of consolidated revisions</li>
                <li>30 days of support for delivered-work defects</li>
              </ul>
            </section>
            <section>
              <p className={styles.scopeLabel}>Quoted separately</p>
              <h3>Only when the business needs it.</h3>
              <ul>
                <li>E-commerce or custom booking systems</li>
                <li>Customer accounts or bespoke dashboards</li>
                <li>Logo design and professional photography</li>
                <li>Large-scale copywriting or verified translation</li>
                <li>Domain renewal and paid third-party services</li>
              </ul>
            </section>
          </div>

          <div className={styles.faqBlock}>
            <div>
              <p className={styles.sectionLabel}>Before we begin</p>
              <h3>Useful answers, upfront.</h3>
              <a className={styles.guideLink} href="/project-guide/">
                Read the full project guide <Arrow />
              </a>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <a className={styles.quoteCta} href="#project-brief">
            <span>
              <small>Start with the business name and current link</small>
              Request a clear quote
            </span>
            <Arrow />
          </a>
        </section>

        <section
          className={styles.briefSection}
          id="project-brief"
          aria-labelledby="brief-title"
        >
          <div className={styles.briefIntro}>
            <p className={styles.sectionLabel}>08 · A useful first message</p>
            <h2 id="brief-title">
              Five details.
              <br />
              <em>One honest first look.</em>
            </h2>
            <p>
              Choose the £350 annual review, the £149 sprint or a complete
              website. No account or sales call is required; the brief is saved
              securely and given a reference number.
            </p>
          </div>
          <EnquiryComposer />
        </section>

        <section
          className={styles.contact}
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className={styles.contactIntro}>
            <p className={styles.sectionLabel}>09 · Direct contact</p>
            <h2 id="contact-title">
              Show us the business.
              <br />
              <em>We&apos;ll show you the possibility.</em>
            </h2>
            <p>
              Prefer a direct message? Email the studio or open the verified
              WhatsApp contact below. We reply personally.
            </p>

            <a className={styles.emailCard} href={emailUrl}>
              <span>Direct project email</span>
              <strong>{emailAddress}</strong>
              <small>Business name · town · current website or social page</small>
              <Arrow />
            </a>

            <div className={styles.socialLinks}>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <strong>@designerlinshi</strong>
                <Arrow />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer">
                <span>Facebook</span>
                <strong>Shi Lin</strong>
                <Arrow />
              </a>
            </div>
          </div>

          <div className={styles.whatsappCard}>
            <div className={styles.whatsappTop}>
              <span className={styles.liveDot} />
              <p>WhatsApp · Real contact</p>
            </div>
            <a
              className={styles.qrFrame}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Linshi Studio in WhatsApp"
            >
              <Image
                src="/assets/studio-v2/whatsapp-qr.png"
                alt="WhatsApp QR code for Linshi"
                width={320}
                height={320}
              />
            </a>
            <div className={styles.whatsappCopy}>
              <span>Scan or tap</span>
              <h3>Linshi on WhatsApp</h3>
              <p>
                On the same phone, tap the button below. On another device,
                scan the verified contact code.
              </p>
              <a
                className={styles.whatsappButton}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp <Arrow />
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div>
          <Brand />
          <p>
            Founder-led mobile website design for independent UK businesses,
            from one verified enquiry problem to a complete launch.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href={emailUrl}>
            {emailAddress} <Arrow />
          </a>
          <a href="#work">Selected work</a>
          <a href="/project-guide/">Project guide</a>
          <a href="/privacy/">Privacy</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram <Arrow />
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            Facebook <Arrow />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp <Arrow />
          </a>
        </div>
        <small>
          © 2026 Linshi Studio · Concept work is clearly identified throughout.
        </small>
      </footer>

      <div className={styles.mobileCta} aria-label="Quick contact">
        <a href="/website-review/">£350 review</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp <Arrow />
        </a>
      </div>
    </main>
  );
}
