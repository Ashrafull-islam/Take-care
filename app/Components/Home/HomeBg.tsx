import Image from "next/image";
import BgHome from '@/public/home.png';
import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Link from "next/link";
export default function HomeBg() {
  return (
    <div className="relative w-full h-[38vh]  md:h-[600px]">
      {/* Background Image */}
      <div className="">
  <Image
    alt="Mountains"
    src={BgHome}
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
      <div className="absolute inset-0 md:mt-32 text-[#263B3C] md:w-[70%]   md:mx-auto">
        <div className="max-w-[800px] ">
        <h1 className={`${lora.className} text-3xl  md:text-6xl p-3 leading-10	`}>
  Hypnobirthing Classes for a Calm, Confident Birth
  </h1>
  <p className={`${inter.className} text-[15px] md:text-[20px]   text-[#00000099] my-1	p-3  md:my-6 md:p-4 opacity-90  `}>Our Hypnobirthing classes at Sojourn are founded on the belief that every woman deserves to experience her body fully, and every baby deserves to be received calmly and gently. We empower women for a tranquil birthing experience.</p>
  <p className=" p-3 my-3 md:mt-6 ">
  <Link className="bg-[#263B3C] text-white rounded-full py-6 px-14 my-3 " href="/">Learn more</Link>
  </p>
        </div>

      </div>
    </div>
  );
}
