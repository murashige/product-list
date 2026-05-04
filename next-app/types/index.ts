/**
 * 商品（API レスポンスや UI で扱う形）。
 * image は public 配下からのフルパス（例: /products/<uuid>.jpg）。
 */
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

/**
 * モックデータ JSON 側のスキーマ。
 * 画像はファイル名のみ持ち、API レスポンスに変換する際に image パスを組み立てる。
 */
export type RawProduct = {
  id: string;
  name: string;
  description: string;
  file_name: string;
};

export type ProductListResponse = {
  items: Product[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};
