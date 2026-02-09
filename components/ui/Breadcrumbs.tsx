'use client'

import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

interface BreadcrumbItem {
  name: string
  href: string // относительный путь: '/', '/blog', '/blog/slug'
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // JSON-LD нужны абсолютные URL — добавляем домен
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.href === '/' ? SITE_CONFIG.url : `${SITE_CONFIG.url}${item.href}`,
  }))
  const breadcrumbSchema = generateBreadcrumbSchema(schemaItems)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="pt-20 bg-secondary-100 dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800"
      >
        <div className="container-custom py-4">
          <ol className="flex flex-wrap items-center text-sm text-secondary-500 dark:text-secondary-400" role="list">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-secondary-300 dark:text-secondary-600" aria-hidden="true">/</span>
                )}
                {index === items.length - 1 ? (
                  <span
                    className="text-secondary-900 dark:text-white font-medium truncate max-w-[260px] sm:max-w-none"
                    aria-current="page"
                    title={item.name}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
