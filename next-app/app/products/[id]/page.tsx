import type { Metadata } from 'next';
import { fetchProduct } from '@/lib/api';
import { Breadcrumbs } from './_components/Breadcrumbs';
import { ProductDetail } from './_components/ProductDetail';

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  try {
    const product = await fetchProduct(id);
    return {
      title: product.name,
      description: product.description.slice(0, 120),
    };
  } catch {
    return { title: '商品詳細' };
  }
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = await fetchProduct(id);

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'ホーム', href: '/' }, { label: product.name }]} />
      <ProductDetail product={product} />
    </div>
  );
}
