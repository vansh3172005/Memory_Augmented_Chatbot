"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('demo');
  const [password, setPassword] = useState('demo123');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-300">Sign in to use the memory-augmented chatbot.</p>
        <input className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-950 p-3" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        <input className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-3" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <button className="mt-6 w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950" type="submit">Sign in</button>
      </form>
    </main>
  );
}
