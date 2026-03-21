import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/lib/constants'
import { Shield, Database, Eye, Lock, UserCheck, Mail, FileText, Settings } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности RC-WEB.KZ. Как мы собираем, храним и используем персональные данные пользователей сайта.',
  keywords: ['политика конфиденциальности', 'персональные данные', 'защита данных'],
  path: '/privacy',
})

const sections = [
  {
    icon: Database,
    title: '1. Какие данные мы собираем',
    items: [
      'Имя и контактные данные, которые вы оставляете в формах обратной связи',
      'Номер телефона и адрес электронной почты для связи по проекту',
      'Техническая информация: IP-адрес, тип браузера, операционная система',
      'Данные о посещении сайта через Google Analytics и Яндекс.Метрику',
      'Cookies для улучшения работы сайта и аналитики',
    ],
  },
  {
    icon: Eye,
    title: '2. Как мы используем данные',
    items: [
      'Для связи с вами по вашим заявкам и обращениям',
      'Для выполнения договорных обязательств по разработке сайтов',
      'Для улучшения качества наших услуг и сайта',
      'Для отправки информации о наших услугах (только с вашего согласия)',
      'Для аналитики посещаемости и улучшения пользовательского опыта',
    ],
  },
  {
    icon: Lock,
    title: '3. Защита данных',
    items: [
      'Используем SSL-шифрование для защиты передаваемых данных',
      'Доступ к персональным данным ограничен кругом ответственных сотрудников',
      'Не передаём данные третьим лицам без вашего согласия',
      'Храним данные только в течение необходимого периода',
      'Регулярно обновляем меры безопасности',
    ],
  },
  {
    icon: UserCheck,
    title: '4. Ваши права',
    items: [
      'Запросить информацию о хранящихся персональных данных',
      'Потребовать исправления неточных данных',
      'Потребовать удаления ваших персональных данных',
      'Отозвать согласие на обработку данных в любое время',
      'Подать жалобу в уполномоченный орган по защите персональных данных',
    ],
  },
  {
    icon: Settings,
    title: '5. Файлы cookies',
    items: [
      'Используем необходимые cookies для работы сайта',
      'Аналитические cookies (Google Analytics, Яндекс.Метрика) для статистики',
      'Вы можете отключить cookies в настройках браузера',
      'Отключение cookies может ограничить функциональность сайта',
    ],
  },
  {
    icon: Mail,
    title: '6. Контактная информация',
    items: [
      `Email: ${SITE_CONFIG.email}`,
      `Телефон: ${SITE_CONFIG.phone}`,
      `Адрес: ${SITE_CONFIG.address.streetAddress}, ${SITE_CONFIG.address.addressLocality}`,
      'По всем вопросам обработки персональных данных обращайтесь по указанным контактам',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Конфиденциальность', href: '/privacy' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-20 px-8 text-center items-center">
          <Shield className="w-12 h-12 text-brand" />
          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter text-white">
            Политика конфиденциальности
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Настоящая политика описывает, как RC-WEB.KZ собирает, использует и защищает ваши персональные данные.
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
