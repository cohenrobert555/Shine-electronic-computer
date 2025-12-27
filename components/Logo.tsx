
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const scale = size === 'sm' ? 'scale-75' : size === 'lg' ? 'scale-125' : 'scale-100';
  
  return (
    <div className={`flex items-center gap-2 select-none ${scale} ${className}`}>
      <span className="text-2xl font-serif lowercase tracking-tight text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
        shine
      </span>
      
      {/* The signature slanted bars */}
      <div className="flex flex-col gap-[2px] -rotate-[25deg] translate-y-[1px]">
        <div className="w-5 h-[3px] bg-[#e11d48] rounded-full"></div> {/* Red */}
        <div className="w-5 h-[3px] bg-[#22c55e] rounded-full"></div> {/* Green */}
        <div className="w-5 h-[3px] bg-[#2563eb] rounded-full"></div> {/* Blue */}
      </div>
      
      <span className="text-2xl font-serif lowercase tracking-tight text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
        electronic & computer
      </span>
    </div>
  );
};

export default Logo;
