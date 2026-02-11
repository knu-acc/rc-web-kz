'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { EmblaCarousel } from '@/components/ui/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  seo: 'SEO и продвижение',
  design: 'Дизайн и UX',
  marketing: 'Реклама и маркетинг',
  cases: 'Кейсы',
  technical: 'Технические темы',
}

export function BlogPreview() {
  // Получаем последние 6 статей
  const latestPosts = useMemo(
    () =>
      blogPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 6),
    []
  )

  if (latestPosts.length === 0) {
    return null
  }

  const emblaOptions: EmblaOptionsType = {
    align: 'start',
    slidesToScroll: 1,
  }

  const slides = latestPosts.map((post) => (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}`}
      className="group bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-secondary-100 dark:border-secondary-800 hover:border-primary-200 dark:hover:border-primary-600 h-full flex flex-col mx-3"
    >
      {/* Категория */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
          {categoryLabels[post.category] || post.category}
        </span>
        {post.readingTime && (
          <span className="text-xs text-secondary-500 dark:text-secondary-400">
            {post.readingTime} мин
          </span>
        )}
      </div>

      {/* Заголовок */}
      <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
        {post.title}
      </h3>

      {/* Описание */}
      <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3 flex-grow">
        {post.description}
      </p>

      {/* Дата */}
      <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400">
        <time>
          {new Date(post.date).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span className="text-primary-600 group-hover:text-primary-700 font-medium">
          Читать →
        </span>
      </div>
    </Link>
  ))

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-left md:text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
            Блог
          </span>
          <h2 className="heading-lg mb-4">Полезные статьи <span className="gradient-text">о создании сайтов</span></h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Читайте гайды, кейсы и советы по разработке сайтов, SEO-продвижению и
            веб-дизайну в Алматы
          </p>
        </div>

        {/* Слайдер статей */}
        <div className="mb-8 relative px-12">
          <EmblaCarousel
            slides={slides}
            options={emblaOptions}
            showNavigation={true}
            showPagination={true}
            slideClassName="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
          />
        </div>

        {/* Кнопка "Все статьи" */}
        <div className="text-left md:text-center">
          <Link href="/blog" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            Все статьи блога
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
