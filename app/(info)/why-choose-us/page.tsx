import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { FolderCheck, Zap, Search, HeadphonesIcon, Cpu, Wallet, Eye, Star, ArrowRight } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Почему выбирают RC-WEB.KZ',
  description: 'Почему клиенты выбирают нас: 120+ проектов, сроки 5-10 дней, SEO в подарок, бесплатная поддержка, честные цены. Создание сайтов в Алматы.',
  keywords: ['почему выбирают rc-web', 'преимущества веб-студии', 'лучшая веб-студия алматы'],
  path: '/why-choose-us',
})

const reasons = [
  {
    icon: FolderCheck,
    title: '120+ реализованных проектов',
    desc: 'За 5 лет мы создали более 120 сайтов для бизнеса разных масштабов. Лендинги, корпоративные сайты, интернет-магазины — у нас есть опыт в любой нише.',
    accent: true,
  },
  {
    icon: Zap,
    title: 'Сроки 5-10 рабочих дней',
    desc: 'Не затягиваем. Чёткий план работ и отлаженные процессы позволяют запустить сайт максимально быстро без потери качества.',
  },
  {
    icon: Search,
    title: 'SEO-оптимизация включена',
    desc: 'Каждый сайт оптимизирован для поисковых систем: метатеги, скорость загрузки, адаптивность, структурированные данные, семантическая вёрстка.',
  },
  {
    icon: HeadphonesIcon,
    title: '30 дней бесплатной поддержки',
    desc: 'После запуска мы не бросаем клиента. 30 дней бесплатно правим мелкие замечания, консультируем по работе с сайтом.',
  },
  {
    icon: Cpu,
    title: 'Современные технологии',
    desc: 'Next.js, React, TypeScript, Tailwind CSS — ваш сайт будет быстрым, безопасным и легко масштабируемым. Не используем устаревшие решения.',
  },
  {
    icon: Wallet,
    title: 'Честные цены от 85 000₸',
    desc: 'Фиксированная стоимость без скрытых доплат. Вы знаете финальную сумму до начала работы. Оплата поэтапная.',
  },
  {
    icon: Eye,
    title: 'Прозрачный процесс',
    desc: 'Вы видите прогресс на каждом этапе: от брифа до запуска. Еженедельные отчёты, доступ к макетам и тестовой версии сайта.',
  },
  {
    icon: Star,
    title: 'Реальные отзывы клиентов',
    desc: 'Нашу работу оценивают на 4.9 из 5. Читайте реальные отзывы от предпринимателей Алматы, которые уже работают с нами.',
  },
]

export default function WhyChooseUsPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Почему мы', href: '/why-choose-us' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <SectionHeading badge="Преимущества" title="Почему выбирают нас" description="8 причин доверить нам разработку вашего сайта" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {reasons.map((r, i) => {
            const Icon = r.icon
            const isLarge = i === 0
            return (
              <BentoCard key={r.title} dark={isLarge} className={isLarge ? 'md:col-span-2 md:row-span-2' : ''}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isLarge ? 'bg-brand' : 'bg-surface-dark/5'}`}>
                  <Icon className={`w-6 h-6 ${isLarge ? 'text-white' : 'text-surface-dark'}`} />
                </div>
                <h3 className={`font-heading font-semibold ${isLarge ? 'text-2xl md:text-3xl text-white' : 'text-lg text-text-main'}`}>
                  {r.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isLarge ? 'text-white/70 text-base' : 'text-text-muted'}`}>
                  {r.desc}
                </p>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard className="items-center text-center py-8">
            <span className="text-4xl font-heading font-bold text-brand">4.9/5</span>
            <span className="text-sm text-text-muted">Средняя оценка</span>
          </BentoCard>
          <BentoCard className="items-center text-center py-8">
            <span className="text-4xl font-heading font-bold text-brand">98%</span>
            <span className="text-sm text-text-muted">Клиентов рекомендуют</span>
          </BentoCard>
          <BentoCard className="items-center text-center py-8">
            <span className="text-4xl font-heading font-bold text-brand">0₸</span>
            <span className="text-sm text-text-muted">За консультацию</span>
          </BentoCard>
        </div>
      </section>

      <CTA />
    </main>
  )
}
