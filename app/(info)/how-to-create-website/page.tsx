import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel'
import { placeholderReviewImages } from '@/data/reviews'

export const metadata: Metadata = {
  title: 'Как создать сайт | Пошаговая инструкция создания сайта',
  description: 'Пошаговая инструкция: как создать сайт самостоятельно или у специалиста. Сравнение конструкторов и кода.',
  keywords: ['как создать сайт', 'как сделать сайт', 'создание сайта инструкция', 'как создать сайт самому'],
  openGraph: {
    title: 'Как создать сайт | Пошаговая инструкция',
    description: 'Инструкция по созданию сайта',
    url: `${SITE_CONFIG.url}/how-to-create-website`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Как создать сайт',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/how-to-create-website` },
}

const methods = [
  {
    title: 'Конструктор сайтов (Tilda, Wix)',
    description: 'Самый простой способ создать сайт без знания программирования',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    pros: ['Быстрое создание (1-3 дня)', 'Не нужно знать программирование', 'Удобное управление контентом', 'Готовые шаблоны и блоки'],
    cons: ['Ограниченная функциональность', 'Зависимость от платформы', 'Меньше возможностей для SEO'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Чистое программирование (HTML, CSS, JS)',
    description: 'Создание сайта с нуля на языках программирования',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    pros: ['Полный контроль над сайтом', 'Неограниченная функциональность', 'Лучшая производительность', 'Оптимально для SEO'],
    cons: ['Требуются знания программирования', 'Дольше разработка', 'Выше стоимость при заказе'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Заказать у профессионала',
    description: 'Передайте создание сайта опытному разработчику',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
    pros: ['Профессиональный результат', 'Экономия времени', 'Уникальный дизайн', 'Техническая поддержка', 'SEO-оптимизация'],
    cons: [],
    gradient: 'from-emerald-500 to-teal-600',
  },
]

const steps = [
  {
    step: 1,
    title: 'Определение целей',
    description: 'Решите, для чего нужен сайт: продажи, информация, портфолио',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  },
  {
    step: 2,
    title: 'Выбор платформы',
    description: 'Конструктор или программирование — выберите подходящий вариант',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  },
  {
    step: 3,
    title: 'Дизайн и контент',
    description: 'Создайте дизайн и подготовьте тексты, изображения, контакты',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
  },
  {
    step: 4,
    title: 'Разработка',
    description: 'Соберите сайт в конструкторе или разработайте на чистом коде',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  },
  {
    step: 5,
    title: 'Публикация',
    description: 'Загрузите на хостинг, настройте домен, добавьте в поисковики',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  },
]

export default function HowToCreateWebsitePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Как создать сайт', url: `${SITE_CONFIG.url}/how-to-create-website` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with step-by-step process */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32">
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
                Инструкция
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Как создать</span>
                <span className="gradient-text">сайт</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  пошаговая инструкция
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Подробное руководство по созданию сайта: от выбора платформы до публикации. Узнайте, как создать сайт 
                самостоятельно или <Link href="/website-price" className="text-primary-300 hover:underline font-semibold">заказать у профессионала</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Помощь с созданием
                </a>
                <Link href="/free-website" className="btn-secondary">
                  Бесплатные способы
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Как создать сайт"
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

      {/* Comparison Methods */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Способы
            </span>
            <h2 className="heading-lg mb-6">
              Способы <span className="gradient-text">создания сайта</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Сравните разные подходы и выберите подходящий для вас
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {methods.map((method, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100">
                    <Image
                      src={method.image}
                      alt={method.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">{method.title}</h3>
                  <p className="text-secondary-600 mb-4">{method.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-emerald-600 mb-2">Плюсы:</p>
                      <ul className="space-y-1 text-sm text-secondary-700">
                        {method.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {method.cons.length > 0 && (
                      <div>
                        <p className="font-semibold text-red-600 mb-2">Минусы:</p>
                        <ul className="space-y-1 text-sm text-secondary-700">
                          {method.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Steps */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Этапы создания сайта</h2>
            <p className="text-lg text-secondary-600">Визуальная инструкция с примерами</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100 mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 20vw"
                      unoptimized
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Сравнение способов</h2>
            <p className="text-lg text-secondary-600">Сравнительная таблица разных подходов</p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary-50">
                  <th className="border border-secondary-200 p-4 text-left font-bold text-secondary-900">Критерий</th>
                  <th className="border border-secondary-200 p-4 text-center font-bold text-secondary-900">Конструктор</th>
                  <th className="border border-secondary-200 p-4 text-center font-bold text-secondary-900">Программирование</th>
                  <th className="border border-secondary-200 p-4 text-center font-bold text-secondary-900">Заказать</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-secondary-200 p-4 text-secondary-700">Скорость</td>
                  <td className="border border-secondary-200 p-4 text-center">Быстро</td>
                  <td className="border border-secondary-200 p-4 text-center">Медленно</td>
                  <td className="border border-secondary-200 p-4 text-center">Быстро</td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="border border-secondary-200 p-4 text-secondary-700">Стоимость</td>
                  <td className="border border-secondary-200 p-4 text-center">Низкая</td>
                  <td className="border border-secondary-200 p-4 text-center">Средняя</td>
                  <td className="border border-secondary-200 p-4 text-center">Высокая</td>
                </tr>
                <tr>
                  <td className="border border-secondary-200 p-4 text-secondary-700">Гибкость</td>
                  <td className="border border-secondary-200 p-4 text-center">Ограничена</td>
                  <td className="border border-secondary-200 p-4 text-center">Полная</td>
                  <td className="border border-secondary-200 p-4 text-center">Полная</td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="border border-secondary-200 p-4 text-secondary-700">SEO</td>
                  <td className="border border-secondary-200 p-4 text-center">Средне</td>
                  <td className="border border-secondary-200 p-4 text-center">Отлично</td>
                  <td className="border border-secondary-200 p-4 text-center">Отлично</td>
                </tr>
                <tr>
                  <td className="border border-secondary-200 p-4 text-secondary-700">Поддержка</td>
                  <td className="border border-secondary-200 p-4 text-center">Базовая</td>
                  <td className="border border-secondary-200 p-4 text-center">Самостоятельно</td>
                  <td className="border border-secondary-200 p-4 text-center">Профессиональная</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которые создали сайт вместе с нами."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Нужна помощь с созданием сайта?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Мы поможем создать профессиональный сайт для вашего бизнеса. Консультация бесплатна.
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
          <h2 className="heading-md text-center mb-8">Полезные статьи</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/free-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Создать сайт бесплатно</h3>
              <p className="text-secondary-600">Бесплатные способы</p>
            </Link>
            <Link href="/publish-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Как опубликовать сайт</h3>
              <p className="text-secondary-600">Инструкция по публикации</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Цены на сайты</h3>
              <p className="text-secondary-600">Стоимость разработки</p>
            </Link>
            <Link href="/tilda-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Сайт на Tilda</h3>
              <p className="text-secondary-600">Быстрое решение</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
