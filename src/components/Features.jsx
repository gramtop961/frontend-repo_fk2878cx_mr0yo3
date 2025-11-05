import React from 'react';
import { Star, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Clean & Minimal',
    desc: 'A crisp layout with thoughtful spacing and readable typography.'
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Modern Stack',
    desc: 'React + Vite + Tailwind give you blazing fast development.'
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: 'Beautiful by Default',
    desc: 'Subtle gradients, soft shadows, and accessible colors out of the box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Why you’ll love it</h2>
          <p className="mt-2 text-slate-300">Everything you need to start quickly and look great.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow-lg shadow-black/10 backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/90 text-white shadow-md shadow-indigo-600/30">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
