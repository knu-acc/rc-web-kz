'use client'

import { useState } from 'react'
import type { PortfolioItem } from '@/types'

interface PortfolioPDFExportProps {
  items: PortfolioItem[]
  className?: string
}

export function PortfolioPDFExport({ items, className = '' }: PortfolioPDFExportProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    try {
      // Используем window.print() для экспорта в PDF
      // В будущем можно использовать библиотеку типа jsPDF или html2pdf
      window.print()
    } catch (error) {
      console.error('Ошибка при генерации PDF:', error)
      alert('Произошла ошибка при генерации PDF. Попробуйте использовать функцию печати браузера.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      type="button"
      onClick={generatePDF}
      disabled={isGenerating || items.length === 0}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] ${className}`}
      aria-label="Экспортировать портфолио в PDF"
    >
      {isGenerating ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Генерация PDF...</span>
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Экспорт в PDF</span>
        </>
      )}
    </button>
  )
}
