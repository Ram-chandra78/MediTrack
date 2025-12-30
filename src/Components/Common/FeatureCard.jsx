import React from 'react'

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#F5F7FA] p-8 rounded-2xl hover:shadow-md transition ">
      <div className="w-12 text-white h-12 flex items-center justify-center rounded-lg bg-gray-400 text-white mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
};


export default FeatureCard