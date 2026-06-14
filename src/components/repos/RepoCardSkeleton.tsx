export default function RepoCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="h-4 w-2/5 rounded bg-white/10 animate-pulse" />
        <div className="h-4 w-8 rounded-full bg-white/10 animate-pulse" />
      </div>
      <div className="space-y-1.5">
        <div className="h-3 w-full rounded bg-white/10 animate-pulse" />
        <div className="h-3 w-3/4 rounded bg-white/10 animate-pulse" />
      </div>
      <div className="flex gap-4">
        <div className="h-3 w-16 rounded bg-white/10 animate-pulse" />
        <div className="h-3 w-10 rounded bg-white/10 animate-pulse" />
        <div className="h-3 w-10 rounded bg-white/10 animate-pulse" />
      </div>
    </div>
  )
}
