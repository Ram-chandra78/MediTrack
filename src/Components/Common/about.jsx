import React from 'react'
import FeatureCard from './FeatureCard'
const about = () => {
  return (

    <>

    <section className="bg-[#F5F7FA] py-24">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
        Powerful Features
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-[#263238] leading-tight">
        Built for Modern Healthcare Management
      </h2>

      <p className="mt-5 text-gray-600 text-base">
        MediTrack empowers healthcare providers with intelligent tools to
        streamline operations, enhance patient care, and ensure data security.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

      <FeatureCard
        title="Comprehensive Patient Records"
        description="Centralized digital records including medical history, reports, and treatment plans."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422A12 12 0 0112 21a12 12 0 01-6.16-10.422L12 14z" />
          </svg>
        }
      />

      <FeatureCard
        title="Smart Appointment Scheduling"
        description="Automated scheduling, real-time availability, and patient reminders."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3M4 11h16" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
          </svg>
        }
      />

      <FeatureCard
        title="Advanced Reports & Insights"
        description="Visual analytics and medical insights to support data-driven decisions."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M11 3v18M7 7v10M15 10v7M19 5v14" />
          </svg>
        }
      />

      <FeatureCard
        title="Secure Role-Based Access"
        description="User authentication with roles for doctors, staff, and administrators."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21v-2a6 6 0 0112 0v2" />
          </svg>
        }
      />

      <FeatureCard
        title="Staff & Doctor Management"
        description="Manage healthcare teams, permissions, and productivity efficiently."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
      />

      <FeatureCard
        title="Cloud-Based & Scalable"
        description="Secure cloud infrastructure with seamless access across all devices."
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 15a4 4 0 014-4h1a5 5 0 0110 1h1a3 3 0 010 6H7a4 4 0 01-4-4z" />
          </svg>
        }
      />

    </div>
  </div>
</section>

    </>
  )
}

export default about