import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Palette, Layout, Figma, Smartphone, Eye, Layers, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Веб-дизайн',
  serviceDescription: 'Профессиональный веб-дизайн в Алматы. UI/UX проектирование, прототипирование, фирменный стиль, адаптивный дизайн.',
  price: '70 000₸',
  path: '/web-design',
  keywords: ['веб дизайн алматы', 'ui ux дизайн', 'дизайн сайта алматы', 'заказать дизайн сайта'],
})

const features = [
  { icon: Eye, title: 'UI/UX дизайн', desc: 'Проектируем интерфейсы на основе исследования аудитории. Каждый элемент работает на конверсию.' },
  { icon: Layout, title: 'Прототипирование', desc: 'Интерактивные прототипы в Figma. Тестируем сценарии до начала разработки.' },
  { icon: Palette, title: 'Фирменный стиль', desc: 'Разрабатываем визуальную айдентику: цвета, типографика, иконки, паттерны бренда.' },
  { icon: Smartphone, title: 'Адаптивный дизайн', desc: 'Дизайн для всех экранов: мобильный, планшетный и десктопный. Pixel-perfect вёрстка.' },
  { icon: Figma, title: 'Figma-макеты', desc: 'Передаём исходники в Figma с дизайн-системой, компонентами и стилями.' },
  { icon: Layers, title: 'Дизайн-система', desc: 'Создаём библиотеку компонентов для масштабирования проекта без потери качества.' },
]

const included = [
  'Анализ целевой аудитории и конкурентов',
  'Разработка мудборда и концепции',
  'Дизайн до 10 уникальных экранов',
  'Адаптивные версии (мобайл, планшет, десктоп)',
  'Интерактивный прототип в Figma',
  'Дизайн-система с компонентами',
  'Подбор типографики и цветовой палитры',
  'Дизайн иконок и UI-элементов',
  '2 раунда правок',
  'Срок разработки: 7-10 рабочих дней',
]

export default function WebDesignService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'Веб-дизайн' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 70 000₸</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              <span className="text-brand">Веб-дизайн</span><br />для бизнеса
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Создаём дизайн, который продаёт. UI/UX проектирование, прототипы в Figma, фирменный стиль и дизайн-система.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Заказать дизайн <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Портфолио
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">10+</div>
            <div className="text-2xl font-heading font-semibold text-white">экранов</div>
            <p className="text-white/60">Уникальный дизайн с адаптивными версиями</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">Figma</div>
                <div className="text-sm text-white/50">Исходники</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">UI Kit</div>
                <div className="text-sm text-white/50">Компоненты</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Возможности" title="Дизайн, который конвертирует" />
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
