import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'


export const metadata: Metadata = {
  title: 'Создание корпоративного сайта в Алматы от 125 000₸ | Разработка - RC-WEB',
  description: 'Разработка корпоративных сайтов в Алматы от 125 000₸. Многостраничные сайты для бизнеса с SEO-оптимизацией. Современный дизайн, полный функционал, техподдержка. Заказать корпоративный сайт.',
  keywords: [
    'корпоративный сайт Алматы',
    'многостраничный сайт Алматы',
    'создание корпоративного сайта',
    'сайт для компании Алматы',
    'разработка многостраничного сайта',
  ],
  openGraph: {
    title: 'Корпоративный сайт в Алматы | Многостраничный сайт 135-195 тыс ₸',
    description: 'Профессиональная разработка корпоративных сайтов в Алматы для серьёзного бизнеса',
    url: `${SITE_CONFIG.url}/corporate-site`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Корпоративный сайт в Алматы',
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/corporate-site`,
  },
}

const siteTypes = [
  {
    title: 'Сайт-визитка',
    description: 'Небольшой сайт с основной информацией о компании',
    pages: '1-3 страницы',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
  },
  {
    title: 'Корпоративный портал',
    description: 'Многостраничный сайт с полным функционалом',
    pages: '5-10+ страниц',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  },
  {
    title: 'Бизнес-сайт',
    description: 'Комплексное решение с каталогом услуг и формой заказа',
    pages: '10-20+ страниц',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
  },
]

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
    description: 'Идеально для продвижения в поисковых системах. Много контента и внутренних ссылок.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Профессиональный имидж',
    description: 'Создаёт доверие у клиентов и партнёров. Визитная карточка вашей компании.',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Гибкий функционал',
    description: 'Любые разделы и возможности: блог, каталог, формы, интеграции.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Адаптивный дизайн',
    description: 'Отлично работает на всех устройствах: компьютеры, планшеты, смартфоны.',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Цель и функционал',
    description: 'Обсуждаем цели сайта, количество страниц, функционал и предпочтения в дизайне. Формируем техническое задание.',
  },
  {
    step: 2,
    title: 'Дизайн-макет',
    description: 'Создаём уникальный дизайн, согласовываем с вами, затем приступаем к вёрстке и программированию страниц.',
  },
  {
    step: 3,
    title: 'Разработка',
    description: 'Разрабатываем страницы, настраиваем формы, интегрируем сервисы. Каждый этап согласовываем с вами.',
  },
  {
    step: 4,
    title: 'Запуск и поддержка',
    description: 'Публикуем сайт, настраиваем аналитику, обучаем работе с сайтом. Обеспечиваем техническую поддержку.',
  },
]

export default function CorporateSitePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Корпоративный сайт',
    description: 'Разработка многостраничных корпоративных сайтов в Алматы',
    price: '135000',
    priceCurrency: 'KZT',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Корпоративный сайт', url: `${SITE_CONFIG.url}/corporate-site` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Section with stats */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-600"></span>
                </span>
                Корпоративный сайт в Алматы
              </div>

              <h1 className="heading-xl text-secondary-900 dark:text-white">
                <span className="block">Многостраничные</span>
                <span className="gradient-text">корпоративные сайты</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-secondary-700 dark:text-secondary-300">
                  для серьёзного бизнеса
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl leading-relaxed">
                Создаём профессиональные корпоративные сайты для бизнеса. Идеально для <Link href="/seo-optimization" className="text-blue-600 hover:underline font-semibold">SEO-продвижения</Link>, представления компании и привлечения клиентов. Полный функционал, современный дизайн, техподдержка.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать сайт
                </a>
                <Link href="/portfolio" className="btn-secondary">
                  Посмотреть портфолио
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-8">
                <div className="group relative bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">120+</div>
                  <p className="text-xs sm:text-sm font-semibold text-secondary-700 dark:text-secondary-300">Проектов выполнено</p>
                </div>
                <div className="group relative bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">5-10</div>
                  <p className="text-xs sm:text-sm font-semibold text-secondary-700 dark:text-secondary-300">Страниц сайта</p>
                </div>
                <div className="group relative bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">6-10</div>
                  <p className="text-xs sm:text-sm font-semibold text-secondary-700 dark:text-secondary-300">Дней разработки</p>
                </div>
              </div>
            </div>

            {/* Right: Featured image */}
            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
                    alt="Корпоративный сайт разработка в Алматы"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Corporate Sites */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Типы сайтов
            </span>
            <h2 className="heading-lg mb-6">
              Виды <span className="gradient-text">корпоративных сайтов</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Выберите подходящий тип сайта для вашей компании. Каждый вариант решает свои задачи. Не уверены, что выбрать? Читайте нашу статью о <Link href="/blog/landing-page-vs-korporativnyj-sajt" className="text-primary-600 hover:underline font-semibold">разнице между Landing Page и корпоративным сайтом</Link> или узнайте <Link href="/blog/skolko-stoit-sozdanie-sajta-almaty" className="text-primary-600 hover:underline font-semibold">сколько стоит создание сайта в Алматы</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteTypes.map((type, index) => (
              <div key={type.title} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-300 dark:border-secondary-600 hover:border-primary-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{type.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-3">{type.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold">
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

      {/* Advantages - Dark Section */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 !text-white">
              Почему выбирают <span className="text-white">корпоративный сайт</span>
            </h2>
            <p className="text-lg text-white">
              Многостраничные сайты идеально подходят для серьёзного бизнеса и долгосрочного развития
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-white/70 leading-relaxed relative z-10">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Corporate Site */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Что такое корпоративный сайт?</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                Корпоративный сайт — это многостраничный веб-ресурс, который представляет вашу компанию в интернете. 
                В отличие от <Link href="/landing-page" className="text-primary-600 hover:underline font-semibold">одностраничных лендингов</Link>, корпоративный сайт содержит несколько разделов: о компании, 
                услуги, портфолио, контакты, блог и другие.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                Такие сайты идеально подходят для <Link href="/seo-optimization" className="text-primary-600 hover:underline font-semibold">SEO-продвижения</Link>, так как позволяют создавать много контента и 
                внутренних ссылок. Они также служат визитной карточкой компании и помогают строить доверие у клиентов.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">3-10+ страниц с уникальным контентом</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Оптимизация для поисковых систем (SEO)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Админ-панель для управления контентом</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Корпоративный сайт разработка в Алматы"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Этапы создания корпоративного сайта</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Пошаговый процесс от идеи до запуска</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={`step-${step.step}`} className="relative flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl font-bold text-primary-600">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-secondary-200" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Цены на корпоративный сайт</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Стоимость зависит от количества страниц и функционала</p>
          </div>
          <div className="max-w-4xl mx-auto bg-secondary-50 dark:bg-secondary-800 rounded-2xl shadow-lg border border-secondary-300 dark:border-secondary-600 p-8">
            <div className="text-left md:text-center mb-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">135-195 тыс ₸</div>
              <p className="text-secondary-600 dark:text-secondary-300">Базовая стоимость корпоративного сайта</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Входит в стоимость:</h3>
                <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Уникальный дизайн всех страниц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>3-5 страниц с контентом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Адаптивная вёрстка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span><Link href="/seo-optimization" className="text-primary-600 hover:underline">SEO-оптимизация</Link></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Формы обратной связи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Бесплатная поддержка</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Сроки:</h3>
                <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Обсуждение проекта: 1-2 дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Дизайн: 2-3 дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Разработка: 3-5 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Тестирование: 1 день</span>
                  </li>
                </ul>
                <p className="text-sm text-secondary-500 mt-4">Итого: 6-10 рабочих дней</p>
              </div>
            </div>
            <div className="text-left md:text-center">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">Заказать корпоративный сайт</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-left md:text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Сколько стоит корпоративный сайт в Алматы?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Стоимость корпоративного сайта составляет 135-195 тыс тенге. Финальная цена зависит от количества страниц, сложности дизайна и дополнительного функционала. Подробнее о ценах читайте на странице <Link href="/website-price" className="text-primary-600 hover:underline font-semibold">Цены на сайты</Link>.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Сколько времени занимает разработка корпоративного сайта?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Разработка корпоративного сайта занимает 6-10 рабочих дней. Это включает создание дизайна, разработку всех страниц, настройку форм и базовую SEO-оптимизацию.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Чем корпоративный сайт отличается от Landing Page?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Корпоративный сайт — это многостраничный сайт с несколькими разделами (О компании, Услуги, Контакты и др.), который подходит для долгосрочного продвижения и SEO. <Link href="/landing-page" className="text-primary-600 hover:underline font-semibold">Landing Page</Link> — одностраничный сайт для конкретной рекламной кампании. Подробнее о различиях читайте в статье <Link href="/blog/landing-page-vs-korporativnyj-sajt" className="text-primary-600 hover:underline font-semibold">Landing Page vs Корпоративный сайт</Link>.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Нужна ли SEO-оптимизация для корпоративного сайта?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Да, корпоративные сайты идеально подходят для <Link href="/seo-optimization" className="text-primary-600 hover:underline font-semibold">SEO-продвижения</Link>. Многостраничная структура позволяет создавать больше контента и внутренних ссылок, что улучшает позиции в поисковых системах.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-left md:text-center">
          <h2 className="heading-lg mb-4 !text-white">Готовы создать корпоративный сайт?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости
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
          <h2 className="heading-md text-left md:text-center mb-8">Связанные услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/landing-page" className="card p-6 rounded-xl shadow-soft border border-secondary-300 dark:border-secondary-600 hover:shadow-lg hover:border-primary-500 transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Landing Page</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Одностраничные сайты для рекламы</p>
            </Link>
            <Link href="/online-store" className="card p-6 rounded-xl shadow-soft border border-secondary-300 dark:border-secondary-600 hover:shadow-lg hover:border-primary-500 transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Интернет-магазин</h3>
              <p className="text-secondary-600 dark:text-secondary-300">E-commerce с оплатой онлайн</p>
            </Link>
            <Link href="/seo-optimization" className="card p-6 rounded-xl shadow-soft border border-secondary-300 dark:border-secondary-600 hover:shadow-lg hover:border-primary-500 transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">SEO оптимизация</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Продвижение в поисковиках</p>
            </Link>
            <Link href="/blog" target="_blank" rel="noopener noreferrer" className="card p-6 rounded-xl shadow-soft border-2 border-primary-300 hover:shadow-lg hover:border-primary-500 transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Блог</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Статьи о создании сайтов</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
