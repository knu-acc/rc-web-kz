'use client'

import { useState, useEffect, useMemo } from 'react'
import { portfolioItems } from '@/data/portfolio'
import type { PortfolioItem } from '@/types'
import { AnalyticsEvents } from '@/lib/analytics-events'

const CATEGORIES = [
  { id: 'all', label: 'Все проекты' },
  { id: 'Корпоративный сайт', label: 'Корпоративные сайты' },
  { id: 'Интернет-магазин', label: 'Интернет-магазины' },
  { id: 'Landing Page', label: 'Лендинги' },
] as const

interface PortfolioFilterEnhancedProps {
  children: (filteredItems: PortfolioItem[]) => React.ReactNode
}

export function PortfolioFilterEnhanced({ children }: PortfolioFilterEnhancedProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeTechnology, setActiveTechnology] = useState<string>('all')
  const [activeYear, setActiveYear] = useState<string>('all')

  // Получаем уникальные технологии и годы из портфолио
  const technologies = useMemo(() => {
    const techSet = new Set<string>()
    portfolioItems.forEach((item) => {
      if (item.technologies) {
        item.technologies.forEach((tech) => techSet.add(tech))
      }
    })
    return Array.from(techSet).sort()
  }, [])

  const years = useMemo(() => {
    const yearSet = new Set<string>()
    portfolioItems.forEach((item) => {
      if (item.year) {
        yearSet.add(item.year)
      }
    })
    return Array.from(yearSet).sort((a, b) => b.localeCompare(a))
  }, [])

  // Фильтрация проектов
  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      const matchesTechnology =
        activeTechnology === 'all' ||
        !item.technologies ||
        item.technologies.includes(activeTechnology)
      const matchesYear = activeYear === 'all' || !item.year || item.year === activeYear
      return matchesCategory && matchesTechnology && matchesYear
    })
  }, [activeCategory, activeTechnology, activeYear])

  // Отслеживание фильтрации
  useEffect(() => {
    if (activeCategory !== 'all' || activeTechnology !== 'all' || activeYear !== 'all') {
      AnalyticsEvents.portfolioFilter(`${activeCategory}-${activeTechnology}-${activeYear}`)
    }
  }, [activeCategory, activeTechnology, activeYear])

  return (
    <>
      <div className="portfolio-filter mb-10 space-y-6">
        {/* Фильтр по категориям */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-secondary-600 dark:text-secondary-400">
            Категории
          </span>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 min-h-[44px] ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Фильтр по технологиям */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-secondary-600 dark:text-secondary-400">
              Технологии
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTechnology('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 min-h-[44px] ${
                  activeTechnology === 'all'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
                aria-pressed={activeTechnology === 'all'}
              >
                Все технологии
              </button>
              {technologies.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setActiveTechnology(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 min-h-[44px] ${
                    activeTechnology === tech
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                  }`}
                  aria-pressed={activeTechnology === tech}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Фильтр по году */}
        {years.length > 0 && (
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-secondary-600 dark:text-secondary-400">
              Год
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveYear('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 min-h-[44px] ${
                  activeYear === 'all'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
                aria-pressed={activeYear === 'all'}
              >
                Все годы
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 min-h-[44px] ${
                    activeYear === year
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                  }`}
                  aria-pressed={activeYear === year}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Счетчик результатов */}
        <div className="text-sm text-secondary-600 dark:text-secondary-400">
          Найдено проектов: <span className="font-semibold">{filteredItems.length}</span>
        </div>
      </div>

      {children(filteredItems)}
    </>
  )
}
