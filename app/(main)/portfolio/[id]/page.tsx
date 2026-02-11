import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioItems } from '@/data/portfolio'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { RelatedServices } from '@/components/sections/RelatedServices'
import { PortfolioViewTracker } from '@/components/analytics/PortfolioViewTracker'

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = portfolioItems.find((item) => item.id === id)

  if (!project) {
    return {
      title: 'Проект не найден',
    }
  }

  return {
    title: `${project.title} | Портфолио RC-WEB.KZ`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/portfolio/${id}`,
    },
  }
}

export default async function PortfolioProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = portfolioItems.find((item) => item.id === id)

  if (!project) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Портфолио', url: `${SITE_CONFIG.url}/portfolio` },
    { name: project.title, url: `${SITE_CONFIG.url}/portfolio/${id}` },
  ])

  // Находим другие проекты той же категории
  const relatedProjects = portfolioItems
    .filter((item) => item.id !== id && item.category === project.category)
    .slice(0, 3)

  return (
    <>
      <PortfolioViewTracker projectId={project.id} projectName={project.title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Портфолио', href: '/portfolio' },
          { name: project.title, href: `/portfolio/${id}` },
        ]}
      />

      <article className="min-h-screen bg-white dark:bg-secondary-950">
        {/* Hero Section */}
        <section className="section pt-16">
          <div className="container-custom max-w-4xl">
            <div className="text-left md:text-left md:text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="heading-xl mb-6">{project.title}</h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl md:mx-auto">
                {project.description}
              </p>
            </div>

            {/* Project Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
                  О проекте
                </h2>
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
                  Детали проекта
                </h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-secondary-500 dark:text-secondary-400">
                      Категория
                    </dt>
                    <dd className="text-lg text-secondary-900 dark:text-white">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-secondary-500 dark:text-secondary-400">
                      Ссылка на сайт
                    </dt>
                    <dd>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {project.url}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* CTA */}
            <div className="text-left md:text-center bg-gradient-to-r from-primary-600 to-violet-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Хотите такой же сайт?</h2>
              <p className="mb-6 opacity-90">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Обсудить проект
                </Link>
                <Link href="/contact" className="btn-outline bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Оставить заявку
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="section bg-secondary-50 dark:bg-secondary-900">
            <div className="container-custom">
              <h2 className="heading-lg text-left md:text-center mb-12">
                Другие проекты в категории "{project.category}"
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.id}`}
                    className="group block"
                  >
                    <div className="bg-white dark:bg-secondary-950 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-secondary-900 dark:text-white mb-2 line-clamp-2">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        <RelatedServices currentService={project.category} />
      </article>
    </>
  )
}
