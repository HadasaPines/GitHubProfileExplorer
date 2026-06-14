import Avatar from "@/components/ui/Avatar";
import { formatDate } from "@/utils/format";
import type { GitHubUser } from "@/types/github";

interface ProfileCardProps {
  user: GitHubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const blogUrl =
    user.blog && !user.blog.startsWith("http")
      ? `https://${user.blog}`
      : user.blog;

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
      <Avatar
        src={user.avatar_url}
        alt={user.login}
        size={128}
        className="shrink-0 ring-2 ring-white/10"
      />

      <div className="flex flex-col gap-3">
        <div>
          {user.name && (
            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
          )}
          <p className="text-gray-400">@{user.login}</p>
        </div>

        {user.bio && (
          <p className="max-w-md text-gray-300">{user.bio}</p>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
          {user.location && <span>{user.location}</span>}
          {user.company && <span>{user.company}</span>}
          {user.email && <span>{user.email}</span>}
          {blogUrl && (
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {user.blog}
            </a>
          )}
        </div>

        <p className="text-sm text-gray-500">
          Member since {formatDate(user.created_at)}
        </p>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}
