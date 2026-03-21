import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BentoCard } from '@/components/ui/BentoCard'
import { MapPin, Building2, Briefcase } from 'lucide-react'

const cityLinks = [
  { label: 'Создание сайтов в Астане', href: '/cities/astana' },
  { label: 'Создание сайтов в Шымкенте', href: '/cities/shymkent' },
  { label: 'Создание сайтов в Караганде', href: '/cities/karaganda' },
  { label: 'Создание сайтов в Актобе', href: '/cities/aktobe' },
  { label: 'Создание сайтов в Атырау', href: '/cities/atyrau' },
  { label: 'Создание сайтов в Павлодаре', href: '/cities/pavlodar' },
  { label: 'Создание сайтов в Семее', href: '/cities/semey' },
  { label: 'Создание сайтов в Костанае', href: '/cities/kostanay' },
]

const districtLinks = [
  { label: 'Алмалинский район', href: '/districts/almaly' },
  { label: 'Ауэзовский район', href: '/districts/auezov' },
  { label: 'Бостандыкский район', href: '/districts/bostandyk' },
  { label: 'Медеуский район', href: '/districts/medeu' },
]

const industryLinks = [
  { label: 'Сайт для медицины', href: '/industries/medical', icon: Building2 },
  { label: 'Сайт для ресторана', href: '/industries/restaurant', icon: Building2 },
  { label: 'Сайт для салона красоты', href: '/industries/beauty', icon: Building2 },
  { label: 'Сайт для недвижимости', href: '/industries/real-estate', icon: Building2 },
  { label: 'Сайт для образования', href: '/industries/education', icon: Briefcase },
  { label: 'Сайт для автобизнеса', href: '/industries/auto', icon: Briefcase },
  { label: 'Сайт для юристов', href: '/industries/law', icon: Briefcase },
  { label: 'Сайт для строительства', href: '/industries/construction', icon: Briefcase },
]

export function InternalLinks() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        badge="География"
        title="Работаем по всему Казахстану"
        description="Создаём сайты для бизнеса в крупных городах и районах Алматы"
      />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Cities */}
        <BentoCard>
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-surface-dark" />
            <h3 className="font-heading font-semibold text-lg text-surface-dark">Города Казахстана</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-3 py-1.5 rounded-full bg-canvas text-text-muted hover:text-surface-dark hover:bg-surface-dark/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/cities" className="text-sm font-medium text-surface-dark hover:underline mt-2">
            Все города →
          </Link>
        </BentoCard>

        {/* Districts */}
        <BentoCard>
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-surface-dark" />
            <h3 className="font-heading font-semibold text-lg text-surface-dark">Районы Алматы</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {districtLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-3 py-1.5 rounded-full bg-canvas text-text-muted hover:text-surface-dark hover:bg-surface-dark/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/districts" className="text-sm font-medium text-surface-dark hover:underline mt-2">
            Все районы →
          </Link>
        </BentoCard>
      </div>

      {/* Industry links */}
      <div className="mt-8">
        <h3 className="font-heading font-semibold text-lg text-surface-dark mb-4 text-center">Сайты по отраслям</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industryLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <BentoCard interactive className="items-center text-center py-5 px-4">
                <span className="text-sm font-medium text-surface-dark">{link.label}</span>
              </BentoCard>
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/industries" className="text-sm font-medium text-surface-dark hover:underline">
            Все отрасли →
          </Link>
        </div>
      </div>
    </section>
  )
}
