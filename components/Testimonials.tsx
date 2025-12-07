import React from 'react';
import { Quote, TrendingUp, Clock, Activity } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const impacts = [
    {
      id: 1,
      metric: "99.99%",
      label: "Uptime Achieved",
      description: "Built microservices for real-time health monitoring, ensuring stability for critical router infrastructure.",
      client: "Pronto Network",
      icon: <Activity className="w-5 h-5 text-green-400" />
    },
    {
      id: 2,
      metric: "10,000+",
      label: "Students Supported",
      description: "Engineered scalable MySQL schemas to handle massive enrollment spikes without performance degradation.",
      client: "JoinTalent e-Learn",
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />
    },
    {
      id: 3,
      metric: "-15%",
      label: "Wait Times",
      description: "Integrated Twilio for real-time notifications, significantly improving customer communication speeds.",
      client: "Allya Construction",
      icon: <Clock className="w-5 h-5 text-brand-400" />
    }
  ];

  return (
      <section className="py-24 border-t border-border reveal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
               <span className="text-brand-400 font-mono text-xs font-bold tracking-widest uppercase mb-2 block">Impact Stories</span>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Proven <span className="text-primary">Results</span>
               </h2>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((item, idx) => (
              <div key={item.id} className={`bg-gradient-to-br from-dark-950 to-dark-900 p-1 rounded-2xl relative group reveal stagger-${(idx % 3) + 1}`}>
                <div className="absolute inset-0 bg-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl"></div>
                <div className="bg-dark-950 h-full p-8 rounded-xl border border-glass relative z-10 flex flex-col justify-between hover:border-brand-500/30 transition-colors">
                  <div>
                     <div className="flex justify-between items-start mb-6">
                        <Quote className="text-dark-800 w-10 h-10 fill-dark-800" />
                        <div className="bg-dark-900 p-2 rounded-lg border border-border">
                          {item.icon}
                        </div>
                     </div>
                     <h3 className="text-4xl font-display font-bold text-primary mb-2">{item.metric}</h3>
                     <p className="text-brand-400 font-mono text-sm uppercase tracking-wider mb-6">{item.label}</p>
                     <p className="text-muted leading-relaxed mb-6">
                       "{item.description}"
                     </p>
                  </div>
                  <div className="pt-6 border-t border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-blue-500"></div>
                    <span className="text-sm font-bold text-primary">{item.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};