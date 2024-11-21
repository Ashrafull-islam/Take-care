import Image from "next/image";
import BgHome from '@/public/home.png';
import {lora} from '@/app/fonts';
import {lexend} from '@/app/fonts';
import Link from "next/link";
export default function HomeBg() {
  return (
    <div className="relative w-full h-[30vh]  md:h-[600px]">
      {/* Background Image */}
      
      <Image
        alt="Mountains"
        src={BgHome}
        placeholder="blur"
        quality={100}
        fill
        style={{ objectFit: 'cover',
          opacity: 0.8,
         }}
      />
      


      {/* Text Overlay */}
      <div className="absolute inset-0 md:mt-32 text-[#263B3C] w-[80%]   mx-auto">
        <div className="max-w-[950px] ">
        <h1 className={`${lora.className} text-2xl md:text-7xl p-3 font-light	 tracking-wide  leading-relaxed`}>
  Hypnobirthing Classes for a Calm, Confident Birth
  </h1>
  <p className={`${lexend.className} text-[12px]   md:text-xl	 md:my-6 md:p-4 font-light	 opacity-90  `}>Our Hypnobirthing classes at Sojourn are founded on the belief that every woman deserves to experience her body fully, and every baby deserves to be received calmly and gently. We empower women for a tranquil birthing experience.</p>
  <p className="mt-6">
  <Link className="bg-[#263B3C] text-white rounded-full py-4 px-8 my-3 " href="/">Learn more</Link>
  </p>
        </div>

      </div>
    </div>
  );
}
