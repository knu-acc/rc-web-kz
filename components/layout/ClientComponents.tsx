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
const LinkPrefetchProvider = dynamic(() => import('@/components/providers/LinkPrefetchProvider').then(mod => ({ default: mod.LinkPrefetchProvider })), {
  ssr: false,
})
const ProgressBar = dynamic(() => import('@/components/ui/ProgressBar').then(mod => ({ default: mod.ProgressBar })), {
  ssr: false,
})

export function ClientComponents() {
  return (
    <>
      <LinkPrefetchProvider>
        <ProgressBar />
        <BackToTop />
        <ServiceWorker />
        <Analytics />
      </LinkPrefetchProvider>
    </>
  )
}
