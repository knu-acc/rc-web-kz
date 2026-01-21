/**
 * Services Section
 * Displays available services in a Bento Grid layout
 * Featured service gets larger card with background image
 */
'use client'

import Image from 'next/image'
import { SOCIAL_LINKS } from '@/lib/constants'

// Service offerings data
const services = [
  {
    id: 1,
    title: 'Landing Page',
    description: 'Продающие одностраничники с высокой конверсией',
    price: '85-135 тыс ₸',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-600',
    featured: false,
  },
  {
    id: 2,
    title: 'Корпоративный сайт',
    description: 'Многостраничные сайты для серьёзного бизнеса',
    price: '135-195 тыс ₸',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
    featured: true,
  },
  {
    id: 3,
    title: 'Интернет-магазин',
    description: 'E-commerce решения с удобной админкой',
    price: '175-275 тыс ₸',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
    featured: false,
  },
  {
    id: 4,
    title: 'Tilda / Конструктор',
    description: 'Быстрые решения на популярных платформах',
    price: 'от 160 тыс ₸ и выше',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-600',
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="section bg-secondary-900 text-white relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 text-secondary-300 text-sm font-medium mb-4">
            Услуги
          </span>
          <h2 className="heading-lg mb-6 text-white">
            Создание сайтов <span className="gradient-text">любой сложности</span>
          </h2>
          <p className="text-lg text-white/80">
            Выберите подходящий тип сайта для вашего бизнеса. 
            Каждый проект включает адаптивный дизайн, SEO-оптимизацию и техподдержку.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                service.featured 
                  ? 'md:col-span-2 lg:row-span-2 overflow-hidden'
                  : 'bg-secondary-800 border border-secondary-700 hover:border-secondary-600 hover:shadow-lg text-white'
              }`}
            >
              {/* Featured card background */}
              {service.featured && (
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/img/slider.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/95 via-blue-600/90 to-blue-700/95" />
                </div>
              )}

              {/* Service icon */}
              <div className={`mb-6 ${
                service.featured 
                  ? 'w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white' 
                  : 'w-14 h-14 rounded-2xl bg-gradient-to-br ' + service.gradient + ' text-white flex items-center justify-center'
              }`}>
                {service.icon}
              </div>

              {/* Service info */}
              <div className={service.featured ? 'space-y-4 relative z-10' : 'space-y-3'}>
                <h3 className={`font-bold ${service.featured ? 'text-2xl text-white' : 'text-xl text-white'}`}>
                  {service.title}
                </h3>
                <p className={service.featured ? 'text-white/80 text-lg' : 'text-white/70'}>
                  {service.description}
                </p>
                <p className={`font-bold ${service.featured ? 'text-3xl text-white' : 'text-xl text-white'}`}>
                  {service.price}
                </p>
              </div>

              {/* CTA link */}
              <div className={`mt-6 ${service.featured ? 'relative z-10' : ''}`}>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  className={`inline-flex items-center gap-2 font-semibold transition-all ${
                    service.featured 
                      ? 'px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-white/90 hover:shadow-lg' 
                      : 'text-white hover:gap-4 hover:text-secondary-300'
                  }`}
                >
                  Заказать
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Featured badge */}
              {service.featured && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium">
                  Популярное
                </div>
              )}

              {/* Hover glow for non-featured cards */}
              {!service.featured && (
                <div 
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-10 -z-10 blur-xl bg-gradient-to-br ${service.gradient}`} 
                  style={{ transform: 'scale(0.95)' }} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
