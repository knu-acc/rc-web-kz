'use client'

import { useState, useEffect } from 'react'
import { AnalyticsEvents } from '@/lib/analytics-events'

const CATEGORIES = [
  { id: 'all', label: 'Все проекты' },
  { id: 'Корпоративный сайт', label: 'Корпоративные сайты' },
  { id: 'Интернет-магазин', label: 'Интернет-магазины' },
  { id: 'Landing Page', label: 'Лендинги' },
] as const

export function PortfolioFilter({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Отслеживание фильтрации
  useEffect(() => {
    if (activeCategory !== 'all') {
      AnalyticsEvents.portfolioFilter(activeCategory)
    }
  }, [activeCategory])

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .portfolio-grid[data-active-filter="all"] .portfolio-card { display: block; }
        .portfolio-grid[data-active-filter="Корпоративный сайт"] .portfolio-card { display: none; }
        .portfolio-grid[data-active-filter="Корпоративный сайт"] .portfolio-card[data-category="Корпоративный сайт"] { display: block; }
        .portfolio-grid[data-active-filter="Интернет-магазин"] .portfolio-card { display: none; }
        .portfolio-grid[data-active-filter="Интернет-магазин"] .portfolio-card[data-category="Интернет-магазин"] { display: block; }
        .portfolio-grid[data-active-filter="Landing Page"] .portfolio-card { display: none; }
        .portfolio-grid[data-active-filter="Landing Page"] .portfolio-card[data-category="Landing Page"] { display: block; }
      `,
        }}
      />
      <div className="mb-10 flex flex-wrap items-center gap-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-secondary-600 dark:text-secondary-400">
          Категории
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="portfolio-grid" data-active-filter={activeCategory}>
        {children}
      </div>
    </>
  )
}
