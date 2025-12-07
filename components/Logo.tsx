import React from 'react';

interface LogoProps {
  width?: string;
  height?: string;
  className?: string;
  withText?: boolean;
  solid?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ width = '40px', height = '40px', className = '', withText = false, solid = false }) => {
  // allow a solid (currentColor) variant for footers/favicons
  const strokeRef = (s?: boolean) => (s ? 'currentColor' : 'url(#logoGradient)');

  if (withText) {
    return (
      <div className={`flex items-center gap-3 ${className}`} style={{ width, height }}>
        {/* Icon */}
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <rect x="5" y="5" width="50" height="50" rx="8" fill="none" stroke={strokeRef(solid)} strokeWidth="1" opacity="0.3" />
          {/* A */}
          <line x1="15" y1="45" x2="22" y2="15" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />
          <line x1="29" y1="45" x2="22" y2="15" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="32" x2="26" y2="32" stroke={strokeRef(solid)} strokeWidth="1.5" strokeLinecap="round" />
          {/* W */}
          <line x1="32" y1="15" x2="36" y2="45" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="25" x2="42" y2="45" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />
          <line x1="44" y1="25" x2="46" y2="45" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="15" x2="50" y2="45" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />
        </svg>
        {/* Text */}
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AkibWork
        </span>
      </div>
    );
  }
  
  return (
    <svg
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Background frame */}
      <rect x="5" y="5" width="50" height="50" rx="8" fill="none" stroke={strokeRef(solid)} strokeWidth="1" opacity="0.3" />

      {/* Letter A */}
      <line x1="15" y1="45" x2="22" y2="15" stroke={strokeRef(solid)} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="29" y1="45" x2="22" y2="15" stroke={strokeRef(solid)} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="32" x2="26" y2="32" stroke={strokeRef(solid)} strokeWidth="2" strokeLinecap="round" />

      {/* Letter W */}
      <line x1="32" y1="15" x2="36" y2="45" stroke={strokeRef(solid)} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="25" x2="42" y2="45" stroke={strokeRef(solid)} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="25" x2="46" y2="45" stroke={strokeRef(solid)} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="15" x2="50" y2="45" stroke={strokeRef(solid)} strokeWidth="2.5" strokeLinecap="round" />

      {/* Bottom accent */}
      <line x1="8" y1="50" x2="52" y2="50" stroke={strokeRef(solid)} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;
