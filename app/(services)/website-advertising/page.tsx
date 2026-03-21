import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Megaphone, Target, RefreshCw, BarChart3, Users, MousePointerClick, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Реклама сайта',
  serviceDescription: 'Настройка и ведение рекламных кампаний в Google Ads и социальных сетях. Таргетированная реклама, ремаркетинг, аналитика.',
  price: '40 000₸/мес',
  path: '/website-advertising',
  keywords: ['реклама сайта алматы', 'google ads алматы', 'контекстная реклама', 'таргетированная реклама алматы'],
})

const features = [
  { icon: Megaphone, title: 'Google Ads', desc: 'Контекстная реклама в поиске Google. Показываем объявления тем, кто ищет ваши услуги прямо сейчас.' },
  { icon: Target, title: 'Таргетированная реклама', desc: 'Реклама в Instagram и Facebook с точным таргетингом по интересам, возрасту и геолокации.' },
  { icon: RefreshCw, title: 'Ремаркетинг', desc: 'Возвращаем посетителей, которые были на сайте, но не оставили заявку. Повышаем конверсию.' },
  { icon: BarChart3, title: 'Сквозная аналитика', desc: 'Отслеживаем каждую заявку от клика до продажи. Оптимизируем бюджет на основе данных.' },
  { icon: Users, title: 'Аудитории', desc: 'Создаём look-alike аудитории на основе ваших лучших клиентов для максимальной эффективности.' },
  { icon: MousePointerClick, title: 'A/B тестирование', desc: 'Тестируем объявления, аудитории и посадочные страницы для снижения стоимости заявки.' },
]

const included = [
  'Аудит текущих рекламных кампаний',
  'Настройка Google Ads (поиск + КМС)',
  'Настройка таргета в Instagram/Facebook',
  'Создание рекламных креативов',
  'Настройка ремаркетинга и ретаргетинга',
  'Подключение сквозной аналитики',
  'A/B тестирование объявлений',
  'Еженедельная оптимизация кампаний',
  'Ежемесячные отчёты по ROI',
  'Рекомендации по увеличению конверсии',
]

export default function WebsiteAdvertisingService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'Реклама сайта' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 40 000₸/мес</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              <span className="text-brand">Реклама</span><br />вашего сайта
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Настраиваем и ведём рекламные кампании в Google Ads и соцсетях. Привлекаем клиентов с оптимальной стоимостью заявки.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Запустить рекламу <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Кейсы рекламы
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">x3</div>
            <div className="text-2xl font-heading font-semibold text-white">рост заявок</div>
            <p className="text-white/60">Средний результат в первые 2 месяца работы</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">Google</div>
                <div className="text-sm text-white/50">Ads</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">Meta</div>
                <div className="text-sm text-white/50">Таргет</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Инструменты" title="Как мы привлекаем клиентов" />
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
            <SectionHeading badge="Тариф" title="Что входит в ведение рекламы" align="left" />
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
            <h3 className="font-heading font-semibold text-xl text-text-main">Бесплатный аудит рекламы</h3>
            <p className="text-text-muted text-sm">Проанализируем текущие кампании и предложим точки роста</p>
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
