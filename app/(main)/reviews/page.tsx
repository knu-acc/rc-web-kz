import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'
import { ReviewsGallery } from '@/components/reviews/ReviewsGallery'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

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

      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Отзывы', href: '/reviews' }]} />

      {/* Hero */}
      <section className="bg-secondary-900 text-white pt-16 pb-10">
        <div className="container-custom max-w-4xl text-left md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Отзывы клиентов
          </div>

          <h1 className="heading-xl text-white mb-4">
            Более 120 положительных отзывов
          </h1>

          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={`hero-star-${star}`} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-semibold text-white">5.0 из 5.0</span>
            <span className="text-white/50 text-sm ml-1">· 120+ отзывов</span>
          </div>

          <p className="text-base text-white/80 max-w-2xl mx-auto mb-6">
            Выполнено более 120 проектов, каждый отзыв — положительный. Работы в <Link href="/portfolio" className="text-white underline underline-offset-2 hover:text-white/80">портфолио</Link>.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6">
            {[
              { num: '120+', label: 'Отзывов' },
              { num: '5.0', label: 'Рейтинг' },
              { num: '100%', label: 'Довольных' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-lg p-3 border border-white/10">
                <div className="text-lg font-bold text-white">{s.num}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href={SOCIAL_LINKS.whatsapp} className="inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-secondary-50 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors">
              Заказать сайт
            </a>
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-lg text-sm border border-white/20 transition-colors">
              Портфолио
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-2xl mx-auto mb-8">
            <h2 className="heading-lg mb-2">
              Реальные отзывы <span className="gradient-text">наших клиентов</span>
            </h2>
            <p className="text-base text-secondary-600 dark:text-secondary-300">
              Скриншоты отзывов из мессенджеров и социальных сетей
            </p>
          </div>
          <ReviewsGallery reviews={placeholderReviewImages} />
        </div>
      </section>

      {/* Why Trust Us + CTA combined */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-lg text-left md:text-center mb-8">Почему нам доверяют</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Качество работы',
                desc: 'Каждый проект доводим до идеала. Вносим правки до полного удовлетворения клиента.',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Соблюдаем сроки',
                desc: 'Всегда сдаём проекты вовремя. Если срок критичен — сообщаем заранее.',
              },
              {
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                title: 'Поддержка 24/7',
                desc: 'Всегда на связи в WhatsApp. Быстро отвечаем и помогаем с любыми вопросами.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700 text-left md:text-center">
                <div className="w-9 h-9 rounded-lg bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 flex items-center justify-center mb-3 md:mx-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-100 dark:border-secondary-700 text-left md:text-center">
            <h2 className="heading-md mb-2">Станьте нашим клиентом</h2>
            <p className="text-base text-secondary-600 dark:text-secondary-300 mb-5 max-w-xl mx-auto">
              Присоединяйтесь к более чем 120 довольным клиентам. Создадим профессиональный сайт с поддержкой 30 дней.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={SOCIAL_LINKS.whatsapp} className="inline-flex items-center gap-2 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 hover:bg-secondary-800 dark:hover:bg-secondary-50 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Заказать сайт
              </a>
              <Link href="/portfolio" className="inline-flex items-center gap-2 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors">
                Посмотреть портфолио
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md text-left md:text-center mb-6">Связанные страницы</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/portfolio', title: 'Портфолио', desc: 'Примеры наших работ' },
              { href: '/why-choose-us', title: 'Почему мы', desc: 'Наши преимущества' },
              { href: '/contact', title: 'Контакты', desc: 'Свяжитесь с нами' },
              { href: '/website-price', title: 'Цены', desc: 'Стоимость разработки' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-4 border border-secondary-100 dark:border-secondary-700 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <h3 className="font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors">{l.title}</h3>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
