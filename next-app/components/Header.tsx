import Link from 'next/link';

export function Header() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
      <div className="max-sp:px-4 mx-auto flex h-16 w-full max-w-7xl items-center px-8">
        <Link
          href="/"
          className="text-foreground text-logo font-bold tracking-[0.2em] hover:opacity-80"
        >
          TEE STORE
        </Link>
      </div>
    </header>
  );
}
