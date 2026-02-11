import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Как создать сайт бесплатно в 2026  обзор 6 способов',
  description:
    'Обзор бесплатных способов создания сайта: Tilda, Wix, WordPress, GitHub Pages, Notion, Google Sites. Честное сравнение и когда лучше заказать.',
  keywords: ['создать сайт бесплатно', 'бесплатный сайт', 'бесплатный конструктор сайтов', 'tilda бесплатно'],
  openGraph: {
    title: 'Как создать сайт бесплатно  обзор 6 способов',
    description: 'Бесплатные конструкторы, хостинги и инструменты. Честное сравнение.',
    url: `${SITE_CONFIG.url}/free-website`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'article',
    images: [{ url: `${SITE_CONFIG.url}/img/slider4.png`, width: 1200, height: 630, alt: 'Создать сайт бесплатно' }],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/free-website` },
}

const platforms = [
  {
    name: 'Tilda',
    type: 'Конструктор сайтов',
    freeFeatures: ['1 сайт, до 50 страниц', 'Субдомен tilda.ws', 'Базовые блоки'],
    limitations: ['Реклама Tilda в футере', 'Нет своего домена', 'Ограниченный набор блоков', 'Нет интернет-магазина'],
    bestFor: 'Лендинги, портфолио, простые сайты',
    rating: 4,
    url: 'tilda.cc',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    name: 'Wix',
    type: 'Конструктор сайтов',
    freeFeatures: ['1 сайт', 'Субдомен wix.com', 'Drag-and-drop редактор'],
    limitations: ['Реклама Wix', '500 МБ хранилища', 'Нет своего домена', 'Медленная загрузка'],
    bestFor: 'Визитки, блоги, простые порфтолио',
    rating: 3,
    url: 'wix.com',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'WordPress.com',
    type: 'CMS + хостинг',
    freeFeatures: ['1 сайт', 'Субдомен wordpress.com', '1 ГБ хранилища'],
    limitations: ['Ограниченные темы', 'Нельзя ставить плагины', 'Реклама WordPress', 'Медленная загрузка'],
    bestFor: 'Блоги, информационные сайты',
    rating: 3,
    url: 'wordpress.com',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'GitHub Pages',
    type: 'Бесплатный хостинг',
    freeFeatures: ['Бесплатный хостинг', 'Свой домен (бесплатно)', 'HTTPS включён', 'Безлимитный трафик'],
    limitations: ['Только статические сайты', 'Нужны знания HTML/CSS', 'Нет визуального редактора', 'Нет бэкенда'],
    bestFor: 'Портфолио разработчиков, документация',
    rating: 4,
    url: 'pages.github.com',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    name: 'Google Sites',
    type: 'Простой конструктор',
    freeFeatures: ['Безлимитные сайты', 'Интеграция с Google', 'Субдомен sites.google.com'],
    limitations: ['Очень простой дизайн', 'Минимум настроек', 'Нет SEO-инструментов', 'Выглядит непрофессионально'],
    bestFor: 'Внутренние страницы, школьные проекты',
    rating: 2,
    url: 'sites.google.com',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    name: 'Notion + Super',
    type: 'Notion как сайт',
    freeFeatures: ['Notion бесплатен', 'Легкое редактирование', 'Современный вид'],
    limitations: ['Super стоит $12/мес за домен', 'Медленная загрузка', 'Нет форм', 'Плохой SEO'],
    bestFor: 'Блоги, базы знаний, резюме',
    rating: 3,
    url: 'super.so',
    gradient: 'from-violet-500 to-purple-600',
  },
]

const comparisonRows = [
  { feature: 'Собственный домен', free: false, paid: true },
  { feature: 'Без рекламы платформы', free: false, paid: true },
  { feature: 'Полная SEO-оптимизация', free: false, paid: true },
  { feature: 'Уникальный дизайн', free: false, paid: true },
  { feature: 'Формы заявок и CRM', free: false, paid: true },
  { feature: 'Техническая поддержка', free: false, paid: true },
  { feature: 'Неограниченные страницы', free: false, paid: true },
  { feature: 'Высокая скорость загрузки', free: false, paid: true },
]

const whenFreeIsOk = [
  { title: 'Тестирование идеи', description: 'Хотите проверить, будет ли спрос на вашу услугу  сделайте бесплатный лендинг и запустите рекламу на 1 неделю.' },
  { title: 'Личное портфолио', description: 'Для фрилансера или студента бесплатный сайт на Tilda или GitHub Pages  хорошее начало.' },
  { title: 'Хобби-проект', description: 'Блог о путешествиях, рецепты, личный дневник  тут бесплатный сайт вполне подойдет.' },
  { title: 'Обучение', description: 'Чтобы научиться делать сайты, начните с бесплатного конструктора и затем переходите на код.' },
]

const whenFreeIsBad = [
  { title: 'Бизнес и коммерция', description: 'Субдомен tilda.ws и реклама конструктора снижают доверие клиентов. Для бизнеса нужен свой домен и чистый дизайн.' },
  { title: 'SEO и органический трафик', description: 'Бесплатные платформы ограничивают SEO-возможности: нет своего домена, нельзя настроить meta-теги, медленная загрузка.' },
  { title: 'Интернет-магазин', description: 'Бесплатные конструкторы не поддерживают корзину, оплату и каталог товаров. Для магазина нужен полноценный сайт.' },
  { title: 'Масштабирование', description: 'Когда бизнес растет, бесплатный сайт становится тесным: мало страниц, нет интеграций, нет аналитики.' },
]

export default function FreeWebsitePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Бесплатный сайт', href: '/free-website' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-6">Честный обзор</span>
          <h1 className="heading-xl text-white mb-6">Создать сайт <span className="gradient-text">бесплатно</span></h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Обзор 6 бесплатных платформ для создания сайта. Расскажем, какие есть ограничения, и когда лучше инвестировать в профессиональный сайт.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#platforms" className="btn-primary">Сравнить платформы</a>
            <Link href="/how-to-create-website" className="btn-secondary">Полная инструкция</Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">Обзор</span>
            <h2 className="heading-lg mb-4">6 бесплатных <span className="gradient-text">платформ</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Честный разбор каждой с плюсами, минусами и оценкой</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white dark:bg-secondary-900 rounded-2xl border-2 border-secondary-100 dark:border-secondary-800 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={`bg-gradient-to-r ${platform.gradient} p-5 text-white`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>
                      <p className="text-white/80 text-sm">{platform.type}</p>
                    </div>
                    <div className="flex gap-0.5">{[1,2,3,4,5].map(i => (<svg key={i} className={`w-4 h-4 ${i <= platform.rating ? 'text-white' : 'text-white/30'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <p className="font-semibold text-emerald-600 text-sm mb-2">Бесплатно:</p>
                    <ul className="space-y-1">{platform.freeFeatures.map(f => (<li key={f} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300"><svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{f}</li>))}</ul>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-red-600 text-sm mb-2">Ограничения:</p>
                    <ul className="space-y-1">{platform.limitations.map(l => (<li key={l} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300"><svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>{l}</li>))}</ul>
                  </div>
                  <div className="mt-auto pt-3 border-t border-secondary-100 dark:border-secondary-800">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400"><strong>Подходит:</strong> {platform.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Бесплатно vs <span className="gradient-text">профессионально</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Что вы получаете в каждом случае</p>
          </div>
          <div className="bg-white dark:bg-secondary-950 rounded-2xl p-6 md:p-8 shadow-lg">
            <table className="w-full">
              <thead><tr className="border-b-2 border-secondary-200 dark:border-secondary-700"><th className="text-left p-3 font-bold">Функция</th><th className="text-center p-3 font-bold">Бесплатно</th><th className="text-center p-3 font-bold">Заказать</th></tr></thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-secondary-100 dark:border-secondary-800">
                    <td className="p-3 text-secondary-700 dark:text-secondary-300">{row.feature}</td>
                    <td className="p-3 text-center">{row.free ? <svg className="w-5 h-5 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>}</td>
                    <td className="p-3 text-center">{row.paid ? <svg className="w-5 h-5 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When Free is OK / Bad */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-2xl font-bold">Когда бесплатный сайт  ОК</h2>
              </div>
              <div className="space-y-4">
                {whenFreeIsOk.map(item => (
                  <div key={item.title} className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-5">
                    <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-1">{item.title}</h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h2 className="text-2xl font-bold">Когда лучше заказать</h2>
              </div>
              <div className="space-y-4">
                {whenFreeIsBad.map(item => (
                  <div key={item.title} className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-5">
                    <h3 className="font-bold text-red-800 dark:text-red-300 mb-1">{item.title}</h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-center mb-12">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: 'Действительно ли это полностью бесплатно?', a: 'Да, но с ограничениями: субдомен, реклама платформы, мало функций. Для полноценного сайта нужен платный тариф или заказ у разработчика.' },
              { q: 'Можно ли потом перенести сайт?', a: 'С конструктора  сложно. Контент придется копировать вручную. С GitHub Pages или WordPress.org  намного проще, так как вы владеете файлами.' },
              { q: 'Какой конструктор лучше для бизнеса?', a: 'Tilda  лучший для лендингов. Но даже платный Tilda (750 руб/мес) уступает заказному сайту по SEO и скорости. Для серьезного бизнеса рекомендуем индивидуальную разработку.' },
              { q: 'Бесплатный сайт появится в Google?', a: 'Да, но с задержкой и в худших позициях. Субдомен, медленная загрузка и ограниченные SEO-настройки мешают продвижению.' },
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
          <h2 className="heading-lg mb-4 text-white">Готовы к профессиональному сайту?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Сайт, который окупится за счет привлечения клиентов. Консультация бесплатна.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <Link href="/website-price" className="btn-secondary">Узнать стоимость</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Читайте также</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/how-to-create-website', title: 'Как создать сайт', desc: 'Полная инструкция из 7 шагов' },
              { href: '/publish-website', title: 'Публикация сайта', desc: 'Как залить в интернет' },
              { href: '/website-price', title: 'Цены на сайты', desc: 'Сколько стоит разработка' },
              { href: '/tilda-site', title: 'Сайт на Tilda', desc: 'Конструктор под ключ' },
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