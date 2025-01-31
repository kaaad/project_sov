import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import ToasterProvider from '@/components/toaster-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Shrinkhala Overseas",
  description: "Leading Provider Of Skilled And Dedicated Workers For Various Industries Worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
          <main className="pt-16">
            <ToasterProvider />
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
