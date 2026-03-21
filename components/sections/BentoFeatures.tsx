import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Code, Palette, Search, ShoppingCart, Rocket, Smartphone, Globe, BarChart3 } from 'lucide-react'

const features = [
  { icon: Code, title: 'Landing Page', desc: 'Продающие одностраничники с высокой конверсией. Идеально для запуска рекламы.', href: '/landing-page', accent: true },
  { icon: Globe, title: 'Корпоративный сайт', desc: 'Полноценное представительство компании с каталогом услуг и блогом.', href: '/corporate-site' },
  { icon: ShoppingCart, title: 'Интернет-магазин', desc: 'Каталог, корзина, интеграция с Kaspi и платёжными системами.', href: '/online-store' },
  { icon: Palette, title: 'Веб-дизайн', desc: 'Уникальный дизайн, который выделяет ваш бренд среди конкурентов.', href: '/web-design' },
  { icon: Search, title: 'SEO-оптимизация', desc: 'Вывод сайта в топ Google и Яндекс по целевым запросам.', href: '/seo-optimization' },
  { icon: Rocket, title: 'Сайт на Tilda', desc: 'Быстрый запуск на популярном конструкторе с красивым дизайном.', href: '/tilda-site' },
  { icon: BarChart3, title: 'Реклама сайта', desc: 'Настройка контекстной рекламы Google Ads и таргетированной в соцсетях.', href: '/website-advertising' },
  { icon: Smartphone, title: 'Адаптивность', desc: 'Безупречное отображение на телефонах, планшетах и десктопах.' },
]

export function BentoFeatures() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        badge="Услуги"
        title="Что мы создаём"
        description="Полный спектр веб-услуг для бизнеса любого масштаба"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {features.map((f, i) => {
          const Icon = f.icon
          const isLarge = i === 0
          return (
            <BentoCard
              key={f.title}
              interactive
              dark={isLarge}
              as={f.href ? 'a' : 'div'}
              href={f.href}
              className={isLarge ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLarge ? 'bg-brand' : 'bg-surface-dark/5'}`}>
                <Icon className={`w-6 h-6 ${isLarge ? 'text-white' : 'text-surface-dark'}`} />
              </div>
              <h3 className={`font-heading font-semibold ${isLarge ? 'text-2xl md:text-3xl text-white' : 'text-lg text-text-main'}`}>
                {f.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isLarge ? 'text-white/70 text-base' : 'text-text-muted'}`}>
                {f.desc}
              </p>
              {f.href && (
                <span className={`text-sm font-medium mt-auto ${isLarge ? 'text-brand' : 'text-surface-dark'} group-hover:underline`}>
                  Подробнее →
                </span>
              )}
            </BentoCard>
          )
        })}
      </div>
    </section>
  )
}
