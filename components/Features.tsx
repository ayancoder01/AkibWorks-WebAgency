import React from 'react';
import { SectionId } from '../types';
import { Server, Globe, GitBranch, ShieldCheck, Zap, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: '99.9% Uptime',
      desc: 'High-availability architecture and active monitoring to keep your services online.',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Global CDN',
      desc: 'Deliver content fast from edge locations around the world for low-latency UX.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Automated CI/CD',
      desc: 'Reliable pipelines that run tests, build artifacts, and deploy with zero-downtime.',
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      title: 'Security First',
      desc: 'Proactive hardening, automated scans, and secure defaults for production systems.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Performance & Speed',
      desc: 'Optimized asset delivery, caching strategies, and server-side rendering where appropriate.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable Operations',
      desc: 'Design patterns and infrastructure that grow with your business — horizontally and vertically.',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section id={SectionId.FEATURES} className="py-20 reveal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Technical Advantages</h2>
          <p className="text-muted mt-3">We build resilient, secure, and fast systems. Below are a few advantages our engineering approach delivers.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={f.title} className={`bg-dark-900 border border-border p-6 rounded-lg hover:shadow-lg transition reveal-left stagger-${idx + 1}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-dark-800 border border-border flex items-center justify-center text-brand-400">{f.icon}</div>
                <h3 className="text-xl font-bold text-primary">{f.title}</h3>
              </div>
              <p className="text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
