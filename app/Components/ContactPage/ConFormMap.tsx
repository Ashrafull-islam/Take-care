'use client'
import Image from 'next/image'
import React from 'react'
import map from '@/public/Map.png'
export default function ConFormMap() {
  return (
    <div className=" md:flex items-center justify-center md:w-10/12 border mx-auto">
      <div className="bg-[#adc9c9]  md:flex">
        <div className="p-8 bg-[#adc9c9] flex-1">
          <h2 className="text-xl font-semibold mb-6">Connect with Our Team</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Text"
              className="w-full p-3 border border-gray-300 rounded h-32"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="p-8 flex-1">
          <h2 className="text-xl font-semibold mb-6">Meet us</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2 text-xl">📞</span>
              <span>Phone number: 1300 362 586</span>
            </li>
            <li className="flex items-center text-xl">
              <span className="mr-2">✉️</span>
              <span>Email: xeno@yourmotherandchild.com</span>
            </li>
            <li className="flex items-center text-xl">
              <span className="mr-2">🏢</span>
              <span>Our office: 727 Collins St, Docklands</span>
            </li>
          </ul>
        </div>
                    {/* map image  */}
                    <div className=' flex-1 '>
      <Image
      src={map}
      alt="Picture of the author"
      className='md:p-3 rounded-lg'
    />
      </div>
      </div>
    </div>
  )
}