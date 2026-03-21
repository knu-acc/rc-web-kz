import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Lightbulb, Globe, Server, Palette, FileText, Rocket, Search, Shield, CheckCircle } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Как создать сайт',
  description: 'Пошаговое руководство по созданию сайта: выбор платформы, домен, хостинг, дизайн, контент, SEO. Всё, что нужно знать перед запуском.',
  keywords: ['как создать сайт', 'создание сайта пошагово', 'руководство по созданию сайта', 'сделать сайт'],
  path: '/how-to-create-website',
})

const steps = [
  {
    icon: Lightbulb,
    step: '1',
    title: 'Определите цели сайта',
    desc: 'Прежде чем начать, ответьте на вопросы: какую задачу решает сайт? Кто ваша целевая аудитория? Что посетитель должен сделать на сайте? Чёткие цели определяют структуру, дизайн и контент.',
  },
  {
    icon: Globe,
    step: '2',
    title: 'Выберите доменное имя',
    desc: 'Домен — это адрес вашего сайта. Выбирайте короткое, запоминающееся имя в зоне .kz или .com. Проверьте доступность на ps.kz или reg.ru. Избегайте цифр и дефисов.',
  },
  {
    icon: Server,
    step: '3',
    title: 'Выберите хостинг',
    desc: 'Хостинг — место, где хранятся файлы сайта. Для небольших сайтов подойдёт shared-хостинг, для нагруженных проектов — VPS или облачные решения вроде Vercel.',
  },
  {
    icon: Palette,
    step: '4',
    title: 'Создайте дизайн',
    desc: 'Дизайн должен быть удобным и привлекательным. Используйте Figma для макетов. Обязательно продумайте мобильную версию — более 70% трафика идёт со смартфонов.',
  },
  {
    icon: FileText,
    step: '5',
    title: 'Подготовьте контент',
    desc: 'Напишите тексты, подберите фото и видео. Каждая страница должна иметь чёткую структуру: заголовок, описание, призыв к действию. Тексты должны быть уникальными.',
  },
  {
    icon: Rocket,
    step: '6',
    title: 'Разработка и вёрстка',
    desc: 'Выберите платформу: конструктор (Tilda, WordPress) для простых проектов или фреймворк (Next.js, React) для сложных. Верстайте адаптивно под все устройства.',
  },
  {
    icon: Search,
    step: '7',
    title: 'SEO-оптимизация',
    desc: 'Настройте метатеги, добавьте sitemap.xml и robots.txt. Зарегистрируйте сайт в Google Search Console и Яндекс.Вебмастер. Оптимизируйте скорость загрузки.',
  },
  {
    icon: Shield,
    step: '8',
    title: 'Запуск и тестирование',
    desc: 'Проверьте все формы, ссылки и страницы. Настройте SSL-сертификат для HTTPS. Подключите аналитику. Протестируйте на разных устройствах и браузерах.',
  },
]

const platforms = [
  { name: 'Next.js / React', type: 'Фреймворк', pros: 'Максимальная скорость, SEO, гибкость', cons: 'Нужен разработчик' },
  { name: 'Tilda', type: 'Конструктор', pros: 'Быстрый запуск, визуальный редактор', cons: 'Ограничения в функциональности' },
  { name: 'WordPress', type: 'CMS', pros: 'Множество плагинов, большое сообщество', cons: 'Медленнее, уязвимости безопасности' },
  { name: 'Shopify', type: 'E-commerce', pros: 'Готовое решение для магазина', cons: 'Ежемесячная плата, ограничения' },
]

export default function HowToCreateWebsitePage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Как создать сайт', href: '/how-to-create-website' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Руководство</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Как создать сайт
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Пошаговая инструкция от идеи до запуска. Разбираем каждый этап создания сайта для бизнеса.
          </p>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto space-y-4">
        {steps.map((s) => {
          const Icon = s.icon
          return (
            <BentoCard key={s.step} className="md:flex-row gap-6 items-start p-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-4xl font-heading font-bold text-brand/20">{s.step}</span>
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-text-main">{s.title}</h2>
                <p className="text-text-muted leading-relaxed mt-2">{s.desc}</p>
              </div>
            </BentoCard>
          )
        })}
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Сравнение" title="Выбор платформы" description="Какую платформу выбрать для вашего проекта" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {platforms.map((p) => (
            <BentoCard key={p.name}>
              <span className="text-xs font-medium text-brand bg-surface-dark/5 px-2 py-1 rounded-full w-fit">{p.type}</span>
              <h3 className="font-heading font-semibold text-lg text-text-main">{p.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="text-text-muted"><span className="text-green-600 font-medium">+</span> {p.pros}</div>
                <div className="text-text-muted"><span className="text-red-500 font-medium">-</span> {p.cons}</div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  )
}
