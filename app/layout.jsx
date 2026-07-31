import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://linshistudio.com"),
  title: {
    default: "Linshi Studio | Distinctive mobile-first websites",
    template: "%s | Linshi Studio",
  },
  description:
    "Distinctive mobile-first websites for independent restaurants, salons and local trades in the UK.",
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
      <body>{children}</body>
    </html>
  );
}
