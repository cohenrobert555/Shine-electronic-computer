
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import AIAssistant from './components/AIAssistant';
import Logo from './components/Logo';
import { AppRoute, Service } from './types';
import { SERVICES, BUSINESS_INFO } from './constants';
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showInquirySuccess, setShowInquirySuccess] = useState(false);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') return SERVICES;
    return SERVICES.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  const handleInquiry = (service: Service) => {
    setShowInquirySuccess(true);
    setTimeout(() => {
      setShowInquirySuccess(false);
    }, 3000);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case AppRoute.HOME:
        return (
          <>
            <Hero onExplore={() => {
              setCurrentRoute(AppRoute.SERVICES);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
            
            {/* Quick About Section */}
            <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
               <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-400/5 blur-[120px] rounded-full"></div>
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                   <div>
                     <p className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-6">Our Legacy</p>
                     <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-tight">
                       Authentic Repair <br/>Expertise Since 1983.
                     </h2>
                     <p className="text-slate-600 text-lg leading-relaxed mb-8">
                       Located at 137 West 83rd Street, <strong>Shine Electronic & Computer</strong> is the Upper West Side's premier destination for tech care. We've preserved the craft of electronic repair while leading in computer innovation.
                     </p>
                     <div className="space-y-4">
                       {['40+ Years of NYC Expertise', 'Same-Day Diagnostics Available', 'Certified Tech Specialists', 'Trusted by UWS Residents'].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                           <CheckCircle2 className="w-5 h-5 text-green-500" />
                           {item}
                         </div>
                       ))}
                     </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm group hover:border-blue-500/30 transition-colors">
                       <h4 className="text-3xl font-black text-slate-900 mb-2">10k+</h4>
                       <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Successful Repairs</p>
                     </div>
                     <div className="bg-slate-900 p-8 rounded-3xl shadow-lg shadow-slate-900/10">
                       <h4 className="text-3xl font-black text-white mb-2">4.9/5</h4>
                       <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Client Rating</p>
                     </div>
                     <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm col-span-2 text-center group hover:border-green-500/30 transition-colors">
                       <h4 className="text-2xl font-black text-slate-900 mb-2">Upper West Side</h4>
                       <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Neighborhood staple</p>
                     </div>
                   </div>
                 </div>
               </div>
            </section>

            {/* Featured Services Preview */}
            <section className="py-32 bg-slate-50/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-6">Our Core Expertise</p>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">PROFESSIONAL SOLUTIONS.</h2>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map(service => (
                  <div 
                    key={service.id} 
                    className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 transition-all cursor-pointer group shadow-sm hover:shadow-xl"
                    onClick={() => {
                      setSelectedCategory(service.category);
                      setCurrentRoute(AppRoute.SERVICES);
                    }}
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-6 h-6 -rotate-45" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{service.description}</p>
                    <span className="text-blue-600 text-xs font-black uppercase tracking-widest group-hover:underline">View Details</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        );

      case AppRoute.SERVICES:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
              <div className="max-w-2xl">
                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-6">Service Catalog</p>
                <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-tight">Expert Tech Care.</h1>
                <p className="text-slate-600 text-lg">Browse our specialized services. From precision hardware repairs to comprehensive media conversion, your technology is in good hands.</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {['All', 'Computer', 'Electronic', 'Security', 'Conversion'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat 
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/10 scale-105' 
                        : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredServices.map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onInquire={handleInquiry}
                />
              ))}
            </div>
          </div>
        );

      case AppRoute.CONTACT:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
              <div>
                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-6">Get In Touch</p>
                <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-10 uppercase">VISIT THE SHOP.</h1>
                
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg mb-2">Location</h4>
                      <p className="text-slate-600 leading-relaxed">{BUSINESS_INFO.address}<br/>New York, NY 10024</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg mb-2">Phone Numbers</h4>
                      <p className="text-slate-600 leading-relaxed">{BUSINESS_INFO.phone1}<br/>{BUSINESS_INFO.phone2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg mb-2">Business Hours</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Monday - Friday: 10:00 AM - 6:00 PM<br/>
                        Saturday: 11:00 AM - 4:00 PM<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>
                <h3 className="text-2xl font-black text-slate-900 mb-8">SEND A SERVICE REQUEST</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleInquiry(SERVICES[0]); }}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="(212) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Needed</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 appearance-none">
                      <option>Computer Repair</option>
                      <option>Home Audio/Video</option>
                      <option>Security System</option>
                      <option>Media Conversion</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Problem Description</label>
                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 min-h-[150px]" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/10">
                    Send Request
                  </button>
                </form>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="w-full mt-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
               <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-[44px] blur transition duration-1000"></div>
                 
                 <div className="relative bg-white border border-slate-200 rounded-[40px] overflow-hidden h-[450px] shadow-xl">
                   <iframe
                     title="Shine Electronic & Computer Location"
                     src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen={true}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                   
                   {/* Overlay label */}
                   <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl hidden md:block shadow-lg">
                     <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-2">Visit Our Workshop</p>
                     <p className="text-sm font-bold text-slate-900 mb-1">{BUSINESS_INFO.address}</p>
                     <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Upper West Side, NY</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-600/10 bg-slate-50">
      <Navbar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      
      <main>
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="mb-8">
                <Logo size="md" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                Providing New York City with premier tech services since 1983. Quality repairs and authentic local care.
              </p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-8">Our Services</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-bold">
                <li><button onClick={() => {setSelectedCategory('Computer'); setCurrentRoute(AppRoute.SERVICES); window.scrollTo(0,0);}} className="hover:text-blue-600 transition-colors">Computer Repairs</button></li>
                <li><button onClick={() => {setSelectedCategory('Electronic'); setCurrentRoute(AppRoute.SERVICES); window.scrollTo(0,0);}} className="hover:text-blue-600 transition-colors">Home Audio/Video</button></li>
                <li><button onClick={() => {setSelectedCategory('Security'); setCurrentRoute(AppRoute.SERVICES); window.scrollTo(0,0);}} className="hover:text-blue-600 transition-colors">Security Systems</button></li>
                <li><button onClick={() => {setSelectedCategory('Conversion'); setCurrentRoute(AppRoute.SERVICES); window.scrollTo(0,0);}} className="hover:text-blue-600 transition-colors">Media Conversion</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-8">Contact Info</h4>
              <ul className="space-y-6 text-sm text-slate-500 font-bold">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{BUSINESS_INFO.address}<br/>New York, NY 10024</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone1}<br/>{BUSINESS_INFO.phone2}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-8">Visit Us</h4>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
                <p className="text-xs text-slate-500 leading-relaxed mb-4">Located on 83rd Street between Amsterdam and Columbus Ave.</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest hover:underline"
                >
                  Get Directions <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">© 2024 Shine Electronic & Computer. NYC Experts.</p>
          </div>
        </div>
      </footer>

      <AIAssistant onSuggestCategory={(cat) => {
        setSelectedCategory(cat);
        setCurrentRoute(AppRoute.SERVICES);
      }} />

      {/* Inquiry Success Notification */}
      {showInquirySuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-md animate-in fade-in duration-300"></div>
          <div className="bg-white border border-slate-200 rounded-[40px] p-16 text-center relative z-10 shadow-2xl max-w-lg w-full animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Request Sent!</h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">We've received your service inquiry. One of our experts will contact you shortly.</p>
            <div className="h-1 bg-slate-100 w-full rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 animate-[progress_3s_linear]"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
