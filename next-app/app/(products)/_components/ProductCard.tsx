import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/types';

type Props = {
  product: Product;
  /** ファーストビューの画像かどうか。true の場合は priority で先読みして LCP を改善する。 */
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: Props) {
  return (
    <Link href={`/products/${product.id}`} className="group block focus:outline-none">
      <div className="bg-card border-border relative aspect-square w-full overflow-hidden rounded-md border">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 240px"
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-link group-hover:text-link-hover text-body line-clamp-2 font-medium underline-offset-2 group-hover:underline">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
