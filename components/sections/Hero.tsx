/**
 * Hero Section — Awwwards-level editorial design
 */
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start py-16 lg:py-24">

          {/* Left: Typography-dominant content */}
          <div className="flex flex-col">
            {/* Status line */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-secondary-400 dark:text-secondary-500 tracking-widest uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              Веб-студия в Алматы
            </div>

            {/* H1 — oversized editorial */}
            <h1 className="heading-display text-secondary-900 dark:text-white mb-8">
              Создание<br />
              сайтов<br />
              <span className="text-primary-600 dark:text-primary-400">в&nbsp;Алматы</span>
            </h1>

            {/* Price + USP */}
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-10">
              <span className="text-2xl font-bold text-secondary-900 dark:text-white tracking-tight">
                от 85 000 ₸
              </span>
              <span className="text-base text-secondary-400 dark:text-secondary-500">
                · под ключ за 7–10 дней
              </span>
            </div>

            {/* Description */}
            <p className="text-base text-secondary-500 dark:text-secondary-400 leading-relaxed max-w-md mb-10">
              120+ проектов: лендинги, корпоративные сайты, интернет-магазины.
              SEO-оптимизация и адаптив включены.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-16">
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="btn-dark inline-flex items-center gap-2"
                aria-label="Получить предложение в WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Получить предложение
              </a>
              <Link
                href="/portfolio"
                prefetch
                className="btn-outline group"
                aria-label="Смотреть кейсы и портфолио"
              >
                Смотреть кейсы
                <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats bar */}
            <div className="border-t border-secondary-100 dark:border-secondary-800 pt-8 grid grid-cols-3 gap-6">
              {[
                { value: SITE_CONFIG.projectsCount, label: 'проектов' },
                { value: `${SITE_CONFIG.aggregateRating.ratingValue}★`, label: 'рейтинг' },
                { value: `${SITE_CONFIG.yearsOnMarket}+`, label: 'лет опыта' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-secondary-900 dark:text-white tracking-tight">{s.value}</div>
                  <div className="text-sm text-secondary-400 dark:text-secondary-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image — clean, no decoration */}
          <div className="relative lg:sticky lg:top-24 hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/img/main.png"
                alt="Разработка сайтов в Алматы — веб-студия RC-WEB.KZ"
                width={600}
                height={700}
                sizes="420px"
                className="w-full h-auto object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
