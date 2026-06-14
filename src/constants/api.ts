export const API_ENDPOINTS = {
  USER: (username: string) => `/users/${username}`,
  REPOS: (username: string) => `/users/${username}/repos`,
  EVENTS: (username: string) => `/users/${username}/events/public`,
} as const;

export const QUERY_KEYS = {
  USER: (username: string) => ["user", username] as const,
  REPOS: (username: string) => ["repos", username] as const,
  EVENTS: (username: string) => ["events", username] as const,
} as const;
