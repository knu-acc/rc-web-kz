/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Генерация статических страниц (SSG) для всех основных разделов
  // output: 'export' применяется только в production через package.json script
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 год
    remotePatterns: [
      { protocol: 'https', hostname: 'rc-web.kz' },
      { protocol: 'https', hostname: 'rc-web-kz.netlify.app' },
    ],
    unoptimized: true, // Для статического экспорта
  },
  
  // Сжатие
  compress: true,
  
  experimental: {
    // optimizeCss только для production (в dev тормозит Turbopack)
    optimizeCss: process.env.NODE_ENV === 'production',
    optimizePackageImports: ['lucide-react', 'swiper'],
  },
  
  // Заголовки безопасности и SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // 301 редиректы для миграции с Tilda
  async redirects() {
    return [
      {
        source: '/price',
        destination: '/website-price',
        permanent: true,
      },
      {
        source: '/multi-page',
        destination: '/corporate-site',
        permanent: true,
      },
      {
        source: '/publish',
        destination: '/publish-website',
        permanent: true,
      },
      {
        source: '/design',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/company-website',
        destination: '/website-for-company',
        permanent: true,
      },
      {
        source: '/seo',
        destination: '/seo-optimization',
        permanent: true,
      },
    ]
  },
  
  // Дополнительные настройки
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Оптимизация модулей
  modularizeImports: {
    '@/components/sections': {
      transform: '@/components/sections/{{member}}',
    },
  },
}

module.exports = nextConfig
