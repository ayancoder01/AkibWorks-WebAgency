import React from 'react';
import Reveal from './Reveal';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { SectionId } from '../types';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <Reveal>
         <footer className="bg-dark-950 pt-24 pb-10 relative overflow-hidden border-t border-border">
            <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
           {/* Brand Column */}
           <div className="space-y-6">
                     <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollTo(SectionId.HOME)} aria-label="Go to home">
                           <Logo width="60px" height="60px" className="text-brand-500" solid={true} />
                     </div>
              <p className="text-muted leading-relaxed text-sm">
                Premium backend engineering for ambitious brands. We build the invisible infrastructure that powers the visible web.
              </p>
              <div className="flex gap-3 pt-2">
                 {[
                   { icon: Linkedin, href: "https://linkedin.com/in/mohd-akibuddin" },
                   { icon: Mail, href: "mailto:akeebudeen786@gmail.com" },
                   { icon: Github, href: "#" }
                 ].map((social, i) => (
                   <a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-dark-900 border border-border rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300 group text-muted"
                   >
                      <social.icon size={18} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Navigation */}
           <div>
              <h4 className="font-bold text-primary mb-6 text-base">Company</h4>
              <ul className="space-y-3 text-muted text-sm">
                 {[
                   { name: "Home", id: SectionId.HOME },
                   { name: "About Us", id: SectionId.ABOUT },
                   { name: "Our Work", id: SectionId.WORK },
                   { name: "Pricing", id: SectionId.PRICING },
                   { name: "Insights", id: SectionId.BLOG },
                 ].map((link) => (
                    <li key={link.name}>
                       <button 
                         onClick={() => scrollTo(link.id)} 
                         className="hover:text-brand-500 transition-colors"
                       >
                         {link.name}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Services */}
           <div>
              <h4 className="font-bold text-primary mb-6 text-base">Expertise</h4>
              <ul className="space-y-3 text-muted text-sm">
                 {["Ruby on Rails", "Golang Microservices", "API Architecture", "Database Tuning", "Real-time Systems", "Cloud DevOps"].map((item) => (
                    <li key={item}>
                       <span className="hover:text-primary transition-colors cursor-default">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Connect */}
           <div>
              <h4 className="font-bold text-primary mb-6 text-base">Stay Updated</h4>
              <div className="bg-dark-900 border border-border p-1 rounded-lg flex focus-within:border-brand-500 transition-colors">
                 <input 
                    type="email" 
                    placeholder="Enter email" 
                    className="bg-transparent px-4 py-2 text-sm text-primary focus:outline-none w-full placeholder:text-gray-600"
                 />
                 <button className="bg-brand-500 hover:bg-brand-600 text-white p-2 rounded-md transition-colors m-1">
                    <ArrowRight size={16} />
                 </button>
              </div>
              <div className="mt-6 space-y-3 text-sm text-muted">
                 <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-brand-500" />
                    <span>Noida, Sector 63, India</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Phone size={16} className="text-brand-500" />
                    <span>+91 90126 26767</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-muted text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Akibwork. All rights reserved.
           </p>
           <div className="flex gap-6 text-xs text-muted">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
           </div>
        </div>
            </div>
         </footer>
      </Reveal>
  );
};