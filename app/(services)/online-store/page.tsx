import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, ShoppingCart, CreditCard, Filter, Package, Settings, BarChart3, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Интернет-магазин',
  serviceDescription: 'Разработка интернет-магазинов под ключ в Алматы. Каталог товаров, корзина, оплата через Kaspi, фильтрация, админ-панель.',
  price: '175 000₸',
  path: '/online-store',
  keywords: ['интернет магазин алматы', 'создание интернет магазина', 'заказать интернет магазин', 'e-commerce алматы'],
})

const features = [
  { icon: Package, title: 'Каталог товаров', desc: 'Удобный каталог с категориями, карточками товаров, описаниями и галереями фотографий.' },
  { icon: ShoppingCart, title: 'Корзина и оформление', desc: 'Интуитивная корзина, пошаговое оформление заказа, расчёт доставки по Казахстану.' },
  { icon: CreditCard, title: 'Оплата через Kaspi', desc: 'Интеграция Kaspi Pay, Kaspi QR и банковских карт. Безопасные онлайн-платежи.' },
  { icon: Filter, title: 'Фильтрация и поиск', desc: 'Фильтры по цене, бренду, характеристикам. Умный поиск с автодополнением.' },
  { icon: Settings, title: 'Админ-панель', desc: 'Управление товарами, заказами, клиентами и скидками через удобный интерфейс.' },
  { icon: BarChart3, title: 'Аналитика продаж', desc: 'Отчёты по продажам, популярным товарам, конверсии и поведению покупателей.' },
]

const included = [
  'Каталог до 500 товаров с категориями',
  'Корзина и оформление заказа',
  'Интеграция Kaspi Pay / Kaspi QR',
  'Фильтрация и сортировка товаров',
  'Админ-панель для управления магазином',
  'Личный кабинет покупателя',
  'SEO-оптимизация карточек товаров',
  'Подключение аналитики и CRM',
  'Хостинг и домен на 1 год',
  'Техподдержка 30 дней бесплатно',
  'Срок разработки: 14-21 рабочий день',
]

export default function OnlineStoreService() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги', href: '/services' }, { label: 'Интернет-магазин' }]} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="accent">от 175 000₸</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main">
              Создание<br /><span className="text-brand">интернет-магазина</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Полнофункциональный интернет-магазин с каталогом, корзиной и оплатой через Kaspi. Адаптивный дизайн и удобная админ-панель.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" href="/contact">
                Обсудить проект <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                Примеры работ
              </Button>
            </div>
          </div>

          <BentoCard dark className="p-10 items-center text-center">
            <div className="text-6xl font-heading font-bold text-brand">500+</div>
            <div className="text-2xl font-heading font-semibold text-white">товаров</div>
            <p className="text-white/60">Каталог с фильтрацией и быстрым поиском</p>
            <div className="flex gap-8 mt-4">
              <div>
                <div className="text-2xl font-heading font-bold text-white">Kaspi</div>
                <div className="text-sm text-white/50">Оплата</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-white">CRM</div>
                <div className="text-sm text-white/50">Интеграция</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Возможности" title="Всё для успешных онлайн-продаж" />
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
            <SectionHeading badge="Тариф" title="Что входит в стоимость" align="left" />
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
            <h3 className="font-heading font-semibold text-xl text-text-main">Оставить заявку</h3>
            <p className="text-text-muted text-sm">Опишите ваш проект и мы свяжемся в течение часа</p>
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      <CTA />
    </>
  )
}
