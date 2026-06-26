import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ギフト券まるっと便｜商品券・ギフトカード販売",
  description:
    "全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを1,000円券1枚単位で販売。LINEで注文、銀行振込、追跡可能なレターパック発送。",
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
    title: "ギフト券まるっと便",
    description:
      "商品券・ギフトカードを1枚999円で。まとめ買いしやすく、LINEで注文できます。",
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
