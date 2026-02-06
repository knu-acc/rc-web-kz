import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Процесс работы | Как мы создаём сайты - RC-WEB.KZ',
  description: 'Процесс создания сайта в RC-WEB.KZ: от брифа до запуска. Этапы работы, сроки, что входит в каждый этап. Прозрачный процесс разработки.',
  keywords: ['процесс создания сайта', 'этапы разработки сайта', 'как создают сайты'],
  openGraph: {
    title: 'Процесс работы | RC-WEB.KZ',
    description: 'Как мы создаём сайты: от брифа до запуска',
    url: `${SITE_CONFIG.url}/process`,
    images: [{ url: '/img/slider4.png', width: 1200, height: 630, alt: 'Процесс работы | RC-WEB.KZ' }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/process`,
  },
}

const steps = [
  {
    number: 1,
    title: 'Бриф и анализ',
    description: 'Обсуждаем цели проекта, целевую аудиторию, функционал и требования. Анализируем конкурентов и формируем техническое задание.',
    duration: '1-2 дня',
  },
  {
    number: 2,
    title: 'Прототип и дизайн',
    description: 'Создаём прототип структуры сайта, затем разрабатываем уникальный дизайн, который отражает ваш бренд и ведёт пользователя к цели.',
    duration: '2-3 дня',
  },
  {
    number: 3,
    title: 'Разработка',
    description: 'Верстаем и программируем сайт на современных технологиях (Next.js, React). Обеспечиваем адаптивность, быструю загрузку и SEO-оптимизацию.',
    duration: '3-5 дней',
  },
  {
    number: 4,
    title: 'Тестирование',
    description: 'Проверяем работу на всех устройствах и браузерах, тестируем формы, скорость загрузки, корректность отображения. Исправляем найденные ошибки.',
    duration: '1-2 дня',
  },
  {
    number: 5,
    title: 'Запуск и обучение',
    description: 'Публикуем сайт на хостинге, настраиваем домен и SSL-сертификат. Проводим обучение по управлению сайтом и передаём доступы.',
    duration: '1 день',
  },
  {
    number: 6,
    title: 'Поддержка и развитие',
    description: 'Предоставляем бесплатную техподдержку после запуска. Помогаем с обновлениями, добавлением контента и дальнейшим развитием сайта.',
    duration: 'Постоянно',
  },
]

export default function ProcessPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Процесс работы', url: `${SITE_CONFIG.url}/process` },
  ])

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Как мы создаём сайты',
    description: 'Процесс создания сайта в RC-WEB.KZ: от брифа до запуска.',
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
      position: step.number,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs
        items={[
          { name: 'Главная', url: SITE_CONFIG.url },
          { name: 'Процесс работы', url: `${SITE_CONFIG.url}/process` },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-4 text-center">Процесс работы</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-center mb-12 max-w-2xl mx-auto">
            Прозрачный процесс создания сайта от первого контакта до запуска и поддержки
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-secondary-200 ml-8 -mt-2" style={{ height: 'calc(100% + 2rem)' }} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                  <p className="text-secondary-700 dark:text-secondary-300 mb-2 leading-relaxed">{step.description}</p>
                  <span className="text-sm text-primary-600 font-medium">Срок: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Итоговая информация */}
          <div className="mt-12 bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Итого</h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-4">
              Средний срок разработки сайта составляет <strong>5-10 рабочих дней</strong> от начала работы до публикации.
            </p>
            <p className="text-lg text-secondary-700 dark:text-secondary-300">
              Для более сложных проектов (интернет-магазины, крупные корпоративные сайты) срок может быть увеличен до 2-3 недель.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
