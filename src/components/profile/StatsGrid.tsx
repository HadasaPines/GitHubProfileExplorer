import { formatNumber } from "@/utils/format";
import type { GitHubUser } from "@/types/github";

interface StatsGridProps {
  user: GitHubUser;
}

export default function StatsGrid({ user }: StatsGridProps) {
  const stats = [
    { label: "Repositories", value: user.public_repos },
    { label: "Followers", value: user.followers },
    { label: "Following", value: user.following },
    { label: "Gists", value: user.public_gists },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center"
        >
          <p className="text-2xl font-bold text-white">{formatNumber(stat.value)}</p>
          <p className="mt-0.5 text-sm text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
