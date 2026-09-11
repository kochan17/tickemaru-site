"use client";

import type { ReactNode } from "react";
import { lineUrlForSource } from "./site-config";
import { useVisitSource } from "./visit-source";

/**
 * LINEボタン。流入元（utm_source）が分かっている訪問者には、
 * 「経由：◯◯（コード：XXX）」入りの最初のメッセージが下書きされた状態でLINEを開く。
 * サーバー描画・初回描画は通常の友だち追加URLなので、見た目は従来と変わらない。
 */
export default function LineCta({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const visitSource = useVisitSource();

  return (
    <a className={className} href={lineUrlForSource(visitSource)}>
      {children}
    </a>
  );
}
