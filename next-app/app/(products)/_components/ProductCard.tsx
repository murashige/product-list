import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block focus:outline-none">
      <div className="bg-card border-border relative aspect-square w-full overflow-hidden rounded-md border">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-foreground line-clamp-2 text-sm font-medium">{product.name}</h3>
      </div>
    </Link>
  );
}
