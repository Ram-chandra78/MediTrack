import { useEffect, useRef } from 'react';

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const stats = gsap.utils.toArray('.stat-item');

        gsap.from(stats, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          clearProps: 'all',
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  const data = [
    { label: 'Recoveries', value: '1.2M+' },
    { label: 'Facilities', value: '450+' },
    { label: 'Availability', value: '99.9%' },
    { label: 'Security', value: 'HIPAA' },
  ];

  return (
    <section
      ref={containerRef}
      className="py-16 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, idx) => (
            <div key={idx} className="stat-item text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-2">
                {item.value}
              </h3>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
