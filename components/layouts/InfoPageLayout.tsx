/**
 * Layout для информационных страниц
 * Обеспечивает единообразную структуру всех информационных страниц
 */

import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { RelatedArticles } from '@/components/sections/RelatedArticles'

interface InfoPageLayoutProps {
  children: ReactNode
  breadcrumbs: Array<{ name: string; href: string }>
  relatedArticles?: Array<{
    slug: string
    title: string
    category: string
    description?: string
    date?: string
    readingTime?: string
  }>
  className?: string
}

export function InfoPageLayout({
  children,
  breadcrumbs,
  relatedArticles,
  className = '',
}: InfoPageLayoutProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <main className={className}>
        {children}
      </main>
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles 
          articles={relatedArticles} 
          currentSlug="" 
        />
      )}
    </>
  )
}
