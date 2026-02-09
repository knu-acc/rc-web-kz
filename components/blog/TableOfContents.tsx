'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const headingsRef = useRef<Heading[]>([])

  useEffect(() => {
    const headingElements = document.querySelectorAll('article h2, article h3, article h4')
    const usedIds = new Set<string>()

    const extractedHeadings: Heading[] = Array.from(headingElements).map((el, index) => {
      if (!el.id) {
        let baseId =
          el.textContent
            ?.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/^-+|-+$/g, '') || 'heading'

        // Если baseId пустой или только дефисы, используем fallback
        if (!baseId || baseId === '-') {
          baseId = `heading-${index}`
        }

        // Гарантируем уникальность ID
        let uniqueId = baseId
        let suffix = 0
        while (usedIds.has(uniqueId)) {
          suffix++
          uniqueId = `${baseId}-${suffix}`
        }
        usedIds.add(uniqueId)
        el.id = uniqueId
      } else {
        // Если ID уже есть, проверяем уникальность
        let uniqueId = el.id
        let suffix = 0
        while (usedIds.has(uniqueId)) {
          suffix++
          uniqueId = `${el.id}-${suffix}`
        }
        usedIds.add(uniqueId)
        if (uniqueId !== el.id) {
          el.id = uniqueId
        }
      }
      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1)),
      }
    })

    headingsRef.current = extractedHeadings
    setHeadings(extractedHeadings)
  }, [content])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100
    const current = headingsRef.current

    for (let i = current.length - 1; i >= 0; i--) {
      const element = document.getElementById(current[i].id)
      if (element && element.offsetTop <= scrollPosition) {
        setActiveId(current[i].id)
        return
      }
    }
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings.length, handleScroll])

  if (headings.length === 0) {
    return null
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className="sticky top-24 hidden lg:block max-h-[calc(100vh-8rem)] overflow-y-auto"
      aria-label="Содержание статьи"
    >
      <div className="bg-secondary-50 dark:bg-secondary-900 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700">
        <h2 className="text-lg font-bold mb-4 text-secondary-900 dark:text-white">Содержание</h2>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={`${heading.id}-${index}`}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHeading(heading.id)
                }}
                className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                  activeId === heading.id
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium'
                    : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-secondary-900 dark:hover:text-white'
                }`}
                style={{
                  paddingLeft: `${(heading.level - 2) * 1 + 0.75}rem`,
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
