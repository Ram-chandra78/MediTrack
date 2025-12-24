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