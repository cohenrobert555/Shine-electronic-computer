
import { Service } from './types';

export const BUSINESS_INFO = {
  name: 'Shine Electronic & Computer',
  address: '137 West 83rd Street, New York, NY 10024',
  phone1: '(212) 799-1773',
  phone2: '(917) 960-2277',
  website: 'www.shineelectronic.net'
};

export const SERVICES: Service[] = [
  {
    id: 'comp-1',
    title: 'Computer & IT Solutions',
    category: 'Computer',
    description: 'Expert diagnostics and repairs for all your computing needs, serving both PC and Mac users.',
    features: ['Computer Sales & Service', 'OS Upgrades & Optimization', 'Networking Setup', 'PC & Mac Repair', 'Data Backup & Recovery'],
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
    icon: 'Cpu'
  },
  {
    id: 'elec-1',
    title: 'Electronic & Home Audio',
    category: 'Electronic',
    description: 'Specialized repair and installation services for premium home entertainment systems.',
    features: ['Electronic Repair Service', 'Home Audio & Video Install', 'System Upgrades', 'Online Streaming Setup', 'Professional TV Installation'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
    icon: 'Speaker'
  },
  {
    id: 'sec-1',
    title: 'Security Systems',
    category: 'Security',
    description: 'Comprehensive security solutions to protect your home or business with the latest technology.',
    features: ['CCTV Camera Systems', 'Security System Installation', 'Remote Monitoring Setup', 'Smart Security Integration'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
    icon: 'ShieldCheck'
  },
  {
    id: 'conv-1',
    title: 'Media Conversion',
    category: 'Conversion',
    description: 'Preserve your precious memories by converting legacy formats into high-quality digital files.',
    features: ['Old Tapes to MP3', 'Video Tape to Digital Clip', 'Memory Preservation', 'High-Fidelity Digitization'],
    image: 'https://images.unsplash.com/photo-1605886470381-8b2016557876?auto=format&fit=crop&q=80&w=800',
    icon: 'RefreshCw'
  }
];
