# チケまる

商品券・ギフトカードのオンライン販売案内サイトです。

## 概要

- 取扱商品: 全国百貨店共通商品券、VJAギフトカード、JCBギフトカード
- 販売価格: 1,000円券 1枚あたり999円
- 送料: 50枚ごとに2,900円
- 注文導線: LINEで注文相談
- 支払い方法: 銀行振込
- 発送方法: レターパック

## 開発

```bash
npm install
npm run dev
npm run build
```

## 主なファイル

- `app/page.tsx`: ページ本体
- `app/globals.css`: スタイル
- `app/OrderCalculator.tsx`: 見積もり計算
- `app/site-config.ts`: 商品、送料、運営元情報
- `public/gift-card-hero.png`: メイン画像
