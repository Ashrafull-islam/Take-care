import fakeData from "@/public/card.json";
import program2 from '@/public/program2.png'
import Image from "next/image";
import frame from "@/public/Frame.png"
import {lora} from '@/app/layout';
import { FaInstagram } from "react-icons/fa";
import {inter} from '@/app/layout';
import Link from "next/link";
import { PiGreaterThan } from "react-icons/pi";
import { IoHomeSharp } from "react-icons/io5";
import hashi from "@/public/hashi.png"
interface Params {
  id: string;
}

export default function Page({ params }: { params: Params }) {
  const { id } = params; // Extract the id from params
  const cardDetails = fakeData.find((card) => card.id.toString() === id);
const {description,next_session,start_time,location,price,program_includes,title}=cardDetails;
  if (!cardDetails) {
    return <h2>Card not found!</h2>;
  }

  return (
    <div>
                <div>
            <div className="relative h-[300px] md:h-[450px]">
  <Image
    alt="Mountains"
    src={hashi}
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
        <h1 className={`${lora.className} text-[64px] text-[#000000] md:text-[64px] p-3 font-light leading-10	`}>Program Details</h1>
        <div className='flex p-5 md:p-0 text-[16px] text-[#263B3C] leading-6'>
            <p className={`${inter.className} flex gap-2 items-center md:p-6`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${inter.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/Program'>Program Details</Link>
            </p>
        </div>
        </div>
        </div>
      </div>
      {/* card section  */}
    <div className="md:w-[70%] mx-auto md:my-16">
    <div  className="grid md:grid-cols-3 gap-5 rounded-lg">
      <div className="md:col-span-2  rounded-lg">
        <div className="rounded-lg">
            <Image
            src={program2}
            alt="image"
            className="w-full md:h-[450px] md:w-[870px] rounded-lg"
            ></Image>
        </div>
        <h2 className={`${lora.className} text-[#000000] text-[30px] leading-9 mt-12 p-2`}>{title}</h2>
        <p className={`${inter.className} text-[#00000099] text-[18px] leading-7 p-2 mt-3`}>{description}</p>
        <h3 className={`${inter.className} text-[#00000099] text-[20px] leading-8 p-2 font-semibold`}>Program Includes:</h3>
        <div>
        <div className="max-w-[870px] mx-auto px-6 py-4 bg-white  ">
      <ul className="list-disc list-inside space-y-4 text-gray-700">
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">You Get the Practitioner to Yourself:</strong> Enjoy the undivided attention of your 
          experienced practitioner throughout the program, allowing for deep dives into your concerns 
          and customisation of your birth preparation.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Two 6-Hour Sessions:</strong> Split over two days, these sessions are packed with 
          interactive learning, allowing ample time for discussion, practice, and personal attention, 
          ensuring you leave feeling confident and prepared.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`} >
          <strong className="font-semibold leading-5 text-[#00000099]">Positive Birth Program Booklet:</strong> A valuable resource provided during the 
          class to complement your learning and serve as a reference for your birthing journey.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Refreshments:</strong> To ensure you remain comfortable and focused throughout our 
          sessions, refreshments will be provided.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099] `}>
          <strong className="font-semibold leading-5 text-[#00000099]">Affirmation Card Pack:</strong> Receive a specially curated pack of affirmation cards, 
          designed to inspire and empower you throughout your pregnancy and birth journey.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Personalised Essential Oil Blend:</strong> Benefit from a custom-blended essential oil, 
          crafted just for you, to support relaxation and well-being during your birth preparation and beyond.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">App Access:</strong> Gain exclusive access to the app, featuring additional resources, 
          tracks for relaxation, and practical tools to enhance your preparation for a positive birth experience.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Support Person Included:</strong> The program fee includes the participation of a support 
          person, recognizing the importance of their role in the birthing process and ensuring they are equally 
          prepared and informed.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Exclusive Sojourn Products:</strong> Participants receive special Sojourn products designed to 
          support relaxation and positive birth preparation, enhancing your program experience.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Ongoing Support from Your Practitioner:</strong> Beyond the classroom, you'll have continuous 
          access to your practitioner for guidance, ensuring you feel supported every step of the way.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">Extra Small Goodies:</strong> Delight in a selection of carefully chosen extras that make a 
          significant impact on your comfort and readiness for motherhood.
        </li>
        <li className={`${inter.className} text-[16px] leading-7 text-[#00000099]`}>
          <strong className="font-semibold leading-5 text-[#00000099]">One-of-a-Kind Experience:</strong> This program is not just about preparation; it’s an exclusive 
          journey tailored to celebrate and empower your unique path to motherhood.
        </li>
      </ul>

      <p className={`${inter.className} text-[16px] leading-7 text-[#00000099] mt-6`}>
        Embark on your journey to parenthood with Sojourn's Positive Birth Program, where we dedicate 
        ourselves to making your birth experience as positive and empowering as possible.
      </p>
    </div>
            
        </div>
      </div>
      {/* right side div  */}
      <div className="rounded-lg">
      <div className=" rounded-lg min-h-screen flex flex-col items-center">
      {/* Booking Section */}
      <div className="max-w-md w-full bg-white border border-[#263B3C]  shadow-md rounded-lg  mb-8">
        <div className="p-8 rounded-lg ">
        <div className="space-y-4 rounded-lg">
          <div className="flex justify-between">
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>Next Session</span>
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>17 Feb, 2024</span>
          </div>
            <hr className="border-[#000000] opacity-25 my-2" />
          <div className="flex justify-between">
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>Start Time</span>
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>03:00 PM</span>
          </div>
          <hr className="border-[#000000] opacity-25 my-2" />
          <div className="flex justify-between">
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>Location</span>
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>Dublin</span>
          </div>
          <hr className="border-[#000000] opacity-25 my-2" />
          <div className="flex justify-between">
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>Price</span>
            <span className={`${lora.className} font-medium leading-3 text-[14px] text-[#000000]`}>€500</span>
          </div>
          <hr className="border-[#000000] opacity-25 my-2" />
        </div>
        </div>


        <div className="mt-5 text-center bg-[#E5EEEE] p-10 rounded-lg">
            <div className="flex gap-3 items-center justify-center">
            <p className={`${lora.className} font-medium text-[#000000] text-[15px]`}>
            Follow us on{" "}
          </p>
          <FaInstagram className="text-3xl" />
            </div>
         

          <hr className="border-[#000000] opacity-55 my-8" />
          <p className={`${lora.className} font-medium text-[#000000] text-[15px]`}>
            Want to know more details?{" "}
            <span className="underline text-gray-600 cursor-pointer">
              Contact Us
            </span>
          </p>
          <button className={`${lora.className} w-full bg-[#234A42] text-[20px] leading-5 text-[#FFFFFF] py-5 mt-10 rounded-full text-center font-semibold hover:bg-[#1b3a33] transition `}>
          Book Now
        </button>
        </div>

     
      </div>

      {/* Gift Card Section */}
      <div className="max-w-md w-full bg-[#E5EEEE] border-[#263B3C]  shadow-md rounded-lg p-6 border">
        <div className=" mb-4">
          <Image
          src={frame}
          alt="frame"
          >

          </Image>
          <h2 className={`${lora.className} text-[22px] leading-6 mt-5 text-[#000000]`}>Empower a Loved One</h2>
        </div>
        <p className={`${inter.className} text-[14px] text-[#000000] leading-4 my-4`}>
          Surprise someone special with our Positive Birth Program, fostering a
          serene and confident journey into motherhood.{" "}
          <span className="underline text-gray-600 cursor-pointer">
            Contact Us
          </span>{" "}
          for a gift certificate.
        </p>

        <p className={`${inter.className} text-[14px] text-[#000000] leading-4 mt-5`}>
          Gift card sent directly to recipient via email.
        </p>
        <p className={`${inter.className} text-[14px] text-[#000000] leading-4 mb-6`}>
          Recipient & Sender Information
        </p>

        <form className="space-y-4">
          {/* To Section */}
          <div className={`${inter.className} text-[14px] leading-5 text-[#000000]`}>
            <label
              htmlFor="recipient-name"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              To
            </label>
            <input
              type="text"
              id="recipient-name"
              placeholder="Recipient name"
              className="w-full border border-[#000000] rounded-md px-3 py-2 text-gray-700 focus:ring-[#234A42] focus:border-[#234A42] outline-none"
            />
          </div>
          <div className={`${inter.className} text-[14px] leading-5 text-[#000000]`}>
            <input
              type="email"
              placeholder="Recipient email"
              className="w-full border border-[#000000] rounded-md px-3 py-2 text-gray-700 focus:ring-[#234A42] focus:border-[#234A42] outline-none"
            />
          </div>

          {/* From Section */}
          <div className={`${inter.className} text-[14px] leading-5 text-[#000000] `}>
            <label
              htmlFor="sender-name"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              From
            </label>
            <input
              type="text"
              id="sender-name"
              placeholder="Sender name"
              className="w-full border border-[#000000] rounded-md px-3 py-2 text-gray-700 focus:ring-[#234A42] focus:border-[#234A42] outline-none"
            />
          </div>
          <div className={`${inter.className} text-[14px] leading-5 text-[#000000]`}>
            <input
              type="email"
              placeholder="Sender email"
              className="w-full border border-[#000000] rounded-md px-3 py-2 text-gray-700 focus:ring-[#234A42] focus:border-[#234A42] outline-none"
            />
          </div>

          {/* Note Section */}
          <div className={`${inter.className} text-[14px] leading-5 text-[#000000]`}>
            <label
              htmlFor="note"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Note
            </label>
            <textarea
              id="note" 
              rows={3}
              placeholder="Write a note or explain to them how about your plan."
              className="w-full border border-[#000000] rounded-md px-3 py-2 text-gray-700 focus:ring-[#234A42] focus:border-[#234A42] outline-none"
            />
          </div>

          <button className={`${lora.className} w-full bg-[#234A42] text-[20px] leading-5 text-[#FFFFFF] py-5  rounded-full text-center font-semibold hover:bg-[#1b3a33] transition `}>
            Buy now
          </button>
        </form>
      </div>
    </div>
      </div>
    </div>
    </div>
    </div>
  );
}
