import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, Code2, Database, Activity, Command } from 'lucide-react';
import SmartImage from './SmartImage';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section id={SectionId.HOME} className="min-h-screen flex items-center relative overflow-hidden pt-20 reveal">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-border hidden lg:block opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-border hidden lg:block opacity-50"></div>
      
      {/* Animated Blobs - Subtle */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass border border-border backdrop-blur-md clip-button reveal stagger-1 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest">System Online</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.05] reveal stagger-2 text-primary">
            Scale Your <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
              Infrastructure.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-muted max-w-lg leading-relaxed font-light border-l-2 border-brand-500/30 pl-6 reveal stagger-3">
            I'm <strong className="text-primary font-medium">Mohd Akibuddin</strong>. I architect high-performance backends using Ruby on Rails, Golang, and Microservices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal stagger-4">
            <button 
              onClick={scrollToContact}
              className="btn-tech px-8 py-4 flex items-center justify-center gap-3"
            >
              Initialize Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => document.getElementById(SectionId.WORK)?.scrollIntoView({behavior: 'smooth'})}
              className="btn-tech-ghost flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-xs rounded-xl"
            >
              View System Logs
            </button>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-6 text-gray-500 border-t border-border mt-8 reveal stagger-5">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-mono text-muted">RUBY_ON_RAILS</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-mono text-muted">POSTGRESQL</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-400" />
              <span className="text-sm font-mono text-muted">HIGH_AVAILABILITY</span>
            </div>
          </div>
        </div>

        {/* Technical Hero Visual */}
        <div className="relative hidden lg:block reveal stagger-2">
           <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Spinning Ring */}
              <div className="absolute inset-0 border border-brand-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-[10%] border border-dashed border-border rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-xl clip-angled border border-border overflow-hidden shadow-2xl rounded-2xl">
                 {/* Pseudo-Code Overlay */}
                 <div className="absolute inset-0 p-8 font-mono text-xs text-brand-400/20 leading-loose pointer-events-none select-none">
                    {Array(10).fill(0).map((_, i) => (
                      <div key={i}>
                        {`> optimizing_shard_${i} ... [OK]`}
                      </div>
                    ))}
                 </div>

                 <SmartImage
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Server Room"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                 />
                 
                 {/* Floating HUD Elements */}
                 <div className="absolute top-8 right-8 bg-glass backdrop-blur-md p-4 border border-brand-500/30 clip-button shadow-lg">
                    <div className="flex items-center gap-3">
                       <div className="animate-pulse w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                       <div>
                          <p className="text-[10px] text-muted uppercase tracking-widest">Status</p>
                          <p className="text-sm font-bold text-green-500 font-mono">ALL_SYSTEMS_GO</p>
                       </div>
                    </div>
                 </div>

                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent">
                   <div className="bg-glass backdrop-blur-md p-5 border-l-2 border-brand-500 shadow-xl rounded-r-lg">
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-2">
                           <Command size={14} className="text-brand-400" />
                           <span className="text-xs text-brand-200 font-mono">DEPLOYMENT_PIPELINE</span>
                         </div>
                      </div>
                      <div className="space-y-2 font-mono text-xs">
                        <div className="flex justify-between text-muted">
                           <span>Build</span>
                           <span className="text-brand-400">Success (40ms)</span>
                        </div>
                        <div className="h-1 w-full bg-dark-900 overflow-hidden rounded-full">
                           <div className="h-full bg-brand-500 w-[92%] shadow-[0_0_10px_#2dd4bf] rounded-full"></div>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      </section>
  );
};