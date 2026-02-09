import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'О нас | RC-WEB.KZ - Веб-студия в Алматы',
  description: 'RC-WEB.KZ — веб-студия по созданию сайтов в Алматы с 2020 года. 120+ выполненных проектов, профессиональная команда, современные технологии.',
  keywords: ['о нас rc-web', 'веб-студия алматы', 'история компании'],
  openGraph: {
    title: 'О нас | RC-WEB.KZ',
    description: 'Веб-студия по созданию сайтов в Алматы с 2020 года',
    url: `${SITE_CONFIG.url}/about`,
    images: [{ url: '/img/slider4.png', width: 1200, height: 630, alt: 'О нас | RC-WEB.KZ' }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'О нас', href: '/about' },
        ]}
      />

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-lg mb-8 text-center">О нас</h1>

          {/* История компании */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">История компании</h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed">
              RC-WEB.KZ — веб-студия по созданию сайтов в Алматы, работающая с 2020 года. 
              За это время мы создали более {SITE_CONFIG.projectsCount} проектов для клиентов 
              по всему Казахстану.
            </p>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed">
              Мы специализируемся на разработке современных веб-сайтов с использованием 
              передовых технологий: Next.js, React, Tailwind CSS. Наши сайты отличаются 
              быстрой загрузкой, SEO-оптимизацией и адаптивным дизайном.
            </p>
          </div>

          {/* Ценности и миссия */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Наши ценности</h2>
            <ul className="space-y-3 text-lg text-secondary-700 dark:text-secondary-300">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">✓</span>
                <span><strong>Качество</strong> — создаём сайты, которые работают и приносят результат</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">✓</span>
                <span><strong>Прозрачность</strong> — честное ценообразование без скрытых платежей</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">✓</span>
                <span><strong>Поддержка</strong> — бесплатная техподдержка после запуска</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">✓</span>
                <span><strong>Скорость</strong> — быстрая разработка без потери качества</span>
              </li>
            </ul>
          </div>

          {/* Достижения */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Достижения</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {SITE_CONFIG.projectsCount}
                </div>
                <p className="text-secondary-700 dark:text-secondary-300">Выполненных проектов</p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)} лет
                </div>
                <p className="text-secondary-700 dark:text-secondary-300">На рынке</p>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {SITE_CONFIG.aggregateRating.ratingValue}/5
                </div>
                <p className="text-secondary-700 dark:text-secondary-300">Средняя оценка</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center border border-primary-100 dark:border-primary-800/50">
            <h2 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">Готовы создать сайт вместе с нами?</h2>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-6">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <Link href="/contact" className="btn-primary">
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
