import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { blogPosts } from '@/data/blog'
import { getAllDistrictSlugs } from '@/data/districts'
import { cities } from '@/data/cities'
import { industries } from '@/data/industries'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const now = new Date()

  // Blog routes with freshness-based priority
  const blogRoutes = blogPosts.map((post) => {
    const postDate = new Date(post.date)
    const daysSincePublished = Math.floor((Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24))

    let priority = 0.7
    let changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly'

    if (daysSincePublished < 30) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (daysSincePublished < 90) {
      priority = 0.8
      changeFrequency = 'monthly'
    }

    if (post.category === 'seo' || post.category === 'guides') {
      priority = Math.min(priority + 0.1, 1.0)
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency,
      priority,
    }
  })

  // City pages
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // District pages
  const districtRoutes = getAllDistrictSlugs().map((slug) => ({
    url: `${baseUrl}/districts/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Industry pages
  const industryRoutes = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const routes = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Main service pages
    {
      url: `${baseUrl}/landing-page`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate-site`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/online-store`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tilda-site`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Additional service pages
    {
      url: `${baseUrl}/seo-optimization`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-advertising`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web-design`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-for-company`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publish-website`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/website-price`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Information pages
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programming-courses`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-to-create-website`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/free-website`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/why-choose-us`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // About & process pages
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/technologies`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    // Cities index
    {
      url: `${baseUrl}/cities`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Industries index
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Districts index
    {
      url: `${baseUrl}/districts`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kak-dobratsya`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [...routes, ...cityRoutes, ...industryRoutes, ...districtRoutes, ...blogRoutes]
}
