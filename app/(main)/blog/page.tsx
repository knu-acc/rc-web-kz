import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateInfoMetadata } from '@/lib/metadata'
import { blogPosts, categoryLabels } from '@/data/blog'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Clock, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Блог о веб-разработке',
  description:
    'Полезные статьи о создании сайтов, SEO-продвижении, веб-дизайне и маркетинге в Алматы. Гайды, кейсы, советы от веб-студии RC-WEB.KZ.',
  keywords: [
    'блог о создании сайтов',
    'статьи о веб-разработке',
    'seo статьи алматы',
    'веб-дизайн статьи',
  ],
  path: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Блог', href: '/blog' },
        ]}
      />

      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Блог"
          title="Блог о веб-разработке"
          description="Полезные статьи о создании сайтов, SEO, дизайне и маркетинге"
        />

        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">Статьи скоро появятся...</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative bg-surface rounded-4xl border border-border-light/20 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Optional image */}
              {post.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge>
                    {categoryLabels[post.category] || post.category}
                  </Badge>
                  <span className="text-xs text-text-muted">{post.date}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-text-main group-hover:text-surface-dark transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-text-muted line-clamp-3 leading-relaxed">
                  {post.description || post.metaDescription}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light/20">
                  {post.readingTime && (
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime} мин
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-xs font-medium text-surface-dark opacity-0 group-hover:opacity-100 transition-opacity">
                    Читать <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
