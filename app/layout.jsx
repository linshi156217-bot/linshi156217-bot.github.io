import "./globals.css";
import CloudflareAnalytics from "./CloudflareAnalytics";

const cloudflareAnalyticsToken = "bfd3b6308f63424980ba769e9e3aaea1";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: {
    default: "Linshi Studio | Mobile enquiry journeys for UK businesses",
    template: "%s | Linshi Studio",
  },
  description:
    "Founder-led mobile website design for independent UK businesses. Start with a fixed-scope £149 mobile enquiry sprint or commission a complete website.",
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
        <CloudflareAnalytics token={cloudflareAnalyticsToken} />
      </body>
    </html>
  );
}
