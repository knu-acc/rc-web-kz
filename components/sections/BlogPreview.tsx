'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { blogPosts } from '@/data/blog'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { SwiperModule } from 'swiper/types'

const SwiperComponent = dynamic(
  () => import('swiper/react').then((mod) => ({ default: mod.Swiper })),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-pulse text-secondary-400">Загрузка...</div>
      </div>
    ),
  }
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

export function BlogPreview() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [swiperModules, setSwiperModules] = useState<unknown[]>([])

  useEffect(() => {
    Promise.all([
      import('swiper/modules').then((mod) => mod.Navigation),
      import('swiper/modules').then((mod) => mod.Pagination),
      import('swiper/modules').then((mod) => mod.A11y),
    ])
      .then(([Navigation, Pagination, A11y]) => {
        setSwiperModules([Navigation, Pagination, A11y])
        setIsLoaded(true)
      })
      .catch(() => {
        setIsLoaded(true)
      })
  }, [])

  // Получаем последние 6 статей
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  if (latestPosts.length === 0) {
    return null
  }

  if (!isLoaded) {
    return (
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Полезные статьи о создании сайтов
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Читайте наши гайды, кейсы и советы по разработке сайтов, SEO-продвижению и веб-дизайну в Алматы
            </p>
          </div>
          <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse text-secondary-400">Загрузка карусели...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            Полезные статьи о создании сайтов
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Читайте наши гайды, кейсы и советы по разработке сайтов, SEO-продвижению и веб-дизайну в Алматы
          </p>
        </div>

        {/* Слайдер статей */}
        <div className="mb-8">
          <SwiperComponent
            modules={swiperModules as SwiperModule[]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={latestPosts.length > 3}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            a11y={{
              prevSlideMessage: 'Предыдущая статья',
              nextSlideMessage: 'Следующая статья',
              paginationBulletMessage: 'Перейти к статье {{index}}',
            }}
            className="!pb-14"
          >
            {latestPosts.map((post) => (
              <SwiperSlideComponent key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-secondary-100 dark:border-secondary-800 hover:border-primary-200 dark:hover:border-primary-600 h-full flex flex-col"
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
                    <time>{new Date(post.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</time>
                    <span className="text-primary-600 group-hover:text-primary-700 font-medium">
                      Читать →
                    </span>
                  </div>
                </Link>
              </SwiperSlideComponent>
            ))}
          </SwiperComponent>
        </div>

        {/* Кнопка "Все статьи" */}
        <div className="text-center">
          <Link
            href="/blog"
            className="btn-outline inline-flex items-center gap-2"
          >
            Все статьи блога
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
