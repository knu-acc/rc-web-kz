import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Создать сайт бесплатно | Бесплатные способы создания сайта',
  description: 'Обзор бесплатных способов создать сайт: конструкторы, хостинги и инструменты. Плюсы и минусы решений.',
  keywords: ['создать сайт бесплатно', 'бесплатный сайт', 'бесплатный конструктор', 'бесплатный хостинг'],
  openGraph: {
    title: 'Создать сайт бесплатно',
    description: 'Бесплатные способы создания сайта',
    url: `${SITE_CONFIG.url}/free-website`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Создать сайт бесплатно',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/free-website` },
}

const freeConstructors = [
  {
    name: 'Tilda',
    description: 'Бесплатный план с ограничениями',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    limitations: ['Субдомен tilda.ws', 'Реклама Tilda', 'Ограниченные блоки'],
  },
  {
    name: 'Wix',
    description: 'Бесплатный план с рекламой',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    limitations: ['Субдомен wix.com', 'Реклама Wix', 'Ограниченное хранилище'],
  },
  {
    name: 'WordPress.com',
    description: 'Бесплатный хостинг WordPress',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
    limitations: ['Субдомен wordpress.com', 'Ограниченные темы', 'Реклама'],
  },
]

const comparison = [
  {
    feature: 'Собственный домен',
    free: false,
    paid: true,
  },
  {
    feature: 'Без рекламы',
    free: false,
    paid: true,
  },
  {
    feature: 'SEO-оптимизация',
    free: false,
    paid: true,
  },
  {
    feature: 'Техническая поддержка',
    free: false,
    paid: true,
  },
  {
    feature: 'Уникальный дизайн',
    free: false,
    paid: true,
  },
  {
    feature: 'Полный функционал',
    free: false,
    paid: true,
  },
]

const whyOrder = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Собственный домен',
    description: 'Повышает доверие клиентов и улучшает SEO',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
    description: 'Привлекает клиентов из поисковых систем',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Уникальный дизайн',
    description: 'Выделяет вас среди конкурентов',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Техническая поддержка',
    description: 'Решает проблемы быстро и профессионально',
    gradient: 'from-amber-500 to-orange-600',
  },
]

export default function FreeWebsitePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Создать сайт бесплатно', url: `${SITE_CONFIG.url}/free-website` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with warning */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Важная информация
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Создать сайт</span>
                <span className="gradient-text">бесплатно</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  плюсы и минусы
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Обзор бесплатных способов создания сайта: конструкторы, хостинги, инструменты. Узнайте о плюсах и минусах 
                бесплатных решений и когда стоит <Link href="/website-price" className="text-secondary-300 hover:underline font-semibold">заказать профессиональный сайт</Link>.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать сайт
                </a>
                <Link href="/why-choose-us" className="btn-secondary">
                  Почему выбрать нас
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Constructors */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Конструкторы
            </span>
            <h2 className="heading-lg mb-6">
              Примеры бесплатных <span className="gradient-text">конструкторов</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Обзор популярных бесплатных платформ для создания сайтов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {freeConstructors.map((constructor, index) => (
              <div key={constructor.name} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={constructor.image}
                    alt={constructor.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{constructor.name}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4">{constructor.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-secondary-900 dark:text-white text-sm">Ограничения:</p>
                    <ul className="space-y-1 text-sm text-secondary-700 dark:text-secondary-300">
                      {constructor.limitations.map((limitation, idx) => (
                        <li key={`${constructor.name}-limitation-${limitation}`} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Сравнение бесплатных vs платных</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Что вы получаете в каждом случае</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white dark:bg-secondary-950 rounded-2xl p-8 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-200 dark:border-secondary-700">
                  <th className="text-left p-4 font-bold text-secondary-900 dark:text-white">Функция</th>
                  <th className="text-center p-4 font-bold text-secondary-900 dark:text-white">Бесплатно</th>
                  <th className="text-center p-4 font-bold text-secondary-900 dark:text-white">Платно</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={item.feature} className="border-b border-secondary-100 dark:border-secondary-800">
                    <td className="p-4 text-secondary-700 dark:text-secondary-300">{item.feature}</td>
                    <td className="p-4 text-center">
                      {item.free ? (
                        <svg className="w-6 h-6 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.paid ? (
                        <svg className="w-6 h-6 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Order */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Почему стоит <span className="gradient-text">заказать сайт</span>
            </h2>
            <p className="text-lg text-white/80">
              Профессиональный сайт — это инвестиция в ваш бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOrder.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Free Doesn't Work */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-8">Когда бесплатный сайт не подходит</h2>
            <div className="space-y-4">
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Низкое доверие клиентов</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Субдомен (вашсайт.tilda.ws) и реклама конструктора снижают доверие к вашему бизнесу. 
                  Клиенты предпочитают сайты с собственным доменом.
                </p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Плохая SEO-оптимизация</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Бесплатные платформы ограничивают возможности для <Link href="/seo-optimization" className="text-secondary-800 dark:text-secondary-100 hover:underline font-semibold">SEO-оптимизации</Link>, 
                  что мешает продвижению в поисковых системах.
                </p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Ограниченная функциональность</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Многие функции доступны только в платных планах. Для серьёзного бизнеса это критично.
                </p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Нет технической поддержки</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  При проблемах вы остаётесь один на один с конструктором. Профессиональная поддержка решает проблемы быстро.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые выбрали профессиональную разработку."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы создать профессиональный сайт?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации. Мы создадим сайт, который окупится за счёт привлечения клиентов.
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
          <h2 className="heading-md text-center mb-8">Полезные статьи</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/how-to-create-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Как создать сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Пошаговая инструкция</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Цены на сайты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
            <Link href="/why-choose-us" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Почему выбрать нас</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Наши преимущества</p>
            </Link>
            <Link href="/tilda-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Сайт на Tilda</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Быстрое решение</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
