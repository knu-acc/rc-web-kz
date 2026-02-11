'use client'

import Link from 'next/link'

interface RelatedArticle {
  slug: string
  title: string
  category: string
  description?: string
  date?: string
  readingTime?: string
}

interface RelatedArticlesProps {
  currentSlug?: string
  articles: RelatedArticle[]
  title?: string
  limit?: number
  category?: string
}

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  seo: 'SEO и продвижение',
  design: 'Дизайн и UX',
  marketing: 'Реклама и маркетинг',
  cases: 'Кейсы',
  technical: 'Технические темы',
}

export function RelatedArticles({
  currentSlug,
  articles,
  title = 'Полезные статьи',
  limit = 3,
  category,
}: RelatedArticlesProps) {
  // Фильтруем статьи
  let filteredArticles = articles.filter((article) => article.slug !== currentSlug)

  // Если указана категория, фильтруем по ней
  if (category) {
    filteredArticles = filteredArticles.filter((article) => article.category === category)
  }

  // Ограничиваем количество
  filteredArticles = filteredArticles.slice(0, limit)

  if (filteredArticles.length === 0) {
    return null
  }

  return (
    <section className="section bg-white dark:bg-secondary-950" aria-labelledby="related-articles-heading">
      <div className="container-custom">
        <h2 id="related-articles-heading" className="heading-md text-left md:text-center mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6 border-2 border-secondary-200 dark:border-secondary-800 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                {categoryLabels[article.category] || article.category}
              </span>
              <h3 className="text-lg font-bold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              {article.description && (
                <p className="text-sm text-secondary-600 dark:text-secondary-300 line-clamp-2 mb-4 leading-relaxed">
                  {article.description}
                </p>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {article.date && (
                    <time className="text-xs text-secondary-500 dark:text-secondary-400">
                      {new Date(article.date).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  {article.readingTime && (
                    <span className="text-xs text-secondary-500 dark:text-secondary-400">
                      {article.readingTime} мин
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-2 transition-all">
                  Читать
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-left md:text-center mt-8">
          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            Все статьи блога
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
