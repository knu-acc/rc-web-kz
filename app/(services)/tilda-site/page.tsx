import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Blocks, Rocket, PenTool, Users, Zap, BarChart3, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Сайт на Tilda',
  serviceDescription: 'Создание сайтов на Tilda в Алматы. Быстрый запуск, визуальный редактор, встроенная CRM, адаптивный дизайн без кода.',
  price: '120 000₸',
  path: '/tilda-site',
  keywords: ['сайт на тильда алматы', 'создание сайта tilda', 'заказать сайт на тильде', 'tilda алматы'],
})

const features = [
  { icon: PenTool, title: 'Визуальный редактор', desc: 'Обновляйте контент самостоятельно через удобный drag-and-drop интерфейс Tilda.' },
  { icon: Rocket, title: 'Быстрый запуск', desc: 'Сайт готов за 5-7 дней. Идеально для быстрого старта бизнеса и тестирования ниши.' },
  { icon: Blocks, title: 'Готовые блоки', desc: 'Более 550 дизайн-блоков. Комбинируем лучшие решения для вашей задачи.' },
  { icon: Users, title: 'Встроенная CRM', desc: 'Собирайте заявки, управляйте клиентами и отслеживайте воронку продаж прямо в Tilda.' },
  { icon: Zap, title: 'Высокая скорость', desc: 'Оптимизированные серверы Tilda обеспечивают быструю загрузку по всему Казахстану.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Встроенная статистика, подключение Google Analytics и Яндекс.Метрики.' },
]

const included = [
  'Разработка дизайна на платформе Tilda',
  'До 7 уникальных страниц',
  'Адаптивная верстка под все устройства',
  'Настройка встроенной CRM',
  'Подключение домена и SSL',
  'SEO-настройка: мета-теги, sitemap',
  'Интеграция форм с WhatsApp и Telegram',
  'Подключение аналитики',
  'Обучение работе с редактором',
  'Срок разработки: 5-7 рабочих дней',
]

export default function TildaSiteService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'Сайт на Tilda' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 120 000₸</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              Создание сайта<br /><span className="text-brand">на Tilda</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Стильный сайт на Tilda с визуальным редактором. Обновляйте контент самостоятельно. Встроенная CRM для управления заявками.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Заказать сайт <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Примеры работ
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">5-7</div>
            <div className="text-2xl font-heading font-semibold text-white">дней</div>
            <p className="text-white/60">Быстрый запуск сайта на платформе Tilda</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">CRM</div>
                <div className="text-sm text-white/50">Встроенная</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">550+</div>
                <div className="text-sm text-white/50">Блоков</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Почему Tilda — отличный выбор" />
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
