import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center h-8 px-4 rounded-full text-sm font-medium',
        variant === 'default' && 'bg-surface border border-border-light text-text-main',
        variant === 'accent' && 'bg-surface-dark text-white border-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}
