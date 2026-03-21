import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/lib/constants'
import { MapPin, Bus, Car, Clock, Phone, Mail, MessageCircle, Navigation } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Как добраться до RC-WEB.KZ',
  description: 'Как добраться до офиса RC-WEB.KZ в Алматы. Адрес, общественный транспорт, парковка, часы работы и контакты.',
  keywords: ['как добраться rc-web', 'офис rc-web алматы', 'адрес веб-студии алматы'],
  path: '/kak-dobratsya',
})

const contactInfo = [
  { icon: MapPin, label: 'Адрес', value: `${SITE_CONFIG.address.streetAddress}, ${SITE_CONFIG.address.addressLocality}` },
  { icon: Phone, label: 'Телефон', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Написать в WhatsApp', href: SITE_CONFIG.whatsapp },
]

const schedule = [
  { day: 'Ежедневно', time: '24/7' },
]

const transport = [
  {
    icon: Bus,
    title: 'Общественный транспорт',
    items: [
      'Автобус: маршруты 2, 32, 65, 73 — остановка рядом с офисом',
      'Метро: ближайшая станция — Алмалы или Жибек Жолы',
      'Троллейбус: маршруты 4, 5, 6 до центра города',
      'Время в пути от центра — около 15-20 минут',
    ],
  },
  {
    icon: Car,
    title: 'На автомобиле',
    items: [
      'Навигатор: введите «RC-WEB.KZ Алматы» в 2ГИС или Google Maps',
      'Парковка: бесплатная парковка рядом со зданием',
      'Из центра: по проспекту Абая или Аль-Фараби',
      'Время в пути зависит от пробок — рекомендуем выезжать заранее',
    ],
  },
]

export default function KakDobratsyaPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Как добраться', href: '/kak-dobratsya' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Контакты</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Как до нас добраться
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Мы находимся в Алматы. Работаем как в офисе, так и дистанционно по всему Казахстану.
          </p>
        </BentoCard>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((c) => {
            const Icon = c.icon
            const Tag = c.href ? 'a' : 'div'
            return (
              <BentoCard key={c.label} interactive={!!c.href} as={Tag} href={c.href}>
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <span className="text-sm text-text-muted">{c.label}</span>
                <span className="font-heading font-semibold text-text-main text-sm">{c.value}</span>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
              <Clock className="w-6 h-6 text-surface-dark" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-text-main">Часы работы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {schedule.map((s) => (
              <div key={s.day} className="bg-surface-alt rounded-2xl p-4 text-center">
                <div className="text-sm text-text-muted mb-1">{s.day}</div>
                <div className="text-lg font-heading font-bold text-text-main">{s.time}</div>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>

      {/* Transport */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Маршрут" title="Как добраться" description="На общественном транспорте или на автомобиле" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {transport.map((t) => {
            const Icon = t.icon
            return (
              <BentoCard key={t.title} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-surface-dark" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text-main">{t.title}</h3>
                </div>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <Navigation className="w-4 h-4 text-surface-dark flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* Map Note */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8 items-center text-center">
          <MapPin className="w-10 h-10 text-surface-dark" />
          <h2 className="text-2xl font-heading font-bold text-text-main">Найдите нас на карте</h2>
          <p className="text-text-muted max-w-xl leading-relaxed">
            Откройте 2ГИС или Google Maps и введите «RC-WEB.KZ» или наш адрес. Также вы можете связаться с нами через WhatsApp для уточнения маршрута.
          </p>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
