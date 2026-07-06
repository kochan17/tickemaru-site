/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜チケまる",
  description:
    "チケまるにおける個人情報の取得、利用目的、第三者提供、安全管理、開示等の請求に関する方針です。",
};

export default function PrivacyPage() {
  return (
    <main className="subpage-main">
      <header className="subpage-header">
        <a className="brand" href="/" aria-label="チケまる トップへ戻る">
          <span className="brand-mark" aria-hidden="true" />
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
        <p className="eyebrow">個人情報の取り扱い</p>
        <h1>プライバシーポリシー</h1>
        <p>
          ご注文、発送、お問い合わせ対応に必要な範囲で個人情報を取り扱います。
        </p>
      </section>

      <section className="policy-document">
        <article className="content-panel">
          <h2>取得する情報</h2>
          <p>
            氏名、配送先住所、LINEアカウント情報、注文内容、振込確認に必要な情報、
            お問い合わせ内容など、取引と対応に必要な情報を取得します。
          </p>
        </article>

        <article className="content-panel">
          <h2>利用目的</h2>
          <ul>
            <li>注文内容、在庫、支払金額、振込先の案内</li>
            <li>入金確認、商品の発送、追跡番号の連絡</li>
            <li>お問い合わせ、返品・交換等の対応</li>
            <li>不正取引の防止、本人確認、取引記録の管理</li>
            <li>法令に基づく記録作成、保存、照会対応</li>
          </ul>
        </article>

        <article className="content-panel">
          <h2>第三者提供と委託</h2>
          <p>
            法令に基づく場合を除き、本人の同意なく個人データを第三者へ提供しません。
            発送、システム管理、問い合わせ対応などの業務に必要な範囲で、委託先に情報を取り扱わせる場合があります。
          </p>
        </article>

        <article className="content-panel">
          <h2>安全管理</h2>
          <p>
            取引に必要な範囲で情報を管理し、アクセス権限の管理、不要情報の削除、
            取扱者への周知など、漏えい・滅失・毀損を防ぐための措置を講じます。
          </p>
        </article>

        <article className="content-panel">
          <h2>開示等の請求・お問い合わせ</h2>
          <p>
            保有個人データの開示、訂正、利用停止、削除、第三者提供停止等の請求、
            個人情報の取り扱いに関する苦情・相談は、LINEへお問い合わせください。
          </p>
        </article>

        <article className="content-panel">
          <h2>改定</h2>
          <p>
            法令改正や運営内容の変更に応じて、本ポリシーを改定する場合があります。
            重要な変更がある場合は、本サイト上で分かりやすく告知します。
          </p>
        </article>
      </section>
    </main>
  );
}
