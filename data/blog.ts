/**
 * Blog Data
 * Массив статей блога для SEO-продвижения
 */

export interface BlogPost {
  slug: string
  title: string
  seoTitle: string // SEO Title (до 70 символов)
  metaDescription: string // Meta Description (до 160 символов, с CTA)
  description: string // Краткое описание для карточки статьи
  content: string // Полный текст статьи в markdown
  category: 'guides' | 'seo' | 'design' | 'marketing' | 'cases' | 'technical'
  date: string
  author: string
  keywords: string[] // Основные ключевые слова
  internalLinks?: string[] // Внутренние ссылки на другие страницы/статьи
  image?: string
  readingTime?: number
}

import { seoArticles } from './blog-articles'

// Объединяем все статьи
export const blogPosts: BlogPost[] = [
  ...seoArticles,
  // Здесь можно добавить дополнительные статьи
]

// Функция для получения статьи по slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Функция для получения всех категорий
export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}
