import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { almatyDistricts } from '@/data/districts'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, MapPin, Clock, CheckCircle2, Globe, Rocket, Shield, BarChart3 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function generateStaticParams() {
  return almatyDistricts.map((district) => ({ district: district.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const { district: slug } = await params
  const district = almatyDistricts.find((d) => d.slug === slug)
  if (!district) return {}
  return generateInfoMetadata({
    title: `Создание сайтов в ${district.nameFull}е Алматы`,
    description: district.description,
    keywords: district.keywords,
    path: `/districts/${district.slug}`,
  })
}

const advantages = [
  { icon: Rocket, title: 'Быстрый старт', desc: 'Запуск сайта от 5 рабочих дней. Выезд на встречу в ваш район.' },
  { icon: Shield, title: 'Гарантия качества', desc: 'Бесплатная техподдержка 30 дней, исправление ошибок, консультации.' },
  { icon: Globe, title: 'Локальное SEO', desc: 'Сайт оптимизирован под ваш район для привлечения местных клиентов.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Подключаем Google Analytics и Яндекс.Метрику для отслеживания результатов.' },
]

export default async function DistrictPage({ params }: { params: Promise<{ district: string }> }) {
  const { district: slug } = await params
  const district = almatyDistricts.find((d) => d.slug === slug)
  if (!district) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Создание сайтов в ${district.nameFull}е`,
    description: district.description,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: {
      '@type': 'Place',
      name: district.nameFull,
      containedInPlace: { '@type': 'City', name: 'Алматы' },
      ...(district.coordinates && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: district.coordinates.latitude,
          longitude: district.coordinates.longitude,
        },
      }),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Районы', href: '/districts' }, { label: district.nameFull }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">Выезд на встречу</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              Создание сайтов<br /><span className="text-brand">{district.nameFull}</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">{district.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">Заказать сайт <ArrowRight className="w-5 h-5 ml-2" /></Button>
              <Button variant="outline" size="lg" href="/portfolio">Портфолио</Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <MapPin className="w-8 h-8 text-surface-dark" />
            <div className="text-3xl font-heading font-bold text-white">{district.nameFull}</div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4" /> Срок: от 5 дней
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {district.keywords.slice(0, 3).map((kw) => (
                <span key={kw} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full">{kw}</span>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge={district.name} title="Наши услуги в вашем районе" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {['Лендинг', 'Корпоративный сайт', 'Интернет-магазин', 'Сайт-визитка', 'SEO-оптимизация', 'Техподдержка'].map((feature) => (
            <BentoCard key={feature} interactive>
              <CheckCircle2 className="w-6 h-6 text-surface-dark" />
              <h3 className="font-heading font-semibold text-lg text-text-main">{feature}</h3>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Почему выбирают нас" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {advantages.map((a) => {
            const Icon = a.icon
            return (
              <BentoCard key={a.title} interactive>
                <div className="w-12 h-12 bg-surface-dark/5 rounded-2xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{a.title}</h3>
                <p className="text-sm text-text-muted">{a.desc}</p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading badge="Заказать" title={`Заказать сайт в ${district.nameFull}е`} align="left" />
            <p className="text-text-muted mt-4 max-w-md">
              Выезжаем на встречу в {district.nameFull}. Обсуждение проекта, консультация и запуск — всё в удобном для вас формате.
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
