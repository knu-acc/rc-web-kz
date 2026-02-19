import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Сайт для компании в Алматы  от визитки до корпоративного портала',
  description:
    'Создание сайтов для бизнеса в Алматы: визитки, корпоративные, каталоги. Зачем нужен, сколько стоит, примеры и сроки.',
  keywords: ['сайт для компании', 'бизнес сайт алматы', 'корпоративный сайт', 'сайт визитка'],
  openGraph: {
    title: 'Сайт для компании  от визитки до портала',
    description: 'Профессиональные сайты для бизнеса в Алматы: типы, цены, примеры.',
    url: `${SITE_CONFIG.url}/website-for-company`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: `${SITE_CONFIG.url}/img/slider4.png`, width: 1200, height: 630, alt: 'Сайт для компании' }],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/website-for-company` },
}

const siteTypes = [
  {
    title: 'Сайт-визитка',
    pages: '1-3 страницы',
    price: 'от 85 000₸',
    time: '3-5 дней',
    description: 'Минимальный сайт с ключевой информацией: кто вы, что делаете, как связаться.',
    includes: ['Главная страница', 'Информация об услугах', 'Контакты и форма заявки', 'Адаптив для мобильных', 'Базовая SEO-оптимизация'],
    bestFor: 'Частные специалисты, малый бизнес, стартапы',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Корпоративный сайт',
    pages: '5-15 страниц',
    price: 'от 135 000₸',
    time: '7-14 дней',
    description: 'Полноценное представительство компании в интернете со всей необходимой информацией.',
    includes: ['Главная с уникальным дизайном', 'Каталог услуг', 'О компании и команда', 'Портфолио / Кейсы', 'Блог / Новости', 'Отзывы клиентов', 'Контакты с формой', 'Полная SEO-оптимизация'],
    bestFor: 'Средний бизнес, компании с 5+ услугами',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Бизнес-портал',
    pages: '15-30+ страниц',
    price: 'от 250 000 тг',
    time: '2-4 недели',
    description: 'Комплексное решение с расширенным функционалом: каталог, фильтры, калькулятор, личный кабинет.',
    includes: ['Все из корпоративного +', 'Каталог с фильтрацией', 'Калькулятор стоимости', 'Интеграция с CRM', 'Многоязычность', 'Расширенная аналитика', 'Личный кабинет клиента'],
    bestFor: 'Крупный бизнес, B2B-компании, застройщики',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

const whyNeedSite = [
  { title: 'Клиенты ищут в Google', description: '87% покупателей начинают поиск товаров и услуг в интернете. Без сайта вы невидимы для большинства клиентов.', stat: '87%' },
  { title: 'Доверие к бизнесу', description: '75% пользователей судят о надёжности компании по качеству сайта. Профессиональный сайт — серьёзный бизнес.', stat: '75%' },
  { title: 'Сайт работает 24/7', description: 'Сайт принимает заявки круглосуточно, в выходные и праздники. Один сайт заменяет менеджера, который никогда не спит.', stat: '24/7' },
  { title: 'Окупаемость за 1-3 месяца', description: 'При стоимости сайта от 85 000₸ и средней стоимости клиента 20 000₸ достаточно 5 заявок для окупаемости.', stat: '5 заявок' },
]

const processSteps = [
  { step: 1, title: 'Бриф и анализ', description: 'Изучаем бизнес, конкурентов, целевую аудиторию. Определяем структуру и функционал.', duration: '1-2 дня' },
  { step: 2, title: 'Дизайн', description: 'Создаём уникальный дизайн в Figma. Согласовываем с вами до начала разработки.', duration: '2-3 дня' },
  { step: 3, title: 'Разработка', description: 'Верстаем и программируем сайт. Адаптируем под мобильные. Настраиваем SEO.', duration: '3-7 дней' },
  { step: 4, title: 'Тестирование', description: 'Проверяем на всех устройствах, тестируем формы, скорость, SEO-метрики.', duration: '1 день' },
  { step: 5, title: 'Запуск', description: 'Публикуем сайт, подключаем домен, добавляем в Google и Яндекс, настраиваем аналитику.', duration: '1 день' },
  { step: 6, title: 'Поддержка', description: 'Бесплатные правки в первый месяц. Техническая поддержка и консультации.', duration: 'Постоянно' },
]

export default function WebsiteForCompanyPage() {
  const serviceSchema = generateServiceSchema({ name: 'Сайт для компании', description: 'Создание сайтов для компаний и бизнеса в Алматы' })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Сайт для компании', url: `${SITE_CONFIG.url}/website-for-company` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Сайт для компании', href: '/website-for-company' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-left md:text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">Для бизнеса</span>
            <h1 className="heading-xl text-white mb-6">Сайт для <span className="gradient-text">вашей компании</span></h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              От сайта-визитки до корпоративного портала. Профессиональный дизайн, SEO-оптимизация, мобильная адаптация — всё для бизнеса.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-dark inline-flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Обсудить проект
              </a>
              <Link href="/portfolio" className="btn-secondary">Примеры работ</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[{ v: '120+', l: 'Проектов' }, { v: '5 лет', l: 'Опыта' }, { v: '100%', l: 'Довольных' }, { v: '5-10 дней', l: 'В среднем' }].map(s => (
                <div key={s.l} className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                  <div className="text-xl font-bold text-white">{s.v}</div>
                  <p className="text-xs text-white/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why need */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">Зачем</span>
            <h2 className="heading-lg mb-4">Зачем компании <span className="gradient-text">нужен сайт</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Цифры, которые убеждают лучше слов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyNeedSite.map(item => (
              <div key={item.title} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-6 text-left md:text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-3">{item.stat}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Types */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Типы сайтов <span className="gradient-text">для бизнеса</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Выберите подходящий вариант</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteTypes.map(type => (
              <div key={type.title} className="bg-white dark:bg-secondary-950 rounded-2xl border-2 border-secondary-100 dark:border-secondary-800 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${type.gradient} p-6 text-white`}>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{type.pages}</p>
                  <div className="flex gap-4 mt-3 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded">{type.price}</span>
                    <span className="bg-white/20 px-3 py-1 rounded">{type.time}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 text-sm">{type.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Включено:</p>
                    <ul className="space-y-1">
                      {type.includes.map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300">
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4 border-t border-secondary-100 dark:border-secondary-800">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400"><strong>Для кого:</strong> {type.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Как <span className="gradient-text">создается сайт</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Прозрачный процесс от первого контакта до запуска</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-6 border border-secondary-100 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-lg transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg shadow-primary-600/30 flex-shrink-0">{step.step}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-secondary-900 dark:text-white">{step.title}</h3>
                      </div>
                      <span className="inline-block text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-full mb-2">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200 dark:bg-primary-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-left md:text-center mb-12">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: 'Нужно ли предоставлять контент?', a: 'Желательно. Тексты, фото, логотип — чем больше контента подготовите, тем лучше результат. Если контента нет — поможем написать тексты и подобрать изображения.' },
              { q: 'Можно ли редактировать сайт самостоятельно?', a: 'Да. Сайты с понятной структурой, даём инструкцию по редактированию. Для сложных правок всегда поможем бесплатно.' },
              { q: 'Входит ли домен и хостинг в стоимость?', a: 'Домен (.kz от 2 500₸/год) и хостинг оплачиваются отдельно. Поможем выбрать и настроить. Многие сайты размещаются бесплатно на Netlify.' },
              { q: 'Будет ли сайт в Google и Яндексе?', a: 'Да. Все сайты включают базовую SEO-оптимизацию, sitemap.xml, регистрацию в Google Search Console и Яндекс.Вебмастер.' },
              { q: 'Сколько стоит поддержка после запуска?', a: 'Первый месяц — бесплатно. Мелкие правки (текст, фото, контакты) — всегда бесплатно. Серьёзные доработки — по договорённости.' },
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
        <div className="container-custom text-left md:text-center">
          <h2 className="heading-lg mb-4 text-white">Обсудим ваш проект?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Бесплатная консультация — рассказать, какой тип сайта подойдет и сколько это будет стоить.</p>
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
              { href: '/corporate-site', title: 'Корпоративный сайт', desc: 'Подробнее об услуге' },
              { href: '/landing-page', title: 'Лендинг', desc: 'Одностраничный сайт' },
              { href: '/website-price', title: 'Цены', desc: 'Стоимость разработки' },
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