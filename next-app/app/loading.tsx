export default function Loading() {
  return (
    <div
      role="status"
      aria-label="読み込み中"
      className="flex items-center justify-center py-24"
    >
      <span className="border-border border-t-primary inline-block h-10 w-10 animate-spin rounded-full border-4" />
      <span className="sr-only">読み込み中...</span>
    </div>
  );
}
