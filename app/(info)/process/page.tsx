import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { FileText, Palette, Code, TestTube, Rocket, Clock, CheckCircle } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Процесс разработки сайта',
  description: 'Как мы создаём сайты: от брифинга до запуска за 5-10 дней. Прозрачный процесс разработки с участием клиента на каждом этапе.',
  keywords: ['процесс разработки сайта', 'этапы создания сайта', 'как создать сайт'],
  path: '/process',
})

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Брифинг и аналитика',
    duration: '1-2 дня',
    desc: 'Проводим подробное интервью, изучаем вашу нишу, конкурентов и целевую аудиторию. Формируем техническое задание и структуру сайта.',
    client: ['Информация о компании', 'Референсы и пожелания', 'Логотип и фирменный стиль', 'Тексты и фотографии'],
    result: 'Утверждённое ТЗ, структура сайта, прототип страниц',
  },
  {
    step: '02',
    icon: Palette,
    title: 'Дизайн',
    duration: '2-3 дня',
    desc: 'Разрабатываем уникальный дизайн в Figma. Показываем макеты, вносим правки до полного утверждения. Адаптируем под мобильные устройства.',
    client: ['Обратная связь по макетам', 'Утверждение дизайна'],
    result: 'Готовые макеты всех страниц для десктопа и мобильных',
  },
  {
    step: '03',
    icon: Code,
    title: 'Разработка',
    duration: '3-5 дней',
    desc: 'Верстаем и программируем сайт на Next.js или Tilda. Подключаем формы обратной связи, интеграции с CRM, аналитику и другие сервисы.',
    client: ['Доступы к хостингу и домену', 'Дополнительные материалы'],
    result: 'Работающий сайт на тестовом сервере',
  },
  {
    step: '04',
    icon: TestTube,
    title: 'Тестирование',
    duration: '1 день',
    desc: 'Проверяем работу на всех устройствах и браузерах. Тестируем формы, скорость загрузки, SEO-параметры. Исправляем все замечания.',
    client: ['Финальная проверка и замечания'],
    result: 'Полностью протестированный сайт без ошибок',
  },
  {
    step: '05',
    icon: Rocket,
    title: 'Запуск и поддержка',
    duration: '1 день',
    desc: 'Переносим сайт на боевой сервер, настраиваем домен, SSL-сертификат. Подключаем Google Analytics и Яндекс.Метрику. Обучаем работе с сайтом.',
    client: ['Приёмка проекта'],
    result: 'Сайт в продакшене, подключена аналитика, 30 дней бесплатной поддержки',
  },
]

export default function ProcessPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Процесс разработки', href: '/process' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Процесс</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Как мы создаём сайты
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Прозрачный процесс из 5 этапов. Вы видите прогресс и участвуете в каждом шаге.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Clock className="w-5 h-5 text-surface-dark" />
            <span className="text-white/80 font-medium">Средний срок: 5-10 рабочих дней</span>
          </div>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto space-y-6">
        {steps.map((s) => {
          const Icon = s.icon
          return (
            <BentoCard key={s.step} className="md:flex-row gap-8 p-8">
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <span className="text-5xl font-heading font-bold text-brand/20">{s.step}</span>
                <div className="w-14 h-14 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-surface-dark" />
                </div>
                <span className="text-xs text-text-muted bg-surface-alt px-3 py-1 rounded-full">{s.duration}</span>
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-text-main">{s.title}</h2>
                <p className="text-text-muted leading-relaxed">{s.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-text-main">Что нужно от клиента:</h4>
                    {s.client.map((c) => (
                      <div key={c} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle className="w-4 h-4 text-surface-dark flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-text-main">Результат этапа:</h4>
                    <p className="text-sm text-text-muted">{s.result}</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          )
        })}
      </section>

      <CTA />
    </main>
  )
}
