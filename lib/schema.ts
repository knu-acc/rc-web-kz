import { SITE_CONFIG } from './constants'
import { FAQItem } from '@/types'
import { portfolioItems } from '@/data/portfolio'
import { almatyDistricts } from '@/data/districts'

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
    legalName: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/img/logo.png`,
    image: `${SITE_CONFIG.url}/img/slider4.png`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion || 'Алматинская область',
      postalCode: SITE_CONFIG.address.postalCode || '050000',
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(SITE_CONFIG.geo.latitude),
      longitude: parseFloat(SITE_CONFIG.geo.longitude),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Алматы',
      },
      ...almatyDistricts.map((district) => ({
        '@type': 'City',
        name: district.nameFull,
        containedIn: {
          '@type': 'City',
          name: 'Алматы',
        },
      })),
    ],
    priceRange: SITE_CONFIG.priceRange,
    paymentAccepted: ['Cash', 'Bank Transfer', 'Kaspi', 'CloudPayments'],
    currenciesAccepted: 'KZT',
    priceCurrency: 'KZT',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.aggregateRating.ratingValue,
      reviewCount: SITE_CONFIG.aggregateRating.reviewCount,
      bestRating: SITE_CONFIG.aggregateRating.bestRating,
      worstRating: SITE_CONFIG.aggregateRating.worstRating,
    },
    sameAs: [
      SITE_CONFIG.whatsapp,
      SITE_CONFIG.telegram,
      'https://www.instagram.com/rc.web.kz/',
    ],
    foundingDate: SITE_CONFIG.foundingDate,
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

export function generateArticleSchema(article: {
  title: string
  description: string
  datePublished: string
  author: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/img/logo.png`,
      },
    },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image,
      },
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}
