'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { BlogPost } from '@/data/blog'
import { BlogSearch } from '@/components/blog/BlogSearch'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { SwiperModule } from 'swiper/types'

const SwiperComponent = dynamic(
  () => import('swiper/react').then((mod) => ({ default: mod.Swiper })),
  { ssr: false }
)

const SwiperSlideComponent = dynamic(
  () => import('swiper/react').then((mod) => ({ default: mod.SwiperSlide })),
  { ssr: false }
)

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  seo: 'SEO и продвижение',
  design: 'Дизайн и UX',
  marketing: 'Реклама и маркетинг',
  cases: 'Кейсы',
  technical: 'Технические темы',
}

interface BlogContentProps {
  posts: BlogPost[]
  categories: string[]
}

export function BlogContent({ posts, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<BlogPost[]>(posts)
  const [isSwiperLoaded, setIsSwiperLoaded] = useState(false)
  const [swiperModules, setSwiperModules] = useState<unknown[]>([])

  // Обновляем результаты поиска при изменении posts
  useEffect(() => {
    setSearchResults(posts)
  }, [posts])

  // Загружаем Swiper модули если категорий больше 5
  useEffect(() => {
    const totalButtons = categories.length + 1 // +1 для кнопки "Все статьи"
    if (totalButtons > 5) {
      Promise.all([
        import('swiper/modules').then((mod) => mod.Navigation),
        import('swiper/modules').then((mod) => mod.A11y),
      ])
        .then(([Navigation, A11y]) => {
          setSwiperModules([Navigation, A11y])
          setIsSwiperLoaded(true)
        })
        .catch(() => {
          setIsSwiperLoaded(true)
        })
    }
  }, [categories.length])

  const filteredPosts = activeCategory
    ? searchResults.filter((post) => post.category === activeCategory)
    : searchResults

  const totalButtons = categories.length + 1
  const shouldUseSlider = totalButtons > 5 && isSwiperLoaded

  return (
    <>
      {/* Поиск */}
      <BlogSearch 
        posts={posts} 
        onSearchResults={(results) => {
          setSearchResults(results)
        }} 
      />

      {/* Категории */}
      {shouldUseSlider ? (
        <div className="mb-12">
          <SwiperComponent
            modules={swiperModules as SwiperModule[]}
            spaceBetween={8}
            slidesPerView="auto"
            freeMode
            navigation
            a11y={{
              prevSlideMessage: 'Предыдущие категории',
              nextSlideMessage: 'Следующие категории',
            }}
            className="!pb-2"
          >
            <SwiperSlideComponent style={{ width: 'auto' }}>
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === null
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                Все статьи
              </button>
            </SwiperSlideComponent>
            {categories.map((category) => (
              <SwiperSlideComponent key={category} style={{ width: 'auto' }}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                  }`}
                >
                  {categoryLabels[category] || category}
                </button>
              </SwiperSlideComponent>
            ))}
          </SwiperComponent>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 justify-center mb-12">
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
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>
      )}

      {/* Количество */}
      {activeCategory && (
        <p className="text-center text-secondary-500 dark:text-secondary-400 mb-8 text-sm">
          Найдено статей: {filteredPosts.length}
        </p>
      )}

      {/* Список статей */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm hover:shadow-lg dark:shadow-secondary-900/50 transition-shadow overflow-hidden border border-secondary-100 dark:border-secondary-800"
          >
            {post.image && (
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                  {categoryLabels[post.category] || post.category}
                </span>
                {post.readingTime && (
                  <span className="text-xs text-secondary-500 dark:text-secondary-400">
                    {post.readingTime} мин чтения
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-secondary-500 dark:text-secondary-400">{post.date}</time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                >
                  Читать →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
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
