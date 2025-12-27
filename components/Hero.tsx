
import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-red-400/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
              EXPERT <br />
              <span className="brand-gradient-text">SERVICE</span> <br />
              YOU TRUST.
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

          <div className="relative lg:block hidden">
            <div className="relative z-10 p-6 bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Repair Bench" 
                className="rounded-[30px] w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="p-6 bg-white/90 backdrop-blur-xl border border-white rounded-3xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 brand-gradient"></div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Visit Our Store</p>
                  <p className="text-lg font-bold text-slate-900 mb-1">{BUSINESS_INFO.address}</p>
                  <p className="text-sm text-slate-500">Open Daily • Expert Staff Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
