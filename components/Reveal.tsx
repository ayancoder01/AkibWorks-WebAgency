import React, { useEffect, useRef } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number; // ms
  threshold?: number;
  once?: boolean;
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  once = true,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const baseClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
    el.classList.add(baseClass);

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      el.classList.add('active');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('active');
            if (once && observer && el) observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold }
    );

    observer.observe(el);

    return () => {
      try {
        observer.unobserve(el);
      } catch (e) {
        /* ignore */
      }
    };
  }, [direction, delay, threshold, once]);

  return (
    <div ref={nodeRef} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
