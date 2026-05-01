export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border border-t">
      <div className="text-muted mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 text-xs md:px-8">
        <span className="tracking-[0.2em]">TEE STORE</span>
        <span>© {year} TEE STORE. All rights reserved.</span>
      </div>
    </footer>
  );
}
