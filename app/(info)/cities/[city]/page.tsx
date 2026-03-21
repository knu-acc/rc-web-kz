import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities } from '@/data/cities'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Rocket, Shield, BarChart3, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) return {}
  return generateInfoMetadata({
    title: `Создание сайтов ${city.nameIn}`,
    description: city.description,
    keywords: city.keywords,
    path: `/cities/${city.slug}`,
  })
}

const advantages = [
  { icon: Rocket, title: 'Быстрый старт', desc: 'Запуск сайта от 5 рабочих дней. Удалённая работа без потери качества.' },
  { icon: Shield, title: 'Гарантия качества', desc: 'Бесплатная техподдержка 30 дней, исправление ошибок, консультации.' },
  { icon: Globe, title: 'SEO-оптимизация', desc: 'Сайт с первого дня оптимизирован для поисковых систем Google и Яндекс.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Подключаем Google Analytics и Яндекс.Метрику для отслеживания результатов.' },
]

const serviceLinks = [
  { label: 'Landing Page', href: '/landing-page', desc: 'Одностраничники для рекламы' },
  { label: 'Корпоративный сайт', href: '/corporate-site', desc: 'Представительство компании' },
  { label: 'Интернет-магазин', href: '/online-store', desc: 'С каталогом и оплатой' },
  { label: 'SEO-оптимизация', href: '/seo-optimization', desc: 'Продвижение в поиске' },
]

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) notFound()

  const otherCities = cities.filter((c) => c.slug !== slug).slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Создание сайтов ${city.nameIn}`,
    description: city.description,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'Country', name: 'Казахстан' },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Города', href: '/cities' }, { label: city.name }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-5">
            <Badge variant="accent">
              <MapPin className="w-3 h-3 mr-1 inline" />{city.name}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-text-main">
              Создание сайтов<br /><span className="text-brand">{city.nameIn}</span>
            </h1>
            <p className="text-lg text-text-muted max-w-lg">{city.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">Заказать сайт <ArrowRight className="w-5 h-5 ml-2" /></Button>
              <Button variant="outline" size="lg" href="/portfolio">Портфолио</Button>
            </div>
          </div>

          {/* Why this city */}
          <BentoCard dark className="p-8">
            <h2 className="text-xl font-heading font-bold text-white mb-3">Зачем сайт {city.nameIn}?</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-5">{city.whyCity}</p>
            <h3 className="text-sm font-heading font-semibold text-white/50 uppercase tracking-wider mb-3">Ключевые отрасли</h3>
            <div className="flex flex-wrap gap-2">
              {city.industries.map((ind) => (
                <span key={ind} className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium">{ind}</span>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Services for city */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Услуги" title={`Что мы создаём ${city.nameIn}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          {city.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-border-light/20">
              <CheckCircle2 className="w-5 h-5 text-surface-dark shrink-0" />
              <span className="font-medium text-text-main text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Почему выбирают нас" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12">
          {advantages.map((a) => {
            const Icon = a.icon
            return (
              <div key={a.title} className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border-light/20">
                <div className="w-10 h-10 bg-surface-dark/5 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-surface-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-main">{a.title}</h3>
                  <p className="text-sm text-text-muted mt-1">{a.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Service type links — internal linking */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Решения" title={`Типы сайтов ${city.nameIn}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <BentoCard interactive className="h-full">
                <h3 className="font-heading font-semibold text-text-main">{link.label}</h3>
                <p className="text-sm text-text-muted">{link.desc}</p>
                <span className="text-xs font-medium text-surface-dark mt-auto flex items-center gap-1">
                  Подробнее <ArrowUpRight className="w-3 h-3" />
                </span>
              </BentoCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Other cities */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Города" title="Работаем по всему Казахстану" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {otherCities.map((c) => (
            <Link key={c.slug} href={`/cities/${c.slug}`}>
              <BentoCard interactive className="h-full items-center text-center">
                <MapPin className="w-5 h-5 text-surface-dark" />
                <h3 className="font-heading font-semibold text-sm text-text-main">{c.name}</h3>
              </BentoCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading badge="Заказать" title={`Заказать сайт ${city.nameIn}`} align="left" />
            <p className="text-text-muted mt-4 max-w-md">
              Работаем удалённо по всему Казахстану. Все обсуждения через WhatsApp, Telegram или Zoom. Физическое присутствие не требуется.
            </p>
          </div>
          <BentoCard className="p-8">
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
