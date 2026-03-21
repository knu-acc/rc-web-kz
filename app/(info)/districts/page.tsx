import type { Metadata } from 'next'
import { almatyDistricts } from '@/data/districts'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Создание сайтов по районам Алматы',
  description: 'Создание сайтов для бизнеса в каждом районе Алматы. Алмалинский, Медеуский, Бостандыкский, Ауэзовский и другие районы. Выезд на встречу, доступные цены.',
  keywords: ['создание сайтов алматы районы', 'веб-разработка районы алматы', 'сайты по районам алматы'],
  path: '/districts',
})

export default function DistrictsPage() {
  return (
    <>
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Районы Алматы' }]} />

        <div className="mt-8 max-w-3xl">
          <Badge variant="accent">Районы Алматы</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
            Создание сайтов<br /><span className="text-brand">по районам Алматы</span>
          </h1>
          <p className="mt-6 text-xl text-text-muted max-w-lg">
            Работаем с бизнесом из любого района Алматы. Выезд на встречу, локальное SEO, доступные цены.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Районы" title="Выберите ваш район" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {almatyDistricts.map((district) => (
            <Link key={district.slug} href={`/districts/${district.slug}`}>
              <BentoCard interactive className="h-full">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-surface-dark shrink-0" />
                  <h2 className="font-heading font-bold text-xl text-text-main">{district.nameFull}</h2>
                </div>
                <p className="text-sm text-text-muted line-clamp-2">{district.description}</p>
                <div className="flex flex-wrap gap-2">
                  {district.keywords.slice(0, 2).map((kw) => (
                    <span key={kw} className="text-xs bg-surface-dark/5 text-brand px-2 py-1 rounded-full">{kw}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-brand text-sm font-medium mt-auto">
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
