import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { BookOpen } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Глоссарий веб-разработки',
  description: 'Словарь терминов веб-разработки: HTML, CSS, JavaScript, React, Next.js, SEO, API, CMS, UX/UI и другие. Понятные определения для начинающих.',
  keywords: ['глоссарий веб-разработки', 'термины программирования', 'словарь web', 'что такое html css'],
  path: '/glossary',
})

const terms = [
  { term: 'HTML', full: 'HyperText Markup Language', desc: 'Язык разметки для создания структуры веб-страниц. Определяет заголовки, параграфы, ссылки, изображения и другие элементы.' },
  { term: 'CSS', full: 'Cascading Style Sheets', desc: 'Язык стилей, определяющий внешний вид HTML-элементов: цвета, шрифты, отступы, анимации и адаптивность.' },
  { term: 'JavaScript', full: 'JS', desc: 'Язык программирования для интерактивности на веб-страницах: обработка событий, анимации, работа с данными и API.' },
  { term: 'TypeScript', full: 'TS', desc: 'Надстройка над JavaScript с системой типов. Снижает количество ошибок и улучшает качество кода на больших проектах.' },
  { term: 'React', full: 'React.js', desc: 'Библиотека для создания пользовательских интерфейсов от Meta. Компонентный подход, виртуальный DOM, хуки.' },
  { term: 'Next.js', full: 'Next.js Framework', desc: 'Фреймворк на базе React для продакшн-приложений. Серверный рендеринг (SSR), статическая генерация (SSG), API Routes.' },
  { term: 'SEO', full: 'Search Engine Optimization', desc: 'Оптимизация сайта для поисковых систем: метатеги, скорость, контент, ссылки. Цель — попасть в топ Google и Яндекс.' },
  { term: 'SPA', full: 'Single Page Application', desc: 'Одностраничное приложение, которое загружается один раз и динамически обновляет контент без перезагрузки страницы.' },
  { term: 'SSR', full: 'Server-Side Rendering', desc: 'Генерация HTML на сервере при каждом запросе. Улучшает SEO и скорость первой загрузки страницы.' },
  { term: 'SSG', full: 'Static Site Generation', desc: 'Генерация HTML-страниц на этапе сборки. Максимальная скорость загрузки, идеально для контентных сайтов.' },
  { term: 'CMS', full: 'Content Management System', desc: 'Система управления контентом: WordPress, Tilda, Strapi. Позволяет редактировать сайт без навыков программирования.' },
  { term: 'API', full: 'Application Programming Interface', desc: 'Интерфейс для взаимодействия между программами. REST API и GraphQL — основные подходы в веб-разработке.' },
  { term: 'Responsive', full: 'Responsive Design', desc: 'Адаптивный дизайн, который корректно отображается на экранах любого размера: смартфоны, планшеты, десктопы.' },
  { term: 'UX', full: 'User Experience', desc: 'Пользовательский опыт — удобство и логика взаимодействия с сайтом. Влияет на конверсию и удовлетворённость.' },
  { term: 'UI', full: 'User Interface', desc: 'Пользовательский интерфейс — визуальное оформление: кнопки, формы, карточки, навигация, типографика.' },
  { term: 'DNS', full: 'Domain Name System', desc: 'Система доменных имён, переводящая адрес сайта (rc-web.kz) в IP-адрес сервера.' },
  { term: 'SSL', full: 'Secure Sockets Layer', desc: 'Протокол шифрования данных между браузером и сервером. Обязателен для HTTPS и доверия пользователей.' },
  { term: 'CDN', full: 'Content Delivery Network', desc: 'Сеть серверов по всему миру для быстрой доставки контента. Снижает время загрузки для удалённых пользователей.' },
  { term: 'Git', full: 'Version Control System', desc: 'Система контроля версий для отслеживания изменений в коде. GitHub — основная платформа для совместной работы.' },
  { term: 'Tailwind CSS', full: 'Utility-First CSS', desc: 'CSS-фреймворк с утилитарными классами. Ускоряет стилизацию и обеспечивает консистентность дизайна.' },
  { term: 'Figma', full: 'Design Tool', desc: 'Онлайн-инструмент для дизайна интерфейсов. Позволяет создавать макеты, прототипы и дизайн-системы.' },
  { term: 'Hosting', full: 'Web Hosting', desc: 'Услуга размещения файлов сайта на сервере с доступом через интернет. Shared, VPS, облачный — основные типы.' },
  { term: 'Domain', full: 'Domain Name', desc: 'Уникальный адрес сайта в интернете (например, rc-web.kz). Регистрируется через аккредитованных регистраторов.' },
  { term: 'Lighthouse', full: 'Google Lighthouse', desc: 'Инструмент Google для аудита производительности, SEO, доступности и лучших практик веб-страниц.' },
]

export default function GlossaryPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Глоссарий', href: '/glossary' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-20 px-8 text-center items-center">
          <BookOpen className="w-12 h-12 text-surface-dark" />
          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter text-white">
            Глоссарий веб-разработки
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Понятные определения основных терминов для тех, кто заказывает сайт или начинает изучать веб-разработку.
          </p>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Словарь"
          title="Термины от A до Z"
          description={`${terms.length} терминов, которые полезно знать каждому заказчику`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {terms.map((t) => (
            <BentoCard key={t.term}>
              <div className="flex items-center gap-3">
                <span className="text-lg font-heading font-bold text-brand">{t.term}</span>
                <span className="text-xs text-text-muted bg-surface-alt px-2 py-0.5 rounded-full">
                  {t.full}
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8 items-center text-center">
          <h2 className="text-2xl font-heading font-bold text-text-main">
            Не нашли нужный термин?
          </h2>
          <p className="text-text-muted max-w-xl leading-relaxed">
            Напишите нам, и мы объясним любой технический термин простым языком.
            Мы всегда говорим с клиентами на понятном языке, без лишнего жаргона.
          </p>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
