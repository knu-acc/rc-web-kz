import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Award, Lightbulb, Eye, Target, Users, Clock, FolderCheck, Star } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'О компании RC-WEB.KZ',
  description: 'Веб-студия RC-WEB.KZ — создание сайтов в Алматы. Более 120 реализованных проектов, команда опытных разработчиков и дизайнеров. Работаем с 2020 года.',
  keywords: ['о компании', 'веб-студия алматы', 'команда разработчиков', 'rc-web.kz'],
  path: '/about',
})

const values = [
  { icon: Award, title: 'Качество', desc: 'Каждый проект проходит многоуровневую проверку. Мы не сдаём работу, пока не убедимся в безупречном результате.' },
  { icon: Lightbulb, title: 'Инновации', desc: 'Используем современные технологии: Next.js, React, TypeScript. Ваш сайт будет быстрым и актуальным.' },
  { icon: Eye, title: 'Прозрачность', desc: 'Фиксированная стоимость, понятные сроки, доступ к процессу разработки на каждом этапе.' },
  { icon: Target, title: 'Результат', desc: 'Создаём сайты, которые приносят клиентов. SEO, конверсия и удобство — наши главные метрики.' },
]

const stats = [
  { value: '120+', label: 'Проектов реализовано' },
  { value: '5+', label: 'Лет на рынке' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '5-10', label: 'Дней — средний срок' },
]

const timeline = [
  { year: '2020', title: 'Основание студии', desc: 'Начали с небольших лендингов и сайтов-визиток для малого бизнеса Алматы.' },
  { year: '2021', title: 'Рост команды', desc: 'Расширили команду, добавили услуги по SEO-оптимизации и контекстной рекламе.' },
  { year: '2022', title: '50+ проектов', desc: 'Вышли на стабильный поток заказов, начали работу с корпоративными клиентами.' },
  { year: '2023', title: 'Переход на Next.js', desc: 'Перешли на современный стек технологий для создания максимально быстрых сайтов.' },
  { year: '2024', title: '100+ проектов', desc: 'Преодолели отметку в 100 реализованных проектов, запустили интернет-магазины.' },
  { year: '2025', title: 'Масштабирование', desc: 'Расширяем географию, работаем с клиентами по всему Казахстану.' },
]

export default function AboutPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'О компании', href: '/about' }]} />

      {/* Hero */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>О нас</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Веб-студия RC-WEB.KZ
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Мы создаём современные сайты для бизнеса в Алматы с 2020 года. Наша миссия — делать интернет доступным и полезным для каждого предпринимателя.
          </p>
        </BentoCard>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Ценности" title="Наши принципы работы" description="То, чем мы руководствуемся в каждом проекте" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <BentoCard key={v.title}>
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{v.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <BentoCard key={s.label} className="items-center text-center py-8">
              <span className="text-4xl md:text-5xl font-heading font-bold text-brand">{s.value}</span>
              <span className="text-sm text-text-muted">{s.label}</span>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="История" title="Наш путь" description="От первого лендинга до крупных проектов" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {timeline.map((t) => (
            <BentoCard key={t.year}>
              <span className="text-3xl font-heading font-bold text-brand">{t.year}</span>
              <h3 className="font-heading font-semibold text-lg text-text-main">{t.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="py-12 px-8 items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
            <Users className="w-8 h-8 text-surface-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-main">Наша команда</h2>
          <p className="text-text-muted max-w-2xl leading-relaxed">
            В нашей студии работают опытные разработчики, дизайнеры и SEO-специалисты. Мы постоянно учимся и внедряем новые технологии, чтобы ваш бизнес получал лучшие решения на рынке.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {['Frontend', 'Backend', 'UI/UX Design', 'SEO', 'Project Management'].map((role) => (
              <span key={role} className="px-4 py-2 bg-surface-dark/5 text-brand rounded-full text-sm font-medium">{role}</span>
            ))}
          </div>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
