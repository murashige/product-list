import type { Product } from '@/types';

import { ProductCard } from './ProductCard';

/** ファーストビューに入る想定の枚数。LCP 改善のため priority を付ける枚数。 */
const PRIORITY_COUNT = 4;

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="text-muted text-body py-24 text-center">商品が見つかりませんでした。</p>;
  }

  return (
    <ul className="max-sp:grid-cols-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-6 gap-y-10">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard product={product} priority={index < PRIORITY_COUNT} />
        </li>
      ))}
    </ul>
  );
}
