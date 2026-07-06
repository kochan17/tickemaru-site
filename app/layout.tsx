import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  absoluteUrl,
  siteDescription,
  siteLocale,
  siteLogo,
  siteName,
  siteOgImage,
  siteTitle,
  siteUrl,
} from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s｜${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "ecommerce",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: siteLocale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteOgImage),
        width: 1693,
        height: 929,
        alt: "チケまるの商品券・ギフトカード販売イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl(siteOgImage)],
  },
  other: {
    "format-detection": "telephone=no",
    "thumbnail": absoluteUrl(siteLogo),
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1c33",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
