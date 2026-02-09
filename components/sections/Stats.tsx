import { SITE_CONFIG } from '@/lib/constants'

export function Stats() {
  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {SITE_CONFIG.projectsCount}
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">Выполненных проектов</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)} лет
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">На рынке</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {SITE_CONFIG.aggregateRating.ratingValue}/5
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">Средняя оценка</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {SITE_CONFIG.aggregateRating.reviewCount}+
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 font-medium">Довольных клиентов</p>
          </div>
        </div>
      </div>
    </section>
  )
}
