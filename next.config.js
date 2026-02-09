/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  
  // Статический экспорт для обычного хостинга
  output: 'export',
  
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
    // Для статического экспорта нужно отключить оптимизацию или использовать unoptimized
    unoptimized: true,
  },
  
  // Сжатие (не работает со статическим экспортом, настраивается на сервере)
  // compress: true,
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'embla-carousel-react', 'embla-carousel-autoplay'],
  },
  
  // Turbopack конфигурация (для Next.js 16+)
  // Добавляем пустую конфигурацию для избежания конфликта с webpack
  turbopack: {},
  
  // Performance Budget - предупреждения при превышении размера бандла
  // Используем webpack только если явно указан флаг --webpack
  ...(process.env.NEXT_PRIVATE_TURBOPACK === 'false' && {
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
  
  // Заголовки безопасности и SEO
  // Примечание: headers() не работает со статическим экспортом
  // Заголовки нужно настраивать на уровне веб-сервера (Apache .htaccess или Nginx)
  // Файл .htaccess создан в public/.htaccess - скопируйте его в корень после сборки
  
  // 301 редиректы для миграции с Tilda
  // Примечание: redirects() не работает со статическим экспортом
  // Редиректы нужно настроить в .htaccess или на уровне веб-сервера
  // async redirects() {
  //   return []
  // },
  
  // Дополнительные настройки
  trailingSlash: false,
  poweredByHeader: false,
  // generateEtags не работает со статическим экспортом
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Оптимизация TypeScript
  typescript: {
    // При продакшн-сборке не останавливаться на ошибках типов (lint делать отдельно)
    ignoreBuildErrors: false,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
