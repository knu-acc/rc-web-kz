import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { SITE_CONFIG } from '@/lib/constants'
import { generateFAQPageSchema } from '@/lib/schema'
import { faqItems } from '@/data/faq'

// Lazy load компонентов ниже fold для улучшения First Contentful Paint и уменьшения работы в основном потоке
const Benefits = dynamic(() => import('@/components/sections/Benefits').then(mod => ({ default: mod.Benefits })), {
  loading: () => null,
  ssr: true, // SSR для SEO, но загружается после критического контента
})
const Portfolio = dynamic(() => import('@/components/sections/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => null,
  ssr: true,
})
const BlogPreview = dynamic(() => import('@/components/sections/BlogPreview').then(mod => ({ default: mod.BlogPreview })), {
  loading: () => null,
  ssr: true,
})
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => ({ default: mod.FAQ })), {
  loading: () => null,
  ssr: true,
})

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    'создание сайтов Алматы',
    'разработка сайтов Алматы',
    'веб-разработка',
    'landing page',
    'корпоративный сайт',
    'интернет-магазин',
    'заказать сайт Алматы',
    'сайт под ключ Алматы',
    'веб-студия Алматы',
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Создание сайтов в Алматы',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/img/slider4.png`],
  },
}

export default function HomePage() {
  const faqSchema = generateFAQPageSchema(faqItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Stats />
      <Services />
      <Benefits />
      <Portfolio />
      <BlogPreview />
      <FAQ />
    </>
  )
}
