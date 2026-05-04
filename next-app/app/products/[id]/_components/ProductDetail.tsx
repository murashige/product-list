import Image from 'next/image';

import { Button } from '@/components/Button';
import type { Product } from '@/lib/types';

export function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="max-sp:grid-cols-1 max-sp:gap-10 grid grid-cols-2 gap-14">
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
          <p className="text-muted text-caption tracking-[0.3em]">TEE STORE</p>
          <h1 className="text-heading-lg max-sp:text-heading leading-tight font-semibold">
            {product.name}
          </h1>
        </header>
        <p className="text-foreground-soft text-body leading-7 whitespace-pre-line">
          {product.description}
        </p>
        <div className="mt-2">
          <Button variant="outline">購入する</Button>
        </div>
      </div>
    </article>
  );
}
