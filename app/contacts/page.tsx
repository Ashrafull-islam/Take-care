import Image from "next/image"
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/fonts';
import {lexend} from '@/app/fonts';
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
            <div className="h-[300px] w-full relative">
  <Image
    alt="Contact-img"
    src={Contact}
    placeholder="blur" 
    quality={100} 
    fill 
    style={{ objectFit: 'cover' }} 
  />
</div>

<div className="absolute inset-0 mt-96 md:mt-64 text-[#263B3C] w-[80%]   mx-auto ">
        <div className="max-w-[950px] -mt-2">
        <h1 className={`${lora.className} text-center md:text-start text-3xl md:text-7xl p-3 font-light `}>Contact</h1>
        <div className='flex gap-2 justify-center md:justify-start md:p-6'>
            <p className={`${lexend.className} flex gap-2 items-center`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${lexend.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/'>Contact</Link>
            </p>
        </div>
        </div>
      </div>
      {/* text  */}
      <div className="md:w-10/12  mx-auto md:my-1 md:mt-20">
      <div className="md:h-[150px] md:w-[650px] text-[#263B3C] text-center md:text-start">
        <h2 className={`${lora.className} text-center md:text-start text-3xl md:text-5xl p-3 font-light `}>Let us know how can help</h2>
        <p className={`${lexend.className} flex gap-2 items-center p-3 text-[#263B3C]`}>Your inquiries are our priority, and we look forward to hearing from you. Connect with us today and let's make every interaction count!</p>
      </div>
      </div>
      {/* form and map  */}
        <div>
            <ConFormMap></ConFormMap>
        </div>

        </div>
    )
}