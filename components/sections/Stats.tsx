/**
 * Stats Section — CSS Marquee Ticker
 */
import { SITE_CONFIG } from '@/lib/constants'

const items = [
  `${SITE_CONFIG.projectsCount} ПРОЕКТОВ`,
  `${SITE_CONFIG.aggregateRating.ratingValue}★ РЕЙТИНГ`,
  `${SITE_CONFIG.yearsOnMarket}+ ЛЕТ`,
  '< 2 СЕК ЗАГРУЗКА',
  'АЛМАТЫ',
  'КАЗАХСТАН',
  'NEXT.JS',
  'SEO В КОМПЛЕКТЕ',
  'ДОГОВОР И ТЗ',
  '30 ДНЕЙ ПОДДЕРЖКИ',
]

// Duplicate for seamless loop
const tickerItems = [...items, ...items]

export function Stats() {
  return (
    <section
      className="border-y border-secondary-900 dark:border-secondary-800 bg-secondary-900 dark:bg-secondary-950 overflow-hidden py-4"
      aria-label="Статистика компании"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {tickerItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-xs font-bold tracking-widest text-white/70 dark:text-secondary-400 uppercase"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-white/20 dark:bg-secondary-700 flex-shrink-0 mx-4" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}
