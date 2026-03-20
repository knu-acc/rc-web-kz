/**
 * Portfolio Section — Image-first minimal grid
 */
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

export function Portfolio() {
  const displayedItems = portfolioItems.slice(0, 4)

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-secondary-400 dark:text-secondary-500 mb-4">
              Портфолио
            </p>
            <h2 className="heading-lg text-secondary-900 dark:text-white">
              Примеры работ
            </h2>
            <p className="mt-2 text-secondary-500 dark:text-secondary-400 text-base">
              120+ проектов для бизнеса в Алматы и по всему Казахстану
            </p>
          </div>
          <Link
            href="/portfolio"
            prefetch
            className="btn-outline group self-start md:self-auto flex-shrink-0"
            aria-label="Все проекты в портфолио"
          >
            Все проекты
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Portfolio grid — 2 columns, image-dominant */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedItems.map((item) => (
            <article key={item.id} className="group">
              {/* Image — clean, no card borders */}
              <Link
                href={`/portfolio/${item.id}`}
                className="relative block overflow-hidden aspect-[16/10] rounded-xl bg-secondary-100 dark:bg-secondary-800"
                aria-label={`Посмотреть проект ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} — создание сайта в Алматы`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/20 transition-colors duration-300" />
              </Link>

              {/* Minimal metadata below image */}
              <div className="flex items-start justify-between mt-4 gap-4">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-secondary-400 dark:text-secondary-500">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-secondary-900 dark:text-white text-base leading-snug mt-0.5">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 pt-4">
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="text-sm font-semibold text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center gap-1"
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
                      className="text-xs text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors"
                      aria-label={`Открыть сайт ${item.title}`}
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 pt-10 border-t border-secondary-200 dark:border-secondary-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-secondary-600 dark:text-secondary-400 text-base">
            Хотите такой же сайт? Обсудим вашу задачу
          </p>
          <Link href="/contact" prefetch className="btn-dark inline-flex items-center gap-2 flex-shrink-0">
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
