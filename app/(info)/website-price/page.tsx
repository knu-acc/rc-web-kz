import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Стоимость создания сайта',
  description: 'Цены на создание сайтов в Алматы: лендинг от 85 000₸, корпоративный сайт от 135 000₸, интернет-магазин от 175 000₸, сайт на Tilda от 120 000₸.',
  keywords: ['стоимость сайта алматы', 'цена создания сайта', 'сколько стоит сайт', 'прайс веб-студия'],
  path: '/website-price',
})

const plans = [
  {
    title: 'Landing Page',
    price: '85 000₸',
    period: '5-7 дней',
    desc: 'Продающий одностраничник для рекламы',
    features: ['Уникальный дизайн', 'Адаптивная вёрстка', 'Форма заявки + WhatsApp', 'SEO-оптимизация', 'Подключение аналитики', 'SSL-сертификат', '30 дней поддержки'],
    href: '/landing-page',
  },
  {
    title: 'Корпоративный сайт',
    price: '135 000₸',
    period: '7-10 дней',
    desc: 'Полноценное представительство компании',
    popular: true,
    features: ['До 10 страниц', 'Уникальный дизайн', 'Блог / новости', 'Каталог услуг', 'Форма заявки + CRM', 'SEO-оптимизация', 'Google Maps', '30 дней поддержки'],
    href: '/corporate-site',
  },
  {
    title: 'Интернет-магазин',
    price: '175 000₸',
    period: '10-14 дней',
    desc: 'Онлайн-магазин с каталогом и оплатой',
    features: ['Каталог товаров', 'Корзина и оформление', 'Интеграция с Kaspi', 'Фильтры и поиск', 'Личный кабинет', 'SEO-оптимизация', 'Панель управления', '30 дней поддержки'],
    href: '/online-store',
  },
  {
    title: 'Сайт на Tilda',
    price: '120 000₸',
    period: '5-7 дней',
    desc: 'Быстрый запуск на конструкторе Tilda',
    features: ['До 7 страниц', 'Адаптивный дизайн', 'Визуальный редактор', 'Форма заявки', 'SEO-настройка', 'Обучение по Tilda', '30 дней поддержки'],
    href: '/tilda-site',
  },
]

const included = [
  'Бесплатная консультация и расчёт',
  'Фиксированная стоимость без доплат',
  'Поэтапная оплата: 50% предоплата',
  'Домен и хостинг — оплачиваются отдельно',
  'Правки на этапе дизайна — бесплатно',
  'Дополнительные страницы — от 5 000₸',
]

export default function WebsitePricePage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Стоимость', href: '/website-price' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Цены" title="Стоимость создания сайта" description="Прозрачные цены без скрытых платежей. Выберите подходящий тариф." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {plans.map((plan) => (
            <BentoCard key={plan.title} dark={plan.popular} className="justify-between">
              {plan.popular && (
                <div className="flex items-center gap-1 mb-2">
                  <Sparkles className="w-4 h-4 text-surface-dark" />
                  <span className="text-xs font-medium text-brand">Популярный выбор</span>
                </div>
              )}
              <div>
                <h3 className={`font-heading font-bold text-xl ${plan.popular ? 'text-white' : 'text-text-main'}`}>{plan.title}</h3>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-white/60' : 'text-text-muted'}`}>{plan.desc}</p>
              </div>
              <div className="my-4">
                <span className={`text-3xl font-heading font-bold ${plan.popular ? 'text-white' : 'text-brand'}`}>{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.popular ? 'text-white/60' : 'text-text-muted'}`}>{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/80' : 'text-text-muted'}`}>
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand' : 'text-surface-dark'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={plan.href} variant={plan.popular ? 'primary' : 'outline'} className="w-full justify-center">
                Подробнее <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8">
          <h2 className="text-2xl font-heading font-bold text-text-main">Что входит в стоимость</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2 text-text-muted">
                <Check className="w-5 h-5 text-surface-dark flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>

      <FAQ />
      <CTA />
    </main>
  )
}
