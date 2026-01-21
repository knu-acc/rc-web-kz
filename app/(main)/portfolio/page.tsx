import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { generateCollectionPageSchema, generateItemListSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Портфолио работ',
  description: 'Портфолио выполненных работ по созданию сайтов в Алматы. Примеры корпоративных сайтов, интернет-магазинов, лендингов и сайтов на Tilda.',
  keywords: [
    'портфолио сайтов Алматы',
    'примеры сайтов Алматы',
    'готовые сайты Алматы',
    'работы веб-разработчика Алматы',
  ],
  openGraph: {
    title: 'Портфолио работ | Создание сайтов в Алматы',
    description: 'Портфолио выполненных работ по созданию сайтов в Алматы. Примеры корпоративных сайтов, интернет-магазинов, лендингов.',
    url: `${SITE_CONFIG.url}/portfolio`,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider3.png`,
        width: 1200,
        height: 630,
        alt: 'Портфолио работ',
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
}

export default function PortfolioPage() {
  const collectionSchema = generateCollectionPageSchema()
  const itemListSchema = generateItemListSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: SITE_CONFIG.url },
    { name: 'Портфолио', url: `${SITE_CONFIG.url}/portfolio` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Section with proper top padding */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-violet-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium">
                Портфолио
              </span>
              
              {/* Title - smaller size */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                Примеры <span className="gradient-text">выполненных работ</span>
              </h1>
              
              <p className="text-lg text-secondary-600 leading-relaxed max-w-lg">
                Создание сайтов в Алматы - полное портфолио проектов. Каждый сайт уникален и создан под задачи клиента.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href={SOCIAL_LINKS.whatsapp} className="btn-whatsapp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Обсудить проект
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Позвонить
                </a>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/img/slider3.png"
                alt="Портфолио работ по созданию сайтов в Алматы"
                width={600}
                height={450}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md">
              Все проекты
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <article 
                key={item.id} 
                className="group bg-white rounded-2xl border border-secondary-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} - пример работы`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                
                {/* Content - flex-grow to push button down */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-secondary-800 text-sm font-medium mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-600 mb-6 flex-grow">{item.description}</p>
                  
                  {/* Button aligned to bottom */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark w-full justify-center mt-auto"
                  >
                    Открыть сайт
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
