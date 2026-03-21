import { Hero } from '@/components/sections/Hero'
import { BentoFeatures } from '@/components/sections/BentoFeatures'
import { Stats } from '@/components/sections/Stats'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { PortfolioPreview } from '@/components/sections/PortfolioPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { InternalLinks } from '@/components/sections/InternalLinks'
import { StructuredData } from '@/components/sections/StructuredData'

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Stats />
      <BentoFeatures />
      <ProcessSteps />
      <PortfolioPreview />
      <Testimonials />
      <InternalLinks />
      <FAQ />
      <CTA />
    </>
  )
}
