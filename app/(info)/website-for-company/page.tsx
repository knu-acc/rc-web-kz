import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Building2, Target, Search, Users, ShieldCheck, TrendingUp, Layout, FileText, Globe, BarChart3 } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Сайт для компании',
  description: 'Зачем компании нужен сайт: привлечение клиентов, повышение доверия, SEO-продвижение. Руководство по созданию корпоративного сайта в Алматы.',
  keywords: ['сайт для компании', 'корпоративный сайт', 'зачем нужен сайт бизнесу', 'создание сайта для фирмы'],
  path: '/website-for-company',
})

const benefits = [
  { icon: Target, title: 'Привлечение клиентов', desc: 'Сайт работает 24/7, принимая заявки даже ночью. Клиенты находят вас через Google и Яндекс по целевым запросам.' },
  { icon: ShieldCheck, title: 'Доверие и репутация', desc: 'Профессиональный сайт повышает доверие. 75% пользователей оценивают компанию по качеству её сайта.' },
  { icon: TrendingUp, title: 'Рост продаж', desc: 'Сайт с правильной структурой и призывами к действию конвертирует посетителей в клиентов.' },
  { icon: Search, title: 'SEO-продвижение', desc: 'Оптимизированный сайт выходит в топ поисковых систем и приносит бесплатный органический трафик.' },
  { icon: Users, title: 'Широкая аудитория', desc: 'Сайт снимает географические ограничения — вас находят клиенты из любого города Казахстана.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Подключив аналитику, вы видите, откуда приходят клиенты, что смотрят и как улучшить конверсию.' },
]

const sections = [
  { icon: Layout, title: 'Главная страница', desc: 'Первое впечатление: уникальное торговое предложение, ключевые преимущества, призыв к действию.' },
  { icon: Building2, title: 'О компании', desc: 'История, миссия, команда, сертификаты. Формирует доверие у потенциального клиента.' },
  { icon: FileText, title: 'Услуги / Каталог', desc: 'Подробное описание каждой услуги или товара с ценами, фото и условиями.' },
  { icon: Globe, title: 'Контакты', desc: 'Адрес, телефон, карта, форма обратной связи. Максимально простой способ связаться.' },
]

const seoTips = [
  'Уникальные метатеги title и description на каждой странице',
  'Быстрая загрузка — менее 3 секунд на мобильных',
  'Адаптивный дизайн для всех устройств',
  'Структурированные данные Schema.org',
  'Регулярное обновление контента и блог',
  'Внутренняя перелинковка между страницами',
]

export default function WebsiteForCompanyPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Сайт для компании', href: '/website-for-company' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Для бизнеса</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Зачем компании нужен сайт
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            В 2025 году сайт — это не просто визитка, а основной инструмент привлечения клиентов. Разбираемся, что должен включать корпоративный сайт и как он помогает бизнесу расти.
          </p>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Что даёт сайт бизнесу" description="Ключевые причины создать корпоративный сайт" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <BentoCard key={b.title}>
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{b.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Структура" title="Что должно быть на сайте" description="Обязательные разделы для корпоративного сайта" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <BentoCard key={s.title} className="md:flex-row gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-text-main">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mt-1">{s.desc}</p>
                </div>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8">
          <h2 className="text-2xl font-heading font-bold text-text-main">SEO-оптимизация корпоративного сайта</h2>
          <p className="text-text-muted leading-relaxed mt-2">Чтобы сайт приносил клиентов из поиска, необходимо учесть следующие факторы:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {seoTips.map((tip) => (
              <div key={tip} className="flex items-start gap-2 text-sm text-text-muted">
                <Search className="w-4 h-4 text-surface-dark flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
