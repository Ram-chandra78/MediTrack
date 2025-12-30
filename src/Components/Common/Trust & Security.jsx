
import React, { useEffect, useRef } from 'react';
// Added HeartPulse and Monitor to the imports
import { ArrowRight, Play, HeartPulse, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      tl.fromTo(textRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(imageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, "-=0.6")
        .from(".hero-badge", { y: 20, opacity: 0 }, "-=0.8")
        .from(".hero-btn", { y: 20, opacity: 0, stagger: 0.2 }, "-=0.8");
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" ref={heroRef}>
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left" ref={textRef}>
            <span className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Smart Healthcare Solution
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Track. Manage. <br />
              <span className="gradient-text">Improve Patient Care</span> <br />
              with MediTrack
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
              Empower your facility with the next generation of healthcare management. 
              Streamline patient records, optimize staff workflows, and deliver superior care 
              through our intelligent, secure platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button className="hero-btn w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                Explore Features <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="hero-btn w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group">
                <Play className="fill-blue-600 text-blue-600" size={20} /> Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start gap-4 hero-btn">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">5,000+ Doctors</p>
                <p className="text-slate-500">Trust our platform daily</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full" ref={imageRef}>
            <div className="relative group">
              {/* Main Image with Shape Mask */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Doctor with patient" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Floating UI Elements */}
              <div className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '4s'}}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Heart Rate</p>
                    <p className="text-lg font-bold text-slate-900">72 BPM</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Monitor size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Next Surgery</p>
                    <p className="text-lg font-bold text-slate-900">09:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
