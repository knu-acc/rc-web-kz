'use client'

import dynamic from 'next/dynamic'

// Lazy load клиентских компонентов для уменьшения работы в основном потоке
const Analytics = dynamic(() => import('@/lib/analytics').then(mod => ({ default: mod.Analytics })), {
  ssr: false, // Analytics не нужен для SSR
})
const BackToTop = dynamic(() => import('@/components/ui/BackToTop').then(mod => ({ default: mod.BackToTop })), {
  ssr: false,
})
const ServiceWorker = dynamic(() => import('@/components/ui/ServiceWorker').then(mod => ({ default: mod.ServiceWorker })), {
  ssr: false,
})

export function ClientComponents() {
  return (
    <>
      <BackToTop />
      <ServiceWorker />
      <Analytics />
    </>
  )
}
