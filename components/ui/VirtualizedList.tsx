'use client'

import { useMemo, useRef, useEffect, useState, ReactNode } from 'react'

interface VirtualizedListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  itemHeight: number
  containerHeight: number
  overscan?: number
  className?: string
}

/**
 * Виртуализированный список для оптимизации рендеринга длинных списков
 * Рендерит только видимые элементы + небольшой overscan для плавной прокрутки
 */
export function VirtualizedList<T>({
  items,
  renderItem,
  itemHeight,
  containerHeight,
  overscan = 3,
  className = '',
}: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { startIndex, endIndex, totalHeight } = useMemo(() => {
    const visibleStart = Math.floor(scrollTop / itemHeight)
    const visibleEnd = Math.ceil((scrollTop + containerHeight) / itemHeight)
    
    const startIndex = Math.max(0, visibleStart - overscan)
    const endIndex = Math.min(items.length - 1, visibleEnd + overscan)
    
    const totalHeight = items.length * itemHeight
    
    return { startIndex, endIndex, totalHeight }
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan])

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex + 1).map((item, index) => ({
      item,
      index: startIndex + index,
    }))
  }, [items, startIndex, endIndex])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
      role="list"
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ item, index }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: index * itemHeight,
              height: itemHeight,
              width: '100%',
            }}
            role="listitem"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}
