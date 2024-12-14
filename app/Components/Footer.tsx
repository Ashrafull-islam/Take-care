import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
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
      <Marquee gradient={false} speed={40} className="bg-gray-100 mt-10">
        <div className="flex items-center">
          {[marquee1, marquee2, marquee3, marquee4, marquee5].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Image ${idx + 1}`}
              width={300}
              height={300}
              className="w-[360px] h-[270px]"
              priority={idx === 0} // Give priority to the first image
            />
          ))}
        </div>
      </Marquee>

      {/* Footer Section */}
      <div className="bg-[#263B3C] text-gray-200">
        <footer className="w-11/12 sm:w-[70%] mx-auto py-8 sm:py-10 flex flex-col md:flex-row md:justify-between gap-8">
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
          <div className="flex flex-col h-[60px] w-full sm:w-auto p-1 bg-white border shadow-md rounded-lg">
            <div className="flex sm:flex-row gap-2 text-black text-[20px]">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="input w-full rounded-md"
              />
              <button className={`${inter.className} px-6 py-2 bg-[#263B3C] text-white rounded-xl text-[18px]`}>
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <p className="font-semibold text-lg">Follow Us</p>
            <div className="flex items-center gap-2">
              <a href="/" className="hover:underline">Instagram</a>
              <FaSquareInstagram className="text-xl" />
            </div>
          </div>
        </footer>

        {/* Footer Bottom */}
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
