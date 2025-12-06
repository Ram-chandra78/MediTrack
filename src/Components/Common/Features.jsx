import React from 'react'
import FeatureCard from './FeatureCard'
const Features = () => {
  return (
    <div className='bg-white py-20'>

     <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block mb-3 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
        Features
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-[#263238]">
        Everything You Need to Manage Healthcare Efficiently
      </h2>

      <p className="mt-4 text-gray-600">
        MediTrack brings all essential healthcare operations into one secure,
        intelligent platform.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

      {/* Feature Card */}
      <FeatureCard
        title="Patient Management"
        description="Securely manage patient profiles, medical history, and treatment records."
        icon={
          <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22.102 11.147v1.731h-20.198v-6.206h-1.904v12.414h1.904v-2.837h20.198v3.074h1.898v-8.178z"/><path d="m8.709 11.165v.001c0 .564-.457 1.022-1.022 1.022h-.001-3.892-.001c-.564 0-1.022-.457-1.022-1.022v-.001-.001c0-.564.457-1.022 1.022-1.022h.001 3.892.001c.564 0 1.022.457 1.022 1.022z"/><path d="m19.743 7.164h-2.37v-2.364h-1.68v2.365h-2.365v1.68h2.364v2.365h1.68v-2.365h2.37z"/></svg>
        }
      />

      <FeatureCard
        title="Appointment Scheduling"
        description="Automated appointment booking, reminders, and smart scheduling."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </svg>
        }
      />

      <FeatureCard
        title="Reports & Analytics"
        description="Data-driven insights and reports to improve patient outcomes."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M11 3v18M7 7v10M15 10v7M19 5v14" />
          </svg>
        }
      />

      <FeatureCard
        title="Secure Access Control"
        description="Role-based authentication ensuring data security and compliance."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 11c2.761 0 5-2.239 5-5S14.761 1 12 1 7 3.239 7 6s2.239 5 5 5z" />
            <path d="M4 22v-2a6 6 0 0112 0v2" />
          </svg>
        }
      />

      <FeatureCard
        title="Doctor & Staff Management"
        description="Manage staff roles, permissions, and performance efficiently."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
      />

      <FeatureCard
        title="Cloud-Based Platform"
        description="Access MediTrack securely anytime, anywhere with cloud technology."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 15a4 4 0 014-4h1a5 5 0 0110 1h1a3 3 0 010 6H7a4 4 0 01-4-4z" />
          </svg>
        }
      />

    </div>
  </div>
</section>

    </div>
  )
}

export default Features