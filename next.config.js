/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'rc-web.kz' },
      { protocol: 'https', hostname: 'rc-web-kz.netlify.app' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    // Оптимизация включена для автоматической конвертации в WebP/AVIF
    unoptimized: false,
  },
  
  // Сжатие
  compress: true,
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'swiper'],
    // Inline CSS для улучшения FCP и LCP (особенно полезно для Tailwind CSS)
    inlineCss: true,
  },
  
  // Performance Budget - предупреждения при превышении размера бандла
  // Используем webpack только если не используется Turbopack
  ...(process.env.NEXT_PRIVATE_TURBOPACK !== 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.performance = {
          maxAssetSize: 250000, // 250 KB
          maxEntrypointSize: 250000, // 250 KB
          hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
        }
      }
      return config
    },
  }),
  
  // Turbopack конфигурация (для Next.js 16+)
  turbopack: {},
  
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
            value: 'max-age=63072000; includeSubDomains; preload' // 2 года с preload
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Content Security Policy
          // ВАЖНО: Для production рекомендуется использовать nonce для inline scripts
          // См. документацию: https://nextjs.org/docs/app/api-reference/next-config-js/headers
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://mc.yandex.ru https://api-maps.yandex.ru",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://www.google-analytics.com https://mc.yandex.ru https://api-maps.yandex.ru",
              "frame-src 'self' https://www.googletagmanager.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
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
}

module.exports = withBundleAnalyzer(nextConfig)
