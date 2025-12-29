
import React from 'react';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const collageImages = [
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600',
      label: 'Laptops'
    },
    {
      url: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600',
      label: 'Desktops'
    },
    {
      url: 'https://images.unsplash.com/photo-1593784991095-a205039475fe?auto=format&fit=crop&q=80&w=600',
      label: 'Home Theater'
    },
    {
      url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
      label: 'Networking'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-red-400/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#e11d48]"></div>
                <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
              </div>
              Premier NYC Tech Repair Center
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900">
              COMPLETE <br />
              <span className="brand-gradient-text">TECH</span> <br />
              SOLUTIONS.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Upper West Side's trusted specialists for Computer repairs, Electronics, Security Systems, and Media Conversion. Professional solutions since 1983.
            </p>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={onExplore}
                className="px-10 py-5 brand-gradient hover:opacity-90 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/10 flex items-center gap-3 group"
              >
                Our Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-col justify-center">
                <span className="text-slate-900 font-bold text-lg">{BUSINESS_INFO.phone1}</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Direct Line</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certified <br/>Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green-500 border border-slate-200 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Fast <br/>Turnaround</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Visual background element */}
            <div className="absolute -inset-4 brand-gradient opacity-5 blur-2xl rounded-[40px] group-hover:opacity-10 transition-opacity"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              {collageImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:z-20 group/item ${
                    idx === 0 ? 'aspect-square' : 
                    idx === 1 ? 'aspect-square mt-8' : 
                    idx === 2 ? 'aspect-square -mt-8' : 'aspect-square'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={img.label} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover/item:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover/item:opacity-100 transition-all translate-y-2 group-hover/item:translate-y-0">
                    <span className="text-xs font-black text-white uppercase tracking-widest bg-blue-600/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Info Tag */}
            <div className="absolute -bottom-8 -left-8 p-6 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl hidden xl:block z-30">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center text-white">
                   <Star className="w-6 h-6 fill-white" />
                 </div>
                 <div>
                   <p className="text-sm font-black text-slate-900">40+ Years</p>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">NYC Repair Legacy</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Star icon since it's used in the floating tag
const Star = ({ className, fill }: { className?: string, fill?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={fill || "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Hero;
