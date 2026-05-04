'use client';

import { useEffect } from 'react';
import { Button } from '@/components/Button';

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
      <h2 className="text-heading font-semibold">問題が発生しました</h2>
      <p className="text-muted text-body">
        ページの読み込み中にエラーが発生しました。再度お試しください。
      </p>
      <Button onClick={reset}>再試行</Button>
    </div>
  );
}
