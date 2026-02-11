import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Как опубликовать сайт в интернете  пошаговая инструкция 2026',
  description:
    'Инструкция из 6 шагов: домен, хостинг, SSL, Google Search Console, Яндекс.Вебмастер, sitemap. Чеклист перед запуском.',
  keywords: ['как опубликовать сайт', 'добавить сайт в гугл', 'добавить сайт в яндекс', 'публикация сайта'],
  openGraph: {
    title: 'Как опубликовать сайт  пошаговая инструкция',
    description: 'Домен, хостинг, SSL, Google, Яндекс  всё в одном руководстве.',
    url: `${SITE_CONFIG.url}/publish-website`,
    siteName: SITE_CONFIG.name,
    locale: 'ru_RU',
    type: 'article',
    images: [{ url: `${SITE_CONFIG.url}/img/slider4.png`, width: 1200, height: 630, alt: 'Как опубликовать сайт' }],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/publish-website` },
}

const steps = [
  {
    number: 1,
    title: 'Зарегистрируйте домен',
    description: 'Домен  это адрес сайта в интернете (например, vashsite.kz). Зарегистрируйте его на свое имя через официального регистратора.',
    details: [
      'Для зоны .kz используйте ps.kz или nic.kz  от 2 500 тг/год',
      'Для .com  namecheap.com или reg.ru  от 5 000 тг/год',
      'Выбирайте короткое имя без дефисов и цифр',
      'Регистрируйте всегда на себя, не на разработчика',
    ],
    warning: 'Если домен зарегистрирован на разработчика  при смене подрядчика вы можете потерять его.',
    duration: '30 минут',
  },
  {
    number: 2,
    title: 'Выберите хостинг',
    description: 'Хостинг  это сервер, на котором физически хранится ваш сайт. Выбор зависит от типа сайта.',
    details: [
      'Статический сайт (HTML)  Netlify или Vercel (бесплатно, быстро, CDN по миру)',
      'Сайт на Tilda  хостинг встроен, достаточно подключить домен',
      'WordPress  хостинг от 1 500 тг/мес (ps.kz, hoster.kz)',
      'Интернет-магазин  VPS от 3 000 тг/мес или облако (DigitalOcean, Timeweb)',
    ],
    warning: null,
    duration: '1 час',
  },
  {
    number: 3,
    title: 'Установите SSL-сертификат',
    description: 'SSL обеспечивает шифрование (HTTPS)  это обязательно для безопасности и SEO. Без него браузер показывает Небезопасно.',
    details: [
      'На Netlify, Vercel, Tilda  SSL включается автоматически',
      "На обычном хостинге  используйте бесплатный Let's Encrypt",
      'Проверьте, что все страницы открываются через https://',
      'Настройте редирект с http на https',
    ],
    warning: 'Google понижает сайты без SSL в результатах поиска с 2018 года.',
    duration: '15 минут',
  },
  {
    number: 4,
    title: 'Загрузите файлы сайта',
    description: 'Способ загрузки зависит от того, как создан сайт и какой хостинг вы выбрали.',
    details: [
      'Tilda  файлы загружать не нужно, всё уже на серверах Tilda',
      'Netlify/Vercel  подключите GitHub репозиторий (деплой при каждом коммите)',
      'Обычный хостинг  загрузите через FTP (FileZilla) или файловый менеджер',
      'Подключите домен к хостингу через DNS-записи (A-запись или CNAME)',
    ],
    warning: null,
    duration: '30 минут  2 часа',
  },
  {
    number: 5,
    title: 'Добавьте сайт в Google и Яндекс',
    description: 'Чтобы сайт появился в поисковых системах, нужно зарегистрировать его в вебмастер-панелях.',
    details: [
      'Google Search Console (search.google.com/search-console)  добавьте сайт, подтвердите через DNS или HTML-файл',
      'Яндекс.Вебмастер (webmaster.yandex.ru)  аналогичная регистрация',
      'В обоих сервисах отправьте sitemap.xml (обычно yourdomain.kz/sitemap.xml)',
      'Ожидайте индексацию: Google  1-2 недели, Яндекс  2-4 недели',
    ],
    warning: null,
    duration: '30 минут',
  },
  {
    number: 6,
    title: 'Настройте аналитику',
    description: 'Без аналитики вы не знаете, сколько людей посещают сайт, откуда приходят и что делают. Это основа для принятия решений.',
    details: [
      'Google Analytics 4 (analytics.google.com)  основной инструмент аналитики',
      'Яндекс.Метрика (metrika.yandex.ru)  вебвизор, карта кликов, тепловые карты',
      'Добавьте оба! Они дополняют друг друга',
      'Настройте цели: отправка формы, клик по телефону, клик по WhatsApp',
    ],
    warning: null,
    duration: '30 минут',
  },
]

const checklist = [
  { category: 'Домен и хостинг', items: ['Домен зарегистрирован на ваше имя', 'Хостинг настроен и оплачен', 'DNS-записи указывают на хостинг', 'SSL-сертификат установлен (HTTPS)'] },
  { category: 'Контент', items: ['Все страницы содержат контент', 'Изображения оптимизированы (до 300 КБ)', 'Контактные данные актуальны', 'Нет рыбных текстов и lorem ipsum'] },
  { category: 'Техническое', items: ['Сайт корректно отображается на телефоне', 'Все ссылки работают (нет 404)', 'Формы отправляют заявки', 'Скорость загрузки: PageSpeed 80+'] },
  { category: 'SEO и аналитика', items: ['Meta-title и meta-description заполнены', 'Sitemap.xml создан и отправлен', 'Robots.txt настроен', 'Google Analytics подключен', 'Яндекс.Метрика подключена', 'Сайт добавлен в Google Search Console', 'Сайт добавлен в Яндекс.Вебмастер'] },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как опубликовать сайт в интернете',
  description: 'Пошаговая инструкция из 6 шагов по публикации сайта.',
  totalTime: 'P1D',
  step: steps.map(s => ({ '@type': 'HowToStep', name: s.title, text: s.description, position: s.number })),
}

export default function PublishWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Публикация сайта', href: '/publish-website' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-left md:text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">Инструкция</span>
          <h1 className="heading-xl text-white mb-6">Как опубликовать <span className="gradient-text">сайт</span></h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Пошаговая инструкция: домен, хостинг, SSL, добавление в Google и Яндекс. Готовый чеклист перед запуском.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#steps" className="btn-primary">К инструкции</a>
            <Link href="/how-to-create-website" className="btn-secondary">Как создать сайт</Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">Пошагово</span>
            <h2 className="heading-lg mb-4">6 шагов <span className="gradient-text">публикации</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">От регистрации домена до первых посетителей из поисковиков</p>
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
                  <div className="bg-white dark:bg-secondary-900 rounded-xl p-4 border border-secondary-100 dark:border-secondary-700 mb-3">
                    <ul className="space-y-2">
                      {step.details.map(detail => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                          <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {step.warning && (
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg p-3">
                      <p className="text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                        <span>{step.warning}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-4xl">
          <div className="text-left md:text-center mb-12">
            <h2 className="heading-lg mb-4">Чеклист <span className="gradient-text">перед запуском</span></h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">Проверьте все пункты, прежде чем объявлять о запуске сайта</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {checklist.map(group => (
              <div key={group.category} className="bg-white dark:bg-secondary-950 rounded-2xl p-6 shadow-lg border border-secondary-100 dark:border-secondary-800">
                <h3 className="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">{group.category}</h3>
                <div className="space-y-3">
                  {group.items.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary-300 dark:border-primary-600 flex-shrink-0 mt-0.5" />
                      <p className="text-secondary-700 dark:text-secondary-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-left md:text-center mb-12">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: 'Сколько времени занимает индексация?', a: 'Google  1-2 недели, Яндекс  2-4 недели. После отправки sitemap.xml процесс ускоряется. Можно запросить индексацию конкретной страницы вручную.' },
              { q: 'Нужен ли SSL-сертификат?', a: 'Обязательно. Без HTTPS браузер показывает Небезопасно, Google понижает позиции, а пользователи теряют доверие.' },
              { q: 'Что делать, если сайт не индексируется?', a: 'Проверьте robots.txt (не заблокирован ли сайт), наличие sitemap.xml, доступность страниц. В Search Console нажмите Запросить индексирование.' },
              { q: 'Как выбрать между Netlify и обычным хостингом?', a: 'Netlify  для статических сайтов (HTML, Next.js static export). Бесплатный, быстрый, CDN по миру. Обычный хостинг  для WordPress, CMS, серверных приложений.' },
              { q: 'Можно ли опубликовать бесплатно?', a: 'Да. Netlify, Vercel, GitHub Pages  бесплатный хостинг для статических сайтов. Нужно только купить домен (от 2 500 тг/год).' },
            ].map(faq => (
              <div key={faq.q} className="bg-secondary-50 dark:bg-secondary-800/50 rounded-xl p-6">
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
          <h2 className="heading-lg mb-4 text-white">Нужна помощь с публикацией?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Публикация, настройка домена и добавление в поисковики входят в стоимость разработки сайта.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <Link href="/website-price" className="btn-secondary">Стоимость разработки</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-left md:text-center mb-8">Читайте также</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/how-to-create-website', title: 'Как создать сайт', desc: 'Полная инструкция из 7 шагов' },
              { href: '/seo-optimization', title: 'SEO-оптимизация', desc: 'Продвижение после публикации' },
              { href: '/website-price', title: 'Цены на сайты', desc: 'Стоимость разработки' },
              { href: '/technologies', title: 'Технологии', desc: 'Какие инструменты мы используем' },
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