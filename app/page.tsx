import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { SITE_CONFIG } from '@/lib/constants'
import { generateFAQPageSchema } from '@/lib/schema'
import { faqItems } from '@/data/faq'
import { LogosStrip } from '@/components/sections/LogosStrip'
import { PainPoints } from '@/components/sections/PainPoints'
import { Services } from '@/components/sections/Services'

// Lazy load компонентов ниже fold для улучшения First Contentful Paint
const Benefits = dynamic(() => import('@/components/sections/Benefits').then(mod => ({ default: mod.Benefits })), {
  loading: () => null,
  ssr: true,
})
const Portfolio = dynamic(() => import('@/components/sections/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => null,
  ssr: true,
})
const ProcessSteps = dynamic(() => import('@/components/sections/ProcessSteps').then(mod => ({ default: mod.ProcessSteps })), {
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
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => ({ default: mod.CTA })), {
  loading: () => null,
  ssr: true,
})

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: 'Веб-студия RC-WEB.KZ в Алматы — создание сайтов на Next.js от 85 000₸. 120+ проектов, SEO-оптимизация, адаптивный дизайн, техподдержка 30 дней. Лендинги, корпоративные сайты, интернет-магазины. Срок 7–10 дней.',
  keywords: [
    'создание сайтов Алматы',
    'разработка сайтов Алматы',
    'веб-студия Алматы',
    'разработка сайтов на Next.js Казахстан',
    'веб-разработка Алматы',
    'landing page Алматы',
    'корпоративный сайт Алматы',
    'интернет-магазин Алматы',
    'заказать сайт Алматы',
    'сайт под ключ Алматы',
    'создание сайтов КЗ',
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: 'Веб-студия в Алматы — сайты на Next.js от 85 000₸. 120+ проектов под ключ с SEO-оптимизацией.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/img/slider4.png`,
        width: 1200,
        height: 630,
        alt: 'Веб-студия RC-WEB.KZ — создание сайтов в Алматы',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: 'Веб-студия в Алматы — сайты на Next.js от 85 000₸. SEO, адаптив, 30 дней поддержки.',
    images: [`${SITE_CONFIG.url}/img/slider4.png`],
  },
}

export default function HomePage() {
  const faqSchema = generateFAQPageSchema(faqItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* P1: Hero → LogosStrip → Stats (выше fold) */}
      <Hero />
      <LogosStrip />
      <Stats />
      {/* P2: Empathy → Services → Benefits (основной конверсионный блок) */}
      <PainPoints />
      <Services />
      <Benefits />
      {/* P3: Социальное доказательство + процесс */}
      <Portfolio />
      <ProcessSteps />
      {/* P4: Контент и конверсия */}
      <BlogPreview />
      <FAQ />
      <CTA />
    </>
  )
}
