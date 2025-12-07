export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type Theme = 'default' | 'blue' | 'violet' | 'rose' | 'amber' | 'emerald';

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  PROCESS = 'process',
  WORK = 'work',
  PRICING = 'pricing',
  BLOG = 'blog',
  ABOUT = 'about',
  FEATURES = 'features',
  FAQ = 'faq',
  AI_CONSULTANT = 'ai-consultant',
  CONTACT = 'contact'
}