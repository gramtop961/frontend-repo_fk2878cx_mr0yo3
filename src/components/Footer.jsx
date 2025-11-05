import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-400">
        <p>
          © {year} Hello World. Built with love, React, and Tailwind.
        </p>
      </div>
    </footer>
  );
}
