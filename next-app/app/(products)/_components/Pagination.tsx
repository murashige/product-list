import Link from 'next/link';

type Props = {
  currentPage: number;
  totalPages: number;
};

function pageHref(page: number) {
  return page <= 1 ? '/' : `/?page=${page}`;
}

export function Pagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav aria-label="ページネーション" className="mt-14 flex items-center justify-center gap-2">
      <PaginationLink href={pageHref(currentPage - 1)} disabled={!hasPrev} ariaLabel="前のページ">
        ←
      </PaginationLink>

      {pages.map((page) => {
        const isCurrent = page === currentPage;
        return (
          <Link
            key={page}
            href={pageHref(page)}
            aria-current={isCurrent ? 'page' : undefined}
            className={[
              'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm transition-colors',
              isCurrent ? 'bg-brand text-brand-foreground' : 'text-foreground hover:bg-border',
            ].join(' ')}
          >
            {page}
          </Link>
        );
      })}

      <PaginationLink href={pageHref(currentPage + 1)} disabled={!hasNext} ariaLabel="次のページ">
        →
      </PaginationLink>
    </nav>
  );
}

function PaginationLink({
  href,
  disabled,
  ariaLabel,
  children,
}: {
  href: string;
  disabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        aria-label={ariaLabel}
        className="text-muted/50 inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-md text-sm"
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="text-foreground hover:bg-border inline-flex h-9 w-9 items-center justify-center rounded-md text-sm transition-colors"
    >
      {children}
    </Link>
  );
}
