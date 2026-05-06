export const DEFAULT_PER_PAGE = 12;

export function paginate<T>(items: T[], page: number, perPage: number = DEFAULT_PER_PAGE) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Number.isFinite(page) && page >= 1 ? Math.floor(page) : 1;
  const start = (safePage - 1) * perPage;
  const end = start + perPage;

  return {
    items: items.slice(start, end),
    page: safePage,
    perPage,
    total,
    totalPages,
  };
}

export function parsePageParam(value: string | string[] | undefined): number {
  if (Array.isArray(value)) value = value[0];
  const n = Number(value);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1;
}

export function parsePerPageParam(
  value: string | string[] | undefined,
  fallback: number = DEFAULT_PER_PAGE,
): number {
  if (Array.isArray(value)) value = value[0];
  const n = Number(value);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : fallback;
}
