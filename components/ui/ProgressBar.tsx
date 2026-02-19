'use client'

import { useEffect, useState } from 'react'

/**
 * Компонент для отображения прогресса прокрутки страницы
 */
export function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollableHeight = documentHeight - windowHeight
      const progressPercent = (scrollTop / scrollableHeight) * 100
      setProgress(Math.min(100, Math.max(0, progressPercent)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50 transition-all duration-150 ease-out origin-left"
      style={{ transform: `scaleX(${progress / 100})` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Прогресс прокрутки страницы"
    />
  )
}
