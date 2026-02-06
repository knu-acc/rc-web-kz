import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Сайт на Tilda в Алматы | Создание сайта на Тильде от 120 тыс ₸ и выше | RC-WEB',
  description: 'Профессиональное создание сайтов на конструкторе Tilda в Алматы. Быстро, красиво, с возможностью самостоятельного редактирования. Landing page, интернет-магазины, портфолио на Tilda. Срок 2-5 дней.',
  keywords: [
    'сайт на tilda Алматы',
    'создание сайта на тильде',
    'tilda разработка',
    'тильда сайт под ключ',
    'конструктор tilda',
    'сайт на конструкторе Алматы',
    'tilda интернет-магазин',
    'landing page tilda',
  ],
  openGraph: {
    title: 'Сайт на Tilda в Алматы | Создание сайта на Тильде от 120 тыс ₸ и выше',
    description: 'Профессиональное создание сайтов на конструкторе Tilda в Алматы. Быстро и красиво.',
    url: `${SITE_CONFIG.url}/tilda-site`,
    images: [{ url: `${SITE_CONFIG.url}/img/slider.png`, width: 1200, height: 630, alt: 'Сайт на Tilda разработка в Алматы' }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/tilda-site`,
  },
}

const faqItems = [
  {
    id: '1',
    question: 'Что такое Tilda и почему её выбирают?',
    answer: 'Tilda — это визуальный конструктор сайтов с красивыми готовыми блоками. Её выбирают за простоту редактирования, современный дизайн и возможность самостоятельно вносить изменения без программиста. Идеально для малого бизнеса и стартапов.',
  },
  {
    id: '2',
    question: 'Сколько стоит сайт на Tilda?',
    answer: 'Стоимость разработки сайта на Tilda начинается от 120 тыс тенге и выше. Цена зависит от количества страниц, сложности дизайна и дополнительного функционала. В стоимость входит настройка всех блоков, адаптация под мобильные и базовая SEO-оптимизация.',
  },
  {
    id: '3',
    question: 'Могу ли я сам редактировать сайт на Tilda?',
    answer: 'Да, это главное преимущество Tilda! После создания сайта вы получите доступ к админке и сможете самостоятельно редактировать тексты, менять изображения, добавлять блоки. Мы проводим обучение по работе с редактором.',
  },
  {
    id: '4',
    question: 'Сколько времени занимает создание сайта на Tilda?',
    answer: 'Простой сайт на 1-3 страницы создаётся за 2-3 дня. Более сложные проекты с множеством страниц и интеграциями занимают 5-7 дней. Tilda позволяет работать быстрее благодаря готовым блокам.',
  },
  {
    id: '5',
    question: 'Можно ли сделать интернет-магазин на Tilda?',
    answer: 'Да, Tilda имеет встроенный функционал для создания интернет-магазинов: каталог товаров, корзина, оформление заказа, интеграция с платёжными системами. Для небольших магазинов до 100-200 товаров это отличное решение.',
  },
  {
    id: '6',
    question: 'Нужно ли платить за подписку Tilda?',
    answer: 'Да, для работы сайта нужна подписка Tilda. Тариф Personal стоит около 15 000 тг/год и подходит для большинства проектов. Тариф Business для интернет-магазинов — около 25 000 тг/год. Мы поможем выбрать оптимальный тариф.',
  },
  {
    id: '7',
    question: 'Чем Tilda отличается от обычного сайта?',
    answer: 'Сайт на Tilda использует готовые блоки конструктора, что ускоряет разработку и снижает стоимость. Обычный сайт разрабатывается с нуля, даёт больше свободы в дизайне, но стоит дороже. Для SEO-продвижения обычный сайт предпочтительнее.',
  },
]

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Быстрая разработка',
    description: 'Готовый сайт за 2-5 дней благодаря готовым блокам. Быстрее любого другого способа создания сайта.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Простое редактирование',
    description: 'Редактируйте сайт самостоятельно без программиста. Меняйте тексты, изображения, добавляйте блоки.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Красивый дизайн',
    description: '450+ готовых блоков с современным дизайном. Ваш сайт будет выглядеть профессионально и стильно.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Адаптивность',
    description: 'Автоматическая адаптация под мобильные устройства. Сайт отлично выглядит на любом экране.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Выгодная цена',
    description: 'Дешевле разработки с нуля. Идеальное соотношение цены и качества для малого бизнеса.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Встроенная аналитика',
    description: 'Встроенные инструменты аналитики и интеграция с Google Analytics, Яндекс.Метрикой.',
    gradient: 'from-indigo-500 to-blue-600',
  },
]

const siteTypes = [
  {
    title: 'Landing Page',
    description: 'Одностраничный сайт для рекламы и привлечения клиентов',
    price: 'от 120 тыс ₸ и выше',
    duration: '2-3 дня',
    features: ['1 страница', 'До 15 блоков', 'Форма заявки', 'Мобильная версия'],
  },
  {
    title: 'Сайт-визитка',
    description: 'Небольшой сайт с основной информацией о компании',
    price: 'от 120 тыс ₸ и выше',
    duration: '3-4 дня',
    features: ['3-5 страниц', 'О компании', 'Услуги', 'Контакты'],
    popular: true,
  },
  {
    title: 'Интернет-магазин',
    description: 'Магазин с каталогом товаров и корзиной',
    price: 'от 120 тыс ₸ и выше',
    duration: '5-7 дней',
    features: ['Каталог товаров', 'Корзина', 'Оплата онлайн', 'До 100 товаров'],
  },
]

const tildaBlocks = [
  { name: 'Hero-секции', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', alt: 'Блок Tilda - Hero секция' },
  { name: 'Галереи', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', alt: 'Блок Tilda - Галерея' },
  { name: 'Формы', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400', alt: 'Блок Tilda - Формы' },
  { name: 'Отзывы', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400', alt: 'Блок Tilda - Отзывы' },
]

const processSteps = [
  {
    step: '01',
    title: 'Бриф и анализ',
    description: 'Изучаем вашу нишу, конкурентов, целевую аудиторию. Составляем техническое задание и структуру будущего сайта.',
  },
  {
    step: '02',
    title: 'Прототип',
    description: 'Создаём черновую структуру страниц, определяем расположение блоков, продумываем путь пользователя.',
  },
  {
    step: '03',
    title: 'Дизайн и сборка',
    description: 'Подбираем блоки Tilda, настраиваем цветовую схему под ваш бренд, добавляем контент и изображения.',
  },
  {
    step: '04',
    title: 'Настройка и запуск',
    description: 'Подключаем домен, настраиваем формы, аналитику, SEO. Проводим тестирование и обучение.',
  },
]

export default function TildaSitePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Сайт на Tilda',
    description: 'Создание сайтов на конструкторе Tilda в Алматы',
    price: '160000',
    priceCurrency: 'KZT',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Сайт на Tilda', url: `${SITE_CONFIG.url}/tilda-site` },
  ])
  const faqSchema = generateFAQPageSchema(faqItems)

  // Get reviews for carousel
  const carouselReviews = placeholderReviewImages.slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                </span>
                Сайт на Tilda в Алматы
              </div>

              <h1 className="heading-xl text-secondary-900 dark:text-white">
                <span className="block">Красивые сайты</span>
                <span className="gradient-text">на конструкторе Tilda</span>
                <span className="block text-secondary-700 dark:text-secondary-300 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                  быстро и выгодно
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl leading-relaxed">
                Создаём профессиональные сайты на Tilda с возможностью самостоятельного редактирования. 
                Быстрая разработка, современный дизайн, удобная админка. Идеально для малого бизнеса и стартапов.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark text-lg px-8 py-3">
                  Заказать сайт
                </a>
                <Link href="/portfolio" className="btn-secondary text-lg px-8 py-3">
                  Примеры работ
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="group bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">2-5</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">Дней</p>
                </div>
                <div className="group bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">450+</div>
                  <p className="text-sm font-semibold text-amber-700">Блоков</p>
                </div>
                <div className="group bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md rounded-xl p-5 border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">Сами</div>
                  <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">Редактируете</p>
                </div>
              </div>
            </div>

            {/* Right: Featured image */}
            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
                    alt="Сайт на Tilda разработка в Алматы - пример работы"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent z-10" />
                </div>

                {/* Floating card: Tilda */}
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl animate-float relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 dark:text-white">Tilda Publishing</p>
                      <p className="text-sm text-secondary-500">Конструктор сайтов</p>
                    </div>
                  </div>
                </div>

                {/* Floating card: Edit */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl animate-float relative z-10" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 dark:text-white">Редактирование</p>
                      <p className="text-sm text-secondary-500">Без программиста</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilda Blocks Gallery */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Возможности Tilda
            </span>
            <h2 className="heading-lg mb-6">
              450+ готовых <span className="gradient-text">блоков</span> для вашего сайта
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Tilda предлагает сотни готовых блоков с красивым дизайном. Мы собираем из них уникальный сайт 
              специально для вашего бизнеса. Узнайте больше о <Link href="/blog/kak-vybrat-cms" className="text-primary-600 hover:underline font-semibold">выборе CMS</Link> и сравнении Tilda с другими платформами в нашем блоге.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tildaBlocks.map((block, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-semibold text-lg">{block.name}</span>
                </div>
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
              Почему выбирают <span className="gradient-text">Tilda</span>
            </h2>
            <p className="text-lg text-white/80">
              Конструктор Tilda идеально подходит для быстрого запуска сайта с минимальными затратами. 
              Вот главные преимущества платформы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-primary-500/50 shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} text-white flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{advantage.title}</h3>
                <p className="text-white/70 leading-relaxed relative z-10">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Tilda */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
                О платформе
              </span>
              <h2 className="heading-lg mb-6">Что такое Tilda?</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                <strong>Tilda Publishing</strong> — это визуальный конструктор сайтов, который позволяет создавать 
                красивые современные сайты из готовых блоков. В отличие от{' '}
                <Link href="/corporate-site" className="text-primary-600 hover:underline font-semibold">обычной разработки</Link>, 
                Tilda не требует программирования и позволяет самостоятельно редактировать контент.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                Мы профессионально настраиваем Tilda-сайты: подбираем блоки, адаптируем дизайн под ваш бренд, 
                настраиваем формы и интеграции. После создания вы сможете самостоятельно вносить изменения.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">450+ готовых блоков с современным дизайном</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Простое редактирование без программиста</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Автоматическая адаптация под мобильные</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-secondary-700 dark:text-secondary-300">Встроенные формы, CRM, e-commerce функционал</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Конструктор сайтов Tilda - пример редактора"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
                loading="lazy"
                unoptimized
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold">от 120 тыс ₸</div>
                <p className="text-sm text-white/80">от стоимости</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Процесс работы
            </span>
            <h2 className="heading-lg mb-6">
              Как мы создаём <span className="gradient-text">сайты на Tilda</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Прозрачный процесс разработки с чёткими этапами и сроками. Вы всегда в курсе, на каком этапе находится ваш проект.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Тарифы
            </span>
            <h2 className="heading-lg mb-6">
              Цены на <span className="gradient-text">сайты на Tilda</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Выберите подходящий тип сайта. Все варианты включают адаптивный дизайн и обучение по работе с Tilda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteTypes.map((type, index) => (
              <div
                key={index}
                className={`relative rounded-3xl bg-white dark:bg-secondary-900 p-8 transition-all duration-300 hover:-translate-y-1 ${
                  type.popular
                    ? 'border-2 border-primary-500 shadow-xl'
                    : 'border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:shadow-lg'
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">{type.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">{type.description}</p>
                <div className="text-3xl font-bold text-primary-600 mb-2">{type.price}</div>
                <p className="text-sm text-secondary-500 mb-6">Срок: {type.duration}</p>
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-secondary-600 dark:text-secondary-300">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  className={`w-full ${type.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Заказать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tilda vs Custom Development */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
              Сравнение
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Tilda vs <span className="gradient-text">обычная разработка</span>
            </h2>
            <p className="text-lg text-white/80">
              Сравните два подхода к созданию сайта и выберите оптимальный для вашего бизнеса.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-secondary-800 p-8 border border-secondary-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-lg">T</span>
                Сайт на Tilda
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Готов за 2-5 дней</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Стоимость от 120 тыс ₸ и выше</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Самостоятельное редактирование</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-white/80">Ограниченные возможности SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-white/80">Требуется подписка Tilda</span>
                </li>
              </ul>
              <div className="mt-8">
                <span className="text-sm text-white/60">Идеально для:</span>
                <p className="text-white font-medium">Малый бизнес, стартапы, быстрый запуск</p>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary-800 p-8 border border-secondary-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Обычная разработка
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Полная свобода в дизайне</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Максимальная SEO-оптимизация</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Любой функционал</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-white/80">Разработка от 7 дней</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-white/80">Стоимость 135-195 тыс ₸</span>
                </li>
              </ul>
              <div className="mt-8">
                <span className="text-sm text-white/60">Идеально для:</span>
                <p className="text-white font-medium">Средний бизнес, уникальные проекты</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">Не знаете, что выбрать?</p>
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp text-lg px-8 py-3">
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={carouselReviews}
        title="Отзывы наших клиентов"
        subtitle="Посмотрите, что говорят клиенты о наших сайтах на Tilda."
      />

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="heading-lg">Часто задаваемые вопросы</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <article key={item.id} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">{item.question}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Готовы создать сайт на Tilda?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации. Поможем выбрать оптимальный вариант для вашего бизнеса.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg inline-flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Связанные услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/landing-page" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Landing Page</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Одностраничные сайты</p>
            </Link>
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Разработка с нуля</p>
            </Link>
            <Link href="/online-store" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Интернет-магазин</h3>
              <p className="text-secondary-600 dark:text-secondary-300">E-commerce решения</p>
            </Link>
            <Link href="/web-design" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Веб-дизайн</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Дизайн сайтов</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
