import React from 'react';
import { SectionId } from '../types';
import { Check, Zap, Code, Server, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Pricing: React.FC = () => {
  const plans = [
    {
      title: "MVP Launchpad",
      price: "Startups",
      description: "Validation-ready backend infrastructure.",
      features: [
        "Ruby on Rails API Setup",
        "PostgreSQL Database",
        "Basic Authentication",
        "Deployment to Render/Heroku"
      ],
      icon: <Code className="w-5 h-5" />,
      highlight: false
    },
    {
      title: "Scale & Optimize",
      price: "Growth",
      description: "Performance tuning for active products.",
      features: [
        "Microservices (Golang)",
        "Redis Caching Strategy",
        "Real-time (ActionCable)",
        "Priority Support",
        "Database Optimization"
      ],
      icon: <Zap className="w-5 h-5" />,
      highlight: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Full architectural oversight & leadership.",
      features: [
        "High-Throughput Architecture",
        "Kafka Data Pipelines",
        "Custom DevOps / CI/CD",
        "Security Compliance",
        "24/7 SLA Monitoring"
      ],
      icon: <Server className="w-5 h-5" />,
      highlight: false
    },
  ];

  return (
      <section id={SectionId.PRICING} className="py-32 relative border-t border-border overflow-hidden reveal">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <div className="flex justify-center mb-6">
            <Logo width="50px" height="50px" />
          </div>
           <div className="inline-block px-3 py-1 mb-4 border border-brand-500/50 bg-brand-500/10 text-brand-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Investment
           </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Engagement <span className="text-brand-500">Models</span>
          </h2>
          <p className="text-muted text-lg">
            Transparent pricing for world-class engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col reveal stagger-${index + 1}`}
            >
              {/* Modern Solid Card */}
              <div 
                className={`h-full flex flex-col p-8 rounded-3xl transition-all duration-300 border ${
                  plan.highlight 
                    ? 'bg-dark-900 border-brand-500 shadow-2xl shadow-brand-500/10 scale-105 z-10' 
                    : 'bg-dark-950 border-border hover:border-brand-500/30'
                }`}
              >
                
                {plan.highlight && (
                   <div className="mb-6 flex justify-center">
                      <span className="text-[10px] bg-brand-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg">
                        Most Popular
                      </span>
                   </div>
                )}

                <div className="mb-8 text-center">
                   <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center ${plan.highlight ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30' : 'bg-dark-900 border border-border text-muted'}`}>
                      {plan.icon}
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-2">{plan.title}</h3>
                   <div className="text-sm font-mono text-brand-400 uppercase tracking-wider mb-4">
                      {plan.price}
                   </div>
                   <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                      {plan.description}
                   </p>
                </div>

                <div className="h-px w-full bg-border mb-8"></div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted">
                      <div className={`p-0.5 rounded-full ${plan.highlight ? 'bg-brand-500/20 text-brand-500' : 'bg-dark-800 text-gray-500'}`}>
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={plan.highlight ? 'text-primary' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
                  className={`w-full py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 group btn-tech ${
                    plan.highlight 
                      ? 'shadow-lg shadow-brand-500/20' 
                      : ''
                  }`}
                >
                  Start Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};