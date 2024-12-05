'use client'
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import { Brain, Users, Lightbulb } from 'lucide-react'
import human from '@/public/Group.png';
import vector from '@/public/body-organ_1713676 1.svg';
import people from '@/public/people_13521987 1.svg';
import Image from 'next/image';
export default function CardForm() {
  return (
    <div className="min-h-auto bg-[#E5EEEE] px-4 md:mb-32 ">
      {/* Features Section */}
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Know Your Options */}
          <div className="rounded-lg p-2 md:p-0 ">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6F3F7] rounded-full flex items-center justify-center mb-4">
                {/* <Lightbulb className="w-8 h-8 text-[#4A90E2]" /> */}
                <Image
                src={human}
                alt='human tag'
                className='h-[65px] w-[50px]'
                >

                </Image>
              </div>
              <h3 className={`${lora.className} text-xl md:text-[32px]  leading-8	  mb-4`}>Know Your Options</h3>
              <p className={`${inter.className} text-gray-600 text-[18px]  leading-7 opacity-80`}>
                Gain the confidence to navigate your birth journey with informed choices, understanding your options for a truly empowered and personalized birthing experience, tailored to your needs and preferences.
              </p>
            </div>
          </div>

          {/* Calm Your Mind */}
          <div className="rounded-lg p-2 md:p-0">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6F3F7] rounded-full flex items-center justify-center mb-4">
               <Image
               src={vector}
               alt='vector image'
               className='h-50px] w-[80px]'
               >

               </Image>
              </div>
              <h3 className={`${lora.className} text-xl md:text-[32px]  leading-8	  mb-4`}>Calm Your Mind</h3>
              <p className={`${inter.className} text-gray-600 text-[18px]  leading-7	opacity-80`}>
                Learn powerful relaxation and stress-management techniques to foster a tranquil, positive birthing environment, minimizing discomfort for both mother and baby, ensuring a positive experience.
              </p>
            </div>
          </div>

          {/* Prepare Your Partner */}
          <div className=" rounded-lg p-2 md:p-0 mb-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6F3F7] rounded-full flex items-center justify-center mb-4">
                <Image
                src={people}
                alt='people image'
                className='h-[80px] w-[45px]'
                ></Image>

              </div>
              <h3 className={`${lora.className} text-xl md:text-[32px] leading-8	  font-semibold mb-4`}>Prepare Your Partner</h3>
              <p className={`${inter.className} text-gray-600 text-[18px]  leading-7 opacity-80`}>
                Equip your support person with the knowledge and tools needed to provide effective support, strengthening your connection and teamwork through the birthing process, for a more unified experience.
              </p>
            </div>
          </div>
        </div>
        <div className='h-[160px] '>

        </div>
        {/* Booking Form Section */}
       {/* <Form></Form> */}
        </div>
      </div>
  )
}