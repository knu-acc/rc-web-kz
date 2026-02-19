import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateBreadcrumbSchema } from '@/lib/schema'
import dynamic from 'next/dynamic'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'

const PriceCalculator = dynamic(() => import('@/components/ui/PriceCalculator').then(mod => ({ default: mod.PriceCalculator })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Цены на создание сайта в Алматы 2026 | Стоимость разработки  RC-WEB.KZ',
  description: 'Цены на создание сайтов в Алматы: landing page от 85 000₸, корпоративный от 135 000₸, интернет-магазин от 175 000₸. Калькулятор стоимости, сравнение, FAQ.',
  keywords: ['цена сайта Алматы', 'стоимость создания сайта', 'сколько стоит сайт', 'цены на сайты Алматы', 'заказать сайт недорого'],
  openGraph: {
    title: 'Цены на создание сайта в Алматы 2026',
    description: 'Landing page от 85 000 ₸, корпоративный от 85 000 ₸, интернет-магазин от 175 000 ₸',
    url: `${SITE_CONFIG.url}/website-price`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/website-price` },
}

const prices = [
  {
    name: 'Landing Page',
    price: 'от 85 000 ₸',
    description: 'Одностраничный рекламный сайт для привлечения клиентов и сбора заявок.',
    link: '/landing-page',
    duration: '7-14 дней',
    popular: false,
    features: [
      'Уникальный дизайн с нуля',
      'Адаптивная вёрстка (mobile-first)',
      'Формы обратной связи + WhatsApp',
      'SEO-оптимизация и мета-теги',
      'Google Analytics + Яндекс.Метрика',
      '30 дней бесплатных правок',
    ],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Корпоративный сайт',
    price: 'от 135 000 ₸',
    description: 'Многостраничный сайт для компании с блогом, портфолио и формами.',
    link: '/corporate-site',
    duration: '7-14 дней',
    popular: true,
    features: [
      'Всё из Landing Page +',
      '1-2 страницы (можно больше)',
      'Блог / новости (опционально)',
      'Портфолио / кейсы (опционально)',
      'Интеграция с CRM',
      'Панель управления',
    ],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Интернет-магазин',
    price: 'от 175 000 ₸',
    description: 'E-commerce решение с каталогом, корзиной, оплатой и интеграциями.',
    link: '/online-store',
    duration: '7-14 дней',
    popular: false,
    features: [
      'Всё из корпоративного +',
      'Каталог с фильтрами и поиском',
      'Корзина и оформление заказа',
      'Онлайн-оплата (Kaspi, карты)',
      'Интеграция с 1С/складом',
      'Личный кабинет покупателя',
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Сайт на Tilda',
    price: 'от 120 000 ₸',
    description: 'Быстрое решение на конструкторе для тех, кто хочет управлять сайтом сам.',
    link: '/tilda-site',
    duration: '7-14 дней',
    popular: false,
    features: [
      'Дизайн из 550+ блоков',
      'Zero-code управление',
      'Формы и CRM',
      'SEO-настройки',
      'Мобильная адаптация',
      'Обучение по управлению',
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
]

const priceFactors = [
  {
    title: 'Количество страниц',
    description: 'Каждая дополнительная страница — это дизайн, вёрстка и контент. 1 страница — +10-15 тыс ₸.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Сложность дизайна',
    description: 'Уникальный дизайн с анимациями стоит дороже, чем адаптация готового шаблона.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Функционал и интеграции',
    description: 'Онлайн-оплата, CRM, 1С, личные кабинеты — каждая интеграция увеличивает стоимость.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Срочность проекта',
    description: 'Срочные проекты (до 3 дней) могут стоить на 30-50% дороже стандартного тарифа.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600',
  },
]

const whatsIncluded = [
  'Уникальный дизайн (не шаблон)',
  'Адаптивная вёрстка (mobile, tablet, desktop)',
  'SEO-оптимизация (мета, schema, sitemap)',
  'Google Analytics + Яндекс.Метрика',
  'SSL-сертификат (https)',
  'Хостинг на первый год',
  'Формы обратной связи',
  '30 дней техобслуживания',
  'Передача исходного кода',
]

const faq = [
  {
    q: 'Почему цены указаны диапазоном?',
    a: 'Финальная стоимость зависит от количества страниц, сложности дизайна, функционала и интеграций. После заполнения брифа мы рассчитаем точную стоимость.',
  },
  {
    q: 'Есть ли скрытые платежи?',
    a: 'Нет. Стоимость фиксируется до начала работы. Дополнительные работы согласовываются отдельно и оплачиваются только с вашего согласия.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Стандартная схема: 50% аванс перед началом, 50% после запуска. Для крупных проектов возможна оплата в 3 этапа. Принимаем переводы на карту Kaspi и расчётный счёт.',
  },
  {
    q: 'Что дешевле: Next.js или Tilda?',
    a: 'Tilda обычно дешевле при простых проектах (1-3 страницы). Для сложных задач (SEO, скорость, кастомный функционал) Next.js выгоднее долгосрочно.',
  },
  {
    q: 'Сколько стоит поддержка после запуска?',
    a: 'Первые 30 дней — бесплатно. Далее: базовая поддержка от 15 000₸/мес, расширенная с SEO от 45 000₸/мес. Разовые доработки — от 5 000₸.',
  },
  {
    q: 'Можно ли сделать сайт дешевле?',
    a: 'Да. Можно упростить дизайн, уменьшить количество страниц или использовать Tilda вместо кастомной разработки. Мы подберём оптимальное решение под ваш бюджет.',
  },
]

export default function WebsitePricePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Цены на сайты', url: `${SITE_CONFIG.url}/website-price` },
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Цены на сайты', href: '/website-price' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom text-left md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            Актуальные цены 2026
          </div>

          <h1 className="heading-xl text-white mb-6">
            <span className="block">Прозрачное</span>
            <span className="gradient-text">ценообразование</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
            Все цены включают дизайн, разработку, SEO-оптимизацию и 30 дней техобслуживания. Без скрытых платежей.
          </p>

          <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
            {[
              { num: 'от 85K', label: ' Landing' },
              { num: 'от 135K', label: ' Корпоратив' },
              { num: 'от 175K', label: ' Магазин' },
              { num: 'от 120K', label: ' Tilda' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <div className="text-lg font-bold text-white">{s.num}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Cards */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Тарифы на <span className="gradient-text">создание сайтов</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Выберите подходящий вариант или свяжитесь для индивидуального расчёта
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {prices.map((item) => (
              <div
                key={item.name}
                className={`relative rounded-2xl p-6 bg-white dark:bg-secondary-900 border-2 ${item.popular ? 'border-primary-500 shadow-xl shadow-primary-500/10' : 'border-secondary-100 dark:border-secondary-700'} hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Популярный
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-4 shadow-md`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">{item.price}</div>
                <div className="text-sm text-secondary-500 dark:text-secondary-400 mb-3">Срок: {item.duration}</div>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4">{item.description}</p>

                <ul className="space-y-2 mb-6">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href={item.link} className="block text-left md:text-center py-2.5 px-4 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white font-semibold hover:bg-primary-600 hover:text-white transition-all text-sm">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-left md:text-center mb-4">Что входит в стоимость</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-left md:text-center mb-10">
            Каждый тариф уже включает всё необходимое для запуска
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {whatsIncluded.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-secondary-800 rounded-xl p-4 border border-secondary-100 dark:border-secondary-700">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-secondary-700 dark:text-secondary-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Factors */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom">
          <h2 className="heading-lg text-left md:text-center text-white mb-4">Что влияет на стоимость</h2>
          <p className="text-lg text-white/80 text-left md:text-center mb-10">
            Основные факторы, определяющие финальную цену
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceFactors.map((f) => (
              <div key={f.title} className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} text-white flex items-center justify-center mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-10">
            <h2 className="heading-lg mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Выберите параметры и узнайте примерную стоимость проекта</p>
          </div>
          <PriceCalculator />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-lg text-left md:text-center mb-10">Сравнение тарифов</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-secondary-100 dark:bg-secondary-700">
                  <th className="border border-secondary-200 dark:border-secondary-600 p-4 text-left font-bold">Параметр</th>
                  <th className="border border-secondary-200 dark:border-secondary-600 p-4 text-left md:text-center font-bold">Landing</th>
                  <th className="border border-secondary-200 dark:border-secondary-600 p-4 text-left md:text-center font-bold text-primary-600">Корпоративный</th>
                  <th className="border border-secondary-200 dark:border-secondary-600 p-4 text-left md:text-center font-bold">Магазин</th>
                  <th className="border border-secondary-200 dark:border-secondary-600 p-4 text-left md:text-center font-bold">Tilda</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Цена', 'от 85 000 ₸', 'от 135 000 ₸', 'от 175 000 ₸', 'от 120 000 ₸'],
                  ['Сроки', '7-14 дней', '7-14 дней', '7-14 дней', '7-14 дней'],
                  ['Количество страниц', '1', '1-2', '5-20+', '1-5'],
                  ['Уникальный дизайн', '✓', '✓', '✓', '—'],
                  ['SEO-оптимизация', '✓', '✓', '✓', '✓'],
                  ['Админ-панель', '—', '✓', '✓', '✓'],
                  ['Каталог товаров', '—', '—', '✓', '—'],
                  ['Онлайн-оплата', '—', '—', '✓', '—'],
                  ['Блог', '—', '✓', '✓', '—'],
                  ['PageSpeed 90+', '✓', '✓', '✓', '—'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-secondary-50 dark:bg-secondary-750' : ''}>
                    <td className="border border-secondary-200 dark:border-secondary-600 p-3 font-medium text-secondary-700 dark:text-secondary-300">{row[0]}</td>
                    <td className="border border-secondary-200 dark:border-secondary-600 p-3 text-left md:text-center">{row[1]}</td>
                    <td className="border border-secondary-200 dark:border-secondary-600 p-3 text-left md:text-center font-semibold">{row[2]}</td>
                    <td className="border border-secondary-200 dark:border-secondary-600 p-3 text-left md:text-center">{row[3]}</td>
                    <td className="border border-secondary-200 dark:border-secondary-600 p-3 text-left md:text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-left md:text-center mb-10">Частые вопросы о ценах</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-secondary-50 dark:bg-secondary-900 rounded-xl border border-secondary-100 dark:border-secondary-800">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-secondary-900 dark:text-white hover:text-primary-600 transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 text-secondary-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-secondary-700 dark:text-secondary-300 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-left md:text-center max-w-2xl mx-auto">
          <h2 className="heading-lg text-white mb-4">Нужна точная стоимость?</h2>
          <p className="text-lg text-white/90 mb-8">
            Расскажите о проекте  рассчитаем стоимость за 30 минут. Консультация бесплатна.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppLink className="btn-whatsapp">Написать в WhatsApp</WhatsAppLink>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary">Позвонить</a>
          </div>
        </div>
      </section>

      {/* Basic Services */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-left md:text-center mb-4">Базовые услуги</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-left md:text-center mb-10">
            Дополнительные услуги для вашего сайта
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Домены (.com, .kz)', price: '10 000 ₸', description: 'Регистрация доменного имени' },
              { title: 'Хостинг', price: 'от 10 000 ₸', description: 'Размещение сайта на сервере' },
              { title: 'Настройка рекламы', price: '50 000 ₸', description: 'Настройка Google Ads и Яндекс.Директ' },
              { title: 'SEO-оптимизация', price: 'БЕСПЛАТНО', description: 'Базовая SEO-оптимизация включена', free: true },
            ].map((service) => (
              <div key={service.title} className="flex items-center gap-4 bg-secondary-50 dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${service.free ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-primary-100 dark:bg-primary-900/30'}`}>
                  {service.free ? (
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-secondary-900 dark:text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">{service.description}</p>
                  <p className={`text-lg font-bold ${service.free ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary-600 dark:text-primary-400'}`}>
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Связанные услуги</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/landing-page', title: 'Landing Page', desc: 'от 85 000 ₸' },
              { href: '/corporate-site', title: 'Корпоративный сайт', desc: 'от 85 000 ₸' },
              { href: '/online-store', title: 'Интернет-магазин', desc: 'от 175 000 ₸' },
              { href: '/tilda-site', title: 'Сайт на Tilda', desc: 'от 115 000 ₸' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <h3 className="font-bold group-hover:text-primary-600 transition-colors">{l.title}</h3>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}