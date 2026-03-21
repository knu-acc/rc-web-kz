import { clsx } from 'clsx'
import { Badge } from './Badge'

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeading({ badge, title, description, className, align = 'center', dark }: SectionHeadingProps) {
  return (
    <div className={clsx('flex flex-col gap-4 w-full', align === 'center' && 'items-center text-center', className)}>
      {badge && <Badge variant="accent">{badge}</Badge>}
      <h2
        className={clsx(
          'text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tighter w-full',
          dark ? 'text-white' : 'text-text-main'
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx('text-lg max-w-2xl', dark ? 'text-white/70' : 'text-text-muted')}>
          {description}
        </p>
      )}
    </div>
  )
}
