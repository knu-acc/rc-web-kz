/**
 * Stats Section — Modern Minimalist SaaS
 * Переработан: иконки, разделители border-r, sub-labels
 */
import { SITE_CONFIG } from '@/lib/constants'

const stats = [
  {
    value: SITE_CONFIG.projectsCount,
    label: 'Выполненных проектов',
    sublabel: 'с 2020 года',
    ariaLabel: `${SITE_CONFIG.projectsCount} выполненных проектов`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    value: `${SITE_CONFIG.yearsOnMarket}+`,
    label: 'Лет на рынке',
    sublabel: 'веб-разработки',
    ariaLabel: `${SITE_CONFIG.yearsOnMarket} лет на рынке`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: `${SITE_CONFIG.aggregateRating.ratingValue}/5`,
    label: 'Средняя оценка',
    sublabel: `${SITE_CONFIG.aggregateRating.reviewCount}+ отзывов`,
    ariaLabel: `Средняя оценка ${SITE_CONFIG.aggregateRating.ratingValue} из 5`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    value: '< 2 сек',
    label: 'Скорость загрузки',
    sublabel: 'Google PageSpeed 90+',
    ariaLabel: 'Скорость загрузки менее 2 секунд',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
] as const

export function Stats() {
  return (
    <section className="py-10 sm:py-14 bg-white dark:bg-secondary-900 border-y border-secondary-100 dark:border-secondary-800" aria-label="Статистика компании">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-secondary-100 dark:divide-secondary-800 gap-y-8 md:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-6 group ${index > 0 ? 'pl-0 sm:pl-4' : ''}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Value */}
              <div
                className="text-3xl md:text-4xl font-extrabold text-secondary-900 dark:text-white font-display mb-1"
                aria-label={stat.ariaLabel}
              >
                {stat.value}
              </div>

              {/* Label */}
              <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 leading-tight">
                {stat.label}
              </p>

              {/* Sub-label */}
              <p className="text-xs text-secondary-400 dark:text-secondary-500 mt-0.5">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
