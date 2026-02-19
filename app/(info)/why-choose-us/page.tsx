import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Почему выбрать нас | Преимущества RC-WEB создание сайтов Алматы',
  description: 'Почему выбирают RC-WEB: качество разработки, поддержка, комплексный подход и доступные цены.',
  keywords: ['почему выбрать rc-web', 'преимущества создания сайтов', 'качество разработки Алматы'],
  openGraph: {
    title: 'Почему выбрать нас | RC-WEB',
    description: 'Преимущества работы с нами',
    url: `${SITE_CONFIG.url}/why-choose-us`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Почему выбрать RC-WEB',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/why-choose-us` },
}

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Качество разработки',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Поддержка клиентов',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Комплексная услуга',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Доступные цены',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Быстрая разработка',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
  },
]

const stats = [
  { value: '120+', label: 'Проектов выполнено', icon: 'projects' },
  { value: '5 лет', label: 'Опыта работы', icon: 'experience' },
  { value: '100%', label: 'Положительных отзывов', icon: 'reviews' },
  { value: '24/7', label: 'Техническая поддержка', icon: 'support' },
]

const processSteps = [
  {
    step: 1,
    title: 'Консультация',
    description: 'Обсуждаем цели, требования и бюджет проекта',
  },
  {
    step: 2,
    title: 'Дизайн и разработка',
    description: 'Создаём уникальный дизайн и разрабатываем сайт',
  },
  {
    step: 3,
    title: 'Согласование',
    description: 'Показываем результат и вносим правки',
  },
  {
    step: 4,
    title: 'Запуск и поддержка',
    description: 'Публикуем сайт и обеспечиваем техническую поддержку',
  },
]

export default function WhyChooseUsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Почему выбрать нас', url: `${SITE_CONFIG.url}/why-choose-us` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with achievements */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Преимущества RC-WEB
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Почему выбирают</span>
                <span className="gradient-text">нас</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  преимущества RC-WEB
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Преимуществ и плюсов заказать сайт у нас достаточно много. Мы выделили основные причины, 
                почему клиенты выбирают нас для создания сайтов в Алматы. Посмотрите наши работы в <Link href="/portfolio" className="text-secondary-300 hover:underline font-semibold">портфолио</Link>.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать сайт
                </a>
                <Link href="/reviews" className="btn-secondary">
                  Отзывы клиентов
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Unified style */}
      <section className="section bg-white dark:bg-secondary-950 relative">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-4 text-white">
              Наши <span className="gradient-text">преимущества</span>
            </h2>
          </div>

          {/* Benefits grid - unified style like homepage */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-800
                           hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md 
                           transition-all duration-300"
              >
                {/* Icon - 2 colors for 2 themes */}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-secondary-900 dark:text-white">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Достижения
            </span>
            <h2 className="heading-lg mb-4">
              <span className="gradient-text">Достижения</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-left md:text-center">
                <div className="text-5xl font-bold text-secondary-800 dark:text-secondary-100 mb-3">{stat.value}</div>
                <p className="text-lg text-secondary-600 dark:text-secondary-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-left md:text-center mb-10">
            <h2 className="heading-lg mb-4">Процесс работы</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={`step-${step.step}`} className="text-left md:text-center">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-xl font-bold text-secondary-800 dark:text-secondary-100">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы клиентов"
        subtitle="Более 120 положительных отзывов от довольных клиентов."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-left md:text-center">
          <h2 className="heading-lg mb-4">Готовы начать?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь для бесплатной консультации и обсуждения проекта
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
          <h2 className="heading-md text-left md:text-center mb-8">Связанные страницы</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/reviews" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 dark:group-hover:text-secondary-100 transition-colors">Отзывы</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Отзывы клиентов</p>
            </Link>
            <Link href="/portfolio" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 dark:group-hover:text-secondary-100 transition-colors">Портфолио</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Примеры наших работ</p>
            </Link>
            <Link href="/contact" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 dark:group-hover:text-secondary-100 transition-colors">Контакты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Свяжитесь с нами</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 dark:group-hover:text-secondary-100 transition-colors">Цены</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
