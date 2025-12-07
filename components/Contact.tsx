import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Phone, Linkedin, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
      <section id={SectionId.CONTACT} className="py-32 bg-dark-900 relative reveal">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal-left">
             <div className="mb-6">
               <Logo width="50px" height="50px" />
             </div>
             <span className="text-brand-400 font-bold tracking-widest text-sm uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">Let's discuss your <br/> next project.</h2>
            <p className="text-muted text-lg mb-12 font-light">
              I am available for freelance projects and full-time opportunities. Reach out to discuss how I can help scale your backend infrastructure.
            </p>

            <div className="space-y-6">
              <a href="mailto:akeebudeen786@gmail.com" className="glass-card p-4 rounded-xl flex items-center gap-4 group hover:bg-glass transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 group-hover:bg-brand-500 flex items-center justify-center text-brand-400 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Email</h4>
                  <p className="text-muted group-hover:text-brand-400 transition-colors text-sm">akeebudeen786@gmail.com</p>
                </div>
              </a>
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 group hover:bg-glass transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 group-hover:bg-brand-500 flex items-center justify-center text-brand-400 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Phone</h4>
                  <p className="text-muted group-hover:text-brand-400 transition-colors text-sm">+91 90126 26767</p>
                </div>
              </div>
              <a href="https://linkedin.com/in/mohd-akibuddin" target="_blank" rel="noreferrer" className="glass-card p-4 rounded-xl flex items-center gap-4 group hover:bg-glass transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 group-hover:bg-blue-600 flex items-center justify-center text-brand-400 group-hover:text-white transition-all duration-300">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">LinkedIn</h4>
                  <p className="text-muted group-hover:text-brand-400 transition-colors text-sm">/in/mohd-akibuddin</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden reveal-right">
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            {formStatus === 'success' ? (
              <div className="absolute inset-0 bg-dark-950/95 z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Received!</h3>
                <p className="text-muted">I'll get back to you within 24 hours.</p>
                <button 
                  type="button" 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-sm text-brand-400 hover:text-primary underline"
                >
                  Send another message
                </button>
              </div>
            ) : null}

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted uppercase tracking-wider ml-1">Name</label>
                <input required type="text" className="w-full bg-input border border-border rounded-xl p-4 text-primary focus:outline-none focus:border-brand-500 focus:bg-dark-950/80 transition-all placeholder:text-muted" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted uppercase tracking-wider ml-1">Email</label>
                <input required type="email" className="w-full bg-input border border-border rounded-xl p-4 text-primary focus:outline-none focus:border-brand-500 focus:bg-dark-950/80 transition-all placeholder:text-muted" placeholder="john@company.com" />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
               <label className="text-xs font-bold text-muted uppercase tracking-wider ml-1">Interest</label>
               <select className="w-full bg-input border border-border rounded-xl p-4 text-primary focus:outline-none focus:border-brand-500 focus:bg-dark-950/80 transition-all">
                 <option>Ruby on Rails Development</option>
                 <option>Backend Optimization</option>
                 <option>API Integration</option>
                 <option>E-Commerce/EdTech</option>
                 <option>Other</option>
               </select>
            </div>

            <div className="space-y-2 relative z-10">
              <label className="text-xs font-bold text-muted uppercase tracking-wider ml-1">Message</label>
              <textarea required rows={4} className="w-full bg-input border border-border rounded-xl p-4 text-primary focus:outline-none focus:border-brand-500 focus:bg-dark-950/80 transition-all placeholder:text-muted" placeholder="Tell me about your project requirements..." />
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="btn-tech w-full py-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed rounded-xl"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> <span>Sending...</span>
                </>
              ) : (
                <>
                  Send Message <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};