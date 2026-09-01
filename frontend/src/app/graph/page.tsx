const nodes = [
  { id: 'user', label: 'User', position: 'left' },
  { id: 'assistant', label: 'Assistant', position: 'center' },
  { id: 'memory', label: 'Memory', position: 'right-top' },
  { id: 'rag', label: 'RAG', position: 'right-bottom' },
];

const edges = [
  'User → Assistant',
  'Assistant → Memory',
  'Assistant → RAG',
  'RAG → Memory',
];

export default function GraphPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <h1 className="text-3xl font-semibold">Knowledge Graph View</h1>
        <p className="mt-3 text-slate-300">This view illustrates the layered relationships between user context, memory, retrieval, and reasoning.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold">Graph Structure</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {nodes.map((node) => (
                <div key={node.id} className="rounded-xl border border-cyan-600/40 bg-slate-900 px-4 py-3 text-sm text-slate-200">
                  {node.label}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold">Relationships</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {edges.map((edge) => (
                <li key={edge} className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
                  {edge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
