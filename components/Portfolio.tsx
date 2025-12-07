import React from 'react';
import { SectionId, PortfolioItem } from '../types';
import { ExternalLink, ArrowRight, Layers, Eye } from 'lucide-react';
import { Logo } from './Logo';
import SmartImageClean from './SmartImageClean';
const SmartImage: any = SmartImageClean;

const projects: PortfolioItem[] = [
  {
    id: 'pronto',
    title: 'High-Throughput Data Pipeline',
    category: 'Pronto Network (Kafka & Redis)',
    image: '/images/pronto.jpg',
    description: 'Designed pipelines processing millions of router events daily with sub-second latency using Golang microservices.'
  },
  {
    id: 'jointalent',
    title: 'JoinTalent e-Learn',
    category: 'EdTech Platform (RoR)',
    image: '/images/jointalent.jpg',
    description: 'Engineered schema for 10,000+ students, automated certificate issuance, and built REST APIs with 99.9% uptime.'
  },
  {
    id: 'init',
    title: 'In It Together',
    category: 'Event Management (Stripe)',
    image: '/images/init.jpg',
    description: 'Managed 5,000+ daily bookings, integrated Stripe processing $50k+ monthly, and real-time WebSocket updates.'
  },
  {
    id: 'allya',
    title: 'Construction Vehicle Rental',
    category: 'Allya (RoR & ActionCable)',
    image: '/images/allya.jpg',
    description: 'Built real-time chat for 1,000+ interactions, reduced API wait times by 15%, and optimized queries for speed.'
  },
  {
    id: 'avinash',
    title: 'Avinash Motorcycle',
    category: 'E-Commerce (WhatsApp API)',
    image: '/images/avinash.jpg',
    description: 'Boosted retention by 20% via WhatsApp integration and improved query efficiency by 30% for 500+ product listings.'
  },
];

export const Portfolio: React.FC = () => {
  return (
      <section id={SectionId.WORK} className="py-32 border-t border-border relative overflow-hidden reveal">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div>
            <div className="mb-4">
              <Logo width="50px" height="50px" />
            </div>
            <div className="inline-block px-3 py-1 mb-2 border border-brand-500/50 bg-brand-500/10 text-brand-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
               Project Archive
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              DEPLOYED <span className="text-brand-500">SYSTEMS</span>
            </h2>
          </div>
          <button className="px-6 py-3 border border-brand-500 bg-brand-500/10 hover:bg-brand-500 hover:text-white transition-all text-brand-400 font-mono text-xs font-bold flex items-center gap-2 uppercase tracking-wider clip-button">
            VIEW ALL LOGS <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`group relative cursor-pointer reveal stagger-${(index % 2) + 1}`}>
              {/* Holographic Window */}
              <div className="bg-dark-950 border border-border group-hover:border-brand-400 transition-all duration-300 h-full flex flex-col clip-angled shadow-lg group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                
                {/* Header Bar */}
                <div className="bg-dark-900/80 p-3 border-b border-border flex justify-between items-center backdrop-blur-md">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                      <span className="font-mono text-xs text-brand-400 font-bold tracking-wider">PROJECT_ID: {project.id.toUpperCase()}</span>
                   </div>
                   <Layers size={14} className="text-muted" />
                </div>

                {/* Image Viewport */}
                <div className="relative aspect-video overflow-hidden border-b border-border">
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-brand-900/30 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                   
                   <SmartImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                   />
                   
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent z-20">
                      <h3 className="text-2xl font-bold text-white mb-1 font-display tracking-wide group-hover:text-brand-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-dark-800 border border-border text-[10px] text-muted font-mono uppercase">
                          {project.category}
                        </span>
                      </div>
                   </div>
                </div>
                
                {/* Description Panel */}
                <div className="p-6 bg-dark-900/50 flex-1 flex flex-col">
                   <div className="mb-6 flex-1">
                      <p className="text-muted text-sm leading-relaxed font-mono pl-3 border-l-2 border-border group-hover:border-brand-500 transition-colors">
                         "{project.description}"
                      </p>
                   </div>
                   
                   {/* Footer */}
                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-border text-xs text-muted font-mono">
                      <span>STATUS: DEPLOYED</span>
                      <span className="group-hover:text-brand-400 flex items-center gap-1 transition-colors">
                         <Eye size={12} /> View Details
                      </span>
                   </div>
                </div>
              </div>
            </div>
          ))}

          {/* New Project CTA */}
          <div className="group relative cursor-pointer flex flex-col items-center justify-center text-center p-8 bg-dark-950/50 min-h-[300px] border border-dashed border-border hover:border-solid hover:border-brand-500 transition-all reveal stagger-1 clip-angled">
            <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all bg-dark-900 relative">
               <div className="absolute inset-0 border border-brand-500 rounded-full animate-ping opacity-20"></div>
               <Layers className="text-brand-400 w-8 h-8 relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2 font-display">START NEW PROJECT</h3>
            <p className="text-muted font-mono text-sm max-w-xs mb-6">
              Initiate a new system architecture sequence.
            </p>
            <div className="px-6 py-2 bg-brand-600 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20">
               Initialize
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};