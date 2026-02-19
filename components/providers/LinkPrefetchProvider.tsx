'use client'

import { useEffect } from 'react'
import { setupLinkPrefetch } from '@/lib/link-prefetch'
import { setupLazyImages } from '@/lib/performance-utils'

export function LinkPrefetchProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Настраиваем prefetch для всех ссылок после монтирования
    setupLinkPrefetch()

    // Настраиваем lazy loading для изображений
    setupLazyImages()

    // Также настраиваем для динамически добавленных ссылок
    const observer = new MutationObserver(() => {
      setupLinkPrefetch()
      setupLazyImages()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return <>{children}</>
}
