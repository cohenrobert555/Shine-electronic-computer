
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  // Balanced scaling for a professional look
  const scaleMap = {
    sm: 'scale-75',
    md: 'scale-100',
    lg: 'scale-110',
    xl: 'scale-125'
  };
  
  // Refined text sizes
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : size === 'xl' ? 'text-4xl' : 'text-2xl';
  const barWidth = size === 'sm' ? 'w-4' : size === 'lg' ? 'w-7' : size === 'xl' ? 'w-8' : 'w-6';
  const barHeight = size === 'sm' ? 'h-[2px]' : size === 'lg' ? 'h-[4px]' : size === 'xl' ? 'h-[5px]' : 'h-[3px]';

  return (
    <div className={`flex items-center gap-2 select-none ${scaleMap[size as keyof typeof scaleMap] || 'scale-100'} ${className}`}>
      <span className={`${textSize} font-serif lowercase tracking-tight text-slate-900 whitespace-nowrap`} style={{ fontFamily: 'Georgia, serif' }}>
        shine
      </span>
      
      {/* The signature slanted bars - adjusted for better proportion */}
      <div className="flex flex-col gap-[2px] -rotate-[25deg] translate-y-[1px] flex-shrink-0">
        <div className={`${barWidth} ${barHeight} bg-[#e11d48] rounded-full`}></div> {/* Red */}
        <div className={`${barWidth} ${barHeight} bg-[#22c55e] rounded-full`}></div> {/* Green */}
        <div className={`${barWidth} ${barHeight} bg-[#2563eb] rounded-full`}></div> {/* Blue */}
      </div>
      
      <span className={`${textSize} font-serif lowercase tracking-tight text-slate-900 whitespace-nowrap`} style={{ fontFamily: 'Georgia, serif' }}>
        electronic & computer
      </span>
    </div>
  );
};

export default Logo;
