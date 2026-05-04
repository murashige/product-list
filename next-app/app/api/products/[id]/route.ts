import productsJson from '@/data/products.json';
import { toProduct } from '@/libs/products';
import type { RawProduct } from '@/types';

const products = (productsJson as RawProduct[]).map(toProduct);

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 404 });
  }
  return Response.json(product);
}
