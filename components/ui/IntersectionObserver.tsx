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
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current || (triggerOnce && isVisible) || typeof window === 'undefined') return

    const element = ref.current

    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (triggerOnce && element && observerRef.current) {
          observerRef.current.unobserve(element)
        }
      } else if (!triggerOnce) {
        setIsVisible(false)
      }
    }

    const options: IntersectionObserverInit = {
      threshold,
      rootMargin,
    }

    observerRef.current = new window.IntersectionObserver(callback, options)

    observerRef.current.observe(element)

    return () => {
      if (element && observerRef.current) {
        observerRef.current.unobserve(element)
      }
      observerRef.current = null
    }
  }, [threshold, rootMargin, triggerOnce, isVisible])

  return (
    <div ref={ref} className={className}>
      {typeof children === 'function' ? children(isVisible) : isVisible ? children : null}
    </div>
  )
}
