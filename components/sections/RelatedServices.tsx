'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export interface Service {
  slug: string
  name: string
  description: string
  price?: string
}

interface RelatedServicesProps {
  currentService?: string
  services?: Service[]
  title?: string
  limit?: number
}

const defaultServices: Service[] = [
  {
    slug: '/landing-page',
    name: 'Landing Page',
    description: 'Одностраничный сайт для рекламы. Высокая конверсия, быстрый запуск.',
    price: 'от 85 000₸',
  },
  {
    slug: '/corporate-site',
    name: 'Корпоративный сайт',
    description: 'Многостраничный сайт для компании. Идеально для SEO-продвижения.',
    price: 'от 125 000₸',
  },
  {
    slug: '/online-store',
    name: 'Интернет-магазин',
    description: 'Полнофункциональный магазин с корзиной, оплатой и доставкой.',
    price: 'от 220 000₸',
  },
  {
    slug: '/seo-optimization',
    name: 'SEO-оптимизация',
    description: 'Продвижение сайта в поисковых системах Google и Яндекс.',
  },
  {
    slug: '/web-design',
    name: 'Веб-дизайн',
    description: 'Современный дизайн сайтов с учётом UX и конверсии.',
  },
  {
    slug: '/website-advertising',
    name: 'Реклама сайта',
    description: 'Настройка контекстной рекламы Google Ads и Яндекс Директ.',
  },
]

export function RelatedServices({
  currentService,
  services = defaultServices,
  title = 'Другие наши услуги',
  limit = 3,
}: RelatedServicesProps) {
  // Фильтруем текущую услугу и ограничиваем количество
  const filteredServices = services
    .filter((service) => service.slug !== currentService)
    .slice(0, limit)

  if (filteredServices.length === 0) {
    return null
  }

  return (
    <section className="section bg-secondary-50/50 dark:bg-secondary-900" aria-labelledby="related-services-heading">
      <div className="container-custom">
        <h2 id="related-services-heading" className="heading-md text-center mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.slug}
              href={service.slug}
              className="group bg-white dark:bg-secondary-950 rounded-2xl p-6 border border-secondary-200 dark:border-secondary-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              {service.price && (
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {service.price}
                </p>
              )}
              <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                Узнать больше
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            Получить консультацию по всем услугам
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
