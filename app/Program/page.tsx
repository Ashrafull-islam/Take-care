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
        <h1 className={`${lora.className} text-6xl text-[#000000] md:text-[64px] p-3 font-light leading-10	`}>Program</h1>
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
      <div className="md:w-[70%] mx-auto grid md:grid-cols-2 md:gap-8 p-4 md:p-0 md:my-32 rounded-lg">
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
              <h2 className={`${lora.className} text-xl md:text-[##000000] text-[36px] leading-8  text-[#263B3C] mt-2`}>Group Positive Birth Program</h2>
              <p className={`${inter.className}  mt-4 text-[#00000099] text-sm md:text-[18px]`}>Join Sojourn’s Group Positive Birth Program to share and learn in a communal setting. This 12-hour course fosters a supportive environment where parents-to-be can connect, share experiences, and learn together. It includes all program benefits like the Positive Birth Program Booklet, online resources, and continuous practitioner support, enhancing your journey.</p>
              <p className="my-8">
             <Link className="py-5 px-8 bg-[#263B3C] rounded-full text-white " href='#'>Enroll Now</Link>
             </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#E5EEEE] rounded-b-lg shadow-md w-full overflow-hidden rounded-lg my-8 md:my-0">
            <Image
              src={program2}
              alt='Card image'
              width={400}
              height={285}
              className="w-full  object-cover h-[390px] rounded-lg"
            />
            <div className="p-4">
              <h2 className={`${lora.className} text-xl md:text-[36px]  text-[##000000] mt-2`}>1 on 1 Positive Birth Program</h2>
              <p className={`${inter.className}  mt-4 text-[#00000099] text-sm md:text-[18px]`}>Sojourn’s One-on-One Positive Birth Program offers personalized guidance for parents-to-be, focusing on intimate, tailored sessions over 12 hours. This version ensures dedicated attention to your unique birthing preferences and questions, providing all the benefits of the comprehensive program, including digital resources and ongoing support, in a private setting.</p>
             <p className="my-8">
             <Link className="py-5 px-8 bg-[#263B3C] rounded-full text-white " href='#'>Enroll Now</Link>
             </p>
            </div>
          </div>
      </div>
           {/* Form  */}
           <div className="md:w-[70%] mx-auto">
            <Form></Form>
          </div>
        </div>
    )
}