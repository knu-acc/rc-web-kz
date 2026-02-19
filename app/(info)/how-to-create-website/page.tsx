import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Как создать сайт в 2026  пошаговая инструкция для начинающих',
  description:
    'Подробная инструкция из 7 шагов: от идеи до запуска сайта. Сравнение конструкторов, кода и заказа у специалиста. Чеклист, ошибки и советы.',
  keywords: [
    'как создать сайт',
    'как сделать сайт',
    'создание сайта пошагово',
    'создать сайт самому',
    'инструкция создание сайта',
  ],
  openGraph: {
    title: 'Как создать сайт  пошаговая инструкция 2026',
    description:
      'Подробная инструкция из 7 шагов: конструкторы, код, заказ у специалиста. Чеклист, ошибки и советы.',
    url: `${SITE_CONFIG.url}/how-to-create-website`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'article',
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Как создать сайт  пошаговая инструкция',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/how-to-create-website` },
}

const steps = [
  {
    number: 1,
    title: 'Определите цель сайта',
    description:
      'Ответьте на вопросы: зачем вам сайт, кто ваша аудитория и какое действие должен совершить посетитель (позвонить, оставить заявку, купить). Это определит тип сайта, структуру и бюджет.',
    tips: [
      'Запишите 3-5 главных задач, которые должен решать сайт',
      'Изучите сайты конкурентов — что нравится и что раздражает',
      'Определите, нужен ли интернет-магазин или достаточно лендинга',
    ],
    duration: '1 день',
  },
  {
    number: 2,
    title: 'Выберите способ создания',
    description:
      'Три пути: конструктор (Tilda, Wix), чистый код (HTML/CSS/JS, React, Next.js) или заказ у специалиста. Выбор зависит от бюджета, сроков и требований к функционалу.',
    tips: [
      'Конструктор — быстро и дёшево, но ограничения в SEO и дизайне',
      'Код — полная свобода, но нужны навыки программирования',
      'Заказ — профессиональный результат, экономия вашего времени',
    ],
    duration: '1 день',
  },
  {
    number: 3,
    title: 'Зарегистрируйте домен',
    description:
      'Домен — это адрес вашего сайта в интернете (например, вашсайт.kz). Выбирайте короткое, запоминающееся имя, связанное с вашим бизнесом. В Казахстане популярны зоны .kz и .com.',
    tips: [
      'Проверьте доступность на ps.kz или nic.kz',
      'Избегайте дефисов и цифр  ухудшают запоминаемость',
      'Зона .kz стоит около 2 500₸/год, .com — около 5 000₸/год',
      'Регистрируйте домен на себя, а не на разработчика',
    ],
    duration: '30 минут',
  },
  {
    number: 4,
    title: 'Подготовьте контент',
    description:
      'Тексты, фотографии, логотип, контакты — всё это нужно подготовить до начала разработки. Хороший контент — это 50% успеха сайта. Без контента разработчик не сможет создать качественный сайт.',
    tips: [
      'Напишите текст "О компании" — кратко и по делу',
      'Подготовьте список всех услуг с описаниями и ценами',
      'Сделайте качественные фото (не из стоков)  они вызывают больше доверия',
      'Соберите отзывы клиентов (скриншоты из WhatsApp, 2GIS)',
    ],
    duration: '2-3 дня',
  },
  {
    number: 5,
    title: 'Создайте дизайн и структуру',
    description:
      'Продумайте, какие страницы будут на сайте и как пользователь будет переходить между ними. Дизайн должен быть чистым, современным и удобным на мобильных устройствах — более 70% трафика идёт с телефонов.',
    tips: [
      'Обязательные страницы: Главная, Услуги, О нас, Контакты',
      'Дополнительные: Портфолио, Отзывы, Блог, FAQ',
      'Используйте не более 2-3 цветов и 1-2 шрифтов',
      'Каждая страница должна иметь четкий призыв к действию (CTA)',
    ],
    duration: '2-5 дней',
  },
  {
    number: 6,
    title: 'Разработайте и протестируйте',
    description:
      'Соберите сайт в конструкторе или разработайте на коде. После сборки обязательно протестируйте: проверьте все ссылки, формы, отображение на разных устройствах и скорость загрузки.',
    tips: [
      'Проверьте сайт на телефоне, планшете и компьютере',
      'Протестируйте формы  убедитесь, что заявки приходят',
      'Проверьте скорость через PageSpeed Insights (цель: 90+)',
      'Попросите 2-3 человек потестить сайт и дать обратную связь',
    ],
    duration: '3-7 дней',
  },
  {
    number: 7,
    title: 'Опубликуйте и продвигайте',
    description:
      'Залейте сайт на хостинг, подключите домен, установите SSL-сертификат. Затем добавьте сайт в Google Search Console и Яндекс.Вебмастер, настройте аналитику.',
    tips: [
      'Установите Google Analytics и Яндекс.Метрику с первого дня',
      'Отправьте sitemap.xml в поисковые системы',
      'Добавьте компанию в Google Maps и 2GIS',
      'Настройте рекламу после индексации (1-2 недели)',
    ],
    duration: '1-2 дня',
  },
]

const methods = [
  {
    title: 'Конструктор',
    subtitle: 'Tilda, Wix, WordPress.com',
    price: 'от 0₸ до 15 000₸/мес',
    time: '1-5 дней',
    difficulty: 'Легко',
    pros: ['Не нужно знать код', 'Быстрый запуск', 'Визуальный редактор', 'Готовые шаблоны'],
    cons: ['Ограниченная функциональность', 'Слабый SEO', 'Зависимость от платформы', 'Шаблонный дизайн'],
    best: 'Простые лендинги, визитки',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Чистый код',
    subtitle: 'HTML, CSS, JavaScript, React',
    price: 'от 0₸ (самому)',
    time: '2-6 недель',
    difficulty: 'Сложно',
    pros: ['Полная свобода дизайна', 'Максимальная производительность', 'Отличный SEO', 'Независимость'],
    cons: ['Нужно программирование', 'Долгая разработка', 'Сложность поддержки', 'Нужен хостинг'],
    best: 'Уникальные проекты, стартапы',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Заказать у специалиста',
    subtitle: 'Веб-студия или фрилансер',
    price: 'от 85 000₸',
    time: '5-15 дней',
    difficulty: 'Не требуется',
    pros: ['Профессиональный результат', 'Экономия времени', 'Уникальный дизайн', 'SEO включена', 'Техподдержка'],
    cons: ['Выше стоимость'],
    best: 'Бизнес, который хочет результат',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

const mistakes = [
  { title: 'Нет мобильной версии', description: '73% пользователей в Казахстане заходят в интернет с телефона. Если сайт неудобен на мобильном  вы теряете клиентов.' },
  { title: 'Нет призыва к действию (CTA)', description: 'Если на сайте нет кнопки Заказать, Позвонить или формы  посетитель уйдет, не совершив целевого действия.' },
  { title: 'Тяжелые изображения', description: 'Фотографии по 5-10 МБ замедляют загрузку. Сжимайте до 100-300 КБ без потери качества (TinyPNG, Squoosh).' },
  { title: 'Отсутствие аналитики', description: 'Без Google Analytics вы не знаете, сколько людей посещают сайт. Ставьте аналитику с первого дня.' },
  { title: 'Стены текста без структуры', description: 'Никто не читает длинный текст. Используйте заголовки, списки, иконки. Текст должен сканироваться за 5 секунд.' },
  { title: 'Домен на разработчике', description: 'Домен  ваша собственность. Регистрируйте на свои данные, иначе при смене разработчика можете потерять его.' },
]

const checklist = [
  'Цель сайта сформулирована',
  'Домен зарегистрирован на ваше имя',
  'Контент подготовлен (тексты, фото, логотип)',
  'Страницы спроектированы',
  'Мобильная версия работает корректно',
  'Формы отправляют заявки',
  'SSL-сертификат установлен',
  'Google Analytics / Яндекс.Метрика подключены',
  'Сайт добавлен в Google Search Console',
  'Сайт добавлен в Яндекс.Вебмастер',
  'Sitemap.xml и robots.txt настроены',
  'Скорость загрузки проверена (PageSpeed 90+)',
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как создать сайт  пошаговая инструкция',
  description: 'Подробная инструкция из 7 шагов по созданию сайта: от определения целей до публикации.',
  totalTime: 'P14D',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'KZT', value: '85000' },
  step: steps.map((s) => ({ '@type': 'HowToStep', name: s.title, text: s.description, position: s.number })),
}

export default function HowToCreateWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Как создать сайт', href: '/how-to-create-website' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-left md:text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">Пошаговая инструкция 2026</span>
          <h1 className="heading-xl text-white mb-6">Как создать <span className="gradient-text">сайт</span></h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Подробное руководство из 7 шагов  от идеи до публикации. Разбираем три способа, типичные ошибки и даем готовый чеклист.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#steps" className="btn-primary">К инструкции</a>
            <Link href="/free-website" className="btn-secondary">Бесплатные способы</Link>
          </div>
        </div>
      </section>

      {/* 7 Steps */}
      <section id="steps" className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">Пошаговый план</span>
            <h2 className="heading-lg mb-4">7 шагов к <span className="gradient-text">готовому сайту</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Следуйте этим шагам и через 1-2 недели у вас будет работающий сайт</p>
          </div>
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pl-16 md:pl-20">
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-600/30">{step.number}</div>
                  {index < steps.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />}
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-white dark:bg-secondary-900 rounded-xl p-4 border border-secondary-100 dark:border-secondary-700">
                    <p className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">Практические советы:</p>
                    <ul className="space-y-2">
                      {step.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                          <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-200 text-sm font-medium mb-4">Сравнение</span>
            <h2 className="heading-lg mb-4">3 способа <span className="gradient-text">создания сайта</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Сравните стоимость, сроки и сложность каждого подхода</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {methods.map((method) => (
              <div key={method.title} className="bg-white dark:bg-secondary-950 rounded-2xl border-2 border-secondary-200 dark:border-secondary-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={`bg-gradient-to-r ${method.gradient} p-6 text-white`}>
                  <h3 className="text-xl font-bold">{method.title}</h3>
                  <p className="text-white/80 text-sm">{method.subtitle}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-3 gap-4 mb-6 text-left md:text-center">
                    <div><p className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Цена</p><p className="font-bold text-sm">{method.price}</p></div>
                    <div><p className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Сроки</p><p className="font-bold text-sm">{method.time}</p></div>
                    <div><p className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Сложность</p><p className="font-bold text-sm">{method.difficulty}</p></div>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-emerald-600 text-sm mb-2">Плюсы:</p>
                    <ul className="space-y-1">{method.pros.map((pro) => (<li key={pro} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300"><svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{pro}</li>))}</ul>
                  </div>
                  {method.cons.length > 0 && (<div className="mb-4"><p className="font-semibold text-red-600 text-sm mb-2">Минусы:</p><ul className="space-y-1">{method.cons.map((con) => (<li key={con} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300"><svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>{con}</li>))}</ul></div>)}
                  <div className="mt-auto pt-4 border-t border-secondary-100 dark:border-secondary-800"><p className="text-sm text-secondary-500 dark:text-secondary-400"><strong>Подходит:</strong> {method.best}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium mb-4">Важно</span>
            <h2 className="heading-lg mb-4">6 ошибок, <span className="text-red-600">которых нужно избежать</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Эти ошибки совершают 80% людей при создании сайта</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mistakes.map((mistake, idx) => (
              <div key={mistake.title} className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0"><span className="text-red-600 font-bold text-sm">{idx + 1}</span></div>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">{mistake.title}</h3>
                    <p className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed">{mistake.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-3xl">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Чеклист <span className="gradient-text">готовности сайта</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Проверяйте каждый пункт перед запуском</p>
          </div>
          <div className="bg-white dark:bg-secondary-950 rounded-2xl p-8 shadow-lg border border-secondary-100 dark:border-secondary-800">
            <div className="space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded border-2 border-primary-300 dark:border-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-secondary-700 dark:text-secondary-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-left md:text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: 'Сколько стоит создание сайта?', a: 'Бесплатно на конструкторе с ограничениями. Заказ у специалиста — от 85 000₸ за лендинг, от 135 000₸ за корпоративный сайт, от 175 000₸ за интернет-магазин.', link: '/website-price', linkText: 'Смотреть цены' },
              { q: 'Сколько времени занимает создание?', a: 'Лендинг — 3-5 дней, корпоративный сайт — 7-10 дней, интернет-магазин — 10-15 дней. На конструкторе — 1-3 дня. Самостоятельно на коде — от 2 недель.' },
              { q: 'Можно ли создать сайт бесплатно?', a: 'Да, на конструкторах есть бесплатные тарифы. Но с ограничениями: субдомен, реклама, слабый SEO. Для бизнеса лучше профессиональный сайт.', link: '/free-website', linkText: 'Подробнее' },
              { q: 'Нужно ли знать программирование?', a: 'Нет, если заказываете у специалиста или используете конструктор. Программирование нужно только при самостоятельной разработке на коде.' },
              { q: 'Конструктор или заказ — что лучше?', a: 'Конструктор — для экспериментов и стартовых проектов. Заказ — для бизнеса, где важны SEO, уникальный дизайн и техподдержка.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{faq.a}</p>
                {faq.link && <Link href={faq.link} className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium mt-2 inline-block">{faq.linkText} &rarr;</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-left md:text-center">
          <h2 className="heading-lg mb-4 text-white">Не хотите разбираться сами?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Мы создадим профессиональный сайт за 5-10 дней. Консультация бесплатна.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <Link href="/website-price" className="btn-secondary">Узнать стоимость</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Читайте также</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/free-website', title: 'Бесплатный сайт', desc: 'Обзор бесплатных конструкторов' },
              { href: '/publish-website', title: 'Публикация сайта', desc: 'Как залить сайт в интернет' },
              { href: '/website-price', title: 'Цены на сайты', desc: 'Сколько стоит разработка' },
              { href: '/website-for-company', title: 'Сайт для бизнеса', desc: 'Зачем компании нужен сайт' },
            ].map((link) => (
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