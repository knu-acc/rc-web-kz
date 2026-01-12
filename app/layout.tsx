import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/lib/analytics'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
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
    'веб-разработка',
    'landing page',
    'корпоративный сайт',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: [
      { url: '/img/favs/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favs/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/img/favs/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/img/favs/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#6366f1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Back to top button */}
        <button
          id="back-to-top"
          aria-label="Наверх"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Back to top script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var btn = document.getElementById('back-to-top');
                if (!btn) return;
                
                window.addEventListener('scroll', function() {
                  if (window.scrollY > 300) {
                    btn.classList.add('visible');
                  } else {
                    btn.classList.remove('visible');
                  }
                }, { passive: true });
                
                btn.addEventListener('click', function() {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
              })();
            `,
          }}
        />
        
        <Analytics />
      </body>
    </html>
  )
}
