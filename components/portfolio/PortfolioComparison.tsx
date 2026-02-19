'use client'

import { useState } from 'react'
import { portfolioItems } from '@/data/portfolio'
import type { PortfolioItem } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioComparisonProps {
  selectedIds?: Set<string>
  onToggle?: (id: string) => void
}

export function PortfolioComparison({ selectedIds = new Set(), onToggle }: PortfolioComparisonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedItems = portfolioItems.filter((item) => selectedIds.has(item.id))

  const clearSelection = () => {
    selectedIds.forEach((id) => onToggle?.(id))
  }

  if (selectedItems.length === 0) {
    return (
      <div className="mb-8 p-6 bg-secondary-50 dark:bg-secondary-900 rounded-xl border border-secondary-200 dark:border-secondary-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
            Сравнение проектов
          </h3>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            aria-expanded={isOpen}
            aria-controls="comparison-instructions"
          >
            {isOpen ? 'Скрыть инструкцию' : 'Показать инструкцию'}
          </button>
        </div>
        {isOpen && (
          <div id="comparison-instructions" className="text-sm text-secondary-600 dark:text-secondary-300">
            <p className="mb-2">
              Выберите до 3 проектов для сравнения. Нажмите на карточку проекта, чтобы добавить
              её в сравнение.
            </p>
            <p>
              После выбора проектов здесь появится таблица сравнения с ключевыми характеристиками.
            </p>
          </div>
        )}
        <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-4">
          Выбрано проектов: <span className="font-semibold">{selectedIds.size}</span> / 3
        </p>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
          Сравнение проектов ({selectedItems.length})
        </h3>
        <button
          type="button"
          onClick={clearSelection}
          className="text-sm text-red-600 dark:text-red-400 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
        >
          Очистить выбор
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white dark:bg-secondary-900 rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-secondary-100 dark:bg-secondary-800">
              <th className="p-4 text-left font-semibold text-secondary-900 dark:text-white">
                Проект
              </th>
              {selectedItems.map((item) => (
                <th
                  key={item.id}
                  className="p-4 text-left font-semibold text-secondary-900 dark:text-white min-w-[200px]"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-24 h-16 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline text-center"
                    >
                      {item.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => onToggle?.(item.id)}
                      className="text-xs text-red-600 dark:text-red-400 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                      aria-label={`Убрать ${item.title} из сравнения`}
                    >
                      Убрать
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-secondary-200 dark:border-secondary-700">
              <td className="p-4 font-medium text-secondary-700 dark:text-secondary-300">
                Категория
              </td>
              {selectedItems.map((item) => (
                <td key={item.id} className="p-4 text-secondary-600 dark:text-secondary-400">
                  {item.category || '—'}
                </td>
              ))}
            </tr>
            <tr className="border-t border-secondary-200 dark:border-secondary-700">
              <td className="p-4 font-medium text-secondary-700 dark:text-secondary-300">
                Технологии
              </td>
              {selectedItems.map((item) => (
                <td key={item.id} className="p-4">
                  {item.technologies && item.technologies.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-secondary-400">—</span>
                  )}
                </td>
              ))}
            </tr>
            <tr className="border-t border-secondary-200 dark:border-secondary-700">
              <td className="p-4 font-medium text-secondary-700 dark:text-secondary-300">Год</td>
              {selectedItems.map((item) => (
                <td key={item.id} className="p-4 text-secondary-600 dark:text-secondary-400">
                  {item.year || '—'}
                </td>
              ))}
            </tr>
            <tr className="border-t border-secondary-200 dark:border-secondary-700">
              <td className="p-4 font-medium text-secondary-700 dark:text-secondary-300">
                Ссылка
              </td>
              {selectedItems.map((item) => (
                <td key={item.id} className="p-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm break-all"
                  >
                    {item.url}
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// HOC для добавления функциональности сравнения к карточкам
export function withComparison(
  Component: React.ComponentType<{ item: PortfolioItem; onToggle?: (id: string) => void }>
) {
  return function ComparisonWrapper({
    item,
    isSelected,
    onToggle,
  }: {
    item: PortfolioItem
    isSelected: boolean
    onToggle: (id: string) => void
  }) {
    return (
      <div className="relative">
        <Component item={item} onToggle={onToggle} />
        <button
          type="button"
          onClick={() => onToggle(item.id)}
          className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? 'bg-primary-600 text-white'
              : 'bg-white/90 dark:bg-secondary-800/90 text-secondary-600 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
          }`}
          aria-label={isSelected ? `Убрать ${item.title} из сравнения` : `Добавить ${item.title} в сравнение`}
          aria-pressed={isSelected}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSelected ? 'M5 13l4 4L19 7' : 'M12 4v16m8-8H4'}
            />
          </svg>
        </button>
      </div>
    )
  }
}
