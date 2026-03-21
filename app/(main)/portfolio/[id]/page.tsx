import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioItems } from '@/data/portfolio'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTA } from '@/components/sections/CTA'
import {
  ExternalLink,
  Calendar,
  Clock,
  User,
  Code2,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: item.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = portfolioItems.find((item) => item.id === id)

  if (!project) {
    return { title: 'Проект не найден' }
  }

  return {
    title: `${project.title} | Портфолио RC-WEB.KZ`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${SITE_CONFIG.url}/portfolio/${id}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/portfolio/${id}`,
    },
  }
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = portfolioItems.find((item) => item.id === id)

  if (!project) {
    notFound()
  }

  const detailItems = [
    { icon: User, label: 'Клиент', value: project.client },
    { icon: Calendar, label: 'Год', value: project.year },
    { icon: Clock, label: 'Срок', value: project.duration },
    {
      icon: Code2,
      label: 'Технологии',
      value: project.technologies?.join(', '),
    },
  ].filter((d) => d.value)

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Портфолио', href: '/portfolio' },
          { label: project.title, href: `/portfolio/${id}` },
        ]}
      />

      <article className="py-12 md:py-16 lg:py-24 px-4 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <Badge className="mb-4">{project.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter text-text-main">
            {project.title}
          </h1>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project image */}
        <div className="rounded-4xl overflow-hidden shadow-xl mb-12">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1000px"
            priority
          />
        </div>

        {/* Details grid */}
        {detailItems.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {detailItems.map((d) => {
              const Icon = d.icon
              return (
                <BentoCard key={d.label} className="p-5 text-center">
                  <Icon className="w-5 h-5 text-brand mx-auto mb-2" />
                  <div className="text-xs text-text-muted uppercase tracking-wide">
                    {d.label}
                  </div>
                  <div className="font-heading font-semibold text-text-main mt-1 text-sm">
                    {d.value}
                  </div>
                </BentoCard>
              )
            })}
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <BentoCard className="p-8 mb-8">
            <h2 className="text-xl font-heading font-bold text-text-main mb-6">
              Ключевые особенности
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-text-muted"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        )}

        {/* Case Study */}
        {project.caseStudy && (
          <div className="space-y-6 mb-12">
            {project.caseStudy.challenge && (
              <BentoCard className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text-main">
                    Задача
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </BentoCard>
            )}

            {project.caseStudy.solution && (
              <BentoCard className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text-main">
                    Решение
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </BentoCard>
            )}

            {project.caseStudy.results &&
              project.caseStudy.results.length > 0 && (
                <BentoCard className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-text-main">
                      Результаты
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {project.caseStudy.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-text-muted"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </BentoCard>
              )}
          </div>
        )}

        {/* Metrics */}
        {project.caseStudy?.metrics &&
          project.caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {project.caseStudy.metrics.map((metric, idx) => (
                <BentoCard
                  key={idx}
                  dark
                  className="p-6 text-center items-center"
                >
                  <div className="text-3xl font-heading font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    {metric.label}
                  </div>
                </BentoCard>
              ))}
            </div>
          )}

        {/* Link to live site */}
        {project.url && (
          <div className="flex justify-center mb-12">
            <Button size="lg" href={project.url}>
              Открыть сайт <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </article>

      <CTA />
    </>
  )
}
