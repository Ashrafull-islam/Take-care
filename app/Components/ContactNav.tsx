import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function ContactNav(){

    return(
        <div className="bg-[#263B3C] p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-[90%] md:max-w-[80%] mx-auto text-white font-playfair-normal">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-20 mb-4 sm:mb-0">
            <p className="flex items-center justify-center sm:justify-start gap-1">
              <MdEmail className="text-xl sm:text-2xl" />
              <Link href='mailto:zena@sojournmotherandchild.com'>
              <span className="text-sm sm:text-base">zena@sojournmotherandchild.com</span>
              </Link>
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-1">
              <FaPhoneAlt className="text-lg sm:text-xl" />
              <Link href='tel:+6131300362586'>
              <span className="text-sm sm:text-base">1300 362 586</span>
              </Link>
            </p>
          </div>
          <div>
            <p className="flex items-center justify-center sm:justify-start gap-1">
              <Link href='https://www.facebook.com/yourprofile'>
              <span className="text-sm sm:text-base">FOLLOW US</span>
              </Link>
              <FaInstagram className="text-xl sm:text-2xl" />
            </p>
          </div>
        </div>
      </div>
    )
}