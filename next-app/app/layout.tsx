import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'TEE STORE',
    template: '%s | TEE STORE',
  },
  description: 'シンプルで上質なTシャツのオンラインストア',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <Header />
        <main className="max-sp:px-4 mx-auto w-full max-w-7xl flex-1 px-10 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
