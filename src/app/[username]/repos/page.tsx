'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useGitHubRepos } from '@/hooks/useGitHubRepos'
import RepoList from '@/components/repos/RepoList'
import RepoCardSkeleton from '@/components/repos/RepoCardSkeleton'
import { ROUTES } from '@/constants/routes'

export default function ReposPage() {
  const { username } = useParams<{ username: string }>()
  const { data: repos, isLoading, isError } = useGitHubRepos(username)

  if (isLoading) {
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

  if (isError || !repos) {
    throw new Error('Failed to load repositories.')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href={ROUTES.PROFILE(username) as any}
        className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
      >
        ← @{username}
      </Link>
      <h2 className="mb-4 text-lg font-semibold text-white">
        Repositories
        <span className="ml-2 text-sm font-normal text-gray-400">
          ({repos.length})
        </span>
      </h2>
      <RepoList repos={repos} />
    </div>
  )
}
