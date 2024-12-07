import Image from "next/image";
import Link from "next/link";
import program2 from '@/public/program2.png'
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Program from '@/public/Program.png'
import Form from "../Components/Home/Form";
import type { Metadata } from "next";
import fakeCard from "@/public/card.json";

export const metadata:Metadata={
  title:'Program page'
}
export default function Page(){
    return(
        <div>
            <div className="relative h-[300px] md:h-[450px]">
  <Image
    alt="Mountains"
    src={Program}
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
        <h1 className={`${lora.className} text-[64px] text-[#000000] md:text-[64px] p-3 font-light leading-10	`}>Program</h1>
        <div className='flex p-5 md:p-0 text-[16px] text-[#263B3C] leading-6'>
            <p className={`${inter.className} flex gap-2 items-center md:p-6`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${inter.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/'>Program</Link>
            </p>
        </div>
        </div>
      </div>
      {/* program card  */}
      <div className="md:w-[70%] mx-auto grid md:grid-cols-2 md:gap-6 p-4 md:p-0 md:my-32 rounded-lg  ">
        {
          fakeCard.map((card)=>(
            <div key={card.id}>
            {/* card 1 */}
            <div className="bg-[#E5EEEE] rounded-b-lg my-2 md:my-0 shadow-md mx-w-full overflow-hidden rounded-lg">
              <div className="">
                <Image
                  src={program2}
                  alt='Card image'
                  // width={300}
                  // height={285}
                  className="w-full h-[300px] object-cover"
                />
                </div>
                <div className="p-4 md:p-8">
                  <h2 className={`${lora.className} text-xl md:text-[##000000] md:text-[35px]  leading-9  text-[#263B3C] mt-2`}>{card.title}</h2>
                  <p className={`${inter.className}  mt-4 text-[#00000099] text-sm md:text-[18px]`}>Docklands, Melbourne</p>
                  <p className={`${inter.className}   mt-2 text-[#00000099] text-sm md:text-[18px]`}>{card.program_includes[1]}</p>
                  <p className={`${inter.className}   mt-2 md:mb-14 text-[#00000099] text-sm md:text-[18px]`}>{card.program_includes[2]}</p>
                  
                  <p className="my-8">
                  <Link href={`/Program/${card.id}`} className="py-5 px-8 bg-[#263B3C] rounded-full text-[#FFFFFF] text-[16px]">Enroll Now</Link>
                 </p>
                 </div>
              </div>
          </div>
          ))
        }
        </div>
           {/* Form  */}
           <div className="md:w-[70%] mx-auto">
            <Form></Form>
          </div>
        </div>
    )
}