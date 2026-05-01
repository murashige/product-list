export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="bg-border aspect-square w-full animate-pulse rounded-md" />
          <div className="bg-border h-4 w-2/3 animate-pulse rounded" />
        </div>
      ))}
    </div>
  );
}
