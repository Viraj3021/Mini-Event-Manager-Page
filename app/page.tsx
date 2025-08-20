import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Mini Event Manager 🎉</h1>
        <p className="text-gray-300">
          Manage your events with Add / List / Delete features.
        </p>
        <Link
          href="/events"
          className="px-6 py-3 bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Go to Events
        </Link>
      </div>
    </main>
  );
}
