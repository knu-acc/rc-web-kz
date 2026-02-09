import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import dynamic from 'next/dynamic'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { placeholderReviewImages } from '@/data/reviews'

const ReviewsCarousel = dynamic(() => import('@/components/ui/ReviewsCarousel').then(mod => ({ default: mod.ReviewsCarousel })), { loading: () => null })

export const metadata: Metadata = {
  title: 'Курсы программирования в Алматы | Обучение созданию сайтов',
  description: 'Курсы программирования и создания сайтов в Алматы. Обучение с нуля, практика и опытные преподаватели.',
  keywords: ['курсы программирования Алматы', 'обучение созданию сайтов', 'курсы веб-разработки'],
  openGraph: {
    title: 'Курсы программирования в Алматы',
    description: 'Обучение созданию сайтов и программированию',
    url: `${SITE_CONFIG.url}/programming-courses`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Курсы программирования в Алматы',
      },
    ],
  },
  alternates: { canonical: `${SITE_CONFIG.url}/programming-courses` },
}

const courses = [
  {
    title: 'Курс для новичков',
    description: 'Базовый курс программирования для тех, кто только начинает свой путь в веб-разработке',
    duration: '2 месяца',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    features: ['Основы HTML и CSS', 'JavaScript для начинающих', 'Создание первого сайта'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Создание сайтов на Tilda',
    description: 'Практический курс по работе с конструктором Tilda. Научитесь создавать красивые сайты без программирования',
    duration: '1 месяц',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    features: ['Работа с блоками Tilda', 'Настройка дизайна', 'Публикация сайта'],
    gradient: 'from-violet-500 to-purple-600',
  },
]

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Индивидуальный подход',
    description: 'Каждый ученик получает персональное внимание и помощь в освоении материала',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Практические задания',
    description: 'Обучение через практику — создаёте реальные проекты и получаете опыт работы',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Опытные преподаватели',
    description: 'Преподаватели с большим опытом в веб-разработке и создании сайтов',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Гибкий график',
    description: 'Возможность выбрать удобное время для занятий и учиться в своём темпе',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const studentWorks = [
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'Работа студента 1' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Работа студента 2' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Работа студента 3' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', alt: 'Работа студента 4' },
]

export default function ProgrammingCoursesPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Курсы программирования',
    description: 'Обучение программированию и созданию сайтов в Алматы',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Курсы программирования', url: `${SITE_CONFIG.url}/programming-courses` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
        </div>

        <div className="container-custom py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Курсы программирования в Алматы
              </div>

              <h1 className="heading-xl text-white">
                <span className="block">Обучение</span>
                <span className="gradient-text">созданию сайтов</span>
                <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2">
                  с нуля до профессионала
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                Качественные курсы по программированию и созданию сайтов в Алматы. Индивидуальный подход, 
                опытные преподаватели, практические задания. Начните свой путь к успешной карьере в веб-разработке. 
                Также можете <Link href="/how-to-create-website" className="text-primary-300 hover:underline font-semibold">создать сайт самостоятельно</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                  Записаться на курс
                </a>
                <Link href="/contact" className="btn-secondary">
                  Контакты
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] animate-in">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Курсы программирования в Алматы"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Programs */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Программы
            </span>
            <h2 className="heading-lg mb-6">
              Программы <span className="gradient-text">обучения</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Выберите подходящий курс для вашего уровня
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <div key={course.title} className="group relative overflow-hidden rounded-2xl bg-white border border-secondary-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-secondary-900 dark:text-white font-semibold text-sm">
                    {course.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">{course.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4">{course.description}</p>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={`${course.title}-feature-${feature}`} className="flex items-start gap-2 text-secondary-700 dark:text-secondary-300">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-secondary-900 text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
              Преимущества
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Преимущества <span className="gradient-text">обучения</span>
            </h2>
            <p className="text-lg text-white/80">
              Почему стоит выбрать наши курсы программирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="group relative rounded-3xl p-6 bg-secondary-800 border border-secondary-700 hover:border-secondary-600 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} text-white flex items-center justify-center mb-5`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-white/70 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Works Gallery */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Работы студентов
            </span>
            <h2 className="heading-lg mb-6">
              Примеры работ <span className="gradient-text">студентов</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Сайты, созданные нашими студентами во время обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentWorks.map((work, index) => (
              <div key={work.alt} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-secondary-100">
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Нужны ли начальные знания?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Нет, наши курсы рассчитаны на новичков. Мы начинаем с основ и постепенно переходим к более сложным темам.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Сколько длится обучение?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Продолжительность зависит от выбранного курса: базовый курс — 2 месяца, курс по Tilda — 1 месяц.
                </p>
              </div>
              <div className="bg-white dark:bg-secondary-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Выдаётся ли сертификат?</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Да, после успешного завершения курса вы получаете сертификат о прохождении обучения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel
        reviews={placeholderReviewImages.slice(0, 6)}
        title="Отзывы наших учеников"
        subtitle="Реальные отзывы от учеников, которые прошли наши курсы."
      />

      {/* CTA */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Готовы начать обучение?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и записи на курс программирования
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">Написать в WhatsApp</a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary">Позвонить</a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Связанные услуги</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/how-to-create-website" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Как создать сайт</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Пошаговая инструкция</p>
            </Link>
            <Link href="/tilda-site" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Сайт на Tilda</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Быстрое решение</p>
            </Link>
            <Link href="/contact" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Контакты</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Свяжитесь с нами</p>
            </Link>
            <Link href="/website-price" className="card p-6 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Цены</h3>
              <p className="text-secondary-600 dark:text-secondary-300">Стоимость разработки</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
