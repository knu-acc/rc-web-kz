import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-950" role="status" aria-label="Загрузка...">
      <span className="sr-only">Загрузка страницы...</span>
      {/* Header skeleton */}
      <div className="border-b border-secondary-200 dark:border-secondary-800">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Skeleton variant="rectangular" width={150} height={40} />
            <div className="flex gap-4">
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={100} height={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Skeleton variant="rectangular" width={300} height={40} className="mx-auto" />
          <SkeletonText lines={3} className="max-w-2xl mx-auto" />
          <Skeleton variant="rectangular" width={200} height={50} className="mx-auto" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={`skeleton-${i}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
