"use client";

import { useState } from 'react';
import axios from 'axios';

export default function IngestPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/ingest/', { title, content });
      setMessage(`${response.data.message} (${response.data.chunk_count} chunks)`);
    } catch (error) {
      setMessage('Ingestion failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <h1 className="text-3xl font-semibold">Document Ingestion</h1>
        <p className="mt-3 text-slate-300">Add content to the memory and retrieval pipeline for the hybrid RAG workflow.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Document title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className="min-h-40 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Paste or type content to ingest"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950" type="submit" disabled={loading}>
            {loading ? 'Ingesting...' : 'Ingest document'}
          </button>
        </form>
        {message ? <p className="mt-4 text-sm text-cyan-300">{message}</p> : null}
      </div>
    </main>
  );
}
