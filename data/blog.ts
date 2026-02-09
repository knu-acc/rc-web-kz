/**
 * Blog Data
 * Массив статей блога для SEO-продвижения
 */

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

import { allArticles } from './blog/articles'

export const blogPosts: BlogPost[] = allArticles

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}

export async function getPostsByCategory(category: BlogPost['category']): Promise<BlogPost[]> {
  switch (category) {
    case 'guides': {
      const { guidesArticles } = await import('./blog/articles/guides')
      return guidesArticles
    }
    case 'seo': {
      const { seoArticles } = await import('./blog/articles/seo')
      return seoArticles
    }
    case 'design': {
      const { designArticles } = await import('./blog/articles/design')
      return designArticles
    }
    case 'marketing': {
      const { marketingArticles } = await import('./blog/articles/marketing')
      return marketingArticles
    }
    case 'cases': {
      const { casesArticles } = await import('./blog/articles/cases')
      return casesArticles
    }
    case 'technical': {
      const { technicalArticles } = await import('./blog/articles/technical')
      return technicalArticles
    }
    default:
      return []
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const { allArticles: articles } = await import('./blog/articles')
  return articles
}
