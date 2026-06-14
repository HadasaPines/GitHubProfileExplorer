'use client'

import { useParams, usePathname, notFound } from 'next/navigation'
import Link from 'next/link'
import { useGitHubUser } from '@/hooks/useGitHubUser'
import ProfileCard from '@/components/profile/ProfileCard'
import StatsGrid from '@/components/profile/StatsGrid'
import Spinner from '@/components/ui/Spinner'
import { ROUTES } from '@/constants/routes'

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>()
  const pathname = usePathname()
  const { data: user, isLoading, isError, error } = useGitHubUser(username)

  const tabs = [
    { label: 'Repositories', href: ROUTES.REPOS(username) },
    { label: 'Activity', href: ROUTES.ACTIVITY(username) },
  ]

  if (isLoading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner />
      </div>
    )
  }
  

  if (isError || !user) {
    const status = (error as any)?.status
    if (status === 404) notFound()
    throw new Error((error as any)?.message ?? 'Failed to load profile.')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-col gap-8">
        <ProfileCard user={user} />
        <StatsGrid user={user} />

        <nav className="flex gap-1 border-b border-white/10">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href as any}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-b-2 border-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
