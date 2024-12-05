import Image from "next/image"
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Contact from '@/public/contact.png'
import Link
 from "next/link";
import ConFormMap from "../Components/ContactPage/ConFormMap";
import type { Metadata } from "next";
export const metadata:Metadata={
  title:'Contact page'
}
export default function Page(){
    return (
        <div>
             <div className="relative h-[300px] md:h-[450px]">
  <Image
    alt="Mountains"
    src={Contact}
    placeholder="blur"
    quality={100}
    fill
    style={{
      objectFit: "cover",
      opacity: 1,
    }}
  />
</div>

<div className="absolute inset-0 md:mt-80 text-[#263B3C] md:w-[70%]  md:mx-auto ">
        <div className="md:max-w-[950px] mt-48 md:mt-4  flex flex-col justify-center">
        <h1 className={`${lora.className} text-6xl text-[#000000] md:text-[64px] p-3 font-light leading-10	`}>Contact</h1>
        <div className='flex p-3 md:p-0 text-[16px] text-[#263B3C] leading-6'>
            <p className={`${inter.className} flex gap-2 items-center md:p-6`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${inter.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/'>Contact</Link>
            </p>
        </div>
        </div>
      </div>
      {/* text  */}
      <div className=" mx-auto md:my-1 md:mt-20 md:w-[70%]">
      <div className="md:h-[150px] md:w-[650px] text-[#263B3C] text-center md:text-start">
        <h2 className={`${lora.className} text-center md:text-start text-3xl md:text-5xl p-3 font-light `}>Let us know how can help</h2>
        <p className={`${inter.className} flex gap-2 items-center p-3 text-[#263B3C]`}>Your inquiries are our priority, and we look forward to hearing from you. Connect with us today and let&apos;s make every interaclassNament!</p>
      </div>
      </div>
      {/* form and map  */}
        <div className="my-32">
            <ConFormMap></ConFormMap>
        </div>

        </div>
    )
}