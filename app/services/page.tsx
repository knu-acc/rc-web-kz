import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Услуги веб-разработки в Алматы | RC-WEB.KZ',
  description: 'Полный спектр услуг по созданию сайтов в Алматы: Landing Page, корпоративные сайты, интернет-магазины, SEO-оптимизация, веб-дизайн, реклама. От 85 000 тенге.',
  keywords: ['услуги веб-разработки', 'создание сайтов Алматы', 'веб-студия услуги'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: 'Услуги веб-разработки в Алматы | RC-WEB.KZ',
    description: 'Полный спектр услуг по созданию сайтов в Алматы: Landing Page, корпоративные сайты, интернет-магазины, SEO-оптимизация, веб-дизайн, реклама.',
    url: `${SITE_CONFIG.url}/services`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
}

const services = [
  {
    title: 'Landing Page',
    description: 'Одностраничный сайт для привлечения клиентов и продвижения услуг. Идеален для рекламных кампаний с высокой конверсией.',
    price: 'от 85 000₸',
    href: '/landing-page',
    icon: '🚀',
  },
  {
    title: 'Корпоративный сайт',
    description: 'Многостраничный сайт для представления компании, услуг и портфолио. Солидный имидж вашего бизнеса.',
    price: 'от 150 000₸',
    href: '/corporate-site',
    icon: '🏢',
  },
  {
    title: 'Интернет-магазин',
    description: 'Полнофункциональный онлайн-магазин с каталогом товаров, корзиной и оплатой. Продавайте онлайн 24/7.',
    price: 'от 200 000₸',
    href: '/online-store',
    icon: '🛒',
  },
  {
    title: 'Сайт на Tilda',
    description: 'Быстрое создание сайта на популярном конструкторе Tilda. Подходит для быстрого запуска проекта.',
    price: 'от 60 000₸',
    href: '/tilda-site',
    icon: '⚡',
  },
  {
    title: 'SEO-оптимизация',
    description: 'Продвижение сайта в поисковых системах Google и Яндекс. Увеличение органического трафика и видимости.',
    price: 'от 50 000₸/мес',
    href: '/seo-optimization',
    icon: '📈',
  },
  {
    title: 'Веб-дизайн',
    description: 'Разработка уникального дизайна сайта. Современные интерфейсы, адаптивная верстка, UX/UI.',
    price: 'от 70 000₸',
    href: '/web-design',
    icon: '🎨',
  },
  {
    title: 'Реклама сайта',
    description: 'Настройка контекстной и таргетированной рекламы. Google Ads, Яндекс Директ, социальные сети.',
    price: 'от 40 000₸/мес',
    href: '/website-advertising',
    icon: '📣',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Услуги', href: '/services' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-4">Услуги веб-разработки</h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Полный спектр услуг по созданию и продвижению сайтов в Алматы.
              От простого лендинга до сложного интернет-магазина — найдём решение для вашего бизнеса.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary-200 dark:hover:border-primary-800"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                    {service.price}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Не знаете какой тип сайта вам нужен? Рассчитайте стоимость онлайн
            </p>
            <Link
              href="/website-price"
              className="btn-primary inline-flex items-center gap-2"
            >
              Калькулятор стоимости сайта
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
