'use client'

import { useEffect, useCallback, useState, ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import type { EmblaOptionsType } from 'embla-carousel'

interface EmblaCarouselProps {
  slides: ReactNode[]
  options?: EmblaOptionsType
  showNavigation?: boolean
  showPagination?: boolean
  enableAutoplay?: boolean
  className?: string
  slideClassName?: string
}

export function EmblaCarousel({
  slides,
  options = {},
  showNavigation = true,
  showPagination = false,
  enableAutoplay = true,
  className = '',
  slideClassName = '',
}: EmblaCarouselProps) {
  const plugins = enableAutoplay ? [Autoplay({ delay: 4000, stopOnInteraction: false })] : []
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      slidesToScroll: 1,
      ...options,
    },
    plugins
  )

  useEffect(() => {
    if (!enableAutoplay || !emblaApi) return
    const autoplay = emblaApi.plugins().autoplay
    if (!autoplay) return
    const snapList = emblaApi.scrollSnapList()
    if (!snapList || snapList.length === 0) return
    try {
      autoplay.play()
    } catch {
      // Autoplay может падать до инициализации слайдов — игнорируем
    }
  }, [emblaApi, enableAutoplay])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  if (slides.length === 0) {
    return null
  }

  return (
    <div className={`embla ${className}`} role="region" aria-label="Карусель">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className={`embla__slide ${slideClassName}`} role="group" aria-roledescription="slide">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showNavigation && slides.length > 1 && (
        <>
          <button
            className="embla__prev"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Предыдущий слайд"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="embla__next"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Следующий слайд"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {showPagination && slides.length > 1 && (
        <div className="embla__pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`embla__pagination__button ${
                index === selectedIndex ? 'embla__pagination__button--active' : ''
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
