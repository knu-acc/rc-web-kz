'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { logErrorManually } from '@/lib/error-monitoring'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логирование ошибки через систему мониторинга
    logErrorManually(error, 'Application Error')
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-950 dark:to-secondary-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Что-то пошло не так
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-2">
            Произошла непредвиденная ошибка
          </p>
          {error.message && process.env.NODE_ENV === 'development' && (
            <p className="text-sm text-red-600 dark:text-red-400 mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
            aria-label="Попробовать снова"
          >
            Попробовать снова
          </button>
          <Link href="/" className="btn-outline">
            Вернуться на главную
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-800">
          <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-4">
            Если проблема повторяется, свяжитесь с нами:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              {SITE_CONFIG.phone}
            </a>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
