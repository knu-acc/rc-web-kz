import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Globe, FileText, Search, Shield, BarChart3, Settings, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Корпоративный сайт',
  serviceDescription: 'Разработка корпоративных сайтов для бизнеса в Алматы. Многостраничная структура, CMS-панель, SEO-оптимизация, адаптивный дизайн.',
  price: '135 000₸',
  path: '/corporate-site',
  keywords: ['корпоративный сайт алматы', 'создание корпоративного сайта', 'многостраничный сайт', 'сайт для компании алматы'],
})

const features = [
  { icon: Globe, title: 'Многостраничность', desc: 'Полноценная структура сайта: главная, о компании, услуги, портфолио, контакты, блог.' },
  { icon: Settings, title: 'CMS-панель', desc: 'Удобная панель управления контентом. Обновляйте тексты, фото и страницы без программиста.' },
  { icon: FileText, title: 'Каталог и блог', desc: 'Интеграция каталога услуг или товаров, корпоративный блог для привлечения трафика.' },
  { icon: Search, title: 'SEO-оптимизация', desc: 'Полная техническая и контентная оптимизация для продвижения в Google и Яндекс.' },
  { icon: Shield, title: 'Безопасность', desc: 'SSL-сертификат, защита от взломов, регулярные бэкапы и мониторинг работоспособности.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Подключение систем аналитики для отслеживания посещаемости и поведения пользователей.' },
]

const included = [
  'Разработка до 10 уникальных страниц',
  'Адаптивный дизайн под все устройства',
  'CMS-панель управления контентом',
  'SEO-оптимизация всех страниц',
  'Интеграция каталога услуг/товаров',
  'Корпоративный блог',
  'Подключение аналитики и форм обратной связи',
  'Хостинг и домен на 1 год',
  'Техподдержка 30 дней бесплатно',
  'Срок разработки: 7-14 рабочих дней',
]

export default function CorporateSiteService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'Корпоративный сайт' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 135 000₸</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              Создание<br /><span className="text-brand">корпоративного сайта</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Многостраничный сайт с CMS-панелью, каталогом услуг и блогом. Полная SEO-оптимизация и адаптивный дизайн. Срок — 7-14 дней.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Обсудить проект <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Примеры работ
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">10+</div>
            <div className="text-2xl font-heading font-semibold text-white">страниц</div>
            <p className="text-white/60">Полноценная структура корпоративного сайта</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">CMS</div>
                <div className="text-sm text-white/50">Управление</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">SEO</div>
                <div className="text-sm text-white/50">Оптимизация</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Что получает ваш бизнес" />
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
