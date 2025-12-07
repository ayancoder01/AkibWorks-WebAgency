import React, { useState, useEffect } from 'react';
import { Settings, Sun, Moon, Menu, X } from 'lucide-react';
import { SectionId, Theme } from '../types';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setTheme = (theme: Theme) => {
    const themes: Theme[] = ['default', 'blue', 'violet', 'rose', 'amber', 'emerald'];
    const classList = document.body.classList;
    themes.forEach(t => {
      if (t !== 'default') classList.remove(`theme-${t}`);
    });
    setCurrentTheme(theme);
    if (theme !== 'default') classList.add(`theme-${theme}`);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
  };

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Services', id: SectionId.SERVICES },
    { name: 'Work', id: SectionId.WORK },
    { name: 'Pricing', id: SectionId.PRICING },
    { name: 'Insights', id: SectionId.BLOG },
    { name: 'AI Consultant', id: SectionId.AI_CONSULTANT },
  ];

  const themesList: { id: Theme; color: string }[] = [
    { id: 'default', color: '#14b8a6' },
    { id: 'blue', color: '#3b82f6' },
    { id: 'violet', color: '#8b5cf6' },
    { id: 'rose', color: '#f43f5e' },
    { id: 'amber', color: '#f59e0b' },
    { id: 'emerald', color: '#10b981' },
  ];

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? 'bg-dark-950/70 backdrop-blur-md shadow-lg border-b border-brand-500/10 py-5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className={`transition-all duration-500 ease-in-out relative flex justify-between items-center ${
        scrolled 
          ? 'w-full px-8 md:px-12' 
          : 'container mx-auto px-6'
      }`}>
        {/* Logo - Full version with text on desktop */}
        <div onClick={() => scrollToSection(SectionId.HOME)} className="cursor-pointer group select-none relative z-50">
          <div className="hidden md:block">
            <Logo width="140px" height="40px" withText={true} solid={scrolled} className="group-hover:opacity-80 transition-opacity duration-300" />
          </div>
          <div className="md:hidden">
            <Logo width="48px" height="48px" solid={scrolled} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

         {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 z-50">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="nav-link-pixel"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-border mx-2"></div>

          {/* Settings Hover */}
          <div className="relative group">
            <button className="p-2 text-muted hover:text-primary transition-colors">
              <Settings size={20} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
            <div className="absolute top-full right-0 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[260px]">
              <div className="bg-dark-950 border border-border p-6 rounded-2xl shadow-2xl relative ring-1 ring-white/10">
                 <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">Appearance</span>
                    <button onClick={toggleMode} className="p-2 bg-dark-900 rounded-lg border border-border hover:text-brand-500 transition-colors">
                       {isDarkMode ? <Moon size={16}/> : <Sun size={16}/>}
                    </button>
                 </div>
                 
                 <div className="space-y-3">
                    <span className="text-xs text-muted font-mono pl-1">ACCENT COLOR</span>
                    <div className="grid grid-cols-6 gap-2">
                      {themesList.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setTheme(t.id)}
                            className={`w-7 h-7 rounded-full border-2 transition-all duration-300 ${currentTheme === t.id ? 'border-primary scale-110 shadow-lg shadow-brand-500/20' : 'border-transparent opacity-40 hover:opacity-100'}`}
                            style={{ backgroundColor: t.color }}
                            title={t.id}
                          />
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="ml-4 btn-tech px-6 py-2.5 text-xs font-bold rounded-xl"
          >
            START PROJECT
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden relative z-[60]">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-primary transition-colors group"
          >
             {isOpen 
               ? <X size={28} className="text-brand-500 rotate-90 transition-transform duration-300" /> 
               : <Menu size={28} className="group-hover:text-brand-500 transition-colors" />
             }
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`absolute top-full left-0 w-full bg-dark-950 border-b border-white/5 shadow-2xl transition-all duration-500 ease-in-out overflow-y-auto md:hidden ${
            isOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="p-8 flex flex-col gap-6 relative z-10 min-h-full">
             <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-2xl font-display font-bold text-primary hover:text-brand-500 hover:pl-2 transition-all border-b border-border/30 pb-4"
                  >
                    {link.name}
                  </button>
                ))}
             </div>

             <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted font-mono uppercase tracking-wider">Appearance</span>
                  <button 
                    onClick={toggleMode}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-900 rounded-lg border border-border text-sm text-primary"
                  >
                    {isDarkMode ? <><Moon size={16}/> Dark</> : <><Sun size={16}/> Light</>}
                  </button>
                </div>
                
                <div className="flex gap-3 justify-center pt-2">
                   {themesList.slice(0, 6).map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${currentTheme === t.id ? 'border-primary' : 'border-transparent opacity-50'}`}
                        style={{ backgroundColor: t.color }}
                      />
                   ))}
                </div>
             </div>
             
             <button
               onClick={() => scrollToSection(SectionId.CONTACT)}
               className="w-full btn-tech py-4 text-center mt-4 text-sm"
             >
               Initialize Project
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};