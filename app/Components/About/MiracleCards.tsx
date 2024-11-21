import React from 'react'
import {lora} from '@/app/fonts';
import {lexend} from '@/app/fonts';
import Image from 'next/image'
import Card1 from '@/public/about-6.png'
import Card2 from '@/public/about-7.png'
import Card3 from '@/public/about-8.png'
export default function MiracleCards() {

  return (
    <div className="p-4 md:p-10">
        <h2 className={`${lora.className} text-2xl md:text-5xl font-semibold text-center my-2 md:my-20 text-[#263B3C]`}>Path to Parenthood Resources</h2>
      <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1  */}
          <div className="bg-[#E5EEEE] md:w-[400px] rounded-b-ld shadow-md overflow-hidden ">
            <Image
              src={Card2}
              alt='Card image'
              width={400}
              height={285}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xl text-gray-500">Birth stories</p>
              <h2 className={`${lora.className} text-xl md:text-2xl  text-[#263B3C]`}>Celebrating Little Miracles</h2>
              <p className={`${lexend.className}  mt-8 text-[#00000099] text-sm md:text-[20px] font-light`}>Every birth is a testament to the miracles that unfold within our walls. Whether it\'s the joyous arrival of a tiny explorer born in the comfort of a home.</p>
              <p className=" text-gray-500 mt-4 font-semibold">date: '22-04-2023</p>
            </div>
          </div>
        {/* Card 2 */}
        <div className="bg-[#E5EEEE] rounded-b-lg shadow-md md:w-[400px] overflow-hidden ">
            <Image
              src={Card3}
              alt='Card image'
              width={400}
              height={285}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xl text-gray-500">Birth stories</p>
              <h2 className={`${lora.className} text-xl md:text-2xl  text-[#263B3C] mt-2`}>Celebrating Little Miracles</h2>
              <p className={`${lexend.className}  mt-8 text-[#00000099] text-sm md:text-[20px] font-light`}>Every birth is a testament to the miracles that unfold within our walls. Whether it\'s the joyous arrival of a tiny explorer born in the comfort of a home.</p>
              <p className=" text-gray-500 mt-4 font-semibold">date: '22-04-2023</p>
            </div>
          </div>

          {/* card 3  */}
          <div className="bg-[#E5EEEE] rounded-b-lg shadow-md md:w-[400px] overflow-hidden ">
            <Image
              src={Card1}
              alt='Card image'
              width={400}
              height={285}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xl text-gray-500">Birth stories</p>
              <h2 className={`${lora.className} text-xl md:text-2xl  text-[#263B3C] mt-2`}>Celebrating Little Miracles</h2>
              <p className={`${lexend.className}  mt-8 text-[#00000099] text-sm md:text-[20px] font-light`}>Every birth is a testament to the miracles that unfold within our walls. Whether it\'s the joyous arrival of a tiny explorer born in the comfort of a home.</p>
              <p className=" text-gray-500 mt-4 font-semibold ">date: '22-04-2023</p>
            </div>
          </div>
      </div>
    </div>
  )
}