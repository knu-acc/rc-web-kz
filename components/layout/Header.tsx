'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'Главная' },
  { 
    href: '#', 
    label: 'Услуги',
    submenu: [
      { href: '/landing-page', label: 'Landing Page' },
      { href: '/corporate-site', label: 'Корпоративный сайт' },
      { href: '/online-store', label: 'Интернет-магазин' },
      { href: '/tilda-site', label: 'Сайт на Tilda' },
      { href: '/seo-optimization', label: 'SEO оптимизация' },
      { href: '/website-advertising', label: 'Реклама сайта' },
      { href: '/web-design', label: 'Веб-дизайн' },
    ]
  },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/contact', label: 'Контакты' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-soft border-b border-secondary-100' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <button className="relative px-4 py-2 text-secondary-600 font-medium rounded-lg transition-all duration-300 hover:text-secondary-800 hover:bg-secondary-50 flex items-center gap-1">
                    {link.label}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-secondary-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-2 text-secondary-700 rounded-lg hover:bg-secondary-50 hover:text-secondary-800 transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-secondary-600 font-medium rounded-lg transition-all duration-300 hover:text-secondary-800 hover:bg-secondary-50 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              className="btn-primary text-sm"
              aria-label="Связаться в WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Связаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${isMenuOpen ? 'burger-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span className="burger-line w-6 h-0.5 bg-secondary-700 rounded-full transition-all duration-300" />
            <span className="burger-line w-6 h-0.5 bg-secondary-700 rounded-full transition-all duration-300" />
            <span className="burger-line w-6 h-0.5 bg-secondary-700 rounded-full transition-all duration-300" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-[100] bg-white transition-all duration-300 overflow-y-auto ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        style={{
          top: isScrolled ? '73px' : '80px'
        }}
      >
        <div className="container-custom py-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              link.submenu ? (
                <div key={link.label} className="border-b border-secondary-100">
                  <div className="text-2xl font-semibold text-secondary-800 py-4">{link.label}</div>
                  <div className="pl-4 pb-2 space-y-2">
                    {link.submenu.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={closeMenu}
                        className="block text-lg text-secondary-600 py-2 hover:text-secondary-800 transition-colors"
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
                  className="text-2xl font-semibold text-secondary-800 py-4 border-b border-secondary-100 transition-colors hover:text-secondary-800"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={SOCIAL_LINKS.whatsapp}
              className="btn-whatsapp justify-center"
              onClick={closeMenu}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Написать в WhatsApp
            </a>
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
    </header>
  )
}
