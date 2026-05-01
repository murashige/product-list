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
- pnpm v10 以上（インストール手順は下記）

### 手順

```bash
# 1. pnpm をインストール（未インストールの場合のみ）
npm install -g pnpm@10.18.3

# 2. next-app ディレクトリへ移動して依存をインストール
cd next-app
pnpm install

# 3. 環境変数を用意
cp .env.sample .env.local

# 4. 開発サーバーを起動
pnpm dev
```

> pnpm のバージョンは `package.json` の `packageManager` フィールドで `pnpm@10.18.3` に固定しています。
> Corepack を有効にしている環境（`corepack enable` 実行済み）では自動的に該当バージョンが使われるため、手動の `npm install -g pnpm` は不要です。

ブラウザで http://localhost:3000 を開くと商品一覧が表示されます。

ルート (`product-list/`) からは以下のショートカットも使えます:

```bash
pnpm dev      # next-app の dev を起動
pnpm build    # next-app をビルド
pnpm lint     # next-app の lint
```

## ディレクトリ構成

```
product-list/
├── .claude/           # Claude Code 設定
├── llm-docs/          # LLM 用ドキュメント
├── CLAUDE.md          # Claude Code プロジェクト指示
└── next-app/          # Next.js アプリ本体
    ├── app/           # ルーティング（App Router）
    ├── components/    # 全画面共通コンポーネント
    ├── styles/        # globals.css
    ├── lib/           # 型定義・API クライアント・ユーティリティ
    ├── data/          # モックデータ
    └── public/        # 静的ファイル
```

## 商品画像について

商品画像は `next-app/public/products/` 配下に配置する想定です。現状はダミーパスのため、実画像を置く際は `next-app/data/products.json` の `image` フィールドを `/products/<filename>` に書き換えてください。

## 設計判断のメモ

- **Server Component から API Route 経由でデータ取得**: 課題で「API Route でモック作成」が指定されているため、Server Component が実際にそのエンドポイントを利用する構成とした
- **`_components/` の運用**: 各画面ディレクトリ配下に `_components/` を置き、画面専用コンポーネントを画面と同居させる
- **共通の loading/error/not-found**: `app/` 直下に置き、全画面で共有
- **Tailwind v4**: スタイルをその場で素早く修正できるよう、ユーティリティクラスベースを採用
