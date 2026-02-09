import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Реклама сайта в Алматы | Google Ads и Яндекс Директ - RC-WEB.KZ',
  description: 'Настройка рекламы сайта в Алматы: Google Ads и Яндекс Директ. Контекстная реклама, привлечение клиентов, оптимизация бюджета. Заказать настройку рекламы.',
  keywords: ['реклама сайта Алматы', 'google реклама', 'яндекс реклама', 'контекстная реклама Алматы'],
  openGraph: {
    title: 'Реклама сайта в Google и Яндекс Алматы',
    description: 'Настройка контекстной рекламы для вашего сайта',
    url: `${SITE_CONFIG.url}/website-advertising`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Реклама сайта в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/website-advertising` },
}

const adTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Google Ads',
    description: 'Настройка поисковой и контекстно-медийной рекламы в Google. Создание объявлений, подбор ключевых слов, настройка таргетинга',
    gradient: 'from-red-500 to-pink-600',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Яндекс.Директ',
    description: 'Настройка рекламы в поиске и РСЯ. Работа с аудиториями, ретаргетингом и автоматическими стратегиями',
    gradient: 'from-red-500 to-pink-600',
    logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200',
  },
]

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Быстрый результат',
    description: 'В отличие от SEO, контекстная реклама начинает работать сразу после запуска',
    gradient: 'from-emerald-500 to-teal-600',
    linkText: 'SEO',
    linkHref: '/seo-optimization',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Точный таргетинг',
    description: 'Настройка рекламы под конкретную целевую аудиторию по географии, возрасту, интересам',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Контроль бюджета',
    description: 'Вы устанавливаете дневной бюджет и максимальную стоимость клика, полностью контролируя расходы',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const campaignExamples = [
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'Пример рекламной кампании Google Ads' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Пример рекламной кампании Яндекс.Директ' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Пример настройки рекламы' },
]

export default function WebsiteAdvertisingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Реклама сайта',
    description: 'Настройка рекламы в Google и Яндекс для сайтов в Алматы',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Реклама сайта', url: `${SITE_CONFIG.url}/website-advertising` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                Реклама сайта в Алматы
              </div>

              <h1 className="heading-xl text-secondary-900 dark:text-white">
                <span className="block">Контекстная реклама</span>
                <span className="gradient-text">Google и Яндекс</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-secondary-700 dark:text-secondary-300">
                  быстрый результат
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl leading-relaxed">
                Настройка и ведение рекламных кампаний в Google Ads и Яндекс.Директ для вашего сайта. Эффективное 
                привлечение клиентов, оптимизация бюджета и увеличение продаж. Идеально для <Link href="/landing-page" className="text-red-600 hover:underline font-semibold">лендингов</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Настроить рекламу
                </a>
                <Link href="/website-price" className="btn-secondary">
                  Узнать цены
                </Link>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="group bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">1 день</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">До запуска</p>
                </div>
                <div className="group bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">+300%</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">Рост трафика</p>
                </div>
                <div className="group bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">ROI 5:1</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">Окупаемость</p>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Реклама сайта в Google и Яндекс"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Types with Logos */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Типы рекламы
            </span>
            <h2 className="heading-lg mb-6">
              Реклама в <span className="gradient-text">Google и Яндекс</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Настраиваем рекламу в обеих платформах для максимального охвата аудитории
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {adTypes.map((ad, index) => (
              <div key={ad.title} className="group relative rounded-3xl p-8 bg-secondary-50 dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                    <Image
                      src={ad.logo}
                      alt={ad.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">{ad.title}</h3>
                  </div>
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{ad.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Почему выбирают <span className="gradient-text">контекстную рекламу</span>
            </h2>
            <p className="text-lg text-white/80">
              Быстрый способ привлечения клиентов с полным контролем бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-primary-500/50 shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${advantage.gradient} text-white flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{advantage.title}</h3>
                <p className="text-white/70 leading-relaxed relative z-10">
                  {advantage.linkText ? (
                    <>
                      В отличие от <Link href={advantage.linkHref || '#'} className="text-primary-300 hover:underline font-semibold">{advantage.linkText}</Link>, {advantage.description.split(advantage.linkText)[1]}
                    </>
                  ) : (
                    advantage.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Examples */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Примеры
            </span>
            <h2 className="heading-lg mb-6">
              Примеры рекламных <span className="gradient-text">кампаний</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Скриншоты настроенных рекламных кампаний для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {campaignExamples.map((example, index) => (
              <div key={example.alt} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100 dark:bg-secondary-800">
                <Image
                  src={example.src}
                  alt={example.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Процесс настройки рекламы</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Пошаговый подход к запуску рекламных кампаний</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-300">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Анализ</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Изучаем ваш бизнес и целевую аудиторию</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-300">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Настройка</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Создаём объявления и настраиваем кампании</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-300">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Запуск</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Запускаем рекламу и отслеживаем результаты</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-300">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Оптимизация</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Постоянно улучшаем эффективность кампаний</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые настроили рекламу сайта."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Готовы запустить рекламу?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и настройки рекламных кампаний для вашего сайта
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
          <h2 className="heading-md text-center mb-8">Связанные услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/landing-page" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Landing Page</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Идеален для рекламы</p>
            </Link>
            <Link href="/seo-optimization" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">SEO оптимизация</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Органическое продвижение</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Цены на сайты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Многостраничные решения</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
