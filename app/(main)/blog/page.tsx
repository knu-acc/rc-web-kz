import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { blogPosts, getAllCategories } from '@/data/blog'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Блог о создании сайтов | Полезные статьи - RC-WEB.KZ',
  description: 'Полезные статьи о создании сайтов, SEO-продвижении, веб-дизайне и маркетинге в Алматы. Гайды, кейсы, советы от веб-студии RC-WEB.KZ.',
  keywords: [
    'блог о создании сайтов',
    'статьи о веб-разработке',
    'seo статьи алматы',
    'веб-дизайн статьи',
  ],
  openGraph: {
    title: 'Блог о создании сайтов | RC-WEB.KZ',
    description: 'Полезные статьи о создании сайтов, SEO и веб-дизайне',
    url: `${SITE_CONFIG.url}/blog`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог о создании сайтов | Полезные статьи - RC-WEB.KZ',
    description: 'Полезные статьи о создании сайтов, SEO-продвижении, веб-дизайне и маркетинге в Алматы. Гайды, кейсы, советы от веб-студии RC-WEB.KZ.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
}

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  seo: 'SEO и продвижение',
  design: 'Дизайн и UX',
  marketing: 'Реклама и маркетинг',
  cases: 'Кейсы',
  technical: 'Технические темы',
}

export default function BlogPage() {
  const categories = getAllCategories()

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Блог', url: `${SITE_CONFIG.url}/blog` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs
        items={[
          { name: 'Главная', url: SITE_CONFIG.url },
          { name: 'Блог', url: `${SITE_CONFIG.url}/blog` },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-4">Блог о создании сайтов</h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Полезные статьи о веб-разработке, SEO-продвижении, дизайне и маркетинге в Алматы
            </p>
          </div>

          {/* Категории */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${category}`}
                className="px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {categoryLabels[category] || category}
              </Link>
            ))}
          </div>

          {/* Список статей */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-secondary-950 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                {post.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-primary-100 text-primary-700">
                      {categoryLabels[post.category] || post.category}
                    </span>
                    {post.readingTime && (
                      <span className="text-xs text-secondary-500">
                        {post.readingTime} мин чтения
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-secondary-500">{post.date}</time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Читать →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 dark:text-secondary-300">Статьи скоро появятся...</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
