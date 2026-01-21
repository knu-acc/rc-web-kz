import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const routes = [
    {
      url: baseUrl,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Main service pages
    {
      url: `${baseUrl}/landing-page`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate-site`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/online-store`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tilda-site`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Additional service pages
    {
      url: `${baseUrl}/seo-optimization`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-advertising`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web-design`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-for-company`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publish-website`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/website-price`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Information pages
    {
      url: `${baseUrl}/reviews`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programming-courses`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-to-create-website`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/free-website`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/why-choose-us`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  return routes
}
