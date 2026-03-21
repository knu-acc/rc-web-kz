/**
 * Утилиты для генерации SEO metadata
 * Единый формат для всех страниц сайта
 */

import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

/** Обрезка описания по границе слова (не более 160 символов) */
function truncateDescription(text: string, max = 160): string {
  if (text.length <= max) return text
  return text.slice(0, max).replace(/\s+\S*$/, '') + '...'
}

export interface ServiceMetadataParams {
  serviceName: string
  serviceDescription: string
  keywords?: string[]
  price?: string
  image?: string
  path: string
}

export interface InfoMetadataParams {
  title: string
  description: string
  keywords?: string[]
  image?: string
  path: string
}

export interface BlogMetadataParams {
  title: string
  description: string
  keywords?: string[]
  date?: string
  author?: string
  image?: string
  path: string
}

/**
 * Генерация metadata для страниц услуг
 */
export function generateServiceMetadata({
  serviceName,
  serviceDescription,
  keywords = [],
  price,
  image,
  path,
}: ServiceMetadataParams): Metadata {
  const title = `${serviceName} в Алматы | RC-WEB.KZ${price ? ` | От ${price}` : ''}`
  const description = `${serviceDescription} ${price ? `От ${price}. ` : ''}Срок 5-10 дней. Бесплатная консультация.`

  const defaultKeywords = [
    `${serviceName.toLowerCase()} алматы`,
    `заказать ${serviceName.toLowerCase()} алматы`,
    `создание сайтов алматы`,
    'веб-разработка алматы',
  ]

  const truncatedDesc = truncateDescription(description)

  return {
    title,
    description: truncatedDesc,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title,
      description: truncatedDesc,
      url: `${SITE_CONFIG.url}${path}`,
      siteName: SITE_CONFIG.name,
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: image || `${SITE_CONFIG.url}/img/slider4.png`,
          width: 1200,
          height: 630,
          alt: serviceName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: truncatedDesc,
      images: [image || `${SITE_CONFIG.url}/img/slider4.png`],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}${path}`,
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
  }
}

/**
 * Генерация metadata для информационных страниц
 */
export function generateInfoMetadata({
  title,
  description,
  keywords = [],
  image,
  path,
}: InfoMetadataParams): Metadata {
  const seoTitle = title.includes('Алматы')
    ? `${title} | RC-WEB.KZ`
    : `${title} в Алматы | RC-WEB.KZ`

  const defaultKeywords = [
    ...title.toLowerCase().split(' ').filter((w) => w.length > 3),
    'алматы',
    'создание сайтов алматы',
  ]

  const truncatedDesc = truncateDescription(description)

  return {
    title: seoTitle.slice(0, 60),
    description: truncatedDesc,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: seoTitle,
      description: truncatedDesc,
      url: `${SITE_CONFIG.url}${path}`,
      siteName: SITE_CONFIG.name,
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: image || `${SITE_CONFIG.url}/img/slider4.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: truncatedDesc,
      images: [image || `${SITE_CONFIG.url}/img/slider4.png`],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}${path}`,
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
  }
}

/**
 * Генерация metadata для статей блога
 */
export function generateBlogMetadata({
  title,
  description,
  keywords = [],
  date,
  author,
  image,
  path,
}: BlogMetadataParams): Metadata {
  const seoTitle = title.length > 70 ? `${title.slice(0, 67)}...` : title
  const metaDescription = truncateDescription(description)

  return {
    title: `${seoTitle} | RC-WEB.KZ`,
    description: metaDescription,
    keywords,
    openGraph: {
      title: seoTitle,
      description: metaDescription,
      url: `${SITE_CONFIG.url}${path}`,
      siteName: SITE_CONFIG.name,
      locale: 'ru_RU',
      type: 'article',
      publishedTime: date,
      authors: author ? [author] : undefined,
      images: [
        {
          url: image || `${SITE_CONFIG.url}/img/slider4.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: metaDescription,
      images: [image || `${SITE_CONFIG.url}/img/slider4.png`],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}${path}`,
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
  }
}
