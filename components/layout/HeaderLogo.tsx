import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

/**
 * Server-rendered logo for LCP: no client JS required for first paint.
 */
export function HeaderLogo() {
  return (
    <Link
      href="/"
      className="relative group"
      aria-label="Главная страница"
    >
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
        {SITE_CONFIG.name}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}
