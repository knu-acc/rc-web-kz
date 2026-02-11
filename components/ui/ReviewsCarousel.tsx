'use client'

import { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ReviewsCarouselFilter } from './ReviewsCarouselFilter'
import { ReviewModal } from './ReviewModal'
import { AnalyticsEvents } from '@/lib/analytics-events'
import { EmblaCarousel } from './EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'

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
  title = 'Отзывы клиентов',
  subtitle = 'Реальные отзывы от довольных клиентов, которые заказали сайты',
  showAllButton = true,
  className = '',
  showFilter = false,
}: ReviewsCarouselProps) {
  const [reviews, setReviews] = useState<ReviewImage[]>(initialReviews)
  const [selectedReview, setSelectedReview] = useState<ReviewImage | null>(null)

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

  const emblaOptions: EmblaOptionsType = useMemo(
    () => ({
      align: 'start',
      slidesToScroll: 1,
    }),
    []
  )

  const slides = useMemo(
    () =>
      reviews.map((review) => (
        <button
          key={review.id}
          onClick={() => setSelectedReview(review)}
          className="group relative w-full h-full cursor-pointer mx-3"
          aria-label={`Открыть отзыв: ${review.alt}`}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={review.image}
              alt={review.alt}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
            />
          </div>
        </button>
      )),
    [reviews]
  )

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
          <div className="relative px-12">
            <EmblaCarousel
              slides={slides}
              options={emblaOptions}
              showNavigation={true}
              showPagination={true}
              slideClassName="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] xl:flex-[0_0_calc(25%-18px)]"
            />
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
      {selectedReview && (
        <ReviewModal
          isOpen={!!selectedReview}
          image={selectedReview.image}
          alt={selectedReview.alt}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </section>
  )
}
