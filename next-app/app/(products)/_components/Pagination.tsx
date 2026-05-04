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
              'text-body inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 transition-colors',
              isCurrent
                ? 'bg-primary text-primary-foreground'
                : 'text-link hover:text-link-hover hover:bg-border',
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
        className="text-muted/50 text-body inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-md"
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="text-link hover:text-link-hover hover:bg-border text-body inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}
