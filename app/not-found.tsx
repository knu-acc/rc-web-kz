import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { BentoCard } from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/Button'
import { Home, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Страница не найдена | 404 - RC-WEB',
  description: 'Запрашиваемая страница не найдена. Вернитесь на главную или свяжитесь с нами для создания сайта в Алматы.',
  robots: 'noindex, nofollow',
}

const helpfulLinks = [
  { href: '/landing-page', label: 'Landing Page' },
  { href: '/corporate-site', label: 'Корпоративный сайт' },
  { href: '/online-store', label: 'Интернет-магазин' },
  { href: '/portfolio', label: 'Портфолио работ' },
  { href: '/website-price', label: 'Цены на сайты' },
  { href: '/contact', label: 'Контакты' },
]

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-canvas pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-[120px] sm:text-[160px] font-heading font-bold leading-none text-surface-dark">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mt-2">
            Страница не найдена
          </h1>
          <p className="text-lg text-text-muted mt-4 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена.
            Но мы можем создать для вас отличный сайт!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button size="lg" href="/">
            <Home className="w-5 h-5 mr-2" /> На главную
          </Button>
          <Button variant="outline" size="lg" href="/contact">
            Связаться с нами
          </Button>
        </div>

        <BentoCard className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-6 h-6 text-surface-dark" />
            <h2 className="text-xl font-heading font-semibold text-text-main">
              Возможно, вы искали:
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-3 rounded-2xl bg-surface-alt hover:bg-surface-dark/5 transition-colors text-text-main hover:text-surface-dark"
              >
                <span className="font-medium">{link.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </BentoCard>

        <p className="text-text-muted text-sm mt-8 text-center">
          Нужна помощь? Позвоните:{' '}
          <a href={`tel:${SITE_CONFIG.phone}`} className="text-surface-dark font-medium hover:underline">
            {SITE_CONFIG.phone}
          </a>
        </p>
      </div>
    </section>
  )
}
