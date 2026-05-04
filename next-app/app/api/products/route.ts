import productsJson from '@/data/products.json';
import { paginate, parsePageParam } from '@/libs/pagination';
import { toProduct } from '@/libs/products';
import type { RawProduct } from '@/types';

const products = (productsJson as RawProduct[]).map(toProduct);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parsePageParam(searchParams.get('page') ?? undefined);
  const result = paginate(products, page);
  return Response.json(result);
}
