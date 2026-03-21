import type { Metadata } from 'next'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { ArrowRight, Globe, Layout, ShoppingCart, Blocks, Search, Megaphone, Palette } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Услуги веб-разработки',
  description: 'Создание сайтов, интернет-магазинов, лендингов, SEO-продвижение и реклама в Алматы. Полный спектр услуг для вашего бизнеса в интернете.',
  path: '/services',
  keywords: ['услуги веб разработки алматы', 'создание сайтов', 'seo продвижение', 'реклама сайта'],
})

const services = [
  {
    icon: Layout,
    title: 'Landing Page',
    desc: 'Продающий лендинг для запуска рекламы. Высокая конверсия, быстрая загрузка.',
    price: 'от 85 000₸',
    href: '/landing-page',
    badge: 'Популярное',
  },
  {
    icon: Globe,
    title: 'Корпоративный сайт',
    desc: 'Многостраничный сайт с CMS-панелью, каталогом и блогом для вашей компании.',
    price: 'от 135 000₸',
    href: '/corporate-site',
  },
  {
    icon: ShoppingCart,
    title: 'Интернет-магазин',
    desc: 'Полнофункциональный магазин с каталогом, корзиной и оплатой через Kaspi.',
    price: 'от 175 000₸',
    href: '/online-store',
  },
  {
    icon: Blocks,
    title: 'Сайт на Tilda',
    desc: 'Стильный сайт на Tilda с визуальным редактором и встроенной CRM.',
    price: 'от 120 000₸',
    href: '/tilda-site',
  },
  {
    icon: Palette,
    title: 'Веб-дизайн',
    desc: 'UI/UX дизайн, прототипирование в Figma, фирменный стиль и дизайн-система.',
    price: 'от 70 000₸',
    href: '/web-design',
  },
  {
    icon: Search,
    title: 'SEO-оптимизация',
    desc: 'Комплексное SEO-продвижение в Google и Яндекс. Аудит, оптимизация, ссылки.',
    price: 'от 50 000₸/мес',
    href: '/seo-optimization',
  },
  {
    icon: Megaphone,
    title: 'Реклама сайта',
    desc: 'Google Ads, таргетированная реклама, ремаркетинг. Привлекаем целевых клиентов.',
    price: 'от 40 000₸/мес',
    href: '/website-advertising',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: 'Услуги' }]} />

        <div className="mt-8 max-w-3xl">
          <Badge variant="accent">7 услуг</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-text-main mt-4">
            Услуги <span className="text-brand">веб-разработки</span>
          </h1>
          <p className="text-xl text-text-muted mt-6">
            Полный цикл создания и продвижения сайтов для бизнеса в Алматы. От дизайна до запуска рекламы.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Link key={s.href} href={s.href} className="group">
                <BentoCard interactive className="h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-surface-dark/5 rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    {s.badge && <Badge variant="accent">{s.badge}</Badge>}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-text-main">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-default">
                    <span className="font-heading font-semibold text-brand">{s.price}</span>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-brand transition-colors" />
                  </div>
                </BentoCard>
              </Link>
            )
          })}
        </div>
      </section>

      <CTA />
    </>
  )
}
