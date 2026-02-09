/**
 * Глобальные типы для всего проекта
 */

// Типы для страниц
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

// Типы для услуг
export interface Service {
  slug: string
  name: string
  description: string
  price?: string
  features?: string[]
  category?: string
}

// Типы для портфолио
export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  url: string
  category?: string
  tags?: string[]
}

// Типы для отзывов
export interface Review {
  id: string
  author: string
  text: string
  rating: number
  date: string
  service?: string
  image?: string
}

// Типы для блога
export interface BlogPost {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  description: string
  content: string
  category: 'guides' | 'seo' | 'design' | 'marketing' | 'cases' | 'technical'
  date: string
  author: string
  keywords: string[]
  internalLinks?: string[]
  image?: string
  readingTime?: number
}

// Типы для форм
export interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

// Типы для API ответов
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Типы для аналитики
export interface AnalyticsEvent {
  name: string
  category: string
  label?: string
  value?: number
}
