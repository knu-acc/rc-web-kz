'use client'

import { useEffect, useRef } from 'react'

interface KeyboardNavigationProps {
  children: React.ReactNode
  className?: string
  /**
   * Селектор для элементов, между которыми будет навигация
   * По умолчанию: 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
   */
  selector?: string
  /**
   * Включить циклическую навигацию (после последнего элемента переходит к первому)
   */
  cycle?: boolean
}

/**
 * Компонент для улучшенной keyboard navigation
 * Обеспечивает правильную навигацию с клавиатуры между интерактивными элементами
 */
export function KeyboardNavigation({
  children,
  className = '',
  selector = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
  cycle = true,
}: KeyboardNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Обрабатываем только Tab и стрелки
      if (e.key !== 'Tab' && !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        return
      }

      const focusableElements = Array.from(
        container.querySelectorAll<HTMLElement>(selector)
      ).filter((el) => {
        // Фильтруем скрытые элементы
        const style = window.getComputedStyle(el)
        return (
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          !el.hasAttribute('disabled') &&
          !el.hasAttribute('aria-disabled')
        )
      })

      if (focusableElements.length === 0) return

      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)

      let nextIndex = currentIndex

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift+Tab - назад
          nextIndex = currentIndex > 0 ? currentIndex - 1 : cycle ? focusableElements.length - 1 : -1
        } else {
          // Tab - вперед
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : cycle ? 0 : -1
        }
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        // Стрелки вниз/вправо - вперед
        e.preventDefault()
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : cycle ? 0 : -1
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        // Стрелки вверх/влево - назад
        e.preventDefault()
        nextIndex = currentIndex > 0 ? currentIndex - 1 : cycle ? focusableElements.length - 1 : -1
      }

      if (nextIndex >= 0 && nextIndex < focusableElements.length) {
        focusableElements[nextIndex].focus()
        e.preventDefault()
      } else if (!cycle && nextIndex === -1) {
        // Если цикл отключен и мы достигли конца, убираем фокус
        ;(document.activeElement as HTMLElement)?.blur()
      }
    }

    container.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [selector, cycle])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
