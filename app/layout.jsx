import "./globals.css";
import Script from "next/script";
import ContactLauncher from "./ContactLauncher";

const cloudflareAnalyticsToken = "bfd3b6308f63424980ba769e9e3aaea1";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: {
    default: "Linshi Studio | Website growth systems for UK businesses",
    template: "%s | Linshi Studio",
  },
  description:
    "Founder-led mobile website design and bounded local AI-visibility foundations for independent UK businesses. Start with a £99 enquiry-path fix, a £499 Local AI Visibility Diagnostic, or a fixed 90-day programme.",
  applicationName: "Linshi Studio",
  openGraph: {
    siteName: "Linshi Studio",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/linshi-mark.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <ContactLauncher />
        <Script
          id="cloudflare-web-analytics"
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken })}
        />
      </body>
    </html>
  );
}
