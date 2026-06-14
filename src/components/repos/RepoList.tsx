import RepoCard from "./RepoCard";
import type { GitHubRepo } from "@/types/github";

interface RepoListProps {
  repos: GitHubRepo[];
}

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        This user has no public repositories.
      </p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
