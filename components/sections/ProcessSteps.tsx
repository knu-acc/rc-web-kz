/**
 * ProcessSteps Section — «Как мы работаем»
 * 4 шага от брифинга до запуска
 * Горизонтальный timeline на desktop, вертикальный на mobile
 */

const steps = [
  {
    num: '01',
    title: 'Брифинг',
    desc: 'Обсуждаем ваши задачи, целевую аудиторию и конкурентов. Занимает 30 минут — онлайн или по WhatsApp.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    duration: '30 мин',
  },
  {
    num: '02',
    title: 'Дизайн',
    desc: 'Создаём прототип и дизайн-макет в Figma. Вы согласуете каждый экран до старта разработки.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    duration: '1–2 дня',
  },
  {
    num: '03',
    title: 'Разработка',
    desc: 'Пишем на Next.js + Tailwind CSS. Адаптивный дизайн, SEO-оптимизация и скорость загрузки <2 сек.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    duration: '3–10 дней',
  },
  {
    num: '04',
    title: 'Запуск',
    desc: 'Тестируем на всех устройствах, подключаем хостинг и домен. 30 дней бесплатной поддержки после запуска.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    duration: '1 день',
  },
]

export function ProcessSteps() {
  return (
    <section className="section bg-secondary-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-left md:text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary-200 text-sm font-medium mb-4">
            Процесс
          </span>
          <h2 className="heading-lg text-white mb-4">
            Как мы{' '}
            <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-white/70 text-lg">
            Прозрачный процесс: знаете статус проекта на каждом этапе.
            Никаких сюрпризов — только результат.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.num} className="relative flex flex-col items-start lg:items-center lg:text-center group">
                {/* Vertical connector — mobile only */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden absolute left-5 top-20 bottom-0 w-px bg-white/10" aria-hidden="true" />
                )}

                {/* Step number + icon */}
                <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-3 mb-4 lg:mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-400/40 transition-all duration-300 flex-shrink-0">
                    <div className="text-white/80 group-hover:text-primary-300 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <span className="text-4xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-display lg:hidden">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2 pl-0 lg:pl-0">
                  <div className="flex items-center gap-2 lg:justify-center">
                    <span className="hidden lg:block text-3xl font-extrabold text-white/15 font-display">
                      {step.num}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60 font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            Среднее время от брифинга до запуска — <strong className="text-white/80">7–10 дней</strong>
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Договор и ТЗ
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Ежедневная связь
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              30 дней поддержки
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
