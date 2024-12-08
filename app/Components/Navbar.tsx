"use client"; // This tells Next.js that the file is a client component

import { useState, useEffect } from "react";
import image from "@/public/navbar.png";
import Link from "next/link";
import Image from "next/image";
import BookModal from "./BookModal/page";
import { inter } from "@/app/layout";


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <li>
        <Link className={`${inter.className} text-[15px] leading-6 font-normal `} href="/">Home</Link>
      </li>
      <li>
        <Link className={`${inter.className} text-[15px] leading-6 font-normal`} href="/about">About</Link>
      </li>
      <li>
        <Link className={`${inter.className} text-[15px] leading-6 font-normal`} href="/contacts">Contact</Link>
      </li>
      <li>
        <Link className={`${inter.className} text-[15px] leading-6 font-normal`} href="/Program">Program</Link>
      </li>
    </>
  );

  return (

<div className="bg-[#FFFFFF] md:w-[72%] mx-auto">
  <div
    className={`font-playfair-bold text-xl ${
      isScrolled
        ? "w-full bg-[#FFFFFF] shadow-lg fixed top-0 left-0 z-50 md:px-[258px]"
        : "shadow-none"
    } ${inter.className}`}
  >
      <div className="navbar bg-base-100 ">
        <div className="navbar-start w-full ">
          <div className="flex flex-row-reverse justify-between w-full items-center">
          <div className="dropdown">
            
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 h-[1000vh]  -ml-[360px] p-2 
                shadow ${inter.className} text-2xl font-semibold`}
            >
              {links}
            </ul>
          </div>
          <Image
            className="sm:h-[83px] w-[82px] rounded-full md:rounded-full md:h-[83px] md:w-[82px]"
            alt="logo-image"
            src={image}
          />
        </div>
        </div>

        <div className={`navbar-center hidden lg:flex ${inter.className} font-bold`}>
          <ul className={`menu menu-horizontal px-1`}>
            {links}
            <li className="bg-[#263B3C] text-white rounded-full px-4 -mt-1 ml-8 font-bold">
              {/* The button to open modal */}
              <label htmlFor="my_modal_6" className={`${inter.className} text-[15px] leading-6 font-bold px-4 py-3`}>
                Book Now
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="">
                  <BookModal></BookModal>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
