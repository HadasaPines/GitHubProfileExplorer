import apiClient from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api";
import type { GitHubUser, GitHubRepo, GitHubEvent } from "@/types/github";

export async function getUser(username: string): Promise<GitHubUser> {
  const response = await apiClient.get<GitHubUser>(
    API_ENDPOINTS.USER(username)
  );
  return response.data;
}

export async function getRepos(username: string): Promise<GitHubRepo[]> {
  setTimeout(() => {
    console.log("Simulating network delay for getRepos");
  }, 2000);
  const response = await apiClient.get<GitHubRepo[]>(
    API_ENDPOINTS.REPOS(username),
    { params: { sort: "updated", per_page: 30 } }
  );
  return response.data;
}

export async function getEvents(username: string): Promise<GitHubEvent[]> {
  const response = await apiClient.get<GitHubEvent[]>(
    API_ENDPOINTS.EVENTS(username),
    { params: { per_page: 30 } }
  );
  return response.data;
}
