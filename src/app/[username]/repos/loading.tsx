import RepoCardSkeleton from '@/components/repos/RepoCardSkeleton'

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-4 h-5 w-32 rounded bg-white/10 animate-pulse" />
      <div className="grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <RepoCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
