import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Создание сайтов по Казахстану',
  description: 'Создание сайтов для бизнеса в городах Казахстана. Астана, Шымкент, Караганда, Актобе, Атырау, Павлодар, Семей, Костанай. Удалённая работа, доступные цены.',
  keywords: ['создание сайтов казахстан', 'веб-разработка казахстан', 'заказать сайт казахстан'],
  path: '/cities',
})

export default function CitiesPage() {
  return (
    <>
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Города' }]} />

        <div className="mt-8 max-w-3xl">
          <Badge variant="accent">Города Казахстана</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
            Создание сайтов<br /><span className="text-brand">по Казахстану</span>
          </h1>
          <p className="mt-6 text-xl text-text-muted max-w-lg">
            Работаем удалённо с бизнесом из любого города Казахстана. Современные сайты, доступные цены, сроки от 5 дней.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Регионы" title="Выберите ваш город" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cities/${city.slug}`}>
              <BentoCard interactive className="h-full">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-surface-dark shrink-0" />
                  <h2 className="font-heading font-bold text-xl text-text-main">{city.name}</h2>
                </div>
                <p className="text-sm text-text-muted line-clamp-2">{city.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {city.industries.slice(0, 2).map((ind) => (
                    <span key={ind} className="text-xs px-2 py-0.5 rounded-full bg-canvas text-text-muted">{ind}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-surface-dark text-sm font-medium mt-auto">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </div>
              </BentoCard>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
