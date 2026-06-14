export const ROUTES = {
  HOME: "/",
  PROFILE: (username: string) => `/${username}`,
  REPOS: (username: string) => `/${username}/repos`,
  ACTIVITY: (username: string) => `/${username}/activity`,
} as const;
