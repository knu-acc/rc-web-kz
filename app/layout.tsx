import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { HeaderLogo } from '@/components/layout/HeaderLogo'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/constants'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ThemeScript } from '@/components/providers/ThemeScript'
import { ErrorMonitoringScript } from '@/components/providers/ErrorMonitoringScript'
import { ClientComponents } from '@/components/layout/ClientComponents'
import { ErrorBoundaryWrapper } from '@/components/ui/ErrorBoundaryWrapper'
import { ToastProvider } from '@/components/providers/ToastProvider'

// Lazy load компонентов для SSR (SEO)
const StructuredData = dynamic(() => import('@/components/sections/StructuredData').then(mod => ({ default: mod.StructuredData })), {
  ssr: true, // SSR для SEO
})

// Оптимизация шрифтов: загружаем только необходимые начертания
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap', // Показываем системный шрифт пока загружается
  variable: '--font-inter',
  preload: true,
  weight: ['400', '500', '600', '700'], // Только используемые начертания
  fallback: ['system-ui', '-apple-system', 'sans-serif'], // Fallback на системные шрифты
  adjustFontFallback: true, // Автоматическая настройка fallback для уменьшения CLS
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: false, // Не предзагружаем второй шрифт для улучшения FCP
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true, // Автоматическая настройка fallback для уменьшения CLS
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
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* Viewport для всех экранов от 320px до 3840px */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <meta name="theme-color" content="#6366f1" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />
        {/* Гео-мета для локального SEO */}
        <meta name="geo.region" content="KZ-ALA" />
        <meta name="geo.placename" content="Алматы" />
        <meta name="geo.position" content="43.2220;76.8512" />
        <meta name="ICBM" content="43.2220, 76.8512" />
        <meta name="content-language" content="ru" />
        {/* Безопасность */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        {/* Safe area для устройств с вырезами */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Замените на ваши коды верификации из панелей поисковиков */}
        <ThemeScript />
        {/* Preconnect для критических ресурсов (без дублирования dns-prefetch) */}
        {/* Аналитика: preconnect только если используется, чтобы не тратить ресурсы впустую */}
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://mc.yandex.ru" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* DNS Prefetch для внешних доменов (без дублирования preconnect) */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ErrorBoundaryWrapper>
          <ThemeProvider>
            <ToastProvider>
              <ErrorMonitoringScript />
              <Header logoSlot={<HeaderLogo />} />
              <main id="main-content" tabIndex={-1}>{children}</main>
              <Footer />

              <StructuredData />
              <ClientComponents />
            </ToastProvider>
          </ThemeProvider>
        </ErrorBoundaryWrapper>
      </body>
    </html>
  )
}
