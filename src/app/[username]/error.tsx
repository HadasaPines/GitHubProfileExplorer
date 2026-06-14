'use client'

import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-red-400">!</p>
      <h2 className="mt-4 text-xl font-semibold text-white">Something went wrong</h2>
      <p className="mt-2 text-gray-400">{error.message}</p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={unstable_retry}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
        >
          Try again
        </button>
        <Link
          href={ROUTES.HOME}
          className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
