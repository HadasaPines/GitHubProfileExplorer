import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/githubService";
import { QUERY_KEYS } from "@/constants/api";

export function useGitHubUser(username: string) {
  return useQuery({
    queryKey: QUERY_KEYS.USER(username),
    queryFn: () => getUser(username),
    enabled: !!username,
  });
}
