'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h2 className="text-2xl font-semibold">問題が発生しました</h2>
      <p className="text-muted text-sm">
        ページの読み込み中にエラーが発生しました。再度お試しください。
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-brand text-brand-foreground rounded-full px-6 py-2 text-sm font-medium transition-opacity hover:opacity-80"
      >
        再試行
      </button>
    </div>
  );
}
