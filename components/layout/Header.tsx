'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Блог', href: '/blog' },
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] max-w-7xl z-50">
        <nav
          className={`bg-surface/90 backdrop-blur-xl border border-border-light/20 rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-shadow duration-300 ${scrolled ? 'shadow-float' : ''}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-heading font-bold text-xl text-text-main">
            RC
            <span className="text-brand">.</span>
            WEB
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-text-muted hover:text-text-main hover:bg-canvas transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 h-10 px-5 bg-brand text-white text-sm font-medium rounded-full hover:bg-brand-hover hover:shadow-glow transition-all duration-300 ease-bento active:scale-[0.97]"
              aria-label="Написать в WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center hover:bg-canvas transition-colors"
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-surface-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-heading font-semibold text-white hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 h-14 px-8 bg-brand text-white text-lg font-medium rounded-full hover:bg-brand-hover transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Написать в WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
