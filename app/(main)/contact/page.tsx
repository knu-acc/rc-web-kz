import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

const YandexMap = dynamic(() => import('@/components/sections/YandexMap').then(mod => ({ default: mod.YandexMap })), { loading: () => <div style={{ width: '100%', height: '400px' }} /> })

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
    id: 'phone',
    title: 'Телефон',
    description: 'Быстрая консультация',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Самый быстрый способ',
    value: 'Написать',
    href: SOCIAL_LINKS.whatsapp,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    description: 'Удобно для файлов',
    value: 'Написать',
    href: SOCIAL_LINKS.telegram,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.223s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50',
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Для документов',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
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

      {/* Hero Section with proper top padding */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-violet-50 via-white to-primary-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                Контакты
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white leading-tight">
                Получите <span className="gradient-text">бесплатную консультацию</span>
              </h1>

              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-lg">
                Свяжитесь со мной любым удобным способом для обсуждения вашего проекта. Отвечаю быстро!
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp inline-flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Написать в WhatsApp
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline">
                  Позвонить
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/img/slider4.png"
                alt="Контакты для заказа создания сайта в Алматы"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 600px"
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Redesigned horizontal cards */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md">Способы связи</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                className="group flex items-center gap-5 p-5 bg-white dark:bg-secondary-950 rounded-2xl border border-secondary-100 dark:border-secondary-800 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon with gradient background */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-secondary-900 dark:text-white">{method.title}</h3>
                    <svg className="w-5 h-5 text-secondary-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-secondary-500 dark:text-secondary-400 text-sm">{method.description}</p>
                  <p className="text-primary-600 font-medium truncate mt-1">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-secondary-50/50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md">Алматы, Казахстан</h2>
            <p className="text-secondary-600 dark:text-secondary-300 mt-4">Работаю удалённо по всему Казахстану</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <YandexMap />
          </div>
        </div>
      </section>
    </>
  )
}
