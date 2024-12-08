import booksLady from '@/public/ladyBooks.png';
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Link from 'next/link';
import Image from "next/image";
import Faq from './Faq';
import CardForm from './CardForm';

export default function FaQHome() {
  return (
    <div className="bg-[#E5EEEE] text-[#263B3C]">
      <div className="md:w-10/12 mx-auto">
        <div className="md:flex md:flex-row-reverse md:p-28 md:gap-10 justify-center  md:h-[834px]">

          {/* Text Section */}
          <div className=' md:h-auto'>
            <h2  className={`${lora.className} text-2xl p-4  mb-8 text-[#263B3C] text-start my-2 md:my-0 md:text-[48px] leading-9`}>Meet Your Practitioner</h2>
            <p className={`${inter.className} p-4 md:p-0 my-0 md:my-6 text-[14px] md:text-[18px] opacity-70 leading-8	`}>
              As a mother of four and a Hypnobirthing Australia certified practitioner, I've
              personally witnessed the transformative power of a positive birthing experience.
              My passion is fuelled by a desire to ensure every woman has access to the
              knowledge and support needed for a fulfilling birth, drawing from my own diverse
              experiences across the spectrum of childbirth.
            </p>
            <p className={`${inter.className} p-4 md:p-0 my-1 md:my-4 text-[14px] md:text-[18px] opacity-70`}>
              I leverage my skills and experience to make Hypnobirthing accessible to all
              women, aiming to empower them to understand and embrace the principles of the
              Positive Birth Program.
            </p>
            <p className={`${inter.className} p-4 md:p-0 my-1 md:mb-6 text-[14px] md:text-[18px] opacity-70`}>
              I believe in the right of every woman to fully experience her body and for every
              baby to enter the world in a calm and gentle manner.
            </p>
            <p className={`${inter.className} p-4 md:p-0  md:text-start text-[14px] md:text-[18px] opacity-70`}>Your Birth Guide.</p>
            <p className={`${inter.className} p-4 md:p-0 text-[14px] md:text-start md:mb-4 md:text-[18px] opacity-70`}>Zena Kreidli</p>

            <p className='p-3 md:p-0'>
            <Link 
        className="bg-[#263B3C] text-sm md:text-xl   md:inline-block text-white rounded-full px-8 py-4 mx-auto" 
     href="/"
        >
    Learn More
        </Link>
            </p>

      
          </div>
         {/* Image Container */}
         {/* <div className="p-3 my-2 md:relative md:w-auto md:h-auto md:mx-auto border"> */}
            <Image
              className="rounded-3xl"
              src={booksLady}
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          {/* </div> */}

        </div>
        {/* faq section  */}
        <div className='md:px-24'>
        <Faq></Faq>
        </div>
        {/* card section  */}
        <div className='w-[91%] mx-auto md:px-5'>
        <CardForm></CardForm>
        </div>
      </div>
    </div>
  );
}
