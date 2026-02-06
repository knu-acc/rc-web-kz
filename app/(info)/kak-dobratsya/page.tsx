import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

const YandexMap = dynamic(() => import('@/components/sections/YandexMap').then(mod => ({ default: mod.YandexMap })), { loading: () => <div style={{ width: '100%', height: '400px' }} /> })

export const metadata: Metadata = {
  title: 'Как добраться | Контакты RC-WEB.KZ в Алматы',
  description: 'Как добраться до офиса RC-WEB.KZ в Алматы. Адрес, ориентиры, ближайшие остановки транспорта, схема проезда.',
  keywords: ['как добраться rc-web', 'адрес офиса алматы', 'контакты веб-студии'],
  openGraph: {
    title: 'Как добраться | Контакты RC-WEB.KZ в Алматы',
    description: 'Как добраться до офиса RC-WEB.KZ в Алматы. Адрес, ориентиры, ближайшие остановки транспорта, схема проезда.',
    url: `${SITE_CONFIG.url}/kak-dobratsya`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Как добраться | Контакты RC-WEB.KZ в Алматы',
    description: 'Как добраться до офиса RC-WEB.KZ в Алматы. Адрес, ориентиры, ближайшие остановки транспорта, схема проезда.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/kak-dobratsya`,
  },
}

export default function KakDobratsyaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Как добраться', href: '/kak-dobratsya' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-4 text-center">Как добраться</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-center mb-12">
            Информация о том, как добраться до нашего офиса в Алматы
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Адрес офиса</h2>
              <div className="space-y-4 text-secondary-700 dark:text-secondary-300">
                <p>
                  <strong>Город:</strong> {SITE_CONFIG.address.addressLocality}
                </p>
                <p>
                  <strong>Регион:</strong> {SITE_CONFIG.address.addressRegion || 'Алматинская область'}
                </p>
                {/* TODO: Добавить точный адрес когда будет известен */}
                <p className="text-sm text-secondary-500">
                  Точный адрес будет добавлен после уточнения
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Контакты</h2>
              <div className="space-y-4 text-secondary-700 dark:text-secondary-300">
                <p>
                  <strong>Телефон:</strong>{' '}
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary-600 hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <strong>Режим работы:</strong> {SITE_CONFIG.businessHours.full}
                </p>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Карта</h2>
            <div className="rounded-xl overflow-hidden">
              <YandexMap />
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Встреча с клиентами</h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-4">
              Мы можем встретиться с вами лично в Алматы для обсуждения проекта. Выезд на встречу бесплатно.
            </p>
            <p className="text-lg text-secondary-700 dark:text-secondary-300">
              Также мы проводим консультации онлайн через Google Meet, Zoom, Skype или другие платформы.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
