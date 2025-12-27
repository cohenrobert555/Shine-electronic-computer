
import React from 'react';
import { Phone, MapPin, Menu, ExternalLink } from 'lucide-react';
import { AppRoute } from '../types';
import { BUSINESS_INFO } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  currentRoute: AppRoute;
  setCurrentRoute: (route: AppRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, setCurrentRoute }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-white py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-80">
              <MapPin className="w-3 h-3 text-[#22c55e]" /> {BUSINESS_INFO.address}
            </span>
            <span className="flex items-center gap-2 opacity-80">
              <Phone className="w-3 h-3 text-[#e11d48]" /> {BUSINESS_INFO.phone1} | {BUSINESS_INFO.phone2}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`http://${BUSINESS_INFO.website}`} target="_blank" className="hover:text-blue-400 flex items-center gap-1 transition-colors">
              Official Site <ExternalLink className="w-3 h-3 text-[#2563eb]" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-24">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentRoute(AppRoute.HOME)}>
              <Logo className="hidden sm:flex" />
              {/* Simplified mobile logo */}
              <div className="flex sm:hidden items-center gap-2">
                <span className="text-xl font-serif lowercase text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>shine</span>
                <div className="flex flex-col gap-[1px] -rotate-[25deg]">
                  <div className="w-3 h-[2px] bg-[#e11d48]"></div>
                  <div className="w-3 h-[2px] bg-[#22c55e]"></div>
                  <div className="w-3 h-[2px] bg-[#2563eb]"></div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <button 
                onClick={() => setCurrentRoute(AppRoute.HOME)}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative group ${currentRoute === AppRoute.HOME ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] brand-gradient transition-transform duration-300 ${currentRoute === AppRoute.HOME ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
              <button 
                onClick={() => setCurrentRoute(AppRoute.SERVICES)}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative group ${currentRoute === AppRoute.SERVICES ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Services
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] brand-gradient transition-transform duration-300 ${currentRoute === AppRoute.SERVICES ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
              <button 
                onClick={() => setCurrentRoute(AppRoute.CONTACT)}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative group ${currentRoute === AppRoute.CONTACT ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] brand-gradient transition-transform duration-300 ${currentRoute === AppRoute.CONTACT ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href={`tel:${BUSINESS_INFO.phone1.replace(/\D/g,'')}`}
                className="hidden lg:flex items-center gap-2 px-6 py-3 brand-gradient text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:brightness-110 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Book Repair
              </a>
              <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
