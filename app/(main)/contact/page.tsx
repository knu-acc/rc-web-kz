import type { Metadata } from 'next'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ContactForm } from '@/components/ui/ContactForm'
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
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-primary-50 via-white to-violet-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 relative overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/40 dark:bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-200/40 dark:bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Онлайн консультация
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white leading-tight">
              Свяжитесь со мной для <span className="gradient-text">бесплатной консультации</span>
            </h1>

            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-2xl mx-auto">
              Обсудим ваш проект, ответим на вопросы и подготовим индивидуальное предложение. Работаю по всему Казахстану удалённо.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                className="btn-whatsapp inline-flex items-center gap-2 min-h-[56px] px-8 text-lg"
                aria-label="Написать в WhatsApp для консультации"
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                Написать в WhatsApp
              </a>
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="btn-primary inline-flex items-center gap-2 min-h-[56px] px-8 text-lg"
                aria-label={`Позвонить по телефону ${SITE_CONFIG.phone}`}
              >
                <Phone className="w-6 h-6 shrink-0" />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Beautiful cards */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">
              Способы связи
            </span>
            <h2 className="heading-lg mb-4">
              Выберите удобный <span className="gradient-text">способ связи</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
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
                  className="group relative flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-3xl border-2 bg-white dark:bg-secondary-900 border-secondary-200 dark:border-secondary-800 hover:border-secondary-400 dark:hover:border-secondary-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                  <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
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
            <div className="text-center p-6 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-200 dark:border-secondary-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary-800 dark:bg-secondary-700 flex items-center justify-center shadow-md">
                <Clock className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">Режим работы</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-1">{SITE_CONFIG.businessHours.weekdays}</p>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">{SITE_CONFIG.businessHours.saturday}</p>
            </div>

            {/* Location */}
            <div className="text-center p-6 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-200 dark:border-secondary-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary-800 dark:bg-secondary-700 flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">Местоположение</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">{SITE_CONFIG.address.addressLocality}</p>
              <p className="text-secondary-500 dark:text-secondary-400 text-xs mt-1">Работаю удалённо по Казахстану</p>
            </div>

            {/* Response Time */}
            <div className="text-center p-6 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-200 dark:border-secondary-800">
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

      {/* Contact Form Section */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">
                Отправьте <span className="gradient-text">заявку</span>
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary-50/50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">
                Часто задаваемые <span className="gradient-text">вопросы</span>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-secondary-950 rounded-2xl p-6 border border-secondary-200 dark:border-secondary-800">
                <h3 className="font-bold text-lg text-secondary-900 dark:text-white mb-2">
                  Как быстро вы отвечаете?
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Обычно отвечаю в течение 15 минут в рабочее время (Пн-Пт 09:00-18:00, Сб 10:00-16:00). В WhatsApp и Telegram — практически мгновенно.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-2xl p-6 border border-secondary-200 dark:border-secondary-800">
                <h3 className="font-bold text-lg text-secondary-900 dark:text-white mb-2">
                  Работаете ли вы удалённо?
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Да, работаю удалённо по всему Казахстану. Все обсуждения, согласования и передача материалов происходят онлайн.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-2xl p-6 border border-secondary-200 dark:border-secondary-800">
                <h3 className="font-bold text-lg text-secondary-900 dark:text-white mb-2">
                  Консультация действительно бесплатная?
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Да, первая консультация полностью бесплатная. Обсудим ваш проект, ответим на вопросы и подготовим предложение без каких-либо обязательств.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-violet-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-white/90">
              Свяжитесь со мной прямо сейчас и получите бесплатную консультацию по вашему проекту
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                className="inline-flex items-center gap-2 min-h-[56px] px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                aria-label="Написать в WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                Написать в WhatsApp
              </a>
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="inline-flex items-center gap-2 min-h-[56px] px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all hover:shadow-xl hover:-translate-y-1"
                aria-label={`Позвонить по телефону ${SITE_CONFIG.phone}`}
              >
                <Phone className="w-6 h-6" />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
