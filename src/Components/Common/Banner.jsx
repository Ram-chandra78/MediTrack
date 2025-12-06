import React from 'react'
import banner from '../../../public/banner/banner.png'

const Banner = () => {
  return (
    <>
    <div className="main bg-[#F5F7FA]">
         <div className="max-w-7xl mx-auto px-10 py-8 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between">

      <div>
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
          Smart Healthcare Solution
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-[#263238] leading-tight">
          Track. Manage. Improve <br />
          <span className="text-blue-600">Patient Care</span> with MediTrack
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          MediTrack helps hospitals, clinics, and doctors manage patients,
          appointments, and medical records with accuracy, security, and ease.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            Explore
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
            Book a Demo
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-blue-100 rounded-2xl blur-2xl w-xl justify-center"></div>

        <img
          src={banner}
          alt="MediTrack Healthcare Dashboard"
          className="relative rounded-2xl shadow-lg  h-dvh mx-auto"
        />
      </div>

    </div>
  </div>
    </div>
    </>
  )
}

export default Banner