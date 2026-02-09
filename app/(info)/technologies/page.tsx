import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Технологии | Стек технологий RC-WEB.KZ',
  description: 'Технологии, которые мы используем: Next.js, React, Tailwind CSS, Tilda. Современный стек для создания быстрых и SEO-оптимизированных сайтов.',
  keywords: ['технологии создания сайтов', 'next.js', 'react', 'веб-разработка'],
  openGraph: {
    title: 'Технологии | Стек технологий RC-WEB.KZ',
    description: 'Технологии, которые мы используем: Next.js, React, Tailwind CSS, Tilda. Современный стек для создания быстрых и SEO-оптимизированных сайтов.',
    url: `${SITE_CONFIG.url}/technologies`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Технологии | Стек технологий RC-WEB.KZ',
    description: 'Технологии, которые мы используем: Next.js, React, Tailwind CSS, Tilda. Современный стек для создания быстрых и SEO-оптимизированных сайтов.',
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/technologies`,
  },
}

const technologies = [
  {
    name: 'Next.js',
    description: 'Современный фреймворк для React с серверным рендерингом, автоматической оптимизацией и SEO-функциями.',
    why: 'Обеспечивает быструю загрузку, отличную SEO-оптимизацию и удобство разработки.',
  },
  {
    name: 'React',
    description: 'Библиотека для создания интерактивных пользовательских интерфейсов.',
    why: 'Позволяет создавать динамичные и отзывчивые интерфейсы с высокой производительностью.',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS фреймворк для быстрой разработки современного дизайна.',
    why: 'Ускоряет разработку, обеспечивает консистентный дизайн и лёгкую поддержку.',
  },
  {
    name: 'Tilda',
    description: 'Конструктор сайтов для быстрого создания без программирования.',
    why: 'Подходит для простых проектов и позволяет быстро запустить сайт.',
  },
]

export default function TechnologiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Технологии', href: '/technologies' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-4 text-center">Технологии</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-center mb-12">
            Современный стек технологий для создания быстрых и эффективных сайтов
          </p>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-3">{tech.name}</h2>
                <p className="text-secondary-700 dark:text-secondary-300 mb-3 leading-relaxed">{tech.description}</p>
                <p className="text-primary-700 font-medium">
                  <strong>Почему мы используем:</strong> {tech.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
