import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Сайт для компании в Алматы | Бизнес-сайт под ключ',
  description: 'Создание сайтов для компаний в Алматы: визитки, корпоративные и бизнес‑сайты. Дизайн, функционал, поддержка.',
  keywords: ['сайт для компании Алматы', 'бизнес сайт', 'сайт визитка', 'корпоративный сайт'],
  openGraph: {
    title: 'Сайт для компании в Алматы',
    description: 'Профессиональные сайты для бизнеса',
    url: `${SITE_CONFIG.url}/website-for-company`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Сайт для компании в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/website-for-company` },
}

const siteTypes = [
  {
    title: 'Сайт-визитка',
    description: 'Небольшой сайт с основной информацией о компании: контакты, услуги, о компании',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
    pages: '1-3 страницы',
  },
  {
    title: 'Корпоративный сайт',
    description: 'Многостраничный сайт с полной информацией о компании, услугах, портфолио',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    pages: '5-10+ страниц',
  },
  {
    title: 'Бизнес-сайт',
    description: 'Комплексное решение с каталогом услуг, формой заказа, онлайн-консультацией',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
    pages: '10-20+ страниц',
  },
]

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Привлечение клиентов',
    description: 'Сайт помогает находить новых клиентов через поисковые системы и рекламу',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Доверие клиентов',
    description: 'Профессиональный сайт повышает доверие к вашей компании',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Круглосуточная работа',
    description: 'Сайт работает 24/7, принимая заявки и предоставляя информацию',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Рост продаж',
    description: 'Эффективный сайт увеличивает количество заявок и продаж',
    gradient: 'from-amber-500 to-orange-600',
  },
]

export default function WebsiteForCompanyPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Сайт для компании',
    description: 'Создание сайтов для компаний и бизнеса в Алматы',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Сайт для компании', url: `${SITE_CONFIG.url}/website-for-company` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with stats */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Сайт для компании в Алматы
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Профессиональные</span>
                <span className="gradient-text">сайты для бизнеса</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  представление вашей компании
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Создаём профессиональные сайты для вашей компании. Корпоративные сайты, сайты-визитки, бизнес-сайты — 
                всё для эффективного представления вашего бизнеса в интернете. Посмотрите примеры в нашем <Link href="/portfolio" className="text-secondary-300 hover:underline font-semibold">портфолио</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать сайт
                </a>
                <Link href="/corporate-site" className="btn-secondary">
                  Корпоративный сайт
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">120+</div>
                  <p className="text-sm text-white/70">Компаний</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">5 лет</div>
                  <p className="text-sm text-white/70">Опыта</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <p className="text-sm text-white/70">Довольных</p>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
                    alt="Сайт для компании в Алматы"
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

      {/* Site Types */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Типы сайтов
            </span>
            <h2 className="heading-lg mb-6">
              Типы сайтов <span className="gradient-text">для компаний</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Выберите подходящий тип сайта для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteTypes.map((type, index) => (
              <div key={type.title} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{type.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-3">{type.description}</p>
                  <div className="flex items-center gap-2 text-secondary-800 dark:text-secondary-100 font-semibold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{type.pages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Преимущества для <span className="gradient-text">бизнеса</span>
            </h2>
            <p className="text-lg text-white/80">
              Почему каждой компании нужен профессиональный сайт
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white flex items-center justify-center mb-5`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Процесс создания сайта</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Как мы создаём сайт для вашей компании</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-800 dark:text-secondary-100">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Консультация</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Обсуждаем цели и требования к сайту</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-800 dark:text-secondary-100">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Дизайн</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Создаём уникальный дизайн под ваш бренд</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-800 dark:text-secondary-100">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Разработка</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Разрабатываем и программируем сайт</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-800 dark:text-secondary-100">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Запуск</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">Публикуем сайт и обучаем работе</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от компаний, которые заказали разработку сайтов."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы создать сайт для компании?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и подбора оптимального решения
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
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Многостраничные решения</p>
            </Link>
            <Link href="/landing-page" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Landing Page</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Одностраничные сайты</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Цены</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
            <Link href="/web-design" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Веб-дизайн</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Современный дизайн</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
