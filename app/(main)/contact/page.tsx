import type { Metadata } from 'next'
import { generateInfoMetadata } from '@/lib/metadata'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTA } from '@/components/sections/CTA'
import { Phone, Mail, MessageCircle, Send, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = generateInfoMetadata({
  title: 'Контакты',
  description:
    'Свяжитесь с RC-WEB.KZ для заказа создания сайта в Алматы. WhatsApp, Telegram, телефон, email. Бесплатная консультация и расчёт стоимости проекта.',
  keywords: [
    'контакты веб-разработчика Алматы',
    'заказать сайт Алматы контакты',
    'создание сайтов Алматы телефон',
  ],
  path: '/contact',
})

const contactMethods = [
  {
    id: 'phone',
    title: 'Телефон',
    value: '+7 778 949 29 10',
    href: `tel:${SITE_CONFIG.phone}`,
    icon: Phone,
    description: 'Быстрая консультация',
  },
  {
    id: 'email',
    title: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
    description: 'Для официальных запросов',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    value: 'Написать в WhatsApp',
    href: SITE_CONFIG.whatsapp,
    icon: MessageCircle,
    description: 'Самый быстрый способ связи',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    value: 'Написать в Telegram',
    href: SITE_CONFIG.telegram,
    icon: Send,
    description: 'Удобно для файлов',
  },
  {
    id: 'address',
    title: 'Адрес',
    value: 'Алматы, Казахстан',
    href: '#',
    icon: MapPin,
    description: 'Работаем удалённо по всему КЗ',
  },
  {
    id: 'hours',
    title: 'Режим работы',
    value: '24/7',
    href: '#',
    icon: Clock,
    description: 'Отвечаем в любое время',
  },
]

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Контакты', href: '/contact' },
        ]}
      />

      <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading
          badge="Контакты"
          title="Свяжитесь с нами"
          description="Обсудим ваш проект и подготовим предложение. Бесплатная консультация."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Left column — contact methods */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const isLink = method.href !== '#'
              const Wrapper = isLink ? 'a' : 'div'
              const linkProps = isLink
                ? {
                    href: method.href,
                    target:
                      method.id === 'whatsapp' || method.id === 'telegram'
                        ? ('_blank' as const)
                        : undefined,
                    rel:
                      method.id === 'whatsapp' || method.id === 'telegram'
                        ? 'noopener noreferrer'
                        : undefined,
                  }
                : {}

              return (
                <BentoCard key={method.id} className="p-6 group">
                  <Wrapper {...linkProps} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center group-hover:bg-surface-dark/10 transition-colors">
                      <Icon className="w-6 h-6 text-surface-dark" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-text-main">
                        {method.title}
                      </h3>
                      <p className="text-sm text-text-muted mt-0.5">
                        {method.description}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-surface-dark mt-auto">
                      {method.value}
                    </span>
                  </Wrapper>
                </BentoCard>
              )
            })}
          </div>

          {/* Right column — contact form */}
          <BentoCard className="p-8">
            <h3 className="text-xl font-heading font-bold text-text-main mb-6">
              Оставить заявку
            </h3>
            <ContactForm />
          </BentoCard>
        </div>
      </section>

      {/* Map / address description */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-3xl bg-surface-dark/5 flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-surface-dark" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-main mb-2">
                Алматы, Казахстан
              </h2>
              <p className="text-text-muted leading-relaxed max-w-2xl">
                Мы работаем удалённо по всему Казахстану и СНГ. Все встречи и
                согласования проходят онлайн через Zoom, WhatsApp или Telegram.
                Это позволяет нам быстро приступать к проекту без привязки к
                локации.
              </p>
            </div>
          </div>
        </BentoCard>
      </section>

      <CTA />
    </>
  )
}
