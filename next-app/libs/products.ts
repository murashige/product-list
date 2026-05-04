import type { Product, RawProduct } from '@/types';

/** public/products/ 配下の画像を配信する公開パス */
const PRODUCT_IMAGE_DIR = '/products';

/**
 * モックデータの RawProduct (file_name 持ち) を、
 * API レスポンス用の Product (image パス持ち) に変換する。
 */
export function toProduct(raw: RawProduct): Product {
  return {
    id: raw.id,
    name: raw.name,
    description: raw.description,
    image: `${PRODUCT_IMAGE_DIR}/${raw.file_name}`,
  };
}
