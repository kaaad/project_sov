import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import ToasterProvider from '@/components/toaster-provider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shrinkhalaoverseas.com/'),
  title: "Shrinkhala Overseas Pvt Ltd",
  description: "Leading Provider Of Skilled And Dedicated Workers For Various Industries Worldwide",
  icons: {
    icon: '/shrinkhala_logo.png'
  },
  openGraph: {
    title: "Shrinkhala Overseas Pvt Ltd",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: 'Leading Provider Of Skilled And Dedicated Workers For Various Industries Worldwide',
    url: "https://shrinkhalaoverseas.com/",
    images: [
      {
        url:"https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Shrinkhala Overseas Logo"
      }
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 0.5,
    maximumScale: 5
  }
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
      <Script id='analytics-src' strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id='analytics-code' strategy='afterInteractive'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`
        }
      </Script>
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
