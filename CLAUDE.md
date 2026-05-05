# TEE STORE プロジェクト指示

## 概要

Tシャツ販売サイト「TEE STORE」のデモアプリ。商品一覧と詳細を閲覧できる Web アプリ。

## 技術スタック

- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS v4（`styles/globals.css` の `@theme` でセマンティックカラー定義）
- pnpm / ESLint Flat Config / Prettier

## ディレクトリ構成のルール

- ルート直下: `.claude/`, `CLAUDE.md`, `README.md`, ルート用 `package.json`
- `next-app/` 配下に Next.js 一式
- 全画面共通コンポーネントは `next-app/components/`
- 各画面の専用コンポーネントは `app/<画面>/_components/`（`_` プレフィックスでルーティングから除外）
- 一覧画面は Route Group `app/(products)/` に入れる（URL は `/`）
- スタイルは `styles/globals.css`（`app/` と並列）
- 共通の `loading.tsx` / `error.tsx` / `not-found.tsx` は `app/` 直下に配置（画面ごとには作らない）

## コーディング規約

- **TypeScript**: `tsconfig.json` で `strict` + `noUncheckedIndexedAccess` 等を有効化。`any` は ESLint で禁止
- **import 順**: `eslint-plugin-simple-import-sort` で自動整列。`pnpm lint --fix` で適用される
- **型 import**: `import type` を強制（`@typescript-eslint/consistent-type-imports`）
- **`console.log` 残し禁止**: `console.warn` / `console.error` は許可
- **Prettier**: `pnpm format` で整形。`prettier-plugin-tailwindcss` で Tailwind クラスも自動並べ替え

## スタイル定義のルール

- 色・フォントサイズ・ブレークポイント等のデザイントークンは `next-app/styles/globals.css` の `@theme` ブロックに集約する
- コンポーネントでは `bg-blue-500` のような Tailwind デフォルト色や `bg-[#fff]` の任意値を使わず、セマンティックトークン（`bg-primary`, `text-link`, `text-heading-lg` 等）を使う
- ブレークポイントは PC ファースト + 1 ブレークポイント（`sp = 768px`）運用。スマホは `max-sp:` プレフィックスで上書きする。`sm:` / `md:` / `lg:` / `xl:` / `2xl:` は使わない（無効化済み）

## スクリプト

`next-app/` 直下またはルートから以下が利用できる。

```bash
pnpm dev        # 開発サーバー起動
pnpm build      # 本番ビルド
pnpm start      # 本番サーバー起動
pnpm lint       # ESLint
pnpm typecheck  # TypeScript の型チェックのみ
pnpm format     # Prettier 整形
```
