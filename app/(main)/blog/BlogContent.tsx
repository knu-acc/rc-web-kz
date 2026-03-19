'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/data/blog'
import { categoryLabels } from '@/data/blog'

const getCategoryLabel = (category: string): string =>
  categoryLabels[category as BlogPost['category']] || category
import { BlogSearch } from '@/components/blog/BlogSearch'
import { EmblaCarousel } from '@/components/ui/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'

interface BlogContentProps {
  posts: BlogPost[]
  categories: string[]
}

export function BlogContent({ posts, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<BlogPost[]>(posts)

  // Обновляем результаты поиска при изменении posts
  useEffect(() => {
    setSearchResults(posts)
  }, [posts])

  const filteredPosts = activeCategory
    ? searchResults.filter((post) => post.category === activeCategory)
    : searchResults

  const emblaOptions: EmblaOptionsType = useMemo(
    () => ({
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
    }),
    []
  )

  const categorySlides = useMemo(
    () => [
      <button
        key="all"
        onClick={() => setActiveCategory(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
          activeCategory === null
            ? 'bg-primary-600 text-white shadow-md'
            : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
        }`}
      >
        Все статьи
      </button>,
      ...categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
          }`}
        >
          {getCategoryLabel(category)}
        </button>
      )),
    ],
    [categories, activeCategory]
  )

  return (
    <>
      {/* Поиск */}
      <BlogSearch 
        posts={posts} 
        onSearchResults={(results) => {
          setSearchResults(results)
        }} 
      />

      {/* Категории: на ПК — все кнопки в ряд, на мобилке — слайдер (3 видимых, по 1 за клик) */}
      <div className="hidden md:flex flex-wrap gap-2 justify-center mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
          }`}
        >
          Все статьи
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
            }`}
          >
            {getCategoryLabel(category)}
          </button>
        ))}
      </div>
      <div className="blog-categories-slider md:hidden mb-12 relative px-12">
        <EmblaCarousel
          slides={categorySlides}
          options={emblaOptions}
          showNavigation={true}
          showPagination={false}
          enableAutoplay={false}
          slideClassName="min-w-0 flex-[0_0_calc(50%-3px)]"
        />
      </div>

      {/* Количество */}
      {activeCategory && (
        <p className="text-left md:text-center text-secondary-500 dark:text-secondary-400 mb-8 text-sm">
          Найдено статей: {filteredPosts.length}
        </p>
      )}

      {/* Список статей */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white dark:bg-secondary-900 rounded-2xl shadow-sm hover:shadow-medium dark:shadow-secondary-900/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-secondary-800 flex flex-col"
          >
            {post.image && (
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50">
                  {categoryLabels[post.category] || post.category}
                </span>
                {post.readingTime && (
                  <span className="text-xs text-secondary-400 dark:text-secondary-500 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    {post.readingTime} мин
                  </span>
                )}
              </div>
              <h2 className="text-lg font-bold mb-2 text-secondary-900 dark:text-white leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-4 line-clamp-3 leading-relaxed flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-secondary-100 dark:border-secondary-800 mt-auto">
                <time className="text-xs text-secondary-400 dark:text-secondary-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Читать
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-left md:text-center py-12">
          <p className="text-secondary-500 dark:text-secondary-400">
            В этой категории пока нет статей
          </p>
          <button
            onClick={() => setActiveCategory(null)}
            className="mt-4 text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            Показать все статьи
          </button>
        </div>
      )}
    </>
  )
}
