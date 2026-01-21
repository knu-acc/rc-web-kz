import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel'
import { placeholderReviewImages } from '@/data/reviews'

export const metadata: Metadata = {
  title: 'Веб-дизайн сайта в Алматы | Современный дизайн сайтов',
  description: 'Профессиональный веб-дизайн для сайтов в Алматы. Современные решения, адаптивный дизайн, UX/UI оптимизация. Создаём уникальный дизайн под ваш бренд.',
  keywords: ['веб-дизайн Алматы', 'дизайн сайта', 'web дизайн', 'дизайн сайта Алматы'],
  openGraph: {
    title: 'Веб-дизайн сайта в Алматы',
    description: 'Профессиональный дизайн для вашего сайта',
    url: `${SITE_CONFIG.url}/web-design`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Веб-дизайн сайта в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/web-design` },
}

const designStyles = [
  {
    title: 'Минимализм',
    description: 'Чистый и простой дизайн с акцентом на контент',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  },
  {
    title: 'Корпоративный',
    description: 'Серьёзный и профессиональный стиль для бизнеса',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  },
  {
    title: 'Креативный',
    description: 'Яркий и запоминающийся дизайн для творческих проектов',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
  },
]

const designFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI дизайн',
    description: 'Создание визуального интерфейса: цветовая схема, типографика, иконки, кнопки',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'UX оптимизация',
    description: 'Проектирование пользовательского опыта: удобная навигация, логичная структура',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Адаптивный дизайн',
    description: 'Дизайн для всех устройств: мобильные телефоны, планшеты, ноутбуки и десктопы',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'Брендинг',
    description: 'Интеграция вашего бренда в дизайн: использование фирменных цветов, логотипа',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'Пример веб-дизайна - минимализм' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Пример веб-дизайна - корпоративный' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Пример веб-дизайна - креативный' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Пример веб-дизайна - e-commerce' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Пример веб-дизайна - портфолио' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'Пример веб-дизайна - блог' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Пример веб-дизайна - landing' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Пример веб-дизайна - сервис' },
]

export default function WebDesignPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Веб-дизайн',
    description: 'Профессиональный дизайн сайтов в Алматы',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Веб-дизайн', url: `${SITE_CONFIG.url}/web-design` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with portfolio preview */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-white" />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                Веб-дизайн в Алматы
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#111827' }}>
                <span className="block" style={{ color: '#111827' }}>Современный</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">веб-дизайн</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2" style={{ color: '#374151' }}>
                  для вашего сайта
                </span>
              </h1>

              <p className="text-lg sm:text-xl max-w-xl leading-relaxed" style={{ color: '#4B5563' }}>
                Создаём уникальный дизайн для вашего сайта, который отражает ваш бренд и привлекает клиентов. 
                Современные тренды, удобный интерфейс, адаптивность для всех устройств. Посмотрите наши работы в <Link href="/portfolio" className="text-purple-600 hover:underline font-semibold">портфолио</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Заказать дизайн
                </a>
                <Link href="/portfolio" className="btn-secondary">
                  Портфолио
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Веб-дизайн сайта в Алматы"
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

      {/* Design Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Галерея дизайнов
            </span>
            <h2 className="heading-lg mb-6">
              Примеры наших <span className="gradient-text">дизайнов</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Разнообразные стили и подходы к дизайну. Больше работ в нашем <Link href="/portfolio" className="text-primary-600 hover:underline font-semibold">портфолио</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
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

      {/* Design Styles */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Стили дизайна
            </span>
            <h2 className="heading-lg mb-6">
              Стили <span className="gradient-text">веб-дизайна</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Выберите подходящий стиль для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designStyles.map((style, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-secondary-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{style.title}</h3>
                  <p className="text-secondary-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              Что включает
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Что включает <span className="gradient-text">веб-дизайн</span>
            </h2>
            <p className="text-lg text-white/80">
              Полный комплекс работ по созданию визуального образа вашего сайта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designFeatures.map((feature, index) => (
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

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Процесс работы дизайнера</h2>
            <p className="text-lg text-secondary-600">Как мы создаём дизайн для вашего сайта</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Изучение</h3>
              <p className="text-secondary-600 text-sm">Изучаем ваш бренд, целевую аудиторию и конкурентов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Концепция</h3>
              <p className="text-secondary-600 text-sm">Разрабатываем концепцию дизайна и создаём макеты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Согласование</h3>
              <p className="text-secondary-600 text-sm">Показываем вам макеты и вносим правки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Финализация</h3>
              <p className="text-secondary-600 text-sm">Подготавливаем финальные файлы для разработки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые заказали веб-дизайн."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы создать уникальный дизайн?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения дизайна вашего сайта
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
              <p className="text-secondary-600">С дизайном включён</p>
            </Link>
            <Link href="/corporate-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Корпоративный сайт</h3>
              <p className="text-secondary-600">С уникальным дизайном</p>
            </Link>
            <Link href="/online-store" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Интернет-магазин</h3>
              <p className="text-secondary-600">E-commerce дизайн</p>
            </Link>
            <Link href="/portfolio" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Портфолио</h3>
              <p className="text-secondary-600">Примеры наших работ</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
