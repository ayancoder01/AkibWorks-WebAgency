import React from 'react';
import { SectionId } from '../types';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Audit",
      description: "We analyze your current infrastructure, identify bottlenecks, and define clear technical requirements.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 2,
      title: "System Architecture",
      description: "Designing scalable schemas, microservices, and API contracts before writing a single line of code.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Agile Development",
      description: "Iterative sprints using Ruby on Rails or Golang, with automated testing (RSpec) and CI/CD pipelines.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Launch & Scale",
      description: "Deployment to production with real-time monitoring (Grafana), load balancing, and performance tuning.",
      icon: <Rocket className="w-6 h-6" />
    },
  ];

  return (
      <section id={SectionId.PROCESS} className="py-24 relative overflow-hidden reveal">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="text-brand-400 font-mono text-xs font-bold tracking-widest uppercase mb-2 block">Methodology</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            From Concept to <span className="gradient-text">Deployment</span>
          </h2>
          <p className="text-muted">
            A structured engineering approach ensures reliability and speed.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-dark-800 -translate-y-1/2 z-0">
             <div className="absolute top-0 left-0 h-full bg-brand-500/30 w-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative z-10 group reveal stagger-${index + 1}`}>
                <div className="bg-dark-900 border border-glass p-8 h-full transition-all duration-300 hover:border-brand-500/50 hover:-translate-y-2 clip-angled hover:shadow-[0_10px_30px_rgba(45,212,191,0.1)]">
                  <div className="w-14 h-14 bg-dark-950 border border-border rounded-lg flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors relative">
                     <span className="absolute -top-3 -right-3 bg-dark-800 text-gray-500 text-xs font-mono px-2 py-1 rounded border border-border">0{step.id}</span>
                     {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed border-l-2 border-transparent group-hover:border-brand-500/30 pl-0 group-hover:pl-3 transition-all duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};