import HomepageConceptV2 from "./homepage-concept-v2/HomepageConceptV2";

const instagramUrl = "https://www.instagram.com/designerlinshi/";
const facebookUrl =
  "https://www.facebook.com/profile.php?id=61592734760210";
const emailAddress = "hello@linshistudio.com";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: "Linshi Studio | Distinctive mobile-first websites",
  description:
    "Founder-led strategy, art direction and mobile-first website design for independent businesses. Explore six original digital experiences or start a project with Linshi Studio.",
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
    "Founder-led strategy, art direction and mobile-first website design for independent businesses.",
  email: emailAddress,
  sameAs: [instagramUrl, facebookUrl],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomepageConceptV2 />
    </>
  );
}
