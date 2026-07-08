// ============================================================
// サイト設定（ここを書き換えると全ページに反映されます）
// ============================================================

// LINE公式アカウントのベーシックID（@を含む）。
// ここを差し替えるだけで、サイト内すべてのLINEボタンに反映されます。
export const lineId = "@689mhlts";

// 友だち追加用URL
export const lineUrl = `https://line.me/R/ti/p/${encodeURIComponent(lineId)}`;

// 注文メモを本文にセットした状態でLINEを開くURL
export function lineMessageUrl(text: string) {
  return `https://line.me/R/oaMessage/${encodeURIComponent(lineId)}/?${encodeURIComponent(text)}`;
}

export const siteName = "チケまる";
export const siteUrl = "https://tickemaru.com/";
export const siteLocale = "ja_JP";
export const siteLanguage = "ja-JP";
export const siteTagline = "商品券・ギフトカード販売";
export const siteTitle =
  "チケまる｜商品券・ギフトカード販売・ギフト券まとめ買い";
export const siteDescription =
  "全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを1枚999円で販売。古物商許可店がLINEで注文受付、銀行振込、追跡番号付きレターパックで発送します。";
export const siteOgImage = "/gift-card-hero.png";
export const siteLogo = "/tickemaru-icon.png";
export const licenseNumber = "東京都公安委員会 第205512518719号";

export const unitPrice = 999;
export const faceValue = 1000;
export const baseShipping = 1100;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function calculateShipping(quantity: number) {
  if (quantity <= 0) return 0;
  return baseShipping;
}

export const products = [
  {
    name: "全国百貨店共通商品券",
    label: "全国百貨店共通",
    theme: "navy",
    description:
      "全国の百貨店で使いやすい定番の商品券。贈答用にも日常使いにも選びやすい1,000円券です。",
  },
  {
    name: "VJAギフトカード",
    label: "VJA",
    theme: "indigo",
    description:
      "幅広い加盟店で使えるギフトカード。法人利用やまとめ買いの相談にも向いています。",
  },
  {
    name: "JCBギフトカード",
    label: "JCB",
    theme: "green",
    description:
      "知名度が高く、贈り物としても扱いやすいギフトカード。1枚単位で注文できます。",
  },
];

export const faqs = [
  {
    question: "本当に届きますか？運営者は信頼できますか？",
    answer: `古物営業法に基づく許可（${licenseNumber}）を受けた事業者が運営しています。発送はすべて追跡番号付きのレターパックで行い、発送後に追跡番号をLINEでお知らせするため、配送状況をいつでも確認できます。`,
  },
  {
    question: "注文してからどのくらいで届きますか？",
    answer:
      "銀行振込の入金確認後、当日または翌日にレターパックで発送します。確認事項がある場合は、確認後の発送となります。",
  },
  {
    question: "1枚だけでも注文できますか？",
    answer:
      "1枚からご注文いただけます。送料は枚数にかかわらず1注文につき全国一律1,100円のため、まとめてのご注文ほど1枚あたりの負担が小さくなります。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer:
      "銀行振込のみです。LINEで確定金額と振込先をご案内後、1週間以内にお振り込みください。振込手数料はお客様のご負担となります。",
  },
  {
    question: "返品・キャンセルはできますか？",
    answer:
      "お客様都合による返品・返金はお受けしていません。商品違い・枚数違い・配送中の破損など当店責任による不備は、商品到着後7日以内にご連絡いただければ、良品交換または返金で対応します（費用は当店負担）。",
  },
  {
    question: "在庫の確認や大口注文の相談はできますか？",
    answer:
      "LINEで希望の商品名と枚数をお送りいただければ、在庫状況と合計金額をご案内します。まとめ買い・法人利用のご相談も歓迎です。",
  },
];

export const legalRows = [
  ["サイトURL", siteUrl],
  ["販売価格", "1,000円券1枚あたり999円"],
  [
    "販売数量",
    "1枚から注文可能です。在庫状況により、ご希望枚数を用意できない場合があります。",
  ],
  [
    "商品代金以外の必要料金",
    "送料：全国一律1,100円。銀行振込手数料はお客様負担です。",
  ],
  ["支払い方法", "銀行振込"],
  [
    "支払い期限",
    "LINEで確定金額と振込先を案内後、1週間以内にお振り込みください。ご連絡なしで入金がない場合は無効とします。",
  ],
  [
    "商品の引渡時期",
    "入金確認後、当日または翌日にレターパックで発送します。確認事項がある場合は確認後の発送となります。",
  ],
  [
    "返品・キャンセル",
    "お客様都合による返品・返金はお受けできません。出荷前のキャンセル可否はLINEでの案内内容と取引状況により判断します。",
  ],
  [
    "不良品等の対応",
    "商品違い、枚数違い、配送中の破損など当店責任による不備がある場合は、良品交換または返金で対応し、当店が費用を負担します。商品到着後7日以内にお知らせください。",
  ],
  ["資格・免許", `古物商許可番号：${licenseNumber}`],
  ["お問い合わせ", "LINEへお問い合わせください。"],
];
