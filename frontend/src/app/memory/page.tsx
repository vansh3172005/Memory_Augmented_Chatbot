export default function MemoryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <h1 className="text-3xl font-semibold">Memory Dashboard</h1>
        <p className="mt-3 text-slate-300">Long-term memory entries and learned preferences are surfaced here for personalization and context-aware responses.</p>
        <ul className="mt-6 space-y-2 text-slate-300">
          <li>• Preference: likes concise answers</li>
          <li>• Topic: interested in AI systems</li>
        </ul>
      </div>
    </main>
  );
}
