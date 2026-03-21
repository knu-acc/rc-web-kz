import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateInfoMetadata } from '@/lib/metadata'
import { portfolioItems } from '@/data/portfolio'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Портфолио',
  description:
    'Портфолио RC-WEB.KZ: более 120 выполненных проектов по созданию сайтов в Алматы. Лендинги, корпоративные сайты, интернет-магазины.',
  keywords: [
    'портфолио сайтов Алматы',
    'примеры сайтов Алматы',
    'наши работы RC-WEB',
  ],
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Портфолио', href: '/portfolio' },
        ]}
      />

      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Портфолио"
          title="Наши работы"
          description={`${portfolioItems.length} проектов — лендинги, корпоративные сайты, интернет-магазины. Каждый проект создан под задачи клиента.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group relative bg-surface rounded-4xl border border-border-light/40 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge>{item.category}</Badge>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-text-main" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-text-main group-hover:text-brand transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted mt-2 line-clamp-2">
                  {item.description}
                </p>
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-canvas text-xs font-medium text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
