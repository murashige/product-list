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
      <header className="mb-10">
        <p className="text-muted text-xs tracking-[0.3em]">COLLECTION</p>
        <h1 className="mt-2 text-2xl font-semibold md:text-3xl">All Tees</h1>
        <p className="text-muted mt-3 text-sm">シンプルで上質なベーシックから、限定コラボまで。</p>
      </header>

      <ProductGrid products={data.items} />

      <Pagination currentPage={data.page} totalPages={data.totalPages} />
    </section>
  );
}
