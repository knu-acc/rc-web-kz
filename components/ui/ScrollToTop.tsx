'use client'

import { useEffect, useState } from 'react'

interface ScrollToTopProps {
  threshold?: number
  className?: string
}

/**
 * Компонент для плавной прокрутки наверх страницы
 */
export function ScrollToTop({ threshold = 300, className = '' }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${className}`}
      aria-label="Прокрутить наверх"
    >
      <svg
        className="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}
