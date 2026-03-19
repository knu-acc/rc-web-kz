/**
 * LogosStrip Section — «Нам доверяют»
 * Полоса с названиями клиентов из портфолио
 * Автоматическая marquee-анимация
 */

const clients = [
  'Futurum Study',
  'Aspan Development',
  'Technoline',
  'TAK KAK GROUP',
  'Taumai Group',
  'Global Impex',
  'NFPA Kazakhstan',
  'KazMining Industry',
  'WorkSafety',
  'Tezes Logistics',
  'Morart Company',
  'Chrysalis Gate',
]

export function LogosStrip() {
  // Дублируем для бесшовного бегущей строки
  const doubled = [...clients, ...clients]

  return (
    <section className="py-8 sm:py-10 bg-slate-50 dark:bg-secondary-950 border-y border-secondary-100 dark:border-secondary-800 overflow-hidden">
      <div className="container-custom mb-5">
        <p className="text-xs font-semibold tracking-widest uppercase text-secondary-400 dark:text-secondary-500 text-center">
          Нам доверяют
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-secondary-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-secondary-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />

        {/* Scrolling track */}
        <div className="flex" aria-label="Список клиентов">
          <ul
            className="flex items-center gap-10 animate-[marquee_30s_linear_infinite] whitespace-nowrap"
            aria-hidden="true"
          >
            {doubled.map((client, i) => (
              <li
                key={`${client}-${i}`}
                className="flex items-center gap-3 text-secondary-400 dark:text-secondary-500 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors duration-300 select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-300 dark:bg-secondary-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide">
                  {client}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Accessible static list (visually hidden) */}
        <ul className="sr-only">
          {clients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
