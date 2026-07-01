export const lineUrl = "https://line.me/R/ti/p/@your-line-id";
export const siteUrl = "https://tickemaru.com/";

export const unitPrice = 999;
export const baseShipping = 2900;
export const shippingUnitSize = 50;

export function calculateShipping(quantity: number) {
  if (quantity <= 0) return 0;
  return Math.ceil(quantity / shippingUnitSize) * baseShipping;
}

export function calculateShippingUnits(quantity: number) {
  if (quantity <= 0) return 0;
  return Math.ceil(quantity / shippingUnitSize);
}

export const shippingExamples = [
  { range: "1-50枚", units: "1口", price: 2900 },
  { range: "51-100枚", units: "2口", price: 5800 },
  { range: "101-150枚", units: "3口", price: 8700 },
  { range: "151-200枚", units: "4口", price: 11600 },
];

export const products = [
  {
    name: "全国百貨店共通商品券",
    description:
      "全国の百貨店で使いやすい定番の商品券。贈答用にも日常使いにも選びやすい1,000円券です。",
  },
  {
    name: "VJAギフトカード",
    description:
      "幅広い加盟店で使えるギフトカード。法人利用やまとめ買いの相談にも向いています。",
  },
  {
    name: "JCBギフトカード",
    description:
      "知名度が高く、贈り物としても扱いやすいギフトカード。1枚単位で注文できます。",
  },
];

export const legalRows = [
  ["販売業者", "株式会社チケモ"],
  ["代表者", "古木雄大"],
  [
    "所在地",
    "新潟県新潟市中央区西堀通5-855-5 フロンティア古町ビル3F-A",
  ],
  ["電話番号", "03-4400-3405"],
  ["サイトURL", siteUrl],
  ["販売価格", "1,000円券1枚あたり999円"],
  [
    "商品代金以外の必要料金",
    "送料：50枚ごとに2,900円。銀行振込手数料はお客様負担です。",
  ],
  ["支払い方法", "銀行振込"],
  ["支払い期限", "ご注文後、ご連絡なしで1週間入金がない場合は無効とします。"],
  [
    "商品の引渡時期",
    "入金確認後、当日または翌日にレターパックで発送します。確認事項がある場合は確認後の発送となります。",
  ],
  [
    "返品・キャンセル",
    "お客様都合による返品・返金はお受けできません。不良品は良品交換または返金で対応し、当店が費用を負担します。商品到着後7日以内にお知らせください。出荷後のキャンセル、受け取り拒否、長期不在等でお受け取りいただけなかった場合の付帯経費はお客様負担となります。",
  ],
  [
    "資格・免許",
    "古物商許可番号：東京都公安委員会 第305512518791号",
  ],
  ["お問い合わせ", "LINEまたは電話番号へお問い合わせください。"],
];
