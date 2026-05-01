# TEE STORE プロジェクト指示

## 概要
Tシャツ販売サイト「TEE STORE」のデモアプリ。面接課題として作成。商品一覧と詳細を閲覧できる Web アプリ。

## 技術スタック
- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS v4（`styles/globals.css` の `@theme` でセマンティックカラー定義）
- pnpm / ESLint Flat Config / Prettier

## ディレクトリ構成のルール

- ルート直下: `.claude/`, `llm-docs/`, `CLAUDE.md`, `README.md`, ルート用 `package.json`
- `next-app/` 配下に Next.js 一式
- 全画面共通コンポーネントは `next-app/components/`
- 各画面の専用コンポーネントは `app/<画面>/_components/`（`_` プレフィックスでルーティングから除外）
- 一覧画面は Route Group `app/(products)/` に入れる（URL は `/`）
- スタイルは `styles/globals.css`（`app/` と並列）
- 共通の `loading.tsx` / `error.tsx` / `not-found.tsx` は `app/` 直下に配置（画面ごとには作らない）

## Next.js 16 系の重要ポイント
- `params` と `searchParams` は **`Promise` 型**。必ず `await` で取り出す
- `headers()` / `cookies()` も async
- Route Handler の `params` も Promise 型
- Turbopack がデフォルトバンドラ
- `next lint` は廃止。`pnpm lint` は `eslint` を直接実行する
