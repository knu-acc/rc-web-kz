import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Гарантии качества | Что мы гарантируем  RC-WEB.KZ',
  description: 'Гарантии RC-WEB.KZ: 12 месяцев на работу сайта, бесплатные правки 30 дней, соблюдение сроков, конфиденциальность, передача всех исходников.',
  keywords: ['гарантии создания сайта', 'гарантия качества сайта', 'гарантия веб-разработки', 'условия работы'],
  openGraph: {
    title: 'Гарантии качества  RC-WEB.KZ',
    description: '7 гарантий: от качества кода до конфиденциальности данных',
    url: `${SITE_CONFIG.url}/guarantees`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: { canonical: `${SITE_CONFIG.url}/guarantees` },
}

const guarantees = [
  {
    title: 'Гарантия на работу сайта  12 месяцев',
    description: 'В течение года мы бесплатно исправляем любые ошибки и баги, которые возникнут в работе сайта. Это касается вёрстки, функционала, форм обратной связи.',
    details: ['Исправление багов в коде', 'Починка сломавшейся вёрстки', 'Восстановление работы форм', 'Исправление проблем с адаптивностью'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Бесплатные правки  30 дней',
    description: 'В первый месяц после запуска вносим правки бесплатно: изменение текстов, замена фото, корректировка цветов, добавление элементов в рамках ТЗ.',
    details: ['Изменение текстов и заголовков', 'Замена изображений', 'Корректировка цветов и шрифтов', 'Добавление/удаление блоков (в рамках ТЗ)'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Соблюдение сроков',
    description: 'Сроки фиксируются в договоре. Если задержка происходит по нашей вине  предоставляем скидку 10% за каждую неделю просрочки.',
    details: ['Сроки прописаны в договоре', 'Еженедельные отчёты о прогрессе', 'Скидка 10% за неделю задержки по нашей вине', 'Промежуточное согласование на каждом этапе'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Передача всех исходников',
    description: 'После оплаты передаём полные исходные коды проекта, доступы к хостингу, домену, аналитике. Вы  владелец всего.',
    details: ['Исходный код на GitHub', 'Доступы к хостингу и домену', 'Доступы к Google Analytics и Яндекс.Метрике', 'Документация по управлению сайтом'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Конфиденциальность данных',
    description: 'Все данные клиента хранятся в строгой конфиденциальности. Условия прописаны в NDA (соглашение о неразглашении).',
    details: ['NDA по запросу клиента', 'Не передаём данные третьим лицам', 'Безопасное хранение паролей и доступов', 'Удаление данных по завершении проекта'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: 'from-red-500 to-pink-600',
  },
  {
    title: 'Уникальный дизайн',
    description: 'Мы не используем шаблоны. Каждый проект разрабатывается индивидуально с нуля под конкретный бизнес и целевую аудиторию.',
    details: ['Дизайн с нуля, без шаблонов', 'Учитываем фирменный стиль компании', 'Макеты для desktop, tablet и mobile', 'До 3 раундов правок дизайна'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'SEO-оптимизация включена',
    description: 'Каждый сайт выходит с базовой SEO-оптимизацией: мета-теги, Schema.org, sitemap.xml, robots.txt, оптимизация скорости.',
    details: ['Мета-теги title и description для каждой страницы', 'Schema.org разметка (Organization, BreadcrumbList)', 'sitemap.xml и robots.txt', 'Google PageSpeed 90+ баллов'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    gradient: 'from-lime-500 to-green-600',
  },
]

const contractPoints = [
  'Описание всех работ и функций сайта',
  'Фиксированные сроки выполнения каждого этапа',
  'Стоимость и порядок оплаты (50/50 или 3 этапа)',
  'Гарантийный период и объём бесплатной поддержки',
  'Условия внесения правок и доработок',
  'Порядок передачи исходников и доступов',
  'Условия конфиденциальности и NDA',
  'Ответственность сторон и разрешение споров',
]

const faq = [
  {
    q: 'Что входит в гарантию 12 месяцев?',
    a: 'Исправление любых ошибок в коде и вёрстке, которые не были вызваны действиями клиента. Если сломалась форма, съехала вёрстка или появился баг  исправим бесплатно.',
  },
  {
    q: 'Какие правки можно вносить бесплатно в первый месяц?',
    a: 'Изменение текстов, замена изображений, корректировка цветов, перемещение блоков. Всё, что предусмотрено в рамках утверждённого ТЗ. Добавление нового функционала  за отдельную плату.',
  },
  {
    q: 'Заключаете ли вы договор?',
    a: 'Да. Мы работаем по договору, в котором прописаны все условия: сроки, стоимость, объём работ, гарантии, порядок оплаты и ответственность сторон.',
  },
  {
    q: 'Что если я хочу отказаться от проекта в процессе?',
    a: 'Аванс не возвращается, но вы получаете все наработки, которые были сделаны к этому моменту (макеты, прототипы, код).',
  },
  {
    q: 'Можно ли продлить поддержку после 30 дней?',
    a: 'Да. Мы предлагаем пакеты техподдержки: от 15 000 /мес за базовую поддержку до 45 000 /мес за расширенную с SEO-продвижением.',
  },
]

export default function GuaranteesPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Гарантии', href: '/guarantees' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            7 гарантий качества
          </div>

          <h1 className="heading-xl mb-6">
            <span className="block">Гарантии</span>
            <span className="gradient-text">качества и надёжности</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
            Мы работаем по договору и гарантируем качество каждого проекта.
            12 месяцев гарантии на работу сайта, 30 дней бесплатных правок, передача всех исходников.
          </p>

          <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
            {[
              { num: '12 мес', label: 'гарантия' },
              { num: '30 дн', label: 'бесп. правки' },
              { num: '100%', label: 'исходники' },
              { num: 'NDA', label: 'по запросу' },
            ].map((s) => (
              <div key={s.label} className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                <div className="text-lg sm:text-xl font-bold text-primary-600">{s.num}</div>
                <div className="text-xs text-secondary-500 dark:text-secondary-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Grid */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-5xl">
          <div className="space-y-6">
            {guarantees.map((g, index) => (
              <div
                key={g.title}
                className="group bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6 sm:p-8 border border-secondary-100 dark:border-secondary-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.gradient} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                    {g.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {g.title}
                    </h2>
                    <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">
                      {g.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {g.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Section */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="heading-lg text-white mb-4">
              Работаем по <span className="gradient-text">договору</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Все условия фиксируются в договоре. Вот что в нём прописано:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
            {contractPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary-800/50 rounded-xl p-4 border border-secondary-700">
                <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                <span className="text-white/90 text-sm">{p}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Обсудить условия</a>
            <Link href="/process" className="btn-secondary">Процесс работы</Link>
          </div>
        </div>
      </section>

      {/* Comparison: we vs others */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-center mb-10">RC-WEB vs фрилансеры</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary-50 dark:bg-secondary-800">
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-left font-bold">Критерий</th>
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-center font-bold text-primary-600">RC-WEB.KZ</th>
                  <th className="border border-secondary-200 dark:border-secondary-700 p-4 text-center font-bold">Фрилансер</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Договор', 'Всегда', 'Редко'],
                  ['Гарантия на работу', '12 месяцев', 'Нет'],
                  ['Бесплатные правки', '30 дней', 'Нет'],
                  ['Передача исходников', 'Всегда', 'Не всегда'],
                  ['Соблюдение сроков', 'Скидка за просрочку', 'Нет гарантий'],
                  ['Поддержка после запуска', '24/7', 'По настроению'],
                  ['SEO-оптимизация', 'Включена', 'Доп. оплата'],
                  ['NDA', 'По запросу', 'Редко'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-secondary-50 dark:bg-secondary-800' : ''}>
                    <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-secondary-700 dark:text-secondary-300 font-medium">{row[0]}</td>
                    <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">{row[1]}</td>
                    <td className="border border-secondary-200 dark:border-secondary-700 p-4 text-center text-secondary-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-center mb-10">Частые вопросы</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-white dark:bg-secondary-800 rounded-xl border border-secondary-100 dark:border-secondary-700">
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
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="heading-lg text-white mb-4">Готовы к надёжному партнёрству?</h2>
          <p className="text-lg text-white/90 mb-8">
            Свяжитесь с нами  обсудим ваш проект и условия сотрудничества. Консультация бесплатна.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <Link href="/website-price" className="btn-secondary">Узнать цены</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Полезные страницы</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/process', title: 'Процесс работы', desc: '6 этапов создания' },
              { href: '/website-price', title: 'Цены', desc: 'Стоимость услуг' },
              { href: '/technologies', title: 'Технологии', desc: 'Наш стек' },
              { href: '/about', title: 'О компании', desc: 'Наша команда и ценности' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-5 border border-secondary-100 dark:border-secondary-700 hover:shadow-lg hover:-translate-y-1 transition-all group">
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