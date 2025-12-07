import React from 'react';
import Reveal from './Reveal';
import { SectionId } from '../types';
import { ArrowRight, Terminal } from 'lucide-react';

export const CTA: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Reveal>
      <section className="py-24 relative overflow-hidden">
      {/* Background Hologram */}
      <div className="absolute inset-0 bg-brand-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-950 via-transparent to-dark-900"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-dark-950 border border-brand-500/50 rounded-2xl mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.2)] animate-pulse-slow">
            <Terminal className="text-brand-400 w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
            Ready to scale your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">infrastructure?</span>
          </h2>
          
          <p className="text-xl text-muted max-w-xl mx-auto font-light">
            Stop worrying about uptime and database locks. Let's architect a system that grows with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={scrollToContact}
              className="btn-tech px-8 py-4 flex items-center justify-center gap-2 group rounded-xl"
            >
              Start Your Project <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
               onClick={() => document.getElementById(SectionId.WORK)?.scrollIntoView({behavior: 'smooth'})}
               className="btn-tech-ghost px-8 py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs rounded-xl"
            >
              Review Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
};