import { generateInfoMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Globe, Server, Shield, ArrowUpRight, Settings, CheckCircle, Wifi, FileCode } from 'lucide-react'

export const metadata = generateInfoMetadata({
  title: 'Как опубликовать сайт',
  description: 'Руководство по публикации сайта: регистрация домена, выбор хостинга, настройка DNS, установка SSL-сертификата, деплой и запуск.',
  keywords: ['опубликовать сайт', 'разместить сайт в интернете', 'хостинг', 'домен', 'ssl сертификат'],
  path: '/publish-website',
})

const steps = [
  {
    icon: Globe,
    step: '1',
    title: 'Регистрация домена',
    desc: 'Домен — адрес вашего сайта в интернете. Для казахстанского бизнеса рекомендуем зону .kz (ps.kz) или .com. Стоимость — от 2 500₸/год. Выбирайте короткое, запоминающееся имя без цифр и дефисов.',
    tips: ['Проверьте доступность на ps.kz', 'Зарегистрируйте на своё имя/ИИН', 'Оплатите сразу на 2-3 года'],
  },
  {
    icon: Server,
    step: '2',
    title: 'Выбор хостинга',
    desc: 'Хостинг — сервер, где хранятся файлы вашего сайта. Для лендингов подойдёт shared-хостинг, для больших проектов — VPS. Для Next.js рекомендуем Vercel — бесплатный тариф покрывает большинство задач.',
    tips: ['Shared-хостинг: от 1 500₸/мес', 'VPS: от 5 000₸/мес', 'Vercel: бесплатно для Next.js'],
  },
  {
    icon: Wifi,
    step: '3',
    title: 'Настройка DNS',
    desc: 'DNS связывает доменное имя с IP-адресом хостинга. Зайдите в панель управления домена и укажите NS-серверы хостинга или добавьте A-запись с IP-адресом сервера. Изменения вступают в силу за 1-24 часа.',
    tips: ['Пропишите NS-серверы хостинга', 'Или добавьте A-запись с IP', 'Ожидайте до 24 часов'],
  },
  {
    icon: Shield,
    step: '4',
    title: 'SSL-сертификат',
    desc: 'SSL обеспечивает шифрование данных между сайтом и браузером. Без SSL сайт помечается как «небезопасный». Большинство хостингов предлагают бесплатный Let\'s Encrypt сертификат.',
    tips: ['Бесплатно через Let\'s Encrypt', 'Обязателен для SEO', 'Автообновление каждые 90 дней'],
  },
  {
    icon: ArrowUpRight,
    step: '5',
    title: 'Загрузка файлов',
    desc: 'Загрузите файлы сайта на хостинг через FTP (FileZilla) или панель управления. Для проектов на Git — настройте автоматический деплой через GitHub Actions или Vercel.',
    tips: ['FTP для простых сайтов', 'Git-деплой для Next.js', 'Проверьте права на файлы'],
  },
  {
    icon: Settings,
    step: '6',
    title: 'Финальная настройка',
    desc: 'После загрузки проверьте работу сайта, настройте редиректы с www на без-www, подключите аналитику (Google Analytics, Яндекс.Метрика), добавьте сайт в Google Search Console.',
    tips: ['Настройте 301-редиректы', 'Подключите аналитику', 'Добавьте в Search Console'],
  },
]

const checklist = [
  'Домен зарегистрирован и оплачен',
  'Хостинг выбран и настроен',
  'DNS указывает на хостинг',
  'SSL-сертификат установлен',
  'Файлы загружены на сервер',
  'Сайт открывается по HTTPS',
  'Редирект с www настроен',
  'Google Analytics подключён',
  'Яндекс.Метрика подключена',
  'Сайт добавлен в Search Console',
]

export default function PublishWebsitePage() {
  return (
    <main className="bg-canvas min-h-screen">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Как опубликовать сайт', href: '/publish-website' }]} />

      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <BentoCard dark className="py-16 md:py-24 px-8 text-center items-center">
          <Badge>Гайд</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white">
            Как опубликовать сайт
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Пошаговая инструкция: от регистрации домена до запуска сайта в интернете.
          </p>
        </BentoCard>
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto space-y-4">
        {steps.map((s) => {
          const Icon = s.icon
          return (
            <BentoCard key={s.step} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-heading font-bold text-brand/20">{s.step}</span>
                <div className="w-12 h-12 rounded-2xl bg-surface-dark/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-surface-dark" />
                </div>
                <h2 className="text-xl font-heading font-bold text-text-main">{s.title}</h2>
              </div>
              <p className="text-text-muted leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {s.tips.map((tip) => (
                  <span key={tip} className="text-xs bg-surface-dark/5 text-brand px-3 py-1.5 rounded-full">{tip}</span>
                ))}
              </div>
            </BentoCard>
          )
        })}
      </section>

      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <BentoCard className="p-8">
          <h2 className="text-2xl font-heading font-bold text-text-main">Чек-лист публикации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-text-muted">
                <CheckCircle className="w-4 h-4 text-surface-dark flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>

      <CTA />
    </main>
  )
}
