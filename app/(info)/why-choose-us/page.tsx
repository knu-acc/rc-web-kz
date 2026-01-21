import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel'
import { placeholderReviewImages } from '@/data/reviews'

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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Качество разработки',
    description: 'За всё время работы было выполнено более 120 проектов, и каждый отзыв — положительный. Все отзывы вы можете посмотреть на странице <Link href="/reviews" className="text-secondary-300 hover:underline font-semibold">отзывов</Link>.',
    gradient: 'from-emerald-500 to-teal-600',
    linkText: 'отзывов',
    linkHref: '/reviews',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Поддержка клиентов',
    description: 'Практически все клиенты рано или поздно просят внести мелкие корректировки на сайт. Практически во всех случаях мы делаем такую работу абсолютно БЕСПЛАТНО.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Комплексная услуга',
    description: 'Мы делаем всё вместе: создание сайта, дизайн и правки. Клиенту остаётся только заплатить за настройку рекламы (по желанию).',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Доступные цены',
    description: 'Цены по созданию сайтов подходят для большинства клиентов. Прозрачное ценообразование без скрытых платежей. Посмотрите <Link href="/website-price" className="text-secondary-300 hover:underline font-semibold">цены на сайты</Link>.',
    gradient: 'from-amber-500 to-orange-600',
    linkText: 'цены на сайты',
    linkHref: '/website-price',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Быстрая разработка',
    description: 'Средний срок разработки сайта — 3-10 дней в зависимости от сложности. Быстрее, чем у большинства конкурентов.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
    description: 'Все сайты включают базовую SEO-оптимизацию для продвижения в поисковых системах. Дополнительно можно заказать <Link href="/seo-optimization" className="text-secondary-300 hover:underline font-semibold">полную SEO-оптимизацию</Link>.',
    gradient: 'from-indigo-500 to-blue-600',
    linkText: 'полную SEO-оптимизацию',
    linkHref: '/seo-optimization',
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
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
                  <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bento Grid */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Наши <span className="gradient-text">преимущества</span>
            </h2>
            <p className="text-lg text-white/80">
              Почему клиенты выбирают нас для создания сайтов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white flex items-center justify-center mb-5`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {benefit.linkText && benefit.linkHref ? (
                    <>
                      {benefit.description.split(benefit.linkText)[0]}
                      <Link href={benefit.linkHref} className="text-secondary-300 hover:underline font-semibold">{benefit.linkText}</Link>
                      {benefit.description.split(benefit.linkText)[1] || ''}
                    </>
                  ) : (
                    benefit.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Достижения
            </span>
            <h2 className="heading-lg mb-6">
              Наши <span className="gradient-text">достижения</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Цифры, которые говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-secondary-800 mb-3">{stat.value}</div>
                <p className="text-lg text-secondary-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Процесс работы</h2>
            <p className="text-lg text-secondary-600">Как мы работаем с клиентами</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-800">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-secondary-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Отзывы
            </span>
            <h2 className="heading-lg mb-6">
              Отзывы <span className="gradient-text">клиентов</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { name: 'Александр К.', text: 'Заказал корпоративный сайт. Всё сделали быстро и качественно. Рекомендую!', rating: 5 },
              { name: 'Мария С.', text: 'Создали интернет-магазин. Очень удобная админка. Спасибо за работу!', rating: 5 },
              { name: 'Дмитрий В.', text: 'Landing Page для рекламы. Дизайн отличный, конверсия высокая. Доволен!', rating: 5 },
            ].map((review, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary-700 mb-3">"{review.text}"</p>
                <p className="font-bold text-secondary-900">{review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews" className="btn-outline">
              Все отзывы
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Более 120 положительных отзывов от наших довольных клиентов."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы стать нашим клиентом?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и обсуждения вашего проекта
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
          <h2 className="heading-md text-center mb-8">Связанные страницы</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/reviews" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Отзывы</h3>
              <p className="text-secondary-600">Отзывы наших клиентов</p>
            </Link>
            <Link href="/portfolio" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Портфолио</h3>
              <p className="text-secondary-600">Примеры наших работ</p>
            </Link>
            <Link href="/contact" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Контакты</h3>
              <p className="text-secondary-600">Свяжитесь с нами</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Цены</h3>
              <p className="text-secondary-600">Стоимость разработки</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
