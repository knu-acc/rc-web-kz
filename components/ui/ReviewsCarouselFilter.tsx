'use client'

import { useState } from 'react'
import { ReviewImage } from './ReviewsCarousel'

interface ReviewsCarouselFilterProps {
  reviews: ReviewImage[]
  onFilterChange: (filteredReviews: ReviewImage[]) => void
}

export function ReviewsCarouselFilter({ reviews, onFilterChange }: ReviewsCarouselFilterProps) {
  const [selectedService, setSelectedService] = useState<string>('all')

  // Получаем уникальные услуги из отзывов
  const services: string[] = ['all', ...Array.from(new Set(reviews.map((r) => r.service).filter((s): s is string => Boolean(s))))]

  const handleFilterChange = (service: string) => {
    setSelectedService(service)
    const filtered = service === 'all' 
      ? reviews 
      : reviews.filter((r) => r.service && r.service === service)
    onFilterChange(filtered)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {services.map((service) => (
        <button
          key={service}
          onClick={() => handleFilterChange(service)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedService === service
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700'
          }`}
          aria-pressed={selectedService === service}
        >
          {service === 'all' ? 'Все отзывы' : service}
        </button>
      ))}
    </div>
  )
}
