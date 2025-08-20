"use client";

import { useEffect, useMemo, useState } from "react";
import EventForm from "../../components/EventForm";
import EventList from "../../components/EventList";

export type EventItem = { id: string; name: string; date: string };

function formatDate(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00`);
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(d);
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [query, setQuery] = useState("");

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("events");
      if (raw) setEvents(JSON.parse(raw));
    } catch {}
  }, []);

  // save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("events", JSON.stringify(events));
    } catch {}
  }, [events]);

  function handleAdd(name: string, date: string) {
    const newItem: EventItem = { id: crypto.randomUUID(), name: name.trim(), date };
    setEvents((prev) => [newItem, ...prev]);
  }
  function handleDelete(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return events;
    return events.filter((e) => e.name.toLowerCase().includes(q));
  }, [events, query]);

  return (
    <main className="mx-auto max-w-md px-4 py-6">
      <h1 className="text-2xl font-semibold tracking-tight text-center">Mini Event Manager</h1>
      <p className="text-sm text-gray-500 mt-1 text-center">Add events (client-side only).</p>

      <section className="mt-6">
        <EventForm onAdd={handleAdd} />
      </section>

      <div className="mt-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by event name..."
          className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-white 
             focus:outline-none focus:ring focus:ring-blue-500
             [color-scheme:dark]"
        />
      </div>

      <section className="mt-4">
        <EventList events={filtered} onDelete={handleDelete} formatDate={formatDate} />
        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-500 mt-4">
            {events.length === 0 ? "No events yet. Add your first one!" : "No matches for your search."}
          </p>
        )}
      </section>
    </main>
  );
}
