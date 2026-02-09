'use client'

import { useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { ReviewsCarouselFilter } from './ReviewsCarouselFilter'
import { AnalyticsEvents } from '@/lib/analytics-events'
import styles from './ReviewsCarousel.module.css'
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

export interface ReviewImage {
  id: string
  image: string
  alt: string
  service?: string
}

interface ReviewsCarouselProps {
  reviews: ReviewImage[]
  title?: string
  subtitle?: string
  showAllButton?: boolean
  className?: string
  showFilter?: boolean
}

export function ReviewsCarousel({
  reviews: initialReviews,
  title = 'Отзывы наших клиентов',
  subtitle = 'Реальные отзывы от довольных клиентов, которые заказали у нас сайты',
  showAllButton = true,
  className = '',
  showFilter = false,
}: ReviewsCarouselProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [swiperModules, setSwiperModules] = useState<unknown[]>([])
  const [reviews, setReviews] = useState<ReviewImage[]>(initialReviews)

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

  const handleFilterChange = useCallback(
    (filtered: ReviewImage[]) => {
      setReviews(filtered)
      if (filtered.length < initialReviews.length) {
        const service = initialReviews.find((r) => !filtered.includes(r))?.service
        if (service) {
          AnalyticsEvents.reviewsFilter(service)
        }
      }
    },
    [initialReviews]
  )

  if (!isLoaded) {
    return (
      <section className={`section bg-secondary-50 dark:bg-secondary-900 ${className}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Отзывы
            </span>
            <h2 className="heading-lg mb-6">
              {title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">{title.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">{subtitle}</p>
          </div>
          <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse text-secondary-400">Загрузка карусели...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`section bg-secondary-50 dark:bg-secondary-900 ${className}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
            Отзывы
          </span>
          <h2 className="heading-lg mb-6">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">{subtitle}</p>
        </div>

        {showFilter && initialReviews.length > 0 && (
          <ReviewsCarouselFilter reviews={initialReviews} onFilterChange={handleFilterChange} />
        )}

        {reviews.length > 0 ? (
          <div className={`reviews-carousel-wrapper ${styles.wrapper}`}>
            <SwiperComponent
              modules={swiperModules as SwiperModule[]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={reviews.length > 3}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              a11y={{
                prevSlideMessage: 'Предыдущий отзыв',
                nextSlideMessage: 'Следующий отзыв',
                paginationBulletMessage: 'Перейти к отзыву {{index}}',
              }}
              className="!pb-14"
            >
              {reviews.map((review) => (
                <SwiperSlideComponent key={review.id}>
                  <article className="group relative bg-white dark:bg-secondary-950 rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative aspect-[3/4] overflow-hidden bg-secondary-100 dark:bg-secondary-800 p-3 sm:p-4">
                      <div className="relative w-full h-full">
                        <Image
                          src={review.image}
                          alt={review.alt}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    {review.service && (
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-700">
                          {review.service}
                        </span>
                      </div>
                    )}
                  </article>
                </SwiperSlideComponent>
              ))}
            </SwiperComponent>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-500 dark:text-secondary-400">Отзывы не найдены</p>
          </div>
        )}

        {showAllButton && (
          <div className="text-center mt-8">
            <Link href="/reviews" className="btn-dark inline-flex items-center gap-2">
              Посмотреть все отзывы
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
