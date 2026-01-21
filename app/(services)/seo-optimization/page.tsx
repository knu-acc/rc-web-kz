import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel'
import { placeholderReviewImages } from '@/data/reviews'

export const metadata: Metadata = {
  title: 'SEO оптимизация сайта в Алматы | Продвижение в Google и Яндекс',
  description: 'Профессиональная SEO-оптимизация сайтов в Алматы. Продвижение в Google и Яндекс, увеличение органического трафика, улучшение позиций в поисковой выдаче. Работаем с сайтами на Tilda и чистым кодом.',
  keywords: ['SEO оптимизация Алматы', 'продвижение сайта', 'сео Алматы', 'оптимизация сайта'],
  openGraph: {
    title: 'SEO оптимизация сайта в Алматы',
    description: 'Профессиональное продвижение сайтов в поисковых системах',
    url: `${SITE_CONFIG.url}/seo-optimization`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'SEO оптимизация сайта в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/seo-optimization` },
}

const seoItems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Техническая оптимизация',
    description: 'Настройка мета-тегов, заголовков, структуры сайта, скорости загрузки и мобильной адаптации',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Контентная оптимизация',
    description: 'Оптимизация текстов, заголовков, изображений. Создание релевантного контента для поисковых систем',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Внутренняя перелинковка',
    description: 'Правильная структура внутренних ссылок для лучшей индексации страниц поисковыми системами',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Регистрация в поисковиках',
    description: 'Добавление сайта в Google Search Console и Яндекс.Вебмастер, настройка sitemap и robots.txt',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const beforeAfter = [
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'До SEO оптимизации', label: 'До' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'После SEO оптимизации', label: 'После' },
]

export default function SEOOptimizationPage() {
  const serviceSchema = generateServiceSchema({
    name: 'SEO оптимизация',
    description: 'SEO-оптимизация и продвижение сайтов в Алматы',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'SEO оптимизация', url: `${SITE_CONFIG.url}/seo-optimization` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with metrics */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                SEO оптимизация в Алматы
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-900">
                <span className="block">Продвижение в</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Google и Яндекс</span>
                <span className="block text-secondary-700 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                  увеличение органического трафика
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-600 max-w-xl leading-relaxed">
                Профессиональная SEO-оптимизация вашего сайта для продвижения в Google и Яндекс. Увеличиваем органический 
                трафик, улучшаем позиции в поисковой выдаче и помогаем привлекать клиентов без <Link href="/website-advertising" className="text-blue-600 hover:underline font-semibold">рекламы</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать SEO
                </a>
                <Link href="/publish-website" className="btn-secondary">
                  Как опубликовать сайт
                </Link>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">+150%</div>
                  <p className="text-sm font-semibold text-blue-700">Рост трафика</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-4 border border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg">
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-1">Топ-10</div>
                  <p className="text-sm font-semibold text-indigo-700">Позиции в Google</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">3-6 мес</div>
                  <p className="text-sm font-semibold text-blue-700">Срок результата</p>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="SEO оптимизация сайта в Алматы"
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

      {/* What includes SEO */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              Что включает
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Что включает <span className="gradient-text">SEO-оптимизация</span>
            </h2>
            <p className="text-lg text-white/80">
              Комплексная работа над всеми аспектами сайта для продвижения в поисковых системах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoItems.map((item, index) => (
              <div
                key={index}
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

      {/* Before/After Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Результаты
            </span>
            <h2 className="heading-lg mb-6">
              До и после <span className="gradient-text">SEO оптимизации</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Примеры роста трафика и позиций после оптимизации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beforeAfter.map((item, index) => (
              <div key={index} className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-2">
                    <p className="font-bold text-secondary-900">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-center">Почему важна SEO-оптимизация?</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Органический трафик</h3>
                <p className="text-secondary-600">
                  Правильная SEO-оптимизация позволяет привлекать клиентов из поисковых систем без платной рекламы, 
                  что экономит бюджет на маркетинг. В отличие от <Link href="/website-advertising" className="text-primary-600 hover:underline font-semibold">контекстной рекламы</Link>, результаты работают постоянно.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Долгосрочный результат</h3>
                <p className="text-secondary-600">
                  Результаты SEO работают постоянно и накапливаются со временем, обеспечивая стабильный поток клиентов. 
                  Особенно эффективно для <Link href="/corporate-site" className="text-primary-600 hover:underline font-semibold">многостраничных сайтов</Link>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Доверие пользователей</h3>
                <p className="text-secondary-600">
                  Сайты в топе поисковой выдачи воспринимаются пользователями как более авторитетные и заслуживающие доверия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Процесс SEO оптимизации</h2>
            <p className="text-lg text-secondary-600">Пошаговый подход к продвижению вашего сайта</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Аудит сайта</h3>
              <p className="text-secondary-600 text-sm">Анализируем текущее состояние и находим проблемы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Техническая оптимизация</h3>
              <p className="text-secondary-600 text-sm">Исправляем технические ошибки и улучшаем структуру</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Контентная оптимизация</h3>
              <p className="text-secondary-600 text-sm">Оптимизируем тексты и создаём новый контент</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Мониторинг</h3>
              <p className="text-secondary-600 text-sm">Отслеживаем позиции и трафик, корректируем стратегию</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые заказали SEO-оптимизацию сайтов."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы оптимизировать свой сайт?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для аудита сайта и консультации по SEO-продвижению
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary">Позвонить</a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Связанные услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/website-advertising" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Реклама сайта</h3>
              <p className="text-secondary-600">Настройка Google и Яндекс рекламы</p>
            </Link>
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600">Идеален для SEO-продвижения</p>
            </Link>
            <Link href="/publish-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Публикация сайта</h3>
              <p className="text-secondary-600">Как опубликовать сайт в интернете</p>
            </Link>
            <Link href="/web-design" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Веб-дизайн</h3>
              <p className="text-secondary-600">Современный дизайн сайтов</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
