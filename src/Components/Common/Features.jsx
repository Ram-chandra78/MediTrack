<<<<<<< HEAD
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
=======
import React from 'react'
import FeatureCard from './FeatureCard'
import {
  FaProcedures,
  FaAmbulance,
  FaBaby,
  FaXRay,
  FaHospital,
  FaStethoscope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaProcedures size={40} className="text-blue-500" />,
    title: "Deluxe Rooms",
    description: "Comfortable and well-equipped deluxe rooms for patients.",
  },
  {
    icon: <FaAmbulance size={40} className="text-red-500" />,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with quick response time.",
  },
  {
    icon: <FaBaby size={40} className="text-pink-500" />,
    title: "NICU",
    description: "Specialized Neonatal Intensive Care Unit for newborns.",
  },
  {
    icon: <FaXRay size={40} className="text-gray-500" />,
    title: "Digital X-Ray",
    description: "Advanced digital X-ray facilities for accurate diagnosis.",
  },
  {
    icon: <FaHospital size={40} className="text-green-500" />,
    title: "ICU",
    description:
      "Intensive Care Unit with state-of-the-art monitoring systems.",
  },
  {
    icon: <FaStethoscope size={40} className="text-purple-500" />,
    title: "Modular OT",
    description: "Modern and fully-equipped modular operation theatres.",
  },
];
const Features = () => {
  return (
    <section className="bg-[#F8F8F8]">
        <div className="xl:max-w-[1320px] mx-auto px-3 text-center lg:pb-[100px] lg:-mt-16 pb-16 py-20" >
          {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block mb-3 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
        Powerful Features

      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-[#263238]">
        Built for Modern Healthcare Management
      </h2>

      <p className="mt-4 text-gray-600">
        MediTrack empowers healthcare providers with intelligent tools to streamline operations, enhance patient care, and ensure data security.
      </p>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition transform hover:scale-[0.98] cursor-pointer"
              >
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features
>>>>>>> 67192c1109c039bea1e81e4b41830e968f2c422f
