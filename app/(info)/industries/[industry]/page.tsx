import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { industries, getIndustryBySlug } from '@/data/industries'
import { Heart, UtensilsCrossed, Scissors, Building2, GraduationCap, Car, Scale, HardHat, CheckCircle2, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react'

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

export async function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>
}): Promise<Metadata> {
  const { industry: slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return { title: 'Отрасль не найдена' }
  }

  return generateInfoMetadata({
    title: `Создание сайтов ${industry.nameFor}`,
    description: industry.description,
    keywords: industry.keywords,
    path: `/industries/${industry.slug}`,
  })
}

const serviceLinks = [
  { label: 'Landing Page', href: '/landing-page', desc: 'Продающие одностраничники' },
  { label: 'Корпоративный сайт', href: '/corporate-site', desc: 'Полноценное представительство' },
  { label: 'Интернет-магазин', href: '/online-store', desc: 'С каталогом и оплатой' },
  { label: 'SEO-оптимизация', href: '/seo-optimization', desc: 'Продвижение в поиске' },
]

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>
}) {
  const { industry: slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const Icon = iconMap[industry.icon]
  const relatedIndustries = industries.filter((i) => i.slug !== slug).slice(0, 4)

  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Отрасли', href: '/industries' },
          { label: industry.name, href: `/industries/${industry.slug}` },
        ]}
      />

      {/* Hero — dark, less orange */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5">
            {Icon && (
              <div className="w-12 h-12 rounded-2xl bg-surface-dark flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-text-main">
              Сайты {industry.nameFor}
            </h1>
            <p className="text-lg text-text-muted max-w-lg">
              {industry.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Обсудить проект <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Портфолио
              </Button>
            </div>
          </div>

          {/* Stats card */}
          <BentoCard dark className="p-8">
            <h2 className="text-xl font-heading font-bold text-white mb-4">Что мы делаем {industry.nameFor}</h2>
            <div className="space-y-3">
              {industry.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features — dark icons instead of orange */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Функционал"
          title={`Что включает сайт ${industry.nameFor}`}
          description="Каждый проект разрабатывается с учётом потребностей отрасли"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          {industry.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-border-light/20">
              <CheckCircle2 className="w-5 h-5 text-surface-dark shrink-0" />
              <span className="font-medium text-text-main text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services — internal links */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Услуги"
          title="Подходящие решения"
          description="Выберите тип сайта для вашей отрасли"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <BentoCard interactive className="h-full">
                <h3 className="font-heading font-semibold text-text-main">{link.label}</h3>
                <p className="text-sm text-text-muted">{link.desc}</p>
                <span className="text-xs font-medium text-surface-dark mt-auto flex items-center gap-1">
                  Подробнее <ArrowUpRight className="w-3 h-3" />
                </span>
              </BentoCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Related industries */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Отрасли"
          title="Другие направления"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {relatedIndustries.map((ri) => {
            const RiIcon = iconMap[ri.icon]
            return (
              <Link key={ri.slug} href={`/industries/${ri.slug}`}>
                <BentoCard interactive className="h-full items-center text-center">
                  {RiIcon && (
                    <div className="w-10 h-10 rounded-xl bg-surface-dark/5 flex items-center justify-center">
                      <RiIcon className="w-5 h-5 text-surface-dark" />
                    </div>
                  )}
                  <h3 className="font-heading font-semibold text-sm text-text-main">{ri.name}</h3>
                </BentoCard>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading
              badge="Заявка"
              title={`Заказать сайт ${industry.nameFor}`}
              align="left"
            />
            <p className="text-text-muted mt-4 max-w-md">
              Оставьте заявку и мы свяжемся с вами для бесплатной консультации. Расскажем о сроках, стоимости и подходящих решениях.
            </p>
          </div>
          <BentoCard className="p-8">
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      <CTA />
    </main>
  )
}
