import Link from 'next/link'
import { MessageCircle, Phone, Mail, Send, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { formatPhone } from '@/lib/utils'

const serviceLinks = [
  { label: 'Landing Page', href: '/landing-page' },
  { label: 'Корпоративный сайт', href: '/corporate-site' },
  { label: 'Интернет-магазин', href: '/online-store' },
  { label: 'Сайт на Tilda', href: '/tilda-site' },
  { label: 'SEO-оптимизация', href: '/seo-optimization' },
  { label: 'Веб-дизайн', href: '/web-design' },
]

const infoLinks = [
  { label: 'Блог', href: '/blog' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Отзывы', href: '/reviews' },
  { label: 'Процесс', href: '/process' },
  { label: 'Технологии', href: '/technologies' },
  { label: 'Глоссарий', href: '/glossary' },
]

const companyLinks = [
  { label: 'О нас', href: '/about' },
  { label: 'Почему мы', href: '/why-choose-us' },
  { label: 'Цены', href: '/website-price' },
  { label: 'Политика', href: '/privacy' },
  { label: 'Условия', href: '/terms' },
]

const cityLinks = [
  { label: 'Астана', href: '/cities/astana' },
  { label: 'Шымкент', href: '/cities/shymkent' },
  { label: 'Караганда', href: '/cities/karaganda' },
  { label: 'Актобе', href: '/cities/aktobe' },
  { label: 'Атырау', href: '/cities/atyrau' },
  { label: 'Павлодар', href: '/cities/pavlodar' },
  { label: 'Семей', href: '/cities/semey' },
  { label: 'Костанай', href: '/cities/kostanay' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark text-white rounded-t-[40px] md:rounded-t-[80px] mt-20">
      {/* CTA Section */}
      <div className="pt-20 pb-16 px-4 md:px-12 text-center">
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Готовы начать
          <span className="text-brand"> проект</span>?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Обсудим вашу задачу и предложим лучшее решение. Бесплатная консультация и оценка проекта.
        </p>
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 h-14 md:h-16 px-8 md:px-10 bg-brand text-white text-lg font-semibold rounded-full hover:bg-brand-hover hover:shadow-glow transition-all duration-300 ease-bento active:scale-[0.97]"
        >
          <MessageCircle className="w-5 h-5" />
          Написать в WhatsApp
        </a>
      </div>

      {/* Links Grid */}
      <div className="border-t border-white/10 px-4 md:px-12 pt-16 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Услуги */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Услуги
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Информация
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Города */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Города
            </h3>
            <ul className="space-y-3">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {formatPhone(SITE_CONFIG.phone)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {SITE_CONFIG.region}
                </span>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Компания
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {currentYear} {SITE_CONFIG.name}. Все права защищены.
          </p>
          <p className="text-sm text-white/50">
            Работаем 24/7
          </p>
        </div>
      </div>
    </footer>
  )
}
