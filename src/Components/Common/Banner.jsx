import React from "react";
import banner from "../../../public/banner/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#F5F7FA] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
              Smart Healthcare Solution
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] leading-tight">
              Track. Manage. Improve <br />
              <span className="text-blue-600">Patient Care</span> with MediTrack
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              MediTrack helps hospitals, clinics, and doctors manage patients,
              appointments, and medical records with accuracy, security, and ease.
            </p>
            <p className=" text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              By centralizing healthcare operations into one intelligent platform, MediTrack reduces administrative workload, improves workflow efficiency, and enables medical professionals to focus more on patient care rather than paperwork
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                Explore
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition">
                Book a Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* Glow background */}
            <div className="absolute -inset-6 bg-blue-100 rounded-2xl blur-3xl"></div>

            <img
              src={banner}
              alt="MediTrack Healthcare Dashboard"
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
