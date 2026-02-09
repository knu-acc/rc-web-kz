import { SITE_CONFIG } from '@/lib/constants'

export function Stats() {
  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900" aria-label="Статистика компании">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2" aria-label={`${SITE_CONFIG.projectsCount} выполненных проектов`}>
              {SITE_CONFIG.projectsCount}
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">Выполненных проектов</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2" aria-label={`${new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)} лет на рынке`}>
              {new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)} лет
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">На рынке</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2" aria-label={`Средняя оценка ${SITE_CONFIG.aggregateRating.ratingValue} из 5`}>
              {SITE_CONFIG.aggregateRating.ratingValue}/5
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">Средняя оценка</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2" aria-label={`${SITE_CONFIG.aggregateRating.reviewCount} довольных клиентов`}>
              {SITE_CONFIG.aggregateRating.reviewCount}+
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">Довольных клиентов</p>
          </div>
        </div>
      </div>
    </section>
  )
}
