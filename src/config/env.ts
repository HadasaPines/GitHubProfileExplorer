export const env = {
  githubApiUrl: process.env.NEXT_PUBLIC_GITHUB_API_URL ?? "https://api.github.com",
  githubToken: process.env.NEXT_PUBLIC_GITHUB_TOKEN ?? "",
} as const;
