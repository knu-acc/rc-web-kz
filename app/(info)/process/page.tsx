import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Процесс работы | Как мы создаём сайты  RC-WEB.KZ',
  description: 'Как мы создаём сайты: 6 этапов от брифа до запуска. Подробный процесс разработки с таймлайном, чек-листами и советами. Прозрачная работа.',
  keywords: ['процесс создания сайта', 'этапы разработки сайта', 'как создают сайты', 'этапы веб-разработки', 'процесс разработки сайта Алматы'],
  openGraph: {
    title: 'Процесс работы  6 этапов создания сайта | RC-WEB.KZ',
    description: 'Прозрачный процесс: от брифа до запуска за 510 дней',
    url: `${SITE_CONFIG.url}/process`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/process` },
}

const steps = [
  {
    number: 1,
    title: 'Бриф и аналитика',
    duration: '12 дня',
    description: 'Собираем информацию о проекте: цели, целевую аудиторию, конкурентов, функциональные требования.',
    details: [
      'Заполняем бриф: 20+ вопросов о вашем бизнесе и ожиданиях',
      'Анализируем 3-5 сайтов конкурентов в вашей нише',
      'Определяем целевую аудиторию и её потребности',
      'Формируем техническое задание с описанием каждой страницы',
    ],
    result: 'Готовое ТЗ с описанием структуры, функций и дизайн-референсов',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    tip: 'Чем подробнее вы опишете свои пожелания на этом этапе, тем точнее будет результат.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    number: 2,
    title: 'Прототип и структура',
    duration: '12 дня',
    description: 'Создаём wireframe — схематичную структуру страниц без дизайна, с логикой расположения блоков.',
    details: [
      'Рисуем wireframe для каждой страницы в Figma',
      'Определяем расположение блоков: шапка, формы, CTA, услуги',
      'Продумываем пользовательский путь (UX) и воронку',
      'Согласовываем прототип с клиентом, вносим правки',
    ],
    result: 'Согласованный прототип всех страниц в Figma',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    tip: 'На этом этапе легко перемещать блоки  потом будет сложнее и дороже.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    number: 3,
    title: 'UI/UX-дизайн',
    duration: '23 дня',
    description: 'Создаём визуальный дизайн: цвета, шрифты, иконки, анимации. Каждый элемент продуман для конверсии.',
    details: [
      'Подбираем цветовую палитру на основе вашего бренда',
      'Разрабатываем UI-kit: кнопки, формы, карточки, типографика',
      'Проектируем адаптивный дизайн (desktop, tablet, mobile)',
      'Готовим макеты всех экранов, до 3 раундов правок',
    ],
    result: 'Финальные макеты всех страниц, адаптированные под 3 разрешения',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    tip: 'До 3 раундов правок. Обычно дизайн согласовывается за 1-2 итерации.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    number: 4,
    title: 'Вёрстка и разработка',
    duration: '35 дней',
    description: 'Превращаем дизайн в рабочий сайт. Используем Next.js, React и Tailwind CSS для максимальной скорости.',
    details: [
      'Верстаем по pixel-perfect макету (адаптив: desktop, tablet, mobile)',
      'Программируем формы обратной связи, анимации, слайдеры',
      'Настраиваем SEO: мета-теги, Schema.org, sitemap, robots.txt',
      'Оптимизируем производительность: lazy-loading, сжатие, кеш',
    ],
    result: 'Готовый сайт на тестовом домене для проверки',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tip: 'Сайт на тестовом домене — можете проверить на любом устройстве.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    number: 5,
    title: 'Тестирование и правки',
    duration: '12 дня',
    description: 'Тщательно проверяем сайт: скорость, кроссбраузерность, адаптивность, работу форм и SEO.',
    details: [
      'Тестируем на 5+ устройствах: iPhone, Android, планшет, ПК',
      'Проверяем в Chrome, Firefox, Safari, Edge',
      'Тест скорости: Google PageSpeed Insights  целевой показатель 90+',
      'Проверяем формы, отправку заявок, корректность ссылок',
    ],
    result: 'Финальная версия сайта, готовая к публикации',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tip: 'Вы тестируете сайт и присылаете список замечаний — мы всё исправляем.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    number: 6,
    title: 'Запуск и поддержка',
    duration: '1 день + постоянно',
    description: 'Публикуем сайт на хостинге, подключаем домен, SSL, аналитику. Обучаем вас управлению.',
    details: [
      'Настраиваем хостинг (Netlify / Vercel) и подключаем домен',
      'Устанавливаем SSL-сертификат (https://) — бесплатно',
      'Подключаем Google Analytics и Яндекс.Метрику',
      'Проводим обучение по редактированию контента (30-60 минут)',
    ],
    result: 'Опубликованный сайт с аналитикой и передача доступов клиенту',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    tip: 'После запуска 30 дней бесплатно вносим правки и помогаем с контентом.',
    gradient: 'from-red-500 to-pink-600',
  },
]

const whatWeProvide = [
  { label: 'Все исходники', desc: 'Полный доступ к коду проекта на GitHub' },
  { label: 'Документация', desc: 'Инструкция по редактированию контента' },
  { label: 'Доступы', desc: 'К хостингу, домену, аналитике, почте' },
  { label: '30 дней поддержки', desc: 'Бесплатные правки после запуска' },
  { label: 'SEO-база', desc: 'Мета-теги, Schema.org, sitemap, robots.txt' },
  { label: 'Аналитика', desc: 'Google Analytics + Яндекс.Метрика' },
]

const faq = [
  {
    q: 'Сколько времени занимает создание сайта?',
    a: 'Landing Page — 3-5 дней, корпоративный сайт — 7-10 дней, интернет-магазин — 10-15 дней. Срок зависит от сложности проекта и скорости согласования.',
  },
  {
    q: 'Можно ли вносить правки в процессе?',
    a: 'Да. На каждом этапе показываем результат и согласовываем. Правки в рамках ТЗ — бесплатно. Дополнительные пожелания обсуждаем отдельно.',
  },
  {
    q: 'Нужно ли мне предоставлять тексты и фото?',
    a: 'Желательно. Если контента нет, поможем подготовить тексты и подобрать стоковые изображения за дополнительную плату.',
  },
  {
    q: 'Что если мне не понравится дизайн?',
    a: 'До 3 раундов правок на этапе дизайна. Перед разработкой макет обязательно согласовывается. Верстку начинаем только после вашего одобрения.',
  },
  {
    q: 'Какой аванс вы берёте?',
    a: '50% аванс перед началом работы, 50% после запуска. Для крупных проектов возможна оплата в 3 этапа.',
  },
]

export default function ProcessPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Как мы создаём сайты  процесс разработки RC-WEB.KZ',
    description: 'Процесс создания сайта: 6 этапов от брифа и аналитики до запуска и поддержки.',
    totalTime: 'P10D',
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.description,
      position: s.number,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Процесс работы', href: '/process' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom text-left md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            6 этапов разработки
          </div>

          <h1 className="heading-xl mb-6">
            <span className="block">Как мы</span>
            <span className="gradient-text">создаём сайты</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
            Прозрачный процесс от первого контакта до запуска.
            Средний срок  <strong>510 рабочих дней</strong>. На каждом этапе вы видите результат и можете вносить правки.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[
              { num: '6', label: 'этапов' },
              { num: '510', label: 'дней' },
              { num: '3', label: 'раунда правок' },
            ].map((s) => (
              <div key={s.label} className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                <div className="text-2xl font-bold text-primary-600">{s.num}</div>
                <div className="text-xs text-secondary-500 dark:text-secondary-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pl-16 pb-12 last:pb-0">
                {/* vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700" />
                )}
                {/* circle */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>

                <div className="bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6 sm:p-8 border border-secondary-100 dark:border-secondary-800">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                      Этап {step.number}
                    </span>
                    <span className="text-xs font-medium text-secondary-500 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-800 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                  <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">{step.description}</p>

                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 dark:text-secondary-400 mb-3">Что делаем:</h3>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-secondary-700 dark:text-secondary-300">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 bg-white dark:bg-secondary-800 rounded-xl p-4 border border-secondary-100 dark:border-secondary-700">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Результат:</div>
                      <p className="text-sm text-secondary-700 dark:text-secondary-300">{step.result}</p>
                    </div>
                    <div className="flex-1 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-100 dark:border-amber-800/30">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Совет:</div>
                      <p className="text-sm text-secondary-700 dark:text-secondary-300">{step.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-left md:text-center mb-4">Что вы получаете</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 text-left md:text-center mb-10">
            После завершения проекта мы передаём вам всё необходимое
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whatWeProvide.map((item) => (
              <div key={item.label} className="bg-white dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-bold text-secondary-900 dark:text-white">{item.label}</h3>
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 ml-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom max-w-4xl text-left md:text-center">
          <h2 className="heading-lg text-white mb-6">
            Итого: от идеи до <span className="gradient-text">работающего сайта</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
              <div className="text-3xl font-bold text-white mb-2">510 дней</div>
              <p className="text-white/70">Средний срок разработки</p>
            </div>
            <div className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
              <div className="text-3xl font-bold text-white mb-2">от 85 тыс </div>
              <p className="text-white/70">Стоимость сайта</p>
            </div>
            <div className="bg-secondary-800/50 rounded-xl p-6 border border-secondary-700">
              <div className="text-3xl font-bold text-white mb-2">30 дней</div>
              <p className="text-white/70">Бесплатная поддержка</p>
            </div>
          </div>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Для крупных проектов (интернет-магазины, порталы) срок может быть увеличен до 23 недель.
            Точные сроки и стоимость рассчитываем после заполнения брифа.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-left md:text-center mb-10">Частые вопросы</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-secondary-50 dark:bg-secondary-900 rounded-xl border border-secondary-100 dark:border-secondary-800">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-secondary-900 dark:text-white hover:text-primary-600 transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 text-secondary-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-secondary-700 dark:text-secondary-300 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-left md:text-center max-w-2xl mx-auto">
          <h2 className="heading-lg text-white mb-4">Готовы начать?</h2>
          <p className="text-lg text-white/90 mb-8">
            Свяжитесь — обсудить проект, рассчитать сроки и стоимость. Консультация бесплатна.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <Link href="/website-price" className="btn-secondary">Узнать цены</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Полезные страницы</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/guarantees', title: 'Гарантии', desc: 'Качество и надёжность' },
              { href: '/website-price', title: 'Цены', desc: 'Стоимость услуг' },
              { href: '/technologies', title: 'Технологии', desc: 'Наш стек' },
              { href: '/portfolio', title: 'Портфолио', desc: 'Наши работы' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <h3 className="font-bold group-hover:text-primary-600 transition-colors">{l.title}</h3>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}