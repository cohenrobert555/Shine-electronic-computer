
import React from 'react';
import { Check, ArrowRight, Cpu, Speaker, ShieldCheck, RefreshCw } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onInquire: (service: Service) => void;
}

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Speaker: Speaker,
  ShieldCheck: ShieldCheck,
  RefreshCw: RefreshCw
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInquire }) => {
  const Icon = iconMap[service.icon] || Cpu;

  // Determine an accent color based on category
  const accentColor = 
    service.category === 'Computer' ? '#2563eb' : // Blue
    service.category === 'Electronic' ? '#e11d48' : // Red
    service.category === 'Security' ? '#22c55e' : // Green
    '#6366f1'; // Indigo default

  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl" style={{ borderColor: 'transparent' }}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        <div className="absolute top-6 left-6 p-3 rounded-2xl text-white shadow-xl transition-transform group-hover:scale-110" style={{ backgroundColor: accentColor }}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <div className="p-8 relative">
        <div className="absolute top-0 left-0 right-0 h-1 brand-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="mb-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color: accentColor }}>{service.category}</p>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
          
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}15` }}>
                  <Check className="w-3 h-3" style={{ color: accentColor }} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => onInquire(service)}
          className="w-full py-4 bg-slate-50 hover:text-white border border-slate-200 rounded-2xl text-slate-900 font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn"
          style={{ '--hover-bg': accentColor } as any}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
        >
          Book Service
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
