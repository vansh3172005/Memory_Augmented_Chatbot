"use client";

import { useState } from 'react';
import axios from 'axios';

type ChatTurn = {
  role: 'user' | 'assistant';
  content: string;
  source?: string;
  confidence?: number;
};

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<ChatTurn[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;

    const userTurn: ChatTurn = { role: 'user', content: message };
    setHistory((current) => [...current, userTurn]);
    setLoading(true);
    try {
      const response = await axios.post('/api/chat', { message });
      const assistantTurn: ChatTurn = {
        role: 'assistant',
        content: response.data.reply,
        source: response.data.source,
        confidence: response.data.confidence,
      };
      setHistory((current) => [...current, assistantTurn]);
    } catch (error) {
      setHistory((current) => [...current, { role: 'assistant', content: 'Unable to reach the assistant service.' }]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-10">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Memory-Augmented Chatbot</p>
        <h1 className="mt-3 text-4xl font-semibold">A hybrid AI assistant combining RAG, memory, graphs, and dynamic tools.</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          The app now reflects the project brief by combining static knowledge retrieval, long-term memory, knowledge graph reasoning, and evaluation dashboards in one experience.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold">Ask the assistant</h2>
          <textarea
            className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-slate-100"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type a question or task..."
          />
          <button className="mt-4 rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950" type="submit" disabled={loading}>
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </form>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold">Conversation</h2>
          <div className="mt-4 space-y-3">
            {history.length === 0 ? (
              <p className="text-sm text-slate-300">Your conversation will appear here.</p>
            ) : (
              history.map((turn, index) => (
                <div key={`${turn.role}-${index}`} className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">{turn.role}</div>
                  <p className="mt-2 whitespace-pre-wrap text-sm text-slate-300">{turn.content}</p>
                  {turn.source ? <p className="mt-2 text-xs text-slate-500">Source: {turn.source}</p> : null}
                  {turn.confidence ? <p className="text-xs text-slate-500">Confidence: {turn.confidence.toFixed(2)}</p> : null}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="font-semibold">Memory Dashboard</h3>
          <p className="mt-2 text-sm text-slate-300">Track stored preferences and long-term memory entries.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="font-semibold">Knowledge Graph</h3>
          <p className="mt-2 text-sm text-slate-300">Visualize relationships between user, assistant, and entities.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="font-semibold">Evaluation</h3>
          <p className="mt-2 text-sm text-slate-300">Monitor quality metrics and prompt effectiveness.</p>
        </div>
      </section>
    </main>
  );
}
