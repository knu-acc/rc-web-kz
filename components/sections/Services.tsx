/**
 * Services Section — Numbered rows with hover reveal
 */
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/constants'

const services = [
  {
    id: 1,
    num: '01',
    title: 'Landing Page',
    description: 'Продающие одностраничники с высокой конверсией для рекламных кампаний',
    price: '85–135 тыс ₸',
    href: '/landing-page',
  },
  {
    id: 2,
    num: '02',
    title: 'Корпоративный сайт',
    description: 'Многостраничные сайты, которые представляют ваш бизнес и генерируют лиды',
    price: '135–195 тыс ₸',
    href: '/corporate-site',
    badge: 'Популярное',
  },
  {
    id: 3,
    num: '03',
    title: 'Интернет-магазин',
    description: 'E-commerce решения с удобной админкой, каталогом и интеграцией оплаты',
    price: '175–275 тыс ₸',
    href: '/online-store',
  },
  {
    id: 4,
    num: '04',
    title: 'Tilda / Конструктор',
    description: 'Быстрые решения на Tilda или WordPress для малого бизнеса',
    price: 'от 120 тыс ₸',
    href: '/tilda-site',
  },
  {
    id: 5,
    num: '05',
    title: 'SEO-оптимизация',
    description: 'Продвижение сайта в Google и Яндекс по ключевым запросам вашего бизнеса',
    price: 'от 50 тыс ₸/мес',
    href: '/seo-optimization',
  },
  {
    id: 6,
    num: '06',
    title: 'Веб-дизайн',
    description: 'UI/UX дизайн в Figma: прототип, фирменный стиль, дизайн-система',
    price: 'от 70 тыс ₸',
    href: '/web-design',
  },
  {
    id: 7,
    num: '07',
    title: 'Реклама сайта',
    description: 'Настройка Google Ads и Яндекс.Директ для быстрого привлечения клиентов',
    price: 'от 40 тыс ₸/мес',
    href: '/website-advertising',
  },
]

export function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="services" className="section bg-secondary-950 dark:bg-black text-white">
      <div className="container-custom">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-10 border-b border-white/10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Услуги</p>
            <h2 className="heading-lg text-white">
              Создание сайтов<br />
              любой сложности
            </h2>
          </div>
          <p className="text-base text-white/40 max-w-xs md:text-right">
            Адаптив, SEO и 30 дней поддержки включены в каждый проект
          </p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-white/[0.07]">
          {services.map((service) => {
            const isHovered = hoveredId === service.id
            return (
              <Link
                key={service.id}
                href={service.href}
                prefetch
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex items-start md:items-center justify-between gap-6 py-6 md:py-7 transition-all duration-200 focus:outline-none"
                aria-label={`Услуга: ${service.title}`}
              >
                {/* Number */}
                <span className="text-sm font-bold text-white/20 group-hover:text-white/40 transition-colors w-8 flex-shrink-0 pt-0.5 md:pt-0">
                  {service.num}
                </span>

                {/* Title + description (description reveals on hover) */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-300 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary-600/20 text-primary-400 border border-primary-600/30">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  {/* Description: always visible on mobile, hover on desktop */}
                  <p className={`text-sm text-white/40 mt-1.5 leading-relaxed md:transition-all md:duration-300 md:overflow-hidden ${
                    isHovered
                      ? 'md:max-h-20 md:opacity-100 md:mt-1.5'
                      : 'md:max-h-0 md:opacity-0 md:mt-0'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Price + arrow */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-sm font-semibold text-white/60 group-hover:text-white/90 transition-colors hidden sm:block tabular-nums">
                    {service.price}
                  </span>
                  <svg
                    className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-all duration-200 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-base text-white/40 max-w-md">
            Не знаете, что выбрать? Расскажите о задаче — подберём оптимальное решение бесплатно
          </p>
          <a
            href={SOCIAL_LINKS.whatsapp}
            className="btn-dark whitespace-nowrap inline-flex items-center gap-2 flex-shrink-0"
            aria-label="Получить бесплатную консультацию"
          >
            Получить консультацию
          </a>
        </div>

      </div>
    </section>
  )
}
