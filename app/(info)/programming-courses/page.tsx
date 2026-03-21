import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { GraduationCap, Code, Palette, Server, Blocks, TrendingUp, BookOpen, Users, Briefcase, Star } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Курсы программирования',
  description: 'Обучение веб-разработке: какие технологии изучать, ресурсы для обучения, карьерный путь разработчика. HTML, CSS, JavaScript, React, Next.js.',
  keywords: ['курсы программирования', 'обучение веб-разработке', 'научиться программировать', 'frontend разработка'],
  path: '/programming-courses',
})

const roadmap = [
  {
    icon: Code,
    level: 'Начальный',
    title: 'HTML + CSS',
    duration: '1-2 месяца',
    desc: 'Основа веб-разработки. HTML — структура страницы, CSS — стили и оформление. Изучите Flexbox, Grid, адаптивную вёрстку.',
    resources: ['MDN Web Docs', 'freeCodeCamp', 'Codecademy'],
  },
  {
    icon: Blocks,
    level: 'Начальный',
    title: 'JavaScript',
    duration: '2-3 месяца',
    desc: 'Язык программирования для интерактивности: переменные, функции, DOM, события, асинхронность, ES6+ синтаксис.',
    resources: ['JavaScript.info', 'Eloquent JavaScript', 'freeCodeCamp'],
  },
  {
    icon: Palette,
    level: 'Средний',
    title: 'React',
    duration: '2-3 месяца',
    desc: 'Самая популярная библиотека для создания интерфейсов. Компоненты, хуки, состояние, маршрутизация.',
    resources: ['Документация React', 'Scrimba', 'Udemy'],
  },
  {
    icon: Blocks,
    level: 'Средний',
    title: 'TypeScript',
    duration: '1 месяц',
    desc: 'Типизированный JavaScript. Обязателен для серьёзных проектов. Снижает количество ошибок и улучшает документацию кода.',
    resources: ['TypeScript Handbook', 'Total TypeScript', 'Exercism'],
  },
  {
    icon: Server,
    level: 'Продвинутый',
    title: 'Next.js',
    duration: '2-3 месяца',
    desc: 'Фреймворк для продакшн-приложений на React. SSR, SSG, API Routes, App Router. Востребован на рынке труда.',
    resources: ['Документация Next.js', 'Next.js Learn', 'YouTube'],
  },
  {
    icon: Server,
    level: 'Продвинутый',
    title: 'Backend / API',
    duration: '2-3 месяца',
    desc: 'Node.js, базы данных (PostgreSQL, MongoDB), REST API, аутентификация. Полный стек для самостоятельных проектов.',
    resources: ['Node.js docs', 'The Odin Project', 'Prisma docs'],
  },
]

const careerPath = [
  { icon: BookOpen, title: 'Стажёр', salary: '100-200K₸', desc: 'Базовые знания HTML, CSS, JS. Работа с ментором над простыми задачами.' },
  { icon: Code, title: 'Junior', salary: '200-400K₸', desc: 'React, основы TypeScript. Самостоятельная работа над компонентами и страницами.' },
  { icon: Users, title: 'Middle', salary: '400-800K₸', desc: 'Глубокие знания React/Next.js, архитектура, код-ревью, наставничество.' },
  { icon: Briefcase, title: 'Senior', salary: '800K-1.5M₸', desc: 'Принятие технических решений, лидерство, оптимизация, менторство команды.' },
]

export default function ProgrammingCoursesPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Курсы программирования', href: '/programming-courses' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Обучение</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Курсы программирования
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            С чего начать изучение веб-разработки, какие технологии учить и как построить карьеру разработчика.
          </p>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Роадмап" title="Путь веб-разработчика" description="Пошаговый план обучения от нуля до профессионала" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {roadmap.map((r) => {
            const Icon = r.icon
            return (
              <BentoCard key={r.title}>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-surface-dark" />
                  </div>
                  <span className="text-xs font-medium text-text-muted bg-surface-alt px-2 py-1 rounded-full">{r.level}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{r.title}</h3>
                <span className="text-xs text-brand font-medium">{r.duration}</span>
                <p className="text-sm text-text-muted leading-relaxed">{r.desc}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {r.resources.map((res) => (
                    <span key={res} className="text-xs bg-surface-dark/5 text-brand px-2 py-1 rounded-full">{res}</span>
                  ))}
                </div>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Карьера" title="Карьерный путь" description="Уровни и зарплаты frontend-разработчика в Казахстане" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {careerPath.map((c) => {
            const Icon = c.icon
            return (
              <BentoCard key={c.title}>
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{c.title}</h3>
                <span className="text-brand font-heading font-bold">{c.salary}</span>
                <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <CTA />
    </main>
  )
}
