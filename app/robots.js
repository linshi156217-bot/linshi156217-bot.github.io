export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/salon-concept/"],
    },
    sitemap: "https://linshistudio.com/sitemap.xml",
    host: "https://linshistudio.com",
  };
}
