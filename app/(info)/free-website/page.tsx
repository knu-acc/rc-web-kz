import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Gift, AlertTriangle, Check, X, TrendingUp, ShieldCheck, Gauge, Search } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Бесплатный сайт — стоит ли',
  description: 'Бесплатный сайт vs платный: сравнение возможностей, ограничения бесплатных конструкторов, почему инвестиция в сайт окупается.',
  keywords: ['бесплатный сайт', 'создать сайт бесплатно', 'бесплатный конструктор сайтов', 'wix бесплатно'],
  path: '/free-website',
})

const freeOptions = [
  { name: 'Wix (бесплатный)', domain: 'username.wixsite.com', ads: true, storage: '500 МБ', seo: 'Ограниченное', support: 'Форум' },
  { name: 'WordPress.com', domain: 'site.wordpress.com', ads: true, storage: '1 ГБ', seo: 'Базовое', support: 'Форум' },
  { name: 'Tilda (бесплатный)', domain: 'site.tildacdn.com', ads: false, storage: '50 МБ', seo: 'Ограниченное', support: 'Документация' },
  { name: 'uKit', domain: 'site.ukit.com', ads: true, storage: '100 МБ', seo: 'Базовое', support: 'Чат' },
]

const limitations = [
  { icon: AlertTriangle, title: 'Чужой домен', desc: 'Ваш адрес будет вида site.wixsite.com. Это выглядит непрофессионально и снижает доверие клиентов.' },
  { icon: AlertTriangle, title: 'Реклама платформы', desc: 'На бесплатном тарифе конструктор размещает свою рекламу на вашем сайте. Это отвлекает посетителей.' },
  { icon: AlertTriangle, title: 'Низкая скорость', desc: 'Бесплатные хостинги работают медленно. Google понижает медленные сайты в поисковой выдаче.' },
  { icon: AlertTriangle, title: 'Ограниченное SEO', desc: 'Нет доступа к метатегам, robots.txt, sitemap. Сайт практически невидим для поисковых систем.' },
  { icon: AlertTriangle, title: 'Нет аналитики', desc: 'Без подключения Google Analytics и Яндекс.Метрики вы не знаете, кто и откуда приходит на сайт.' },
  { icon: AlertTriangle, title: 'Риск потери данных', desc: 'Платформа может изменить условия или закрыться. Вы не владеете кодом и контентом полностью.' },
]

const comparison = [
  { feature: 'Собственный домен (.kz)', free: false, paid: true },
  { feature: 'Без рекламы платформы', free: false, paid: true },
  { feature: 'Полная SEO-оптимизация', free: false, paid: true },
  { feature: 'Высокая скорость загрузки', free: false, paid: true },
  { feature: 'Уникальный дизайн', free: false, paid: true },
  { feature: 'SSL-сертификат', free: false, paid: true },
  { feature: 'Интеграция с CRM', free: false, paid: true },
  { feature: 'Техническая поддержка', free: false, paid: true },
  { feature: 'Быстрый старт', free: true, paid: true },
  { feature: 'Нулевые затраты', free: true, paid: false },
]

export default function FreeWebsitePage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Бесплатный сайт', href: '/free-website' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Сравнение</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Бесплатный сайт: стоит ли?
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Разбираем плюсы и минусы бесплатных конструкторов. Когда бесплатно — это дорого.
          </p>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Ограничения" title="Минусы бесплатных сайтов" description="С чем вы столкнётесь на бесплатном тарифе" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {limitations.map((l) => {
            const Icon = l.icon
            return (
              <BentoCard key={l.title}>
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-main">{l.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{l.desc}</p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Таблица" title="Бесплатный vs платный сайт" description="Наглядное сравнение возможностей" />
        <BentoCard className="mt-12 p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-heading font-semibold text-text-main">Функция</th>
                  <th className="text-center p-4 font-heading font-semibold text-text-muted">Бесплатный</th>
                  <th className="text-center p-4 font-heading font-semibold text-brand">Платный</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="p-4 text-text-muted">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.free ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.paid ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8 items-center text-center">
          <TrendingUp className="w-10 h-10 text-surface-dark" />
          <h2 className="text-2xl font-heading font-bold text-text-main">Инвестиция, которая окупается</h2>
          <p className="text-text-muted max-w-2xl leading-relaxed">
            Профессиональный сайт от 85 000₸ начинает привлекать клиентов с первого месяца. Один-два заказа через сайт полностью окупают вложения. Бесплатный сайт, напротив, может отпугивать потенциальных клиентов непрофессиональным видом.
          </p>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
