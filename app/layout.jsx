import "./globals.css";

export const metadata = {
  title: "Salt & Hawthorn | A Coastal Dining Room in Whitby",
  description:
    "A fictional, editorial restaurant website concept showing seasonal dishes, the current menu and useful visitor details for travellers arriving from Google Maps.",
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
