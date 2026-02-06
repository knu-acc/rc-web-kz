import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })
const PriceCalculator = dynamic(() => import('@/components/ui/PriceCalculator').then(mod => ({ default: mod.PriceCalculator })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Цены на создание сайта в Алматы | Стоимость разработки сайтов',
  description: 'Цены на создание сайтов в Алматы: landing page, корпоративные сайты, интернет‑магазины. Прозрачное ценообразование.',
  keywords: ['цена сайта Алматы', 'стоимость создания сайта', 'сколько стоит сайт', 'цены на сайты Алматы'],
  openGraph: {
    title: 'Цены на создание сайта в Алматы',
    description: 'Актуальные цены на разработку сайтов',
    url: `${SITE_CONFIG.url}/website-price`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Цены на создание сайта в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/website-price` },
}

const prices = [
  { 
    name: 'Landing Page', 
    price: '85-135 тыс ₸', 
    description: 'Одностраничный сайт для рекламы', 
    link: '/landing-page',
    features: ['Уникальный дизайн', 'Адаптивная вёрстка', 'Формы обратной связи', 'SEO-оптимизация'],
    gradient: 'from-violet-500 to-purple-600',
  },
  { 
    name: 'Корпоративный сайт', 
    price: '135-195 тыс ₸', 
    description: 'Многостраничный сайт для бизнеса', 
    link: '/corporate-site',
    features: ['3-10+ страниц', 'Админ-панель', 'SEO-оптимизация', 'Техподдержка'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  { 
    name: 'Интернет-магазин', 
    price: '175-275 тыс ₸', 
    description: 'E-commerce с оплатой онлайн', 
    link: '/online-store',
    features: ['Каталог товаров', 'Корзина и оплата', 'Админ-панель', 'Интеграция платежей'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  { 
    name: 'Сайт на Tilda', 
    price: 'от 120 тыс ₸ и выше', 
    description: 'Быстрое решение на конструкторе', 
    link: '/tilda-site',
    features: ['Готовые блоки', 'Простое управление', 'SEO-оптимизация', 'Быстрая разработка'],
    gradient: 'from-amber-500 to-orange-600',
  },
]

const priceFactors = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Количество страниц',
    description: 'Чем больше страниц, тем выше стоимость',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Сложность дизайна',
    description: 'Уникальный дизайн стоит дороже шаблонного',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Дополнительный функционал',
    description: 'Интеграции, формы, онлайн-оплата увеличивают стоимость',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Срочность',
    description: 'Срочные проекты могут стоить дороже',
    gradient: 'from-amber-500 to-orange-600',
  },
]

export default function WebsitePricePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Цены на сайты', url: `${SITE_CONFIG.url}/website-price` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with price list */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Цены на сайты в Алматы
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Прозрачное</span>
                <span className="gradient-text">ценообразование</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  без скрытых платежей
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Актуальные цены на разработку сайтов в Алматы. Прозрачное ценообразование без скрытых платежей. 
                Каждый проект включает дизайн, разработку, <Link href="/seo-optimization" className="text-secondary-300 hover:underline font-semibold">СЕО-оптимизацию</Link> и техническую поддержку.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Узнать точную стоимость
                </a>
                <Link href="/contact" className="btn-secondary">
                  Контакты
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Цены на создание сайта в Алматы"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Cards */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Цены
            </span>
            <h2 className="heading-lg mb-6">
              Цены на <span className="gradient-text">создание сайтов</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Выберите подходящий вариант для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((item, index) => (
              <Link 
                key={index} 
                href={item.link} 
                className="group relative rounded-3xl p-6 bg-white dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-700 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold">{item.price.split(' ')[1]}</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-2">{item.price}</h3>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{item.name}</h4>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">{item.description}</p>
                <ul className="space-y-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                      <svg className="w-4 h-4 text-secondary-800 dark:text-secondary-100 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-secondary-800 dark:text-secondary-100 font-semibold group-hover:gap-3 transition-all inline-flex items-center gap-2">
                  Подробнее
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Price Factors */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Факторы
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Что влияет на <span className="gradient-text">стоимость?</span>
            </h2>
            <p className="text-lg text-white/80">
              Основные факторы, которые определяют финальную цену сайта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceFactors.map((factor, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${factor.gradient} text-white flex items-center justify-center mb-5`}>
                  {factor.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                <p className="text-white/70 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="section bg-gradient-to-b from-white via-secondary-50/30 to-white dark:from-secondary-950 dark:via-secondary-900/30 dark:to-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Рассчитайте стоимость вашего сайта</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Выберите параметры и узнайте примерную стоимость</p>
          </div>
          <PriceCalculator />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Сравнительная таблица услуг</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Сравните услуги и выберите подходящий вариант</p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary-50 dark:bg-secondary-800">
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-left font-bold text-secondary-900 dark:text-white">Услуга</th>
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-center font-bold text-secondary-900 dark:text-white">Landing Page</th>
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-center font-bold text-secondary-900 dark:text-white">Корпоративный</th>
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-center font-bold text-secondary-900 dark:text-white">Интернет-магазин</th>
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-center font-bold text-secondary-900 dark:text-white">Tilda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-secondary-700 dark:text-secondary-300">Количество страниц</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">1</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">3-10+</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">5-20+</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">1-5</td>
                </tr>
                <tr className="bg-secondary-50 dark:bg-secondary-800">
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-secondary-700 dark:text-secondary-300">Срок разработки</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">3-5 дней</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">6-10 дней</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">10-15 дней</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">3-5 дней</td>
                </tr>
                <tr>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-secondary-700 dark:text-secondary-300">SEO-оптимизация</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                </tr>
                <tr className="bg-secondary-50 dark:bg-secondary-800">
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-secondary-700 dark:text-secondary-300">Админ-панель</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">—</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                  <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые заказали разработку сайтов."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Нужна точная стоимость?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости вашего проекта
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary">Позвонить</a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/landing-page" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Landing Page</h3>
              <p className="text-secondary-600 dark:text-secondary-300">85-135 тыс ₸</p>
            </Link>
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">135-195 тыс ₸</p>
            </Link>
            <Link href="/online-store" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Интернет-магазин</h3>
              <p className="text-secondary-600 dark:text-secondary-300">175-275 тыс ₸</p>
            </Link>
            <Link href="/tilda-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Сайт на Tilda</h3>
              <p className="text-secondary-600 dark:text-secondary-300">от 120 тыс ₸ и выше</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
