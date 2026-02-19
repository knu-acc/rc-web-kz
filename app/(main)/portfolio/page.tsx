import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { generateCollectionPageSchema, generateItemListSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { portfolioItems } from '@/data/portfolio'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PortfolioPageClient } from './page-client'
import { SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Портфолио RC-WEB | 120+ примеров сайтов в Алматы | Наши работы',
  description: 'Портфолио RC-WEB: более 120 выполненных проектов по созданию сайтов в Алматы. Лендинги, корпоративные сайты, интернет-магазины, Tilda.',
  keywords: ['портфолио сайтов Алматы', 'примеры сайтов Алматы', 'наши работы RC-WEB', 'веб-студия Алматы портфолио'],
  openGraph: {
    title: 'Портфолио RC-WEB | 120+ сайтов в Алматы',
    description: 'Примеры наших работ: лендинги, корпоративные сайты, интернет-магазины.',
    url: `${SITE_CONFIG.url}/portfolio`,
    images: [{ url: `${SITE_CONFIG.url}/img/slider3.png`, width: 1200, height: 630, alt: 'Портфолио' }],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/portfolio` },
}

export default function PortfolioPage() {
  const collectionSchema = generateCollectionPageSchema()
  const itemListSchema = generateItemListSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Портфолио', url: `${SITE_CONFIG.url}/portfolio` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white dark:bg-secondary-950">
        {/* Хлебные крошки */}
        <div className="bg-secondary-100 dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800">
          <div className="container-custom py-5">
            <Breadcrumbs
              items={[
                { name: 'Главная', href: '/' },
                { name: 'Портфолио', href: '/portfolio' },
              ]}
            />
          </div>
        </div>

        {/* Заголовок + кнопки */}
        <section className="border-b border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-950">
          <div className="container-custom py-12 lg:py-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold text-secondary-900 dark:text-white sm:text-4xl">
                  Примеры выполненных работ
                </h1>
                <p className="mt-3 text-secondary-600 dark:text-secondary-300 max-w-xl">
                  Полное портфолио выполненных работ. Каждый сайт создан под задачи клиента.
                </p>
                <p className="mt-2 text-sm text-secondary-500 dark:text-secondary-400">
                  {portfolioItems.length} проектов
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-md hover:bg-[#1da851] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-secondary-950"
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Обсудить проект
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-secondary-300 dark:border-secondary-600 bg-white dark:bg-secondary-800 px-8 py-4 font-semibold text-secondary-800 dark:text-white hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950"
                >
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Поиск, фильтры + сетка */}
        <section className="bg-white dark:bg-secondary-950">
          <div className="container-custom py-12 lg:py-16">
            <PortfolioPageClient />
          </div>
        </section>

        {/* CTA внизу */}
        <section className="border-t border-secondary-200 dark:border-secondary-800 bg-secondary-800 dark:bg-secondary-900 text-white">
          <div className="container-custom py-16 lg:py-20">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Хотите такой же результат?
            </h2>
            <p className="mt-4 max-w-xl text-white/90">
              Более 120 сайтов с 2020 года. Обсудим задачу и подготовим КП. Работаем по Алматы и всему Казахстану.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-secondary-900 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary-800"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Написать в WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex min-h-[56px] items-center justify-center rounded-xl border-2 border-white/60 px-8 py-4 font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-secondary-800"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
            <div className="mt-16" />
          </div>
        </section>
      </div>
    </>
  )
}
