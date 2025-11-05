import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-tight">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
