'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useGitHubActivity } from '@/hooks/useGitHubActivity'
import ActivityFeed from '@/components/activity/ActivityFeed'
import Spinner from '@/components/ui/Spinner'
import { ROUTES } from '@/constants/routes'

export default function ActivityPage() {
  const { username } = useParams<{ username: string }>()
  const { data: events, isLoading, isError } = useGitHubActivity(username)

  if (isLoading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner />
      </div>
    )
  }

  if (isError || !events) {
    throw new Error((error as any)?.message ?? 'Failed to load activity.')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href={ROUTES.PROFILE(username) as any}
        className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
      >
        ← @{username}
      </Link>
      <h2 className="mb-4 text-lg font-semibold text-white">Recent Activity</h2>
      <ActivityFeed events={events} />
    </div>
  )
}
