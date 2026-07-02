"use client";

import { useMemo, useState } from "react";
import {
  baseShipping,
  calculateShipping,
  lineUrl,
  products,
  unitPrice,
} from "./site-config";

const formatter = new Intl.NumberFormat("ja-JP");

function yen(value: number) {
  return `${formatter.format(value)}円`;
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
  const shippingNote =
    totalCount === 0 ? "枚数を入力してください" : "全国一律送料";
  const shippingFormula = totalCount === 0 ? "" : "全国一律";
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
    `送料：${yen(shipping)}（${shippingFormula}）`,
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
        <h2>枚数を入れて、LINEに送る内容を確認</h2>
        <p>
          商品券はすべて1枚{unitPrice}円。送料は全国一律
          {yen(baseShipping)}です。
        </p>
      </div>

      <div className="calculator-shell">
        <div className="quantity-list" aria-label="商品ごとの枚数入力">
          {rows.map((row) => (
            <article className="quantity-row" key={row.name}>
              <div>
                <h3>{row.name}</h3>
                <p>999円 / 枚</p>
              </div>
              <div className="stepper">
                <button
                  aria-label={`${row.name}を1枚減らす`}
                  onClick={() => updateQuantity(row.name, row.quantity - 1)}
                  type="button"
                >
                  -
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
                  +
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
            <span>送料</span>
            <strong>{yen(shipping)}</strong>
          </div>
          <p className="quote-note">{shippingNote}</p>
          <div className="quote-total">
            <span>振込予定額</span>
            <strong>{yen(grandTotal)}</strong>
          </div>

          <div className="order-memo" aria-label="LINEに送る注文メモ">
            {hasOrder ? orderText : "欲しい商品の枚数を入力してください。"}
          </div>

          <div className="quote-actions">
            <button
              className="copy-button"
              disabled={!hasOrder}
              onClick={copyOrderText}
              type="button"
            >
              {copyLabel}
            </button>
            <a className="line-button" href={lineUrl}>
              LINEを開く
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
