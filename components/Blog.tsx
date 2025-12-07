import React from 'react';
import { SectionId } from '../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import SmartImage from './SmartImage';
import { Logo } from './Logo';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      category: "Architecture",
      date: "Oct 12, 2024",
      title: "Optimizing High-Traffic Rails Apps with Kafka",
      excerpt: "How we decoupled monolithic services and processed millions of events using an event-driven architecture.",
      image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Database",
      date: "Sep 28, 2024",
      title: "ClickHouse vs. PostgreSQL for Analytics",
      excerpt: "A deep dive into why we migrated our analytics engine to ClickHouse for 100x faster query performance.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Real-time",
      date: "Sep 15, 2024",
      title: "Scaling ActionCable for Enterprise Chat",
      excerpt: "Lessons learned from building a real-time support chat system handling 5k+ concurrent connections.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
      <section id={SectionId.BLOG} className="py-24 relative border-t border-border reveal">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="mb-4">
                <Logo width="50px" height="50px" />
              </div>
              <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-xs font-bold tracking-widest uppercase mb-4">
                <BookOpen size={14} /> <span>Engineering Log</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Technical <span className="gradient-text">Insights</span>
              </h2>
            </div>
            <button className="hidden md:flex text-sm text-muted hover:text-primary items-center gap-2 transition-colors">
              Read all articles <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={post.id} className={`group cursor-pointer reveal stagger-${(idx % 3) + 1}`}>
                <div className="relative aspect-video overflow-hidden mb-6 clip-angled border border-border group-hover:border-brand-500/50 transition-colors">
                   <SmartImage
                     src={post.image}
                     alt={post.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                   />
                   <div className="absolute top-4 left-4 bg-dark-950/80 backdrop-blur-md px-3 py-1 text-xs font-mono text-brand-400 border border-brand-500/20">
                      {post.category}
                   </div>
                </div>
                <div className="space-y-3">
                   <div className="text-xs text-gray-500 font-mono">{post.date}</div>
                   <h3 className="text-xl font-bold text-primary group-hover:text-brand-400 transition-colors leading-tight">
                      {post.title}
                   </h3>
                   <p className="text-muted text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                   </p>
                   <div className="pt-2">
                      <span className="text-brand-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                         Read Article <ArrowUpRight size={12} />
                      </span>
                   </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
};