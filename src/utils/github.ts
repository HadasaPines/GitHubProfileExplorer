import type { GitHubEvent } from "@/types/github";

export function formatEventType(event: GitHubEvent): string {
  switch (event.type) {
    case "PushEvent":
      return `Pushed to ${event.repo.name}`;
    case "PullRequestEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Closed"} PR: ${event.payload.pull_request?.title}`;
    case "IssuesEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Closed"} issue: ${event.payload.issue?.title}`;
    case "ForkEvent":
      return `Forked ${event.repo.name}`;
    case "WatchEvent":
      return `Starred ${event.repo.name}`;
    case "CreateEvent":
      return `Created ${event.payload.ref_type} in ${event.repo.name}`;
    case "DeleteEvent":
      return `Deleted ${event.payload.ref_type} in ${event.repo.name}`;
    default:
      return `Activity in ${event.repo.name}`;
  }
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Rust: "#dea584",
    Go: "#00ADD8",
    Java: "#b07219",
    "C++": "#f34b7d",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Ruby: "#701516",
  };
  return colors[language ?? ""] ?? "#8b949e";
}
