import { clsx } from 'clsx'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  interactive?: boolean
  as?: 'div' | 'article' | 'section' | 'a'
  href?: string
}

export function BentoCard({ children, className, dark, interactive, as: Tag = 'div', href }: BentoCardProps) {
  const classes = clsx(
    'rounded-4xl p-8 flex flex-col gap-4 overflow-hidden relative',
    dark ? 'bg-surface-dark text-white' : 'bg-surface border border-border-light/20',
    interactive && 'hover:-translate-y-2 hover:shadow-float transition-all duration-500 ease-bento cursor-pointer group',
    !interactive && 'transition-colors',
    className
  )

  if (Tag === 'a' && href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <Tag className={classes}>{children}</Tag>
}
