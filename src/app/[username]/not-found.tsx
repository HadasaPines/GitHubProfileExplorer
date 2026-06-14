import Link from 'next/link'
import { ROUTES } from '@/constants/routes'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-white">404</p>
      <h2 className="mt-4 text-xl font-semibold text-white">User not found</h2>
      <p className="mt-2 text-gray-400">
        No GitHub account exists with that username.
      </p>
      <Link
        href={ROUTES.HOME}
        className="mt-6 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
      >
        Search again
      </Link>
    </div>
  )
}
