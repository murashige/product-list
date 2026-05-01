import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-muted text-xs tracking-[0.3em]">404</p>
      <h2 className="text-2xl font-semibold">ページが見つかりませんでした</h2>
      <p className="text-muted text-sm">
        お探しのページは削除されたか、URL が間違っている可能性があります。
      </p>
      <Link
        href="/"
        className="bg-brand text-brand-foreground mt-2 rounded-full px-6 py-2 text-sm font-medium transition-opacity hover:opacity-80"
      >
        商品一覧へ戻る
      </Link>
    </div>
  );
}
