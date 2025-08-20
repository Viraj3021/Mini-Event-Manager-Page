"use client";

import { useState } from "react";

export default function EventForm({ onAdd }: { onAdd: (name: string, date: string) => void }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !date) return;
    onAdd(name, date);
    setName("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border p-4 shadow-sm">
      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Event Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Demo Day"
          className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">Date</label>
        <input
          required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg px-4 py-2 text-sm font-medium bg-black text-white hover:opacity-90"
      >
        Add Event
      </button>
    </form>
  );
}
