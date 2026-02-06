import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Гарантии | RC-WEB.KZ - Гарантии качества',
  description: 'Гарантии RC-WEB.KZ: гарантия на работу сайта, бесплатные правки, соблюдение сроков, конфиденциальность данных.',
  keywords: ['гарантии создания сайта', 'гарантия качества сайта'],
  openGraph: {
    title: 'Гарантии | RC-WEB.KZ - Гарантии качества',
    description: 'Гарантии RC-WEB.KZ: гарантия на работу сайта, бесплатные правки, соблюдение сроков, конфиденциальность данных.',
    url: `${SITE_CONFIG.url}/guarantees`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Гарантии | RC-WEB.KZ - Гарантии качества',
    description: 'Гарантии RC-WEB.KZ: гарантия на работу сайта, бесплатные правки, соблюдение сроков, конфиденциальность данных.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/guarantees`,
  },
}

const guarantees = [
  {
    title: 'Гарантия на работу сайта',
    description: 'Мы гарантируем корректную работу всех функций сайта в течение гарантийного периода. Все ошибки исправляются бесплатно.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Бесплатные правки в первый месяц',
    description: 'В течение первого месяца после запуска мы вносим правки и доработки бесплатно (в рамках технического задания).',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Соблюдение сроков',
    description: 'Мы всегда соблюдаем оговоренные сроки разработки. Если задержка происходит по нашей вине, предоставляем скидку.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Конфиденциальность данных',
    description: 'Все данные клиента хранятся в строгой конфиденциальности. Мы не передаём информацию третьим лицам.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600',
  },
]

export default function GuaranteesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Гарантии', href: '/guarantees' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white" />
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom py-12 lg:py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Наши гарантии
            </div>

            <h1 className="heading-xl mb-6">
              <span className="block">Гарантии</span>
              <span className="gradient-text">качества и надёжности</span>
            </h1>

            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto leading-relaxed">
              Мы гарантируем качество нашей работы и соблюдение всех обязательств. 
              Ваш успех — наш приоритет.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees Grid */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-secondary-950 rounded-3xl p-8 border-2 border-secondary-200 dark:border-secondary-700 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${guarantee.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${guarantee.gradient} text-white flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {guarantee.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                    {guarantee.title}
                  </h2>
                  <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed text-lg">
                    {guarantee.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${guarantee.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">
              Договор и <span className="gradient-text">прозрачные условия</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Все условия сотрудничества фиксируются в договоре. Мы работаем официально, 
              предоставляем все необходимые документы и гарантируем выполнение обязательств.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-white/70">Прозрачность условий</p>
              </div>
              <div className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <p className="text-white/70">Техническая поддержка</p>
              </div>
              <div className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
                <div className="text-3xl font-bold text-white mb-2">5 лет</div>
                <p className="text-white/70">Опыт работы</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="btn-dark"
              >
                Обсудить проект
              </a>
              <Link
                href="/process"
                className="btn-secondary"
              >
                Процесс работы
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
