import { formatNumber, formatRelativeTime } from "@/utils/format";
import { getLanguageColor } from "@/utils/github";
import type { GitHubRepo } from "@/types/github";

interface RepoCardProps {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-blue-400 hover:underline">{repo.name}</h3>
        {repo.fork && (
          <span className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-xs text-gray-500">
            fork
          </span>
        )}
      </div>

      {repo.description && (
        <p className="text-sm text-gray-400 line-clamp-2">{repo.description}</p>
      )}

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        <span>★ {formatNumber(repo.stargazers_count)}</span>
        <span>⑂ {formatNumber(repo.forks_count)}</span>
        <span>Updated {formatRelativeTime(repo.updated_at)}</span>
      </div>
    </a>
  );
}
