import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/Skeleton'

export default function BlogLoading() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-2xl mx-auto mb-12">
        <Skeleton variant="rectangular" height={48} className="mb-4" />
        <SkeletonText lines={2} className="max-w-md" />
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" width={120} height={40} className="rounded-full" />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={`blog-skeleton-${i}`} />
        ))}
      </div>
    </div>
  )
}
