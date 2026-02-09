'use client'

import { useState, useMemo, useEffect } from 'react'
import type { BlogPost } from '@/data/blog'
import { AnalyticsEvents } from '@/lib/analytics-events'

interface BlogSearchProps {
  posts: BlogPost[]
  onSearchResults: (results: BlogPost[]) => void
}

export function BlogSearch({ posts, onSearchResults }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts
    }

    const query = searchQuery.toLowerCase().trim()
    const results = posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query)
      const descriptionMatch = post.description.toLowerCase().includes(query)
      const keywordsMatch = post.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query)
      )
      const categoryMatch = post.category.toLowerCase().includes(query)

      return titleMatch || descriptionMatch || keywordsMatch || categoryMatch
    })

    // Отслеживание поиска
    if (query.length > 2) {
      AnalyticsEvents.search(query)
    }

    return results
  }, [searchQuery, posts])

  // Обновляем результаты при изменении фильтрации
  useEffect(() => {
    onSearchResults(filteredPosts)
  }, [filteredPosts, onSearchResults])

  return (
    <div className="mb-8">
      <div className="relative max-w-md mx-auto">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск по статьям..."
          className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all min-h-[48px] touch-manipulation"
          aria-label="Поиск по статьям блога"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 transition-colors min-h-[44px] min-w-[44px] touch-manipulation"
            aria-label="Очистить поиск"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      {searchQuery && (
        <p className="text-center text-sm text-secondary-500 dark:text-secondary-400 mt-4">
          Найдено статей: {filteredPosts.length}
        </p>
      )}
    </div>
  )
}
