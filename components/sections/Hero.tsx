/**
 * Hero Section
 * Main landing section with headline, CTAs and featured image
 */
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-secondary-50/50" />
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 animate-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium stagger-1 animate-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Веб-разработка в Алматы
            </div>

            {/* Main heading */}
            <h1 className="heading-xl stagger-2 animate-in">
              <span className="block">Создание сайтов в Алматы</span>
              <span className="gradient-text">RC-WEB.KZ</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-secondary-600 max-w-xl leading-relaxed stagger-3 animate-in">
              Создаём профессиональные сайты в Алматы: лендинги, многостраничные сайты, интернет-магазины. 
              Быстро, надёжно, с бесплатной технической поддержкой и SEO-оптимизацией.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 stagger-4 animate-in">
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                className="btn-dark group"
                aria-label="Заказать сайт"
              >
                Заказать сайт
              </a>
              
              <Link 
                href="/portfolio" 
                className="btn-secondary group"
              >
                Портфолио
              </Link>
            </div>

            {/* Social proof */}
            <div className="grid grid-cols-2 gap-6 pt-4 stagger-5 animate-in">
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-secondary-200">
                <div className="text-3xl font-bold text-secondary-800 mb-1">120+</div>
                <p className="text-sm text-secondary-600">Проектов выполнено с 2020 года</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-secondary-200">
                <div className="text-3xl font-bold text-secondary-800 mb-1">5 лет</div>
                <p className="text-sm text-secondary-600">Создаём сайты для клиентов по Казахстану</p>
              </div>
            </div>
          </div>

          {/* Right: Featured image */}
          <div className="relative lg:h-[600px] animate-in stagger-3">
            {/* Decorative floating lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-violet-300/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            </div>
            
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/main.png"
                  alt="Веб-разработка сайтов в Алматы"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent" />
              </div>

              {/* Floating card: SEO */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl animate-float relative z-10">
                {/* Floating dotted spheres around SEO card */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-dashed border-primary-300/40 rounded-full animate-float pointer-events-none" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-dashed border-violet-300/40 rounded-full animate-float pointer-events-none" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">SEO оптимизация</p>
                    <p className="text-sm text-secondary-500">Топ позиции в Google</p>
                  </div>
                </div>
              </div>

              {/* Floating card: Speed */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl animate-float relative z-10" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">Быстрая загрузка</p>
                    <p className="text-sm text-secondary-500">&lt; 2 сек</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
