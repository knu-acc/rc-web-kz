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
    price: 'от 85 000 тг',
    time: '3-5 дней',
    description: 'Минимальный сайт с ключевой информацией: кто вы, что делаете, как связаться.',
    includes: ['Главная страница', 'Информация об услугах', 'Контакты и форма заявки', 'Адаптив для мобильных', 'Базовая SEO-оптимизация'],
    bestFor: 'Частные специалисты, малый бизнес, стартапы',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Корпоративный сайт',
    pages: '5-15 страниц',
    price: 'от 150 000 тг',
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
  { title: 'Клиенты вас ищут в Google', description: '87% покупателей начинают поиск товаров и услуг с интернета. Без сайта вы невидимы для большинства потенциальных клиентов.', stat: '87%' },
  { title: 'Доверие к бизнесу', description: '75% пользователей судят о надежности компании по качеству сайта. Профессиональный сайт = серьезный бизнес.', stat: '75%' },
  { title: 'Сайт работает 24/7', description: 'Сайт принимает заявки днем и ночью, в выходные и праздники. Один сайт заменяет менеджера, который никогда не спит.', stat: '24/7' },
  { title: 'Окупаемость за 1-3 месяца', description: 'При стоимости сайта от 85 000 тг и средней стоимости клиента 20 000 тг  достаточно 5 заявок для окупаемости.', stat: '5 заявок' },
]

const processSteps = [
  { step: 1, title: 'Бриф и анализ', description: 'Изучаем ваш бизнес, конкурентов, целевую аудиторию. Определяем структуру и функционал.', duration: '1-2 дня' },
  { step: 2, title: 'Дизайн', description: 'Создаем уникальный дизайн в Figma. Согласовываем с вами до начала разработки.', duration: '2-3 дня' },
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
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">Для бизнеса</span>
            <h1 className="heading-xl text-white mb-6">Сайт для <span className="gradient-text">вашей компании</span></h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              От сайта-визитки до корпоративного портала. Профессиональный дизайн, SEO, мобильная адаптация  все, что нужно бизнесу.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">Обсудить проект</a>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">Зачем</span>
            <h2 className="heading-lg mb-4">Зачем компании <span className="gradient-text">нужен сайт</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Цифры, которые убеждают лучше слов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyNeedSite.map(item => (
              <div key={item.title} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
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
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Как мы <span className="gradient-text">создаем сайт</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Прозрачный процесс от первого контакта до запуска</p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex gap-4 md:gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg shadow-primary-600/30">{step.step}</div>
                  {index < processSteps.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-1" />}
                </div>
                <div className="pb-6 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <span className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">{step.description}</p>
                </div>
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
              { q: 'Нужно ли мне предоставлять контент?', a: 'Желательно. Тексты, фото продукции, логотип  чем больше контента вы подготовите, тем лучше будет результат. Если нет контента  поможем написать тексты и подобрать изображения.' },
              { q: 'Можно ли потом редактировать сайт самому?', a: 'Да. Мы делаем сайты с понятной структурой и даем инструкцию по редактированию. Для сложных правок всегда поможем бесплатно.' },
              { q: 'Входит ли домен и хостинг в стоимость?', a: 'Домен (.kz от 2 500 тг/год) и хостинг оплачиваются отдельно. Мы поможем выбрать и настроить. Многие наши сайты размещаются бесплатно на Netlify.' },
              { q: 'Будет ли сайт в Google и Яндексе?', a: 'Да. Все сайты включают базовую SEO-оптимизацию, sitemap.xml, регистрацию в Google Search Console и Яндекс.Вебмастер.' },
              { q: 'Сколько стоит поддержка после запуска?', a: 'Первый месяц  бесплатно. Мелкие правки (текст, фото, контакты)  всегда бесплатно. Серьезные доработки  по договоренности.' },
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
          <h2 className="heading-lg mb-4 text-white">Обсудим ваш проект?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Бесплатная консультация  расскажем, какой тип сайта подойдет и сколько это будет стоить.</p>
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