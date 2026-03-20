/**
 * Benefits Section — Modern Minimalist SaaS
 * Переработан: full-cards с описаниями вместо компактных pill-cards
 */

const iconClass = 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300'

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Быстрая загрузка',
    description: 'Сайты загружаются менее чем за 2 секунды. Оптимизация изображений, кода и серверного рендеринга на Next.js.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Адаптивный дизайн',
    description: 'Идеальное отображение на телефонах, планшетах и компьютерах. 70% казахстанцев заходят с мобильных.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
    description: 'Сайты видны в Google и Яндекс с первого дня. Schema.org, метатеги, sitemap.xml — всё включено в стоимость.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Безопасность',
    description: 'SSL-сертификат, защита от взлома и регулярные бэкапы. Ваши данные и данные клиентов в безопасности.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Уникальный дизайн',
    description: 'Каждый сайт создаётся индивидуально под ваш бренд. Никаких шаблонов — только дизайн, который выделяет вас.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Техподдержка',
    description: '30 дней бесплатного техобслуживания после запуска. Быстро исправим ошибки, обновим контент.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Работаем по всему Казахстану',
    description: 'Алматы, Астана, Шымкент, Актобе — работаем удалённо по всей стране. Связь по WhatsApp и Zoom.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Договор и прозрачность',
    description: 'Работаем официально по договору с ТЗ. Чёткие сроки, фиксированная цена, никаких скрытых доплат.',
  },
]

export function Benefits() {
  return (
    <section className="section bg-slate-50 dark:bg-secondary-950">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
            Преимущества
          </span>
          <h2 className="heading-lg mb-4">
            Почему выбирают{' '}
            <span className="gradient-text">нас</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Более 6 лет делаем сайты, которые работают на бизнес, а не просто красиво выглядят.
          </p>
        </div>

        {/* Benefits grid — full cards with descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 p-6 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconClass}`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-secondary-900 dark:text-white mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
