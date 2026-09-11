// 流入元（utm_source）の記憶と読み出し。ブラウザ側だけで動く（サーバー描画では常に null）。
// 記憶先は localStorage。使えない環境（プライベートブラウズ等）では黙って null を返す。
import { useSyncExternalStore } from "react";
import {
  describeVisitSource,
  visitSourceStorageKey,
  visitSourceTtlMs,
  type VisitSource,
} from "./site-config";

type StoredVisitSource = Pick<VisitSource, "source" | "medium" | "at">;

function readStored(): VisitSource | null {
  try {
    const raw = window.localStorage.getItem(visitSourceStorageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredVisitSource>;
    if (typeof parsed.at !== "number" || Date.now() - parsed.at > visitSourceTtlMs) {
      return null;
    }
    return describeVisitSource(parsed.source, parsed.medium, parsed.at);
  } catch {
    return null;
  }
}

function writeStored(src: VisitSource) {
  try {
    const stored: StoredVisitSource = {
      source: src.source,
      medium: src.medium,
      at: src.at,
    };
    window.localStorage.setItem(visitSourceStorageKey, JSON.stringify(stored));
  } catch {
    // 保存できなくても動作は続ける（このページ内では URL から読んだ値を使う）
  }
}

/**
 * 現在のURLに utm_source があれば記憶して返す。無ければ以前に記憶した流入元を返す。
 * 何度呼んでも同じ結果になる（冪等）。
 */
export function rememberVisitSource(): VisitSource | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URL(window.location.href).searchParams;
    const fromUrl = describeVisitSource(
      params.get("utm_source"),
      params.get("utm_medium"),
    );
    if (fromUrl) {
      writeStored(fromUrl);
      return fromUrl;
    }
  } catch {
    // URL が読めないことは通常ないが、念のため記憶済みの値へフォールバック
  }
  return readStored();
}

// ページ表示中は1回だけ判定し、同じ参照を返す（useSyncExternalStore の要件）
let snapshot: VisitSource | null | undefined;

function getSnapshot(): VisitSource | null {
  if (snapshot === undefined) snapshot = rememberVisitSource();
  return snapshot;
}

function getServerSnapshot(): VisitSource | null {
  return null;
}

function subscribe() {
  // 流入元はページ表示中に変わらないので購読するものは無い
  return () => {};
}

/** 流入元をReactから読む。サーバー描画・初回描画は null、その後ブラウザで判定した値になる */
export function useVisitSource(): VisitSource | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
