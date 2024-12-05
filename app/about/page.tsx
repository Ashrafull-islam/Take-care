import Image from 'next/image';
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import bgAbout from '@/public/aboutbg.png';
import Link from 'next/link';
import AboutCard from '../Components/About/AboutCards';
import BgHome from '@/public/home.png';
import type { Metadata } from 'next';
export const metadata:Metadata={
  title:'About page'
};
export default function Page(){
    return (
        <>
        <div className="relative w-full h-[38vh]  md:h-[600px]">
      {/* Background Image */}
      <div className="relative h-[300px] md:h-[450px]">
  <Image
    alt="Mountains"
    src={bgAbout}
    placeholder="blur"
    quality={100}
    fill
    style={{
      objectFit: "cover",
      opacity: 1,
    }}
  />
</div>


      


      {/* Text Overlay */}
      <div className="absolute inset-0 md:mt-32 text-[#263B3C] md:w-[70%]  md:mx-auto">
      <div className="md:max-w-[950px] mt-20 md:mt-4  flex flex-col justify-center">
        <h1 className={`${lora.className} text-6xl md:text-[64px] p-3 font-light leading-10	`}>About us</h1>
        <div className='flex p-3 md:p-0 text-[16px] leading-6'>
            <p className={`${inter.className} flex gap-2 items-center md:p-6`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${inter.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/'>About</Link>
            </p>
        </div>
        </div>

      </div>
    </div>
        <div className='md:w-[70%] mx-auto'>
        <AboutCard></AboutCard> 
        </div>
        </>
    )
}