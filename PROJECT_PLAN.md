# GitHub Profile Explorer — Project Plan

## Overview
A client-side Next.js app that lets you search any GitHub username and explore their profile, repositories, and public activity. Powered entirely by the GitHub REST public API (no auth required).

---

## Stack

| Layer | Library |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data fetching | Axios + React Query (@tanstack/react-query) |
| Client state | Zustand |
| Class utilities | clsx + tailwind-merge |

---

## Folder Structure

```
src/
├── app/                          # Next.js pages (App Router)
│   ├── layout.tsx
│   ├── page.tsx                  # Home / Search
│   └── [username]/
│       ├── page.tsx              # Profile overview
│       ├── repos/page.tsx        # Repositories list
│       └── activity/page.tsx     # Public activity feed
├── components/
│   ├── ui/                       # Generic reusable primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Spinner.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── Avatar.tsx
│   ├── layout/
│   │   └── Header.tsx
│   ├── search/
│   │   └── SearchBar.tsx
│   ├── profile/
│   │   ├── ProfileCard.tsx
│   │   └── StatsGrid.tsx
│   ├── repos/
│   │   ├── RepoCard.tsx
│   │   └── RepoList.tsx
│   └── activity/
│       ├── EventItem.tsx
│       └── ActivityFeed.tsx
├── services/
│   └── githubService.ts          # Pure fetch functions — no React
├── hooks/
│   ├── useGitHubUser.ts          # React Query wrapper for user
│   ├── useGitHubRepos.ts         # React Query wrapper for repos
│   └── useGitHubActivity.ts      # React Query wrapper for events
├── store/
│   └── searchStore.ts            # Zustand: recent searches, current username
├── providers/
│   ├── QueryProvider.tsx         # QueryClientProvider wrapper
│   └── index.tsx                 # Composes all providers (used in layout.tsx)
├── types/
│   ├── api.ts                    # Generic response envelopes
│   ├── github.ts                 # GitHubUser, GitHubRepo, GitHubEvent
│   └── search.ts                 # Search state types
├── constants/
│   ├── api.ts                    # API_ENDPOINTS, QUERY_KEYS
│   └── routes.ts                 # ROUTES object
├── config/
│   └── env.ts                    # Type-safe env vars (API URL, optional token)
├── lib/
│   ├── axios.ts                  # Axios instance with interceptors
│   └── queryClient.ts            # React Query client config
└── utils/
    ├── cn.ts                     # clsx + tailwind-merge helper
    ├── format.ts                 # formatDate, formatNumber
    └── github.ts                 # getLanguageColor, formatEventType
```

---

## Pages

### `app/page.tsx` — Home / Search
- Centered search bar (SearchBar component)
- Input a GitHub username → navigates to `/[username]`
- Shows recent searches from Zustand store

### `app/[username]/page.tsx` — Profile Overview
- ProfileCard: avatar, name, username, bio, location, company, website, join date
- StatsGrid: Repos / Followers / Following / Gists counts
- Tab navigation to /repos and /activity
- ErrorMessage if user not found

### `app/[username]/repos/page.tsx` — Repositories
- RepoList of RepoCard components
- Each card: name, description, language, stars, forks, last updated
- Sorted by last updated
- Spinner while loading

### `app/[username]/activity/page.tsx` — Activity
- ActivityFeed of EventItem components
- Each item: human-readable event label + relative timestamp
- Event types: push, PR, issue, fork, star, etc.
- Spinner while loading

---

## Data Flow

```
GitHub REST API (api.github.com)
        ↓
src/lib/axios.ts           — Axios instance (base URL, optional auth header)
        ↓
src/services/githubService.ts  — getUser(), getRepos(), getEvents()
        ↓
src/hooks/use*.ts          — React Query wrappers (caching, loading, error state)
        ↓
src/components/**          — UI components (just receive data as props)
        ↓
src/app/**/page.tsx        — Pages (call hooks, compose components)
```

---

## Key Files Explained

| File | Purpose |
|---|---|
| `lib/axios.ts` | Single Axios instance. Sets base URL from env, attaches optional GitHub token header, handles 401s |
| `lib/queryClient.ts` | React Query cache config: 5min staleTime, 1 retry, no refetch on focus (protects GitHub rate limit) |
| `services/githubService.ts` | Pure async functions. No React. Could run in Node.js. |
| `hooks/useGitHubUser.ts` | Wraps service with useQuery. Gives components isLoading, isError, data |
| `store/searchStore.ts` | Zustand store. Persists recent searches to localStorage |
| `constants/api.ts` | API_ENDPOINTS and QUERY_KEYS — no magic strings in service/hook files |
| `constants/routes.ts` | ROUTES object — no hardcoded path strings in components |
| `types/github.ts` | TypeScript types mirroring GitHub API responses |
| `utils/cn.ts` | clsx + tailwind-merge — safe Tailwind class merging |
| `providers/index.tsx` | Wraps app with QueryProvider. layout.tsx stays clean |

---

## Build Order

1. `types/github.ts` — define GitHubUser, GitHubRepo, GitHubEvent
2. `types/api.ts` — generic response wrappers
3. `config/env.ts` — environment variables
4. `constants/api.ts` — endpoints + query keys
5. `constants/routes.ts` — route paths
6. `lib/axios.ts` — Axios instance
7. `lib/queryClient.ts` — React Query config
8. `services/githubService.ts` — fetch functions
9. `hooks/useGitHubUser.ts` / `useGitHubRepos.ts` / `useGitHubActivity.ts`
10. `store/searchStore.ts` — Zustand recent searches
11. `providers/QueryProvider.tsx` + `providers/index.tsx`
12. `app/layout.tsx` — wrap with AppProviders
13. `utils/cn.ts`, `utils/format.ts`, `utils/github.ts`
14. `components/ui/*` — Button, Input, Spinner, ErrorMessage, Avatar
15. `components/layout/Header.tsx`
16. `components/profile/ProfileCard.tsx` + `StatsGrid.tsx`
17. `components/repos/RepoCard.tsx` + `RepoList.tsx`
18. `components/activity/EventItem.tsx` + `ActivityFeed.tsx`
19. `components/search/SearchBar.tsx`
20. `app/[username]/page.tsx` — profile page
21. `app/[username]/repos/page.tsx`
22. `app/[username]/activity/page.tsx`
23. `app/page.tsx` — home/search page

---

## GitHub API Endpoints Used

| Data | Endpoint |
|---|---|
| User profile | `GET /users/{username}` |
| Repositories | `GET /users/{username}/repos?sort=updated` |
| Public events | `GET /users/{username}/events/public` |

Rate limit: 60 requests/hour unauthenticated. React Query caching minimizes this.
