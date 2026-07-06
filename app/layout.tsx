import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "チケまる｜商品券・ギフトカード販売（古物商許可店）",
  description:
    "全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを1枚999円で販売。古物商許可店がLINEで注文受付、銀行振込、追跡番号付きレターパックで発送します。",
  keywords: [
    "商品券販売",
    "ギフトカード販売",
    "全国百貨店共通商品券",
    "VJAギフトカード",
    "JCBギフトカード",
    "まとめ買い",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "チケまる｜商品券・ギフトカード販売",
    description:
      "商品券・ギフトカードを1枚999円で。古物商許可店がLINE注文・追跡番号付きで発送。送料は全国一律1,100円。",
    url: siteUrl,
    images: ["/gift-card-hero.png"],
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
