import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-muted text-caption tracking-[0.3em]">404</p>
      <h2 className="text-heading font-semibold">ページが見つかりませんでした</h2>
      <p className="text-muted text-body">
        お探しのページは削除されたか、URL が間違っている可能性があります。
      </p>
      <Button href="/" className="mt-2">
        商品一覧へ戻る
      </Button>
    </div>
  );
}
