import { Metadata } from 'next'

interface PageSEO {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

export const SITE_CONFIG = {
  name: 'RC-WEB.KZ',
  title: 'Разработка сайтов в Алматы | Создание веб-сайтов под ключ',
  description: 'Профессиональная разработка сайтов в Алматы. Создаем landing page, корпоративные сайты, интернет-магазины. Продвижение и SEO оптимизация.',
  url: 'https://rc-web.kz',
  ogImage: 'https://rc-web.kz/img/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/rc_web.kz',
    whatsapp: 'https://wa.me/77771234567',
  }
}

export function constructMetadata({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  keywords = [],
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
}: PageSEO = {}): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    keywords: [
      'разработка сайтов',
      'создание сайтов алматы',
      'веб студия алматы',
      'заказать сайт',
      ...keywords,
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    openGraph: {
      type: 'website',
      locale: 'ru_KZ',
      url,
      title,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
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
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  }
}

export function constructJsonLd(type: string, data: any) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    }),
  }
}
