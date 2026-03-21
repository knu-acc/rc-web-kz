import { BentoCard } from '@/components/ui/BentoCard'

const stats = [
  { value: '120+', label: 'Проектов', desc: 'Запущено по Казахстану' },
  { value: '4.9', label: 'Рейтинг', desc: 'Средняя оценка клиентов' },
  { value: '5-10', label: 'Дней', desc: 'Средний срок разработки' },
  { value: 'от 85к ₸', label: 'Стоимость', desc: 'Создание сайта под ключ' },
]

export function Stats() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <BentoCard key={stat.label} className="items-center text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-surface-dark">{stat.value}</div>
            <div className="font-heading font-semibold text-text-muted">{stat.label}</div>
            <div className="text-sm text-text-muted">{stat.desc}</div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
