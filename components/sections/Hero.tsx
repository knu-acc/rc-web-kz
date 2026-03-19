/**
 * Hero Section — Modern Minimalist SaaS
 * Переработан: новый H1 с LSI-фразами, 3 social proof, убраны spinning decorations
 */
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950/50" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-100/40 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-100/30 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-7">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Веб-студия в Алматы — принимаем заявки
            </div>

            {/* Main heading — SEO: «создание сайтов», «Алматы», «цена» */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold font-display tracking-tight leading-[1.1] text-secondary-900 dark:text-white text-balance">
              Создание сайтов в Алматы{' '}
              <span className="gradient-text">от 85 000 тенге</span>{' '}
              — под ключ за 7–10 дней
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-xl leading-relaxed">
              120+ проектов: лендинги, корпоративные сайты, интернет-магазины.
              SEO-оптимизация включена в каждый проект. Работаем по всему Казахстану.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="btn-dark inline-flex items-center gap-2 group"
                aria-label="Получить предложение в WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Получить предложение
              </a>
              <Link
                href="/portfolio"
                prefetch
                className="btn-secondary group"
                aria-label="Смотреть кейсы и портфолио"
              >
                Смотреть кейсы
                <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Social proof — 3 metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-xl p-4 border border-secondary-100 dark:border-secondary-700 text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 leading-none mb-1">
                  {SITE_CONFIG.projectsCount}
                </div>
                <p className="text-xs text-secondary-500 dark:text-secondary-400 leading-tight">проектов<br />выполнено</p>
              </div>
              <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-xl p-4 border border-secondary-100 dark:border-secondary-700 text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 leading-none mb-1">
                  {SITE_CONFIG.aggregateRating.ratingValue}★
                </div>
                <p className="text-xs text-secondary-500 dark:text-secondary-400 leading-tight">средний<br />рейтинг</p>
              </div>
              <div className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-xl p-4 border border-secondary-100 dark:border-secondary-700 text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 leading-none mb-1">
                  {SITE_CONFIG.yearsOnMarket} лет
                </div>
                <p className="text-xs text-secondary-500 dark:text-secondary-400 leading-tight">опыта в<br />разработке</p>
              </div>
            </div>
          </div>

          {/* Right: Featured image */}
          <div className="relative lg:h-[580px]">
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-violet-500/10 rounded-3xl transition-all duration-500 group-hover:from-primary-500/15" />
                <Image
                  src="/img/main.png"
                  alt="Разработка сайтов в Алматы — веб-студия RC-WEB.KZ на Next.js"
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 600px"
                  className="w-full h-auto object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-700"
                  priority
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent z-10" />
              </div>

              {/* Single floating card — SEO badge */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 shadow-large rounded-2xl p-4 z-20 hidden sm:flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-secondary-900 dark:text-white">SEO + скорость</p>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400">Google PageSpeed 90+</p>
                </div>
              </div>

              {/* Trust badge top-right */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white rounded-2xl px-4 py-3 z-20 hidden sm:block shadow-large">
                <p className="text-xs font-medium opacity-80">от</p>
                <p className="text-xl font-extrabold leading-none">85 000 ₸</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
