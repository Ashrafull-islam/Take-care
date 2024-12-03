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
        <div className="md:flex md:p-28 md:gap-10  md:h-[834px]">
          {/* Image Container */}
          <div className="md:relative md:w-[3500px] md:h-[850px] md:mx-auto">
            <Image
              className="rounded-3xl"
              src={booksLady}
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text Section */}
          <div>
            <h2  className={`${lora.className} text-2xl  text-center mb-8 text-[#263B3C] md:text-start my-2 md:my-0 md:text-5xl`}>Meet Your Practitioner</h2>
            <p className={`${inter.className} p-4 md:p-0 my-1 md:my-6 text-[14px] md:text-[18px] opacity-70`}>
              As a mother of four and a Hypnobirthing Australia certified practitioner, I've
              personally witnessed the transformative power of a positive birthing experience.
              My passion is fuelled by a desire to ensure every woman has access to the
              knowledge and support needed for a fulfilling birth, drawing from my own diverse
              experiences across the spectrum of childbirth.
            </p>
            <p className={`${inter.className} p-4 md:p-0 my-1 md:my-6 text-[14px] md:text-[18px] opacity-70`}>
              I leverage my skills and experience to make Hypnobirthing accessible to all
              women, aiming to empower them to understand and embrace the principles of the
              Positive Birth Program.
            </p>
            <p className={`${inter.className} p-4 md:p-0 my-1 md:mb-6 text-[14px] md:text-[18px] opacity-70`}>
              I believe in the right of every woman to fully experience her body and for every
              baby to enter the world in a calm and gentle manner.
            </p>
            <p className={`${inter.className} p-4 md:p-0 text-center md:text-start text-[14px] md:text-[18px] opacity-70`}>Your Birth Guide.</p>
            <p className={`${inter.className} p-4 md:p-0 text-[14px] text-center md:text-start md:mb-10 md:text-[18px] opacity-70`}>Zena Kreidli</p>

            
            <Link 
        className="bg-[#263B3C] hidden md:inline-block text-white rounded-full px-8 py-5 mx-auto" 
     href="/"
        >
    Learn More
        </Link>
      
          </div>
        </div>
        {/* faq section  */}
        <Faq></Faq>
        {/* card section  */}
        <CardForm></CardForm>
      </div>
    </div>
  );
}
