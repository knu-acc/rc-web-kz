import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Районы Алматы, где мы работаем | RC-WEB.KZ',
  description: 'Создание сайтов во всех районах Алматы: Алмалинский, Ауэзовский, Бостандыкский, Медеуский, Наурызбайский, Турксибский, Жетысуский, Алатауский. Выезд на встречу бесплатно.',
  keywords: [
    'создание сайтов алмалинский район',
    'веб-разработка ауэзовский район',
    'сайты бостандыкский район алматы',
  ],
  openGraph: {
    title: 'Районы Алматы, где мы работаем | RC-WEB.KZ',
    description: 'Создание сайтов во всех районах Алматы: Алмалинский, Ауэзовский, Бостандыкский, Медеуский, Наурызбайский, Турксибский, Жетысуский, Алатауский. Выезд на встречу бесплатно.',
    url: `${SITE_CONFIG.url}/districts`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Районы Алматы, где мы работаем | RC-WEB.KZ',
    description: 'Создание сайтов во всех районах Алматы: Алмалинский, Ауэзовский, Бостандыкский, Медеуский, Наурызбайский, Турксибский, Жетысуский, Алатауский. Выезд на встречу бесплатно.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/districts`,
  },
}

const districts = [
  'Алмалинский район',
  'Ауэзовский район',
  'Бостандыкский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
  'Жетысуский район',
  'Алатауский район',
]

export default function DistrictsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Районы Алматы', url: `${SITE_CONFIG.url}/districts` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs
        items={[
          { name: 'Главная', url: SITE_CONFIG.url },
          { name: 'Районы Алматы', url: `${SITE_CONFIG.url}/districts` },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-4 text-center">Районы Алматы, где мы работаем</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-center mb-12">
            Мы создаём сайты для клиентов во всех районах Алматы. Выезд на встречу бесплатно.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {districts.map((district) => (
              <div key={district} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-2">{district}</h2>
                <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                  Создание сайтов в {district}, Алматы. Выезд на встречу бесплатно.
                </p>
                <Link
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Связаться с нами →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Работаем по всему Казахстану</h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-6">
              Хотя наш офис находится в Алматы, мы создаём сайты для клиентов по всему Казахстану.
              Консультации и обсуждение проекта можем провести онлайн.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
