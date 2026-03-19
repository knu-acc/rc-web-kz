/**
 * PainPoints Section — Empathy-блок
 * «Узнаёте себя?» — показывает боли клиента до блока услуг
 * Повышает конверсию за счёт идентификации проблем
 */
import { SOCIAL_LINKS } from '@/lib/constants'

const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Клиенты не находят вас в Google',
    desc: 'Конкуренты на первой странице, а вы — нет. Без SEO-оптимизации сайт невидим.',
    color: 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50',
    iconColor: 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Сайт не работает на телефоне',
    desc: '70% трафика в Алматы — мобильный. Неадаптивный сайт теряет большинство посетителей.',
    color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50',
    iconColor: 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Заявки теряются',
    desc: 'Нет формы, кнопки WhatsApp или чёткого призыва к действию. Посетитель уходит без контакта.',
    color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900/50',
    iconColor: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Конструктор обходится дорого',
    desc: 'Tilda/Wix: абонплата от 40 000 ₸/год + плохая индексация. Сайт на Next.js окупается за год.',
    color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/50',
    iconColor: 'bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400',
  },
]

export function PainPoints() {
  return (
    <section className="section bg-slate-50 dark:bg-secondary-950/50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-left md:text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
            Узнаёте себя?
          </span>
          <h2 className="heading-lg mb-4">
            Ваш бизнес теряет клиентов{' '}
            <span className="gradient-text">каждый день</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-lg">
            Эти проблемы решаемы. Мы создаём сайты, которые работают на бизнес, а не просто выглядят красиво.
          </p>
        </div>

        {/* Pain cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${pain.color}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pain.iconColor}`}>
                {pain.icon}
              </div>
              <h3 className="font-semibold text-secondary-900 dark:text-white mb-2 leading-snug">
                {pain.title}
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={SOCIAL_LINKS.whatsapp}
            className="btn-dark inline-flex items-center gap-2 group"
            aria-label="Исправим ситуацию — написать в WhatsApp"
          >
            Исправим за 7 дней
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-secondary-500 dark:text-secondary-400">
            Бесплатная консультация · Без предоплаты
          </p>
        </div>
      </div>
    </section>
  )
}
