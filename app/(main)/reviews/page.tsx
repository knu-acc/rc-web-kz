import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel'
import { ReviewsGallery } from '@/components/reviews/ReviewsGallery'

export const metadata: Metadata = {
  title: 'Отзывы о RC-WEB.KZ | 120+ клиентов о создании сайтов в Алматы',
  description: 'Отзывы клиентов о RC-WEB.KZ: 120+ реальных отзывов о создании сайтов в Алматы. Реальные кейсы, мнения клиентов, рейтинг 4.9/5. Читать отзывы.',
  keywords: ['отзывы rc-web', 'отзывы создание сайтов Алматы', 'отзывы веб-разработчик'],
  openGraph: {
    title: 'Отзывы клиентов | RC-WEB',
    description: 'Отзывы о создании сайтов в Алматы',
    url: `${SITE_CONFIG.url}/reviews`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Отзывы клиентов RC-WEB',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/reviews` },
}

export default function ReviewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Отзывы', url: `${SITE_CONFIG.url}/reviews` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with rating */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Отзывы клиентов
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Более 120</span>
                <span className="gradient-text">положительных отзывов</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  довольные клиенты
                </span>
              </h1>

              <div className="flex items-center justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={`hero-star-${star}`} className="w-10 h-10 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-3xl font-bold text-white mb-2">Средняя оценка: 5.0 из 5.0</p>
              <p className="text-white/70 text-lg">На основе 120+ отзывов</p>

              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                За всё время работы было выполнено более 120 проектов, и каждый отзыв — положительный. 
                Наши клиенты довольны результатом и рекомендуют нас своим знакомым. Посмотрите наши работы в <Link href="/portfolio" className="text-primary-300 hover:underline font-semibold">портфолио</Link>.
              </p>

              <div className="flex flex-wrap justify-center gap-5">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark inline-flex items-center gap-2">
                  Заказать сайт
                </a>
                <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2">
                  Портфолио
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">120+</div>
                  <p className="text-sm text-white/70">Отзывов</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">5.0</div>
                  <p className="text-sm text-white/70">Рейтинг</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <p className="text-sm text-white/70">Довольных</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Images Gallery */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Скриншоты отзывов
            </span>
            <h2 className="heading-lg mb-4">
              Реальные отзывы <span className="gradient-text">наших клиентов</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Скриншоты отзывов из мессенджеров и социальных сетей от наших довольных клиентов
            </p>
          </div>

          <ReviewsGallery reviews={placeholderReviewImages} />
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6 text-white">
              Почему нам <span className="gradient-text">доверяют</span>
            </h2>
            <p className="text-lg text-white/80">
              Наши клиенты возвращаются и рекомендуют нас своим партнёрам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Гарантия качества</h3>
              <p className="text-white/70">Каждый проект мы доводим до идеала. Вносим правки до полного удовлетворения клиента.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Соблюдаем сроки</h3>
              <p className="text-white/70">Всегда сдаём проекты вовремя. Если срок критичен — сообщаем заранее.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Поддержка 24/7</h3>
              <p className="text-white/70">Всегда на связи в WhatsApp. Быстро отвечаем и помогаем с любыми вопросами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-violet-700 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom text-center py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6 text-white">Станьте нашим клиентом</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Присоединяйтесь к более чем 120 довольным клиентам. Создадим для вас профессиональный сайт 
              с гарантией качества и поддержкой.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                className="group min-h-[56px] inline-flex items-center justify-center gap-3 bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Заказать сайт
              </a>
              <Link 
                href="/portfolio" 
                className="group min-h-[56px] inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg border border-white/20 hover:border-white/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Посмотреть портфолио
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Связанные страницы</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/portfolio" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Портфолио</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Примеры наших работ</p>
            </Link>
            <Link href="/why-choose-us" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Почему мы</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Наши преимущества</p>
            </Link>
            <Link href="/contact" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Контакты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Свяжитесь с нами</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Цены</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
