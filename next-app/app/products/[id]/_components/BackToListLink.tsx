import Link from 'next/link';

export function BackToListLink() {
  return (
    <Link
      href="/"
      className="text-muted hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
    >
      ← 商品一覧に戻る
    </Link>
  );
}
