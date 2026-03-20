import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

export function Portfolio() {
  const displayedItems = portfolioItems.slice(0, 6)

  return (
    <section className="section relative overflow-hidden bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-badge mb-4">
              Портфолио
            </span>
            <h2 className="heading-lg">
              Примеры <span className="gradient-text">выполненных работ</span>
            </h2>
            <p className="mt-3 text-secondary-600 dark:text-secondary-300">
              120+ проектов для бизнеса в Алматы и по всему Казахстану.
            </p>
          </div>
          <Link
            href="/portfolio"
            prefetch
            className="btn-outline group self-start md:self-auto flex-shrink-0"
            aria-label="Смотреть все проекты в портфолио"
          >
            Все проекты
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Portfolio grid — always visible cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white dark:bg-secondary-800 rounded-2xl border border-secondary-100 dark:border-secondary-700 overflow-hidden hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <Link href={`/portfolio/${item.id}`} className="relative block overflow-hidden aspect-[4/3]" aria-label={`Посмотреть проект ${item.title}`}>
                <Image
                  src={item.image}
                  alt={`${item.title} — создание сайта в Алматы, веб-студия RC-WEB.KZ`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </Link>

              {/* Always visible info */}
              <div className="p-5">
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="font-bold text-secondary-900 dark:text-white mt-1 text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="text-secondary-500 dark:text-secondary-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary-100 dark:border-secondary-700">
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                    aria-label={`Подробнее о проекте ${item.title}`}
                  >
                    Подробнее
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label={`Открыть сайт ${item.title}`}
                    >
                      Открыть сайт ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-secondary-600 dark:text-secondary-300 mb-5">
            Хотите такой же сайт? Обсудим вашу задачу
          </p>
          <Link href="/contact" prefetch className="btn-dark inline-flex items-center gap-2">
            Обсудить проект
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
