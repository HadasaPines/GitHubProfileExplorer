export interface GitHubUser {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  email: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  fork: boolean;
  private: boolean;
  updated_at: string;
  created_at: string;
  topics: string[];
}

export interface GitHubEventPayload {
  action?: string;
  ref?: string;
  ref_type?: string;
  commits?: { message: string; sha: string }[];
  pull_request?: { title: string; number: number };
  issue?: { title: string; number: number };
  forkee?: { full_name: string };
}

export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: GitHubEventPayload;
}
