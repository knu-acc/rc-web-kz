/** @type {import('next').NextConfig} */
let withBundleAnalyzer = (config) => config
try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
} catch (e) {
  // @next/bundle-analyzer is optional
}

const nextConfig = {
  reactStrictMode: true,
  
  // Статический экспорт для Netlify
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
    unoptimized: true,
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'embla-carousel-react', 'embla-carousel-autoplay'],
  },
  
  // Дополнительные настройки
  trailingSlash: false,
  poweredByHeader: false,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
