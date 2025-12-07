import React, { useState, useRef, useEffect } from 'react';
import { SectionId, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Bot, User, Sparkles, Loader2, Minimize2, Maximize2 } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm AkibBot. I can help you estimate project costs or explain our services. What are you looking to build today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I had trouble processing that.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id={SectionId.AI_CONSULTANT} className="py-32 relative border-t border-border overflow-hidden reveal">
       {/* Ambient Backdrops */}
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
       
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
         <div className="order-2 lg:order-1 reveal-left stagger-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500/10 to-blue-500/10 border border-brand-500/20 text-brand-400 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Powered by Gemini 2.5 Flash</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
              Instant Project <br/>
              <span className="gradient-text">Consultation</span>
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed font-light">
              Not sure where to start? Chat with our AI consultant to get instant answers about our services, rough pricing estimates, and technology recommendations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="glass-card p-6 rounded-2xl group cursor-default">
                 <h4 className="font-bold text-primary mb-2 group-hover:text-brand-400 transition-colors">Instant Quotes</h4>
                 <p className="text-sm text-muted">Get a ballpark figure for your project in seconds.</p>
               </div>
               <div className="glass-card p-6 rounded-2xl group cursor-default">
                 <h4 className="font-bold text-primary mb-2 group-hover:text-brand-400 transition-colors">Tech Advice</h4>
                 <p className="text-sm text-muted">Find out if React or Next.js is better for you.</p>
               </div>
            </div>
         </div>

         {/* Chat Interface */}
         <div className="order-1 lg:order-2 reveal-right stagger-2">
          <div className="bg-dark-950/80 backdrop-blur-xl rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col h-[600px] ring-1 ring-border">
                {/* Header */}
                <div className="bg-gradient-to-r from-dark-900 to-dark-950 p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                       <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse border-2 border-dark-900" />
                       <div className="absolute inset-0 bg-green-500 blur-sm opacity-50"></div>
                    </div>
                    <div>
                        <span className="font-bold text-primary block leading-tight">AkibBot</span>
                        <span className="text-[10px] text-muted uppercase tracking-widest">AI Agent Online</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setMessages([{ role: 'model', text: "Hello! I'm AkibBot. I can help you estimate project costs or explain our services. What are you looking to build today?" }])}
                    className="text-xs text-muted hover:text-primary transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-border hover:bg-glass"
                  >
                    Reset Chat
                  </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-dark-800 scrollbar-track-transparent">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in slide-in-from-bottom-2 fade-in duration-300`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'model' ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white' : 'bg-dark-800 border border-border text-muted'}`}>
                          {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
                      </div>
                      <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-md ${
                        msg.role === 'user' 
                          ? 'bg-brand-600 text-white rounded-tr-none' 
                          : 'bg-dark-800/80 backdrop-blur-sm text-primary rounded-tl-none border border-border'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-4 animate-pulse">
                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
                          <Bot size={18} className="text-white" />
                        </div>
                        <div className="bg-dark-800/80 p-4 rounded-2xl rounded-tl-none border border-border flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-brand-400" />
                          <span className="text-xs text-muted">Analyzing request...</span>
                        </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-dark-950/50 border-t border-border backdrop-blur-sm">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type a message..."
                      className="w-full bg-dark-900/80 text-primary pl-5 pr-14 py-4 rounded-xl border border-border focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all placeholder:text-muted"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={isLoading || !input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-brand-500 text-white rounded-lg hover:bg-brand-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
            </div>
         </div>
       </div>
    </section>
  );
};