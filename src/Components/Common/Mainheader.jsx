import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../public/logo/logo.png'
const Mainheader = () => {
  return (
    <>
    <div className="flex justify-between items-center xl:max-w-[1293px] mx-auto px-4 py-3 bg-white shadow-lg sticky top-0 z-[1000] w-full">
        <div className="logo flex items-center gap-3 ">
          <img src={logo} alt="" srcset="" className='h-3 w-auto sm:h-10 md:h-15'/>
        </div>
        <div className="">
            <div className="left">
               <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
             <a href="#" className="text-[#1E88E5] hover:text-[#26A69A]">Home</a>
          <a href="#" className="text-[#1E88E5]">About Us</a>
          <a href="#" className="text-[#1E88E5]">Specialties</a>
          <a href="#" className="text-[#1E88E5]">Find Docter</a>
          <a href="#" className="text-[#1E88E5]">Patients</a>
          <a href="#" className="text-[#1E88E5]">Contact</a>
          <a href="#" className="text-white py-3 px-5 rounded bg-[#1E88E5]">Book Appointments</a>
        </nav>


        
            </div>

        </div>
    </div>
    </>
  )
}

export default Mainheader