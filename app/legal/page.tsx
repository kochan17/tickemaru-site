/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { legalRows } from "../site-config";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示｜チケまる",
  description:
    "チケまるの販売業者、所在地、送料、支払い方法、発送時期、返品・キャンセル、古物商許可に関する表示です。",
};

export default function LegalPage() {
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
        <p className="eyebrow">運営元情報</p>
        <h1>特定商取引法に基づく表示</h1>
        <p>
          商品券・ギフトカードの通信販売に関する販売条件、送料、支払い、
          返品・キャンセル、古物商許可情報を掲載しています。
        </p>
      </section>

      <section className="subpage-content">
        <dl className="legal-table">
          {legalRows.map(([term, description]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
        <aside className="content-panel">
          <h2>販売条件の補足</h2>
          <ul>
            <li>注文はLINEで受付し、在庫確認後に確定金額と振込先を案内します。</li>
            <li>商品はすべて1,000円券を1枚単位で販売します。</li>
            <li>銀行振込の入金確認後、レターパックで追跡番号付き発送を行います。</li>
            <li>古物営業法に基づく許可を取得済みです。</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
