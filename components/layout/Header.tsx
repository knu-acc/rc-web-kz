'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { AnalyticsEvents } from '@/lib/analytics-events'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { SkipToContent } from '@/components/ui/SkipToContent'

// Динамический импорт ThemeToggle без SSR для предотвращения hydration mismatch
const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => (
    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 dark:bg-secondary-700 p-0.5">
      <div className="h-5 w-5 rounded-full bg-white shadow-sm" />
    </div>
  ),
})

interface HeaderProps {
  /** Server-rendered logo slot for LCP (avoids waiting for client hydration) */
  logoSlot?: React.ReactNode
}

interface NavLink {
  href: string
  label: string
  submenu?: { href: string; label: string }[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Главная' },
  {
    href: '/services',
    label: 'Услуги',
    submenu: [
      { href: '/landing-page', label: 'Landing Page' },
      { href: '/corporate-site', label: 'Корпоративный сайт' },
      { href: '/online-store', label: 'Интернет-магазин' },
      { href: '/tilda-site', label: 'Сайт на Tilda' },
      { href: '/seo-optimization', label: 'SEO-оптимизация' },
      { href: '/website-advertising', label: 'Реклама сайта' },
      { href: '/web-design', label: 'Веб-дизайн' },
      { href: '/website-price', label: 'Цены на сайты' },
    ]
  },
  {
    href: '/about',
    label: 'О компании',
    submenu: [
      { href: '/about', label: 'О нас' },
      { href: '/process', label: 'Процесс работы' },
      { href: '/guarantees', label: 'Гарантии' },
      { href: '/technologies', label: 'Технологии' },
      { href: '/why-choose-us', label: 'Почему выбирают' },
    ]
  },
  { href: '/blog', label: 'Блог' },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/contact', label: 'Контакты' },
]

export function Header({ logoSlot }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <SkipToContent />
      {/* Skip to main content link для доступности */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Перейти к основному содержимому
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMenuOpen
            ? 'py-3 bg-white dark:bg-secondary-900 shadow-md border-b border-secondary-100 dark:border-secondary-800'
            : isScrolled
              ? 'py-2 md:py-3 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-xl shadow-soft border-b border-secondary-100 dark:border-secondary-800'
              : 'py-4 md:py-5 bg-transparent'
        }`}
        style={{
          paddingTop: `max(${isScrolled ? '0.5rem' : '1rem'}, env(safe-area-inset-top, ${isScrolled ? '0.5rem' : '1rem'}))`,
        }}
        role="banner"
      >
        <nav className="container-custom" aria-label="Основная навигация">
        <div className="flex items-center justify-between">
          {logoSlot ?? (
            <Link
              href="/"
              className="relative group"
              aria-label="Главная страница"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          )}

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              if (link.submenu) {
                const isSubmenuOpen = openSubmenu === link.label
                return (
                  <div 
                    key={`nav-${idx}-${link.label}`} 
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu(link.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button
                      className="relative px-4 py-2 text-secondary-600 dark:text-secondary-300 font-medium rounded-lg transition-all duration-300 hover:text-secondary-800 dark:hover:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      aria-haspopup="true"
                      aria-expanded={isSubmenuOpen}
                      onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.label)}
                    >
                      <span>{link.label}</span>
                      <svg className={`w-4 h-4 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-secondary-900 rounded-xl shadow-lg border border-secondary-100 dark:border-secondary-800 transition-all duration-300 z-50 ${
                        isSubmenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      role="menu"
                      aria-label={`Подменю ${link.label}`}
                    >
                      <div className="p-2">
                        {link.submenu.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-4 py-2 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 hover:text-secondary-800 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                            role="menuitem"
                            onClick={() => setOpenSubmenu(null)}
                          >
                            <span>{subLink.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={`nav-link-${idx}-${link.href}`}
                  href={link.href}
                  prefetch={link.href === '/' || link.href === '/portfolio' || link.href === '/blog'}
                  className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 group ${
                    pathname === link.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-secondary-600 dark:text-secondary-300 hover:text-secondary-800 dark:hover:text-white'
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary-500 transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <WhatsAppLink
              className="btn-primary text-sm"
              ariaLabel="Связаться в WhatsApp"
              onClick={() => AnalyticsEvents.whatsappClick()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Связаться
            </WhatsAppLink>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <span className="burger-line w-6 h-0.5 bg-secondary-700 dark:bg-secondary-300 rounded-full transition-all duration-300" />
              <span className="burger-line w-6 h-0.5 bg-secondary-700 dark:bg-secondary-300 rounded-full transition-all duration-300" />
              <span className="burger-line w-6 h-0.5 bg-secondary-700 dark:bg-secondary-300 rounded-full transition-all duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {mounted && (
        <>
        {/* \u0417\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u043c\u0435\u043d\u044e */}
        <div
          className={`md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-0 z-40 bg-white dark:bg-secondary-900 transition-all duration-500 ease-out overflow-y-auto pt-20 ${isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-8 pointer-events-none'
            }`}
          style={{
            height: '100dvh',
            maxHeight: '100dvh',
            paddingTop: `max(5rem, env(safe-area-inset-top, 5rem))`,
          }}
          role="menu"
          aria-label="Мобильное меню"
          aria-hidden={!isMenuOpen}
          suppressHydrationWarning
        >
        <div className="container-custom py-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              link.submenu ? (
                <div key={link.label} className="border-b border-secondary-100 dark:border-secondary-800">
                  <button
                    className="w-full text-left text-2xl font-semibold text-secondary-800 dark:text-secondary-100 py-4 flex items-center justify-between"
                    onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                    aria-expanded={openSubmenu === link.label}
                    aria-controls={`mobile-submenu-${index}`}
                  >
                    <span>{link.label}</span>
                    <svg className={`w-5 h-5 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    id={`mobile-submenu-${index}`}
                    className={`pl-4 pb-2 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
                      openSubmenu === link.label ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                    }`}
                  >
                    {link.submenu.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={closeMenu}
                        className="block text-lg text-secondary-600 dark:text-secondary-300 py-2 hover:text-secondary-800 dark:hover:text-white transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-2xl font-semibold py-4 border-b border-secondary-100 dark:border-secondary-800 transition-colors ${
                    pathname === link.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-secondary-800 dark:text-secondary-100 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <WhatsAppLink
              className="btn-whatsapp justify-center"
              onClick={closeMenu}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </WhatsAppLink>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-outline justify-center"
              onClick={closeMenu}
            >
              Позвонить: {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
        </div>
        </>
      )}
    </header>
    </>
  )
}
