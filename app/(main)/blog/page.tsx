import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { blogPosts, getAllCategories } from '@/data/blog'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BlogContent } from './BlogContent'

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

export default function BlogPage() {
  const categories = getAllCategories()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Блог', href: '/blog' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-4">Блог о создании сайтов</h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Полезные статьи о веб-разработке, SEO-продвижении, дизайне и маркетинге в Алматы
            </p>
          </div>

          <BlogContent posts={blogPosts} categories={categories} />

          {blogPosts.length === 0 && (
            <div className="text-left md:text-center py-12">
              <p className="text-secondary-600 dark:text-secondary-300">Статьи скоро появятся...</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
