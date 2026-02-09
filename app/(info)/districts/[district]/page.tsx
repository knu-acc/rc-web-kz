import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { getDistrictBySlug, getAllDistrictSlugs, almatyDistricts } from '@/data/districts'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateLocalBusinessSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return getAllDistrictSlugs().map((slug) => ({
    district: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ district: string }>
}): Promise<Metadata> {
  const { district } = await params
  const districtData = getDistrictBySlug(district)

  if (!districtData) {
    return {
      title: 'Район не найден',
    }
  }

  const title = `Создание сайтов в ${districtData.nameFull} Алматы | RC-WEB.KZ`
  const description = `${districtData.description} От 85 000₸. Срок 5-10 дней. Бесплатная консультация.`

  return {
    title,
    description,
    keywords: [
      ...districtData.keywords,
      'создание сайтов алматы',
      'веб-разработка алматы',
      'заказать сайт алматы',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/districts/${district}`,
      siteName: SITE_CONFIG.name,
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: `${SITE_CONFIG.url}/img/slider4.png`,
          width: 1200,
          height: 630,
          alt: `Создание сайтов в ${districtData.nameFull}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/districts/${district}`,
    },
  }
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ district: string }>
}) {
  const { district } = await params
  const districtData = getDistrictBySlug(district)

  if (!districtData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema()
  localBusinessSchema.areaServed = [
    {
      '@type': 'City',
      name: districtData.nameFull,
      containedIn: {
        '@type': 'City',
        name: 'Алматы',
      },
    },
  ]

  const otherDistricts = almatyDistricts.filter((d) => d.slug !== district).slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Районы Алматы', href: '/districts' },
          { name: districtData.nameFull, href: `/districts/${district}` },
        ]}
      />

      <section className="pt-12 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-950 dark:to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              {districtData.nameFull}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white leading-tight mb-6">
              Создание сайтов в <span className="gradient-text">{districtData.nameFull}</span>
            </h1>

            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {districtData.description} Профессиональная разработка веб-сайтов с выездом на встречу. От 85 000₸. Срок 5-10 дней.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp inline-flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Написать в WhatsApp
              </a>
              <Link href="/contact" className="btn-outline">
                Заказать консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-secondary-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">
              Наши услуги в {districtData.nameFull}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Landing Page</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  Одностраничный сайт для рекламы. Идеально подходит для запуска контекстной рекламы.
                </p>
                <Link href="/landing-page" className="text-primary-600 hover:text-primary-700 font-medium">
                  Узнать больше →
                </Link>
              </div>

              <div className="bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Корпоративный сайт</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  Многостраничный сайт для представления компании. Подходит для SEO-продвижения.
                </p>
                <Link href="/corporate-site" className="text-primary-600 hover:text-primary-700 font-medium">
                  Узнать больше →
                </Link>
              </div>

              <div className="bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Интернет-магазин</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  Полнофункциональный магазин с корзиной, оплатой и доставкой.
                </p>
                <Link href="/online-store" className="text-primary-600 hover:text-primary-700 font-medium">
                  Узнать больше →
                </Link>
              </div>

              <div className="bg-secondary-50 dark:bg-secondary-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">SEO-оптимизация</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  Продвижение сайта в поисковых системах Google и Яндекс.
                </p>
                <Link href="/seo-optimization" className="text-primary-600 hover:text-primary-700 font-medium">
                  Узнать больше →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary-50/50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">
              Почему выбирают нас в {districtData.nameFull}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Быстро</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  Срок разработки 5-10 дней в зависимости от типа сайта
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Качественно</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  120+ успешных проектов с гарантией качества
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Доступно</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  От 85 000₸ с возможностью рассрочки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готовы создать сайт в {districtData.nameFull}?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Получите бесплатную консультацию и расчёт стоимости вашего проекта
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp bg-white text-primary-600 hover:bg-gray-100">
                Написать в WhatsApp
              </a>
              <Link href="/contact" className="btn-outline bg-transparent border-white text-white hover:bg-white/10">
                Заполнить форму
              </Link>
            </div>
          </div>
        </div>
      </section>

      {otherDistricts.length > 0 && (
        <section className="section bg-white dark:bg-secondary-950">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md text-center mb-8">
                Мы работаем и в других районах Алматы
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {otherDistricts.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/districts/${d.slug}`}
                    className="bg-secondary-50 dark:bg-secondary-900 rounded-xl p-4 text-center hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                  >
                    <p className="font-medium text-secondary-900 dark:text-white">
                      {d.nameFull}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/districts" className="text-primary-600 hover:text-primary-700 font-medium">
                  Все районы Алматы →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
