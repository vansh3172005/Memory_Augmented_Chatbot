import Link from 'next/link';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="border-b border-slate-800 bg-slate-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold text-cyan-400">Memory Augmented Chatbot</Link>
          <div className="flex gap-4 text-sm text-slate-300">
            <Link href="/memory">Memory</Link>
            <Link href="/graph">Graph</Link>
            <Link href="/evaluation">Evaluation</Link>
            <Link href="/ingest">Ingest</Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
