import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | RC-WEB.KZ',
  description: 'Политика конфиденциальности RC-WEB.KZ. Как мы собираем, храним и используем персональные данные пользователей сайта.',
  keywords: ['политика конфиденциальности', 'защита данных', 'RC-WEB.KZ'],
  openGraph: {
    title: 'Политика конфиденциальности | RC-WEB.KZ',
    description: 'Политика конфиденциальности RC-WEB.KZ. Как мы собираем, храним и используем персональные данные пользователей сайта.',
    url: `${SITE_CONFIG.url}/privacy`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Политика конфиденциальности | RC-WEB.KZ',
    description: 'Политика конфиденциальности RC-WEB.KZ. Как мы собираем, храним и используем персональные данные пользователей сайта.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
}

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Политика конфиденциальности', url: `${SITE_CONFIG.url}/privacy` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { name: 'Главная', url: SITE_CONFIG.url },
          { name: 'Политика конфиденциальности', url: `${SITE_CONFIG.url}/privacy` },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-8">Политика конфиденциальности</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700 dark:text-secondary-300">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                пользователей сайта {SITE_CONFIG.url} (далее — Сайт), принадлежащего {SITE_CONFIG.name} (далее — Компания).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Сбор персональных данных</h2>
              <p>
                Мы собираем следующие персональные данные:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя и контактная информация (телефон, email) при заполнении форм обратной связи</li>
                <li>Данные о посещении сайта через системы аналитики (Google Analytics, Yandex Metrica)</li>
                <li>IP-адрес и данные браузера для обеспечения безопасности</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Использование данных</h2>
              <p>
                Персональные данные используются для:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связи с клиентами и обработки заявок</li>
                <li>Улучшения работы сайта и пользовательского опыта</li>
                <li>Анализа посещаемости и эффективности рекламных кампаний</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
              <p>
                Мы принимаем необходимые меры для защиты персональных данных от несанкционированного доступа, 
                изменения, раскрытия или уничтожения.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Контакты</h2>
              <p>
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <p>
                Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-600 hover:underline">{SITE_CONFIG.email}</a><br />
                Телефон: <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary-600 hover:underline">{SITE_CONFIG.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
