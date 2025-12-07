import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { AIConsultant } from './components/AIConsultant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach(el => observer.observe(el));
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-dark-950 text-primary selection:bg-brand-500/30 selection:text-brand-200 relative overflow-x-hidden">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* Main App Content - Fade in after load. Remove overflow-hidden to allow scrolling immediately. */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        
        <Navbar />
        
        <main className="relative z-10 w-full">
          <Hero />
          <TechStack />
          <Services />
          <Features />
          <About />
          <Process />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <Blog />
          <FAQ />
          <AIConsultant />
          <CTA />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;