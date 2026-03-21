import { SITE_CONFIG } from '@/lib/constants'

export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Алматы',
      addressRegion: 'Алматинская область',
      postalCode: '050000',
      addressCountry: 'KZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.2220,
      longitude: 76.8512,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120',
      bestRating: '5',
    },
    priceRange: '$$',
    areaServed: { '@type': 'Country', name: 'Казахстан' },
    foundingDate: '2020',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 5 },
    knowsAbout: ['Web Development', 'SEO', 'Web Design', 'E-commerce'],
    sameAs: [SITE_CONFIG.telegram],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: 'ru',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}
