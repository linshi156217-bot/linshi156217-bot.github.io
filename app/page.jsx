import StudioHome from "./studio-home/StudioHome";

const instagramUrl = "https://www.instagram.com/linshistudio/";
const linkedinUrl = "https://www.linkedin.com/in/%E6%96%BD-%E6%9E%97-950241437/";
const emailAddress = "hello@linshistudio.com";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: "Linshi Studio | Distinctive mobile-first websites",
  description:
    "China-based independent web studio serving UK businesses remotely. Founder-led strategy, art direction and mobile-first website design; public portfolio work is clearly labelled as original concept work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Linshi Studio | Websites people feel before they read",
    description:
      "Distinctive digital experiences for independent businesses that refuse to look ordinary.",
    url: "/",
    siteName: "Linshi Studio",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/assets/studio-v3/linshi-glass-sculpture-v3.png",
        width: 1536,
        height: 1024,
        alt: "Linshi Studio digital glass sculpture and cobalt light artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linshi Studio | Distinctive mobile-first websites",
    description:
      "Strategy, art direction and responsive craft for independent businesses.",
    images: ["/assets/studio-v3/linshi-glass-sculpture-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Linshi Studio",
  url: "https://linshistudio.com",
  description:
    "China-based independent web studio serving UK businesses remotely. Founder-led strategy, art direction and mobile-first website design; public portfolio work is clearly labelled as original concept work.",
  email: emailAddress,
  founder: { "@type": "Person", name: "Shi Lin" },
  sameAs: [instagramUrl, linkedinUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "project enquiries",
    email: emailAddress,
    availableLanguage: ["English"],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "Netherlands",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <StudioHome />
    </>
  );
}
