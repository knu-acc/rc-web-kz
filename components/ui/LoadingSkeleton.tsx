'use client'

interface LoadingSkeletonProps {
  className?: string
  lines?: number
  variant?: 'text' | 'card' | 'image'
}

export function LoadingSkeleton({
  className = '',
  lines = 3,
  variant = 'text',
}: LoadingSkeletonProps) {
  if (variant === 'card') {
    return (
      <div className={`animate-pulse ${className}`} role="status" aria-label="Загрузка">
        <div className="bg-secondary-200 dark:bg-secondary-700 rounded-xl h-48 mb-4"></div>
        <div className="space-y-2">
          <div className="bg-secondary-200 dark:bg-secondary-700 rounded h-4 w-3/4"></div>
          <div className="bg-secondary-200 dark:bg-secondary-700 rounded h-4 w-1/2"></div>
        </div>
        <span className="sr-only">Загрузка...</span>
      </div>
    )
  }

  if (variant === 'image') {
    return (
      <div
        className={`animate-pulse bg-secondary-200 dark:bg-secondary-700 rounded ${className}`}
        role="status"
        aria-label="Загрузка изображения"
      >
        <span className="sr-only">Загрузка изображения...</span>
      </div>
    )
  }

  return (
    <div className={`animate-pulse space-y-2 ${className}`} role="status" aria-label="Загрузка">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="bg-secondary-200 dark:bg-secondary-700 rounded h-4"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
      <span className="sr-only">Загрузка...</span>
    </div>
  )
}
