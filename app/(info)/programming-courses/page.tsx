import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Курсы программирования и веб-разработки в Алматы | RC-WEB.KZ',
  description:
    'Индивидуальные курсы веб-разработки в Алматы: HTML, CSS, JavaScript, React, Next.js. Практика на реальных проектах. Для начинающих и продвинутых.',
  keywords: [
    'курсы программирования алматы',
    'курсы веб-разработки',
    'обучение html css',
    'курсы javascript алматы',
    'курсы react',
  ],
  openGraph: {
    title: 'Курсы веб-разработки в Алматы  RC-WEB.KZ',
    description: 'Индивидуальное обучение: HTML, CSS, JavaScript, React, Next.js. Практика на реальных проектах.',
    url: `${SITE_CONFIG.url}/programming-courses`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: `${SITE_CONFIG.url}/img/slider4.png`, width: 1200, height: 630, alt: 'Курсы программирования' }],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/programming-courses` },
}

const courses = [
  {
    title: 'Основы веб-разработки',
    subtitle: 'HTML + CSS + JavaScript',
    duration: '2-3 месяца',
    level: 'С нуля',
    price: 'от 40 000 тг/мес',
    gradient: 'from-blue-500 to-cyan-600',
    modules: [
      { name: 'HTML  структура сайта', topics: ['Теги и атрибуты', 'Формы и таблицы', 'Семантическая разметка', 'Доступность (accessibility)'] },
      { name: 'CSS  стили и дизайн', topics: ['Селекторы и каскад', 'Flexbox и Grid', 'Адаптивная верстка (media queries)', 'Анимации и переходы'] },
      { name: 'JavaScript  интерактивность', topics: ['Переменные, функции, циклы', 'Работа с DOM', 'Обработка событий', 'Fetch API и работа с сервером'] },
      { name: 'Практика', topics: ['Верстка 3 реальных страниц', 'Адаптив для мобильных', 'Публикация на GitHub Pages', 'Код-ревью от наставника'] },
    ],
    result: 'Создадите 3 полноценные страницы и сможете верстать сайты на заказ',
  },
  {
    title: 'Продвинутая разработка',
    subtitle: 'React + Next.js + TypeScript',
    duration: '3-4 месяца',
    level: 'Нужны основы JS',
    price: 'от 50 000 тг/мес',
    gradient: 'from-violet-500 to-purple-600',
    modules: [
      { name: 'React  современный фронтенд', topics: ['Компоненты и JSX', 'State и Props', 'Хуки (useState, useEffect, useRef)', 'React Router'] },
      { name: 'TypeScript  типизация', topics: ['Типы и интерфейсы', 'Generic типы', 'Типизация React-компонентов', 'Строгая проверка типов'] },
      { name: 'Next.js  фуллстек фреймворк', topics: ['Серверный рендеринг (SSR, SSG)', 'App Router и маршрутизация', 'API Routes', 'Оптимизация и SEO'] },
      { name: 'Практика', topics: ['Создание SPA-приложения', 'Деплой на Vercel/Netlify', 'Работа с базой данных (Supabase)', 'Создание полноценного проекта для портфолио'] },
    ],
    result: 'Создадите полноценное веб-приложение и сможете работать как React-разработчик',
  },
]

const advantages = [
  {
    title: 'Индивидуальный формат',
    description: 'Занятия один на один  программа адаптируется под ваш темп и уровень. Никаких групп и подождите других.',
    icon: 'user',
  },
  {
    title: 'Практика с первого дня',
    description: 'Теория занимает 30% времени, остальное  написание кода. Каждый урок заканчивается работающим результатом.',
    icon: 'code',
  },
  {
    title: 'Реальные проекты',
    description: 'Вы работаете не с учебными примерами, а создаете реальные сайты, которые можно показать в портфолио или заказчикам.',
    icon: 'briefcase',
  },
  {
    title: 'Поддержка между занятиями',
    description: 'Вопросы по домашним заданиям можно задать в WhatsApp в любое время. Ответим в течение нескольких часов.',
    icon: 'message',
  },
  {
    title: 'Гибкий график',
    description: 'Занятия онлайн (Google Meet) или очно в Алматы. Время подстраивается под вас: утро, день или вечер.',
    icon: 'calendar',
  },
  {
    title: 'Помощь с трудоустройством',
    description: 'Помогаем составить резюме, собрать портфолио из учебных проектов и подготовиться к собеседованиям.',
    icon: 'rocket',
  },
]

const iconSvgs: Record<string, string> = {
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  message: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
}

const gradients = ['from-blue-500 to-cyan-600', 'from-violet-500 to-purple-600', 'from-emerald-500 to-teal-600', 'from-amber-500 to-orange-600', 'from-rose-500 to-pink-600', 'from-indigo-500 to-blue-600']

export default function ProgrammingCoursesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Курсы программирования', href: '/programming-courses' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">Обучение</span>
          <h1 className="heading-xl text-white mb-6">Курсы <span className="gradient-text">веб-разработки</span></h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Индивидуальные занятия по программированию в Алматы и онлайн. От HTML до React и Next.js  практика на реальных проектах.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">Записаться</a>
            <a href="#courses" className="btn-secondary">Программы курсов</a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">Программы</span>
            <h2 className="heading-lg mb-4">Программы <span className="gradient-text">обучения</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Выберите курс в зависимости от вашего уровня</p>
          </div>
          <div className="space-y-12 max-w-5xl mx-auto">
            {courses.map(course => (
              <div key={course.title} className="bg-white dark:bg-secondary-900 rounded-2xl border-2 border-secondary-100 dark:border-secondary-800 overflow-hidden shadow-lg">
                <div className={`bg-gradient-to-r ${course.gradient} p-6 md:p-8 text-white`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{course.title}</h3>
                      <p className="text-white/80">{course.subtitle}</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="bg-white/20 rounded-lg px-3 py-2"><p className="text-white/70 text-xs">Длительность</p><p className="font-bold">{course.duration}</p></div>
                      <div className="bg-white/20 rounded-lg px-3 py-2"><p className="text-white/70 text-xs">Уровень</p><p className="font-bold">{course.level}</p></div>
                      <div className="bg-white/20 rounded-lg px-3 py-2"><p className="text-white/70 text-xs">Стоимость</p><p className="font-bold">{course.price}</p></div>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {course.modules.map(mod => (
                      <div key={mod.name} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-5">
                        <h4 className="font-bold text-secondary-900 dark:text-white mb-3">{mod.name}</h4>
                        <ul className="space-y-2">
                          {mod.topics.map(topic => (
                            <li key={topic} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                              <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 border border-primary-100 dark:border-primary-800/50">
                    <p className="text-primary-800 dark:text-primary-300 font-medium"><strong>Результат:</strong> {course.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Почему <span className="gradient-text">учиться у нас</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Чем наши курсы отличаются от онлайн-школ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, idx) => (
              <div key={adv.title} className="bg-white dark:bg-secondary-950 rounded-2xl p-6 border border-secondary-100 dark:border-secondary-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[idx]} text-white flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconSvgs[adv.icon]} /></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Как проходит <span className="gradient-text">обучение</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Консультация', desc: 'Определяем ваш уровень и цели. Подбираем программу.' },
              { step: 2, title: 'Занятия', desc: '2-3 раза в неделю по 1.5-2 часа. Онлайн или очно.' },
              { step: 3, title: 'Практика', desc: 'Домашние задания, код-ревью, реальные проекты.' },
              { step: 4, title: 'Результат', desc: 'Портфолио из 3-5 проектов, помощь с трудоустройством.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg shadow-primary-600/30">{item.step}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-center mb-12">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: 'Нужен ли опыт программирования?', a: 'Для курса Основы  нет. Начинаем с нуля: что такое HTML-тег, как работает браузер. Для Продвинутого Course нужны базовые знания JavaScript.' },
              { q: 'Сколько длится обучение?', a: 'Основы  2-3 месяца, продвинутый курс  3-4 месяца при 2-3 занятиях в неделю. Темп адаптируется под вас.' },
              { q: 'Какой формат занятий?', a: 'Индивидуальные: один на один с преподавателем. Онлайн через Google Meet или очно в Алматы. Каждое занятие 1.5-2 часа.' },
              { q: 'Можно ли после курса найти работу?', a: 'Да. После продвинутого курса у вас будет портфолио из 3-5 проектов и навыки Junior React-разработчика. Помогаем с резюме и подготовкой к собеседованиям.' },
              { q: 'Есть ли рассрочка?', a: 'Да, возможна помесячная оплата без переплаты. Первое пробное занятие  бесплатно.' },
            ].map(faq => (
              <div key={faq.q} className="bg-white dark:bg-secondary-950 rounded-xl p-6">
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Запишитесь на бесплатное пробное занятие</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Определим ваш уровень, покажем формат обучения и составим индивидуальный план.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Записаться в WhatsApp</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary">Позвонить</a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Читайте также</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/how-to-create-website', title: 'Как создать сайт', desc: 'Инструкция из 7 шагов' },
              { href: '/technologies', title: 'Наши технологии', desc: 'Стек разработки' },
              { href: '/glossary', title: 'Глоссарий', desc: 'Словарь терминов' },
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