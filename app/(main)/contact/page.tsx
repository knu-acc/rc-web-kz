import type { Metadata } from 'next'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { Phone, Mail, MessageCircle, Send, Clock, MapPin, Zap, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакты RC-WEB.KZ в Алматы | Заказать создание сайта +7 778 949 29 10',
  description: 'Контакты RC-WEB.KZ в Алматы: WhatsApp +7 778 949 29 10, Telegram, телефон, email. Бесплатная консультация по созданию сайта. Связаться с нами.',
  keywords: [
    'контакты веб-разработчика Алматы',
    'заказать сайт Алматы контакты',
    'создание сайтов Алматы телефон',
  ],
  openGraph: {
    title: 'Контакты | Создание сайтов в Алматы',
    description: 'Свяжитесь со мной для заказа создания сайта в Алматы. Бесплатная консультация.',
    url: `${SITE_CONFIG.url}/contact`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Контакты',
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
}

const contactMethods = [
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Самый быстрый способ связи',
    value: 'Написать в WhatsApp',
    href: SOCIAL_LINKS.whatsapp,
    icon: MessageCircle,
    isPrimary: true,
  },
  {
    id: 'phone',
    title: 'Телефон',
    description: 'Быстрая консультация по телефону',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    icon: Phone,
    isPrimary: false,
  },
  {
    id: 'telegram',
    title: 'Telegram',
    description: 'Удобно для отправки файлов',
    value: 'Написать в Telegram',
    href: SOCIAL_LINKS.telegram,
    icon: Send,
    isPrimary: false,
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Для официальных запросов',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
    isPrimary: false,
  },
]

export default function ContactPage() {
  const contactSchema = generateContactPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Контакты', url: `${SITE_CONFIG.url}/contact` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Контакты', href: '/contact' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-16 pb-10 bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              Онлайн консультация
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white leading-tight">
              Свяжитесь со мной для <span className="gradient-text">бесплатной консультации</span>
            </h1>
            <p className="text-base text-secondary-600 dark:text-secondary-300 leading-relaxed">
              Обсудим ваш проект, ответим на вопросы и подготовим предложение. Работаем по всему Казахстану удалённо.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="btn-whatsapp inline-flex items-center gap-2"
                aria-label="Написать в WhatsApp для консультации"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Написать в WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="btn-outline inline-flex items-center gap-2"
                aria-label={`Позвонить по телефону ${SITE_CONFIG.phone}`}
              >
                <Phone className="w-4 h-4 shrink-0" />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Beautiful cards */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Способы связи
            </span>
            <h2 className="heading-lg mb-4">
              Выберите удобный <span className="gradient-text">способ связи</span>
            </h2>
            <p className="text-base text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Отвечаю быстро на все сообщения. Выберите наиболее удобный для вас способ связи
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.id === 'whatsapp' || method.id === 'telegram' ? '_blank' : undefined}
                  rel={method.id === 'whatsapp' || method.id === 'telegram' ? 'noopener noreferrer' : undefined}
                  className="group relative flex flex-col items-center text-left md:text-center p-4 sm:p-6 lg:p-8 rounded-3xl border-2 bg-white dark:bg-secondary-900 border-secondary-200 dark:border-secondary-800 hover:border-secondary-400 dark:hover:border-secondary-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  aria-label={`Связаться через ${method.title}`}
                >
                  {/* Icon with dark background */}
                  <div className="relative mb-6 w-14 h-14 rounded-2xl bg-secondary-800 dark:bg-secondary-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    {method.isPrimary && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary-900 dark:bg-secondary-600 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    )}
                    {/* Decorative gradient ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold mb-2 text-secondary-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-sm mb-4 text-secondary-600 dark:text-secondary-400">
                    {method.description}
                  </p>
                  <div className="mt-auto font-semibold text-sm text-secondary-700 dark:text-secondary-300">
                    {method.value}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-primary-500" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section bg-secondary-50/50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Working Hours */}
            <div className="text-left md:text-center p-6 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-200 dark:border-secondary-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary-800 dark:bg-secondary-700 flex items-center justify-center shadow-md">
                <Clock className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">Режим работы</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-1">{SITE_CONFIG.businessHours.weekdays}</p>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">{SITE_CONFIG.businessHours.saturday}</p>
            </div>

            {/* Location */}
            <div className="text-left md:text-center p-6 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-200 dark:border-secondary-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary-800 dark:bg-secondary-700 flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">Местоположение</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">{SITE_CONFIG.address.addressLocality}</p>
              <p className="text-secondary-500 dark:text-secondary-400 text-xs mt-1">Работаю удалённо по Казахстану</p>
            </div>

            {/* Response Time */}
            <div className="text-left md:text-center p-6 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-200 dark:border-secondary-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary-800 dark:bg-secondary-700 flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">Скорость ответа</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-1">В течение 15 минут</p>
              <p className="text-secondary-500 dark:text-secondary-400 text-xs">в рабочее время</p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
