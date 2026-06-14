import { formatRelativeTime } from "@/utils/format";
import { formatEventType } from "@/utils/github";
import type { GitHubEvent } from "@/types/github";

interface EventItemProps {
  event: GitHubEvent;
}

export default function EventItem({ event }: EventItemProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
      <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-gray-300">{formatEventType(event)}</p>
        <p className="mt-0.5 text-xs text-gray-500">
          <a
            href={`https://github.com/${event.repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:underline"
          >
            {event.repo.name}
          </a>
          {" · "}
          {formatRelativeTime(event.created_at)}
        </p>
      </div>
    </div>
  );
}
