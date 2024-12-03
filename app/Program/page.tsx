import Image from "next/image";
import Link from "next/link";
import program1 from '@/public/program1.png'
import program2 from '@/public/program2.png'
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Program from '@/public/Program.png'
import Form from "../Components/Home/Form";
import type { Metadata } from "next";
export const metadata:Metadata={
  title:'Program page'
}
export default function Page(){
    return(
        <div>
            <div className="h-[300px] w-full relative">
  <Image
    alt="Contact-img"
    src={Program}
    placeholder="blur" 
    quality={100} 
    fill 
    style={{ objectFit: 'cover' }} 
  />
</div>

<div className="absolute inset-0 mt-96 md:mt-64 text-[#263B3C] w-[80%]   mx-auto ">
        <div className="max-w-[950px] -mt-2">
        <h1 className={`${lora.className} text-center md:text-start text-3xl md:text-7xl p-3 font-light `}>Programs</h1>
        <div className='flex gap-2 justify-center md:justify-start md:p-6 '>
            <p className={`${inter.className} flex gap-2 items-center`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${inter.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/program_details'>Programs</Link>
            </p>
        </div>
        </div>
      </div>
      {/* program card  */}
      <div className="md:w-10/12 mx-auto grid md:grid-cols-2 md:gap-8 p-2 md:p-10 rounded-lg">
        {/* card 1 */}
        <div className="bg-[#E5EEEE] rounded-b-lg shadow-md w-full overflow-hidden rounded-lg">
            <Image
              src={program1}
              alt='Card image'
              width={400}
              height={285}
              className="w-full h-[390px] object-cover rounded-lg"
            />
            <div className="p-4">
              <h2 className={`${lora.className} text-xl md:text-3xl  text-[#263B3C] mt-2`}>Group Positive Birth Program</h2>
              <p className={`${inter.className}  mt-4 text-[#00000099] text-sm md:text-[20px] font-light`}>Join Sojourn’s Group Positive Birth Program to share and learn in a communal setting. This 12-hour course fosters a supportive environment where parents-to-be can connect, share experiences, and learn together. It includes all program benefits like the Positive Birth Program Booklet, online resources, and continuous practitioner support, enhancing your journey.</p>
              <p className="my-8">
             <Link className="py-3 px-6 bg-[#263B3C] rounded-full text-white " href='#'>Enroll Now</Link>
             </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#E5EEEE] rounded-b-lg shadow-md w-full overflow-hidden rounded-lg">
            <Image
              src={program2}
              alt='Card image'
              width={400}
              height={285}
              className="w-full  object-cover h-[390px] rounded-lg"
            />
            <div className="p-4">
              <h2 className={`${lora.className} text-xl md:text-3xl  text-[#263B3C] mt-2`}>1 on 1 Positive Birth Program</h2>
              <p className={`${inter.className}  mt-4 text-[#00000099] text-sm md:text-[20px] font-light`}>Sojourn’s One-on-One Positive Birth Program offers personalized guidance for parents-to-be, focusing on intimate, tailored sessions over 12 hours. This version ensures dedicated attention to your unique birthing preferences and questions, providing all the benefits of the comprehensive program, including digital resources and ongoing support, in a private setting.</p>
             <p className="my-8">
             <Link className="py-3 px-6 bg-[#263B3C] rounded-full text-white " href='#'>Enroll Now</Link>
             </p>
            </div>
          </div>
      </div>
           {/* Form  */}
           <div>
            <Form></Form>
          </div>
        </div>
    )
}