import React from "react";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief of Medicine",
      content: "MediTrack has improved our workflow efficiency by 40%.",
      image: "https://picsum.photos/200?1",
    },
    {
      name: "Mark Henderson",
      role: "Hospital Administrator",
      content: "Secure, fast, and extremely reliable healthcare platform.",
      image: "https://picsum.photos/200?2",
    },
    {
      name: "Julia Chen",
      role: "Head Nurse",
      content: "Updating vitals in real-time is a game changer.",
      image: "https://picsum.photos/200?3",
    },
    {
      name: "Dr. Rahul Verma",
      role: "Cardiologist",
      content: "The dashboard gives instant clarity for decisions.",
      image: "https://picsum.photos/200?4",
    },
    {
      name: "Anita Gomez",
      role: "Operations Manager",
      content: "Reduced paperwork and staff overload significantly.",
      image: "https://picsum.photos/200?5",
    },
    {
      name: "Dr. John Lee",
      role: "Emergency Specialist",
      content: "Critical response coordination is now seamless.",
      image: "https://picsum.photos/200?6",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-slate-600">
            Real feedback from real medical teams using MediTrack
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-3xl shadow-md h-full mx-w-md mx-auto">
                <div className="flex text-amber-400 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  “{rev.content}”
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{rev.name}</h4>
                    <p className="text-sm text-slate-500">{rev.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
