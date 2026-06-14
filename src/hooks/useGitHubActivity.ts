import { useQuery } from "@tanstack/react-query";
import { getEvents } from "@/services/githubService";
import { QUERY_KEYS } from "@/constants/api";

export function useGitHubActivity(username: string) {
  return useQuery({
    queryKey: QUERY_KEYS.EVENTS(username),
    queryFn: () => getEvents(username),
    enabled: !!username,
  });
}
