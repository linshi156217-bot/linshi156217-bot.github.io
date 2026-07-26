import "./globals.css";

export const metadata = {
  title: "Salt & Hawthorn | Whitby Coastal Kitchen — Concept Demo",
  description:
    "A fictional, mobile-first restaurant website concept showing menus, signature dishes, visitor details and directions for travellers arriving from Google Maps.",
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
  themeColor: "#172019",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
