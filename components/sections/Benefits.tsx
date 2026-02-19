// Benefits data
const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Быстрая загрузка',
    description: 'Сайты загружаются менее чем за 2 секунды. Оптимизация изображений и кода.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Адаптивный дизайн',
    description: 'Идеальное отображение на любых устройствах: телефоны, планшеты, компьютеры.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-оптимизация',
    description: 'Сайты видны в Google и Яндекс. Семантическая разметка Schema.org, метатеги, sitemap.xml.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Безопасность',
    description: 'SSL сертификат, защита от взлома и регулярные бэкапы данных.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Уникальный дизайн',
    description: 'Каждый сайт создаётся индивидуально под ваш бренд и бизнес.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Техподдержка',
    description: 'Бесплатная поддержка после запуска. Быстрое решение любых вопросов.',
  },
]

export function Benefits() {
  return (
    <section className="section bg-white dark:bg-secondary-950">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
            Преимущества
          </span>
          <h2 className="heading-lg mb-6">
            Почему выбирают <span className="gradient-text">нас</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Создаём эффективные инструменты для развития бизнеса: быстрые, безопасные и оптимизированные для поисковых систем
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-800
                         hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg 
                         transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Градиентный фон при наведении */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-violet-50 dark:from-primary-950/20 dark:to-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
