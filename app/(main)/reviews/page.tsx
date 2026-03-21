import type { Metadata } from 'next'
import Link from 'next/link'
import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BentoCard } from '@/components/ui/BentoCard'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { Star, Award, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Отзывы клиентов',
  description:
    'Отзывы клиентов RC-WEB.KZ: более 120 реальных отзывов о создании сайтов в Алматы. Рейтинг 4.9/5, 100% довольных клиентов.',
  keywords: [
    'отзывы rc-web',
    'отзывы создание сайтов Алматы',
    'отзывы веб-разработчик',
  ],
  path: '/reviews',
})

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Отзывы', href: '/reviews' },
        ]}
      />

      {/* Stats */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Отзывы клиентов"
          title="Нам доверяют бизнесы по всему Казахстану"
          description="Каждый проект — это история успеха. Читайте реальные отзывы наших клиентов."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <BentoCard className="items-center text-center">
            <Star className="w-8 h-8 text-surface-dark" />
            <div className="text-3xl font-heading font-bold text-surface-dark">4.9</div>
            <div className="text-sm text-text-muted">Средний рейтинг</div>
          </BentoCard>
          <BentoCard className="items-center text-center">
            <Users className="w-8 h-8 text-surface-dark" />
            <div className="text-3xl font-heading font-bold text-surface-dark">120+</div>
            <div className="text-sm text-text-muted">Довольных клиентов</div>
          </BentoCard>
          <BentoCard className="items-center text-center">
            <Award className="w-8 h-8 text-surface-dark" />
            <div className="text-3xl font-heading font-bold text-surface-dark">100%</div>
            <div className="text-sm text-text-muted">Сдали в срок</div>
          </BentoCard>
          <BentoCard className="items-center text-center">
            <TrendingUp className="w-8 h-8 text-surface-dark" />
            <div className="text-3xl font-heading font-bold text-surface-dark">85%</div>
            <div className="text-sm text-text-muted">Возвращаются снова</div>
          </BentoCard>
        </div>
      </section>

      {/* Screenshot reviews */}
      <Testimonials />

      {/* Internal links for SEO */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Наши услуги"
          title="Посмотрите, что мы делаем"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {[
            { label: 'Landing Page', href: '/landing-page', desc: 'Продающие лендинги для запуска рекламы' },
            { label: 'Корпоративный сайт', href: '/corporate-site', desc: 'Представительство компании в интернете' },
            { label: 'Интернет-магазин', href: '/online-store', desc: 'Каталог товаров с корзиной и оплатой' },
            { label: 'Портфолио работ', href: '/portfolio', desc: 'Примеры завершённых проектов' },
            { label: 'SEO-продвижение', href: '/seo-optimization', desc: 'Вывод сайта в топ Google и Яндекс' },
            { label: 'Связаться с нами', href: '/contact', desc: 'Обсудите проект — консультация бесплатно' },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <BentoCard interactive className="h-full">
                <h3 className="font-heading font-semibold text-surface-dark">{link.label}</h3>
                <p className="text-sm text-text-muted">{link.desc}</p>
              </BentoCard>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
