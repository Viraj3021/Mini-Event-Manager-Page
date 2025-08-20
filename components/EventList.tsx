"use client";

import type { EventItem } from "@/app/events/page";

export default function EventList({
  events,
  onDelete,
  formatDate,
}: {
  events: EventItem[];
  onDelete: (id: string) => void;
  formatDate: (dateStr: string) => string;
}) {
  return (
    <ul className="space-y-2">
      {events.map((e) => (
        <li key={e.id} className="flex items-center justify-between rounded-xl border px-3 py-2">
          <div>
            <p className="text-sm font-medium">{e.name}</p>
            <p className="text-xs text-gray-500">{formatDate(e.date)}</p>
          </div>
          <button
            onClick={() => onDelete(e.id)}
            className="rounded-lg border px-3 py-1 text-xs hover:bg-gray-50"
            aria-label={`Delete ${e.name}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
