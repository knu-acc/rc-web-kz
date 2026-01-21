/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
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
