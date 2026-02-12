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
  title: 'Manpower Agency in Nepal - Skilled Nepali Workers for Europe | Shrinkhala Overseas',
  keywords: 'manpower agency Nepal, hire Nepali workers Europe, skilled Nepali labor Europe, Nepal to Europe recruitment, European manpower supply, Nepali workers Germany Croatia Poland Romania',
  description: 'Licensed manpower agency in Nepal providing skilled Nepali workers to European employers. Expert recruitment, visa support, and deployment services for Germany, Croatia, Poland, Romania.',
  icons: {
    icon: '/shrinkhala_logo.png'
  },
  openGraph: {
    title: 'Manpower Agency in Nepal - Skilled Nepali Workers for Europe',
    description: 'Licensed manpower agency providing skilled Nepali workers to European employers with complete visa and deployment support.',
    type: 'website',
    locale: 'en_US',
    siteName: "Shrinkhala Overseas",
    url: "https://shrinkhalaoverseas.com/",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shrinkhala Overseas",
              "alternateName": "Shrinkhala Overseas Manpower Agency",
              "description": "Licensed manpower agency in Nepal providing skilled Nepali workers to European employers",
              "url": "https://shrinkhalaoverseas.com",
              "logo": "https://shrinkhalaoverseas.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+977-1-4123456",
                "contactType": "customer service",
                "availableLanguage": ["English", "Nepali"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Putalisadak",
                "addressLocality": "Kathmandu",
                "addressCountry": "Nepal"
              },
              "sameAs": [
                "https://www.facebook.com/shrinkhalaoverseas",
                "https://www.linkedin.com/company/shrinkhalaoverseas"
              ],
              "areaServed": ["Germany", "Croatia", "Poland", "Romania"],
              "serviceType": "Manpower Supply Agency",
              "license": "DFE-2024-001",
              "issuedBy": {
                "@type": "Organization",
                "name": "Department of Foreign Employment, Nepal"
              }
            })
          }}
        />
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
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/40731291693"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  );
}
