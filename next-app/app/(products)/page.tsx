import { Pagination } from '@/components/Pagination';
import { fetchProducts } from '@/libs/api';
import { parsePageParam } from '@/libs/pagination';

import { ProductGrid } from './_components/ProductGrid';

/** 一覧画面の 1 ページあたり表示件数 */
const PER_PAGE = 12;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parsePageParam(pageParam);
  const data = await fetchProducts(page, PER_PAGE);

  return (
    <section>
      <header className="mb-8">
        <p className="text-muted text-caption tracking-[0.3em]">COLLECTION</p>
        <h1 className="text-heading-lg max-sp:text-heading mt-2 font-semibold">Tシャツ一覧</h1>
      </header>

      <ProductGrid products={data.items} />

      <Pagination currentPage={data.page} totalPages={data.totalPages} basePath="/" />
    </section>
  );
}
