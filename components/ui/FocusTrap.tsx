'use client'

import { useEffect, useRef } from 'react'

interface FocusTrapProps {
  children: React.ReactNode
  active?: boolean
  className?: string
}

/**
 * Компонент для ловушки фокуса (focus trap)
 * Используется в модальных окнах для предотвращения выхода фокуса за пределы модального окна
 */
export function FocusTrap({ children, active = true, className = '' }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    // Сохраняем текущий активный элемент
    previousActiveElementRef.current = document.activeElement as HTMLElement

    const container = containerRef.current
    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

    const getFocusableElements = (): HTMLElement[] => {
      return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => {
          const style = window.getComputedStyle(el)
          return (
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            !el.hasAttribute('disabled') &&
            !el.hasAttribute('aria-disabled')
          )
        }
      )
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) {
        e.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        // Shift+Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Фокусируем первый элемент при активации
    const focusableElements = getFocusableElements()
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    container.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
      // Возвращаем фокус на предыдущий элемент при деактивации
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus()
      }
    }
  }, [active])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
