import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm backdrop-blur">
            Welcome
          </p>
          <h1 className="mt-6 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Hello, World!
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            A minimal, beautiful starter powered by React and Tailwind. Tweak, play, and make it yours.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Explore Features
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
