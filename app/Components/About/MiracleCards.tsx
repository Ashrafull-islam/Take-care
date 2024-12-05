import React from 'react'
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Image from 'next/image'
import Card1 from '@/public/about-6.png'
import Card2 from '@/public/about-7.png'
import Card3 from '@/public/about-8.png'
export default function MiracleCards() {

  return (
    <div className="p-4 md:p-0">
        <h2 className={`${lora.className} text-2xl md:text-[39px] leading-9	 font-semibold text-center my-5  text-[#263B3C]`}>Path to Parenthood Resources</h2>
      <div className="grid md:grid-cols-3 gap-10 my-8">
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
              <p className="text-[14px] leading-5 text-[#000000B2]">Birth stories</p>
              <h2 className={`${lora.className} text-xl md:text-[25px] leading-7	  text-[#000000] mt-2`}>Celebrating Little Miracles</h2>
              <p className={`${inter.className}  mt-8 text-[#00000099] text-sm md:text-[14px] leading-6	`}>Every birth is a testament to the miracles that unfold within our walls. Whether it&apos;s the joyous arrival of a tiny explorer born in the comfort of a home.</p>
              <p className=" text-[#000000B2] text-[14px] leading-5 mt-4 font-semibold">date: &apos;22-04-2023</p>
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
              <p className="text-[14px] leading-5	 text-[#000000B2]">Birth stories</p>
              <h2 className={`${lora.className} text-xl md:text-[25px] leading-7	  text-[#000000] mt-2`}>Celebrating Little Miracles</h2>
              <p className={`${inter.className}  mt-8 text-[#00000099] text-sm md:text-[14px] leading-6`}>Every birth is a testament to the miracles that unfold within our walls. Whether it&apos;s the joyous arrival of a tiny explorer born in the comfort of a home.</p>
              <p className=" text-[#000000B2] text-[14px] leading-5 mt-4 font-semibold">date: &apos; 22-04-2023</p>
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
              <p className="text-[14px] leading-5	 text-[#000000B2]">Birth stories</p>
              <h2 className={`${lora.className} text-xl md:text-[25px] leading-7	  text-[#000000] mt-2`}>Celebrating Little Miracles</h2>
              <p className={`${inter.className}  mt-8 text-[#00000099] text-sm md:text-[14px] leading-6`}>Every birth is a testament to the miracles that unfold within our walls. Whether it&apos;s the joyous arrival of a tiny explorer born in the comfort of a home.</p>
              <p className=" text-[#000000B2] text-[14px] leading-5	 mt-4 font-semibold ">date: &apos;22-04-2023</p>
            </div>
          </div>
      </div>
    </div>
  )
}