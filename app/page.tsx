import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { SITE_CONFIG } from '@/lib/constants'
import { generateFAQPageSchema } from '@/lib/schema'
import { faqItems } from '@/data/faq'

// Lazy load компонентов ниже fold для улучшения First Contentful Paint
const Benefits = dynamic(() => import('@/components/sections/Benefits').then(mod => ({ default: mod.Benefits })), {
  loading: () => null,
})
const Portfolio = dynamic(() => import('@/components/sections/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => null,
})
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => ({ default: mod.FAQ })), {
  loading: () => null,
})

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
  alternates: {
    canonical: SITE_CONFIG.url,
  },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <FAQ />
    </>
  )
}
