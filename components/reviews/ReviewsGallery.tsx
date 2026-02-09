'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ReviewModal } from '@/components/ui/ReviewModal'
import type { ReviewImage } from '@/components/ui/ReviewsCarousel'

interface ReviewsGalleryProps {
  reviews: ReviewImage[]
}

export function ReviewsGallery({ reviews }: ReviewsGalleryProps) {
  const [selectedReview, setSelectedReview] = useState<ReviewImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <button
            key={review.id}
            onClick={() => setSelectedReview(review)}
            className="group relative w-full cursor-pointer"
            aria-label={`Открыть отзыв: ${review.alt}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={review.image}
                alt={review.alt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>
      {selectedReview && (
        <ReviewModal
          isOpen={!!selectedReview}
          image={selectedReview.image}
          alt={selectedReview.alt}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </>
  )
}
