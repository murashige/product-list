import { fetchProducts } from '@/lib/api';
import { parsePageParam } from '@/lib/pagination';
import { Pagination } from './_components/Pagination';
import { ProductGrid } from './_components/ProductGrid';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parsePageParam(pageParam);
  const data = await fetchProducts(page);

  return (
    <section>
      <header className="mb-8">
        <p className="text-muted text-caption tracking-[0.3em]">COLLECTION</p>
        <h1 className="text-heading-lg max-sp:text-heading mt-2 font-semibold">Tシャツ一覧</h1>
      </header>

      <ProductGrid products={data.items} />

      <Pagination currentPage={data.page} totalPages={data.totalPages} />
    </section>
  );
}
