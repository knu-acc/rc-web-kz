import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Технологии | Стек технологий для создания сайтов  RC-WEB.KZ',
  description: 'Технологии RC-WEB.KZ: Next.js, React, TypeScript, Tailwind CSS, Figma, Tilda. Современный стек для быстрых, SEO-оптимизированных сайтов.',
  keywords: ['технологии создания сайтов', 'next.js', 'react', 'tailwind css', 'стек веб-разработки', 'figma'],
  openGraph: {
    title: 'Стек технологий RC-WEB.KZ',
    description: 'Next.js, React, TypeScript, Tailwind, Figma и другие',
    url: `${SITE_CONFIG.url}/technologies`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/technologies` },
}

interface Tech {
  name: string
  description: string
  why: string
  features: string[]
  gradient: string
  icon: React.ReactNode
}

const categories: { title: string; id: string; techs: Tech[] }[] = [
  {
    title: 'Фронтенд-разработка',
    id: 'frontend',
    techs: [
      {
        name: 'Next.js 15',
        description: 'Ведущий фреймворк для React от Vercel с серверным рендерингом, статической генерацией и встроенной SEO-оптимизацией.',
        why: 'Максимальная производительность (PageSpeed 95+), отличное SEO, быстрая разработка.',
        features: ['Серверный рендеринг (SSR / SSG)', 'Автоматическая оптимизация изображений', 'Встроенная маршрутизация', 'Edge Runtime'],
        gradient: 'from-gray-800 to-gray-900',
        icon: (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
          </svg>
        ),
      },
      {
        name: 'React 19',
        description: 'Самая популярная библиотека для создания интерактивных интерфейсов с компонентным подходом.',
        why: 'Огромная экосистема, переиспользование компонентов, высокая производительность.',
        features: ['Компонентный подход', 'Virtual DOM', 'React Server Components', 'Hooks API'],
        gradient: 'from-cyan-500 to-blue-600',
        icon: (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.594.063-.843.182C5.018 2.178 4.5 3.5 4.5 5.61c0 1.207.334 2.602.96 4.102-2.282.998-3.73 2.406-3.73 3.888 0 2.584 3.76 4.7 8.49 4.7 4.724 0 8.485-2.12 8.485-4.7 0-1.486-1.458-2.897-3.748-3.896.63-1.5.966-2.897.966-4.106 0-2.117-.528-3.434-1.782-4.098a2.184 2.184 0 00-.893-.186z" />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        description: 'Надстройка над JavaScript со строгой типизацией. Снижает количество ошибок на 40% по данным исследований.',
        why: 'Меньше багов, лучше автодополнение, проще поддерживать проект в будущем.',
        features: ['Строгая типизация', 'Автодополнение в IDE', 'Раннее обнаружение ошибок', 'Рефакторинг без страха'],
        gradient: 'from-blue-600 to-blue-800',
        icon: (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.42.276.694.394l.893.38c.543.227 1.005.444 1.388.652.382.208.69.43.921.669.23.239.398.5.503.784.104.284.156.602.156.955 0 .547-.108 1.015-.324 1.404a2.64 2.64 0 01-.896.951 4.035 4.035 0 01-1.35.564c-.52.12-1.088.18-1.706.18-.672 0-1.234-.042-1.686-.127a7.258 7.258 0 01-1.289-.347v-2.612a5.11 5.11 0 001.757.89c.311.090.634.13.968.13.255 0 .477-.022.668-.065.19-.044.35-.107.481-.19a.935.935 0 00.315-.32.87.87 0 00.11-.443c0-.207-.068-.39-.203-.55a2.39 2.39 0 00-.587-.468 7.632 7.632 0 00-.927-.466l-.866-.405a6.88 6.88 0 01-1.26-.694 3.644 3.644 0 01-.827-.762 2.725 2.725 0 01-.452-.925 4.103 4.103 0 01-.133-1.08c0-.523.103-.977.31-1.364.207-.386.495-.714.867-.984a4.098 4.098 0 011.317-.622c.505-.142 1.053-.213 1.644-.213zM10.5 12.75H8.25v7.5H5.625v-7.5H3.375V10.5H10.5z" />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS фреймворк для быстрой разработки современного адаптивного дизайна.',
        why: 'В 3 раза быстрее классического CSS, консистентный дизайн, лёгкая поддержка.',
        features: ['Utility-first подход', 'Responsive по умолчанию', 'Тёмная тема за 5 минут', 'Минимальный CSS-бандл (tree-shaking)'],
        gradient: 'from-teal-500 to-cyan-600',
        icon: (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Дизайн и прототипирование',
    id: 'design',
    techs: [
      {
        name: 'Figma',
        description: 'Профессиональный инструмент для UI/UX-дизайна, прототипирования и совместной работы в реальном времени.',
        why: 'Главный инструмент дизайнеров в 2024. Позволяет согласовать дизайн до разработки.',
        features: ['Совместная работа в реальном времени', 'Интерактивные прототипы', 'UI-kit и компоненты', 'Экспорт в SVG, PNG, CSS'],
        gradient: 'from-pink-500 to-rose-600',
        icon: (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 8.137h-4.588v-7.51h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 3.02-4.49 3.02zm-3.117-6.039v4.568h3.117c1.665 0 3.019-1.355 3.019-3.019 0-1.665-1.354-3.02-3.019-3.02h-3.117v1.471z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Конструкторы сайтов',
    id: 'constructors',
    techs: [
      {
        name: 'Tilda Publishing',
        description: 'Популярный конструктор сайтов для быстрого создания посадочных страниц и простых сайтов без программирования.',
        why: 'Для проектов, где нужен быстрый запуск (35 дней) и простое управление контентом.',
        features: ['550+ готовых блоков', 'Zero-code редактор', 'Встроенная CRM и формы', 'SEO-настройки'],
        gradient: 'from-amber-500 to-orange-600',
        icon: (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.386.083a.517.517 0 01.614 0l11.063 8.036a.516.516 0 01-.294.94H18.13v6.33a.516.516 0 01-.517.517H6.387a.516.516 0 01-.517-.517v-6.33H1.23a.516.516 0 01-.293-.94z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Инфраструктура и деплой',
    id: 'infra',
    techs: [
      {
        name: 'Netlify / Vercel',
        description: 'Облачные платформы для хостинга JAMstack-приложений с CDN по всему миру и автоматическим деплоем.',
        why: 'Бесплатный SSL, мгновенный деплой при каждом коммите, CDN в 100+ точках мира.',
        features: ['Автоматический деплой с GitHub', 'Бесплатный SSL (https://)', 'CDN по всему миру', 'Preview для каждой ветки'],
        gradient: 'from-emerald-500 to-teal-600',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
      },
      {
        name: 'Git & GitHub',
        description: 'Система контроля версий и крупнейшая платформа для совместной разработки. Каждое изменение отслеживается.',
        why: 'Откат любых правок, командная работа, прозрачная история изменений.',
        features: ['Полная история изменений', 'Откат к любой версии', 'Code review', 'CI/CD автоматизация'],
        gradient: 'from-gray-700 to-gray-900',
        icon: (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Базы данных и бэкенд',
    id: 'backend',
    techs: [
      {
        name: 'PostgreSQL / Supabase',
        description: 'Мощная реляционная база данных и BaaS-платформа для проектов, которым нужен бэкенд: интернет-магазины, CRM, личные кабинеты.',
        why: 'Надёжная ACID-база данных + готовые API для аутентификации, файлов и real-time.',
        features: ['SQL + RESTful API', 'Аутентификация пользователей', 'Real-time подписки', 'Хранение файлов'],
        gradient: 'from-indigo-500 to-blue-700',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Аналитика и SEO',
    id: 'analytics',
    techs: [
      {
        name: 'Google Analytics & Яндекс.Метрика',
        description: 'Ведущие системы аналитики для отслеживания посещаемости, поведения пользователей и конверсий.',
        why: 'Устанавливаем на каждый проект. Без аналитики невозможно оценить эффективность сайта.',
        features: ['Посещаемость и источники трафика', 'Карта кликов и скроллов (Метрика)', 'Цели и конверсии', 'E-commerce отслеживание'],
        gradient: 'from-orange-500 to-red-600',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
    ],
  },
]

const whyMatters = [
  {
    title: 'Скорость',
    description: 'Next.js + статическая генерация = загрузка менее 1 секунды',
    metric: '< 1 сек',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'SEO',
    description: 'Серверный рендеринг + Schema.org = отличная индексация',
    metric: 'Top 10',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Безопасность',
    description: 'Статические файлы + HTTPS = минимальная поверхность атаки',
    metric: '0 уязвимостей',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Масштабирование',
    description: 'JAMstack + CDN = неограниченное количество посетителей',
    metric: ' пользователей',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
]

export default function TechnologiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Технологии', href: '/technologies' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom text-left md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Наш стек технологий
          </div>

          <h1 className="heading-xl mb-6">
            <span className="block">Технологии,</span>
            <span className="gradient-text">которые мы используем</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed">
            Мы используем только проверенные и современные инструменты.
            Наш стек обеспечивает <strong>быструю загрузку, отличное SEO</strong> и удобство поддержки.
          </p>
        </div>
      </section>

      {/* Why Tech Matters */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom">
          <h2 className="heading-lg text-left md:text-center text-white mb-10">Почему технологии важны</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatters.map((item) => (
              <div key={item.title} className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700 text-left md:text-center">
                <div className="w-12 h-12 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="section bg-white dark:bg-secondary-950 even:bg-secondary-50 even:dark:bg-secondary-900">
          <div className="container-custom max-w-5xl">
            <h2 className="heading-lg mb-8">{cat.title}</h2>

            <div className="space-y-6">
              {cat.techs.map((tech) => (
                <div key={tech.name} className="bg-white dark:bg-secondary-900 rounded-2xl p-6 sm:p-8 border border-secondary-100 dark:border-secondary-800 shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.gradient} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-3">{tech.description}</p>
                      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3 mb-4 border border-primary-100 dark:border-primary-800/30">
                        <span className="text-sm font-bold text-primary-700 dark:text-primary-300">Почему мы выбрали: </span>
                        <span className="text-sm text-primary-600 dark:text-primary-400">{tech.why}</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {tech.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-left md:text-center max-w-2xl mx-auto">
          <h2 className="heading-lg text-white mb-4">Нужен сайт на современных технологиях?</h2>
          <p className="text-lg text-white/90 mb-8">
            Мы создадим быстрый, SEO-оптимизированный сайт на Next.js или Tilda. Консультация бесплатна.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp inline-flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Обсудить проект
            </a>
            <Link href="/website-price" className="btn-secondary">Узнать цены</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Полезные страницы</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/process', title: 'Процесс работы', desc: '6 этапов разработки' },
              { href: '/guarantees', title: 'Гарантии', desc: 'Качество и надёжность' },
              { href: '/portfolio', title: 'Портфолио', desc: 'Наши работы' },
              { href: '/services', title: 'Услуги', desc: 'Все направления' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <h3 className="font-bold group-hover:text-primary-600 transition-colors">{l.title}</h3>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}