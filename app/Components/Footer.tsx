import Image from "next/image";
import footerimg from "@/public/footer.png";
import { FaSquareInstagram } from "react-icons/fa6";
import React from "react";
import Marquee from "react-fast-marquee";
import marquee1 from '@/public/marquee2.png';
import marquee2 from '@/public/marquee3.png';
import marquee3 from '@/public/marquee4.png';
import marquee4 from '@/public/marquee 5.png';
import marquee5 from '@/public/marquee.png';

export default function Footer() {
  return (
    <div className="mt-24">
        {/* marquee  */}
        
        <div>
        <div className="mt-10">
      <Marquee gradient={false} speed={50} className="bg-gray-100 py-4">
      <div className="flex gap-8 items-center">
          <Image
            src={marquee1}
            alt="Image 1"
            width={300}
            height={300}
            priority // Marks this as a high-priority image (for LCP optimization)
            className="rounded-lg w-auto h-auto" // Ensures proper aspect ratio
          />
          <Image
            src={marquee2}
            alt="Image 2"
            width={300}
            height={300}
            className="rounded-lg w-auto h-auto"
          />
          <Image
            src={marquee3}
            alt="Image 3"
            width={300}
            height={300}
            className="rounded-lg w-auto h-auto"
          />
          <Image
            src={marquee4}
            alt="Image 4"
            width={300}
            height={300}
            className="rounded-lg w-auto h-auto"
          />

        <Image
            src={marquee5}
            alt="Image 4"
            width={300}
            height={300}
            className="rounded-lg w-auto h-auto"
          />
        </div>
      </Marquee>
    </div>
    </div>
        
      {/* Footer Section */}
      <div className="bg-[#263B3C] ">
        <footer className="footer w-11/12 sm:w-9/12 mx-auto bg-[#263B3C] text-gray-200 p-8 sm:p-10 flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0">
          {/* Logo and Description */}
          <div className="flex  items-center justify-center sm:items-start text-center sm:text-left gap-4">
            {/* Logo */}
            <Image
              src={footerimg}
              alt="Footer Logo"
              placeholder="blur"
              className="rounded-full w-20 h-20 sm:w-auto"
            />
            {/* Description */}
            <div className="md:w-[600px]">
            <h6 className="opacity-80 font-thin text-sm leading-relaxed sm:leading-normal max-w-xs sm:max-w-md">
              We believe in personalized care, empowering expectant parents
              through every step of their journey. Our team is dedicated to
              providing compassionate care and education.
            </h6>
            </div>

          </div>

          {/* Subscription Form */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
            <fieldset className="form-control w-full max-w-xs">
              <div className="join flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="input input-bordered join-item px-4 py-2"
                />
                <button className="btn btn-primary join-item px-6 py-2">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col justify-center mx-auto items-center sm:items-start text-center sm:text-left gap-2">
            <p className="font-semibold text-lg">Follow Us</p>
            <div className="flex items-center gap-2">
              <a href="/" className="hover:underline">
                Instagram
              </a>
              <FaSquareInstagram className="text-xl" />
            </div>
          </div>         
        </footer>
        
      </div>
    </div>
  );
}
