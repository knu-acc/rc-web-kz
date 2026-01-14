import { SITE_CONFIG } from './constants'
import { FAQItem } from '@/types'
import { portfolioItems } from '@/data/portfolio'

export interface ReviewData {
  author: string
  reviewBody: string
  rating: number
  datePublished?: string
}

export function generateReviewSchema(reviews: ReviewData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}#reviews`,
    name: SITE_CONFIG.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: reviews.length.toString(),
      reviewCount: reviews.length.toString(),
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      datePublished: review.datePublished || new Date().toISOString().split('T')[0],
    })),
  }
}

export function generateAggregateRatingSchema(ratingValue: string, reviewCount: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      bestRating: '5',
      worstRating: '1',
      reviewCount,
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: 'Алматинская область',
      addressCountry: SITE_CONFIG.address.addressCountry,
      streetAddress: SITE_CONFIG.region,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(SITE_CONFIG.geo.latitude),
      longitude: parseFloat(SITE_CONFIG.geo.longitude),
    },
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.region,
    },
    priceRange: SITE_CONFIG.priceRange,
    openingHours: SITE_CONFIG.businessHours,
    sameAs: [SITE_CONFIG.whatsapp, SITE_CONFIG.telegram],
    image: `${SITE_CONFIG.url}/images/logo.png`,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      areaServed: 'KZ',
      availableLanguage: 'Russian',
    },
    sameAs: [SITE_CONFIG.whatsapp, SITE_CONFIG.telegram],
  }
}

export function generateFAQPageSchema(faqItems: FAQItem[]) {
  return {
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
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateCollectionPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Портфолио работ по созданию сайтов',
    description: 'Примеры выполненных работ по разработке веб-сайтов в Алматы',
    url: `${SITE_CONFIG.url}/portfolio`,
  }
}

export function generateItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: portfolioItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.title,
        description: item.description,
        image: `${SITE_CONFIG.url}${item.image}`,
        url: item.url,
      },
    })),
  }
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Контакты',
    description: 'Свяжитесь со мной для заказа создания сайта в Алматы',
    url: `${SITE_CONFIG.url}/contact`,
  }
}

export function generateServiceSchema(service: { 
  name: string
  description: string
  price?: string
  priceCurrency?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: service.priceCurrency || 'KZT',
      },
    }),
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.region,
    },
  }
}
