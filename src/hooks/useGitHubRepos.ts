import { useQuery } from "@tanstack/react-query";
import { getRepos } from "@/services/githubService";
import { QUERY_KEYS } from "@/constants/api";

export function useGitHubRepos(username: string) {
  return useQuery({
    queryKey: QUERY_KEYS.REPOS(username),
    queryFn: () => getRepos(username),
    enabled: !!username,
  });
}
