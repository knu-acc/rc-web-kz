import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Сайт на Tilda в Алматы | Конструктор сайтов от 58 000 ₸',
  description: 'Создание сайтов на конструкторе Tilda в Алматы. Быстрые решения с удобным управлением. Современные блоки, адаптивный дизайн, SEO-оптимизация. Цена от 58 000 тенге.',
  keywords: ['tilda сайт Алматы', 'конструктор сайтов', 'создание сайта на тильде', 'tilda Алматы цена'],
  openGraph: {
    title: 'Сайт на Tilda в Алматы | Конструктор сайтов от 58 000 ₸',
    description: 'Быстрое создание сайтов на платформе Tilda в Алматы',
    url: `${SITE_CONFIG.url}/tilda-site`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/tilda-site` },
}

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Быстрая разработка',
    description: 'Готовый сайт за 3-5 дней благодаря готовым блокам и шаблонам конструктора Tilda',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Простое управление',
    description: 'Вы сможете самостоятельно редактировать контент, добавлять товары и обновлять информацию без программиста',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Современный дизайн',
    description: 'Готовые блоки Tilda позволяют создавать красивые и современные сайты без дизайнера',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Адаптивность',
    description: 'Все сайты на Tilda автоматически адаптируются под мобильные устройства и планшеты',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const tildaBlocks = [
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'Блок Tilda - Hero секция' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Блок Tilda - Галерея' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Блок Tilda - Форма' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Блок Tilda - Отзывы' },
]

export default function TildaSitePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Сайт на Tilda',
    description: 'Создание сайтов на конструкторе Tilda в Алматы',
    price: '58000',
    priceCurrency: 'KZT',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Сайт на Tilda', url: `${SITE_CONFIG.url}/tilda-site` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-32">
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
                Сайт на Tilda в Алматы
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Быстрые решения</span>
                <span className="gradient-text">на конструкторе Tilda</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  готовый сайт за несколько дней
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Создаём сайты на популярном конструкторе Tilda. Идеальное решение для быстрого запуска проекта 
                с современным дизайном и удобным управлением. Отлично подходит для <Link href="/landing-page" className="text-primary-300 hover:underline font-semibold">лендингов</Link> и небольших сайтов.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-primary">
                  Заказать сайт на Tilda
                </a>
                <Link href="/how-to-create-website" className="btn-secondary">
                  Как создать сайт
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/30 animate-spin" style={{ animationDuration: '30s' }} />
              </div>
              
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Сайт на Tilda разработка в Алматы"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Bento Grid */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Почему выбирают <span className="gradient-text">Tilda</span>
            </h2>
            <p className="text-lg text-white/80">
              Конструктор Tilda — идеальное решение для быстрого создания красивых сайтов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} text-white flex items-center justify-center mb-5`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-white/70 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tilda Blocks Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Примеры блоков
            </span>
            <h2 className="heading-lg mb-6">
              Готовые блоки <span className="gradient-text">Tilda</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Используем готовые блоки конструктора для быстрой сборки сайта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tildaBlocks.map((block, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Процесс создания сайта на Tilda</h2>
            <p className="text-lg text-secondary-600">Быстрая разработка благодаря готовым блокам</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Обсуждение</h3>
              <p className="text-secondary-600 text-sm">Определяем цели и структуру сайта</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Сборка</h3>
              <p className="text-secondary-600 text-sm">Собираем сайт из готовых блоков Tilda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Настройка</h3>
              <p className="text-secondary-600 text-sm">Настраиваем домен, хостинг и SEO</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Обучение</h3>
              <p className="text-secondary-600 text-sm">Обучаем работе с сайтом</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Цены на сайт на Tilda</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-secondary-50 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">от 58 000 ₸</div>
              <p className="text-secondary-600">Базовая стоимость сайта на Tilda</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Входит в стоимость:</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start gap-2"><span className="text-primary-600">✓</span><span>Дизайн и сборка на Tilda</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-600">✓</span><span>Настройка домена и хостинга</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-600">✓</span><span><Link href="/seo-optimization" className="text-primary-600 hover:underline">SEO-оптимизация</Link></span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-600">✓</span><span>Обучение работе с сайтом</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-600">✓</span><span>Бесплатная поддержка</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Сроки:</h3>
                <p className="text-secondary-700 mb-4">3-5 рабочих дней от начала работы до публикации.</p>
                <p className="text-sm text-secondary-500">
                  Быстрая разработка благодаря готовым блокам конструктора Tilda.
                </p>
              </div>
            </div>
            <div className="text-center">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-primary">Заказать сайт на Tilda</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы создать сайт на Tilda?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и быстрого запуска вашего проекта
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
            <Link href="/landing-page" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Landing Page</h3>
              <p className="text-secondary-600">Одностраничные сайты</p>
            </Link>
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600">Многостраничные решения</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Цены на сайты</h3>
              <p className="text-secondary-600">Стоимость разработки</p>
            </Link>
            <Link href="/how-to-create-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Как создать сайт</h3>
              <p className="text-secondary-600">Инструкция по созданию</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
