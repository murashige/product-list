import Image from 'next/image';
import type { Product } from '@/lib/types';

export function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
      <div className="bg-card border-border relative aspect-square w-full overflow-hidden rounded-md border">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-6">
        <header className="space-y-2">
          <p className="text-muted text-xs tracking-[0.3em]">TEE STORE</p>
          <h1 className="text-2xl leading-tight font-semibold md:text-3xl">{product.name}</h1>
        </header>
        <p className="text-foreground/80 text-sm leading-7 whitespace-pre-line">
          {product.description}
        </p>
      </div>
    </article>
  );
}
