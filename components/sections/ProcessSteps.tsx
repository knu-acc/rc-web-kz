/**
 * ProcessSteps Section — Giant numbers, clean dark layout
 */

const steps = [
  {
    num: '01',
    title: 'Брифинг',
    desc: 'Обсуждаем задачи, целевую аудиторию и конкурентов. 30 минут — онлайн или по WhatsApp.',
    duration: '30 мин',
  },
  {
    num: '02',
    title: 'Дизайн',
    desc: 'Прототип и дизайн-макет в Figma. Вы согласуете каждый экран до старта разработки.',
    duration: '1–2 дня',
  },
  {
    num: '03',
    title: 'Разработка',
    desc: 'Next.js + Tailwind CSS. Адаптивный дизайн, SEO-оптимизация, скорость загрузки <2 сек.',
    duration: '3–10 дней',
  },
  {
    num: '04',
    title: 'Запуск',
    desc: 'Тестируем на всех устройствах, подключаем хостинг и домен. 30 дней поддержки после запуска.',
    duration: '1 день',
  },
]

export function ProcessSteps() {
  return (
    <section className="section bg-secondary-900 dark:bg-black text-white overflow-hidden">
      <div className="container-custom">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Процесс</p>
            <h2 className="heading-lg text-white">
              Как мы<br />работаем
            </h2>
          </div>
          <p className="text-base text-white/40 max-w-xs md:text-right">
            От брифинга до запуска — 7–10 дней
          </p>
        </div>

        {/* Steps — 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative py-8 ${index > 0 ? 'lg:pl-10' : ''} ${index < steps.length - 1 ? 'lg:pr-10' : ''}`}
            >
              {/* Giant ghost number */}
              <div
                className="text-[7rem] leading-none font-black text-white/[0.04] select-none mb-0 -mt-4 -ml-1"
                aria-hidden="true"
              >
                {step.num}
              </div>

              {/* Content overlapping number */}
              <div className="-mt-12">
                <span className="text-xs font-bold tracking-widest uppercase text-white/30 block mb-3">
                  {step.duration}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap items-center gap-8 text-sm text-white/40">
          {['Договор и ТЗ', 'Ежедневная связь', '30 дней поддержки'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
