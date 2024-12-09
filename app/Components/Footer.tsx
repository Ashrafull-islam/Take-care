import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import React from "react";
import Marquee from "react-fast-marquee";
import marquee1 from "@/public/marquee2.png";
import image from "@/public/navbar.png";
import marquee2 from "@/public/marquee3.png";
import marquee3 from "@/public/marquee4.png";
import marquee4 from "@/public/marquee 5.png";
import marquee5 from "@/public/marquee.png";
import { inter } from "../layout";

export default function Footer() {
  return (
    <div className="mt-24">
      {/* Marquee Section */}
      <div className="mt-10">
        <Marquee gradient={false} speed={40} className="bg-gray-100">
          <div className="flex items-center">
            <Image
              src={marquee1}
              alt="Image 1"
              width={300}
              height={300}
              priority
              className="w-[360px] h-[270px]"     />
            <Image
              src={marquee2}
              alt="Image 2"
              width={300}
              height={300}
              className="w-[360px] h-[270px]"     />
            <Image
              src={marquee3}
              alt="Image 3"
              width={300}
              height={300}
              className="w-[360px] h-[270px]"     />
            <Image
              src={marquee4}
              alt="Image 4"
              width={300}
              height={300}
              className="w-[360px] h-[270px]"     />
            <Image
              src={marquee5}
              alt="Image 5"
              width={300}
              height={300}
              className="w-[360px] h-[270px]"     />
          </div>
        </Marquee>
      </div>

      {/* Footer Section */}
      <div className="bg-[#263B3C]">
        <footer className="w-11/12 sm:w-[70%] mx-auto bg-[#263B3C] text-gray-200 py-8 sm:py-10 md:flex md:flex-row md:justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col md:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <Image
              src={image}
              alt="Footer Logo"
              placeholder="blur"
              className="rounded-full w-16 h-16 md:w-20 md:h-20"
            />
            <p className="opacity-80 font-thin text-sm md:text-base max-w-lg">
              We believe in personalized care, empowering expectant parents
              through every step of their journey. Our team is dedicated to
              providing compassionate care and education.
            </p>
          </div>

          {/* Subscription Form */}
          <div className=" flex-col items-center h-[60px] sm:items-start w-full sm:w-auto p-1 rounded-lg bg-white border shadow-md">
            <div>
            <div className=" flex sm:flex-row gap-2 text-[#000000] text-[20px]">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="input rounded-md w-full"
                  />
                  <button className={`${inter.className} btn px-6 py-2 bg-[#263B3C] rounded-xl text-[18px] text-[#FFFFFF] leading-6`}>
                    Subscribe
                  </button>
                </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-2">
            <p className="font-semibold text-lg">Follow Us</p>
            <div className="flex items-center gap-2">
              <a href="/" className="hover:underline">
                Instagram
              </a>
              <FaSquareInstagram className="text-xl" />
            </div>
          </div>
        </footer>
        <div className="text-white mt-10">
          <hr className="w-[90%] sm:w-[70%] mx-auto border-gray-200" />
          <p className="text-center mt-6 opacity-80 font-thin text-sm">
            © Sojourn 2024, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
