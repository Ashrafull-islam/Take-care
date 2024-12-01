// 'use client';
import { IoHomeSharp } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import {lora} from '@/app/fonts/page';
import {inter} from '@/app/fonts/page';
// import { useState } from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import details1 from '@/public/details1.png'
import details2 from '@/public/details.png'
import vector from '@/public/Vector.png'
import Link from "next/link";
export default function BirthProgram() {

  return (
    <div>
    {/* bg image section  */}
    <div>
    <div className="h-[300px] w-full relative">
  <Image
    alt="Contact-img"
    src={details1}
    placeholder="blur" 
    quality={100} 
    fill 
    style={{ objectFit: 'cover' }} 
  />
</div>
<div className="absolute inset-0 mt-96 md:mt-64 text-[#263B3C] w-[80%]   mx-auto">
        <div className="max-w-[950px] -mt-2">
        <h1 className={`${lora.className} text-center md:text-start text-3xl md:text-7xl p-3 font-light `}>Program Details</h1>
        <div className='flex gap-2 justify-center md:justify-start md:p-6'>
            <p className={`${inter.className} flex gap-2 items-center`}>
            <IoHomeSharp />
            <Link href="/">Home</Link>
            </p>
            <p className={`${inter.className} flex gap-1 items-center`}>
            <PiGreaterThan />
            <Link href='/'>Program Details</Link>
            </p>
        </div>
        </div>
      </div>
</div>
    {/* column sections  */}
    <div className="container mx-auto px-4 md:w-10/12 md:py-8 font-serif md:my-20">
      <div className="md:grid md:grid-cols-3 md:gap-4">
        {/* Left Column */}
        <div className="space-y-8 col-span-2">
          <div className="rounded-3xl overflow-hidden bg-gray-100">
            <Image
            src={details2}
            alt="details image"
            >

            </Image>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl">1 on 1 Positive Birth Program</h1>

            <p className={`${inter.className} flex gap-2 items-center font-light p-3 text-[#263B3C]`}>
              The Positive Birth Program will leave you feeling ready and equipped for your journey ahead. It combines pregnancy/childbirth education with HypnoBirthing tools and practices to give you a thorough and complete understanding of what you need to birth your baby with confidence and positivity. Having other pregnant women in the room to learn and practice with, means that you will experience a safe and supportive space, with plenty of room for laughter and lots of tears (of joy of course!). Book your spot in TODAY to avoid disappointment.
            </p>

            <div className="space-y-6">
              <h2 className="text-xl font-medium">Program Includes:</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">You Get the Practitioner to Yourself:</h3>
                  <p className={`${inter.className} flex gap-2 items-center font-light p-3 text-[#263B3C]`}>Enjoy the undivided attention of your experienced practitioner throughout the program, allowing for deep dives into your concerns and customisation of your birth preparation.</p>
                </div>

                <div>
                  <h3 className="font-medium">Two 6-Hour Sessions:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>Split over two days, these sessions are packed with interactive learning, allowing ample time for discussion, practice, and personal attention, ensuring you leave feeling confident and prepared.</p>
                </div>

                <div>
                  <h3 className="font-medium">Positive Birth Program Booklet:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>A valuable resource provided during the class to complement your learning and serve as a reference for your bi-lightg journey.</p>
                </div>

                <div>
                  <h3 className="font-medium">Refreshments:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>To ensure you remain comfortable and focused throughout our sessions, refreshments will be provided.</p>
                </div>

                <div>
                  <h3 className="font-medium">Affirmation Card Pack:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>Receive a specially curated pack of affirmation cards, designed to inspire and empower you throughout your pregnancy and birth journey.</p>
                </div>

                <div>
                  <h3 className="font-medium">Personalised Essential Oil Blend:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>Benefit from a custom-blended essential oil, crafted just for you, to support relaxation and well-being during your birth preparation and beyond.</p>
                </div>

                <div>
                  <h3 className="font-medium">Support Person Included:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}> The program fee includes the participation of a support person, recognizing the importance of their role in the birthing process and ensuring they are equally prepared and informed.</p>
                </div>

                <div>
                  <h3 className="font-medium">App Access:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>Gain exclusive access to the HypnoBirthing app, filled with meditations, relaxation, and practical tools to enhance your pregnancy and birth experience.</p>
                </div>

                <div>
                  <h3 className="font-medium">Exclusive Sojourn Products:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}> Participants receive special Sojourn products designed to support relaxation and positive birth preparation, enhancing your program experience.</p>
                </div>

                <div>
                  <h3 className="font-medium">Ongoing Support from Your Practitioner:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}> Beyond the classroom, you&apos;ll have continuous access to your practitioner for guidance, ensuring you feel supported every step of the way.</p>
                </div>

                <div>
                  <h3 className="font-medium">Extra Small Goodies: </h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>Delight in a selection of carefully chosen extras that make a significant impact on your comfort and readiness for motherhood.</p>
                </div>

                <div>
                  <h3 className="font-medium">One-of-a-Kind Experience:</h3>
                  <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}> This program is not just about preparation; it&apos;s an exclusive journey tailored to celebrate and empower your unique path to motherhood.</p>
                </div>
                <div>
                    <p className={`${inter.className} flex gap-2 items-center p-3 font-light text-[#263B3C]`}>Embark on your journey to parenthood with Sojourn&apos;s Positive Birth Program, where we dedicate ourselves to making your birth experience as positive and empowering as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 md:px-4 md::py-6">
          <div className="card bg-base-100 shadow-xl border-2 border-gray-600 p-6">
            <div className="card-body space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Next Session</span>
                <span>17 March</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Start Time</span>
                <span>10:00 PM</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Location</span>
                <span>OnlineAUS</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price</span>
                <span>$650</span>
              </div>
              <div className="divider"></div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span>Follow us on</span>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Want to know more details? Contact Us
                </a>
              </div>

              <button className="btn btn-block rounded-3xl bg-[#2F4F4F] hover:bg-[#1e3333] text-white">
                Book Now
              </button>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl p-6">
            <div className="card-body space-y-6">
              <div className=" items-center gap-4 mb-6">
                <div className="p-3 rounded-lg">
                  <Image
                  src={vector}
                  alt="vector icon"
                  height={80}
                  width={80}
                  >

                  </Image>
                </div>
                <div>
                  <h3 className="font-medium md:text-2xl">Empower a Loved One</h3>
                  <p className="text-sm text-gray-600 mt-2">Support someone special with a gift certificate. Birth support, birthing classes or a pregnancy journey into motherhood. Sign up for a gift certificate.</p>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <h4 className="font-medium md:text-xl mb-2">Gift card sent directly to recipient via email.</h4>
                  <h5 className="text-sm font-medium mb-4">Recipient & Sender Information</h5>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">To</label>
                      <input type="text" placeholder="Recipient name" className="input input-bordered w-full" />
                      <input type="email" placeholder="Recipient email" className="input input-bordered w-full mt-2" />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">From</label>
                      <input type="text" placeholder="Sender name" className="input input-bordered w-full" />
                      <input type="email" placeholder="Sender email" className="input input-bordered w-full mt-2" />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Note</label>
                      <textarea
                        placeholder="Write a note to your recipient (this information does not print)"
                        className="textarea textarea-bordered w-full h-24"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button className="btn btn-block bg-[#2F4F4F] hover:bg-[#1e3333] text-white">
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
