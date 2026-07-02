/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { baseShipping } from "../site-config";

const yen = new Intl.NumberFormat("ja-JP").format;

export const metadata: Metadata = {
  title: "利用規約｜チケまる",
  description:
    "チケまるの注文、支払い、発送、返品・キャンセル、禁止事項に関するご利用条件です。",
};

export default function TermsPage() {
  return (
    <main className="subpage-main">
      <header className="subpage-header">
        <a className="brand" href="/" aria-label="チケまる トップへ戻る">
          <span className="brand-mark">チ</span>
          <span>
            <strong>チケまる</strong>
            <small>商品券・ギフトカード販売</small>
          </span>
        </a>
        <a className="ghost-button" href="/">
          トップへ戻る
        </a>
      </header>

      <section className="subpage-hero">
        <p className="eyebrow">ご利用前の確認</p>
        <h1>利用規約</h1>
        <p>
          チケまるで商品券・ギフトカードを注文する際の基本条件を定めます。
        </p>
      </section>

      <section className="policy-document">
        <article className="content-panel">
          <h2>注文と取引条件の確定</h2>
          <p>
            ご希望の商品名と枚数をLINEで送信してください。在庫確認後、確定金額、
            送料、振込先、発送予定を案内します。取引条件はLINEでの案内内容をもって確定します。
          </p>
        </article>

        <article className="content-panel">
          <h2>商品と価格</h2>
          <p>
            取扱商品は全国百貨店共通商品券、VJAギフトカード、JCBギフトカードです。
            いずれも1,000円券を1枚単位で販売し、販売価格は1枚999円です。
          </p>
        </article>

        <article className="content-panel">
          <h2>支払い</h2>
          <p>
            支払い方法は銀行振込のみです。振込手数料はお客様負担です。
            期日までに入金が確認できない場合、注文を無効とすることがあります。
          </p>
        </article>

        <article className="content-panel">
          <h2>送料と発送</h2>
          <p>
            発送はレターパックで行い、追跡番号を案内します。送料は全国一律
            {yen(baseShipping)}円です。
          </p>
        </article>

        <article className="content-panel">
          <h2>返品・キャンセル</h2>
          <p>
            商品の性質上、お客様都合による返品・返金はお受けできません。
            商品違い、枚数違い、配送中の破損など当店責任による不備がある場合は、
            商品到着後7日以内にご連絡ください。
          </p>
        </article>

        <article className="content-panel">
          <h2>禁止事項</h2>
          <ul>
            <li>虚偽の情報による注文</li>
            <li>不正利用、転売目的を疑わせる不自然な取引</li>
            <li>受取拒否、長期不在など取引履行を妨げる行為</li>
            <li>当店、他のお客様、第三者に損害を与える行為</li>
          </ul>
        </article>

        <article className="content-panel">
          <h2>規約の変更</h2>
          <p>
            法令改正、運営内容、取扱商品の変更に応じて、本規約を改定する場合があります。
            改定後の内容は、本サイトに掲載した時点から適用します。
          </p>
        </article>
      </section>
    </main>
  );
}
