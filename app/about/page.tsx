import Image from 'next/image';
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/fonts';
import {lexend} from '@/app/fonts';
import bgAbout from '@/public/aboutbg.png';
import Link from 'next/link';
import AboutCard from '../Components/About/AboutCards';
import type { Metadata } from 'next';
export const metadata:Metadata={
  title:'About page'
};
export default function Page(){
    return (
        <>
    <div>
    <div className=''>       
    <Image
      alt="Mountains"
      src={bgAbout}
      placeholder="blur"
      quality={100}
    />
        </div>
        <div className="absolute inset-0 mt-80 text-[#263B3C] w-[80%]   mx-auto ">
        <div className="max-w-[950px] -mt-2">
        <h1 className={`${lora.className} text-2xl md:text-7xl p-3 font-light `}>About us</h1>
        <div className='flex gap-2 '>
            <p className={`${lexend.className} flex gap-2 items-center`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${lexend.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/'>About</Link>
            </p>
        </div>
        </div>
      </div>
        </div>
        {/* About card  */}
        <div>
        <AboutCard></AboutCard> 
        </div>
        </>
    )
}