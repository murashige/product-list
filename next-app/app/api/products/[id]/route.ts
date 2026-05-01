import productsJson from '@/data/products.json';
import type { Product } from '@/lib/types';

const products = productsJson as Product[];

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 404 });
  }
  return Response.json(product);
}
