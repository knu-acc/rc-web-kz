'use client'

interface DecorativeDividerProps {
  variant?: 'wave' | 'dots' | 'zigzag' | 'gradient'
  className?: string
}

export function DecorativeDivider({
  variant = 'gradient',
  className = '',
}: DecorativeDividerProps) {
  if (variant === 'wave') {
    return (
      <div className={`w-full h-12 overflow-hidden ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            className="fill-primary-100 dark:fill-primary-900/20"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div
        className={`flex items-center justify-center gap-2 py-8 ${className}`}
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
            style={{
              animationDelay: `${i * 0.1}s`,
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'zigzag') {
    return (
      <div className={`w-full h-8 ${className}`} aria-hidden="true">
        <svg viewBox="0 0 1200 40" className="w-full h-full" fill="none">
          <path
            d="M0,20 L40,0 L80,20 L120,0 L160,20"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-300 dark:text-primary-700"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    )
  }

  // Gradient variant (default)
  return (
    <div
      className={`w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent ${className}`}
      aria-hidden="true"
    />
  )
}
