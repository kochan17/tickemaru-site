import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "チケまる｜商品券・ギフトカード販売",
  description:
    "株式会社チケモが運営する商品券・ギフトカード販売サイト。全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを1枚999円で販売。LINEで注文、銀行振込、追跡可能なレターパック発送。",
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
    title: "チケまる",
    description:
      "商品券・ギフトカードを1枚999円で。送料は1口2,900円、LINEで注文できます。",
    url: siteUrl,
    images: ["/gift-card-hero.png"],
  },
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
