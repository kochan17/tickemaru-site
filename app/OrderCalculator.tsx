"use client";

import { useMemo, useState } from "react";
import {
  baseShipping,
  calculateShipping,
  lineMessageUrl,
  lineUrl,
  products,
  unitPrice,
} from "./site-config";

const formatter = new Intl.NumberFormat("ja-JP");

function yen(value: number) {
  return `${formatter.format(value)}円`;
}

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

export default function OrderCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((product) => [product.name, 0])),
  );
  const [copyLabel, setCopyLabel] = useState("注文メモをコピー");

  const rows = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        quantity: quantities[product.name] ?? 0,
        subtotal: (quantities[product.name] ?? 0) * unitPrice,
      })),
    [quantities],
  );

  const totalCount = rows.reduce((sum, row) => sum + row.quantity, 0);
  const itemTotal = rows.reduce((sum, row) => sum + row.subtotal, 0);
  const shipping = calculateShipping(totalCount);
  const grandTotal = itemTotal + shipping;
  const selectedRows = rows.filter((row) => row.quantity > 0);
  const hasOrder = selectedRows.length > 0;

  const orderText = [
    "チケまる 注文相談",
    "",
    ...selectedRows.map(
      (row) => `${row.name}：${row.quantity}枚（${yen(row.subtotal)}）`,
    ),
    "",
    `合計枚数：${totalCount}枚`,
    `商品合計：${yen(itemTotal)}`,
    `送料：${yen(shipping)}（全国一律）`,
    `振込予定額：${yen(grandTotal)}`,
    "",
    "在庫と振込先の案内をお願いします。",
  ].join("\n");

  function updateQuantity(productName: string, nextValue: number) {
    const safeValue = Number.isFinite(nextValue)
      ? Math.max(0, Math.min(999, Math.floor(nextValue)))
      : 0;

    setQuantities((current) => ({
      ...current,
      [productName]: safeValue,
    }));
  }

  async function copyOrderText() {
    if (!hasOrder) return;

    try {
      await navigator.clipboard.writeText(orderText);
      setCopyLabel("コピーしました");
      window.setTimeout(() => setCopyLabel("注文メモをコピー"), 1800);
    } catch {
      setCopyLabel("コピーできませんでした");
      window.setTimeout(() => setCopyLabel("注文メモをコピー"), 1800);
    }
  }

  return (
    <section id="quote" className="section calculator-section">
      <div className="calculator-heading">
        <p className="eyebrow">かんたん見積もり</p>
        <h2>枚数を入れて、そのままLINEで送る</h2>
        <p>
          すべて1枚{yen(unitPrice)}。送料は枚数にかかわらず全国一律
          {yen(baseShipping)}です。入力した注文内容は、ボタンひとつでLINEに送れます。
        </p>
      </div>

      <div className="calculator-shell">
        <div className="quantity-list" aria-label="商品ごとの枚数入力">
          {rows.map((row) => (
            <article className="quantity-row" key={row.name}>
              <div className="quantity-row-info">
                <h3>{row.name}</h3>
                <p>
                  {yen(unitPrice)} / 枚
                  {row.quantity > 0 && (
                    <strong className="row-subtotal">
                      　小計 {yen(row.subtotal)}
                    </strong>
                  )}
                </p>
              </div>
              <div className="quantity-controls">
                <div className="stepper">
                  <button
                    aria-label={`${row.name}を1枚減らす`}
                    onClick={() => updateQuantity(row.name, row.quantity - 1)}
                    type="button"
                  >
                    −
                  </button>
                  <input
                    aria-label={`${row.name}の枚数`}
                    inputMode="numeric"
                    min="0"
                    max="999"
                    onChange={(event) =>
                      updateQuantity(row.name, Number(event.target.value))
                    }
                    type="number"
                    value={row.quantity}
                  />
                  <button
                    aria-label={`${row.name}を1枚増やす`}
                    onClick={() => updateQuantity(row.name, row.quantity + 1)}
                    type="button"
                  >
                    ＋
                  </button>
                </div>
                <button
                  aria-label={`${row.name}を10枚増やす`}
                  className="bulk-add"
                  onClick={() => updateQuantity(row.name, row.quantity + 10)}
                  type="button"
                >
                  +10枚
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="quote-card" aria-label="見積もり結果">
          <div className="quote-line">
            <span>合計枚数</span>
            <strong>{totalCount}枚</strong>
          </div>
          <div className="quote-line">
            <span>商品合計</span>
            <strong>{yen(itemTotal)}</strong>
          </div>
          <div className="quote-line">
            <span>送料（全国一律）</span>
            <strong>{yen(shipping)}</strong>
          </div>
          <div className="quote-total">
            <span>振込予定額</span>
            <strong>{yen(grandTotal)}</strong>
          </div>

          <div className="order-memo" aria-label="LINEに送る注文メモ">
            {hasOrder
              ? orderText
              : "枚数を入力すると、LINEに送る注文メモがここに表示されます。"}
          </div>

          <div className="quote-actions">
            <a
              className="line-button"
              href={hasOrder ? lineMessageUrl(orderText) : lineUrl}
            >
              <LineIcon />
              {hasOrder ? "この内容をLINEで送る" : "LINEで相談する"}
            </a>
            <button
              className="copy-button"
              disabled={!hasOrder}
              onClick={copyOrderText}
              type="button"
            >
              {copyLabel}
            </button>
          </div>
          <p className="quote-hint">
            送信後、在庫と振込先をご案内します。この時点では注文は確定しません。
          </p>
        </aside>
      </div>
    </section>
  );
}
