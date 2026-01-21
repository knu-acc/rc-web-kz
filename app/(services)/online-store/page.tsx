import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel'
import { placeholderReviewImages } from '@/data/reviews'

export const metadata: Metadata = {
  title: 'Интернет-магазин в Алматы | E-commerce сайт 175-275 тыс ₸',
  description: 'Создание интернет-магазинов в Алматы с безопасной оплатой. E-commerce решения с удобной админкой и интеграцией платежных систем. Цена 175-275 тыс тенге.',
  keywords: ['интернет-магазин Алматы', 'e-commerce сайт', 'создание интернет-магазина', 'онлайн магазин Алматы'],
  openGraph: {
    title: 'Интернет-магазин в Алматы | E-commerce сайт 175-275 тыс ₸',
    description: 'Профессиональная разработка интернет-магазинов в Алматы',
    url: `${SITE_CONFIG.url}/online-store`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Интернет-магазин в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/online-store` },
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Безопасные платежи',
    description: 'Интеграция с Робокассой, Cloudpayments, PayPal и другими платёжными системами',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Удобная админка',
    description: 'Простое управление товарами, заказами и контентом без программирования',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Мобильная адаптация',
    description: 'Отлично работает на всех устройствах. Большинство покупок с мобильных',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
    description: 'Настройка для поисковых систем позволяет привлекать клиентов из Google и Яндекс',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', alt: 'Пример интернет-магазина - электроника' },
  { src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800', alt: 'Пример интернет-магазина - одежда' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Пример интернет-магазина - продукты' },
  { src: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800', alt: 'Пример интернет-магазина - косметика' },
  { src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800', alt: 'Пример интернет-магазина - книги' },
]

const paymentSystems = [
  { name: 'Робокасса', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200' },
  { name: 'Cloudpayments', logo: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=200' },
  { name: 'PayPal', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200' },
  { name: 'Kaspi.kz', logo: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=200' },
]

export default function OnlineStorePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Интернет-магазин',
    description: 'Разработка интернет-магазинов с оплатой онлайн в Алматы',
    price: '175000',
    priceCurrency: 'KZT',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Интернет-магазин', url: `${SITE_CONFIG.url}/online-store` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-white" />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Интернет-магазин в Алматы
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-900">
                <span className="block">E-commerce</span>
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">интернет-магазины</span>
                <span className="block text-secondary-700 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                  с безопасной оплатой
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-600 max-w-xl leading-relaxed">
                Создаём полнофункциональные интернет-магазины с безопасной оплатой. E-commerce решения с удобной админкой, 
                интеграцией платежных систем и простым управлением товарами. Идеально для <Link href="/corporate-site" className="text-emerald-600 hover:underline font-semibold">бизнеса</Link> любого масштаба.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать магазин
                </a>
                <Link href="/website-price" className="btn-secondary">
                  Узнать цены
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                    alt="Интернет-магазин разработка в Алматы"
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

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
              Примеры работ
            </span>
            <h2 className="heading-lg mb-6">
              Примеры наших <span className="gradient-text">интернет-магазинов</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Посмотрите примеры успешных e-commerce проектов. Больше работ в нашем <Link href="/portfolio" className="text-secondary-800 hover:underline font-semibold">портфолио</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              Функционал
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Возможности <span className="gradient-text">интернет-магазина</span>
            </h2>
            <p className="text-lg text-white/80">
              Полный набор функций для успешных продаж онлайн
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Systems */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Интеграция платёжных систем</h2>
            <p className="text-lg text-secondary-600">Подключаем все популярные способы оплаты</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {paymentSystems.map((system, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-secondary-50 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-xl bg-white mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={system.logo}
                    alt={system.name}
                    width={80}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="font-semibold text-secondary-900">{system.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Цены на интернет-магазин</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-secondary-800 mb-2">175-275 тыс ₸</div>
              <p className="text-secondary-600">Базовая стоимость интернет-магазина</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Входит в стоимость:</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span>Дизайн и вёрстка</span></li>
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span>Каталог товаров</span></li>
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span>Корзина и оформление заказа</span></li>
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span>Интеграция платёжных систем</span></li>
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span>Админ-панель управления</span></li>
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span><Link href="/seo-optimization" className="text-secondary-800 hover:underline">SEO-оптимизация</Link></span></li>
                  <li className="flex items-start gap-2"><span className="text-secondary-800">✓</span><span>Бесплатная поддержка</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Сроки:</h3>
                <p className="text-secondary-700 mb-4">10-15 рабочих дней от начала работы до запуска магазина.</p>
                <p className="text-sm text-secondary-500">
                  Включает создание дизайна, разработку, настройку платежей и обучение работе с админкой.
                </p>
              </div>
            </div>
            <div className="text-center">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">Заказать интернет-магазин</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы запустить интернет-магазин?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчёта стоимости вашего проекта
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
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600">Многостраничные решения</p>
            </Link>
            <Link href="/tilda-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Сайт на Tilda</h3>
              <p className="text-secondary-600">Быстрые решения</p>
            </Link>
            <Link href="/website-advertising" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Реклама сайта</h3>
              <p className="text-secondary-600">Настройка рекламы</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-800 transition-colors">Цены на сайты</h3>
              <p className="text-secondary-600">Стоимость разработки</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
