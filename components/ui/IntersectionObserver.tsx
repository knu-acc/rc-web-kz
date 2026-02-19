'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface IntersectionObserverProps {
  children: ReactNode | ((isVisible: boolean) => ReactNode)
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  className?: string
}

/**
 * Компонент для lazy loading секций с использованием Intersection Observer
 */
export function IntersectionObserver({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  triggerOnce = true,
  className = '',
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || (triggerOnce && isVisible)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce, isVisible])

  return (
    <div ref={ref} className={className}>
      {typeof children === 'function' ? children(isVisible) : isVisible ? children : null}
    </div>
  )
}
