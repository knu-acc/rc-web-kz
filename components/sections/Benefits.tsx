/**
 * Benefits Section — Two-column editorial: heading left + numbered list right
 */

const benefits = [
  {
    num: '01',
    title: 'Быстрая загрузка',
    description: 'Менее 2 секунд. Оптимизация изображений, кода и серверного рендеринга на Next.js.',
  },
  {
    num: '02',
    title: 'Адаптивный дизайн',
    description: 'Идеальное отображение на телефонах, планшетах и компьютерах. 70% казахстанцев заходят с мобильных.',
  },
  {
    num: '03',
    title: 'SEO с первого дня',
    description: 'Schema.org, метатеги, sitemap.xml — всё включено. Видны в Google и Яндекс сразу после запуска.',
  },
  {
    num: '04',
    title: 'Безопасность',
    description: 'SSL-сертификат, защита от взлома, регулярные бэкапы. Ваши данные в безопасности.',
  },
  {
    num: '05',
    title: 'Уникальный дизайн',
    description: 'Каждый сайт индивидуально под ваш бренд. Никаких шаблонов — только то, что выделяет вас.',
  },
  {
    num: '06',
    title: 'Договор и прозрачность',
    description: 'Работаем официально по договору с ТЗ. Фиксированная цена, никаких скрытых доплат.',
  },
]

export function Benefits() {
  return (
    <section className="section bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-start">

          {/* Left: Large heading (sticky on desktop) */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold tracking-widest uppercase text-secondary-400 dark:text-secondary-500 mb-6">
              Преимущества
            </p>
            <h2 className="heading-lg text-secondary-900 dark:text-white mb-6">
              Почему<br />
              выбирают<br />
              нас
            </h2>
            <p className="text-base text-secondary-500 dark:text-secondary-400 leading-relaxed">
              Более 6 лет делаем сайты, которые работают на бизнес, а не просто красиво выглядят.
            </p>
          </div>

          {/* Right: Numbered list */}
          <div className="divide-y divide-secondary-100 dark:divide-secondary-800">
            {benefits.map((item) => (
              <div
                key={item.num}
                className="flex gap-6 py-7 group"
              >
                {/* Number */}
                <span className="text-sm font-bold text-secondary-200 dark:text-secondary-700 w-8 flex-shrink-0 pt-0.5">
                  {item.num}
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-secondary-900 dark:text-white text-base leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
