import React from 'react';
import { SectionId } from '../types';
import { Target, Users, Zap, Globe, Cpu, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 relative overflow-hidden border-t border-border">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 border border-brand-500/20 mb-4 clip-button">
            <span className="text-brand-400 font-mono text-xs font-bold tracking-widest uppercase">The Agency</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Architecting the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-muted text-lg font-light leading-relaxed">
            Akibwork is a premium web engineering agency dedicated to building high-performance digital infrastructure. We bridge the gap between complex backend logic and seamless user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Mission & Vision */}
          <div className="space-y-6">
             <div className="group relative clip-angled p-1 bg-gradient-to-br from-white/5 to-white/0 hover:from-brand-500/20 hover:to-brand-500/5 transition-all duration-500 reveal-left stagger-1">
                <div className="bg-dark-950 p-8 clip-angled h-full relative z-10 border border-border">
                   <div className="w-12 h-12 bg-dark-900 border border-border flex items-center justify-center text-brand-400 mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <Target className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                   <p className="text-muted leading-relaxed">
                     To empower businesses with scalable, fault-tolerant, and secure web systems that can handle millions of interactions without compromising speed.
                   </p>
                </div>
             </div>

             <div className="group relative clip-angled p-1 bg-gradient-to-br from-white/5 to-white/0 hover:from-blue-500/20 hover:to-blue-500/5 transition-all duration-500 reveal-left stagger-2">
                <div className="bg-dark-950 p-8 clip-angled h-full relative z-10 border border-border">
                   <div className="w-12 h-12 bg-dark-900 border border-border flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Globe className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-primary mb-3">Global Vision</h3>
                   <p className="text-muted leading-relaxed">
                     We envision a web where performance is standard, not a luxury. From Noida to the world, we are setting new benchmarks in backend reliability.
                   </p>
                </div>
             </div>
          </div>

          {/* Leadership Profile */}
          <div className="relative reveal-right">
             <div className="absolute inset-0 bg-brand-500/10 transform rotate-3 clip-angled rounded-2xl"></div>
             <div className="bg-dark-900 border border-border p-8 relative z-10 clip-angled">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-20 h-20 bg-dark-800 rounded-full border-2 border-brand-500/50 flex items-center justify-center overflow-hidden">
                      <Users className="w-10 h-10 text-muted" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-primary">Mohd Akibuddin</h4>
                      <p className="text-brand-400 text-sm font-mono uppercase tracking-wider">Founder & Lead Architect</p>
                   </div>
                </div>
                
                <div className="space-y-4 text-muted text-sm leading-relaxed border-t border-border pt-6">
                   <p>
                      "I founded Akibwork with a single goal: to solve the 'scaling problem' for modern businesses. With deep expertise in <span className="text-primary font-medium">Ruby on Rails</span> and <span className="text-primary font-medium">Microservices</span>, I lead a team focused on technical excellence."
                   </p>
                   <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 bg-glass border border-border rounded text-xs text-brand-400">Backend Specialist</span>
                      <span className="px-2 py-1 bg-glass border border-border rounded text-xs text-brand-400">System Architect</span>
                      <span className="px-2 py-1 bg-glass border border-border rounded text-xs text-brand-400">Open Source Contributor</span>
                   </div>
                </div>

                <div className="mt-8 flex justify-between items-center bg-dark-950 p-4 rounded-lg border border-border">
                   <div className="flex items-center gap-2">
                      <Award className="text-yellow-500 w-5 h-5" />
                      <span className="text-primary font-bold text-sm">Bachelor of Science</span>
                   </div>
                   <span className="text-muted text-xs">MJPRU, Bareilly (2017-20)</span>
                </div>
             </div>
          </div>
        </div>

        {/* Agency Stats */}
        {/* Why Choose Us */}
        <div className="mb-20 reveal">
          <div className="bg-dark-900/50 border border-border rounded-3xl p-8 md:p-12">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h3 className="text-3xl font-display font-bold text-primary mb-6">Why Partner With Us?</h3>
                   <div className="space-y-4">
                      {[
                        "Direct access to Senior Engineers (No middlemen)",
                        "Code ownership from Day 1 (It's your IP)",
                        "Transparent Sprint Planning & Reporting",
                        "Post-launch Stability Guarantee (30 Days)"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                           <p className="text-muted text-sm">{item}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-dark-950 p-6 rounded-xl border border-border text-center">
                      <div className="text-brand-400 text-3xl font-bold mb-1 font-mono">100%</div>
                      <div className="text-xs text-muted uppercase tracking-widest">In-House Team</div>
                   </div>
                   <div className="bg-dark-950 p-6 rounded-xl border border-border text-center">
                      <div className="text-brand-400 text-3xl font-bold mb-1 font-mono">&lt;24h</div>
                      <div className="text-xs text-muted uppercase tracking-widest">Response Time</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-12 reveal">
           <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">3+</div>
              <div className="text-xs text-muted uppercase tracking-widest">Years Active</div>
           </div>
           <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">20+</div>
              <div className="text-xs text-muted uppercase tracking-widest">Projects Shipped</div>
           </div>
           <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">99%</div>
              <div className="text-xs text-muted uppercase tracking-widest">Client Retention</div>
           </div>
           <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
              <div className="text-xs text-muted uppercase tracking-widest">Support System</div>
           </div>
            </div>
         </div>
      </section>
  );
};