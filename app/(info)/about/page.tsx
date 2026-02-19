import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'О компании RC-WEB.KZ  веб-студия в Алматы с 2020 года',
  description:
    'RC-WEB.KZ  веб-студия по созданию сайтов в Алматы. 120+ проектов, 5 лет опыта. Наша история, ценности, подход к работе и команда.',
  keywords: ['о нас rc-web', 'веб-студия алматы', 'создание сайтов алматы', 'rc-web.kz'],
  openGraph: {
    title: 'О компании RC-WEB.KZ',
    description: 'Веб-студия в Алматы с 2020 года. 120+ проектов, современные технологии.',
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: `${SITE_CONFIG.url}/img/slider4.png`, width: 1200, height: 630, alt: 'RC-WEB.KZ' }],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
}

const timeline = [
  { year: '2020', title: 'Основание', description: 'Начали с создания сайтов для малого бизнеса в Алматы. Первые 20 проектов  лендинги и визитки.' },
  { year: '2021', title: 'Рост и технологии', description: 'Перешли на React и Next.js. Запустили первые корпоративные сайты и начали работать с SEO.' },
  { year: '2022', title: 'Расширение услуг', description: 'Добавили интернет-магазины, SEO-оптимизацию и веб-дизайн. Вышли за пределы Алматы  работа по всему Казахстану.' },
  { year: '2023', title: '100 проектов', description: 'Преодолели отметку в 100 проектов. Начали обучение  индивидуальные курсы по веб-разработке.' },
  { year: '2024-2026', title: 'Сегодня', description: '120+ проектов, постоянные клиенты, сложные бизнес-решения. Фокус на производительность и SEO.' },
]

const values = [
  {
    title: 'Качество важнее количества',
    description: 'Мы не берем 10 проектов одновременно. Максимум 2-3  чтобы каждый сайт получил полное внимание.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Прозрачность',
    description: 'Четкое ТЗ, фиксированная цена, никаких скрытых доплат. Вы видите прогресс на каждом этапе.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    title: 'Техподдержка после запуска',
    description: '30 дней техобслуживания после запуска. Мелкие правки бесплатно. Всегда на связи.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    title: 'Современные технологии',
    description: 'Next.js, React, TypeScript, Tailwind CSS  используем инструменты, которые обеспечивают скорость и SEO.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
]

const gradients = ['from-emerald-500 to-teal-600', 'from-blue-500 to-cyan-600', 'from-violet-500 to-purple-600', 'from-amber-500 to-orange-600']

export default function AboutPage() {
  const yearsOnMarket = new Date().getFullYear() - parseInt(SITE_CONFIG.foundingDate)

  return (
    <>
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-left md:text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">О компании</span>
          <h1 className="heading-xl text-white mb-6">RC-WEB<span className="gradient-text">.KZ</span></h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Веб-студия в Алматы. Создаём сайты для бизнеса с 2020 года. {SITE_CONFIG.projectsCount} проектов, современные технологии, индивидуальный подход к каждому клиенту.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { v: SITE_CONFIG.projectsCount, l: 'Проектов' },
              { v: `${yearsOnMarket} лет`, l: 'На рынке' },
              { v: `${SITE_CONFIG.aggregateRating.ratingValue}/5`, l: 'Оценка' },
              { v: '100%', l: 'Довольных' },
            ].map(s => (
              <div key={s.l} className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <div className="text-xl font-bold text-white">{s.v}</div>
                <p className="text-xs text-white/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-3xl">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Наша <span className="gradient-text">история</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">От первого лендинга до {SITE_CONFIG.projectsCount} проектов</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-4 md:gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700 dark:text-primary-300">{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Наши <span className="gradient-text">принципы</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Чем мы руководствуемся в работе</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, idx) => (
              <div key={value.title} className="bg-white dark:bg-secondary-950 rounded-2xl p-6 border border-secondary-100 dark:border-secondary-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[idx]} text-white flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Что мы <span className="gradient-text">делаем</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Создание сайтов', desc: 'Лендинги, корпоративные сайты, интернет-магазины, сайты на Tilda', link: '/services' },
              { title: 'SEO и продвижение', desc: 'Оптимизация для Google и Яндекса, настройка аналитики, аудит', link: '/seo-optimization' },
              { title: 'Обучение', desc: 'Индивидуальные курсы по HTML, CSS, JavaScript, React, Next.js', link: '/programming-courses' },
            ].map(item => (
              <Link key={item.title} href={item.link} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <h3 className="font-bold mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-left md:text-center">
          <h2 className="heading-lg mb-4 text-white">Давайте работать вместе</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Расскажите о вашем проекте  мы предложим лучшее решение.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <Link href="/contact" className="btn-secondary">Контакты</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Узнайте больше</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/process', title: 'Процесс работы', desc: 'Как мы создаем сайты' },
              { href: '/technologies', title: 'Технологии', desc: 'Стек разработки' },
              { href: '/portfolio', title: 'Портфолио', desc: 'Примеры наших работ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="card p-6 hover:shadow-lg transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{link.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}