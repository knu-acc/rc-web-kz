import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

export function Portfolio() {
  const displayedItems = portfolioItems.slice(0, 6)

  return (
    <section className="section relative overflow-hidden bg-white dark:bg-secondary-950">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Портфолио
            </span>
            <h2 className="heading-lg">
              Примеры <span className="gradient-text">выполненных работ</span>
            </h2>
            <p className="mt-3 text-secondary-600 dark:text-secondary-300">
              Создание сайтов в Алматы — полное портфолио проектов. Каждый сайт уникален и создан под задачи клиента.
            </p>
            <p className="mt-2 text-sm text-secondary-500 dark:text-secondary-400">
              Это раздел на главной. Полная страница с фильтром и всеми проектами — по кнопке справа.
            </p>
          </div>
          <Link
            href="/portfolio"
            prefetch
            className="btn-outline group self-start md:self-auto"
          >
            Все проекты
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <article
              key={item.id}
              className="group relative"
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl bg-secondary-100 dark:bg-secondary-800 aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={`${item.title} - пример работы`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Hover overlay - darkened for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-secondary-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Hover content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white/70 text-sm font-medium mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 mb-4">{item.description}</p>
                  <Link
                    href={`/portfolio/${item.id}`}
                    prefetch
                    className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    Подробнее о проекте
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Info below image (mobile-friendly always visible) */}
              <div className="mt-4 md:mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">{item.category}</span>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-secondary-400 hover:text-primary-500 transition-colors"
                      aria-label={`Посетить сайт ${item.title}`}
                    >
                      Посетить сайт ↗
                    </a>
                  )}
                </div>
                <h3 className="text-secondary-900 dark:text-white font-bold mt-1">{item.title}</h3>
                <p className="text-secondary-500 dark:text-secondary-400 text-sm mt-1 line-clamp-2 md:hidden">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-left md:text-center">
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Хотите такой же? Свяжитесь для обсуждения проекта
          </p>
          <Link href="/contact" prefetch className="btn-dark">
            Обсудить проект
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
