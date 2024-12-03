
'use client'
import React from "react";
import {lora} from '@/app/layout';
import { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='md:w-10/12 mx-auto md:px-40 '>

    <div className="min-h-auto  bg-[#E5EEEE] flex items-center justify-center px-4 my-10 p-10 rounded-lg">
      <div className="w-full max-w-4xl">
        <h1 className={`${lora.className} text-[#1A3344] w-[400px] mx-auto text-2xl md:text-3xl font-semibold text-center mb-8`}>
          Book Your Program and Secure Your Spot Today
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent placeholder-gray-400"
              required
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent placeholder-gray-400"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent text-gray-600"
                required
              >
                <option value="">Select program</option>
                <option value="basic">Basic Program</option>
                <option value="standard">Standard Program</option>
                <option value="premium">Premium Program</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#2D5A27] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#234620] transition-colors duration-200 shadow-sm"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}