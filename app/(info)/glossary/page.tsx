import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Глоссарий терминов | Словарь веб-разработки - RC-WEB.KZ',
  description: 'Глоссарий терминов веб-разработки: Landing Page, SEO, адаптивная верстка, CMS, хостинг и другие термины. Полезный словарь для понимания создания сайтов.',
  keywords: ['глоссарий веб-разработки', 'термины создания сайтов', 'словарь веб-терминов'],
  openGraph: {
    title: 'Глоссарий терминов | Словарь веб-разработки - RC-WEB.KZ',
    description: 'Глоссарий терминов веб-разработки: Landing Page, SEO, адаптивная верстка, CMS, хостинг и другие термины. Полезный словарь для понимания создания сайтов.',
    url: `${SITE_CONFIG.url}/glossary`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Глоссарий терминов | Словарь веб-разработки - RC-WEB.KZ',
    description: 'Глоссарий терминов веб-разработки: Landing Page, SEO, адаптивная верстка, CMS, хостинг и другие термины. Полезный словарь для понимания создания сайтов.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/glossary`,
  },
}

const terms = [
  {
    term: 'Landing Page',
    definition: 'Одностраничный сайт, созданный специально для достижения одной цели — конверсии посетителя в клиента. Идеально подходит для рекламных кампаний.',
  },
  {
    term: 'SEO (Search Engine Optimization)',
    definition: 'Оптимизация сайта для поисковых систем (Google, Яндекс) с целью повышения позиций в поисковой выдаче и увеличения органического трафика.',
  },
  {
    term: 'Адаптивная верстка',
    definition: 'Техника создания сайта, который корректно отображается на всех устройствах: компьютерах, планшетах и мобильных телефонах.',
  },
  {
    term: 'CMS (Content Management System)',
    definition: 'Система управления контентом — программное обеспечение для управления содержимым сайта без знания программирования.',
  },
  {
    term: 'Хостинг',
    definition: 'Услуга по размещению сайта на сервере, который обеспечивает доступность сайта в интернете 24/7.',
  },
  {
    term: 'Домен',
    definition: 'Уникальное имя сайта в интернете (например, rc-web.kz). Домен нужно регистрировать и продлевать ежегодно.',
  },
  {
    term: 'SSL-сертификат',
    definition: 'Сертификат безопасности, который обеспечивает шифрование данных между сайтом и пользователем. Необходим для безопасности и SEO.',
  },
  {
    term: 'API (Application Programming Interface)',
    definition: 'Интерфейс программирования приложений — набор правил для взаимодействия между программами. Позволяет интегрировать сторонние сервисы (оплата, доставка, CRM).',
  },
  {
    term: 'DNS (Domain Name System)',
    definition: 'Система доменных имён — служба, которая переводит понятные имена сайтов (rc-web.kz) в IP-адреса серверов.',
  },
  {
    term: 'UX/UI дизайн',
    definition: 'UX — пользовательский опыт (удобство), UI — пользовательский интерфейс (внешний вид). Вместе определяют, как выглядит и работает сайт.',
  },
  {
    term: 'Responsive Design',
    definition: 'Подход к веб-дизайну, при котором сайт автоматически подстраивается под размер экрана — от смартфона до широкоформатного монитора.',
  },
  {
    term: 'CRM (Customer Relationship Management)',
    definition: 'Система управления взаимоотношениями с клиентами. Помогает вести базу клиентов, отслеживать продажи и автоматизировать процессы.',
  },
  {
    term: 'Конверсия',
    definition: 'Процент посетителей сайта, совершивших целевое действие (покупка, заявка, звонок). Ключевой показатель эффективности сайта.',
  },
  {
    term: 'Контекстная реклама',
    definition: 'Реклама в поисковых системах (Google Ads, Яндекс Директ), которая показывается пользователям по их поисковым запросам.',
  },
  {
    term: 'Framework (Фреймворк)',
    definition: 'Программная платформа для ускорения разработки. Примеры: React, Next.js, Angular. Предоставляет готовые инструменты и архитектуру.',
  },
  {
    term: 'Git',
    definition: 'Система контроля версий для отслеживания изменений в коде. Позволяет работать в команде и откатывать изменения при необходимости.',
  },
  {
    term: 'CDN (Content Delivery Network)',
    definition: 'Сеть доставки контента — распределённая сеть серверов по миру, которая ускоряет загрузку сайта для пользователей из разных регионов.',
  },
  {
    term: 'Backend / Frontend',
    definition: 'Frontend — видимая часть сайта (дизайн, кнопки, анимации). Backend — серверная часть (базы данных, логика, обработка заказов).',
  },
  {
    term: 'TypeScript',
    definition: 'Надстройка над JavaScript с поддержкой типов. Помогает находить ошибки на этапе написания кода и делает проекты надёжнее.',
  },
  {
    term: 'Figma',
    definition: 'Онлайн-инструмент для дизайна интерфейсов. Позволяет создавать макеты сайтов, прототипы и дизайн-системы совместно с командой.',
  },
]

export default function GlossaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Глоссарий', href: '/glossary' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-4 text-left md:text-center">Глоссарий терминов</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-left md:text-center mb-12">
            Полезный словарь терминов веб-разработки для понимания процесса создания сайтов
          </p>

          <div className="space-y-6">
            {terms.map((item, index) => (
              <div key={item.term} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">{item.term}</h2>
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
