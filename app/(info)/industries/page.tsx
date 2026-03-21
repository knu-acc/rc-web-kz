import Link from 'next/link'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { industries } from '@/data/industries'
import { Heart, UtensilsCrossed, Scissors, Building2, GraduationCap, Car, Scale, HardHat, ArrowRight } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  UtensilsCrossed,
  Scissors,
  Building2,
  GraduationCap,
  Car,
  Scale,
  HardHat,
}

export const metadata = generateInfoMetadata({
  title: 'Сайты для бизнеса по отраслям',
  description: 'Создание сайтов для разных отраслей бизнеса в Алматы: медицина, рестораны, салоны красоты, недвижимость, образование, автобизнес, юриспруденция, строительство.',
  keywords: ['сайт для бизнеса', 'сайт для отрасли', 'отраслевые сайты алматы', 'сайт для компании'],
  path: '/industries',
})

export default function IndustriesPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Отрасли', href: '/industries' }]} />

      {/* Hero */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Отрасли"
          title="Сайты для бизнеса по отраслям"
          description="Создаём сайты с учётом специфики вашей отрасли. Каждое решение включает функционал, который нужен именно вашему бизнесу."
        />
      </section>

      {/* Industries Grid */}
      <section className="pb-12 md:pb-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon]
            return (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                <BentoCard className="h-full transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-surface-dark" />}
                  </div>
                  <h2 className="font-heading font-semibold text-lg text-text-main">{industry.name}</h2>
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3">{industry.description}</p>
                  <div className="flex items-center gap-1 text-brand text-sm font-medium mt-auto pt-2">
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </div>
                </BentoCard>
              </Link>
            )
          })}
        </div>
      </section>

      <CTA />
    </main>
  )
}
