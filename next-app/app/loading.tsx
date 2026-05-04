export default function Loading() {
  return (
    <div className="max-sp:grid-cols-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-6 gap-y-10">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="bg-border aspect-square w-full animate-pulse rounded-md" />
          <div className="bg-border h-4 w-2/3 animate-pulse rounded" />
        </div>
      ))}
    </div>
  );
}
