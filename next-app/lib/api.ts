import { notFound } from 'next/navigation';

import { env } from './env';
import type { Product, ProductListResponse } from './types';

export async function fetchProducts(page: number): Promise<ProductListResponse> {
  const res = await fetch(`${env.baseUrl}/api/products?page=${page}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }
  return res.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`${env.baseUrl}/api/products/${encodeURIComponent(id)}`, {
    cache: 'no-store',
  });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }
  return res.json();
}
