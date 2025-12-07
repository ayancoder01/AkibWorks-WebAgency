import React, { useState } from 'react';
import Reveal from './Reveal';
import { SectionId } from '../types';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is your primary tech stack?",
      answer: "I specialize in the Ruby on Rails ecosystem for backend development, often paired with React for frontend. For high-performance microservices, I use Golang, and for data pipelines, I leverage Kafka and Redis."
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Yes, I provide post-launch support and maintenance packages. This includes server monitoring, security updates, and performance optimization to ensure your application scales smoothly."
    },
    {
      question: "Can you integrate payment gateways?",
      answer: "Absolutely. I have extensive experience integrating Stripe for subscriptions, one-time payments, and marketplace split-payments, ensuring PCI compliance and secure transactions."
    },
    {
      question: "How do you handle project communication?",
      answer: "I believe in transparency. We will have regular sprint reviews (weekly or bi-weekly), and I use tools like Slack, Jira, or Trello to keep you updated on progress and blockers."
    }
  ];

  return (
    <Reveal>
      <section id={SectionId.FAQ} className="py-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-xs font-bold tracking-widest uppercase mb-4">
               <HelpCircle size={14} /> <span>Common Queries</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-dark-900 border ${openIndex === index ? 'border-brand-500/50' : 'border-border'} transition-colors overflow-hidden clip-angled`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center group hover:bg-glass transition-colors"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-400' : 'text-primary'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg border border-border transition-all ${openIndex === index ? 'bg-brand-500/20 text-brand-400 rotate-180' : 'text-muted'}`}>
                     {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-muted leading-relaxed border-t border-dashed border-border mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};