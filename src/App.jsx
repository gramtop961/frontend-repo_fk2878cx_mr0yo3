import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">About this starter</h3>
              <p className="mt-2 text-slate-300">
                This lightweight template gives you a polished starting point for any idea. It’s responsive,
                accessible, and easy to customize. Change the colors, add sections, or hook it to an API.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-xl shadow-black/20">
              <ul className="list-disc pl-5 text-slate-300">
                <li>Built with modern tooling</li>
                <li>Pre-styled components</li>
                <li>Production-ready structure</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
