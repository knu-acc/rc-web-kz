import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Search, FileSearch, Wrench, Link2, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'SEO-оптимизация',
  serviceDescription: 'SEO-продвижение сайтов в Алматы. Аудит, оптимизация, наращивание ссылочной массы, выход в ТОП Google и Яндекс.',
  price: '50 000₸/мес',
  path: '/seo-optimization',
  keywords: ['seo продвижение алматы', 'seo оптимизация', 'продвижение сайта алматы', 'seo услуги казахстан'],
})

const features = [
  { icon: FileSearch, title: 'SEO-аудит', desc: 'Полный технический и контентный аудит сайта. Выявляем ошибки, мешающие продвижению.' },
  { icon: Search, title: 'Подбор ключевых слов', desc: 'Семантическое ядро на основе анализа спроса. Кластеризация запросов по страницам.' },
  { icon: Wrench, title: 'Техническая оптимизация', desc: 'Скорость загрузки, мобильность, индексация, структура URL, Schema.org разметка.' },
  { icon: Link2, title: 'Ссылочное продвижение', desc: 'Наращивание качественной ссылочной массы. Размещение на авторитетных площадках.' },
  { icon: BarChart3, title: 'Отчётность', desc: 'Ежемесячные отчёты по позициям, трафику, конверсиям и выполненным работам.' },
  { icon: TrendingUp, title: 'Рост трафика', desc: 'Системный подход к росту органического трафика и улучшению позиций в выдаче.' },
]

const included = [
  'Полный SEO-аудит сайта',
  'Сбор и кластеризация семантического ядра',
  'Оптимизация мета-тегов и контента',
  'Техническая оптимизация (скорость, мобильность)',
  'Настройка Schema.org и структурированных данных',
  'Ссылочное продвижение (10+ ссылок/мес)',
  'Оптимизация Google My Business',
  'Ежемесячные отчёты и рекомендации',
  'Мониторинг позиций в Google и Яндекс',
  'Консультации по контент-стратегии',
]

export default function SeoOptimizationService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'SEO-оптимизация' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 50 000₸/мес</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              <span className="text-brand">SEO</span>-<br />оптимизация
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Выводим сайты в ТОП Google и Яндекс. Комплексное SEO-продвижение: аудит, оптимизация, контент, ссылки. Прозрачная отчётность.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Заказать SEO <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Кейсы продвижения
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">ТОП</div>
            <div className="text-2xl font-heading font-semibold text-white">Google и Яндекс</div>
            <p className="text-white/60">Комплексное продвижение с гарантией результата</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">3-6</div>
                <div className="text-sm text-white/50">мес. до ТОП</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">+200%</div>
                <div className="text-sm text-white/50">Трафик</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Что делаем" title="Комплексный подход к SEO" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <BentoCard key={f.title} interactive>
                <div className="w-12 h-12 bg-surface-dark/5 rounded-2xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* What's included */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading badge="Тариф" title="Что входит в ежемесячное продвижение" align="left" />
            <div className="flex flex-col gap-3 mt-8">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-semantic-success flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <BentoCard className="p-8">
            <h3 className="font-heading font-semibold text-xl text-text-main">Бесплатный SEO-аудит</h3>
            <p className="text-text-muted text-sm">Оставьте заявку и получите аудит вашего сайта бесплатно</p>
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
