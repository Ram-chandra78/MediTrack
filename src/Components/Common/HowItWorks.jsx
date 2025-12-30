import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray('.step-row');

      steps.forEach((step) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Onboard Your Facility',
      desc: 'Set up departments, staff profiles, and facility infrastructure in minutes with our intuitive wizard.',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      points: ['Departmental Mapping', 'Staff Permissions', 'Resource Allocation'],
    },
    {
      num: '02',
      title: 'Smart Patient Intake',
      desc: 'Streamline patient registration and appointment booking with digital forms and automated notifications.',
      image:
        'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800',
      points: ['QR Code Check-ins', 'Digital Consent', 'AI Triage Queue'],
    },
    {
      num: '03',
      title: 'Optimized Care Delivery',
      desc: 'Real-time updates to medical records, instant pharmacy orders, and coordinated surgical scheduling.',
      image:
        'https://images.unsplash.com/photo-1538108149393-fdfd81895907?auto=format&fit=crop&q=80&w=800',
      points: ['E-Prescriptions', 'Vital Sign Tracking', 'Integrated Billing'],
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            How MediTrack Transforms You
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A modern digital workflow designed to simplify healthcare operations from Day One.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-row flex flex-col ${
                i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-16 lg:gap-24`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg shadow-blue-200">
                  {step.num}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {step.title}
                </h3>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {step.desc}
                </p>

                <ul className="space-y-4">
                  {step.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-slate-800 font-semibold"
                    >
                      <span className="text-blue-600">
                        <CheckCircle size={20} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-1 w-full relative">
                <div className="absolute -inset-4 bg-blue-50 rounded-[2.5rem] -rotate-2 -z-10" />
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
