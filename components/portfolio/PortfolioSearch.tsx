'use client'

import { useState, useMemo } from 'react'
import { portfolioItems } from '@/data/portfolio'
import type { PortfolioItem } from '@/types'

interface PortfolioSearchProps {
  onQueryChange?: (query: string) => void
  className?: string
}

export function PortfolioSearch({ onQueryChange, className = '' }: PortfolioSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery)
    onQueryChange?.(newQuery)
  }

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return portfolioItems
    }

    const query = searchQuery.toLowerCase().trim()
    return portfolioItems.filter((item) => {
      const matchesTitle = item.title.toLowerCase().includes(query)
      const matchesDescription = item.description.toLowerCase().includes(query)
      const matchesCategory = item.category?.toLowerCase().includes(query)
      const matchesTechnologies = item.technologies?.some((tech) =>
        tech.toLowerCase().includes(query)
      )
      return matchesTitle || matchesDescription || matchesCategory || matchesTechnologies
    })
  }, [searchQuery])

  return (
    <div className={`portfolio-search ${className}`}>
      <div className="relative">
        <label htmlFor="portfolio-search" className="sr-only">
          Поиск по портфолио
        </label>
        <input
          type="search"
          id="portfolio-search"
          value={searchQuery}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Поиск по названию, описанию, технологиям..."
          className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all min-h-[48px]"
          aria-label="Поиск по портфолио"
          aria-describedby="search-results-count"
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
            type="button"
            onClick={() => handleQueryChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
            aria-label="Очистить поиск"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <p id="search-results-count" className="mt-3 text-sm text-secondary-600 dark:text-secondary-400">
          Найдено проектов: <span className="font-semibold">{filteredItems.length}</span>
        </p>
      )}
    </div>
  )
}
