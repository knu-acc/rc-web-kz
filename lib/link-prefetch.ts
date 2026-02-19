/**
 * Утилита для prefetching ссылок при hover
 * Используется для улучшения производительности навигации
 */

export function prefetchLink(href: string) {
  if (typeof window === 'undefined') return

  // Проверяем, что ссылка внутренняя
  if (!href.startsWith('/')) return

  // Используем встроенный prefetch через создание link элемента
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.as = 'document'
  link.href = href
  document.head.appendChild(link)
}

/**
 * Добавляет prefetch при hover для всех внутренних ссылок
 */
export function setupLinkPrefetch() {
  if (typeof window === 'undefined') return

  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]')

  links.forEach((link) => {
    // Проверяем, что prefetch еще не добавлен
    if (link.dataset.prefetchAdded) return

    link.dataset.prefetchAdded = 'true'

    let prefetchTimeout: NodeJS.Timeout | null = null

    link.addEventListener(
      'mouseenter',
      () => {
        // Небольшая задержка перед prefetch для оптимизации
        prefetchTimeout = setTimeout(() => {
          prefetchLink(link.href)
        }, 100)
      },
      { passive: true }
    )

    link.addEventListener(
      'mouseleave',
      () => {
        if (prefetchTimeout) {
          clearTimeout(prefetchTimeout)
          prefetchTimeout = null
        }
      },
      { passive: true }
    )

    // Prefetch при focus для accessibility
    link.addEventListener(
      'focus',
      () => {
        prefetchLink(link.href)
      },
      { passive: true }
    )
  })
}
