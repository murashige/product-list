import Link from 'next/link';

export function Header() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 md:px-8">
        <Link href="/" className="text-foreground text-xl font-bold tracking-[0.2em]">
          TEE STORE
        </Link>
      </div>
    </header>
  );
}
