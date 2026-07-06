import OrderCalculator from "./OrderCalculator";
import {
  baseShipping,
  faqs,
  licenseNumber,
  lineUrl,
  products,
  siteUrl,
  unitPrice,
} from "./site-config";

const yen = new Intl.NumberFormat("ja-JP").format;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      name: "チケまる",
      url: siteUrl,
      description:
        "全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを1枚999円で販売する古物商許可店。",
      paymentAccepted: "銀行振込",
      hasCredential: `古物商許可番号：${licenseNumber}`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

function LineIcon() {
  return (
    <svg
      aria-hidden="true"
      className="line-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.5c-5.52 0-10 3.64-10 8.13 0 4.02 3.57 7.39 8.39 8.03.33.07.77.22.89.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.08-.46 5.84-3.44 7.97-5.89C21.5 13.9 22 12.35 22 10.63c0-4.49-4.48-8.13-10-8.13z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="check-icon"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
          <a href="#order">注文の流れ</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <a className="line-button small" href={lineUrl}>
          <LineIcon />
          LINEで注文
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="hero-eyebrow-badge">古物商許可店</span>
              1,000円券が1枚999円・まとめ買い歓迎
            </p>
            <h1>
              <span className="phrase">商品券・ギフトカードを、</span>
              <span className="phrase">必要な分だけ確かに。</span>
            </h1>
            <p className="lead">全国百貨店共通商品券、VJAギフトカード、JCBギフトカードを1枚単位で販売。注文から発送連絡までLINEで完結し、追跡番号付きでお届けします。</p>
            <div className="hero-actions">
              <a className="line-button large" href={lineUrl}>
                <LineIcon />
                LINEで注文・相談する
              </a>
              <a className="ghost-button" href="#quote">
                枚数から見積もる
              </a>
            </div>
            <ul className="hero-trust" aria-label="安心ポイント">
              <li>
                <CheckIcon />
                古物商許可 {licenseNumber}
              </li>
              <li>
                <CheckIcon />
                追跡番号付きレターパック発送
              </li>
              <li>
                <CheckIcon />
                入金確認後、当日〜翌日に発送
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="card-fan">
              {products.map((product, index) => (
                <div
                  className={`gift-card gift-card-${product.theme} gift-card-${index}`}
                  key={product.name}
                >
                  <span className="gift-card-label">{product.label}</span>
                  <span className="gift-card-type">GIFT&nbsp;CARD</span>
                  <span className="gift-card-value">¥1,000</span>
                  <span className="gift-card-foil" />
                </div>
              ))}
            </div>
            <div className="hero-float-badge">
              <strong>追跡番号つき</strong>
              <span>レターパックで発送</span>
            </div>
          </div>
        </div>

        <dl className="hero-facts" aria-label="販売条件の要点">
          <div>
            <dt>販売価格</dt>
            <dd>
              1枚 <em>{yen(unitPrice)}</em> 円
            </dd>
          </div>
          <div>
            <dt>送料（1注文）</dt>
            <dd>
              全国一律 <em>{yen(baseShipping)}</em> 円
            </dd>
          </div>
          <div>
            <dt>支払い方法</dt>
            <dd>
              <em>銀行振込</em>
            </dd>
          </div>
          <div>
            <dt>発送</dt>
            <dd>
              入金確認後 <em>当日〜翌日</em>
            </dd>
          </div>
        </dl>
      </section>

      <section id="items" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">取扱商品</p>
            <h2>すべて1,000円券。1枚999円で販売</h2>
          </div>
          <p className="section-note">
            在庫状況により枚数の調整をお願いする場合があります。
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div
                className={`ticket ticket-${product.theme}`}
                aria-hidden="true"
              >
                <span className="ticket-label">{product.label}</span>
                <span className="ticket-value">¥1,000</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">
                <strong>{yen(unitPrice)}円</strong>
                <span>/ 枚（額面1,000円）</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <OrderCalculator />

      <section id="shipping" className="section shipping-band">
        <div>
          <p className="eyebrow">送料と発送</p>
          <h2>追跡番号付きレターパックで、確実にお届け</h2>
          <p className="shipping-copy">{`発送後は追跡番号をLINEでお知らせし、配送状況をいつでも確認できます。送料は枚数にかかわらず1注文につき全国一律${yen(baseShipping)}円。まとめ買いでも送料は変わらないため、枚数が多いご注文ほど1枚あたりの負担が小さくなります。`}</p>
        </div>
        <div className="shipping-rule-card">
          <span>送料の考え方</span>
          <strong>
            全国一律 {yen(baseShipping)}円 <small>/ 1注文</small>
          </strong>
          <p className="shipping-rule">
            何枚のご注文でも送料は{yen(baseShipping)}円のまま。
            商品代金と送料の合計を銀行振込でお支払いください。
          </p>
        </div>
      </section>

      <section id="order" className="section flow-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">注文の流れ</p>
            <h2>LINEで完結、迷わない4ステップ</h2>
          </div>
          <p className="section-note">
            相談・見積もりだけのご連絡も歓迎です。
          </p>
        </div>
        <div className="flow-grid">
          {[
            [
              "1",
              "枚数を選ぶ",
              "見積もりフォームで希望枚数を入力し、合計金額の目安を確認します。",
            ],
            [
              "2",
              "LINEで送る",
              "注文内容をそのままLINEで送信。在庫と確定金額をご案内します。",
            ],
            [
              "3",
              "銀行振込",
              "ご案内した振込先へ、商品代金と送料の合計をお振り込みください。",
            ],
            [
              "4",
              "追跡発送",
              "入金確認後、当日〜翌日にレターパックで発送。追跡番号をお知らせします。",
            ],
          ].map(([number, title, body]) => (
            <article className="flow-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">よくある質問</p>
            <h2>不安な点は、先にすべてお答えします</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-marker" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section legal-links-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">安心してご利用いただくために</p>
            <h2>許可情報と取引条件を公開しています</h2>
          </div>
        </div>
        <div className="license-banner">
          <span className="license-banner-label">古物商許可</span>
          <strong>{licenseNumber}</strong>
          <p>古物営業法に基づく許可を受けて商品券・ギフトカードを販売しています。</p>
        </div>
        <div className="legal-link-grid">
          <a className="legal-link-card" href="/legal">
            <span>取引条件</span>
            <strong>特定商取引法に基づく表示</strong>
            <p>送料、支払い方法、発送時期、返品・キャンセルなどの取引条件。</p>
          </a>
          <a className="legal-link-card" href="/privacy">
            <span>個人情報の取り扱い</span>
            <strong>プライバシーポリシー</strong>
            <p>注文・発送・お問い合わせに必要な情報の利用目的と管理方法。</p>
          </a>
          <a className="legal-link-card" href="/terms">
            <span>ご利用前の確認</span>
            <strong>利用規約</strong>
            <p>注文成立、支払い、発送、禁止事項などの基本ルール。</p>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <h2>まずはLINEで、希望の枚数をお知らせください</h2>
        <p>
          在庫と合計金額をすぐにご案内します。相談・見積もりだけでも歓迎です。
        </p>
        <a className="line-button large" href={lineUrl}>
          <LineIcon />
          LINEで注文・相談をはじめる
        </a>
        <span className="final-cta-note">
          友だち追加後、商品名と枚数を送るだけ
        </span>
      </section>

      <footer className="site-footer">
        <div>
          <strong>チケまる</strong>
          <span>商品券・ギフトカード販売</span>
          <span>古物商許可番号：{licenseNumber}</span>
        </div>
        <div className="footer-links">
          <a href="/legal">特商法表記</a>
          <a href="/privacy">プライバシーポリシー</a>
          <a href="/terms">利用規約</a>
        </div>
      </footer>

      <div className="mobile-cta" aria-label="注文用ショートカット">
        <a className="ghost-button" href="#quote">
          見積もり
        </a>
        <a className="line-button" href={lineUrl}>
          <LineIcon />
          LINEで注文・相談
        </a>
      </div>
    </main>
  );
}
