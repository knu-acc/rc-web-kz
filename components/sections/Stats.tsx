import { SITE_CONFIG } from '@/lib/constants'

const stats = [
  {
    value: SITE_CONFIG.projectsCount,
    label: 'Выполненных проектов',
    ariaLabel: `${SITE_CONFIG.projectsCount} выполненных проектов`,
  },
  {
    value: `${new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)} лет`,
    label: 'На рынке',
    ariaLabel: `${new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)} лет на рынке`,
  },
  {
    value: `${SITE_CONFIG.aggregateRating.ratingValue}/5`,
    label: 'Средняя оценка',
    ariaLabel: `Средняя оценка ${SITE_CONFIG.aggregateRating.ratingValue} из 5`,
  },
  {
    value: `${SITE_CONFIG.aggregateRating.reviewCount}+`,
    label: 'Довольных клиентов',
    ariaLabel: `${SITE_CONFIG.aggregateRating.reviewCount} довольных клиентов`,
  },
] as const

export function Stats() {
  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900" aria-label="Статистика компании">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div
                className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300"
                aria-label={stat.ariaLabel}
              >
                {stat.value}
              </div>
              <p className="text-secondary-700 dark:text-secondary-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
