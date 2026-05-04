# TEE STORE - 商品一覧アプリ

面接課題として作成した、Tシャツ販売サイトのデモアプリケーションです。商品一覧と詳細を閲覧できる Web アプリで、Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 で実装しています。

## 主な機能

- 商品一覧画面（`/`）: カード形式で画像と商品名を表示。ページネーション付き
- 商品詳細画面（`/products/[id]`）: 画像、商品名、説明文を表示
- API Route によるモック API（`/api/products`, `/api/products/[id]`）
- 50 件の Tシャツ商品データ（ID は UUID 形式）

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- pnpm
- ESLint (Flat Config) / Prettier

## セットアップ

### 必要環境

- Node.js v22 以上
- pnpm v10 以上

### 手順

```bash
# 1. pnpm 未インストールの場合のみ
npm install -g pnpm

# 2. next-app ディレクトリへ移動して依存をインストール
cd next-app
pnpm install

# 3. 環境変数を用意
cp .env.sample .env.local

# 4. 開発サーバーを起動
pnpm dev
```

ブラウザで http://localhost:3000 を開くと商品一覧が表示されます。

## 技術選定理由
- **Next.js (App Router)**: EC で重要なパフォーマンス（Server Component /   
  `next/image`）、SEO（SSR + `generateMetadata`）、ファイル規約によるDXを、標準機能で満たせるため 
- **Tailwind CSS v4**: デザイナー不在でも一貫した UIを素早く組める。
  `@theme`でセマンティックトークンを集約することで、デザイン変更を1ファイルで完結できる 

## ディレクトリ構成

```
product-list/
└── next-app/                              # Next.js アプリ本体
    ├── app/                               # ルーティング（App Router）
    │   ├── layout.tsx                     # 共通レイアウト
    │   ├── loading.tsx                    # 全画面共通のローディング UI
    │   ├── error.tsx                      # 全画面共通のエラー境界
    │   ├── not-found.tsx                  # 全画面共通の 404
    │   ├── (products)/                    # 一覧画面 (URL: /)
    │   │   ├── page.tsx
    │   │   └── _components/               # 一覧画面専用のコンポーネント
    │   ├── products/[id]/                 # 詳細画面 (/products/:id)
    │   │   ├── page.tsx
    │   │   └── _components/               # 詳細画面専用のコンポーネント
    │   └── api/                           # API Route（モック）
    ├── components/                        # 全画面共通コンポーネント
    ├── styles/                            # globals.css
    ├── libs/                              # API クライアント・ユーティリティ
    ├── types/                              # 共通型定義（@/types からインポート）
    ├── data/                              # モックデータ
    └── public/                            # 静的ファイル
```

### コンポーネント配置のルール

- **全画面共通コンポーネント**: `next-app/components/` 配下に置く（`Header`, `Footer`, `Button` など）
- **特定画面でのみ使うコンポーネント**: 各ページディレクトリの `_components/` 配下に置く
  - 例: 一覧画面でのみ使う `ProductCard` は `app/(products)/_components/ProductCard.tsx`
  - 例: 詳細画面でのみ使う `ProductDetail` は `app/products/[id]/_components/ProductDetail.tsx`
- `_` プレフィックスで Next.js のルーティングから除外される

### 共通 UI ファイル

`loading.tsx` / `error.tsx` / `not-found.tsx` は **`app/` 直下に1つずつだけ配置**して全画面で共通化しています。画面ごとに個別の表示にしたい場合のみ、当該画面のディレクトリ配下に同名ファイルを追加すれば上書きできます。

## スタイル定義

スタイリングは **Tailwind CSS v4** をユーティリティクラスベースで使用しています。色・フォントサイズ・ブレークポイントなどのデザイントークンは **`next-app/styles/globals.css` の `@theme` ブロックに集約**されており、コンポーネントで色や寸法を直書きする代わりに**この共通トークンを使う**ことを基本ルールとします。

### カラー・フォントサイズ（セマンティックトークン）

色とフォントサイズは `globals.css` の `@theme` ブロックで**用途ベースのトークン**として定義し、コンポーネントではそれを使います。Tailwind デフォルトの `bg-blue-500` のような数値スケールや `bg-[#fff]` のような任意値は使いません（テーマ変更が全画面に伝わらないため）。

定義例:

```css
/* styles/globals.css */
@theme {
  /* Color: ペアで定義（背景色とその上に乗る文字色） */
  --color-primary: #1d4ed8;
  --color-primary-foreground: #ffffff;
  --color-link: #3b82f6;
  /* ... */

  /* Font size: 用途ベースの命名 */
  --text-body: 1rem;
  --text-heading: 1.5rem;
  --text-heading-lg: 1.875rem;
  /* ... */
}
```

利用例:

```tsx
<button className="bg-primary text-primary-foreground">購入する</button>
<h1 className="text-heading-lg">商品名</h1>
<a className="text-link hover:text-link-hover">商品詳細</a>
```

### ブレークポイント（PC ファースト + 1 ブレークポイント運用）

レスポンシブ対応の複雑化を防ぐため、**ブレークポイントは 1 つ (`sp = 768px`) のみ**を使います。

- **デフォルトのスタイル = PC / タブレット (≥768px) 用**
- **スマホ (<768px) のスタイルは `max-sp:` プレフィックスで上書き**
- Tailwind デフォルトの `sm:` / `md:` / `lg:` / `xl:` / `2xl:` は **使わないルール**（誤用防止のため `globals.css` で `initial` 指定して無効化済み）

例:
```tsx
// PC/タブレット = px-10、スマホ = px-4
<main className="px-10 max-sp:px-4">

// PC/タブレット = 大見出し、スマホ = 標準見出しに縮小
<h1 className="text-heading-lg max-sp:text-heading">

// 商品グリッド: PC/タブレットはカラム幅 240px で列数可変、スマホは1列
<ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] max-sp:grid-cols-1">
```
