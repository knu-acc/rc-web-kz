/**
 * Services Section — Modern Minimalist SaaS
 * Переработан: 7 услуг в unified grid, убрана featured-логика с фоном
 */
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/constants'

interface ServiceItem {
  id: number
  title: string
  description: string
  price: string
  icon: React.ReactNode
  href: string
  badge?: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Landing Page',
    description: 'Продающие одностраничники с высокой конверсией для рекламных кампаний',
    price: '85–135 тыс ₸',
    href: '/landing-page',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Корпоративный сайт',
    description: 'Многостраничные сайты, которые представляют ваш бизнес и генерируют лиды',
    price: '135–195 тыс ₸',
    href: '/corporate-site',
    badge: 'Популярное',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Интернет-магазин',
    description: 'E-commerce решения с удобной админкой, каталогом и интеграцией оплаты',
    price: '175–275 тыс ₸',
    href: '/online-store',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Tilda / Конструктор',
    description: 'Быстрые решения на Tilda или WordPress для малого бизнеса',
    price: 'от 120 тыс ₸',
    href: '/tilda-site',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'SEO-оптимизация',
    description: 'Продвижение сайта в Google и Яндекс по ключевым запросам вашего бизнеса',
    price: 'от 50 тыс ₸/мес',
    href: '/seo-optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Веб-дизайн',
    description: 'UI/UX дизайн в Figma: прототип, фирменный стиль, дизайн-система',
    price: 'от 70 тыс ₸',
    href: '/web-design',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Реклама сайта',
    description: 'Настройка Google Ads и Яндекс.Директ для быстрого привлечения клиентов',
    price: 'от 40 тыс ₸/мес',
    href: '/website-advertising',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="section bg-white dark:bg-secondary-950">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
            Услуги
          </span>
          <h2 className="heading-lg mb-4">
            Создание сайтов{' '}
            <span className="gradient-text">любой сложности</span>
          </h2>
          <p className="text-base text-secondary-600 dark:text-secondary-300">
            Каждый проект включает адаптивный дизайн, SEO-оптимизацию и 30 дней бесплатного техобслуживания.
          </p>
        </div>

        {/* Services grid — 6 uniform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.filter(s => s.id !== 7).map((service) => (
            <Link
              href={service.href}
              prefetch
              key={service.id}
              className="group relative bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 p-6 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 flex items-center justify-center mb-5 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-2 mb-5">
                <h3 className="font-bold text-secondary-900 dark:text-white text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price + arrow */}
              <div className="flex items-center justify-between pt-4 border-t border-secondary-100 dark:border-secondary-800">
                <span className="font-bold text-secondary-900 dark:text-white text-sm">
                  {service.price}
                </span>
                <span className="flex items-center gap-1 text-sm text-secondary-400 dark:text-secondary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:gap-2 transition-all duration-200">
                  Подробнее
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-secondary-50 dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-800">
          <p className="text-secondary-700 dark:text-secondary-300 font-medium text-center sm:text-left">
            Не знаете, что выбрать? Расскажите о задаче — подберём оптимальное решение
          </p>
          <a
            href={SOCIAL_LINKS.whatsapp}
            className="btn-dark whitespace-nowrap flex-shrink-0 inline-flex items-center gap-2"
            aria-label="Получить бесплатную консультацию в WhatsApp"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  )
}
