import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string>('INITIALIZING...');
  const [finished, setFinished] = useState(false);

  const logs = [
    'LOADING_MODULES...',
    'CONNECTING_SECURELY...',
    'OPTIMIZING_ASSETS...',
    'READY'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 5 + 2;
        const next = Math.min(prev + increment, 100);

        const logIndex = Math.floor((next / 100) * (logs.length - 1));
        setLog(logs[logIndex]);

        if (next >= 100) {
          clearInterval(timer);
          // Mark finished to trigger fade-out animation
          setFinished(true);
          // Ensure progress is 100 and give a short pause for exit animation
          setTimeout(() => {
            onComplete();
          }, 700);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-dark-950 flex items-center justify-center overflow-hidden font-sans transition-opacity duration-700 ${finished ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center px-6">
        {/* Decorative blurred blobs */}
        <div className="absolute -top-20 -right-10 w-72 h-72 bg-brand-500/8 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" aria-hidden />

        {/* Logo and progress */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-28 h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br from-dark-900/60 to-dark-950/40 border border-border shadow-lg">
              <div className="transform transition-transform duration-700 will-change-transform">
                <Logo width="72px" height="72px" className="text-brand-500" />
              </div>
            </div>
          </div>

          <div className="w-72 h-3 bg-dark-800 rounded-full overflow-hidden shadow-inner border border-dark-900">
            <div className="h-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="text-center" role="status" aria-live="polite">
          <div className="text-brand-400 font-mono text-xs uppercase tracking-widest mb-1">{Math.round(progress)}%</div>
          <div className="text-muted text-sm font-light">{log}</div>
          <div className="text-muted text-xs mt-2 opacity-60">Tip: Press <span className="font-mono">Ctrl/Cmd + K</span> to search.</div>
        </div>
      </div>
    </div>
  );
};