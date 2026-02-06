'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/data/blog'

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  seo: 'SEO и продвижение',
  design: 'Дизайн и UX',
  marketing: 'Реклама и маркетинг',
  cases: 'Кейсы',
  technical: 'Технические темы',
}

interface BlogContentProps {
  posts: BlogPost[]
  categories: string[]
}

export function BlogContent({ posts, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts

  return (
    <>
      {/* Категории */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
          }`}
        >
          Все статьи
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
            }`}
          >
            {categoryLabels[category] || category}
          </button>
        ))}
      </div>

      {/* Количество */}
      {activeCategory && (
        <p className="text-center text-secondary-500 dark:text-secondary-400 mb-8 text-sm">
          Найдено статей: {filteredPosts.length}
        </p>
      )}

      {/* Список статей */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm hover:shadow-lg dark:shadow-secondary-900/50 transition-shadow overflow-hidden border border-secondary-100 dark:border-secondary-800"
          >
            {post.image && (
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                  {categoryLabels[post.category] || post.category}
                </span>
                {post.readingTime && (
                  <span className="text-xs text-secondary-500 dark:text-secondary-400">
                    {post.readingTime} мин чтения
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-secondary-500 dark:text-secondary-400">{post.date}</time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                >
                  Читать →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-500 dark:text-secondary-400">
            В этой категории пока нет статей
          </p>
          <button
            onClick={() => setActiveCategory(null)}
            className="mt-4 text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            Показать все статьи
          </button>
        </div>
      )}
    </>
  )
}
