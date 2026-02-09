/**
 * Layout для страниц услуг
 * Обеспечивает единообразную структуру всех страниц услуг
 */

import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { RelatedServices } from '@/components/sections/RelatedServices'
import { RelatedArticles } from '@/components/sections/RelatedArticles'
import type { Service } from '@/components/sections/RelatedServices'

interface ServicePageLayoutProps {
  children: ReactNode
  breadcrumbs: Array<{ name: string; href: string }>
  relatedServices?: Service[]
  relatedArticles?: Array<{
    slug: string
    title: string
    category: string
  }>
  className?: string
}

export function ServicePageLayout({
  children,
  breadcrumbs,
  relatedServices,
  relatedArticles,
  className = '',
}: ServicePageLayoutProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <main className={className}>
        {children}
      </main>
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServices services={relatedServices} currentService={breadcrumbs[breadcrumbs.length - 1]?.href} />
      )}
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} currentSlug="" />
      )}
    </>
  )
}
