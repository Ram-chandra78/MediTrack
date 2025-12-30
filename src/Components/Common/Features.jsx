import { useEffect, useRef } from 'react';
import {
  BedDouble,
  Zap,
  HeartPulse,
  Microscope,
  Monitor,
  Stethoscope,
  ChevronRight
} from 'lucide-react';

const Features = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Header animation
        gsap.from('.features-header', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
gsap.from('.fade-scale', {
  scrollTrigger: {
    trigger: '.fade-scale',
    start: 'top 85%',
  },
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: 'power3.out',
});

        // Cards animation
        gsap.from('.feature-card', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const features = [
    {
      title: 'Smart Wards',
      desc: 'IoT-enabled rooms with real-time patient monitoring and adaptive comfort controls.',
      icon: <BedDouble size={28} />,
      color: 'bg-blue-50 text-blue-600',
      tag: 'IoT Ready',
    },
    {
      title: '24/7 Response',
      desc: 'Seamless emergency coordination with real-time ambulance tracking and triage.',
      icon: <Zap size={28} />,
      color: 'bg-amber-50 text-amber-600',
      tag: 'Critical',
    },
    {
      title: 'Advanced NICU',
      desc: 'Specialized care units for newborns with hyper-precise environment management.',
      icon: <HeartPulse size={28} />,
      color: 'bg-rose-50 text-rose-600',
      tag: 'Specialized',
    },
    {
      title: 'Digital Diagnostics',
      desc: 'Instant AI-assisted lab results sent directly to specialized clinical teams.',
      icon: <Microscope size={28} />,
      color: 'bg-indigo-50 text-indigo-600',
      tag: 'AI Powered',
    },
    {
      title: 'Precision ICU',
      desc: 'Critical care data visualization for faster and safer clinical decision making.',
      icon: <Monitor size={28} />,
      color: 'bg-emerald-50 text-emerald-600',
      tag: 'Real-time',
    },
    {
      title: 'Modular OT',
      desc: 'Workflow-optimized operating theaters integrated with MediTrack systems.',
      icon: <Stethoscope size={28} />,
      color: 'bg-violet-50 text-violet-600',
      tag: 'Enterprise',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="features-header text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
            Powerful Features
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Next-Gen Healthcare <br />
            <span className="text-blue-600">Operations Ecosystem</span>
          </h2>

          <p className="text-lg text-slate-600">
            MediTrack Pro bridges the gap between complex data and human care.
            Automate workflows, secure records, and focus on healing.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {features.map((f, i) => (
            <div
              key={i}
              className=" fade-scalefeature-card bg-white p-8 rounded-[2rem] border border-slate-200/60
              shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]
              hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center
                  group-hover:scale-110 group-hover:shadow-lg transition-all`}
                >
                  {f.icon}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border">
                  {f.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>

              <p className="text-slate-600 mb-8">{f.desc}</p>

              <button className="flex items-center gap-2 text-sm font-bold text-blue-600 group/btn">
                Learn More
                <ChevronRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
