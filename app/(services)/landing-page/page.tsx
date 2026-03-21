import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Zap, Target, BarChart3, Clock, Smartphone, Search, CheckCircle2, Palette } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Создание Landing Page',
  serviceDescription: 'Разработка продающих лендингов с высокой конверсией для бизнеса в Алматы. Современный дизайн, адаптивная верстка, SEO-оптимизация.',
  price: '85 000₸',
  path: '/landing-page',
  keywords: ['лендинг пейдж алматы', 'создание лендинга', 'заказать landing page', 'одностраничный сайт алматы'],
})

const features = [
  { icon: Target, title: 'Высокая конверсия', desc: 'Проверенные приёмы продающего дизайна, A/B тестирование элементов и призывов к действию.' },
  { icon: Smartphone, title: 'Адаптивный дизайн', desc: 'Идеальное отображение на любых устройствах — от смартфонов до десктопов.' },
  { icon: Zap, title: 'Быстрая загрузка', desc: 'PageSpeed 90+ баллов. Оптимизация изображений, кода и серверной части.' },
  { icon: Search, title: 'SEO-оптимизация', desc: 'Мета-теги, Schema.org, sitemap, robots.txt — всё для продвижения в Google и Яндекс.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Подключение Google Analytics, Яндекс.Метрики, отслеживание целей и конверсий.' },
  { icon: Palette, title: 'Уникальный дизайн', desc: 'Без шаблонов. Каждый лендинг разрабатывается с нуля под ваш бренд.' },
]

const included = [
  'Разработка уникального дизайна',
  'Адаптивная верстка (мобильная, планшетная, десктопная)',
  'SEO-оптимизация: мета-теги, Schema.org, sitemap',
  'Подключение Google Analytics и Яндекс.Метрика',
  'Форма обратной связи с интеграцией WhatsApp',
  'Хостинг и домен на 1 год',
  'Бесплатная техподдержка 30 дней',
  'Срок разработки: 3-5 рабочих дней',
]

export default function LandingPageService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'Landing Page' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 85 000₸</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              Создание<br /><span className="text-brand">Landing Page</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Разрабатываем продающие лендинги для запуска рекламы. Современный дизайн, высокая скорость загрузки, SEO-оптимизация. Срок — 3-5 дней.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Заказать лендинг <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Примеры работ
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">3-5</div>
            <div className="text-2xl font-heading font-semibold text-white">дней</div>
            <p className="text-white/60">Средний срок разработки лендинга под ключ</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">90+</div>
                <div className="text-sm text-white/50">PageSpeed</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">100%</div>
                <div className="text-sm text-white/50">Адаптивность</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Почему наши лендинги работают" />
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
            <SectionHeading badge="Тариф" title="Что входит в стоимость" align="left" />
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
            <h3 className="font-heading font-semibold text-xl text-text-main">Оставить заявку</h3>
            <p className="text-text-muted text-sm">Опишите ваш проект и мы свяжемся в течение часа</p>
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
