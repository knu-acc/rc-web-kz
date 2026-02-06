import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение | RC-WEB.KZ',
  description: 'Пользовательское соглашение RC-WEB.KZ. Условия использования сайта, авторские права, ответственность сторон.',
  keywords: ['условия использования', 'пользовательское соглашение', 'RC-WEB.KZ'],
  openGraph: {
    title: 'Пользовательское соглашение | RC-WEB.KZ',
    description: 'Пользовательское соглашение RC-WEB.KZ. Условия использования сайта, авторские права, ответственность сторон.',
    url: `${SITE_CONFIG.url}/terms`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Пользовательское соглашение | RC-WEB.KZ',
    description: 'Пользовательское соглашение RC-WEB.KZ. Условия использования сайта, авторские права, ответственность сторон.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Пользовательское соглашение', href: '/terms' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-8">Пользовательское соглашение</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700 dark:text-secondary-300">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
              <p>
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между 
                {SITE_CONFIG.name} (далее — Компания) и пользователями сайта {SITE_CONFIG.url} (далее — Сайт).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Использование сайта</h2>
              <p>
                Используя Сайт, вы соглашаетесь с условиями настоящего Соглашения. Если вы не согласны 
                с условиями, пожалуйста, не используйте Сайт.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Авторские права</h2>
              <p>
                Все материалы Сайта, включая тексты, изображения, логотипы, являются собственностью 
                Компании и защищены авторским правом. Использование материалов без разрешения запрещено.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Ответственность</h2>
              <p>
                Компания не несёт ответственности за точность, полноту или актуальность информации, 
                размещённой на Сайте. Компания не гарантирует бесперебойную работу Сайта.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Изменения в соглашении</h2>
              <p>
                Компания оставляет за собой право изменять условия настоящего Соглашения в любое время. 
                Изменения вступают в силу с момента публикации на Сайте.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Контакты</h2>
              <p>
                По вопросам, связанным с использованием Сайта, обращайтесь:
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
