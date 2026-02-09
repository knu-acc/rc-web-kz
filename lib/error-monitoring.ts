/**
 * Error Monitoring - отслеживание ошибок для мониторинга
 * Интеграция с аналитикой и консолью для отладки
 */

import { AnalyticsEvents } from './analytics-events'

const MAX_ERRORS_PER_SESSION = 10
let errorCount = 0

interface ErrorInfo {
  message: string
  source?: string
  lineno?: number
  colno?: number
  error?: Error
  stack?: string
  userAgent?: string
  url?: string
}

/**
 * Инициализация мониторинга ошибок
 */
export function initErrorMonitoring() {
  if (typeof window === 'undefined') return

  // Отслеживание необработанных ошибок
  window.addEventListener('error', (event) => {
    logError({
      message: event.message,
      source: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error,
      stack: event.error?.stack,
      userAgent: navigator.userAgent,
      url: window.location.href,
    })
  })

  // Отслеживание необработанных промисов
  window.addEventListener('unhandledrejection', (event) => {
    logError({
      message: event.reason?.message || String(event.reason),
      error: event.reason instanceof Error ? event.reason : undefined,
      stack: event.reason?.stack,
      userAgent: navigator.userAgent,
      url: window.location.href,
    })
  })
}

/**
 * Логирование ошибки
 */
function logError(errorInfo: ErrorInfo) {
  if (errorCount >= MAX_ERRORS_PER_SESSION) return
  errorCount++

  const errorMessage = errorInfo.error?.message || errorInfo.message || 'Unknown error'
  const errorType = errorInfo.error?.name || 'Error'

  // Логирование в консоль для разработки
  if (process.env.NODE_ENV === 'development') {
    console.error('[Error Monitoring]', {
      message: errorMessage,
      type: errorType,
      source: errorInfo.source,
      line: errorInfo.lineno,
      column: errorInfo.colno,
      stack: errorInfo.stack,
      url: errorInfo.url,
    })
  }

  AnalyticsEvents.error(errorMessage, errorType)
}

/**
 * Ручное логирование ошибки
 */
export function logErrorManually(error: Error | string, context?: string) {
  const errorMessage = typeof error === 'string' ? error : error.message
  const errorType = typeof error === 'string' ? 'ManualError' : error.name

  logError({
    message: context ? `${context}: ${errorMessage}` : errorMessage,
    error: typeof error === 'string' ? undefined : error,
    stack: typeof error === 'string' ? undefined : error.stack,
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
  })
}
