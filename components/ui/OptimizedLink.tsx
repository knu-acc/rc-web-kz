'use client'

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface OptimizedLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  prefetch?: boolean
}

/**
 * Оптимизированная версия Next.js Link с улучшенным prefetch
 */
export function OptimizedLink({
  children,
  className,
  prefetch = true,
  ...props
}: OptimizedLinkProps) {
  return (
    <Link {...props} prefetch={prefetch} className={className}>
      {children}
    </Link>
  )
}
