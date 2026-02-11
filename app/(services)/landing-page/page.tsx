import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Создание Landing Page в Алматы от 85 000₸ | Лендинг под ключ - RC-WEB.KZ',
  description: 'Разработка продающих лендингов в Алматы от 85 000₸. Высокая конверсия, современный дизайн, SEO-оптимизация. ✓ Бесплатная техподдержка ✓ Срок 3-5 дней. Заказать создание landing page.',
  keywords: [
    'landing page Алматы',
    'одностраничный сайт Алматы',
    'лендинг Алматы цена',
    'создание landing page',
    'заказать лендинг Алматы',
  ],
  openGraph: {
    title: 'Landing Page в Алматы | Одностраничный сайт 85-135 тыс ₸',
    description: 'Профессиональная разработка Landing Page в Алматы. Продающие одностраничники с высокой конверсией.',
    url: `${SITE_CONFIG.url}/landing-page`,
    images: [{ url: `${SITE_CONFIG.url}/img/slider.png`, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/landing-page`,
  },
}

const faqItems = [
  {
    id: '1',
    question: 'Сколько стоит создать Landing Page в Алматы?',
    answer: 'Стоимость разработки Landing Page составляет 85-135 тыс тенге. Финальная цена зависит от сложности дизайна, количества блоков, интеграций и дополнительных функций. Мы предлагаем прозрачное ценообразование без скрытых платежей.',
  },
  {
    id: '2',
    question: 'Сколько времени занимает разработка Landing Page?',
    answer: 'Средний срок разработки одностраничного сайта составляет 3-5 рабочих дней. Это включает создание дизайна, верстку, настройку форм обратной связи и базовую SEO-оптимизацию.',
  },
  {
    id: '3',
    question: 'Подходит ли Landing Page для SEO-продвижения?',
    answer: 'Landing Page отлично подходит для контекстной рекламы в Google и Яндекс. Для органического SEO-продвижения лучше выбрать многостраничный сайт, который позволяет создавать больше контента и внутренних ссылок.',
  },
]

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Высокая конверсия',
    description: 'До 15-25% конверсии при правильной настройке и <Link href="/website-advertising" className="text-primary-300 hover:underline">настройке рекламы</Link>',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Быстрая разработка',
    description: 'Готовый сайт за 3-5 дней от начала работы до публикации',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Мобильная адаптация',
    description: 'Идеальное отображение на всех устройствах: телефоны, планшеты, компьютеры',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Безопасность',
    description: 'SSL сертификат, защита данных и регулярные бэкапы',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800', alt: 'Пример Landing Page - бизнес' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', alt: 'Пример Landing Page - стартап' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800', alt: 'Пример Landing Page - e-commerce' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', alt: 'Пример Landing Page - услуги' },
]

export default function LandingPagePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Landing Page',
    description: 'Профессиональная разработка одностраничных сайтов в Алматы',
    price: '85000',
    priceCurrency: 'KZT',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Landing Page', url: `${SITE_CONFIG.url}/landing-page` },
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

      {/* Hero Section with floating cards */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                Landing Page в Алматы
              </div>

              <h1 className="heading-xl text-secondary-900 dark:text-white">
                <span className="block">Продающие</span>
                <span className="gradient-text">одностраничники</span>
                <span className="block text-secondary-700 dark:text-secondary-300 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                  для вашего бизнеса
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl leading-relaxed">
                Создаём высококонверсионные Landing Page для вашего бизнеса. Идеальное решение для <Link href="/website-advertising" className="text-primary-600 hover:underline font-semibold">Google-рекламы</Link>,
                запуска новых продуктов и увеличения продаж. Современный дизайн, быстрая загрузка, мобильная адаптация.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать Landing Page
                </a>
                <Link href="/website-price" className="btn-secondary">
                  Узнать цены
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="group bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-1">15-25%</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-200">Конверсия</p>
                </div>
                <div className="group bg-white/90 dark:bg-secondary-800/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-1">3-5 дней</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-200">Срок разработки</p>
                </div>
              </div>
            </div>

            {/* Right: Featured image with floating cards */}
            <div className="relative lg:h-[600px] animate-in">
              {/* Decorative floating lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/30 animate-spin" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-8 rounded-full border-2 border-dashed border-violet-300/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              </div>

              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Landing Page разработка в Алматы"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent z-10" />
                </div>

                {/* Floating card: Конверсия */}
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl animate-float relative z-10 hidden sm:block">
                  <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-dashed border-primary-300/40 rounded-full animate-float pointer-events-none" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 dark:text-white">Высокая конверсия</p>
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">до 25%</p>
                    </div>
                  </div>
                </div>

                {/* Floating card: Быстро */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl animate-float relative z-10 hidden sm:block" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 dark:text-white">Быстрая разработка</p>
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">3-5 дней</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Примеры работ
            </span>
            <h2 className="heading-lg mb-6">
              Примеры наших <span className="gradient-text">Landing Page</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Посмотрите примеры успешных лендингов, которые мы создали для наших клиентов.
              Больше работ в нашем <Link href="/portfolio" className="text-secondary-800 dark:text-secondary-200 hover:underline font-semibold">портфолио</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div key={img.alt} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100 dark:bg-secondary-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bento Grid */}
      <section className="section bg-secondary-900 dark:bg-secondary-950 text-white relative">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Почему выбирают <span className="gradient-text">Landing Page</span>
            </h2>
            <p className="text-lg text-white/80">
              Одностраничные сайты идеально подходят для рекламных кампаний и быстрого запуска проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-primary-500/50 shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed relative z-10">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Landing Page */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Что такое Landing Page?</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                Landing Page (лендинг) — это одностраничный сайт, созданный специально для достижения одной цели:
                конверсии посетителя в клиента. В отличие от <Link href="/corporate-site" className="text-primary-600 hover:underline font-semibold">многостраничных сайтов</Link>, лендинг фокусируется на конкретном
                предложении и ведёт пользователя к одному действию — заказу, звонку или заявке. Подробнее о том, <Link href="/blog/kak-sozdat-sajt-almaty-2026" className="text-primary-600 hover:underline font-semibold">как создать сайт в Алматы</Link>, читайте в нашем блоге.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                Такие сайты особенно эффективны для <Link href="/website-advertising" className="text-primary-600 hover:underline font-semibold">контекстной рекламы</Link> в Google и Яндекс, так как пользователь сразу
                попадает на релевантную страницу с нужной информацией, без необходимости искать её на сайте. Для долгосрочного продвижения также рекомендуем <Link href="/seo-optimization" className="text-primary-600 hover:underline font-semibold">SEO-оптимизацию</Link> и <Link href="/blog/landing-page-vs-korporativnyj-sajt" className="text-primary-600 hover:underline font-semibold">выбор между Landing Page и корпоративным сайтом</Link>.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Высокая конверсия — до 15-25% при правильной настройке</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Быстрая разработка — готовый сайт за 3-5 дней</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Оптимизация под мобильные устройства</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
                alt="Landing Page разработка в Алматы"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Цены на Landing Page в Алматы</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white dark:bg-secondary-950 rounded-2xl shadow-lg p-8">
            <div className="text-left md:text-center mb-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">85-135 тыс ₸</div>
              <p className="text-secondary-600 dark:text-secondary-300">Базовая стоимость Landing Page</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Что входит в стоимость:</h3>
                <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Уникальный дизайн под ваш бренд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Адаптивная вёрстка (мобильные, планшеты, ПК)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Формы обратной связи и интеграция с мессенджерами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Базовая <Link href="/seo-optimization" className="text-primary-600 hover:underline">SEO-оптимизация</Link></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Бесплатная поддержка на начальном этапе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Обучающее видео по управлению сайтом</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Сроки разработки:</h3>
                <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Обсуждение проекта и ТЗ: 1 день</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Создание дизайна: 1-2 дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Вёрстка и программирование: 1-2 дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Тестирование и запуск: 1 день</span>
                  </li>
                </ul>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-4">
                  Итого: 3-5 рабочих дней от начала работы до публикации сайта
                </p>
              </div>
            </div>
            <div className="text-left md:text-center">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                Заказать Landing Page
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Как мы создаём Landing Page</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Пошаговый процесс разработки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-left md:text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-200">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Анализ и планирование</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Изучаем ваш бизнес, целевую аудиторию и конкурентов. Определяем ключевые преимущества
                и формируем уникальное торговое предложение.
              </p>
            </div>
            <div className="text-left md:text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-300">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Дизайн и вёрстка</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Создаём уникальный дизайн, который отражает ваш бренд и ведёт пользователя к цели.
                Разрабатываем адаптивную вёрстку для всех устройств.
              </p>
            </div>
            <div className="text-left md:text-center">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-xl font-bold text-secondary-700 dark:text-secondary-300">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Запуск и оптимизация</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Публикуем сайт, настраиваем аналитику и проводим тестирование. Обеспечиваем быструю
                загрузку и корректную работу на всех устройствах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-left md:text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-secondary-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {item.id === '3' ? (
                      <>
                        {item.answer.split('многостраничный сайт')[0]}
                        <Link href="/corporate-site" className="text-primary-600 hover:underline font-semibold">многостраничный сайт</Link>
                        {item.answer.split('многостраничный сайт')[1]}
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые заказали Landing Page."
      />

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-left md:text-center">
          <h2 className="heading-lg mb-4 text-white">Готовы создать свой Landing Page?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости вашего проекта
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg inline-flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg">
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Связанные услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Многостраничные сайты для бизнеса</p>
            </Link>
            <Link href="/website-advertising" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Реклама сайта</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Настройка Google и Яндекс рекламы</p>
            </Link>
            <Link href="/seo-optimization" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">SEO-оптимизация</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Продвижение в поисковых системах</p>
            </Link>
            <Link href="/blog" className="card p-6 hover:shadow-lg transition-all group border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Блог</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Гайды и статьи о создании сайтов</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
