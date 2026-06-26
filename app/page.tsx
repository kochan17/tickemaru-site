import Image from "next/image";
import OrderCalculator from "./OrderCalculator";
import { lineUrl, products } from "./site-config";

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="サイトヘッダー">
        <a className="brand" href="#top" aria-label="ギフト券まるっと便">
          <span className="brand-mark">ま</span>
          <span>
            <strong>ギフト券まるっと便</strong>
            <small>商品券・ギフトカード販売</small>
          </span>
        </a>
        <nav aria-label="主要メニュー">
          <a href="#items">商品</a>
          <a href="#quote">見積もり</a>
          <a href="#shipping">送料</a>
          <a href="#order">注文方法</a>
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
              <dd>50枚まで2,900円</dd>
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
            発送後は追跡番号で配送状況を確認できます。51枚以上は2口に分けて発送します。
          </p>
        </div>
        <div className="shipping-cards">
          <article>
            <span>1-50枚</span>
            <strong>送料 2,900円</strong>
          </article>
          <article>
            <span>51枚以上</span>
            <strong>送料 5,800円</strong>
          </article>
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

      <footer className="site-footer">
        <strong>ギフト券まるっと便</strong>
        <span>商品券・ギフトカード販売 / 銀行振込 / レターパック発送</span>
      </footer>
    </main>
  );
}
