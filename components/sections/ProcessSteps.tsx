import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  { num: '01', title: 'Обсуждение', desc: 'Выясняем задачи бизнеса, анализируем нишу и конкурентов, определяем цели сайта.' },
  { num: '02', title: 'Дизайн', desc: 'Создаём макет с учётом UX/UI, показываем прототип и согласовываем детали.' },
  { num: '03', title: 'Разработка', desc: 'Верстаем, программируем, подключаем аналитику, CRM и платёжные системы.' },
  { num: '04', title: 'Запуск', desc: 'Тестируем на всех устройствах, настраиваем SEO и публикуем сайт.' },
  { num: '05', title: 'Поддержка', desc: 'Бесплатная техподдержка 30 дней, консультации и оперативные правки.' },
]

export function ProcessSteps() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        badge="Процесс"
        title="Как мы работаем"
        description="Прозрачный процесс от обсуждения до запуска"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-12">
        {steps.map((step) => (
          <div key={step.num} className="relative p-5 rounded-2xl bg-surface border border-border-light/20">
            <span className="text-xs font-mono font-bold text-text-muted/40 tracking-wider">{step.num}</span>
            <h3 className="font-heading font-bold text-base text-text-main mt-2">{step.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed mt-1.5">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
