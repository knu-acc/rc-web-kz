import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Benefits } from '@/components/sections/Benefits'
import { Portfolio } from '@/components/sections/Portfolio'
import { FAQ } from '@/components/sections/FAQ'
import { StructuredData } from '@/components/sections/StructuredData'
import { SITE_CONFIG } from '@/lib/constants'
import { generateFAQPageSchema, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/schema'
import { faqItems } from '@/data/faq'

export const metadata: Metadata = {
  title: 'Создание сайтов в Алматы | Веб-разработка под ключ',
  description: 'Профессиональная разработка современных веб-сайтов в Алматы. Landing page, корпоративные сайты, интернет-магазины. Уникальный дизайн, SEO-оптимизация, быстрая загрузка.',
  keywords: [
    'создание сайтов Алматы',
    'разработка сайтов',
    'веб-разработка',
    'landing page',
    'корпоративный сайт',
    'интернет-магазин',
  ],
  openGraph: {
    title: 'Создание сайтов в Алматы | Веб-разработка под ключ',
    description: 'Профессиональная разработка современных веб-сайтов в Алматы',
    url: SITE_CONFIG.url,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Создание сайтов в Алматы',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создание сайтов в Алматы | Веб-разработка под ключ',
    description: 'Профессиональная разработка современных веб-сайтов в Алматы',
    images: [`${SITE_CONFIG.url}/img/slider4.png`],
  },
}

export default function HomePage() {
  const faqSchema = generateFAQPageSchema(faqItems)
  const localBusinessSchema = generateLocalBusinessSchema()
  const webSiteSchema = generateWebSiteSchema()

  return (
    <>
      <StructuredData data={[faqSchema, localBusinessSchema, webSiteSchema]} />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <FAQ />
    </>
  )
}
