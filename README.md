# GitHub Profile Explorer

A client-side Next.js app for searching any GitHub username and exploring their profile, repositories, and public activity — powered entirely by the public GitHub REST API, no authentication required.

## Features

- Search any GitHub user by username
- Profile overview: avatar, bio, location, company, website, join date
- Stats: public repos, followers, following, gists
- Repositories list sorted by last updated, with language, stars, forks, and topics
- Public activity feed with human-readable event labels
- Recent searches persisted to localStorage
- Skeleton loading states on all data pages
- 404 and error pages using Next.js file conventions

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Data fetching | Axios + TanStack React Query v5 |
| Client state | Zustand v5 |
| Class utilities | clsx + tailwind-merge |

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```



### 2. Run the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                     # Pages (Next.js App Router)
│   ├── page.tsx             # Home / search
│   └── [username]/
│       ├── page.tsx         # Profile overview
│       ├── not-found.tsx    # 404 — user not found
│       ├── error.tsx        # Error boundary with retry
│       ├── repos/
│       │   ├── page.tsx     # Repositories list
│       │   └── loading.tsx  # Skeleton shown on navigation
│       └── activity/
│           └── page.tsx     # Public activity feed
├── components/              # UI components (receive data as props)
├── hooks/                   # React Query wrappers
├── services/                # Pure GitHub API fetch functions
├── store/                   # Zustand store (recent searches)
├── types/                   # TypeScript types for GitHub API
├── constants/               # API endpoints, query keys, routes
├── lib/                     # Axios instance, React Query client
└── utils/                   # cn, formatDate, formatNumber, getLanguageColor
```

## GitHub API Endpoints

| Data | Endpoint |
|---|---|
| User profile | `GET /users/{username}` |
| Repositories | `GET /users/{username}/repos?sort=updated` |
| Public events | `GET /users/{username}/events/public` |

Rate limit: 60 req/hour unauthenticated. React Query caches responses for 5 minutes to minimize requests.
