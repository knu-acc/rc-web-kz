import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Blocks, Code, FileCode, Paintbrush, Server, Globe, Figma, Gauge, Shield, Search } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Технологии разработки сайтов',
  description: 'Используем современные технологии для создания сайтов: Next.js, React, TypeScript, Tailwind CSS, Node.js, Tilda, Figma. Быстрые и надёжные решения.',
  keywords: ['технологии создания сайтов', 'next.js', 'react', 'typescript', 'tailwind css', 'tilda'],
  path: '/technologies',
})

const technologies = [
  {
    icon: Blocks,
    title: 'Next.js 15',
    category: 'Фреймворк',
    desc: 'Основной фреймворк для разработки. Обеспечивает серверный рендеринг, оптимальную загрузку и лучшее SEO. Используем App Router для максимальной производительности.',
    accent: true,
  },
  {
    icon: Code,
    title: 'React',
    category: 'Библиотека',
    desc: 'Библиотека для создания интерактивных интерфейсов. Компонентный подход ускоряет разработку и упрощает поддержку.',
  },
  {
    icon: FileCode,
    title: 'TypeScript',
    category: 'Язык',
    desc: 'Строгая типизация снижает количество ошибок и делает код надёжнее. Обязателен на всех наших проектах.',
  },
  {
    icon: Paintbrush,
    title: 'Tailwind CSS',
    category: 'Стили',
    desc: 'Утилитарный CSS-фреймворк для быстрой и консистентной стилизации. Минимальный размер итогового CSS-файла.',
  },
  {
    icon: Server,
    title: 'Node.js',
    category: 'Бэкенд',
    desc: 'Серверная среда для API, обработки форм и интеграций. Единый язык на фронтенде и бэкенде ускоряет разработку.',
  },
  {
    icon: Globe,
    title: 'Tilda',
    category: 'Конструктор',
    desc: 'Для быстрых запусков и простых проектов. Удобный визуальный редактор, с которым клиент может сам обновлять контент.',
  },
  {
    icon: Figma,
    title: 'Figma',
    category: 'Дизайн',
    desc: 'Основной инструмент для проектирования интерфейсов. Совместная работа в реальном времени, удобные прототипы.',
  },
  {
    icon: Gauge,
    title: 'Vercel',
    category: 'Хостинг',
    desc: 'Платформа для деплоя Next.js приложений. CDN по всему миру, автоматическое масштабирование, мгновенные обновления.',
  },
  {
    icon: Shield,
    title: 'SSL / HTTPS',
    category: 'Безопасность',
    desc: 'Все сайты работают по защищённому протоколу HTTPS. Бесплатный SSL-сертификат на каждом проекте.',
  },
  {
    icon: Search,
    title: 'SEO-инструменты',
    category: 'Аналитика',
    desc: 'Google Search Console, Яндекс.Вебмастер, Lighthouse. Мониторим позиции и оптимизируем каждую страницу.',
  },
]

export default function TechnologiesPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Технологии', href: '/technologies' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Стек" title="Наши технологии" description="Современный стек для быстрых, надёжных и SEO-оптимизированных сайтов" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {technologies.map((t, i) => {
            const Icon = t.icon
            const isLarge = i === 0
            return (
              <BentoCard key={t.title} dark={isLarge} className={isLarge ? 'md:col-span-2 md:row-span-2' : ''}>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLarge ? 'bg-brand' : 'bg-surface-dark/5'}`}>
                    <Icon className={`w-6 h-6 ${isLarge ? 'text-white' : 'text-surface-dark'}`} />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${isLarge ? 'bg-white/10 text-white/70' : 'bg-surface-alt text-text-muted'}`}>
                    {t.category}
                  </span>
                </div>
                <h3 className={`font-heading font-semibold ${isLarge ? 'text-2xl md:text-3xl text-white' : 'text-lg text-text-main'}`}>
                  {t.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isLarge ? 'text-white/70 text-base' : 'text-text-muted'}`}>
                  {t.desc}
                </p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="py-12 px-8 items-center text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-main">Почему это важно?</h2>
          <p className="text-text-muted max-w-2xl leading-relaxed">
            Правильный выбор технологий напрямую влияет на скорость загрузки, позиции в поиске и удобство для пользователей. Мы подбираем стек под задачи каждого проекта, чтобы вы получили лучший результат.
          </p>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
