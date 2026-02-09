import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Как опубликовать сайт в интернете | Добавить сайт в Google и Яндекс',
  description: 'Пошаговая инструкция по публикации сайта: домен, хостинг, Search Console, Вебмастер, sitemap и robots. Помощь в Алматы.',
  keywords: ['как опубликовать сайт', 'добавить сайт в гугл', 'добавить сайт в яндекс', 'публикация сайта'],
  openGraph: {
    title: 'Как опубликовать сайт в интернете',
    description: 'Инструкция по публикации сайта в Google и Яндекс',
    url: `${SITE_CONFIG.url}/publish-website`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Как опубликовать сайт в интернете',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/publish-website` },
}

const steps = [
  {
    step: 1,
    title: 'Выбор домена и хостинга',
    description: 'Зарегистрируйте доменное имя (например, вашсайт.kz) и выберите хостинг-провайдера. Для сайтов на Tilda домен можно подключить прямо в настройках конструктора.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  },
  {
    step: 2,
    title: 'Загрузка файлов на хостинг',
    description: 'Если сайт создан на чистом коде (HTML, CSS, JS), загрузите все файлы на хостинг через FTP-клиент или файловый менеджер хостинга. Для сайтов на Tilda этот шаг не требуется.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  },
  {
    step: 3,
    title: 'Добавление сайта в Google',
    description: 'Зарегистрируйтесь в Google Search Console, добавьте свой сайт и подтвердите права на него. После подтверждения отправьте sitemap.xml для быстрой индексации.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
  },
  {
    step: 4,
    title: 'Добавление сайта в Яндекс',
    description: 'Зарегистрируйтесь в Яндекс.Вебмастер, добавьте сайт и подтвердите права через файл или мета-тег. Также отправьте sitemap.xml в Яндекс.Вебмастер.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  },
  {
    step: 5,
    title: 'Настройка robots.txt и sitemap.xml',
    description: 'Создайте файл robots.txt в корне сайта для указания правил индексации поисковыми системами. Создайте sitemap.xml со списком всех страниц сайта.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  },
]

const checklist = [
  'Домен зарегистрирован и подключён',
  'Хостинг настроен и файлы загружены',
  'SSL сертификат установлен (HTTPS)',
  'Сайт добавлен в Google Search Console',
  'Сайт добавлен в Яндекс.Вебмастер',
  'Sitemap.xml создан и отправлен',
  'Robots.txt настроен правильно',
  'Мета-теги и заголовки заполнены',
]

export default function PublishWebsitePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Как опубликовать сайт', url: `${SITE_CONFIG.url}/publish-website` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section with step-by-step */}
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
                Публикация сайта
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Как опубликовать</span>
                <span className="gradient-text">сайт в интернете</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  пошаговая инструкция
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Подробная инструкция по публикации сайта в интернете, добавлению в Google и Яндекс, настройке домена 
                и хостинга. Поможем опубликовать ваш сайт правильно. Также рекомендуем <Link href="/seo-optimization" className="text-primary-300 hover:underline font-semibold">SEO-оптимизацию</Link> после публикации.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Помощь с публикацией
                </a>
                <Link href="/how-to-create-website" className="btn-secondary">
                  Как создать сайт
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Как опубликовать сайт в интернете"
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

      {/* Visual Steps */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Шаги публикации
            </span>
            <h2 className="heading-lg mb-6">
              Шаги <span className="gradient-text">публикации сайта</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Визуальная инструкция с примерами скриншотов
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={`step-${step.step}`} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Чеклист публикации</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">Убедитесь, что всё готово к публикации</p>
            </div>
            <div className="bg-white dark:bg-secondary-950 rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <div key={`checklist-${item}`} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-secondary-700 dark:text-secondary-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Сколько времени занимает индексация сайта?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Обычно Google индексирует сайт в течение 1-2 недель, Яндекс — 2-4 недели. После добавления sitemap.xml процесс ускоряется.
                </p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Нужен ли SSL сертификат?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Да, SSL сертификат обязателен. Он обеспечивает безопасное соединение (HTTPS) и влияет на ранжирование в поисковых системах.
                </p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Что делать, если сайт не индексируется?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Проверьте robots.txt, убедитесь что сайт доступен для поисковых роботов, проверьте наличие sitemap.xml и правильность его структуры.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших клиентов"
        subtitle="Реальные отзывы от клиентов, которым мы помогли с публикацией сайтов."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Нужна помощь с публикацией?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Мы поможем опубликовать ваш сайт, настроить домен, хостинг и добавить сайт в поисковые системы. 
            Всё это входит в стоимость разработки сайта.
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
          <h2 className="heading-md text-center mb-8">Полезные статьи</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/how-to-create-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Как создать сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Пошаговая инструкция</p>
            </Link>
            <Link href="/seo-optimization" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">SEO оптимизация</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Продвижение в поисковиках</p>
            </Link>
            <Link href="/contact" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Контакты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Свяжитесь с нами</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Цены на сайты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
