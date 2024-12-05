'use client'
import Image from 'next/image'
import React from 'react'
import {lora} from '@/app/layout';
import vactor from '@/public/Vector.png'
import vactor1 from '@/public/Vector (1).png'
import vector2 from '@/public/ajira.png'
export default function ConFormMap() {
  return (
    <div className=" md:flex items-center justify-center md:w-10/12 border mx-auto rounded-lg md:md:w-[70%]">
      <div className="bg-[#E5EEEE]  md:flex">
        <div className="p-8 bg-[#E5EEEE] flex-1">
          <h2 className={`${lora.className} text-xl font-semibold mb-6 text-[#000000] md:text-[24px] leading-5 text-center`}>Connect with Our Team</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-[#000000] rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-[#000000] rounded-lg"
            />
            <textarea
              placeholder="Your Text"
              className="w-full p-3 border border-[#000000] rounded-lg h-32"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#263B3C]  text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="p-8 flex-1">
          <h2 className={`${lora.className} text-[24px] text-[#000000] leading-5 font-semibold mb-6`}>Meet us</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2 text-xl">
                <Image
                src={vactor}
                alt='vactor'
                >
                </Image>
              </span>
              <div>
              <span className={`${lora.className} text-[16px] text-[#000000] leading-6	`}>Phone number: </span>
              <p className={`text-[14px] leading-5 text-[#000000]`}>1300 362 586</p>
              </div>
            </li>
            <li className="flex items-center text-xl">
              <span className="mr-2">
              <Image
                src={vactor1}
                alt='vactor'
                >
                </Image>
              </span>
              <div>
              <span className={`${lora.className} text-[16px] text-[#000000] leading-6	`}>Email: </span>
              <p className={`text-[14px] leading-5 text-[#000000]`}>xeno@yourmotherandchild.com</p>
              </div>
            </li>
            <li className="flex items-center text-xl">
              <span className="mr-2">
              <Image
                src={vector2}
                alt='vactor'
                >
                </Image>
              </span>
              <div>
              <span className={`${lora.className} text-[16px] text-[#000000] leading-6	`}>Our office: </span>
              <p className={`text-[14px] leading-5 text-[#000000]`}>727 Collins St, Docklands</p>
              </div>
            </li>
          </ul>
        </div>
                    {/* map image  */}
                    <div className="flex-1">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084899963194!2d-122.42067958468103!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b8df3651%3A0x8ad6cc8359f4ae8a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1691765227242!5m2!1sen!2s"
    width="100%"
    height="450"
    style={{
      border: 0,
      borderRadius: "12px",
    }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>

      </div>
    </div>
  )
}