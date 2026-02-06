import Image from 'next/image'
import type { PortfolioItem } from '@/types'

const categoryStyle: Record<string, string> = {
  'Корпоративный сайт': 'bg-blue-600 text-white',
  'Интернет-магазин': 'bg-emerald-600 text-white',
  'Landing Page': 'bg-violet-600 text-white',
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const category = item.category ?? ''
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card group block"
      data-category={category}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-secondary-200 bg-white dark:border-secondary-700 dark:bg-secondary-900 shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-secondary-100 dark:bg-secondary-800">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            unoptimized
          />
          <span
            className={`absolute left-3 top-3 z-10 rounded-md px-2.5 py-1.5 text-xs font-medium shadow ${categoryStyle[category] ?? 'bg-secondary-600 text-white'}`}
          >
            {category}
          </span>
          {/* Затемнение при наведении на карточку — белый текст «Открыть сайт» хорошо виден */}
          <div
            className="absolute inset-0 z-[1] flex items-end justify-center bg-black/0 p-6 transition-colors duration-200 group-hover:bg-black/70"
            aria-hidden
          >
            <span className="flex items-center gap-2 text-base font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Открыть сайт
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-bold text-secondary-900 dark:text-white line-clamp-2 text-lg">
            {item.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-secondary-500 dark:text-secondary-400">
            {item.description}
          </p>
        </div>
      </article>
    </a>
  )
}
