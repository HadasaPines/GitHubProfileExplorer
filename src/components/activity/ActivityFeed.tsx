import EventItem from "./EventItem";
import type { GitHubEvent } from "@/types/github";

interface ActivityFeedProps {
  events: GitHubEvent[];
}

export default function ActivityFeed({ events }: ActivityFeedProps) {
  if (events.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        No recent public activity found.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
