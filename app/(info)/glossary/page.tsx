import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Глоссарий терминов | Словарь веб-разработки - RC-WEB.KZ',
  description: 'Глоссарий терминов веб-разработки: Landing Page, SEO, адаптивная верстка, CMS, хостинг и другие термины. Полезный словарь для понимания создания сайтов.',
  keywords: ['глоссарий веб-разработки', 'термины создания сайтов', 'словарь веб-терминов'],
  openGraph: {
    title: 'Глоссарий терминов | Словарь веб-разработки - RC-WEB.KZ',
    description: 'Глоссарий терминов веб-разработки: Landing Page, SEO, адаптивная верстка, CMS, хостинг и другие термины. Полезный словарь для понимания создания сайтов.',
    url: `${SITE_CONFIG.url}/glossary`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Глоссарий терминов | Словарь веб-разработки - RC-WEB.KZ',
    description: 'Глоссарий терминов веб-разработки: Landing Page, SEO, адаптивная верстка, CMS, хостинг и другие термины. Полезный словарь для понимания создания сайтов.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/glossary`,
  },
}

const terms = [
  {
    term: 'Landing Page',
    definition: 'Одностраничный сайт, созданный специально для достижения одной цели — конверсии посетителя в клиента. Идеально подходит для рекламных кампаний.',
  },
  {
    term: 'SEO (Search Engine Optimization)',
    definition: 'Оптимизация сайта для поисковых систем (Google, Яндекс) с целью повышения позиций в поисковой выдаче и увеличения органического трафика.',
  },
  {
    term: 'Адаптивная верстка',
    definition: 'Техника создания сайта, который корректно отображается на всех устройствах: компьютерах, планшетах и мобильных телефонах.',
  },
  {
    term: 'CMS (Content Management System)',
    definition: 'Система управления контентом — программное обеспечение для управления содержимым сайта без знания программирования.',
  },
  {
    term: 'Хостинг',
    definition: 'Услуга по размещению сайта на сервере, который обеспечивает доступность сайта в интернете 24/7.',
  },
  {
    term: 'Домен',
    definition: 'Уникальное имя сайта в интернете (например, rc-web.kz). Домен нужно регистрировать и продлевать ежегодно.',
  },
  {
    term: 'SSL-сертификат',
    definition: 'Сертификат безопасности, который обеспечивает шифрование данных между сайтом и пользователем. Необходим для безопасности и SEO.',
  },
]

export default function GlossaryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Глоссарий', url: `${SITE_CONFIG.url}/glossary` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { name: 'Главная', url: SITE_CONFIG.url },
          { name: 'Глоссарий', url: `${SITE_CONFIG.url}/glossary` },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-4 text-center">Глоссарий терминов</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-center mb-12">
            Полезный словарь терминов веб-разработки для понимания процесса создания сайтов
          </p>

          <div className="space-y-6">
            {terms.map((item, index) => (
              <div key={index} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-2 text-primary-600">{item.term}</h2>
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
