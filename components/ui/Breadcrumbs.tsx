import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://rc-web.kz' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://rc-web.kz${item.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="pt-28 md:pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-sm text-text-muted flex-wrap">
        <a href="/" className="hover:text-brand transition-colors" aria-label="Главная">
          <Home className="w-4 h-4" />
        </a>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3" />
            {item.href ? (
              <a href={item.href} className="hover:text-brand transition-colors">{item.label}</a>
            ) : (
              <span className="text-text-main font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
