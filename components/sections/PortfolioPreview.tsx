import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { portfolioItems } from '@/data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export function PortfolioPreview() {
  const items = portfolioItems.slice(0, 6)

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        badge="Портфолио"
        title="Наши работы"
        description="Реальные проекты для реального бизнеса в Казахстане"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.id}`}
            className="group relative bg-surface rounded-4xl overflow-hidden border border-border-light/20 hover:-translate-y-2 hover:shadow-float transition-all duration-500 ease-bento"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium">{item.category}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg text-text-main group-hover:text-surface-dark transition-colors">{item.title}</h3>
              <p className="text-sm text-text-muted mt-1 line-clamp-2">{item.description}</p>
              {item.technologies && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-canvas text-text-muted">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg" href="/portfolio">
          Все проекты
        </Button>
      </div>
    </section>
  )
}
