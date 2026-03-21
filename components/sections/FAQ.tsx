import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { faqItems } from '@/data/faq'
import { SITE_CONFIG } from '@/lib/constants'

export function FAQ() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectionHeading
        badge="FAQ"
        title="Частые вопросы"
        description="Ответы на популярные вопросы о создании сайтов"
      />
      <div className="max-w-3xl mx-auto mt-12">
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
