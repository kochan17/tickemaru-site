import Image from "next/image";
import OrderCalculator from "./OrderCalculator";
import {
  baseShipping,
  legalRows,
  lineUrl,
  products,
  shippingExamples,
  shippingUnitSize,
} from "./site-config";

const yen = new Intl.NumberFormat("ja-JP").format;

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="サイトヘッダー">
        <a className="brand" href="#top" aria-label="チケまる">
          <span className="brand-mark">チ</span>
          <span>
            <strong>チケまる</strong>
            <small>商品券・ギフトカード販売</small>
          </span>
        </a>
        <nav aria-label="主要メニュー">
          <a href="#items">商品</a>
          <a href="#quote">見積もり</a>
          <a href="#shipping">送料</a>
          <a href="#order">注文方法</a>
          <a href="#legal">法定表示</a>
        </nav>
        <a className="line-button small" href={lineUrl}>
          LINEで注文
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">1枚999円・まとめ買い歓迎</p>
          <h1>商品券・ギフトカードを、必要な分だけまるっと。</h1>
          <p className="lead">
            全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを
            1,000円券1枚単位で販売。注文から相談までLINEでかんたんに進められます。
          </p>
          <div className="hero-actions">
            <a className="line-button" href={lineUrl}>
              LINEで枚数を相談する
            </a>
            <a className="ghost-button" href="#items">
              商品を見る
            </a>
          </div>
          <dl className="quick-facts" aria-label="販売条件の要点">
            <div>
              <dt>販売価格</dt>
              <dd>1枚999円</dd>
            </div>
            <div>
              <dt>送料</dt>
              <dd>50枚ごと+2,900円</dd>
            </div>
            <div>
              <dt>支払い</dt>
              <dd>銀行振込</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="ギフトカードのイメージ">
          <Image
            src="/gift-card-hero.png"
            alt="まとめ買いできるギフトカードと追跡可能な発送のイメージ"
            width={1693}
            height={929}
            priority
          />
        </div>
      </section>

      <section id="items" className="section">
        <div className="section-heading">
          <p className="eyebrow">取扱商品</p>
          <h2>すべて1,000円券を1枚999円で販売</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="ticket" aria-hidden="true">
                <span>1,000</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>999円 / 枚</strong>
            </article>
          ))}
        </div>
      </section>

      <OrderCalculator />

      <section id="shipping" className="section shipping-band">
        <div>
          <p className="eyebrow">送料と発送</p>
          <h2>レターパックで追跡可能。まとめ買いも安心。</h2>
          <p className="shipping-copy">
            発送後は追跡番号で配送状況を確認できます。送料は{shippingUnitSize}
            枚ごとに{yen(baseShipping)}円ずつ加算され、51枚以上は複数口に分けて発送します。
          </p>
        </div>
        <div className="shipping-cards">
          {shippingExamples.map((example) => (
            <article key={example.range}>
              <span>{example.range} / {example.units}</span>
              <strong>送料 {yen(example.price)}円</strong>
            </article>
          ))}
          <p className="shipping-rule">
            201枚以上も同じく、50枚ごとに1口増え、送料は1口あたり
            {yen(baseShipping)}円です。
          </p>
        </div>
      </section>

      <section id="order" className="section order-section">
        <div className="order-copy">
          <p className="eyebrow">注文方法</p>
          <h2>注文・販売のやりとりはLINEで完結</h2>
          <p>
            欲しい商品名と枚数をLINEで送ってください。合計金額と振込先を案内し、
            入金確認後にレターパックで発送します。
          </p>
          <p className="license">古物商取得済み</p>
        </div>
        <a className="line-button large" href={lineUrl}>
          LINEで注文をはじめる
        </a>
      </section>

      <section className="section flow-section" aria-label="購入の流れ">
        <div className="section-heading">
          <p className="eyebrow">購入の流れ</p>
          <h2>迷わない4ステップ</h2>
        </div>
        <div className="flow-grid">
          {[
            ["1", "枚数を選ぶ", "商品ごとに希望枚数を入力し、合計金額の目安を確認します。"],
            ["2", "LINEで送る", "注文メモをコピーして、公式LINEに貼り付けて送信します。"],
            ["3", "銀行振込", "在庫確認後に案内される振込先へ、指定金額を振り込みます。"],
            ["4", "追跡発送", "入金確認後、レターパックで追跡番号付き発送を行います。"],
          ].map(([number, title, body]) => (
            <article className="flow-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="legal" className="section legal-section">
        <div className="section-heading">
          <p className="eyebrow">運営元情報</p>
          <h2>特定商取引法に基づく表示</h2>
        </div>
        <div className="legal-grid">
          <dl className="legal-table">
            {legalRows.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <aside className="legal-card">
            <h3>販売条件</h3>
            <ul>
              <li>商品はすべて1,000円券を1枚単位で販売します。</li>
              <li>注文はLINEで受付し、在庫確認後に振込先と確定金額を案内します。</li>
              <li>銀行振込の入金確認後、レターパックで追跡番号付き発送を行います。</li>
              <li>古物営業法に基づく許可を取得済みです。</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section policy-section">
        <div>
          <p className="eyebrow">個人情報の取り扱い</p>
          <h2>プライバシーポリシー</h2>
          <p>
            お預かりした氏名、住所、連絡先、注文内容は、注文確認、発送、
            お問い合わせ対応、法令上必要な記録管理のために利用します。
            法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
          </p>
        </div>
        <div>
          <p className="eyebrow">ご利用条件</p>
          <h2>利用規約</h2>
          <p>
            商品の在庫、状態、発送時期、最終的な合計金額はLINEでの案内をもって確定します。
            不正利用、虚偽情報による注文、受取拒否など当店が不適切と判断する取引は、
            受付後であってもキャンセルする場合があります。
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <strong>チケまる</strong>
        <span>株式会社チケモ / 商品券・ギフトカード販売 / 古物商許可取得済み</span>
      </footer>
    </main>
  );
}
