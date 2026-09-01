import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Memory-Augmented Chatbot',
  description: 'A memory-augmented chatbot with graph and evaluation dashboards',
};

const navItems = [
  { href: '/', label: 'Chat' },
  { href: '/ingest', label: 'Ingest' },
  { href: '/memory', label: 'Memory' },
  { href: '/graph', label: 'Graph' },
  { href: '/evaluation', label: 'Evaluation' },
  { href: '/login', label: 'Login' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-4">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Memory-Augmented Chatbot
            </Link>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full border border-slate-800 px-3 py-1 hover:border-cyan-500 hover:text-cyan-400">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="mx-auto max-w-6xl px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
