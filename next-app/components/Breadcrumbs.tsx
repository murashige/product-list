import Link from 'next/link';

type Item = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav aria-label="パンくずリスト" className="text-body">
      <ol className="text-muted flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-link hover:text-link-hover underline-offset-2 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className="text-foreground">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-muted">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
