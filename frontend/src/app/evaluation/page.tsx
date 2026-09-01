const metrics = [
  { name: 'Context relevance', score: 0.93, detail: 'How well the retrieved context matches the query intent.' },
  { name: 'Answer correctness', score: 0.89, detail: 'How accurate the generated answer is relative to expected facts.' },
  { name: 'Faithfulness', score: 0.91, detail: 'How well the answer stays grounded in retrieved evidence.' },
];

export default function EvaluationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <h1 className="text-3xl font-semibold">Evaluation Dashboard</h1>
        <p className="mt-3 text-slate-300">The evaluation layer monitors retrieval quality, grounding, and answer reliability for the hybrid RAG system.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.name} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <h2 className="text-lg font-semibold">{metric.name}</h2>
              <p className="mt-3 text-sm text-slate-300">{metric.detail}</p>
              <div className="mt-4 text-3xl font-semibold text-cyan-400">{metric.score.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
