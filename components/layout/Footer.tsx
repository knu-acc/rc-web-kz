'use client'

import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

const footerLinks = {
  navigation: [
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: '/blog' },
    { label: 'Портфолио', href: '/portfolio' },
    { label: 'Отзывы', href: '/reviews' },
    { label: 'Контакты', href: '/contact' },
  ],
  services: [
    { label: 'Landing Page', href: '/landing-page' },
    { label: 'Корпоративный сайт', href: '/corporate-site' },
    { label: 'Интернет-магазин', href: '/online-store' },
    { label: 'Сайт на Tilda', href: '/tilda-site' },
    { label: 'SEO-оптимизация', href: '/seo-optimization' },
    { label: 'Веб-дизайн', href: '/web-design' },
    { label: 'Реклама сайта', href: '/website-advertising' },
    { label: 'Цены на сайты', href: '/website-price' },
  ],
  company: [
    { label: 'О нас', href: '/about' },
    { label: 'Процесс работы', href: '/process' },
    { label: 'Гарантии', href: '/guarantees' },
    { label: 'Технологии', href: '/technologies' },
    { label: 'Почему выбирают', href: '/why-choose-us' },
    { label: 'Глоссарий', href: '/glossary' },
    { label: 'Районы Алматы', href: '/districts' },
  ],
  useful: [
    { label: 'Как создать сайт', href: '/how-to-create-website' },
    { label: 'Бесплатный сайт', href: '/free-website' },
    { label: 'Публикация сайта', href: '/publish-website' },
    { label: 'Сайт для бизнеса', href: '/website-for-company' },
    { label: 'Курсы программирования', href: '/programming-courses' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white border-t border-secondary-800 dark:border-secondary-900">
      {/* Main footer content */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Создаём современные веб-сайты для бизнеса в Алматы.
              Уникальный дизайн, быстрая загрузка, SEO-оптимизация.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#0088cc] transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Навигация по сайту">
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Услуги">
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="О компании">
            <h3 className="text-lg font-semibold mb-6">О компании</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Useful */}
          <nav aria-label="Полезное">
            <h3 className="text-lg font-semibold mb-6">Полезное</h3>
            <ul className="space-y-3">
              {footerLinks.useful.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Дополнительные ссылки */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-400 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Все права защищены.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-secondary-400 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <span aria-hidden="true" className="hidden md:inline">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
            <span aria-hidden="true" className="hidden md:inline">·</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
