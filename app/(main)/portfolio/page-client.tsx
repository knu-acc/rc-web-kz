'use client'

import { useState, useMemo } from 'react'
import { portfolioItems } from '@/data/portfolio'
import type { PortfolioItem } from '@/types'
import { PortfolioCard } from '@/components/portfolio/PortfolioCard'
import { PortfolioFilterEnhanced } from '@/components/portfolio/PortfolioFilterEnhanced'
import { PortfolioSearch } from '@/components/portfolio/PortfolioSearch'
import { PortfolioComparison } from '@/components/portfolio/PortfolioComparison'
import { PortfolioPDFExport } from '@/components/portfolio/PortfolioPDFExport'

export function PortfolioPageClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [comparisonIds, setComparisonIds] = useState<Set<string>>(new Set())

  // Фильтрация по поисковому запросу
  const searchFilteredItems = useMemo(() => {
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

  const toggleComparison = (id: string) => {
    const newSet = new Set(comparisonIds)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      if (newSet.size < 3) {
        newSet.add(id)
      }
    }
    setComparisonIds(newSet)
  }

  return (
    <>
      {/* Поиск и экспорт */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:w-auto">
          <PortfolioSearch onQueryChange={setSearchQuery} />
        </div>
        <PortfolioPDFExport items={searchFilteredItems} />
      </div>

      {/* Сравнение */}
      <PortfolioComparison selectedIds={comparisonIds} onToggle={toggleComparison} />

      {/* Фильтры и сетка */}
      <PortfolioFilterEnhanced>
        {(filteredItems) => {
          // Пересечение результатов поиска и фильтров
          const finalItems = filteredItems.filter((item) =>
            searchFilteredItems.some((result) => result.id === item.id)
          )

          if (finalItems.length === 0) {
            return (
              <div className="text-center py-16">
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-4">
                  Проекты не найдены
                </p>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
              </div>
            )
          }

          return (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {finalItems.map((item) => (
                <div key={item.id} className="relative">
                  <PortfolioCard item={item} />
                  <button
                    type="button"
                    onClick={() => toggleComparison(item.id)}
                    disabled={!comparisonIds.has(item.id) && comparisonIds.size >= 3}
                    className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
                      comparisonIds.has(item.id)
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/90 dark:bg-secondary-800/90 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                    } disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    aria-label={
                      comparisonIds.has(item.id)
                        ? `Убрать ${item.title} из сравнения`
                        : `Добавить ${item.title} в сравнение`
                    }
                    aria-pressed={comparisonIds.has(item.id)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={comparisonIds.has(item.id) ? 'M5 13l4 4L19 7' : 'M12 4v16m8-8H4'}
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )
        }}
      </PortfolioFilterEnhanced>
    </>
  )
}
