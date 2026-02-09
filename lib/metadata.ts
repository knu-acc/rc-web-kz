/**
 * Утилиты для генерации SEO metadata
 * Единый формат для всех страниц сайта
 */

import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

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
 * Формат: "Услуга в Алматы | RC-Web.kz | Дополнение"
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

  return {
    title,
    description: description.slice(0, 160), // Ограничение до 160 символов
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title,
      description: description.slice(0, 160),
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
      description: description.slice(0, 160),
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
 * Формат: "Ключевой запрос в Алматы | RC-Web.kz | УТП"
 */
export function generateInfoMetadata({
  title,
  description,
  keywords = [],
  image,
  path,
}: InfoMetadataParams): Metadata {
  // Добавляем "в Алматы" если его нет в title
  const seoTitle = title.includes('Алматы')
    ? `${title} | RC-WEB.KZ`
    : `${title} в Алматы | RC-WEB.KZ`

  const defaultKeywords = [
    ...title.toLowerCase().split(' ').filter((w) => w.length > 3),
    'алматы',
    'создание сайтов алматы',
  ]

  return {
    title: seoTitle.slice(0, 60), // Ограничение до 60 символов
    description: description.slice(0, 160),
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: seoTitle,
      description: description.slice(0, 160),
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
      description: description.slice(0, 160),
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
 * Формат: "SEO Title (до 70 символов) | RC-Web.kz"
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
  const metaDescription = description.slice(0, 160)

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

/**
 * Вспомогательная функция для обрезки текста до нужной длины
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 3)}...`
}

/**
 * Вспомогательная функция для генерации keywords из текста
 */
export function generateKeywordsFromText(text: string, additional: string[] = []): string[] {
  const words = text
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3 && !['для', 'это', 'как', 'что', 'где', 'когда'].includes(w))
    .slice(0, 10)

  return [...words, ...additional]
}
