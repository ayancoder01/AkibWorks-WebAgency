import React from 'react';
import { SectionId, Service } from '../types';
import { Server, Layout, MessageSquare, Database, Zap, Code, Shield, Info, Plus } from 'lucide-react';
import { Logo } from './Logo';

const services: Service[] = [
  {
    id: 'backend',
    title: 'Backend Architecture',
    description: 'Expertise in Ruby on Rails, Node.js, and Golang to build secure and scalable web applications.',
    icon: 'Server'
  },
  {
    id: 'api',
    title: 'API Ecosystems',
    description: 'Seamless integration of Twilio, Stripe, WhatsApp Business API, and custom RESTful APIs.',
    icon: 'Code'
  },
  {
    id: 'database',
    title: 'Data Optimization',
    description: 'Optimization of MySQL, PostgreSQL, Redis, and ClickHouse for high-throughput data pipelines.',
    icon: 'Database'
  },
  {
    id: 'realtime',
    title: 'Real-time Systems',
    description: 'Implementing WebSockets, ActionCable, and Kafka for live notifications and data streaming.',
    icon: 'Zap'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Core',
    description: 'Building payment gateways, inventory management, and checkout flows with Stripe integration.',
    icon: 'Layout'
  },
  {
    id: 'security',
    title: 'Security Protocol',
    description: 'Implementing OAuth, JWT, and secure data handling practices for enterprise applications.',
    icon: 'Shield'
  }
];

const IconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />
};

export const Services: React.FC = () => {
  return (
      <section id={SectionId.SERVICES} className="py-32 relative overflow-hidden reveal">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="flex justify-center mb-6">
            <Logo width="60px" height="60px" />
          </div>
          <div className="inline-block px-3 py-1 mb-4 border border-brand-500/50 bg-brand-500/10 text-brand-400 font-mono text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_10px_rgba(20,184,166,0.2)]">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            ENGINEERING <span className="text-brand-500 text-shadow-glow">SERVICES</span>
          </h2>
          <p className="text-muted font-mono text-sm">
            [Analyzing Technical Proficiency...]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-dark-900 border border-border hover:border-brand-500 p-6 min-h-[300px] flex flex-col justify-between reveal stagger-${(index % 3) + 1} transition-all duration-300 hover:-translate-y-2 clip-angled relative overflow-hidden shadow-sm`}
            >
              {/* Hover Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 pointer-events-none"></div>

              {/* Header */}
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-border relative z-10">
                {/* Decorative Corner Bracket */}
                <div className="absolute -left-1 -top-1 w-2 h-2 border-t border-l border-brand-500"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark-950 border border-border flex items-center justify-center text-brand-400 group-hover:text-white group-hover:bg-brand-500 group-hover:shadow-[0_0_20px_var(--brand-500)] transition-all duration-300 rounded-sm">
                    {IconMap[service.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary font-mono uppercase leading-none mb-1 group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="text-border group-hover:text-brand-500 transition-colors">
                  <Plus size={14} />
                </div>
              </div>

              {/* Description Body */}
              <div className="flex-1 relative space-y-4 z-10">
                <p className="text-muted text-sm leading-relaxed font-mono border-l-2 border-border pl-3 group-hover:border-brand-500 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Status Footer */}
              <div className="mt-6 pt-4 border-t border-border flex justify-between items-center z-10">
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-brand-400 font-mono uppercase tracking-wider">Operational</span>
                 </div>
                 <Info size={14} className="text-muted group-hover:text-brand-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};