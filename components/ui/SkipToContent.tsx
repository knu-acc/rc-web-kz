'use client'

import { useEffect, useState } from 'react'

/**
 * Компонент для skip-to-content ссылки (улучшенная версия)
 * Позволяет пользователям с клавиатурой быстро перейти к основному контенту
 */
export function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Показываем ссылку при нажатии Tab (только для клавиатурной навигации)
      if (e.key === 'Tab' && !isVisible) {
        setIsVisible(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const handleClick = () => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!isVisible) return null

  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault()
        handleClick()
      }}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-950"
      aria-label="Перейти к основному контенту"
    >
      Перейти к основному контенту
    </a>
  )
}
