import React from 'react';
import { Terminal, Cpu, Database } from 'lucide-react';

export const TechStack: React.FC = () => {
  const row1 = ["Ruby on Rails", "Golang", "React.js", "Node.js", "TypeScript", "Python", "GraphQL", "Next.js"];
  const row2 = ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "ClickHouse", "Terraform"];
  
  return (
    <section className="py-20 border-y border-border bg-dark-950 relative overflow-hidden">
       {/* Tech Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

       {/* Vignette */}
       <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10"></div>
       <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10"></div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-12 border-b border-border pb-4">
             <div className="p-2 bg-dark-900 border border-border rounded">
               <Terminal className="w-5 h-5 text-brand-400" />
             </div>
             <span className="font-mono text-sm text-muted uppercase tracking-widest">System Dependencies</span>
             <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="flex flex-col gap-16">
              {/* Row 1 - Runtime */}
              <div className="relative">
                <div className="absolute -top-8 left-0 text-[10px] font-mono text-brand-500/50 uppercase tracking-widest flex items-center gap-2">
                   <Cpu size={12} /> Runtime Environment
                </div>
                <div className="flex gap-16 animate-marquee">
                    {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-default p-4 border border-transparent hover:border-brand-500/30 hover:bg-brand-500/5 rounded transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500/50 group-hover:bg-brand-500 transition-colors shadow-[0_0_8px_var(--brand-500)]"></span>
                          <span className="text-xl md:text-3xl font-display font-bold text-muted group-hover:text-primary transition-colors uppercase tracking-tight select-none">
                              {tech}
                          </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Row 2 - Infrastructure */}
              <div className="relative">
                <div className="absolute -top-8 left-0 text-[10px] font-mono text-blue-500/50 uppercase tracking-widest flex items-center gap-2">
                   <Database size={12} /> Infrastructure Layer
                </div>
                <div className="flex gap-16 animate-marquee-reverse">
                    {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-default p-4 border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5 rounded transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors shadow-[0_0_8px_#3b82f6]"></span>
                          <span className="text-xl md:text-3xl font-display font-bold text-muted group-hover:text-primary transition-colors uppercase tracking-tight select-none">
                              {tech}
                          </span>
                      </div>
                    ))}
                </div>
              </div>
          </div>
       </div>

       <style>{`
         @keyframes marquee {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         @keyframes marquee-reverse {
           0% { transform: translateX(-50%); }
           100% { transform: translateX(0); }
         }
         .animate-marquee {
           animation: marquee 40s linear infinite;
         }
         .animate-marquee-reverse {
            animation: marquee-reverse 40s linear infinite;
         }
         .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
         }
       `}</style>
    </section>
  );
};