'use client'
import {lora} from '@/app/fonts';
import {lexend} from '@/app/fonts';
import { Brain, Users, Lightbulb } from 'lucide-react'

export default function CardForm() {
  return (
    <div className="min-h-auto bg-[#E5EEEE] py-12 px-4 md:mb-32">
      {/* Features Section */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Know Your Options */}
          <div className="rounded-lg p-6 ">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6F3F7] rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <h3 className={`${lora.className} text-xl font-semibold mb-4`}>Know Your Options</h3>
              <p className={`${lexend.className} text-gray-600 text-sm opacity-80`}>
                Gain the confidence to navigate your birth journey with informed choices, understanding your options for a truly empowered and personalized birthing experience, tailored to your needs and preferences.
              </p>
            </div>
          </div>

          {/* Calm Your Mind */}
          <div className="rounded-lg p-6 ">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6F3F7] rounded-full flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <h3 className={`${lora.className} text-xl font-semibold mb-4`}>Calm Your Mind</h3>
              <p className={`${lexend.className} text-gray-600 text-sm opacity-80`}>
                Learn powerful relaxation and stress-management techniques to foster a tranquil, positive birthing environment, minimizing discomfort for both mother and baby, ensuring a positive experience.
              </p>
            </div>
          </div>

          {/* Prepare Your Partner */}
          <div className=" rounded-lg p-6 ">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6F3F7] rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <h3 className={`${lora.className} text-xl font-semibold mb-4`}>Prepare Your Partner</h3>
              <p className={`${lexend.className} text-gray-600 text-sm opacity-80`}>
                Equip your support person with the knowledge and tools needed to provide effective support, strengthening your connection and teamwork through the birthing process, for a more unified experience.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
       {/* <Form></Form> */}
        </div>
      </div>
  )
}