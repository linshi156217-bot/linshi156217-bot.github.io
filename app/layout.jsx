import "./globals.css";

export const metadata = {
  title: "Salt & Hawthorn | A Coastal Dining Room in Whitby",
  description:
    "A fictional, editorial restaurant website concept showing seasonal dishes, the current menu and useful visitor details for travellers arriving from Google Maps.",
  openGraph: {
    title: "Salt & Hawthorn | A Coastal Dining Room in Whitby",
    description:
      "A fictional, editorial restaurant website concept inspired by the North Yorkshire coast.",
    url: "https://linshi156217-bot.github.io/salt-and-hawthorn/",
    siteName: "Salt & Hawthorn",
    type: "website",
    images: [
      {
        url: "https://linshi156217-bot.github.io/social/salt-hawthorn-og.webp",
        width: 1200,
        height: 630,
        alt: "Salt & Hawthorn coastal restaurant concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://linshi156217-bot.github.io/social/salt-hawthorn-og.webp",
    ],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: "/mark.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121914",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
