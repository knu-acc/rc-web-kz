import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { CTA } from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/lib/constants'
import { FileText, Handshake, CreditCard, Clock, AlertCircle, ShieldCheck, Scale, Mail } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Условия использования',
  description: 'Условия использования сайта и услуг RC-WEB.KZ. Порядок оказания услуг по разработке сайтов, оплата, сроки, гарантии.',
  keywords: ['условия использования', 'договор оферта', 'условия разработки сайта'],
  path: '/terms',
})

const sections = [
  {
    icon: FileText,
    title: '1. Общие положения',
    items: [
      'Настоящие условия регулируют порядок оказания услуг по созданию и разработке веб-сайтов студией RC-WEB.KZ.',
      'Заказывая услуги, клиент подтверждает согласие с настоящими условиями.',
      'RC-WEB.KZ оставляет за собой право изменять условия с уведомлением клиентов.',
      'Услуги оказываются на территории Республики Казахстан и дистанционно для клиентов из других регионов.',
    ],
  },
  {
    icon: Handshake,
    title: '2. Порядок работы',
    items: [
      'Работа начинается после согласования технического задания и внесения предоплаты.',
      'Клиент предоставляет необходимые материалы: тексты, фотографии, логотип, доступы.',
      'Промежуточные результаты согласуются с клиентом на каждом этапе.',
      'Количество бесплатных правок на этапе дизайна — до 3 итераций.',
      'Дополнительные правки после утверждения дизайна оплачиваются отдельно.',
    ],
  },
  {
    icon: CreditCard,
    title: '3. Оплата',
    items: [
      'Стоимость услуг определяется в соответствии с выбранным тарифом и объёмом работ.',
      'Предоплата составляет 50% от стоимости проекта.',
      'Оставшиеся 50% оплачиваются после завершения и приёмки проекта.',
      'Оплата производится на расчётный счёт или через Kaspi переводом.',
      'Цены указаны в тенге (₸) и включают все налоги.',
    ],
  },
  {
    icon: Clock,
    title: '4. Сроки',
    items: [
      'Сроки разработки указаны в рабочих днях и начинают отсчёт после получения предоплаты и всех материалов.',
      'Задержки по вине клиента (отсутствие материалов, долгое согласование) продлевают сроки.',
      'При форс-мажорных обстоятельствах сроки могут быть пересмотрены по обоюдному согласию.',
      'Типичные сроки: лендинг — 5-7 дней, корпоративный сайт — 7-10 дней, интернет-магазин — 10-14 дней.',
    ],
  },
  {
    icon: ShieldCheck,
    title: '5. Гарантии',
    items: [
      '30 дней бесплатной технической поддержки после запуска сайта.',
      'Исправление ошибок в вёрстке и функциональности — бесплатно в гарантийный период.',
      'Гарантия не распространяется на изменения, внесённые клиентом или третьими лицами.',
      'Гарантируем работоспособность сайта в актуальных версиях основных браузеров.',
    ],
  },
  {
    icon: AlertCircle,
    title: '6. Ответственность',
    items: [
      'RC-WEB.KZ не несёт ответственности за контент, размещённый клиентом.',
      'Клиент гарантирует, что предоставленные материалы не нарушают права третьих лиц.',
      'RC-WEB.KZ не гарантирует конкретных результатов по продажам и позициям в поиске.',
      'Максимальная ответственность RC-WEB.KZ ограничена суммой оплаченных услуг.',
    ],
  },
  {
    icon: Scale,
    title: '7. Интеллектуальная собственность',
    items: [
      'Все права на готовый сайт переходят клиенту после полной оплаты.',
      'RC-WEB.KZ сохраняет право использовать проект в портфолио, если не оговорено иное.',
      'Использованные библиотеки и фреймворки с открытым исходным кодом сохраняют свои лицензии.',
      'Дизайн-макеты передаются клиенту в формате Figma после полной оплаты.',
    ],
  },
  {
    icon: Mail,
    title: '8. Контакты и споры',
    items: [
      `По всем вопросам: ${SITE_CONFIG.email}, ${SITE_CONFIG.phone}`,
      'Споры решаются путём переговоров.',
      'При невозможности решения спора — в соответствии с законодательством Республики Казахстан.',
      `Адрес: ${SITE_CONFIG.address.streetAddress}, ${SITE_CONFIG.address.addressLocality}`,
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Условия', href: '/terms' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-20 px-8 text-center items-center">
          <Scale className="w-12 h-12 text-brand" />
          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter text-white">
            Условия использования
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Порядок оказания услуг, оплата, сроки и гарантии при работе с RC-WEB.KZ.
          </p>
          <span className="text-sm text-white/50">Последнее обновление: март 2025</span>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto space-y-4">
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <BentoCard key={s.title} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-muted flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h2 className="text-xl font-heading font-bold text-text-main">{s.title}</h2>
              </div>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-text-muted leading-relaxed pl-4 border-l-2 border-brand/20">
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>
          )
        })}
      </section>

      <CTA />
    </main>
  )
}
