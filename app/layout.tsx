import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/lib/analytics'
import { SITE_CONFIG } from '@/lib/constants'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
  weight: ['500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
  variable: '--font-jakarta',
  preload: true,
  weight: ['400', '500'],
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'создание сайтов Алматы',
    'разработка сайтов Алматы',
    'создание сайтов Казахстан',
    'веб-разработка',
    'веб-студия Алматы',
    'landing page Алматы',
    'лендинг пейдж цена',
    'корпоративный сайт Алматы',
    'корпоративный сайт под ключ',
    'интернет-магазин Алматы',
    'интернет-магазин разработка',
    'заказать сайт в Алматы',
    'сайт под ключ Алматы',
    'сайт на Тильде заказать',
    'SEO оптимизация Алматы',
    'разработка сайтов Казахстан',
    'разработка сайтов на Next.js Казахстан',
    'создание сайтов КЗ',
    'веб-студия Алматы Next.js',
    'заказать сайт Астана',
    'разработка сайтов Шымкент',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  applicationName: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/img/slider4.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/img/slider4.png'],
    creator: '@rcwebkz',
  },
  icons: {
    icon: [
      { url: '/img/favs/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favs/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favs/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/img/favs/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${outfit.variable} ${jakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <meta name="theme-color" content="#FF4F18" />
        <meta name="geo.region" content="KZ-ALA" />
        <meta name="geo.placename" content="Алматы" />
        <meta name="geo.position" content="43.2220;76.8512" />
        <meta name="ICBM" content="43.2220, 76.8512" />
        <meta name="content-language" content="ru" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased bg-canvas text-text-main">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
